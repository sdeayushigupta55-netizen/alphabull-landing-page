import Button from "@/components/Button";
import { FadeUp, HoverLift } from "@/components/Motion";
import { Section, SectionHeader } from "@/components/Section";

export const metadata = {
  title: "Courses",
};

const plans = [
  { name: "Basic & Adv.", price: 110, cap: "10 Pair/Day" },
  { name: "Adv. Pro", price: 220, cap: "20 Pair/Day" },
  { name: "SMC", price: 330, cap: "30 Pair/Day" },
  { name: "Time Frame", price: 440, cap: "40 Pair/Day" },
  { name: "Liquidity", price: 550, cap: "50 Pair/Day" },
  { name: "Bias Theory", price: 660, cap: "60 Pair/Day" },
  { name: "ICT", price: 770, cap: "70 Pair/Day" },
];

export default function CoursesPage() {
  return (
    <main>
      <Section tone="b">
        <FadeUp>
          <SectionHeader
            kicker="Our Plans"
            title="Choose your learning package"
            desc="Note: Previous purchased package is adjusted in the next package. Example: If you purchased Basic & Adv ($110) and want SMC ($330), you pay only $220."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <FadeUp key={p.name} delay={0.04 * i}>
              <HoverLift>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300/70">
                        Matching Cap: <span className="font-semibold">{p.cap}</span>
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gold-200/70 px-3 py-2 text-slate-900 font-semibold dark:bg-gold-400/15 dark:text-gold-200">
                      ${p.price}
                    </div>
                  </div>

                  <div className="mt-6 h-px bg-black/10 dark:bg-white/10" />

                  <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300/80">
                    <li>• Live classes + revision support</li>
                    <li>• Trading system development</li>
                    <li>• Psychology + execution checklist</li>
                    <li>• Premium analysis community</li>
                  </ul>

                  <div className="mt-6">
                    <Button href="/contact" variant="primary" className="w-full">
                      Enroll / Ask on WhatsApp
                    </Button>
                  </div>
                </div>
              </HoverLift>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section tone="c">
        <FadeUp>
          <SectionHeader
            kicker="Upgrade Rule"
            title="Previous package adjusts in next upgrade"
            desc="Example: Basic & Adv ($110) → Upgrade to SMC ($330) → Pay only $220."
          />
        </FadeUp>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Pay only the difference", "No confusion", "Easy upgrade"].map((t) => (
              <div key={t} className="rounded-2xl border border-black/10 bg-black/5 p-5 dark:border-white/10 dark:bg-black/20">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                  Upgrade smoothly as your knowledge grows.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
