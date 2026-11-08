"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  ExternalLink,
  Mail,
  Building2,
  Megaphone,
  GraduationCap,
  Laptop,
  TrendingUp,
  Radio,
  BookOpen,
  Cpu,
  ShoppingCart,
  Briefcase,
  Plane,
  Camera,
  LucideIcon,
} from "lucide-react";
import { Company } from "@/data/companies";

const iconMap: Record<string, LucideIcon> = {
  Megaphone,
  Building2,
  GraduationCap,
  Laptop,
  TrendingUp,
  Radio,
  BookOpen,
  Cpu,
  ShoppingCart,
  Briefcase,
  Plane,
  Camera,
};

interface CompanyModalProps {
  company: Company | null;
  onClose: () => void;
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (company) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [company, onClose]);

  if (!company) return null;

  const Icon = iconMap[company.iconName] || Megaphone;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-[#0F0D0A] shadow-[0_0_50px_rgba(212,175,55,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#8A181A] via-[#D4AF37] to-[#F5E29E]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-zinc-800/80 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#1D1711] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37]">
                MK Group Enterprise
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {company.name}
              </h3>
              <p className="text-xs text-zinc-400">{company.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[70vh] overflow-y-auto p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              Overview
            </h4>
            <p className="text-sm leading-relaxed text-zinc-300">
              {company.description}
            </p>
          </div>

          {/* Key Metrics / Stats */}
          <div className="grid grid-cols-3 gap-3">
            {company.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#D4AF37]/20 bg-[#181410] p-3 text-center"
              >
                <div className="text-lg font-bold text-[#F5E29E]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
              Core Capabilities & Services
            </h4>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {company.services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-zinc-900/60 p-2.5 text-xs text-zinc-200 border border-zinc-800/60"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col gap-3 border-t border-zinc-800/80 bg-[#0A0907] p-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${company.contactEmail}`}
            className="flex items-center justify-center gap-2 text-xs text-zinc-300 hover:text-[#D4AF37]"
          >
            <Mail className="h-4 w-4 text-[#D4AF37]" />
            <span>{company.contactEmail}</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
            >
              Close
            </button>
            <Link
              href={`/contact?subject=Inquiry%20regarding%20${encodeURIComponent(
                company.name
              )}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-4 py-2 text-xs font-semibold text-black shadow hover:brightness-110"
            >
              Contact Division
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
