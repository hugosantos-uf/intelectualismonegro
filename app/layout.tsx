import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Currículo Oculto: Um Ensaio Digital Interativo",
  description:
    "Uma reflexão sobre descolonização do conhecimento na universidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
