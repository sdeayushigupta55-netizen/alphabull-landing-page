"use client";

import { useMemo, useState } from "react";

const PHONE_E164 = "+919999999999"; // TODO: replace

function waUrl(message: string) {
  const phone = PHONE_E164.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export default function WhatsAppBot() {
  const [open, setOpen] = useState(false);

  const quick = useMemo(
    () => [
      { label: "Course details", msg: "Hi AlphaBull, I want course details and pricing." },
      { label: "Free demo?", msg: "Hi AlphaBull, is there a demo class or sample session available?" },
      { label: "Support", msg: "Hi AlphaBull, I need support regarding enrollment / login." },
    ],
    []
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 mt-11">
      {/* Panel */}
      {open ? (
        <div className="mb-4 w-[320px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-ink-900">
          <div className="flex items-center justify-between gap-2 border-b border-black/10 bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-white dark:border-white/10">
            <div>
              <p className="text-sm font-semibold">AlphaBull WhatsApp</p>
              <p className="text-xs opacity-90">Fast replies • 24/7</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-white/15 px-3 py-1 text-sm font-semibold hover:bg-white/25"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Choose an option to start chat:
            </p>

            <div className="mt-3 space-y-2">
              {quick.map((q) => (
                <a
                  key={q.label}
                  href={waUrl(q.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-black/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  {q.label}
                  <span className="ml-2 text-xs font-normal text-slate-600 dark:text-slate-300/70">
                    → WhatsApp
                  </span>
                </a>
              ))}
            </div>

            <a
              href={waUrl("Hi AlphaBull, I want to join the trading course.")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition"
            >
              Start Chat
            </a>
          </div>
        </div>
      ) : null}

      {/* Floating Button (like screenshot) */}
      <div className="relative">
        {/* Close X on top-right like screenshot */}
        {open ? (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute -top-3 -right-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white shadow-lg hover:bg-black/70"
            aria-label="Close WhatsApp widget"
          >
            ✕
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-[88px] w-[88px] place-items-center rounded-full bg-emerald-500 shadow-[0_20px_60px_rgba(16,185,129,0.55)] transition hover:bg-emerald-600"
          aria-label="Open WhatsApp chat"
        >
          {/* “We Are Here!” curved text */}
          <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2">
            <svg width="140" height="100" viewBox="0 0 140 70">
              <defs>
                <path id="arc" d="M 10 60 A 60 60 0 0 1 130 60" />
              </defs>

              {/* soft glow outline */}
              <text fontSize="14" fontWeight="800" fill="white" opacity="1.95">
                <textPath href="#arc" startOffset="50%" textAnchor="middle">
                  We Are Here!
                </textPath>
              </text>

              {/* subtle stroke behind text */}
              <text
                fontSize="14"
                fontWeight="800"
                fill="none"
                
                strokeWidth="4"
              >
                <textPath href="#arc" startOffset="50%" textAnchor="middle">
                  We Are Here!
                </textPath>
              </text>
            </svg>
          </div>

          {/* Waving hand */}
          <div className="pointer-events-none absolute -left-5 top-1/2 -translate-y-1/2">
            <span className="inline-block text-2xl animate-[wave_1.3s_ease-in-out_infinite]">
              👋
            </span>
          </div>

          {/* WhatsApp icon circle */}
          <div className="grid h-[62px] w-[62px] place-items-center rounded-full bg-white">
            {/* simple WhatsApp glyph */}
            <span className="text-3xl">💬</span>
          </div>
        </button>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-14deg); }
          40% { transform: rotate(12deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}