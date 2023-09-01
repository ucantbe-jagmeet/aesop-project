import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import hero7 from "../assets/hero7.png";

const Hero7 = () => {
  return (
    <div className="h-screen bg-[#FFFEF2] flex items-center md:flex-row flex-col">
      <div className="md:w-1/3 lg:pl-20 pl-5  flex flex-col gap-y-6  h-[65%]">
        <h1 className="text-3xl font-serif">Store locator</h1>
        <p>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <button className="flex justify-between items-center w-2/3 py-5 border-2 px-5 mt-7 text-sm">
          Find a nearby store
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="md:w-2/3 lg:pl-28 md:pl-20 ">
        <Image src={hero7} alt="" />
      </div>
    </div>
  );
};

export default Hero7;
