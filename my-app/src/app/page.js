"use client";
import { useState } from "react";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { Header } from "./components/Header";
import { StepOne } from "./components";

export default function Home() {
  const initialFormValues = {
    Firstname: "",
    Username: "",
    Lastname: "",
    Password: "",
    Email: "",
    Phonenumber: "",
    Datebirth: "",
  };
  const [count, setCount] = useState(0);
  const [data, setData] = useState(initialFormValues);
  const CurrentStep = [StepOne, StepTwo, StepThree][count];

  const StepCount = (event) => {
    event.preventDefault();
    if (count >= 2) {
      return;
    }
    setCount(count + 1);
  };
  const StepCountBack = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };
  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setData((prev) => ({ ...data, [name]: value }));
    console.log(data);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-fit h-[591px] ">
        <CurrentStep
          handleOnClick={StepCount}
          conCount={count + 1}
          backOnClick={StepCountBack}
          handleOnChange={handleInputChange}
          name={initialFormValues}
        />
      </div>
    </div>
  );
}
