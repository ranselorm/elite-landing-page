import React from "react";
import Image from "next/image";
import GoogleIcon from "@/public/icons/GoogleIcon.svg";
import AppleIcon from "@/public/icons/AppleIcon.svg";

const Download = () => {
  return (
    <section className="px-4 md:px-10 lg:px-24 py-16 font-poppins">
      <h1 className="text-4xl font-bold text-center text-gray-700">
        Download Our App
      </h1>
      <div className="bg-green-700 mt-10 justify-betwen flex items-center rounded-3xl overflow-hidden h-[550px]">
        <div className="w-8/12 p-20 mt-10">
          <h1 className="text-4xl font-black text-white leading-snug">
            Request in seconds, ride in minutes.
          </h1>
          <p className="text-lg text-white my-6">
            Available for iOS and Android devices.
          </p>
          <div>
            <div className="flex flex-row gap-x-4">
              <Image src={GoogleIcon} alt="" className="w-[40%]" />
              <Image src={AppleIcon} alt="" className="w-[40%]" />
            </div>
          </div>
          <div>
            <div>
              <Image src="/icons/google-icon.png" alt="" fill />
            </div>
          </div>
        </div>
        <div className="w-6/12 flex items-center justify-center">
          <div className="relative w-[450px] h-[550px] mt-9">
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
