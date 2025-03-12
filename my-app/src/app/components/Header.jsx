import React from "react";

export const Header = () => {
  return (
    <div className=" flex w-[416px] flex-col items-start gap-2">
      <img src="./logo.jpg"></img>
      <p className=" flex text-[26px] text-[#202124] font-bold">Join Us! 😎</p>
      <h1 className="flex text-[18px] text-[#8E8E8E] ">
        Please provide all current information accurately.
      </h1>
    </div>
  );
};
