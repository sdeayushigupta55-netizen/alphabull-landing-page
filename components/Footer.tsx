import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/10 bg-white dark:border-white/10 dark:bg-ink-950">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
               <Link href="/" className="inline-flex items-center gap-3">
      <Image
        src="/logo-transparent.png"
        width={180}
        height={60}
        alt="AlphaBull Trading Academy"
        priority
      />
    </Link>

            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-white/70">
              Education-first trading academy. Learn a repeatable process, manage
              risk, and build discipline with mentorship and structured learning.
            </p>

          
  {/* Social Icons */}
  <div className="mt-4 flex items-center gap-3">
    {/* Instagram */}
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noreferrer"
      className="group grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-black/5 transition hover:bg-pink-500 dark:border-white/10 dark:bg-white/5 dark:hover:bg-pink-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-slate-700 group-hover:text-white dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6-1a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noreferrer"
      className="group grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-black/5 transition hover:bg-red-600 dark:border-white/10 dark:bg-white/5 dark:hover:bg-red-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-slate-700 group-hover:text-white dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.8zM9.8 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    </a>

    {/* Telegram */}
    <a
      href="https://t.me/"
      target="_blank"
      rel="noreferrer"
      className="group grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-black/5 transition hover:bg-sky-500 dark:border-white/10 dark:bg-white/5 dark:hover:bg-sky-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-slate-700 group-hover:text-white dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.9 15.6l-.4 4c.6 0 .9-.3 1.2-.6l2.9-2.8 6-4.4c1-.7-.2-1.1-1.5-.7l-7.4 2.3-3.2-1c-.7-.2-.7-.7.2-1l12.6-4.9c.6-.2 1.2.1 1 .9l-2.1 10c-.2.9-.7 1.1-1.5.7l-4.1-3.1-2 1.9c-.2.2-.4.4-.8.4z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/"
      target="_blank"
      rel="noreferrer"
      className="group grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-black/5 transition hover:bg-blue-600 dark:border-white/10 dark:bg-white/5 dark:hover:bg-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-slate-700 group-hover:text-white dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.9 3.9 6 2.49 6S0 4.9 0 3.5 1.08 1 2.49 1s2.49 1.1 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.6v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-8.5c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
      </svg>
    </a>
  </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Quick Links
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Courses", href: "/courses" },
                { label: "Benefits", href: "/benefits" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Disclaimer */}
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Contact
            </p>

            <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-white/70">
              <div>
                WhatsApp:{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  +91-XXXXXXXXXX
                </span>
              </div>
              <div>
                Email:{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  admin@alphabulltradingacademy.com
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-black/10 bg-black/5 p-4 text-xs leading-relaxed text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/65">
              <span className="font-semibold text-slate-900 dark:text-white">
                Disclaimer:
              </span>{" "}
              Trading involves risk. This website is for educational purposes
              only. Past performance does not guarantee future results.
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col text-center gap-3 border-t border-black/10 pt-6 text-xs text-slate-500 md:items-center md:justify-between dark:border-white/10 dark:text-white/50">
          <div>© {year} AlphaBull Trading Academy. All rights reserved.</div>

          
        </div>
      </Container>
    </footer>
  );
}