import React from "react";
import Image from "next/image";
import GoogleIcon from "@/public/icons/GoogleIcon.svg";
import AppleIcon from "@/public/icons/AppleIcon.svg";

const Download = () => {
  return (
    <section
      className="px-4 md:px-10 lg:px-24 py-16 font-poppins"
      id="download"
    >
      <h1 className="text-4xl font-bold text-center text-gray-700">
        Download Our App
      </h1>
      <div className="bg-green-700 mt-10 justify-betwen flex flex-col-reverse md:flex-row items-center rounded-lg md:rounded-3xl overflow-hidden md:h-[550px]">
        <div className="w-full md:w-8/12 md:p-20 p-3 mt-10">
          <h1 className="text-2xl md:text-4xl font-black text-white leading-snug">
            Request in seconds, ride in minutes.
          </h1>
          <p className="text-lg text-white my-6">
            Available for iOS and Android devices.
          </p>
          <div className="flex flex-row gap-x-4 justify-center md:justify-start">
            <Image src={GoogleIcon} alt="" className="w-[40%]" />
            <Image src={AppleIcon} alt="" className="w-[40%]" />
          </div>
        </div>
        <div className="w-full md:w-6/12 flex items-center justify-center">
          <div className="relative w-[400px] md:w-[450px] md:h-[550px] h-[350px] mt-4">
            <Image
              src="/images/user.png"
              alt=""
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
