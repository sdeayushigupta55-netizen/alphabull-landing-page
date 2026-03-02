import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import WhatsAppBot from "@/components/WhatsAppBot";

export const metadata: Metadata = {
  title: {
    default: "AlphaBull Trading Academy",
    template: "%s | AlphaBull Trading Academy",
  },
  description:
    "Trading education focused on price action, risk management, and disciplined execution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
