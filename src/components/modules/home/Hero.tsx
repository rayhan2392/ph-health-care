import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Play, CheckCircle } from "lucide-react";
import {
  HERO_STATS,
  HERO_DOCTOR_AVATARS,
  HERO_APPOINTMENT_DOCTOR,
} from "@/constants/hero";

const Hero = () => {
  return (
    <main className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      {/* ── Radial Gradient Background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #f8f9f8 40%, #8b8dc8 100%)",
        }}
      />
      {/* ── Dot pattern texture on top of gradient ── */}
      <div className="absolute inset-0 z-0 bg-pattern opacity-20 pointer-events-none" />

      {/* ── Two-Column Layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center py-20 lg:py-0 min-h-[calc(100vh-80px)]">
        {/* ════════════════════════
            LEFT — Content
        ════════════════════════ */}
        <div className="flex flex-col gap-8">
          {/* 1. Live Trust Badge */}
          <div className="animate-hero-fade-up flex w-fit items-center gap-2.5 bg-white border border-lavender-500/20 rounded-full px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-medical-dark/80">
              Trusted by{" "}
              <span className="font-semibold text-medical-dark">50,000+</span>{" "}
              patients across Bangladesh
            </span>
          </div>

          {/* 2. Headline + Description */}
          <div className="animate-hero-fade-up-delay-1 flex flex-col gap-5">
            <h1 className="headline-font text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] text-medical-dark">
              Your Health,{" "}
              <span className="relative inline-block">
                <span className="text-lavender-500">Our Priority</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="5"
                  viewBox="0 0 280 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 3.5C50 1 110 1 140 3.5C170 6 230 6 279 3.5"
                    stroke="#8b8dc8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />— Always.
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Connect with certified doctors for consultations, prescriptions,
              and ongoing care — all from the comfort of your home.
            </p>
          </div>

          {/* 3. CTAs */}
          <div className="animate-hero-fade-up-delay-2 flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 bg-lavender-500 hover:bg-lavender-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-lavender-500/25 hover:shadow-lavender-500/40 hover:-translate-y-0.5"
            >
              Book a Free Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <button className="group inline-flex items-center gap-3 text-medical-dark hover:text-lavender-500 text-sm font-medium transition-colors duration-200">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 group-hover:border-lavender-500/20 group-hover:bg-lavender-500/5 transition-all duration-200 shrink-0">
                <Play className="w-3.5 h-3.5 ml-0.5 fill-lavender-500 text-lavender-500" />
              </span>
              See how it works
            </button>
          </div>

          {/* 4. Stats Row */}
          <div className="animate-hero-fade-up-delay-3 flex flex-wrap gap-8 pt-8 border-t border-gray-200/60">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-medical-dark tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════
            RIGHT — Visual
        ════════════════════════ */}
        <div className="animate-hero-slide-in relative flex justify-center items-center py-8 sm:py-12 lg:py-20">
          {/* Ambient glow behind image */}
          <div className="absolute inset-10 bg-lavender-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* ── Main Doctor Image ── */}
          <div className="relative z-10 w-full max-w-[300px] xl:max-w-[340px]">
            <div className="absolute -inset-3 bg-linear-to-b from-lavender-500/15 to-transparent rounded-[2.5rem] blur-xl" />
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
              alt="Certified doctor ready for video consultation"
              width={340}
              height={460}
              priority
              className="relative rounded-[2rem] shadow-2xl object-cover w-full h-auto border-4 border-white/70"
            />
          </div>

          {/* ── Card 1: Appointment Booked — top-left ── */}
          <div className="animate-card-pop-1 animate-float hidden md:flex absolute -left-2 xl:-left-6 top-14 z-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-3.5 flex-col gap-3 w-44">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-[11px] font-bold text-medical-dark">
                Appointment Booked
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Image
                src={HERO_APPOINTMENT_DOCTOR.src}
                alt={HERO_APPOINTMENT_DOCTOR.alt}
                width={32}
                height={32}
                className="rounded-full object-cover border-2 border-lavender-500/15 shrink-0 w-8 h-8"
              />
              <div>
                <p className="text-[11px] font-semibold text-medical-dark leading-tight">
                  {HERO_APPOINTMENT_DOCTOR.name}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {HERO_APPOINTMENT_DOCTOR.time}
                </p>
              </div>
            </div>
            <div className="w-full bg-emerald-50 rounded-lg py-1.5">
              <p className="text-[10px] text-emerald-600 font-semibold text-center tracking-wide">
                Confirmed ✓
              </p>
            </div>
          </div>

          {/* ── Card 2: Rating — top-right ── */}
          <div className="animate-card-pop-2 animate-float-reverse hidden md:flex absolute -right-2 xl:-right-6 top-10 z-20 bg-lavender-500 rounded-2xl shadow-lg p-4 flex-col gap-2 w-36">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-white text-white" />
              ))}
            </div>
            <p className="text-2xl font-bold text-white leading-none">4.9</p>
            <p className="text-[10px] text-white/65 leading-relaxed">
              Based on 12,000+
              <br />
              patient reviews
            </p>
          </div>

          {/* ── Card 3: Doctors Online — bottom-right ── */}
          <div className="animate-card-pop-3 animate-float-delayed hidden md:flex absolute -right-2 xl:-right-6 bottom-16 z-20 bg-white rounded-2xl shadow-lg border border-gray-100 p-3.5 flex-col gap-2.5 w-44">
            <div className="flex -space-x-2">
              {HERO_DOCTOR_AVATARS.map((doc) => (
                <Image
                  key={doc.alt}
                  src={doc.src}
                  alt={doc.alt}
                  width={28}
                  height={28}
                  className="rounded-full border-2 border-white object-cover w-7 h-7"
                />
              ))}
              <div className="w-7 h-7 rounded-full bg-lavender-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                +12
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-medical-dark">
                Doctors Online
              </p>
              <p className="text-[10px] text-emerald-500 font-semibold mt-0.5 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                134 available now
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
