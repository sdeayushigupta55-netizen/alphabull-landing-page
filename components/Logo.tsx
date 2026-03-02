import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const w = size === "sm" ? 140 : 180;
  const h = size === "sm" ? 70 : 100;
  return (
    <Image
      src="/logo-transparent.png"
      width={w}
      height={h}
      alt="AlphaBull Trading Academy"
      priority
      style={{ width: w, height: 'auto' }}
    />
  );
}
