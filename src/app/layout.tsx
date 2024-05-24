import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banda Digito Zero - Rock Autoral e Covers com Estilo Único",
  description:
    "Conheça a Digito Zero, uma banda de Cuiabá que mistura músicas autorais e covers icônicos com uma pegada única. Com shows eletrizantes e um repertório variado, a Digito Zero conquista fãs por onde passa. Visite nosso site para saber mais sobre nossas músicas, conferir a agenda de shows e mais. Junte-se à nossa comunidade de fãs e sinta a energia do verdadeiro rock!",
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
