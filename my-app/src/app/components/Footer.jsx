import React from "react";

export const Footer = ({ text, backOnClick, handleOnClick, backCount }) => {
  return (
    <div className="flex justify-center gap-2">
      {backCount > 1 && (
        <button
          onClick={backOnClick}
          className="w-[128px] h-[32px] rounded-[10px] p-3 flex border-2 border-gray-500 text-black"
        >
          Back
        </button>
      )}
      <button
        id="nextButton"
        type="submit"
        onClick={handleOnClick}
        className="w-full bg-gray-900 h-[28px] flex p-4 text-white justify-center items-center"
      >
        Continue {backCount}1/3
      </button>
    </div>
  );
};
