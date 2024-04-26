import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  subtitle: string;
  Icon: IconType;
  id?: string;
}

const Card = ({ title, Icon, subtitle, id }: CardProps) => {
  return (
    <div
      className={`w-[270px] h-[200px] bg-white border-gray-200 border font-poppins rounded-lg py-5 flex ${
        id === "center" && ""
      }`}
    >
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <div className="bg-gray-100 p-3 rounded-full mb-4">
          <Icon className="text-2xl text-green-700" />
        </div>
        <h3 className="font-semibold text-lg text-gray-600">{title}</h3>
        <p className="text-sm px-5 text-center text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
