"use client";

import Image from "next/image";
import Link from "next/link";

interface MKLogoProps {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  className?: string;
  variant?: "header" | "footer";
}

export default function MKLogo({
  size = "md",
  withTagline = false,
  className = "",
  variant = "header",
}: MKLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center transition-all duration-300 hover:opacity-95 ${className}`}
    >
      <div className="relative">
        <Image
          src="/images/mk-logo-transparent.png"
          alt="MK Group of Companies"
          width={variant === "footer" ? 135 : 115}
          height={variant === "footer" ? 95 : 80}
          className="object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {variant === "footer" && withTagline && (
        <p className="mt-1.5 text-center text-[11px] font-medium tracking-wider text-[#C5A059]">
          Excellence · Innovation · Trust
        </p>
      )}
    </Link>
  );
}
