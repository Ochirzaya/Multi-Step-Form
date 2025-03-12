"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Input } from "./components/Input";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-blue-100">
      <div className="w-[480px] h-[655px] flex flex-col items-center bg-[#fff] rounded-[8px] p-[32px] gap-7">
        <Header />
        <div className="flex w-[416px] h-[308px] flex-col items-start gap-3">
          <Input label={"First Name"} />
          <Input label={"Last Name"} />
          <Input label={"Username"} />
        </div>
        <Footer handleClick={handleNext} />
      </div>
    </div>
  );
}
