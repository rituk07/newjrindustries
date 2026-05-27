import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import EmailModal from "@/components/ui/EmailModal";
import "./globals.css";
import type { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JR Industries | Architectural Luxury & Custom Metalwork",
  description:
    "Mastering the art of architectural metalwork. Explore JR Industries' premium custom brass railings, structural glass integrations, and high-end PVD finishes.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark`}>
      <body className="bg-background text-text min-h-screen flex flex-col justify-between">
        <SpotlightEffect />
        <EmailModal />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
