import Link from "next/link";
import {
  Mail,
  User,
  Search,
  Star,
  CalendarDays,
  Clock,
  FileText,
  ChevronRight,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/constants/howItWorks";

/* ─────────────────────────────────────────────
   Per-step CSS UI mockup snippets
───────────────────────────────────────────── */
const StepSnippet = ({ stepNumber }: { stepNumber: string }) => {
  switch (stepNumber) {
    /* ── Step 01: Registration form ── */
    case "01":
      return (
        <div className="w-full bg-gray-50 rounded-2xl p-3.5 space-y-2">
          <div className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-3 py-2.5">
            <User className="w-3.5 h-3.5 text-gray-300 shrink-0" />
            <span className="text-[11px] text-gray-300">Full name</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-3 py-2.5">
            <Mail className="w-3.5 h-3.5 text-gray-300 shrink-0" />
            <span className="text-[11px] text-gray-300">Email address</span>
          </div>
          <div className="bg-lavender-500 rounded-xl py-2.5 text-center">
            <span className="text-[11px] font-semibold text-white">
              Create Account →
            </span>
          </div>
        </div>
      );

    /* ── Step 02: Doctor search result ── */
    case "02":
      return (
        <div className="w-full bg-gray-50 rounded-2xl p-3.5 space-y-2">
          <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2.5">
            <Search className="w-3.5 h-3.5 text-lavender-500 shrink-0" />
            <span className="text-[11px] text-gray-300">
              Find a specialist...
            </span>
          </div>
          {/* Doctor result row */}
          <div className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl p-2.5">
            <div className="w-8 h-8 rounded-full bg-lavender-500/15 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-lavender-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-medical-dark truncate">
                Dr. Sarah K.
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                <span className="text-[9px] text-gray-400">
                  4.9 · Cardiologist
                </span>
              </div>
            </div>
            <span className="text-[9px] font-semibold text-white bg-lavender-500 rounded-full px-2.5 py-1 shrink-0">
              Book
            </span>
          </div>
          {/* Second faded result */}
          <div className="flex items-center gap-2.5 bg-white/60 border border-gray-100/60 rounded-xl p-2.5 opacity-50">
            <div className="w-8 h-8 rounded-full bg-lavender-500/10 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-lavender-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-medical-dark truncate">
                Dr. James L.
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                <span className="text-[9px] text-gray-400">
                  4.8 · Neurologist
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    /* ── Step 03: Time slot booking ── */
    case "03":
      return (
        <div className="w-full bg-gray-50 rounded-2xl p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-medical-dark">
              Available Slots
            </p>
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <CalendarDays className="w-3 h-3" />
              <span>Today</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            {["9:00 AM", "11:00 AM", "2:00 PM"].map((time, i) => (
              <span
                key={time}
                className={`flex-1 text-center text-[10px] font-semibold rounded-lg py-1.5 transition-colors ${
                  i === 1
                    ? "bg-lavender-500 text-white"
                    : "bg-white border border-gray-200 text-gray-500"
                }`}
              >
                {time}
              </span>
            ))}
          </div>
          <div className="bg-lavender-500 rounded-xl py-2.5 text-center">
            <span className="text-[11px] font-semibold text-white">
              Confirm Booking ✓
            </span>
          </div>
        </div>
      );

    /* ── Step 04: Live consultation + prescription ── */
    case "04":
      return (
        <div className="w-full bg-gray-50 rounded-2xl p-3.5 space-y-2">
          {/* Live badge */}
          <div className="flex items-center gap-2.5 bg-emerald-500 rounded-xl px-3 py-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="text-[11px] font-semibold text-white">
              Live · Dr. Sarah K.
            </span>
            <span className="ml-auto text-[10px] text-white/70">12:30</span>
          </div>
          {/* Prescription row */}
          <div className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl p-2.5">
            <div className="w-8 h-8 rounded-lg bg-lavender-500/10 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-lavender-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-medical-dark">
                Prescription Ready
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5">Tap to download</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />
          </div>
        </div>
      );

    default:
      return null;
  }
};

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* ── Radial Gradient Background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #f8f9f8 40%, #8b8dc8 100%)",
        }}
      />
      {/* Dot pattern texture */}
      <div className="absolute inset-0 z-0 bg-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header — Centered ── */}
        <div className="flex flex-col items-center text-center gap-5 mb-12 lg:mb-20">
          <div className="flex items-center gap-2 bg-lavender-500/10 border border-lavender-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 shrink-0" />
            <span className="text-xs font-semibold text-lavender-500 uppercase tracking-widest">
              How It Works
            </span>
          </div>

          <h2 className="headline-font text-4xl md:text-5xl text-medical-dark max-w-lg">
            Get care in{" "}
            <span className="text-lavender-500">4 simple steps</span>
          </h2>

          <p className="text-base text-gray-400 leading-relaxed max-w-md">
            From registration to consultation — the entire process takes less
            than 5 minutes. Here&apos;s how it works.
          </p>
        </div>

        {/* ── Steps Grid ── */}
        <div className="relative">
          {/* Connector line — desktop only, spans icon-center to icon-center */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] hidden lg:block border-t-2 border-dashed border-lavender-500/25 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center gap-5"
                >
                  {/* ── Step Icon Node (sits on the connector line) ── */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-lavender-500 flex items-center justify-center shadow-lg shadow-lavender-500/30 shrink-0 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* ── Step Card ── */}
                  <div className="relative w-full bg-white rounded-3xl border border-gray-100 p-6 flex flex-col gap-3 overflow-hidden hover:border-lavender-500/25 hover:shadow-xl hover:shadow-lavender-500/8 hover:-translate-y-1 transition-all duration-300">
                    {/* Decorative ghost number */}
                    <span className="absolute -top-2 right-4 text-8xl font-black text-lavender-500/6 leading-none select-none pointer-events-none">
                      {step.number}
                    </span>

                    {/* Step tag */}
                    <span className="text-[10px] font-bold text-lavender-500 uppercase tracking-widest">
                      Step {step.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-bold text-medical-dark leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>

                    {/* ── Visual UI Snippet ── */}
                    <StepSnippet stepNumber={step.number} />

                    {/* Duration tag */}
                    <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-gray-400 pt-1 mt-auto">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <Link
            href="/register"
            className="group inline-flex items-center gap-2 bg-lavender-500 hover:bg-lavender-600 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:-translate-y-0.5"
          >
            Get Started for Free
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <p className="text-xs text-gray-400">
            No credit card required &nbsp;·&nbsp; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
