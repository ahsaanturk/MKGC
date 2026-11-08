"use client";

import React from "react";
import { Company } from "@/data/companies";

interface CompanyCardProps {
  company: Company;
  onClick: (company: Company) => void;
}

function RenderCompanyIcon({ id }: { id: string }) {
  const iconProps = {
    className: "h-7 w-7 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "marketing":
      // Megaphone
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case "real-estate":
      // Multi-story Buildings
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
          <path d="M16 8h4a2 2 0 0 1 2 2v12" />
          <path d="M8 6h2" />
          <path d="M8 10h2" />
          <path d="M8 14h2" />
          <path d="M8 18h2" />
          <path d="M18 12h1" />
          <path d="M18 16h1" />
        </svg>
      );
    case "education":
      // Graduation Cap
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "software":
      // Laptop
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55A1 1 0 0 1 20.38 20H3.62a1 1 0 0 1-.9-1.45L4 16" />
        </svg>
      );
    case "trading":
      // Chart with upward trending arrow
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <path d="M14 9h5v5" />
        </svg>
      );
    case "digital-marketing":
      // Megaphone with sound waves
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M11 6 3 9v6l8 3V6z" />
          <path d="M15 9a4 4 0 0 1 0 6" />
          <path d="M18 6a8 8 0 0 1 0 12" />
          <path d="M7 15v4a2 2 0 0 0 2 2h0" />
        </svg>
      );
    case "quran-academy":
      // Open Quran / Book
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <path d="M6 8h2" />
          <path d="M16 8h2" />
        </svg>
      );
    case "it-centre":
      // PC Monitor + Computer
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      );
    case "shopping-mall":
      // Shopping Cart
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="8" cy="21" r="1" fill="currentColor" />
          <circle cx="19" cy="21" r="1" fill="currentColor" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      );
    case "career-hub":
      // Briefcase
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v2" />
        </svg>
      );
    case "tour-travel":
      // Airplane
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );
    case "digital-media":
      // Camera
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CompanyCard({ company, onClick }: CompanyCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(company)}
      className="group relative flex h-[92px] w-full flex-col items-center justify-center rounded-xl border border-[#C5A059]/40 bg-[#120F0C]/90 p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#F5E29E] hover:bg-[#1A1510] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] focus:outline-none sm:h-[100px]"
    >
      {/* Golden Icon */}
      <div className="mb-1.5 flex items-center justify-center">
        <RenderCompanyIcon id={company.id} />
      </div>

      {/* Company Name */}
      <span className="text-[12px] font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-[#F5E29E] sm:text-[13px]">
        {company.name}
      </span>
    </button>
  );
}
