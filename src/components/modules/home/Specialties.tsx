import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SPECIALTIES } from "@/constants/specialties";

const Specialties = () => {
  const visibleSpecialties = SPECIALTIES.slice(0, 8);

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
      {/* Dot pattern texture on top of gradient */}
      <div className="absolute inset-0 z-0 bg-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center gap-5 mb-14">
          {/* Label pill */}
          <div className="flex items-center gap-2 bg-lavender-500/10 border border-lavender-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 shrink-0" />
            <span className="text-xs font-semibold text-lavender-500 uppercase tracking-widest">
              Specialties
            </span>
          </div>

          {/* Heading */}
          <h2 className="headline-font text-4xl md:text-5xl text-medical-dark max-w-lg">
            Find the right expert{" "}
            <span className="text-lavender-500">for your needs</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-400 leading-relaxed max-w-md">
            Browse from 12+ medical specialties — certified doctors are ready to
            help you get the care you deserve.
          </p>
        </div>

        {/* ── Specialty Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleSpecialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <Link
                key={specialty.name}
                href={specialty.href}
                className="group block p-5 sm:p-6 lg:p-7 rounded-3xl bg-lavender-500/7 border border-lavender-500/10 hover:border-lavender-500/25 hover:shadow-lg hover:shadow-lavender-500/8 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon box */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-lavender-500/15 transition-all duration-300 shrink-0">
                  <Icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-lavender-500"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-medical-dark mb-2 leading-snug group-hover:text-lavender-500 transition-colors duration-300">
                  {specialty.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5 sm:mb-7">
                  {specialty.description}
                </p>

                {/* Footer: doctor count + Learn more */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    <span className="font-semibold text-medical-dark">
                      {specialty.doctorCount}
                    </span>{" "}
                    doctors
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-lavender-500 group-hover:text-lavender-600 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── View All CTA ── */}
        <div className="flex justify-center mt-12">
          <Link
            href="/specialties"
            className="group inline-flex items-center gap-2.5 border border-medical-dark/20 hover:border-lavender-500 text-medical-dark hover:text-lavender-500 rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-lavender-500/5"
          >
            View all specialties
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
