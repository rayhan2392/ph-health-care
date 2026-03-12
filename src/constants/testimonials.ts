export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  review: string;
  rating: number;
  avatar: string;
  date: string;
  doctorName: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rahela Begum",
    location: "Dhaka",
    condition: "Cardiology",
    review:
      "I was nervous about online consultations, but PH Doc made it so easy. Dr. Sarah took the time to really listen and explained everything clearly. Got my prescription within minutes!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop",
    date: "2 weeks ago",
    doctorName: "Dr. Sarah Khan",
  },
  {
    id: "2",
    name: "Karim Ahmed",
    location: "Chittagong",
    condition: "General Medicine",
    review:
      "Fast, affordable, and genuinely helpful. I booked a slot at 10 PM and was in a consultation within the hour. Absolutely incredible service.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop",
    date: "1 month ago",
    doctorName: "Dr. Robert Kim",
  },
  {
    id: "3",
    name: "Nusrat Jahan",
    location: "Dhaka",
    condition: "Dermatology",
    review:
      "PH Doc completely changed how I think about healthcare. I struggled with a skin condition for years and never got a satisfying answer at traditional clinics. Dr. Emily spent 40 minutes with me, asked all the right questions, and gave me a treatment plan that actually worked within two weeks. I cannot recommend this platform enough to anyone.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop",
    date: "3 weeks ago",
    doctorName: "Dr. Emily Chen",
    featured: true,
  },
  {
    id: "4",
    name: "Tanvir Hossain",
    location: "Sylhet",
    condition: "Neurology",
    review:
      "Booked a neurology consult in minutes. The doctor was professional, attentive, and the whole experience genuinely felt like a proper in-person visit.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
    date: "2 months ago",
    doctorName: "Dr. James Liu",
  },
  {
    id: "5",
    name: "Farida Islam",
    location: "Rajshahi",
    condition: "Pediatrics",
    review:
      "My daughter had a high fever at midnight. Within 20 minutes I was speaking to a pediatrician. PH Doc is truly a lifesaver for every parent out there.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop",
    date: "1 week ago",
    doctorName: "Dr. Priya Mehta",
  },
] as const;

export const TESTIMONIAL_STATS = [
  { value: "4.9", label: "Average Rating" },
  { value: "12K+", label: "Patient Reviews" },
  { value: "98%", label: "Would Recommend" },
] as const;
