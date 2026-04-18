import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abubakar Abdulrazak | Senior FullStack Developer",
  description: "Expert FullStack Developer specializing in React, Next.js, NestJS, Laravel, and scaling high-performance web applications.",
  keywords: ["FullStack Developer", "Next.js Expert", "React Developer", "Abubakar Abdulrazak", "Software Engineer", "Nigeria"],
  authors: [{ name: "Abubakar Abdulrazak" }],
  openGraph: {
    title: "Abubakar Abdulrazak | Senior Full Stack Developer",
    description: "Building scalable, high-performance web applications with modern tech stacks.",
    url: "https://abubakar-portfolio.vercel.app",
    siteName: "Abubakar Portfolio",
    images: [
      {
        url: "/img/about abubakar.jpeg",
        width: 1200,
        height: 630,
        alt: "Abubakar Abdulrazak",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Abdulrazak | Senior Full Stack Developer",
    description: "Building scalable, high-performance web applications with modern tech stacks.",
    creator: "@lilsadiq2000",
    images: ["/img/about abubakar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
