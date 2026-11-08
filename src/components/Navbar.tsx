"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import MKLogo from "./MKLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Companies", href: "/companies" },
  { name: "Services", href: "/services" },
  { name: "Shopping Mall", href: "/shopping-mall" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080706]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left: MK Logo */}
        <div className="flex items-center">
          <MKLogo size="md" variant="header" />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center space-x-7 md:flex lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pb-1 text-sm font-semibold tracking-normal transition-colors duration-200 ${
                  isActive
                    ? "text-[#F5E29E]"
                    : "text-zinc-200 hover:text-[#D4AF37]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Get in Touch Button (Desktop) */}
        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#821315] px-6 py-2.5 text-sm font-bold text-white shadow-[0_2px_10px_rgba(130,19,21,0.5)] transition-all duration-200 hover:bg-[#96181b] hover:shadow-[0_4px_16px_rgba(130,19,21,0.7)] active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-300 hover:bg-zinc-800/60 hover:text-[#D4AF37]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Golden Glowing Horizon Line Accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#D4AF37]/20 bg-[#0c0a08] px-6 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-base transition-colors ${
                    isActive
                      ? "bg-[#D4AF37]/10 font-medium text-[#F5E29E]"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-[#D4AF37]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#821315] py-3 text-center text-sm font-bold text-white shadow-md hover:bg-[#96181b]"
              >
                <PhoneCall className="h-4 w-4" />
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
