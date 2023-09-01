import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import hero5 from "../assets/her05.png";

const Hero5 = () => {
  return (
    <div className="h-screen bg-[#FFFEF2] flex items-center md:flex-row flex-col">
      <div className="md:w-2/3 lg:pr-28 md:pr-20 ">
        <Image src={hero5} alt="" />
      </div>
      <div className="md:w-1/3 lg:pr-20 pr-5  flex flex-col gap-y-6  h-[65%]">
        <h1 className="text-3xl font-serif">Post-Poo Drops has returned</h1>
        <p>
          Here to make the malodorous melodious once again. Dispense this
          favoured formulation into the toilet bowl after flushing to
          effectively mask disagreeable odours.
        </p>
        <button className="flex justify-between items-center w-2/3 py-5 border-2 px-5 mt-7 text-sm">
          Discover Post-Poo Drops
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero5;
