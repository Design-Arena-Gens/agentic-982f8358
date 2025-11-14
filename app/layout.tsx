import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "../components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linear Inspired Workspace",
  description: "Experiência estilo Linear App com design moderno e responsivo."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-canvas text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
