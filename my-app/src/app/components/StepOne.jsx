import React from "react";
import { Input } from "./Input";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const StepOne = ({ handleOnclick, conCount, handleOnChange }) => {
  return (
    <form onSubmit={handleOnclick}>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[230px] justify-between">
          <Input
            placeholder="Placeholder"
            text="First name"
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Placeholder"
            text="Lastname"
            handleOnChange={handleOnChange}
          />
          <Input
            placeholder="Placeholder"
            text="Username"
            handleOnChange={handleOnChange}
          />
        </div>
        <Footer count={2} />
      </div>
    </form>
  );
};
