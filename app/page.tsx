"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { FadeUp, HoverLift } from "@/components/Motion";
import { Section, SectionHeader } from "@/components/Section";

// export const metadata = {
//   title: "AlphaBull Trading Academy",
// };

const highlights = [
  {
    title: "Learn From Scratch",
    desc: "Understand market basics, price behavior, and a beginner-friendly roadmap.",
  },
  {
    title: "300+ Revision Support",
    desc: "Miss a live class? Revise anytime. You will never be left behind.",
  },
  {
    title: "Live Q/A Sessions",
    desc: "Get clarity directly with live interaction sessions and doubt solving.",
  },
  {
    title: "Trading Psychology",
    desc: "Build discipline, patience and confidence — the real edge in trading.",
  },
  {
    title: "System Development",
    desc: "Turn setups into a repeatable system with checklists and execution rules.",
  },
  {
    title: "Premium Community",
    desc: "Daily insights, analysis, and a focused learner community to stay aligned.",
  },
];

const plans = [
  { name: "Basic & Adv.", price: 110, cap: "10 Pair/Day" },
  { name: "Adv. Pro", price: 220, cap: "20 Pair/Day" },
  { name: "SMC", price: 330, cap: "30 Pair/Day" },
  { name: "Time Frame", price: 440, cap: "40 Pair/Day" },
  { name: "Liquidity", price: 550, cap: "50 Pair/Day" },
  { name: "Bias Theory", price: 660, cap: "60 Pair/Day" },
  { name: "ICT", price: 770, cap: "70 Pair/Day" },
];

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <HoverLift className="h-full">
      <div className="h-full rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300/80">
          {desc}
        </p>
      </div>
    </HoverLift>
  );
}

export default function HomePage() {
  return (
    <main>
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 lg:pt-0">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* RIGHT VISUAL (image first on mobile) */}
            <FadeUp>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                📈 Forex • Stocks • Crypto • Beginner Friendly
              </p>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Learn to trade in the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                  most simplified way
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
                AlphaBull Trading Academy provides the most simplified and
                to-the-point trading course from scratch for beginners — focused
                on long-tested strategies, risk management, and disciplined
                execution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/courses" variant="primary">
                  Explore Courses
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Now
                </Button>
                <Button
                  href="/brochure.pdf"
                  target="_blank"
                  variant="primary"
                  className="px-4"
                >
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


            {/* LEFT CONTENT */}
            <FadeUp delay={0.1}>
              <div className="relative mx-auto w-full max-w-md sm:max-w-xl order-first lg:order-none lg:mt-10">
                {/* Glass “chart panel” behind trainer */}
                <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-[380px] sm:h-[440px] w-[92%] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_50px_120px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                    <div className="absolute -left-10 top-24 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                    <div className="absolute -left-10 top-44 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-brandBlue-500/25 to-transparent" />
                    <div className="absolute -left-10 top-64 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

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

                {/* Floating chips */}

                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/90 backdrop-blur shadow-lg">
                  🔔 Live • Q/A
                </div>

                <div className="absolute right-3 sm:top-24 sm:right-6 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/90 backdrop-blur shadow-lg">
                  ✅ Risk Managed
                </div>

                <div className="absolute bottom-6 left-3 sm:bottom-10 sm:left-6 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/90 backdrop-blur shadow-lg">
                  📊 Premium Community
                </div>

                <Image
                  src="/trainer.png"
                  alt="Trainer"
                  width={900}
                  height={1100}
                  className="relative z-10 mx-auto max-h-[420px] sm:max-h-[520px] lg:max-h-[640px] w-auto object-contain
                             drop-shadow-[0_80px_160px_rgba(0,0,0,0.85)]
                             transition duration-700 hover:scale-[1.03]
                             animate-float"
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-10 -z-10 mx-auto h-[360px] sm:h-[420px] w-[220px] bg-gradient-to-b from-gold-400/25 via-transparent to-transparent blur-2xl" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section tone="b" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">

            {/* LEFT */}
            <FadeUp delay={0.08}>
              <div className="relative mx-auto w-full max-w-xl h-full">
                <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brandBlue-500/12 via-amber-400/10 to-emerald-400/10 blur-2xl" />

                <div className="relative h-full overflow-hidden rounded-[2.6rem] border border-black/10 bg-white/70 shadow-[0_45px_120px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_60px_140px_rgba(0,0,0,0.45)]">

                  {/* Fixed height wrapper */}
                  <div className="relative h-full min-h-[540px] lg:min-h-[700px]">
                    <img
                      src="/about-trading.png"
                      alt="Trading"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_55%)]" />

                    {/* Bottom mini image */}
                    <div className="absolute bottom-6 right-6 w-[160px] sm:w-[210px] overflow-hidden rounded-2xl border border-white/20 bg-black/55 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      <img
                        src="/about-class.png"
                        alt="Class"
                        className="h-[140px] sm:h-[220px] w-full object-cover object-center"
                      />
                      <div className="p-3">
                        <p className="text-xs font-semibold text-white/90">
                          Practical Sessions
                        </p>
                      </div>
                    </div>

                    {/* Floating chips (desktop only) */}
                    <div className="hidden lg:block absolute top-6 left-6 space-y-3">
                      {[
                        "📌 Clean Setups",
                        "🧠 Psychology + Discipline",
                        "📈 Community Support",
                      ].map((t) => (
                        <div
                          key={t}
                          className="rounded-2xl border border-white/20 bg-black/55 px-4 py-3 text-xs font-semibold text-white backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-brandBlue-500 to-emerald-400 opacity-75" />
                </div>
              </div>
            </FadeUp>

            {/* RIGHT */}
            <FadeUp>
              <div className="max-w-xl h-full lg:min-h-[700px] flex flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold tracking-[0.28em] uppercase text-gold-600/90 dark:text-gold-300/80 border-b border-gold-600/10 dark:border-gold-300/10 pb-4">
                    About Us
                  </p>

                  <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
                    MANISH RAWAT{" "}
                    <span className="block mt-2 text-base sm:text-lg font-semibold text-slate-600 dark:text-slate-300/80">
                      Founder •{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                        Trader & Educator
                      </span>
                    </span>
                  </h2>

                  <p className="mt-6 text-slate-600 dark:text-slate-300/80 leading-relaxed lg:text-[15px]">
                    Manish Rawat is a seasoned trader and educator who has carved a
                    remarkable niche in the world of stock market education. With years of
                    hands-on experience and deep insights gained from working alongside
                    industry veterans, he brings a practical and tested approach that
                    resonates with learners across all levels.
                  </p>

                  <p className="mt-4 text-slate-600 dark:text-slate-300/80 leading-relaxed lg:text-[15px]">
                    As the Founder & CEO of{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      AlphaBull Trading Academy
                    </span>
                    , he empowers aspiring traders with structured systems, disciplined
                    execution frameworks, and real-world market strategies designed for
                    long-term consistency.
                  </p>

                  <p className="mt-4 text-slate-600 dark:text-slate-300/80 leading-relaxed lg:text-[15px]">
                    Having trained over{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      6000+ students
                    </span>
                    , his mission is clear — to nurture confident, disciplined, and
                    successful traders through clarity, structure, and experience-driven
                    learning.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Millennium Brilliance Award — Best Trainer",
                      "Recognized as Most Trusted Learning Platform (India)",
                      "Featured in leading financial publications",
                      "6000+ Traders Mentored Successfully",
                    ].map((item) => (
                      <div
                        key={item}
                        className="h-full flex items-center rounded-2xl border-l-4 border-l-amber-400/70 border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm
                       dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/courses" variant="primary">
                    Explore Courses
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact Now
                  </Button>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </Section>

      {/* SESSIONS / CURRICULUM — PREMIUM ELITE VERSION */}
      <Section tone="c" id="sessions">
        <FadeUp>
          <SectionHeader
            kicker="Sessions"
            title="Our AlphaBull Best Sessions & Intro"
            desc="A structured roadmap from analysis → execution → risk → psychology → live practice."
          />
        </FadeUp>

        <div className="mt-16 space-y-16">

          {/* ===== TOP INTRO BLOCK ===== */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* LEFT TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live Mentorship + Strategy • Risk Managed
              </div>

              <h3 className="mt-6 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">
                Learn trading like a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                  professional system
                </span>
              </h3>

              <p className="mt-6 text-slate-600 dark:text-slate-300/80 leading-relaxed max-w-xl">
                We focus on real market structure, precise execution, and strict risk
                control — so you build consistency with a repeatable process.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-slate-700 dark:text-slate-200">
                {[
                  "Structured learning (step-by-step)",
                  "Real chart practice + backtesting",
                  "Psychology + discipline framework",
                  "Transition plan: demo → real account",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-[2.2rem] shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/10 dark:border-white/10">
              <img
                src="/sessions-trading-room.png"
                alt="Trading Sessions"
                className="h-[280px] w-full object-cover sm:h-[340px]"
              />
            </div>
          </div>

          {/* ===== MODULE CARDS ===== */}
          <div className="grid gap-10 md:grid-cols-2">

            {[
              {
                title: "Advanced Technical Analysis",
                items: [
                  "Advanced Support & Resistance",
                  "Market Structure (Higher High, Lower Low)",
                  "Smart Money Concept (SMC)",
                  "Order Block & Liquidity",
                  "Break of Structure (BOS)",
                  "Advanced Candlestick Psychology",
                ],
              },
              {
                title: "Price Action Strategy",
                items: [
                  "Institutional Trading Concept",
                  "Trend Reversal Strategy",
                  "Pullback Entry System",
                  "Sniper Entry Techniques",
                  "Institutional Liquidity Sweep Setup",
                  "Break & Retest Confirmation Model",
                ],
              },
              {
                title: "Risk Management (Professional Level)",
                items: [
                  "Proper Position Sizing",
                  "Risk–Reward Ratio Planning",
                  "Drawdown Control",
                  "Capital Protection Strategy",
                ],
              },
              {
                title: "Fundamental Analysis",
                items: [
                  "Economic News Impact",
                  "Interest Rate Decision",
                  "CPI, NFP, GDP ka effect",
                  "News Trading Strategy",
                ],
              },
              {
                title: "Trading Psychology",
                items: [
                  "Fear & Greed Control",
                  "Discipline Maintain Karna",
                  "Overtrading se bachna",
                  "Trading Plan follow karna",
                ],
              },
              {
                title: "Live Market Practice",
                items: [
                  "Live Chart Analysis",
                  "Backtesting",
                  "Demo se Real Account Transition",
                  "Live Trade Execution & Risk Monitoring",

                ],
              },
            ].map((m, index) => (
              <div
                key={m.title}
                className="group relative rounded-[2rem] p-[1px] bg-gradient-to-br from-amber-400/40 via-brandBlue-500/40 to-emerald-400/40 transition duration-500 hover:scale-[1.02]"
              >
                <div className="relative rounded-[2rem] bg-white/80 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:bg-white/5 dark:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

                  {/* Glow Hover */}
                  <div className="pointer-events-none absolute -inset-20 -z-10 rounded-full bg-gradient-to-br from-amber-400/20 via-brandBlue-500/10 to-emerald-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 text-sm font-bold text-slate-900 shadow-lg">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {m.title}
                    </h4>
                  </div>

                  {/* Items */}
                  <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300/85">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-amber-500">▸</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-6">
            <Button href="/contact" variant="primary">
              Get Batch Details
            </Button>
          </div>

        </div>
      </Section>

      {/* COURSES PREVIEW (Premium) */}
      <Section tone="b" id="courses">
        <FadeUp>
          <SectionHeader
            kicker="Courses"
            title="Choose the right package"
            desc="Start with basics, then upgrade as you master concepts. Previous purchased package is adjusted in the next package."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.slice(0, 6).map((p, i) => {
            const popular = p.name === "SMC" || i === 2; // mark SMC as popular
            return (
              <FadeUp key={p.name} delay={0.04 * i}>
                <HoverLift className="h-full">
                  <div
                    className={[
                      "relative h-full overflow-hidden rounded-[2rem] border p-6 shadow-sm transition",
                      "border-black/10 bg-white/70 hover:shadow-md",
                      "dark:border-white/10 dark:bg-white/5",
                      popular
                        ? "ring-1 ring-amber-400/40 dark:ring-amber-300/30"
                        : "",
                    ].join(" ")}
                  >
                    {/* glow */}
                    <div
                      className={[
                        "pointer-events-none absolute -inset-24 -z-10 rounded-full blur-3xl",
                        popular
                          ? "bg-gradient-to-r from-amber-400/25 via-brandBlue-500/15 to-emerald-400/15"
                          : "bg-gradient-to-r from-brandBlue-500/10 via-emerald-400/10 to-gold-400/10",
                      ].join(" ")}
                    />

                    {/* badge */}
                    {popular ? (
                      <div className="absolute  left-1/2 -translate-x-1/2 rounded-full border border-amber-400/40 bg-amber-400/10 text-xs font-semibold text-amber-700 dark:border-amber-300/25 dark:text-amber-200 px-4 py-1 shadow-md">
                        ⭐ Most Popular
                      </div>
                    ) : null}

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {p.name}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                            Matching Cap: {p.cap}
                          </span>
                          <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                            Live + Revision
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-300/70">
                          Price
                        </div>
                        <div className="mt-1 inline-flex items-baseline gap-1 rounded-2xl bg-gradient-to-r from-amber-300/70 via-yellow-300/60 to-amber-200/70 px-4 py-2 text-slate-900 shadow-sm dark:from-amber-400/15 dark:via-yellow-400/10 dark:to-amber-400/15 dark:text-amber-200">
                          <span className="text-2xl font-bold">${p.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 h-px bg-black/10 dark:bg-white/10" />

                    {/* Features */}
                    <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300/80">
                      <li className="flex gap-2">
                        <span className="text-emerald-500">✓</span> Strategy & market logic
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-500">✓</span> Trading psychology & discipline
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-500">✓</span> Checklist-based execution
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-500">✓</span> Premium analysis community
                      </li>
                    </ul>

                    <div className="mt-7 grid grid-cols-2 gap-3">
                      <Button href="/contact" variant="primary" className="w-full">
                        Enroll
                      </Button>
                      <Button href="/courses" variant="secondary" className="w-full">
                        Details
                      </Button>
                    </div>

                    <p className="mt-5 text-xs text-slate-500 dark:text-slate-300/60">
                      Upgrade rule: pay only the difference when moving to the next package.
                    </p>

                    {/* bottom accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-amber-400 via-brandBlue-500 to-emerald-400 opacity-70" />
                  </div>
                </HoverLift>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/courses" variant="secondary">
            View All Plans
          </Button>
        </div>
      </Section>


      {/* BENEFITS (Premium Timeline – Trading Style) */}
      <Section tone="c" id="benefits">
        <FadeUp>
          <SectionHeader
            kicker="Benefits"
            title="Everything you need to become consistent"
            desc="From basics to execution: simplified strategies, repeatable setups, and the mindset to trade confidently."
          />
        </FadeUp>

        <div className="mt-14 relative">
          {/* subtle grid overlay (trading vibe) */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] dark:opacity-[0.28]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>

          {/* vertical rail */}
          <div className="pointer-events-none absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400 via-brandBlue-500 to-emerald-400 opacity-80" />

          {/* left glow */}
          <div className="pointer-events-none absolute -left-20 top-10 h-[520px] w-[520px] rounded-full bg-brandBlue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-10 h-[520px] w-[520px] rounded-full bg-gold-400/10 blur-3xl" />

          <div className="space-y-12">
            {highlights.map((b, i) => (
              <FadeUp key={b.title} delay={0.05 * i}>
                <div className="relative pl-14 sm:pl-20">
                  {/* dot */}
                  <div className="absolute left-[6px] sm:left-[14px] top-2 h-6 w-6 rounded-full bg-gradient-to-br from-gold-400 via-brandBlue-500 to-emerald-400 shadow-[0_0_18px_rgba(59,130,246,0.45)]" />

                  {/* BIG STEP NUMBER (Improved for light + dark) */}
                  <div className="absolute -left-1 sm:left-0 top-7 select-none">
                    <span
                      className="
      text-5xl sm:text-6xl font-extrabold tracking-tight
      text-transparent bg-clip-text
      bg-gradient-to-b
     from-yellow-300 via-amber-400 to-yellow-600
      dark:from-white/40 dark:via-white/18 dark:to-white/6
      opacity-80
    "
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* row */}
                  <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
                    {/* left text */}
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {b.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300/85 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>

                    {/* tags (fixed visibility) */}
                    <div className="flex flex-wrap gap-2 lg:justify-end lg:items-center">
                      <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-white/65">
                        Built for:
                      </span>

                      {["Beginners", "Discipline", "Consistency"].map((t) => (
                        <span
                          key={t}
                          className="
                      rounded-full px-3 py-1 text-xs font-semibold
                      border border-black/10 bg-black/5 text-slate-700
                      dark:border-white/15 dark:bg-white/10 dark:text-white
                      shadow-sm
                    "
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* divider */}
                  <div className="mt-8 h-px w-full bg-black/10 dark:bg-white/10" />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button href="/contact" variant="primary">
              Ask for Course Details
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA (Premium + Subscribe) */}
      <Section tone="c" id="cta">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-white/70 p-8 sm:p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            {/* background glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brandBlue-500/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 right-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-gold-400/14 blur-3xl" />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* LEFT */}
              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold tracking-[0.28em] uppercase text-slate-500 dark:text-slate-300/70">
                  Ready to start?
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
                  Join the next batch & build a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                    repeatable trading system
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300/80">
                  Get batch timings, pricing, and a quick roadmap. We’ll guide you to the
                  right plan based on your level.
                </p>

                {/* action buttons */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button href="/contact" variant="primary">
                    Contact Now
                  </Button>

                  {/* WhatsApp direct link (change number) */}
                  <a
                    href="https://wa.me/919999999999?text=Hi%20AlphaBull%2C%20I%20want%20course%20details%20and%20batch%20timings."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/10 transition dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    💬 WhatsApp Now
                  </a>

                  {/* phone call (optional) */}
                  <a
                    href="tel:+919999999999"
                    className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-black/10 transition dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    📞 Call
                  </a>
                </div>

                {/* micro trust points */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {["✅ Beginner-friendly", "✅ Live Q/A", "✅ Revision support"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT (Subscribe box) */}
              <div className="rounded-[1.8rem] border border-black/10 bg-white/60 p-6 sm:p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Get updates (free)
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300/80">
                      Batch dates, webinars, and new resources — directly to your inbox.
                    </p>
                  </div>
                  <span className="whitespace-nowrap shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-200">
                    No spam
                  </span>
                </div>

                <form
                  className="mt-5 flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: connect to your API (Resend/Mailchimp etc.)
                    alert("Thanks! We will contact you soon.");
                  }}
                >
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400/50 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-white/40"
                  />

                  <button
                    type="submit"
                    className="h-12 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 px-5 text-sm font-bold text-slate-900 shadow-sm hover:opacity-95 transition"
                  >
                    Subscribe
                  </button>
                </form>

                <div className="mt-4 text-xs text-slate-500 dark:text-white/50">
                  By subscribing, you agree to receive emails from AlphaBull Trading Academy.
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>
    </main>
  );
}