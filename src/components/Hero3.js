import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import hero3 from "../assets/hero3-img.jpg";

const Hero3 = () => {
  return (
    <div className="h-screen bg-[#FFFEF2] flex items-center md:flex-row flex-col">
      <div className="md:w-1/3 lg:pl-20 pl-5  flex flex-col gap-y-6  h-[65%]">
        <p className="text-sm font-semibold">The Athenaeum</p>
        <h1 className="text-3xl font-serif">The warm-up</h1>
        <p>
          In The Athenaeum, our digital reading room: a guide to ensuring a
          healthy complexion through the warmer months.
        </p>
        <button className="flex justify-between items-center w-2/3 py-5 border-2 px-5 mt-7 text-sm">
          Read more
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="md:w-2/3 lg:pl-28 md:pl-20 ">
        <Image src={hero3} alt="" />
      </div>
    </div>
  );
};

export default Hero3;
