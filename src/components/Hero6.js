import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import hero61 from "../assets/hero61.png";
import hero62 from "../assets/hero62.png";
import Image from "next/image";

const Hero6 = () => {
  return (
    <div className="h-auto bg-[#FFFEF2] px-5 lg:px-20 grid lg:grid-cols-3 md:grid-cols-2 items-center py-20">
      <div className="col-span-1  lg:h-[80vh] h-[40vh]">
        <p className="text-sm font-semibold my-2">For the home</p>
        <h2 className="text-2xl font-serif ">Domestic pleasures</h2>
        <p className="text-sm my-4">
          Our range of aromatic formulations for the home are practical and
          pleasing in equal measure.
        </p>
        <button className="flex  items-center  py-5 mt-4 text-sm gap-x-1">
          See all Home
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="col-span-1 lg:h-[80vh] flex flex-col items-center w-fit">
        <Image src={hero61} alt="" className="px-2" />
        <p className=" text-sm font-semibold">Nature Bar Soap</p>
        <p className=" text-sm mt-4 ">Offers a mild yet effective cleanse</p>
      </div>
      <div className="col-span-1 lg:h-[80vh] flex flex-col items-center w-fit sm:mt-0 mt-10">
        <Image src={hero62} alt="" className="" />
        <p className=" text-sm font-semibold">Polish Bar Soap</p>
        <p className=" text-sm mt-4 ">
          Thoroughly cleanses and exfoliates skin
        </p>
      </div>
    </div>
  );
};

export default Hero6;
