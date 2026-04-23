"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteBanner, siteExamples, siteUi } from "@/data/site";

type DemoItem = (typeof siteExamples.demos)[number];

const buildWhatsappLink = (demoName: string) => {
  const message = siteExamples.whatsappMessageTemplate.replace(
    "{demoName}",
    demoName,
  );
  return `https://wa.me/${siteBanner.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export function Examples() {
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);

  useEffect(() => {
    if (!activeDemo) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDemo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeDemo]);

  return (
    <Section
      id={siteExamples.sectionId}
      className="border-slate-800/80 bg-slate-900 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          {siteExamples.label}
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {siteExamples.title}
        </h2>
        <p className="mt-5 text-pretty text-base text-slate-300 md:text-lg">
          {siteExamples.subtitle}
        </p>
        <p className="mt-3 text-sm text-slate-400 md:text-base">
          {siteExamples.secondarySubtitle}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {siteExamples.demos.map((demo) => (
          <Card
            key={demo.href}
            role="button"
            tabIndex={0}
            onClick={() => setActiveDemo(demo)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveDemo(demo);
              }
            }}
            className="group cursor-pointer overflow-hidden border border-slate-800 bg-slate-900/70 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_20px_40px_rgba(15,23,42,0.65)]"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={demo.image}
                alt={`${siteExamples.imageAltPrefix} ${demo.category}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  {demo.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {demo.name}
                </h3>
              </div>
            </div>

            <div className="space-y-5 px-5 pb-5 pt-4">
              <p className="text-sm text-slate-300">{demo.shortDescription}</p>

              <ul className="space-y-2 text-sm text-slate-200">
                {demo.features.map((feature) => (
                  <li key={`${demo.name}-${feature}`} className="flex gap-2">
                    <span className="text-cyan-300">{siteUi.listBullet}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-1">
                <Button
                  asChild
                  className="w-full bg-fuchsia-700 hover:bg-fuchsia-950"
                  size="sm"
                >
                  <Link
                    href={demo.href}
                    onClick={(event) => event.stopPropagation()}
                  >
                    {siteExamples.buttons.viewDemo}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className="w-full bg-indigo-700 hover:bg-indigo-950"
                >
                  <a
                    href={buildWhatsappLink(demo.name)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {siteExamples.buttons.quoteSimilar}
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-cyan-400/30 bg-linear-to-r from-cyan-500/12 to-blue-500/12 p-8 text-center shadow-[0_16px_50px_rgba(15,23,42,0.45)]">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          {siteExamples.cta.title}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          {siteExamples.cta.description}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-6 min-w-64 text-base bg-cyan-600 hover:bg-cyan-700"
        >
          <a href={siteBanner.whatsappUrl} target="_blank" rel="noreferrer">
            {siteExamples.cta.buttonLabel}
          </a>
        </Button>
      </div>

      {activeDemo ? (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center bg-slate-950/75 p-4 md:items-center"
          onClick={() => setActiveDemo(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={activeDemo.image}
                alt={activeDemo.name}
                fill
                sizes="(min-width: 768px) 700px, 100vw"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/50 to-slate-950/10" />
              <button
                type="button"
                onClick={() => setActiveDemo(null)}
                className="absolute right-3 top-3 rounded-md bg-slate-950/70 px-2.5 py-1 text-sm text-slate-100 transition hover:bg-slate-800"
                aria-label={siteExamples.modal.closeLabel}
              >
                {siteExamples.modal.closeText}
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  {activeDemo.category}
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  {activeDemo.name}
                </p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-slate-300">{activeDemo.longDescription}</p>

              <ul className="space-y-2 text-sm text-slate-200">
                {activeDemo.features.map((feature) => (
                  <li key={`modal-${activeDemo.name}-${feature}`}>
                    {siteUi.listBullet} {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button asChild className="flex-1">
                  <Link href={activeDemo.href}>
                    {siteExamples.buttons.openDemo}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={buildWhatsappLink(activeDemo.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteExamples.buttons.quoteWhatsapp}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
