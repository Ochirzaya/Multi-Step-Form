import React from "react";
import { Footer, Header } from ".";
import { FaFileImage } from "react-icons/fa";
export const StepThree = ({ handleOnClick, backOnclick, backCount }) => {
  return (
    <form onSubmit={handleOnClick}>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-fit gap-3 justify-around">
          <label>
            Date <span className="text-red-600">*</span>
          </label>
          <input type="date" className=" border-2 border-gray-400 p-2" />
          <p>
            Profile image<span className="text-red-600">*</span>
          </p>
          <div className="flex relative">
            <input
              type="file"
              className="w-full h-[180px] bg-gray-500 absolute"
              id="upI"
            ></input>
            <label for="upI" className="left-[48%] top-[80px] absolute">
              <FaFileImage className="w-5 h-5" />
            </label>
          </div>
        </div>
        <Footer
          text="continue 3/3"
          text1="< back"
          backCount={3}
          backOnclick={backOnclick}
        />
      </div>
    </form>
  );
};
