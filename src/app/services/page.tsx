import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle,
  Building2,
  Code,
  Plane,
  TrendingUp,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | MK Group of Companies",
  description:
    "Explore the diversified corporate and consumer services offered across 12 industries by MK Group of Companies.",
};

const serviceSectors = [
  {
    title: "Technology & Software Engineering",
    icon: Code,
    description:
      "Enterprise software, AI automation pipelines, cloud architecture, and modern scalable web/mobile platforms engineered to global benchmarks.",
    divisions: ["MK Software", "MK IT Centre"],
    deliverables: [
      "Custom ERP & CRM development",
      "Tier-3 Data Center management",
      "AI & Machine Learning solutions",
      "24/7 Cybersecurity monitoring",
    ],
  },
  {
    title: "Real Estate & Urban Infrastructure",
    icon: Building2,
    description:
      "Strategic land acquisition, luxury architectural residences, high-yield commercial hubs, and flagship retail shopping mall developments.",
    divisions: ["MK Real Estate", "MK Shopping Mall"],
    deliverables: [
      "Commercial real estate development",
      "High-end retail space leasing",
      "Property portfolio asset management",
      "Urban master planning & construction",
    ],
  },
  {
    title: "Brand Strategy, Media & Growth",
    icon: Megaphone,
    description:
      "High-impact marketing, cinematic TV commercial production, multi-channel digital performance marketing, and corporate PR.",
    divisions: ["MK Marketing", "MK Digital Marketing", "MK Digital Media"],
    deliverables: [
      "Nationwide ATL & BTL advertising",
      "4K/8K Broadcast studio production",
      "SEO & Paid performance media funnels",
      "Viral corporate brand positioning",
    ],
  },
  {
    title: "Global Commerce, Logistics & Travel",
    icon: TrendingUp,
    description:
      "International commodity trading, cross-border logistics corridors, wholesale supply networks, and bespoke luxury & pilgrimage voyages.",
    divisions: ["MK Trading", "MK Tour & Travel"],
    deliverables: [
      "Import & export commodity trading",
      "VIP Umrah & Hajj holy pilgrimage",
      "Corporate international travel desk",
      "Customs clearance & warehousing",
    ],
  },
  {
    title: "Education, Spiritual & Human Capital",
    icon: Briefcase,
    description:
      "Academic excellence, verified Quranic sciences, executive corporate headhunting, and nation-building workforce upskilling.",
    divisions: ["MK Education", "MK Quran Academy", "MK Career Hub"],
    deliverables: [
      "Progressive K-12 STEM education",
      "Tajweed & Islamic sciences academy",
      "Executive recruitment & headhunting",
      "Vocational workforce certifications",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#080706] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-block h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#F5E29E] mb-4" />
          <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-gold-gradient">Conglomerate Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Providing comprehensive corporate, technical, commercial, and consumer capabilities across Pakistan with end-to-end reliability.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="mt-16 space-y-8">
          {serviceSectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#120F0C] via-[#0E0C09] to-[#120F0C] p-8 shadow-md transition-all hover:border-[#D4AF37]/60"
              >
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        {sector.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                      {sector.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {sector.divisions.map((div, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-[#D4AF37]/40 bg-[#1F1912] px-3 py-1 text-[11px] font-medium text-[#F5E29E]"
                        >
                          {div}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-zinc-800/80 pt-6 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                      Key Deliverables & Capabilities
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {sector.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                          <span className="text-xs text-zinc-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5E29E] hover:text-[#D4AF37]"
                      >
                        Request Service Proposal
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#8A181A]/40 to-[#0F0D0A] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a Tailored Multi-Sector Solution?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-zinc-300 sm:text-sm">
            Leverage the cross-disciplinary power of all 12 MK Group companies under a unified contract and dedicated relationship manager.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-6 py-3 text-sm font-bold text-black shadow-lg hover:brightness-110"
            >
              Consult With Our Executive Board
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
