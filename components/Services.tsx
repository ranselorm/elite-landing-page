import React from "react";
import Card from "@/components/Card";
import { FaCar } from "react-icons/fa";
import { FaLocationDot, FaCalendar } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";

const Services = () => {
  return (
    <section className="px-4 md:px-10 lg:px-24 py-10 font-poppins">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center text-gray-700">
          How It Works
        </h1>
        <p className="pt-5 pb-20 text-gray-600">
          Discover how easy it is to rent a car with us: pick your car, choose
          dates, select locations, and start driving
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 -mt-6">
        <Card
          title="Chose a car"
          Icon={FaCar}
          subtitle="Browse and select your ideal vehicle from our diverse fleet.
"
        />
        <Card
          title="Pick a date"
          Icon={FaCalendar}
          subtitle="Select pickup and return dates to fit your schedule."
          id="center"
        />
        <Card
          title="Pick a location"
          Icon={FaLocationDot}
          subtitle=" Choose convenient pickup and drop-off points from our network."
          id="center"
        />
        <Card
          title="Enjoy driving"
          Icon={IoIosSpeedometer}
          subtitle="Hit the road and enjoy the freedom of your journey."
        />
      </div>
    </section>
  );
};

export default Services;
