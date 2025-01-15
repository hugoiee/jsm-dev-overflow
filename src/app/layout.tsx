import Navbar from "@/components/navigation/navbar";
import { ThemeProvider } from "@/context/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dev overflow",
  description: "开发者问答社区",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
