import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContainerDepartures } from "@/components/sections/ContainerDepartures";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials/>
      <ContainerDepartures/>
      <Contact />
    </>
  );
}