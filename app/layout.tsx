
import type { Metadata } from "next";
import "./globals.css";


import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";


import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manage your notes with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {}
      <body className={`${GeistSans.className} ${GeistMono.className}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

