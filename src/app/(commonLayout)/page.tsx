import Hero from "@/components/modules/home/Hero";
import Specialties from "@/components/modules/home/Specialties";
import TopRatedDoctors from "@/components/modules/home/TopRatedDoctors";
import HowItWorks from "@/components/modules/home/HowItWorks";
import Testimonials from "@/components/modules/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <TopRatedDoctors />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
