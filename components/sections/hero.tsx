"use client";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ResponsiveDeviceMorph } from "@/components/ui/devices";
import { siteHero, companyName } from "@/data/site";

import { ArrowRight } from "lucide-react";
import {
  MdSmartToy,
  MdWhatsapp,
  MdAttachMoney,
  MdFlashOn,
} from "react-icons/md";

export function Hero() {
  return (
    <Section
      id={siteHero.sectionId}
      className="mt-18 md:mt-12 border-slate-800/80 bg-slate-950 text-slate-100 bg-[radial-gradient(1200px_circle_at_top,rgba(56,189,248,0.1),transparent_60%)] scroll-mt-28"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div className="max-w-3xl md:mt-10">
          <div>
            <h1 className="hero-fade-in text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-100 leading-tight tracking-tight text-balance">
              {(() => {
                const parts = siteHero.title.split(companyName);
                return (
                  <>
                    {parts[0]}
                    <span
                      className="bg-linear-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(56,189,248,0.7)] font-extrabold"
                      style={{
                        WebkitTextStroke: "1px rgba(56,189,248,0.25)",
                        filter:
                          "drop-shadow(0 0 8px #7c3aed) drop-shadow(0 0 16px #38bdf8)",
                      }}
                    >
                      {companyName}
                    </span>
                    {parts[1]}
                  </>
                );
              })()}
            </h1>
            <p
              className="hero-fade-in mt-6 text-lg md:text-xl text-slate-300/80 leading-relaxed max-w-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              {siteHero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              >
                <a href={siteHero.cta.primary.href}>
                  {siteHero.cta.primary.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-600 hover:bg-slate-100/60 hover:text-slate-100"
              >
                <a href={siteHero.cta.secondary.href}>
                  {siteHero.cta.secondary.label}
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {siteHero.disclaimer.map((item, idx) => (
                <span
                  key={idx}
                  className="hero-fade-chip text-xs md:text-sm text-cyan-400 bg-slate-800/60 rounded-full px-3 py-1 border border-cyan-500/30 shadow-sm font-medium"
                  style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:pt-10">
          <ResponsiveDeviceMorph
            containerClassName="w-full sm:max-w-sm lg:max-w-130"
            height={480}
          />
        </div>
      </div>

      {/* Stats or Trust Indicators */}
      <div className="mt-20 pt-10 border-t border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {siteHero.stats.map((stat, idx) => {
            const icons = {
              MdSmartToy: MdSmartToy,
              MdWhatsapp: MdWhatsapp,
              MdAttachMoney: MdAttachMoney,
              MdFlashOn: MdFlashOn,
            };
            const IconComponent = icons[stat.icon as keyof typeof icons];
            return (
              <div
                key={idx}
                className="group bg-slate-900/70 border border-slate-700 rounded-xl p-5 flex flex-col items-center text-center shadow-md transition-all duration-200 hover:scale-105 hover:border-cyan-400/70 hover:bg-slate-800/80 cursor-pointer"
              >
                <span className="text-3xl md:text-4xl mb-2 transition-colors group-hover:text-cyan-400">
                  {IconComponent && <IconComponent />}
                </span>
                <p className="font-semibold text-base md:text-lg text-slate-100 group-hover:text-cyan-300">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hero-fade-in {
          opacity: 0;
          animation: heroFadeInUp 0.7s ease-out forwards;
        }

        .hero-fade-chip {
          opacity: 0;
          animation: heroFadeInSoft 0.55s ease-out forwards;
        }

        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeInSoft {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-in,
          .hero-fade-chip {
            opacity: 1;
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </Section>
  );
}
