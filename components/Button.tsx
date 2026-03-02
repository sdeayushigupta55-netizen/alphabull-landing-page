import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  target,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold-300/40";

  const styles = {
    primary:
      "bg-gradient-to-b from-gold-300 to-gold-500 text-ink-950 shadow-glow hover:brightness-110",
    secondary:
      "border border-black/10 bg-white/70 text-slate-900 hover:bg-white shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
    ghost:
      "text-slate-800 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
  }[variant];

  if (href) {
    return (
      <Link href={href} target={target} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
