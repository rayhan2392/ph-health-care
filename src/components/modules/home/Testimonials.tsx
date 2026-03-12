import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS, TESTIMONIAL_STATS } from "@/constants/testimonials";
import type { Testimonial } from "@/constants/testimonials";

/* ─────────────────────────────────────────────
   Regular white testimonial card
───────────────────────────────────────────── */
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-1 bg-white rounded-3xl border border-gray-100 p-6 flex flex-col gap-4 hover:border-lavender-500/25 hover:shadow-lg hover:shadow-lavender-500/8 hover:-translate-y-0.5 transition-all duration-300">
    {/* Decorative quote mark */}
    <span className="text-6xl leading-none font-serif text-lavender-500/15 select-none -mb-2">
      &ldquo;
    </span>

    {/* Stars */}
    <div className="flex gap-0.5">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>

    {/* Review */}
    <p className="text-sm text-gray-600 leading-relaxed flex-1">
      {testimonial.review}
    </p>

    {/* Footer */}
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full object-cover w-10 h-10 shrink-0 border border-gray-100"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-medical-dark leading-tight truncate">
          {testimonial.name}
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          {testimonial.location}
        </p>
      </div>
      <span className="text-[10px] font-semibold text-lavender-500 bg-lavender-500/10 rounded-full px-2.5 py-1 shrink-0">
        {testimonial.condition}
      </span>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Featured lavender center card
───────────────────────────────────────────── */
const FeaturedTestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => (
  <div className="bg-lavender-500 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden h-full">
    {/* Large decorative quote — watermark */}
    <span className="absolute -top-6 -left-2 text-[180px] leading-none font-serif text-white/10 select-none pointer-events-none">
      &ldquo;
    </span>

    {/* Verified badge */}
    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3.5 py-1.5 w-fit relative z-10">
      <BadgeCheck className="w-3.5 h-3.5 text-white shrink-0" />
      <span className="text-[11px] font-semibold text-white tracking-wide">
        Verified Patient
      </span>
    </div>

    {/* Stars */}
    <div className="flex gap-1 relative z-10">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-white text-white" />
      ))}
    </div>

    {/* Review — longer, larger text */}
    <p className="text-white/90 text-base leading-relaxed flex-1 relative z-10">
      {testimonial.review}
    </p>

    {/* Doctor attribution */}
    <p className="text-white/40 text-xs relative z-10">
      Treated by{" "}
      <span className="text-white/60 font-medium">
        {testimonial.doctorName}
      </span>
      <span className="mx-2">·</span>
      {testimonial.date}
    </p>

    {/* Patient info */}
    <div className="flex items-center gap-4 pt-5 border-t border-white/20 relative z-10 mt-auto">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={52}
        height={52}
        className="rounded-full object-cover w-12 h-12 border-2 border-white/30 shrink-0"
      />
      <div>
        <p className="text-white font-bold text-sm leading-tight">
          {testimonial.name}
        </p>
        <p className="text-white/55 text-xs mt-0.5">
          {testimonial.location} &middot; {testimonial.condition}
        </p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const Testimonials = () => {
  const featured = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[2];
  const sideCards = TESTIMONIALS.filter((t) => !t.featured);
  const leftCards = sideCards.slice(0, 2);
  const rightCards = sideCards.slice(2, 4);

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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          {/* Left: label + heading + subtitle */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-lavender-500/10 border border-lavender-500/20 rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender-500 shrink-0" />
              <span className="text-xs font-semibold text-lavender-500 uppercase tracking-widest">
                Patient Stories
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="headline-font text-4xl md:text-5xl text-medical-dark">
                What our patients
                <br />
                <span className="text-lavender-500">say about us</span>
              </h2>
              <p className="text-base text-gray-400 leading-relaxed max-w-sm">
                Real stories from real patients who found the care they deserved
                — from the comfort of home.
              </p>
            </div>
          </div>

          {/* Right: Aggregate trust stats */}
          <div className="flex items-center gap-0 bg-white rounded-2xl border border-gray-100 shadow-sm px-2 sm:px-4 py-4 sm:py-5 w-full lg:w-fit overflow-x-auto">
            {TESTIMONIAL_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center flex-1 lg:flex-none"
              >
                <div className="flex flex-col items-center gap-1.5 text-center px-3 sm:px-5 lg:px-6">
                  {i === 0 && (
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  )}
                  <p className="text-2xl font-bold text-medical-dark leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 whitespace-nowrap mt-0.5">
                    {stat.label}
                  </p>
                </div>
                {i < TESTIMONIAL_STATS.length - 1 && (
                  <div className="w-px h-8 sm:h-10 bg-gray-100 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 3-Column Masonry Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:items-stretch">
          {/* Left column — 2 stacked white cards */}
          <div className="flex flex-col gap-5">
            {leftCards.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* Center — featured lavender card, full height */}
          <div className="md:col-span-2 lg:col-span-1">
            <FeaturedTestimonialCard testimonial={featured} />
          </div>

          {/* Right column — 2 stacked white cards */}
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
            {rightCards.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
