import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MK Group of Companies | Building Excellence Across 12 Industries",
  description:
    "MK Group of Companies is a premier diversified conglomerate delivering innovation, trust, and excellence across marketing, real estate, software, education, and trading in Pakistan.",
  keywords: [
    "MK Group of Companies",
    "MKGC",
    "Pakistan Conglomerate",
    "Real Estate",
    "Software Development",
    "Marketing Agency",
    "Shopping Mall",
    "Lahore Pakistan",
  ],
  icons: {
    icon: "/images/mk-logo-gold.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080706] text-[#F4EDE3] antialiased selection:bg-[#D4AF37] selection:text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
