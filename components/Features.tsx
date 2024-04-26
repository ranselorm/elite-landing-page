import React from "react";
import Image from "next/image";
import Text from "./Text";

const Features = () => {
  return (
    <section className="px-4 md:px-10 lg:px-24 py-6 font-poppins">
      <div>
        <div className="flex flex-row-reverse w-full items-center gap-x-20 mt-16">
          <div className="w-6/12 rounded-md overflow-hidden">
            <div className="relative w-[450px] h-[350px]">
              <Image
                fill
                alt=""
                src="/images/woman.jpeg"
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Unlock convenience with our app
            </h2>
            <div className="flex flex-col gap-y-5">
              <Text
                num={1}
                title="Seamless Booking"
                subtitle="Book effortlessly with our user-friendly app interface, saving time and hassle."
              />

              <Text
                num={2}
                title="Exclusive Deals"
                subtitle="Access app-only discounts and perks, maximizing savings on your rentals."
              />

              <Text
                num={3}
                title="Instant Accessibility"
                subtitle="Enjoy instant access to bookings and support, anytime, anywhere."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
