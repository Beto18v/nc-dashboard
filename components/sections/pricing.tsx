import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronDown } from "lucide-react";
import { siteBanner, sitePricing } from "@/data/site";

function getWhatsAppUrl(text: string) {
  return `https://wa.me/${siteBanner.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function getPlanWhatsAppUrl(planName: string) {
  return `${sitePricing.whatsappBaseUrl}${encodeURIComponent(planName)}`;
}

export function Pricing() {
  return (
    <Section
      id={sitePricing.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          {sitePricing.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-100 md:text-4xl">
          {sitePricing.title}
        </h2>
        <p className="mt-4 text-slate-300/90">{sitePricing.subtitle}</p>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {sitePricing.packages.map((plan) => (
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
                {sitePricing.cardLabels.featuredBadge}
              </div>
            )}

            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {plan.featured
                  ? sitePricing.cardLabels.featured
                  : sitePricing.cardLabels.default}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-bold text-slate-100">
                {plan.price}
              </p>
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
                  {sitePricing.buttonText}
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-400">
        {sitePricing.footerText}
      </p>

      <div className="mt-8 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-5 py-4 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.16)]">
        <p className="text-sm font-medium text-cyan-100">
          {sitePricing.guaranteeText}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-100 text-center">
          {sitePricing.comparison.title}
        </h3>
        <p className="mt-3 text-center text-slate-400">
          {sitePricing.comparison.subtitle}
        </p>

        <div className="mt-6 rounded-lg border border-slate-800/80 bg-slate-900/60 p-5 md:p-6">
          <div className="grid grid-cols-4 border-b border-slate-800 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>{sitePricing.comparison.includedLabel}</span>
            {sitePricing.packages.map((plan) => (
              <span
                key={plan.name}
                className={`text-center ${plan.featured ? "text-cyan-200" : ""}`}
              >
                {plan.name}
              </span>
            ))}
          </div>

          <div className="mt-3 space-y-2">
            {sitePricing.comparison.rows.map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-4 items-center rounded-md px-2 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800/50"
              >
                <span className="pr-3">{row.item}</span>
                {sitePricing.packages.map((plan, packageIndex) => (
                  <span
                    key={`${row.item}-${plan.name}`}
                    className={`text-center ${plan.featured ? "text-cyan-200" : ""}`}
                  >
                    {row.included[packageIndex]
                      ? sitePricing.comparison.positiveLabel
                      : sitePricing.comparison.negativeLabel}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-100 text-center">
          {sitePricing.optionalExtras.title}
        </h3>
        <p className="mt-3 text-center text-slate-400">
          {sitePricing.optionalExtras.subtitle}
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {sitePricing.optionalExtras.items.map((extra, idx) => (
            <details
              key={extra.name}
              className="group overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/65 transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)]"
            >
              <summary
                className="flex w-full cursor-pointer list-none items-center justify-between px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                aria-controls={`extra-panel-${idx}`}
              >
                <div className="flex flex-1 items-center gap-3">
                  <span
                    className="mb-1 text-xl leading-none"
                    aria-hidden="true"
                  >
                    {extra.icon}
                  </span>
                  <div className="flex-1 text-center">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-200/90">
                      {sitePricing.optionalExtras.itemLabel}
                    </p>
                    <h4 className="text-lg font-semibold text-slate-100">
                      {extra.name}
                    </h4>
                  </div>
                </div>
                <span className="ml-4 text-cyan-400 transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="h-6 w-6" />
                </span>
              </summary>

              <div id={`extra-panel-${idx}`} className="px-6 pb-6">
                <p className="mt-2 text-sm text-slate-300/90">
                  {extra.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {extra.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm text-slate-300/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-cyan-100">
                  {extra.price}
                </p>
                <div className="mt-4">
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="bg-green-600 border-b-green-800 hover:bg-amber-500 hover:border-b-amber-900"
                  >
                    <Link
                      href={getWhatsAppUrl(
                        sitePricing.optionalExtras.whatsappTextTemplate.replace(
                          "{extraName}",
                          extra.name,
                        ),
                      )}
                    >
                      {sitePricing.optionalExtras.buttonText}
                    </Link>
                  </Button>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-cyan-400/35 bg-slate-900/80 p-7 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_18px_40px_rgba(34,211,238,0.12)]">
        <p className="text-lg font-semibold text-slate-100">
          {sitePricing.advisoryCta.title}
        </p>
        <p className="mt-2 text-sm text-slate-300/85">
          {sitePricing.advisoryCta.description}
        </p>
        <div className="mt-5">
          <Button asChild className="px-7">
            <Link href={getWhatsAppUrl(sitePricing.advisoryCta.whatsappText)}>
              {sitePricing.advisoryCta.buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
