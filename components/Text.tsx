import React from "react";

interface TextProps {
  num: number;
  title: string;
  subtitle: string;
}

const Text = ({ num, title, subtitle }: TextProps) => {
  return (
    <div className="flex gap-x-3 mt-4">
      <p className="bg-green-700 rounded-full p-2 h-5 w-5 text-xs flex items-center justify-center text-white font-bold">
        {num}
      </p>
      <div className="flex flex-col gap-y-2">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default Text;
