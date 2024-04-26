import React from "react";
import Image from "next/image";
import BMW from "@/public/icons/bmw.svg";
import Acura from "@/public/icons/acura.svg";
import Benz from "@/public/icons/benz.svg";
import Genesis from "@/public/icons/genesis.svg";
import Tesla from "@/public/icons/tes.svg";
import Toyota from "@/public/icons/toyo.svg";
import Jaguar from "@/public/icons/jag.svg";
import Honda from "@/public/icons/honda.svg";

const cars = [
  {
    icon: BMW,
  },
  {
    icon: Toyota,
  },

  {
    icon: Jaguar,
  },
  {
    icon: Benz,
  },
  {
    icon: Tesla,
  },
  {
    icon: Honda,
  },
];

const Brands = () => {
  return (
    <section className="px-4 md:px-10 lg:px-24 py-20 font-poppins mt-10">
      <div className="flex items-center justify-between">
        {cars?.map((car, index) => (
          <div key={index} className="md:w-14 md:h-14 w-10 h-10">
            <Image priority src={car.icon} alt="Follow us on Twitter" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
