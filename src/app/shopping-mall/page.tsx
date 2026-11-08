import { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  Utensils,
  Film,
  Sparkles,
  Car,
  Shield,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MK Shopping Mall | Premier Retail & Lifestyle Destination",
  description:
    "Experience world-class shopping, dining, and family entertainment at MK Shopping Mall in Pakistan.",
};

export default function ShoppingMallPage() {
  return (
    <div className="bg-[#080706] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#1C160F] via-[#100D0A] to-[#080706] p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-[#1D1711] px-3.5 py-1 text-xs font-semibold text-[#F5E29E]">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              Flagship Lifestyle Destination
            </span>
            <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              MK <span className="text-gold-gradient">Shopping Mall</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              A premier retail, gastronomic, and entertainment marvel situated in the heart of Pakistan. Home to prestigious international brands, culinary terraces, and luxury family leisure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Retail%20Space%20Leasing%20Inquiry%20-%20MK%20Shopping%20Mall"
                className="rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-6 py-3 text-xs font-bold text-black shadow-lg hover:brightness-110"
              >
                Inquire For Retail Space
              </Link>
              <Link
                href="#features"
                className="rounded-lg border border-[#D4AF37] bg-black/50 px-6 py-3 text-xs font-semibold text-[#F5E29E] hover:bg-[#1A150F]"
              >
                Explore Amenities
              </Link>
            </div>
          </div>
        </div>

        {/* Mall Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-[#120F0C] p-6 text-center">
            <div className="text-3xl font-extrabold text-[#F5E29E]">150+</div>
            <div className="mt-1 text-xs text-zinc-400">Retail & Luxury Outlets</div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-[#120F0C] p-6 text-center">
            <div className="text-3xl font-extrabold text-[#F5E29E]">350K+</div>
            <div className="mt-1 text-xs text-zinc-400">Monthly Footfall</div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-[#120F0C] p-6 text-center">
            <div className="text-3xl font-extrabold text-[#F5E29E]">1,200+</div>
            <div className="mt-1 text-xs text-zinc-400">Valet & Smart Parking Bays</div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-[#120F0C] p-6 text-center">
            <div className="text-3xl font-extrabold text-[#F5E29E]">6 Screen</div>
            <div className="mt-1 text-xs text-zinc-400">Multiplex Cinema</div>
          </div>
        </div>

        {/* Features / Zones */}
        <div id="features" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-[#F5E29E] sm:text-3xl">
              World-Class Amenities & Zones
            </h2>
            <p className="mt-2 text-xs text-zinc-400">Designed for leisure, luxury, and family comfort</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#110E0B] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] mb-4">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Luxury & High Street Retail</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Spanning multinational fashion apparel, jewelry ateliers, cosmetics, and state-of-the-art tech showrooms.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#110E0B] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] mb-4">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Gourmet Food Street & Cafes</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                A scenic rooftop food terrace featuring authentic Pakistani delicacies, global fast food chains, and artisanal coffee roasters.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#110E0B] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] mb-4">
                <Film className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Cinema & Family Entertainment</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Dolby Atmos 3D theater screens, VR gaming arcade, dedicated soft play areas, and safe entertainment for children.
              </p>
            </div>
          </div>
        </div>

        {/* Mall Visitor Details */}
        <div className="mt-20 rounded-2xl border border-[#D4AF37]/30 bg-[#120F0C] p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Clock className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h4 className="text-xs font-semibold uppercase text-[#D4AF37]">Operating Hours</h4>
                <p className="text-xs text-zinc-300">Mon - Sun: 10:00 AM - 12:00 Midnight</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPin className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h4 className="text-xs font-semibold uppercase text-[#D4AF37]">Location</h4>
                <p className="text-xs text-zinc-300">Prime Commercial Sector, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone className="h-6 w-6 text-[#D4AF37]" />
              <div>
                <h4 className="text-xs font-semibold uppercase text-[#D4AF37]">Leasing Desk</h4>
                <p className="text-xs text-zinc-300">+92 321 1234567 | mall@mkgc.com.pk</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
