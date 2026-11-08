"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Mail,
  ExternalLink,
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
  LucideIcon,
} from "lucide-react";
import { companies } from "@/data/companies";

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

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#080706] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-block h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#F5E29E] mb-4" />
          <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-gold-gradient">Our 12 Companies</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Explore the specialized companies forming the MK Group of Companies ecosystem. Each entity operates with industry-leading standards while leveraging group synergy.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, services, capabilities..."
              className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#120F0C] py-3 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            />
          </div>
        </div>

        {/* 12 Detailed Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map((company) => {
            const Icon = iconMap[company.iconName] || Megaphone;
            return (
              <div
                key={company.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#B38F4D]/30 bg-[#100D0A] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#1A140E] text-[#D4AF37] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] font-medium text-[#D4AF37]">
                      Subsidiary
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-[#F5E29E]">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#D4AF37]">
                    {company.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {company.description}
                  </p>

                  {/* Services snippet */}
                  <div className="mt-4 border-t border-zinc-800/80 pt-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Key Services:
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {company.services.slice(0, 3).map((serv, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                          <span>{serv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                  <a
                    href={`mailto:${company.contactEmail}`}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#D4AF37]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Inquire</span>
                  </a>

                  <Link
                    href={`/companies/${company.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#1C160F] px-3.5 py-1.5 text-xs font-semibold text-[#F5E29E] border border-[#D4AF37]/40 transition-colors hover:bg-[#D4AF37] hover:text-black"
                  >
                    View Details
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="mt-16 text-center text-sm text-zinc-400">
            No company found matching &quot;{searchQuery}&quot;. Please try another keyword.
          </div>
        )}

      </div>

    </div>
  );
}
