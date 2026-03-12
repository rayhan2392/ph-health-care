import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Consultation", href: "#" },
    { label: "Health Plans", href: "#" },
    { label: "Medicine", href: "#" },
    { label: "Diagnostics", href: "#" },
    { label: "NGOs", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const PublicFooter = () => {
  return (
    <footer className="bg-medical-dark text-white">
      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* ── Brand Column (col-span-2) ── */}
          <div className="lg:col-span-2 flex flex-col gap-7">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 w-fit">
              <span className="text-2xl font-bold text-lavender-500">PH</span>
              <span className="text-2xl font-light text-white">Doc</span>
            </Link>

            {/* Tagline */}
            <p className="text-white/55 text-sm leading-relaxed">
              Connecting patients with certified doctors for quality healthcare
              — anytime, anywhere in Bangladesh.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:support@phdoc.com.bd"
                className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors duration-200 w-fit group"
              >
                <Mail className="w-4 h-4 text-lavender-500 shrink-0" />
                <span className="text-sm">support@phdoc.com.bd</span>
              </a>
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors duration-200 w-fit group"
              >
                <Phone className="w-4 h-4 text-lavender-500 shrink-0" />
                <span className="text-sm">+880 1700 000 000</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/55">
                <MapPin className="w-4 h-4 text-lavender-500 shrink-0" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-lavender-500 flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Services Column ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Services
            </h4>
            <nav className="flex flex-col gap-3.5">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Company Column ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Company
            </h4>
            <nav className="flex flex-col gap-3.5">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Support Column ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Support
            </h4>
            <nav className="flex flex-col gap-3.5">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} PH Doc. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-white/35 text-xs flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3 h-3 fill-lavender-500 text-lavender-500" />{" "}
            for better healthcare in Bangladesh
          </p>

          {/* Legal links */}
          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/35 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
