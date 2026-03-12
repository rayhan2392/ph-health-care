export const HERO_STATS = [
  { value: "134+", label: "Expert Doctors" },
  { value: "50K+", label: "Patients Helped" },
  { value: "4.9★", label: "Avg. Rating" },
  { value: "24/7", label: "Available" },
] as const;

export const HERO_DOCTOR_AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop",
    alt: "Doctor 1",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&auto=format&fit=crop",
    alt: "Doctor 2",
  },
  {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=100&auto=format&fit=crop",
    alt: "Doctor 3",
  },
] as const;

export const HERO_APPOINTMENT_DOCTOR = {
  name: "Dr. Sarah K.",
  time: "Today, 3:00 PM",
  src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
  alt: "Dr. Sarah K.",
} as const;
