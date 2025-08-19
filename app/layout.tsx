import type { Metadata } from "next";
import { Inter, Patrick_Hand } from "next/font/google";

import "./globals.css";

const font_sans = Patrick_Hand({
  variable: "--font-patrick-hand",
  weight: ["400"],
  subsets: ["latin"],
});

const font_mono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Til baǵdarlamalaý tili",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font_sans.variable} ${font_mono.variable}`}>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
