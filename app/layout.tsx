import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villa Bonetei | Appartamenti a Dimaro, Val di Sole",
  description: "Scopri Villa Bonetei a Dimaro: due appartamenti per vivere la Val di Sole e una sauna panoramica aperta anche a chi non soggiorna nella villa.",
  alternates: { canonical: "/", languages: { it: "/", en: "/en" } },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
