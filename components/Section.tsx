import { ReactNode } from "react";

export function Section({
  children,
  tone = "a",
  id,
}: {
  children: ReactNode;
  tone?: "a" | "b" | "c";
  id?: string;
}) {
  const tones: Record<string, string> = {
    a: "bg-white dark:bg-ink-950",
    b: "bg-gradient-to-b from-slate-50 to-white dark:from-ink-900 dark:to-ink-950",
    c: "bg-gradient-to-b from-white to-slate-50 dark:from-ink-950 dark:to-ink-900",
  };

  return (
    <section id={id} className={`${tones[tone]} border-y border-black/5 dark:border-white/5`}>
      <div className="mx-auto max-w-6xl px-6 py-16">{children}</div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  desc,
  center = true,
}: {
  kicker: string;
  title: string;
  desc: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xl uppercase tracking-[0.22em] text-gold-600/90 dark:text-gold-300/80 border-gold-600/10 dark:border-gold-300/10 border-b pb-4">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300/80 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
