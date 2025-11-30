import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "Litemode - Enterprise power. Small business heart.",
  description: "Build your own digital workspace piece by piece. Pay only for the tools you actually use. Simple, affordable, and fair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${rubik.variable} antialiased`}>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
