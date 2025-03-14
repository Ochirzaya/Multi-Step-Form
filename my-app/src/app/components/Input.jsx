import React from "react";

export const Input = ({ text, placeholder, isError, handleOnChange }) => {
  return (
    <div className=" flex w-[416px] gap-1 flex-col">
      <label className="text-[14px] font-bold text-[#334155]">
        {text} <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name={text}
        placeholder=""
        onChange={handleOnChange}
        className="h-[44px] border rounded-[5px] focus-visible:outline-blue-700 text-black"
      />
      {isError && <p className="text-red-500">Error</p>}
    </div>
  );
};
