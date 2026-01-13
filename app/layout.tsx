import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Naseef | Full Stack Developer | MERN & React Native",
  description: "Portfolio of Muhammad Naseef – Full Stack Developer specializing in React.js, React Native, Node.js, and MERN stack applications. Explore projects, skills, and contact information.",
  keywords: ["Muhammad Naseef", "Full Stack Developer", "MERN Stack", "React Native", "React.js", "Node.js", "Portfolio", "Web Developer", "JavaScript", "TypeScript"],
  authors:  [{ name: "Muhammad Naseef", url: "https://muhammadnaseef.vercel.app" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Muhammad Naseef | Full Stack Developer",
    description: "Explore the portfolio of Muhammad Naseef, showcasing MERN stack projects, React Native apps, and full stack web development expertise.",
    url: "https://muhammadnaseef.vercel.app",
    siteName: "Muhammad Naseef Portfolio",
    images: [
      {
        url: "https://muhammadnaseef.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Naseef Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Naseef | Full Stack Developer",
    description: "Portfolio of Muhammad Naseef – React.js, React Native, Node.js, and MERN stack projects.",
    images: ["https://muhammadnaseef.vercel.app/og-image.png"],
    creator: "@YourTwitterHandle", // Optional
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
