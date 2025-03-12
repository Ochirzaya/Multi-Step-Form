import React from "react";

export const Input = ({ type, name, placeholder, label }) => {
  return (
    <div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-[#334155] font-bold">
          {label}
          <span className="text-[#E14942]">*</span>
        </p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-[416px] p-3 rounded-lg border focus:border-[#0CA5E9] text-[#202124]"
        />
      </div>
    </div>
  );
};
