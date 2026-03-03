"use client";
import Image from "next/image";
import { FadeUp } from "@/components/Motion";
import { Section } from "@/components/Section";
import Button from "@/components/Button";

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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* LEFT */}
            <FadeUp delay={0.08}>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brandBlue-500/12 via-amber-400/10 to-emerald-400/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2.6rem] border border-black/10 bg-white/70 shadow-[0_45px_120px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_60px_140px_rgba(0,0,0,0.45)]">
                  <div className="relative">
                    <img
                      src="/about-trading.png"
                      alt="Trading"
                      className=" sm:h-[480px] lg:h-[700px] w-full object-cover object-center"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_55%)]" />

                    <div className="absolute bottom-4 right-4 w-[160px] sm:w-[210px] overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur shadow-xl">
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
                    <div className="hidden lg:block absolute top-4 left-4 sm:top-6 sm:left-6 space-y-3">
                      {[
                        "📌 Clean Setups",
                        "🧠 Psychology + Discipline",
                        "📈 Community Support",
                      ].map((t) => (
                        <div
                          key={t}
                          className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-xs font-semibold text-white/90 backdrop-blur shadow-lg"
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
              <div className="max-w-xl">
                <p className="text-sm border-b border-slate-200 dark:border-white/10 pb-2 font-semibold tracking-[0.28em] uppercase text-slate-500 dark:text-slate-300/70">
                  ABOUT US
                </p>

                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
                  Learn trading with a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                    system
                  </span>
                  , not shortcuts
                </h2>

                <p className="mt-5 text-slate-600 dark:text-slate-300/80 leading-relaxed">
                  AlphaBull focuses on a structured process that helps beginners
                  become consistent: understand the market → build a setup →
                  manage risk → execute with discipline → review and improve.
                </p>

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
          </div>
        </div>
      </Section>

    </main>
  );
}