import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digito Zero",
  description: "Site da melhor banda de cuiabá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/logodigitosite.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
