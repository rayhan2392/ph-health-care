import { UserPlus, Search, CalendarDays, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up in under 2 minutes. No paperwork, no clinic queue — just your name, email, and you're in.",
    icon: UserPlus,
    duration: "Takes 2 mins",
  },
  {
    number: "02",
    title: "Find Your Doctor",
    description:
      "Filter by specialty, rating, or availability. Read reviews and choose the specialist that fits you best.",
    icon: Search,
    duration: "134+ specialists",
  },
  {
    number: "03",
    title: "Book a Session",
    description:
      "Pick a date and time that suits your schedule. Instant confirmation — zero waiting rooms required.",
    icon: CalendarDays,
    duration: "Instant booking",
  },
  {
    number: "04",
    title: "Get Your Care",
    description:
      "Join your video consultation from anywhere. Receive your prescription and health report digitally.",
    icon: HeartPulse,
    duration: "From anywhere",
  },
];
