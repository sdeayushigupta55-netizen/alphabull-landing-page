const faqs = [
  {
    q: "Is this for complete beginners?",
    a: "Yes. We start from the basics and build step-by-step. You’ll also get a clear practice routine so you don’t feel lost.",
  },
  {
    q: "Do you promise profits?",
    a: "No. Trading has risk. We teach a process: strategy, risk management, and discipline — your results depend on execution and market conditions.",
  },
  {
    q: "What do I need to start?",
    a: "A laptop/phone, stable internet, and willingness to practice consistently. We guide you on platforms and tools during onboarding.",
  },
  {
    q: "Is it live or recorded?",
    a: "You get a structured curriculum + recordings, plus live Q&A and mentorship depending on the plan.",
  },
];

export default function FAQ() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((f) => (
        <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-semibold">{f.q}</div>
          <p className="mt-2 text-sm text-white/70">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
