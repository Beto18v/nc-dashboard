import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { siteBanner, sitePlans } from "@/data/site";

function getWhatsAppUrl(text: string) {
  return `https://wa.me/${siteBanner.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function getPlanWhatsAppUrl(planName: string) {
  return `${sitePlans.whatsappBaseUrl}${encodeURIComponent(`Quiero el plan ${planName} para mi negocio.`)}`;
}

export function Plans() {
  return (
    <Section
      id={sitePlans.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          {sitePlans.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-100 md:text-4xl">
          {sitePlans.title}
        </h2>
        <p className="mt-4 text-slate-300/90">{sitePlans.subtitle}</p>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {sitePlans.packages.map((plan) => (
          <Card
            key={plan.name}
            className={`group relative flex h-full flex-col rounded-lg border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] ${
              plan.featured
                ? "border-cyan-400/60 bg-slate-900/80 shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_20px_40px_rgba(34,211,238,0.2)] scale-[1.02]"
                : "border-slate-800/80 bg-slate-900/60"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur">
                {sitePlans.cardLabels.featuredBadge}
              </div>
            )}

            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {plan.featured
                  ? sitePlans.cardLabels.featured
                  : sitePlans.cardLabels.default}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">
                {plan.name}
              </h3>
              <p className="mt-4 text-sm text-slate-300/90">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm text-slate-300/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="w-full"
              >
                <Link href={getPlanWhatsAppUrl(plan.name)}>
                  {sitePlans.buttonText}
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-400">
        {sitePlans.footerText}
      </p>

      <div className="mt-8 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-5 py-4 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.16)]">
        <p className="text-sm font-medium text-cyan-100">
          {sitePlans.guaranteeText}
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-cyan-400/35 bg-slate-900/80 p-7 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_18px_40px_rgba(34,211,238,0.12)]">
        <p className="text-lg font-semibold text-slate-100">
          {sitePlans.advisoryCta.title}
        </p>
        <p className="mt-2 text-sm text-slate-300/85">
          {sitePlans.advisoryCta.description}
        </p>
        <div className="mt-5">
          <Button asChild className="px-7">
            <Link href={getWhatsAppUrl(sitePlans.advisoryCta.whatsappText)}>
              {sitePlans.advisoryCta.buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
