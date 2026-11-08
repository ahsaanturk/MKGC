"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#2E0507] via-[#1A0304] to-[#0A0203]">
      {/* Upper Subtle Red Glow Divider Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#8A181A] to-transparent opacity-80" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start space-y-2">
            <Link href="/" className="inline-block">
              <div className="relative">
                <Image
                  src="/images/mk-logo-transparent.png"
                  alt="MK Group of Companies"
                  width={130}
                  height={80}
                  className="object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                />
              </div>
            </Link>
            <p className="pt-1 text-xs tracking-wider text-[#D4AF37]">
              Excellence · Innovation · Trust
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-sm font-semibold tracking-wider text-[#F5E29E]">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>
                <Link href="/about" className="transition-colors hover:text-[#D4AF37]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/companies" className="transition-colors hover:text-[#D4AF37]">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-[#D4AF37]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#D4AF37]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-sm font-semibold tracking-wider text-[#F5E29E]">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <a href="mailto:info@mkgc.com.pk" className="hover:text-[#D4AF37]">
                  info@mkgc.com.pk
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <a href="tel:+923211234567" className="hover:text-[#D4AF37]">
                  +92 321 1234567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-sm font-semibold tracking-wider text-[#F5E29E]">
              Follow Us
            </h4>
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Deep Burgundy Copyright Bottom Bar */}
      <div className="border-t border-[#8A181A]/30 bg-[#40080B] py-3 text-center text-[11px] text-[#D8CEBE]">
        <div className="mx-auto max-w-7xl px-4">
          <p className="tracking-wide">
            © 2024 MK Group of Companies. All Rights Reserved. &nbsp;|&nbsp; Designed for{" "}
            <span className="text-[#F5E29E]">mkgc.com.pk</span> &nbsp;|&nbsp;{" "}
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
