import Download from "@/components/Download";
import Vendor from "@/components/Vendor";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Services from "@/components/Services";
import Image from "next/image";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Vendor />
      <Features />
      <Services />
      <Download />
    </main>
  );
}
