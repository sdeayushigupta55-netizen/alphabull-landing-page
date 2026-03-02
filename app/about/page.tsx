import { Section, SectionHeader } from "@/components/Section";
import { FadeUp } from "@/components/Motion";
import Button from "@/components/Button";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <Section tone="b">
        <FadeUp>
          <SectionHeader
            kicker="About AlphaBull"
            title="A learning hub for disciplined traders"
            desc="AlphaBull Trading Academy is built for the young generation who are keen on making more, willing to step forward, and want to be free from financial limitations — with a structured, simplified approach."
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeUp>
            <div className="rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">Our mission</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300/80 leading-relaxed">
                Trading is often considered a business that is not suitable for
                everyone — but this is a hoax. We clear that by focusing on
                teaching long-tested strategies that have proven to be
                profitable, along with risk management and psychology.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-300/80 leading-relaxed">
                We keep things to-the-point: understand the market, identify the
                setup, manage the risk, execute, and review.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-semibold">What makes us different</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300/80">
                <li>• Beginner-friendly roadmap from scratch</li>
                <li>• Revision classes to reinforce learning</li>
                <li>• Live Q/A for direct clarity</li>
                <li>• Psychology + system development focus</li>
                <li>• Community support and premium analysis</li>
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button href="/courses" variant="primary">
                  View Courses
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      <Section tone="c">
        <FadeUp>
          <SectionHeader
            kicker="Learning philosophy"
            title="Simple rules, repeated practice"
            desc="We focus on repeatable setups and clean execution. The goal is consistency — not hype."
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Market Basics", "Setup Identification", "Risk Management", "Execution", "Review & Journal", "Discipline"].map(
            (t, i) => (
              <FadeUp key={t} delay={0.04 * i}>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <h4 className="font-semibold">{t}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                    A clear step in our training flow to help you build skills
                    confidently.
                  </p>
                </div>
              </FadeUp>
            )
          )}
        </div>
      </Section>
    </main>
  );
}
