import Image from "next/image";
import Download from "@/components/Download";
import Vendor from "@/components/Vendor";
import User from "@/components/User";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Vendor />
      <User />
      <How />
      <Download />
    </main>
  );
}
