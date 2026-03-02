"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/benefits", label: "Benefits" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-ink-950/70">
      <Container className="py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <span>
            <Logo size="md" />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            const base =
              "px-3 py-2 rounded-2xl text-sm font-semibold transition";
            const cls = active
              ? "bg-black/5 text-slate-900 dark:bg-white/10 dark:text-white"
              : "text-slate-700 hover:text-slate-950 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5";
            return (
              <Link key={item.href} href={item.href} className={`${base} ${cls}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button href="/contact" variant="primary" >
            Enroll / Talk
          </Button>
         
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="rounded-2xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white transition dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-ink-950/80">
          <Container className="py-3 flex flex-col gap-2">
            {nav.map((item) => {
              const active = pathname === item.href;
              const base =
                "px-3 py-3 rounded-2xl text-sm font-semibold transition";
              const cls = active
                ? "bg-black/5 text-slate-900 dark:bg-white/10 dark:text-white"
                : "text-slate-700 hover:text-slate-950 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5";
              return (
                <Link key={item.href} href={item.href} className={`${base} ${cls}`}>
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-2 flex gap-2">
              <Button href="/contact" variant="secondary" className="flex-1">
                Enroll
              </Button>
              <Button
                href="/brochure.pdf"
                target="_blank"
                variant="primary"
                className="flex-1"
              >
                PDF
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
