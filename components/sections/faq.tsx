import { siteFaq } from "@/data/site";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

export function Faq() {
  return (
    <Section
      id={siteFaq.sectionId}
      className="border-slate-800/80 bg-slate-900 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          {siteFaq.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-100 md:text-4xl">
          {siteFaq.title}
        </h2>
        <p className="mt-4 text-slate-300/90">
          {siteFaq.subtitle}
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2">
        {siteFaq.items.map((faq) => (
          <Card
            key={faq.question}
            className="rounded-lg border border-cyan-400/50 bg-slate-900/60 p-6"
          >
            <h3 className="text-base font-semibold text-slate-100">
              {faq.question}
            </h3>
            <p className="mt-2 text-sm text-slate-300/85">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
