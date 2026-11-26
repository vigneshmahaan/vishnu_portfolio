import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SkillRuntime } from "@/components/SkillRuntime";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Vishnu Kumar K M: Software, IoT and Web Engineer",
  description:
    "Portfolio of Vishnu Kumar K M, Computer Science graduate building Java and Python backends, MySQL schemas, IoT sensor monitors, and validated ML datasets.",
  openGraph: {
    type: "website",
    title: "Vishnu Kumar K M: Software, IoT and Web Engineer",
    description:
      "Software, IoT telemetry, relational databases, and 2D automotive ML data pipelines by Vishnu Kumar K M.",
    images: ["/images/vishnu-portrait.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Kumar K M: Software, IoT and Web Engineer",
    description:
      "Software, IoT telemetry, relational databases, and 2D automotive ML data pipelines by Vishnu Kumar K M.",
    images: ["/images/vishnu-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-type="software"
      data-radius="sharp"
      data-buttons="solid"
      data-motion=""
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="software" />
        <meta name="page-type" content="software" />
        {/* eslint-disable @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <link rel="stylesheet" href="/assets/moments/word-highlight/moment.css" />
        {/* eslint-enable @next/next/no-css-tags */}
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <SkillRuntime />
        {children}
      </body>
    </html>
  );
}
