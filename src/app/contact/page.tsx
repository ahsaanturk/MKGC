"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from "lucide-react";
import { companies } from "@/data/companies";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyDivision: "All Divisions / General Corporate Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080706] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-block h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#F5E29E] mb-4" />
          <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-gold-gradient">Contact MK Group of Companies</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Get in touch with our corporate headquarters in Lahore, Pakistan or connect directly with any of our 12 specialized subsidiaries.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Direct Corporate Information */}
          <div className="space-y-8 lg:col-span-5">
            <div className="rounded-2xl border border-[#D4AF37]/35 bg-[#120F0C] p-8 shadow-lg">
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#F5E29E] mb-6">
                Corporate Headquarters
              </h2>

              <ul className="space-y-6 text-sm text-zinc-300">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-[#D4AF37]">
                      Head Office Address
                    </span>
                    <p className="mt-1 font-medium text-white">
                      MK Group Tower, Commercial Hub,
                    </p>
                    <p className="text-zinc-400">Lahore, Punjab, Pakistan</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-[#D4AF37]">
                      Corporate Email
                    </span>
                    <a
                      href="mailto:info@mkgc.com.pk"
                      className="mt-1 block font-medium text-white hover:text-[#D4AF37]"
                    >
                      info@mkgc.com.pk
                    </a>
                    <span className="text-xs text-zinc-400">Response within 24 hours</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-[#D4AF37]">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:+923211234567"
                      className="mt-1 block font-medium text-white hover:text-[#D4AF37]"
                    >
                      +92 321 1234567
                    </a>
                    <span className="text-xs text-zinc-400">UAN & WhatsApp Support Available</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-[#D4AF37]">
                      Office Hours
                    </span>
                    <p className="mt-1 text-white">Monday - Saturday</p>
                    <span className="text-xs text-zinc-400">9:00 AM – 6:00 PM (PKT)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Division Quick Directory */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0E0B09] p-6 text-xs text-zinc-400">
              <span className="text-xs font-semibold uppercase text-[#D4AF37] block mb-2">
                Subsidiary Direct Inquiries
              </span>
              <p className="mb-3">
                Need to reach a specific department directly? Choose the division in the contact form or email our corporate desk.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                <span>• MK Marketing</span>
                <span>• MK Quran Academy</span>
                <span>• MK Real Estate</span>
                <span>• MK IT Centre</span>
                <span>• MK Education</span>
                <span>• MK Shopping Mall</span>
                <span>• MK Software</span>
                <span>• MK Career Hub</span>
                <span>• MK Trading</span>
                <span>• MK Tour & Travel</span>
                <span>• MK Digital Marketing</span>
                <span>• MK Digital Media</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#D4AF37]/35 bg-[#120F0C] p-8 shadow-xl">
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#F5E29E] mb-2">
                Send a Message
              </h2>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the form below. Your request will be routed directly to the appropriate executive division.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-[#D4AF37]/40 bg-[#1A1610] p-8 text-center animate-in fade-in duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Dispatched Successfully</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                    Thank you for contacting MK Group of Companies. Our representative will contact you shortly at{" "}
                    <span className="font-semibold text-[#F5E29E]">{formData.email || "your email address"}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        companyDivision: "All Divisions / General Corporate Inquiry",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-5 py-2 text-xs font-bold text-black"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Muhammad Khan"
                        className="w-full rounded-lg border border-zinc-700 bg-[#181410] px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@yourfirm.com"
                        className="w-full rounded-lg border border-zinc-700 bg-[#181410] px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full rounded-lg border border-zinc-700 bg-[#181410] px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Select Relevant Division *
                      </label>
                      <select
                        value={formData.companyDivision}
                        onChange={(e) => setFormData({ ...formData, companyDivision: e.target.value })}
                        className="w-full rounded-lg border border-zinc-700 bg-[#181410] px-3.5 py-2.5 text-xs text-zinc-100 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      >
                        <option value="All Divisions / General Corporate Inquiry">
                          All Divisions / General Corporate Inquiry
                        </option>
                        {companies.map((c) => (
                          <option key={c.id} value={`MK ${c.name}`}>
                            MK {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Partnership Proposal / Service Inquiry"
                      className="w-full rounded-lg border border-zinc-700 bg-[#181410] px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message / Requirement Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements or proposal..."
                      className="w-full rounded-lg border border-zinc-700 bg-[#181410] px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8A181A] to-[#600F11] py-3 text-xs font-semibold text-white shadow-[0_2px_12px_rgba(138,24,26,0.5)] transition-all hover:scale-[1.01] hover:brightness-110"
                  >
                    <Send className="h-4 w-4" />
                    Submit Corporate Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
