import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060912",
          900: "#0A0F1F",
          800: "#0F1730",
          700: "#172245"
        },
        gold: {
          50: "#FFF8E6",
          100: "#FEECC2",
          200: "#FBD890",
          300: "#F6C25B",
          400: "#F2B02F",
          500: "#D89A18",
          600: "#B57D12",
          700: "#8E6110",
          800: "#6C4A0F",
          900: "#4B340D"
        },
        brandBlue: {
          500: "#1F6FEB",
          600: "#1A5FD6",
          700: "#144CB0"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(246,194,91,.25), 0 16px 48px rgba(0,0,0,.35)",
        card: "0 0 0 1px rgba(255,255,255,.08), 0 18px 50px rgba(0,0,0,.45)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.07) 1px, transparent 0)",
        hero: "radial-gradient(1200px 600px at 20% 10%, rgba(31,111,235,.25), transparent 55%), radial-gradient(900px 500px at 80% 20%, rgba(246,194,91,.22), transparent 55%), linear-gradient(180deg, #060912 0%, #0A0F1F 60%, #060912 100%)"
      }
    },
  },
  plugins: [],
} satisfies Config;
