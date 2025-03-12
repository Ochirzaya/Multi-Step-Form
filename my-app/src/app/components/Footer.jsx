import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
export const Footer = ({ handleClick }) => {
  return (
    <div className="flex w-[416px] items-start gap-2 text-black">
      <button
        onClick={handleClick}
        className="flex w-[416px] h-[44px] items-center justify-center gap-1 rounded-[6px] border bg-black"
      >
        <p className="  text-[#fff] font-bold">Continue</p>
        <p className=" text-[#fff] font-bold">1/3 </p>
        <IoChevronForwardSharp className="fill-white stroke-white" />
      </button>
    </div>
  );
};
