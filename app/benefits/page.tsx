import { FadeUp, HoverLift } from "@/components/Motion";
import { Section, SectionHeader } from "@/components/Section";
import Button from "@/components/Button";

export const metadata = {
  title: "Benefits",
};

const items = [
  {
    title: "Revision Classes",
    desc: "300+ revision classes to cover anything you miss in live class.",
  },
  {
    title: "5 Star Trading Setup",
    desc: "A clear setup model with rules for entry, SL, and target planning.",
  },
  {
    title: "Trading System Development",
    desc: "Build your own system using templates, rules, and journaling.",
  },
  {
    title: "Trading Psychology",
    desc: "Control emotions, avoid overtrading, and stay disciplined.",
  },
  {
    title: "Ultimate Trader’s Checklist",
    desc: "Step-by-step checklist to execute trades like a professional.",
  },
  {
    title: "Premium Analysis Community",
    desc: "Community updates and market analysis to keep you aligned.",
  },
];

export default function BenefitsPage() {
  return (
    <main>
      <Section tone="b">
        <FadeUp>
          <SectionHeader
            kicker="Benefits"
            title="Designed for consistent results"
            desc="Your course includes structure + revision + psychology — so you learn, practice and execute confidently."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((x, i) => (
            <FadeUp key={x.title} delay={0.04 * i}>
              <HoverLift>
                <div className="h-full rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold-500" />
                    <h3 className="text-lg font-semibold">{x.title}</h3>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300/80 leading-relaxed">
                    {x.desc}
                  </p>
                </div>
              </HoverLift>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/courses" variant="primary">
            View Plans
          </Button>
        </div>
      </Section>

      <Section tone="c">
        <FadeUp>
          <SectionHeader
            kicker="Support"
            title="You will never be left behind"
            desc="Miss a class? Revise. Have a doubt? Ask in live Q/A. Want clarity? Use the WhatsApp bot."
          />
        </FadeUp>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Live Q/A", "Revision", "Community"].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-black/10 bg-black/5 p-5 dark:border-white/10 dark:bg-black/20"
              >
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                  Structured support to keep your learning on track.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
