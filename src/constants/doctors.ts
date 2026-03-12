export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  experience: string;
  image: string;
  href: string;
  availableToday: boolean;
  nextAvailable: string;
  fee: number;
}

export const TOP_RATED_DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Khan",
    specialty: "Cardiologist",
    rating: 4.9,
    reviewCount: 1248,
    experience: "14 yrs",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
    href: "/doctors/sarah-khan",
    availableToday: true,
    nextAvailable: "Today",
    fee: 1200,
  },
  {
    id: "2",
    name: "Dr. James Liu",
    specialty: "Neurologist",
    rating: 4.8,
    reviewCount: 987,
    experience: "11 yrs",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop",
    href: "/doctors/james-liu",
    availableToday: false,
    nextAvailable: "Tomorrow, 9 AM",
    fee: 1500,
  },
  {
    id: "3",
    name: "Dr. Priya Mehta",
    specialty: "Pediatrician",
    rating: 4.9,
    reviewCount: 2103,
    experience: "9 yrs",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop",
    href: "/doctors/priya-mehta",
    availableToday: true,
    nextAvailable: "Today",
    fee: 800,
  },
  {
    id: "4",
    name: "Dr. Omar Faruk",
    specialty: "Orthopedic Surgeon",
    rating: 4.8,
    reviewCount: 756,
    experience: "16 yrs",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop",
    href: "/doctors/omar-faruk",
    availableToday: false,
    nextAvailable: "Wed, 10 AM",
    fee: 1000,
  },
  {
    id: "5",
    name: "Dr. Emily Chen",
    specialty: "Dermatologist",
    rating: 4.9,
    reviewCount: 1567,
    experience: "8 yrs",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=500&auto=format&fit=crop",
    href: "/doctors/emily-chen",
    availableToday: true,
    nextAvailable: "Today",
    fee: 900,
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialty: "Internal Medicine",
    rating: 4.7,
    reviewCount: 634,
    experience: "13 yrs",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=500&auto=format&fit=crop",
    href: "/doctors/robert-kim",
    availableToday: false,
    nextAvailable: "Thu, 2 PM",
    fee: 700,
  },
] as const;
