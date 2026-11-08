import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Laptop,
  Mail,
  Megaphone,
  Radio,
  BookOpen,
  Cpu,
  ShoppingCart,
  Briefcase,
  Plane,
  Camera,
  TrendingUp,
  type LucideIcon,
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

type CompanyPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return companies.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { id } = await params;
  const company = companies.find((item) => item.id === id);

  if (!company) {
    return { title: "Company Not Found | MK Group of Companies" };
  }

  return {
    title: `${company.name} | MK Group of Companies`,
    description: company.description,
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = await params;
  const company = companies.find((item) => item.id === id);

  if (!company) notFound();

  const Icon = iconMap[company.iconName] ?? Building2;

  return (
    <div className="min-h-screen bg-[#080706] py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/companies"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#F5E29E]"
        >
          <ArrowLeft className="h-4 w-4" />
          All companies
        </Link>

        <section className="mt-6 rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#1A140D] via-[#100D0A] to-[#080706] p-7 sm:p-10 lg:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#21190F] text-[#D4AF37]">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            MK Group Company
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {company.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-[#F5E29E]">
            {company.tagline}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            {company.description}
          </p>
          <Link
            href={`/contact?subject=${encodeURIComponent(`Inquiry regarding ${company.name}`)}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            Contact {company.name}
          </Link>
        </section>

        <section className="mt-12" aria-labelledby="services-heading">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              What we offer
            </p>
            <h2
              id="services-heading"
              className="mt-2 text-2xl font-bold text-white sm:text-3xl"
            >
              {company.name} Services
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {company.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-[#100D0A] p-5 text-sm text-zinc-200"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </section>

        {company.highlights.length > 0 && (
          <section className="mt-12" aria-labelledby="highlights-heading">
            <h2
              id="highlights-heading"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Our strengths
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {company.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-[#D4AF37]/30 bg-[#17120C] px-4 py-2 text-sm text-[#F5E29E]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {company.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5 text-center"
            >
              <p className="text-2xl font-bold text-[#F5E29E]">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </section>

        {company.id === "shopping-mall" && (
          <Link
            href="/shopping-mall"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#F5E29E] hover:text-[#D4AF37]"
          >
            Explore the Shopping Mall
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
