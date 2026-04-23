import { siteProcess } from "@/data/site";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export function Process() {
  return (
    <Section
      id={siteProcess.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          {siteProcess.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-100 md:text-4xl">
          {siteProcess.title}
        </h2>
        <p className="mt-4 text-slate-300/80">{siteProcess.subtitle}</p>
      </div>

      <div className="mt-16 w-full">
        <div className="relative flex flex-col md:flex-row items-stretch md:items-start justify-center gap-8 md:gap-8 w-full">
          {/* Línea horizontal central solo en md+ */}
          <div
            className="hidden md:block absolute left-0 right-0 top-6 h-1 bg-cyan-400/20 z-0"
            style={{ zIndex: 0 }}
          />
          {siteProcess.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center flex-1 min-w-0 mb-8 md:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400/80 text-slate-900 font-bold text-lg border-4 border-slate-950 shadow-lg z-10">
                  {step.number}
                </div>
                <span className="mt-2 text-sm font-semibold text-cyan-200">
                  {siteProcess.stepLabelPrefix} {step.number}
                </span>
              </div>
              <Card className="w-full mt-4 border border-slate-800/80 bg-slate-900/60 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-100 text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/80 leading-relaxed text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-base text-cyan-200 rounded-lg inline-block px-4 py-2 shadow-sm">
          {siteProcess.footerText}
        </p>
      </div>
    </Section>
  );
}
