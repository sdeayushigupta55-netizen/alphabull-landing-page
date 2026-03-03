import Image from "next/image";
import Link from "next/link";
import { FadeUp, HoverLift } from "@/components/Motion";
import { Section, SectionHeader } from "@/components/Section";
import Button from "@/components/Button";

// const benefits = [
//   {
//     title: "Learn From Scratch",
//     desc: "Build foundations: market basics, how price moves, and the rules of risk.",
//   },
//   {
//     title: "300+ Revision Classes",
//     desc: "Missed something in live class? Revise anytime and never fall behind.",
//   },
//   {
//     title: "Live Q/A Sessions",
//     desc: "Get direct clarity on your doubts with interactive live Q/A sessions.",
//   },
//   {
//     title: "Trading Psychology",
//     desc: "Develop discipline, patience, and consistency — the real edge in trading.",
//   },
//   {
//     title: "System Development",
//     desc: "Turn setups into a repeatable system with checklists and execution rules.",
//   },
//   {
//     title: "Premium Community",
//     desc: "Stay aligned with analysis, updates, and a focused learning community.",
//   },
// ];

// const plans = [
//   { name: "Basic & Adv.", price: 110, cap: "10 Pair/Day" },
//   { name: "Adv. Pro", price: 220, cap: "20 Pair/Day" },
//   { name: "SMC", price: 330, cap: "30 Pair/Day" },
//   { name: "Time Frame", price: 440, cap: "40 Pair/Day" },
//   { name: "Liquidity", price: 550, cap: "50 Pair/Day" },
//   { name: "Bias Theory", price: 660, cap: "60 Pair/Day" },
//   { name: "ICT", price: 770, cap: "70 Pair/Day" },
// ];

// function Card({
//   title,
//   desc,
// }: {
//   title: string;
//   desc: string;
// }) {
//   return (
//     <HoverLift className="h-full">
//       <div className="h-full rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
//         <div className="flex items-center gap-3">
//           <span className="h-2 w-2 rounded-full bg-gold-500" />
//           <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
//             {title}
//           </h3>
//         </div>
//         <p className="mt-3 text-slate-600 dark:text-slate-300/80 leading-relaxed">
//           {desc}
//         </p>
//       </div>
//     </HoverLift>
//   );
// }

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
{/* HERO */}
<section className="relative overflow-hidden">
  {/* Background (works in light + dark) */}
  <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#060A13] dark:via-[#070B16] dark:to-[#04070F]" />

  {/* Grid overlay */}
  <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.25] dark:opacity-[0.35]">
    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:64px_64px]" />
  </div>

  {/* Left focus vignette */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="h-full w-full bg-[radial-gradient(circle_at_20%_35%,rgba(0,0,0,0.55),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_35%,rgba(0,0,0,0.75),transparent_55%)]" />
  </div>

  {/* Glows */}
  <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-brandBlue-500/15 blur-3xl dark:bg-brandBlue-500/20" />
  <div className="pointer-events-none absolute top-20 right-[-120px] -z-10 h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-400/10" />
  <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] -z-10 h-[520px] w-[520px] rounded-full bg-gold-400/15 blur-3xl dark:bg-gold-400/10" />

  <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* LEFT CONTENT (keep your content as-is) */}
      <FadeUp>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur dark:text-white">
          📈 Forex • Stocks • Crypto • Beginner Friendly
        </p>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Learn to trade in the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
            most simplified way
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
          AlphaBull Trading Academy provides the most simplified and to-the-point
          trading course from scratch for beginners — focused on long-tested
          strategies, risk management, and disciplined execution.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/courses" variant="primary">
            Explore Courses
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Now
          </Button>
          <Button href="/brochure.pdf" target="_blank" variant="primary" className="px-4">
            Download PDF
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {[
            { k: "Revision", v: "300+" },
            { k: "Students", v: "38,000+" },
            { k: "Live Q/A", v: "Weekly" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/20"
            >
              <p className="text-sm text-white/70">{s.k}</p>
              <p className="mt-1 text-2xl font-bold text-white">{s.v}</p>
            </div>
          ))}
        </div>
      </FadeUp>
  

      {/* RIGHT VISUAL (trading design) */}
      <FadeUp delay={0.1}>
        <div className="relative mx-auto w-full max-w-xl">
          {/* Glass “chart panel” behind trainer */}
          <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-[440px] w-[92%] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_50px_120px_rgba(0,0,0,0.55)]">
            {/* fake chart lines */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <div className="absolute -left-10 top-24 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
              <div className="absolute -left-10 top-44 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-brandBlue-500/25 to-transparent" />
              <div className="absolute -left-10 top-64 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

              {/* “candles” */}
              <div className="absolute bottom-10 left-10 flex items-end gap-2 opacity-70">
                {[
                  "h-10 bg-emerald-400/50",
                  "h-16 bg-rose-400/50",
                  "h-12 bg-emerald-400/50",
                  "h-20 bg-emerald-400/50",
                  "h-14 bg-rose-400/50",
                  "h-24 bg-emerald-400/50",
                ].map((c, i) => (
                  <div key={i} className={`w-3 rounded-full ${c}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Floating “signal chips” */}
          <div className="absolute -top-2 left-4 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/90 backdrop-blur shadow-lg">
            🔔 Live Signals • Q/A
          </div>

          <div className="absolute top-20 right-4 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/90 backdrop-blur shadow-lg">
            ✅ Risk Managed Setup
          </div>

          <div className="absolute bottom-10 left-6 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/90 backdrop-blur shadow-lg">
            📊 Premium Community
          </div>

          {/* Trainer (transparent PNG) */}
          <Image
            src="/trainer.png"
            alt="Trainer"
            width={900}
            height={1100}
            className="relative z-10 mx-auto max-h-[640px] w-auto object-contain
                       drop-shadow-[0_80px_160px_rgba(0,0,0,0.85)]
                       transition duration-700 hover:scale-[1.03]  animate-[float_6s_ease-in-out_infinite]"
            priority
           
          />

          {/* Light beam behind trainer to enhance cutout */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 -z-10 mx-auto h-[420px] w-[220px] bg-gradient-to-b from-gold-400/25 via-transparent to-transparent blur-2xl" />
        </div>
      </FadeUp>
    </div>
  </div>
</section>

      {/* ABOUT */}
  {/* ABOUT (Premium Timeline + Media Capsule) */}
<Section tone="b" id="about">
  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
    {/* LEFT */}
    <FadeUp>
      <div className="max-w-xl">
        <p className="text-md border-b border-slate-200 font-semibold tracking-[0.28em] uppercase text-slate-500 dark:text-slate-300/70">
          ABOUT US
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Learn trading with a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 dark:from-amber-300 dark:via-yellow-300 dark:to-brandBlue-400">
            system
          </span>
          , not shortcuts
        </h2>

        <p className="mt-5 text-slate-600 dark:text-slate-300/80 leading-relaxed">
          AlphaBull focuses on a structured process that helps beginners become
          consistent: understand the market → build a setup → manage risk →
          execute with discipline → review and improve.
        </p>

        {/* PROCESS TIMELINE (unique + premium) */}
        <div className="mt-8 space-y-4">
          {[
            {
              step: "01",
              title: "Market Logic",
              desc: "Understand why price moves and how sessions behave.",
            },
            {
              step: "02",
              title: "Setups",
              desc: "Simple, repeatable setups with clear entry/exit rules.",
            },
            {
              step: "03",
              title: "Execution",
              desc: "Risk-managed execution with confidence and discipline.",
            },
            {
              step: "04",
              title: "Review",
              desc: "Track trades, fix mistakes, and improve weekly.",
            },
          ].map((x) => (
            <div
              key={x.step}
              className="group flex gap-4 rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/80 to-brandBlue-500/60 text-sm font-bold text-slate-900 dark:text-white">
                {x.step}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {x.title}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300/70">
                  {x.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/about" variant="secondary">
            Know More
          </Button>
          <Button href="/courses" variant="primary">
            Explore Courses
          </Button>
        </div>
      </div>
    </FadeUp>

    {/* RIGHT: MEDIA CAPSULE (unique look) */}
    <FadeUp delay={0.08}>
      <div className="relative mx-auto w-full max-w-xl">
        {/* glow */}
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brandBlue-500/12 via-amber-400/10 to-emerald-400/10 blur-2xl" />

        {/* capsule frame */}
        <div className="relative overflow-hidden rounded-[2.6rem] border border-black/10 bg-white/70 shadow-[0_45px_120px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_60px_140px_rgba(0,0,0,0.45)]">
         

          {/* main media */}
          <div className="relative">
            <img
              src="/about-trading.png"
              alt="Trading"
              className="h-[700px] w-full object-cover"
            />

            {/* subtle chart overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_55%)]" />

            {/* inset image (unique) */}
            <div className="absolute bottom-4 right-4 w-[210px] overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur shadow-xl">
              <img
                src="/about-class.png"
                alt="Class"
                className="h-[280px] w-full object-cover"
              />
              <div className="p-3">
                <p className="text-xs font-semibold text-white/90">
                  Practical Sessions
                </p>
               
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute top-6 left-6 space-y-3">
              <div className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-xs font-semibold text-white/90 backdrop-blur shadow-lg">
                📌 Clean Setups
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-xs font-semibold text-white/90 backdrop-blur shadow-lg">
                🧠 Psychology + Discipline
              </div>
              <div className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-xs font-semibold text-white/90 backdrop-blur shadow-lg">
                📈 Community Support
              </div>
            </div>
          </div>

          {/* bottom gradient line */}
          <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-brandBlue-500 to-emerald-400 opacity-75" />
        </div>
      </div>
    </FadeUp>
  </div>
</Section>

      {/* BENEFITS */}
      {/* <Section tone="c">
        <FadeUp>
          <SectionHeader
            kicker="Benefits"
            title="Everything you need to become consistent"
            desc="From basics to execution: simplified strategies, repeatable setups, and the mindset to trade confidently."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <FadeUp key={b.title} delay={0.04 * i}>
              <Card title={b.title} desc={b.desc} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/benefits" variant="secondary">
            See All Benefits
          </Button>
        </div>
      </Section> */}

      {/* TRAINER */}
      {/* <Section tone="b">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <SectionHeader
              kicker="Trainer"
              title="Learn with a practical, tested approach"
              desc="A learner-first training style that converts complex concepts into simple, repeatable rules and checklists."
              center={false}
            />

            <div className="mt-8 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Ravinder Rawat
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300/80">
                CEO, AlphaBull Trading Academy
              </p>
              <p className="mt-5 text-slate-600 dark:text-slate-300/80 leading-relaxed">
                A seasoned trader and trainer who simplifies trading into a clear
                learning roadmap — market logic → setups → risk → execution →
                review.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "Trained", v: "38,000+" },
                  { k: "Revision", v: "300+" },
                  { k: "Mentoring", v: "Live" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-black/20"
                  >
                    <p className="text-xs text-slate-600 dark:text-slate-300/70">
                      {s.k}
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-lg dark:border-white/10 dark:bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?auto=format&fit=crop&w=1400&q=80"
                alt="Trainer"
                width={1400}
                height={900}
                className="h-[460px] w-full object-cover"
              />
              <div className="p-5 border-t border-black/10 dark:border-white/10">
                <p className="text-sm text-slate-600 dark:text-slate-300/80">
                  ✅ Live Q/A • ✅ Revision Support • ✅ Premium Community
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section> */}

      {/* COURSES PREVIEW */}
      {/* <Section tone="c">
        <FadeUp>
          <SectionHeader
            kicker="Courses"
            title="Choose the right package"
            desc="Start with basics, then upgrade as you master concepts. Previous purchased package is adjusted in the next package."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(0, 6).map((p, i) => (
            <FadeUp key={p.name} delay={0.04 * i}>
              <HoverLift>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300/70">
                        Matching Cap: <span className="font-semibold">{p.cap}</span>
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gold-200/70 px-3 py-2 text-slate-900 font-semibold dark:bg-gold-400/15 dark:text-gold-200">
                      ${p.price}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300/80">
                    <li>• Live classes + revision</li>
                    <li>• Setup-based learning</li>
                    <li>• Community support</li>
                  </ul>

                  <div className="mt-6">
                    <Button href="/contact" variant="secondary" className="w-full">
                      Enroll / Ask
                    </Button>
                  </div>
                </div>
              </HoverLift>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/courses" variant="primary">
            View All Plans
          </Button>
        </div>
      </Section> */}

      {/* CTA */}
      {/* <Section tone="a">
        <FadeUp>
          <div className="rounded-[2rem] border border-black/10 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-600/90 dark:text-gold-300/80">
              Ready to start?
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
              Learn, practice, execute — with a system
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300/80 max-w-2xl mx-auto">
              Get course details on WhatsApp (floating bot) or contact us directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button href="/contact" variant="primary">
                Contact
              </Button>
              <Button href="/courses" variant="secondary">
                See Courses
              </Button>
            </div>
          </div>
        </FadeUp>
      </Section> */}
    </main>
  );
}
