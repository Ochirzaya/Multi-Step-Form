import React from "react";
import { Input } from "./Input";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const StepTwo = ({
  handleOnclick,
  conCount,
  backOnClick,
  handleOnChange,
}) => {
  return (
    <form onSubmit={handleOnclick}>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[300px] justify-between">
          <Input
            placeholder="Placeholder"
            text="Email"
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Placeholder"
            text="Phone number"
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Placeholder"
            text="Password"
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Placeholder"
            text="Confirm Password"
            handleOnChange={handleOnChange}
          />
        </div>
        <Footer text={`continue ${count}/2`} />
      </div>
    </form>
  );
};
