import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Geist({
  variable: "--font-sans-geist",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XyloBlonk | Dev Portfolio",
  description:
    "Dive into the work of XyloBlonk — crafting high-quality, innovative apps across platforms. Discover projects and skills here.",
  keywords: [
    "Mobile Dev",
    "iOS Apps",
    "Android Apps",
    "React Native",
    "Flutter Framework",
    "Swift Language",
    "Kotlin Programming",
    "Cross-Platform",
    "Native Mobile",
    "UI/UX Mobile",
    "App Store Release",
    "Play Store Launch",
    "App Architecture",
    "XyloBlonk Portfolio",
  ],
  authors: [{ name: "XyloBlonk" }],
  creator: "XyloBlonk",
  openGraph: {
    title: "XyloBlonk | Dev Portfolio",
    description:
      "Innovative developer delivering top-tier apps. Browse my portfolio for a snapshot of projects and expertise.",
    url: "https://xyloblonk.xyz",
    siteName: "XyloBlonk Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XyloBlonk Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XyloBlonk | Dev Portfolio",
    description:
      "Innovative developer delivering top-tier apps. Browse my portfolio for a snapshot of projects and expertise.",
    creator: "@xyloblonk",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sansFont.variable} ${monoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
