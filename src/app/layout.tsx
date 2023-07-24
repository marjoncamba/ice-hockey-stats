import { SiteHeader } from "@/components/site-header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ice Hockey",
  description: "Recaps of ice hockey games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader siteName="Ice Hockey Recaps" />
        {children}
      </body>
    </html>
  );
}
