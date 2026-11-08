import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Shield, MapPin } from "lucide-react";
import { companies } from "@/data/companies";
import CompanyCard from "./CompanyCard";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] pt-8 pb-10 lg:pt-10 lg:pb-14">
      {/* Golden Glowing Horizon Line Top Accent */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-network.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/90 via-[#080706]/65 to-[#080706]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/20 via-transparent to-[#080706]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-12">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-center pt-2 lg:col-span-5 lg:pt-4">
            
            {/* Top Gold Thin Accent Bar */}
            <div className="mb-4 h-[2px] w-14 bg-gradient-to-r from-[#D4AF37] to-[#F5E29E] shadow-[0_0_6px_rgba(212,175,55,0.8)]" />

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-[40px] lg:text-[34px] xl:text-[36px]">
              <span className="block text-[#F5E29E] drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]">
                BUILDING EXCELLENCE
              </span>
              <span className="block text-[#F5E29E] drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]">
                ACROSS 12 INDUSTRIES
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-5 text-[13.5px] leading-relaxed text-[#D6CEBF] sm:text-[14.5px] sm:leading-relaxed">
              MK Group of Companies is a diversified conglomerate delivering
              innovation, trust, and excellence across marketing, real estate,
              technology, education, and more throughout Pakistan.
            </p>

            {/* Buttons Row */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="#companies"
                className="inline-flex items-center justify-center rounded-xl bg-[#F5E29E] px-6 py-2.5 text-sm font-bold text-black shadow-[0_2px_12px_rgba(212,175,55,0.4)] transition-all duration-200 hover:bg-[#FFEAA3] hover:scale-[1.02] active:scale-95"
              >
                Explore Our Companies
              </Link>
              <Link
                href="/companies"
                className="inline-flex items-center justify-center rounded-xl border border-[#D4AF37] bg-black/60 px-6 py-2.5 text-sm font-semibold text-[#F5E29E] shadow-sm transition-all duration-200 hover:bg-[#1C160F] hover:border-[#FFEAA3] active:scale-95"
              >
                Browse Companies &amp; Services
              </Link>
            </div>

            {/* Credential Badges Row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 pt-3 text-xs text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                <span className="font-semibold text-zinc-100">Est. 2015</span>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#D4AF37]" />
                <span className="font-semibold text-zinc-100">12+ Companies</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#D4AF37]" />
                <span className="font-semibold text-zinc-100">Based in Pakistan</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-7">
            
            {/* Header of 12 Companies Section */}
            <div className="mb-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#F5E29E] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] sm:text-2xl">
                OUR 12 COMPANIES
              </h2>
              <p className="mt-1 text-xs text-[#C5BDB0] sm:text-sm">
                Diversified expertise across multiple industries, united under one vision
              </p>
            </div>

            {/* 4x3 Grid matching screenshot exactly */}
            <div id="companies" className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {companies.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
