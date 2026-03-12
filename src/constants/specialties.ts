import {
  Heart,
  Brain,
  Eye,
  Baby,
  Bone,
  Droplets,
  Smile,
  Wind,
  Activity,
  Stethoscope,
  Microscope,
  Ear,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Specialty {
  name: string;
  description: string;
  doctorCount: number;
  icon: LucideIcon;
  href: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    name: "Cardiology",
    description:
      "Treatment for heart disease, hypertension, arrhythmia, and cardiovascular wellness.",
    doctorCount: 24,
    icon: Heart,
    href: "/specialties/cardiology",
  },
  {
    name: "Neurology",
    description:
      "Expert care for migraines, epilepsy, stroke recovery, and nervous system conditions.",
    doctorCount: 18,
    icon: Brain,
    href: "/specialties/neurology",
  },
  {
    name: "Ophthalmology",
    description:
      "Vision tests, cataract surgery, glaucoma care, and complete retinal health screenings.",
    doctorCount: 15,
    icon: Eye,
    href: "/specialties/ophthalmology",
  },
  {
    name: "Pediatrics",
    description:
      "Compassionate care for infants, children, and teenagers at every stage of growth.",
    doctorCount: 32,
    icon: Baby,
    href: "/specialties/pediatrics",
  },
  {
    name: "Orthopedics",
    description:
      "Relief for joint pain, fractures, sports injuries, and spine-related conditions.",
    doctorCount: 21,
    icon: Bone,
    href: "/specialties/orthopedics",
  },
  {
    name: "Dermatology",
    description:
      "Care for acne, eczema, psoriasis, skin screenings, and personalized skincare routines.",
    doctorCount: 28,
    icon: Droplets,
    href: "/specialties/dermatology",
  },
  {
    name: "Dentistry",
    description:
      "Preventive cleanings, fillings, teeth whitening, and full restorative dental treatments.",
    doctorCount: 19,
    icon: Smile,
    href: "/specialties/dentistry",
  },
  {
    name: "Pulmonology",
    description:
      "Diagnosis and care for asthma, COPD, sleep apnea, and chronic breathing disorders.",
    doctorCount: 12,
    icon: Wind,
    href: "/specialties/pulmonology",
  },
  {
    name: "General Medicine",
    description:
      "Routine checkups, illness management, vaccinations, and preventive health screenings.",
    doctorCount: 45,
    icon: Activity,
    href: "/specialties/general-medicine",
  },
  {
    name: "Internal Medicine",
    description:
      "Comprehensive management of diabetes, thyroid disorders, and complex adult conditions.",
    doctorCount: 30,
    icon: Stethoscope,
    href: "/specialties/internal-medicine",
  },
  {
    name: "Pathology",
    description:
      "Accurate lab diagnostics, blood analysis, biopsy interpretation, and disease profiling.",
    doctorCount: 10,
    icon: Microscope,
    href: "/specialties/pathology",
  },
  {
    name: "ENT",
    description:
      "Treatment for sinusitis, hearing loss, tonsillitis, allergies, and voice disorders.",
    doctorCount: 16,
    icon: Ear,
    href: "/specialties/ent",
  },
] as const;
