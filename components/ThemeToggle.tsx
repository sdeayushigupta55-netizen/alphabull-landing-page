"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white transition dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="text-base">{isDark ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
