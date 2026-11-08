import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Building, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MK Group of Companies",
  description:
    "Learn about the history, vision, leadership, and core values of MK Group of Companies, established in 2015 in Pakistan.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#080706] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-block h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#F5E29E] mb-4" />
          <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-gold-gradient">About MK Group of Companies</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Founded in 2015 in Lahore, Pakistan, MK Group has grown from a visionary venture into a powerhouse conglomerate spanning 12 strategic industries with unwavering integrity and technological focus.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative rounded-2xl border border-[#D4AF37]/40 bg-[#120F0C] p-8 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] mb-6">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              To be Pakistan&apos;s most admired and diversified conglomerate, driving progressive transformation across technology, commerce, urban spaces, and education while establishing benchmarks of international quality and corporate responsibility.
            </p>
          </div>

          <div className="relative rounded-2xl border border-[#D4AF37]/40 bg-[#120F0C] p-8 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              To empower clients, partners, and communities by delivering superior services, state-of-the-art technological infrastructures, and sustainable ventures guided by the core values of Excellence, Innovation, and Trust.
            </p>
          </div>
        </div>

        {/* Conglomerate Milestones */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-[#F5E29E] sm:text-3xl">
              Our Journey Since 2015
            </h2>
            <p className="mt-2 text-xs text-zinc-400">A timeline of relentless growth and industry impact</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-zinc-800 bg-[#110E0B] p-6">
              <span className="text-xs font-bold uppercase text-[#D4AF37]">2015 - Inception</span>
              <h3 className="mt-2 text-lg font-bold text-white">Foundation in Lahore</h3>
              <p className="mt-2 text-xs text-zinc-400">
                MK Group launched with core focus on marketing advisory and strategic trading networks in Pakistan.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#110E0B] p-6">
              <span className="text-xs font-bold uppercase text-[#D4AF37]">2018 - Tech & Real Estate</span>
              <h3 className="mt-2 text-lg font-bold text-white">Digital & Urban Expansion</h3>
              <p className="mt-2 text-xs text-zinc-400">
                Expansion into enterprise software solutions, digital media studios, and prime commercial real estate developments.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#110E0B] p-6">
              <span className="text-xs font-bold uppercase text-[#D4AF37]">2021 - Community & Education</span>
              <h3 className="mt-2 text-lg font-bold text-white">Spiritual & Educational Wings</h3>
              <p className="mt-2 text-xs text-zinc-400">
                Established MK Education, Quran Academy, and Career Hub to empower human capital and spiritual learning.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-[#110E0B] p-6">
              <span className="text-xs font-bold uppercase text-[#D4AF37]">2024 & Beyond</span>
              <h3 className="mt-2 text-lg font-bold text-white">12 Thriving Sectors</h3>
              <p className="mt-2 text-xs text-zinc-400">
                Flagship MK Shopping Mall inauguration, international tour & travel corridors, and national IT incubation centers.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Corporate Governance */}
        <div className="mt-20 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#17120C] to-[#0D0B08] p-8 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37]">
                Corporate Governance
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Led by Visionary Leadership & Ethical Principles
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                Under the strategic stewardship of our executive board, MK Group operates with institutional rigour, transparent reporting, and deep commitment to social responsibility and sustainable nation-building.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-[#8A181A] to-[#600F11] px-6 py-2.5 text-xs font-semibold text-white shadow hover:brightness-110"
                >
                  Contact Corporate Office
                </Link>
                <Link
                  href="/companies"
                  className="rounded-lg border border-[#D4AF37] px-6 py-2.5 text-xs font-semibold text-[#F5E29E] hover:bg-[#1C160F]"
                >
                  View Our 12 Companies
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4 border border-zinc-800">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span className="text-xs text-zinc-300">
                  Strict compliance with Pakistan corporate law and international financial standards.
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4 border border-zinc-800">
                <Award className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span className="text-xs text-zinc-300">
                  Multiple industry accolades for corporate governance, client satisfaction, and community impact.
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4 border border-zinc-800">
                <Users className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span className="text-xs text-zinc-300">
                  Empowering a talent network of 1,200+ employees and technical partners across Pakistan.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
