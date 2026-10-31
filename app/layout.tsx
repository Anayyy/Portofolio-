import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-code", display: "swap" });

export const metadata: Metadata = {
  title: "Octiyana Fa'iz Surya Permana — Informatics Student",
  description: "Portofolio Octiyana Fa'iz Surya Permana, mahasiswa Informatika Universitas Nasional.",
};

export const viewport: Viewport = { themeColor: "#080b0e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${sans.variable} ${display.variable} ${mono.variable}`}>{children}</body></html>;
}
