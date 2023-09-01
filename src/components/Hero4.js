import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import hero41 from "../assets/hero41.png";
import hero42 from "../assets/hero42.png";
import Image from "next/image";

const Hero4 = () => {
  return (
    <div className="h-auto bg-[#FFFEF2] px-5 lg:px-20 grid lg:grid-cols-3 md:grid-cols-2 items-center py-20">
      <div className="col-span-1  lg:h-[80vh] h-[40vh]">
        <p className="text-sm font-semibold my-2">For the skin</p>
        <h2 className="text-2xl font-serif ">Attention for all types</h2>
        <p className="text-sm my-4">
          The well-being of your skin is the product of hydration, nourishment,
          and protection through discerning rituals. Explore requisite skin care
          for all skin types.
        </p>
        <button className="flex  items-center  py-5 mt-4 text-sm gap-x-1">
          See all Skin Care
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="col-span-1 lg:h-[80vh] flex flex-col items-center w-fit">
        <Image src={hero41} alt="" className="" />
        <p className=" text-sm font-semibold">Nature Bar Soap</p>
        <p className=" text-sm mt-4 ">Offers a mild yet effective cleanse</p>
      </div>
      <div className="col-span-1 lg:h-[80vh] flex flex-col items-center w-fit sm:mt-0 mt-10 ">
        <Image src={hero42} alt="" className="px-6" />
        <p className=" text-sm font-semibold">Polish Bar Soap</p>
        <p className=" text-sm mt-4 ">
          Thoroughly cleanses and exfoliates skin
        </p>
      </div>
    </div>
  );
};

export default Hero4;
