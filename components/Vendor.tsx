import React from "react";
import Image from "next/image";
import Text from "./Text";

const Vendor = () => {
  return (
    <section className="px-4 md:px-10 lg:px-24 py-20 font-poppins">
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-700">
          Join Our Network Become A Vendor
        </h1>
        <div className="flex w-full  items-center gap-x-20 mt-16">
          <div className="w-7/12 rounded-md overflow-hidden">
            <div className="relative w-[550px] h-[400px]">
              <Image
                fill
                alt=""
                src="/images/vendor.png"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h2 className="text-2xl font-semibold mb-10 text-gray-700">
              Drive and earn money
            </h2>
            <div className="flex flex-col gap-y-5">
              <Text
                num={1}
                title="Expand Your Reach"
                subtitle="Access a wider customer base, boost bookings, and seize new opportunities"
              />

              <Text
                num={2}
                title="Boost Your Revenue"
                subtitle="Maximize earnings by renting out vehicles effortlessly and optimizing pricing."
              />
              <Text
                num={3}
                title="Streamlined Management"
                subtitle="Simplify operations with intuitive tools, saving time and enhancing service quality."
              />
            </div>
            <button className="mt-6 text-white py-2 px-8 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
