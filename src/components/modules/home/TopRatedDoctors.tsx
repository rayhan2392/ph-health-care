import Image from "next/image";
import Link from "next/link";
import { Star, Briefcase, ArrowRight, ChevronRight } from "lucide-react";
import { TOP_RATED_DOCTORS } from "@/constants/doctors";

const TopRatedDoctors = () => {
  const visibleDoctors = TOP_RATED_DOCTORS.slice(0, 4);

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
        {/* ── Section Header — Split layout ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          {/* Left: label + heading */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-lavender-500/10 border border-lavender-500/20 rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 shrink-0" />
              <span className="text-xs font-semibold text-lavender-500 uppercase tracking-widest">
                Top Rated Doctors
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="headline-font text-4xl md:text-5xl text-medical-dark">
                Meet our most <span className="text-lavender-500">trusted</span>{" "}
                specialists
              </h2>
              <p className="text-base text-gray-400 leading-relaxed max-w-md">
                Hand-picked doctors with the highest patient ratings and years
                of proven clinical experience.
              </p>
            </div>
          </div>

          {/* Right: View all CTA */}
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2.5 border border-medical-dark/20 hover:border-lavender-500 text-medical-dark hover:text-lavender-500 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 hover:bg-lavender-500/5 w-fit shrink-0"
          >
            View all doctors
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* ── Doctor Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              href={doctor.href}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-lavender-500/25 hover:shadow-xl hover:shadow-lavender-500/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* ── Image Zone ── */}
              <div className="relative h-52 overflow-hidden bg-lavender-500/5">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Availability badge */}
                <div
                  className={`absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1.5 rounded-full backdrop-blur-sm ${
                    doctor.availableToday
                      ? "bg-emerald-500 text-white"
                      : "bg-white/90 text-medical-dark"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      doctor.availableToday ? "bg-white" : "bg-amber-400"
                    }`}
                  />
                  {doctor.availableToday
                    ? "Available Today"
                    : doctor.nextAvailable}
                </div>
              </div>

              {/* ── Content Zone ── */}
              <div className="p-5 flex flex-col gap-3">
                {/* Name + Specialty */}
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-bold text-medical-dark leading-snug group-hover:text-lavender-500 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-lavender-500 font-medium">
                    {doctor.specialty}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(doctor.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-medical-dark">
                    {doctor.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({doctor.reviewCount.toLocaleString()})
                  </span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span>{doctor.experience} of experience</span>
                </div>

                {/* Footer: fee + Book Now */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
                  <div>
                    <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                      Consultation
                    </p>
                    <p className="text-sm font-bold text-medical-dark">
                      Tk {doctor.fee.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-lavender-500 group-hover:text-lavender-600 transition-colors duration-300">
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
