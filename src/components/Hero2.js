import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import soap1 from "../assets/soap1.png";
import soap2 from "../assets/soap2.png";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="h-screen bg-[#FFFEF2] px-5 lg:px-20 grid lg:grid-cols-3 md:grid-cols-2 items-center py-20">
      <div className="col-span-1  lg:h-[80vh] h-[40vh]">
        <p className="text-sm font-semibold my-2">For the body</p>
        <h2 className="text-2xl font-serif ">An expression of care</h2>
        <p className="text-sm my-4">
          Aesop formulations offer the body deserving care, to cleanse,
          replenish, and nourish skin. Each product is a sensory pleasure to use
          with its own delightful aroma.
        </p>
        <button className="flex  items-center  py-5 mt-4 text-sm gap-x-1">
          See all Body Care
          <AiOutlineArrowRight />
        </button>
      </div>
      <div className="col-span-1 lg:h-[80vh]  flex flex-col items-center lg:pt-40">
        <Image src={soap1} alt="" />
        <p className=" text-sm font-semibold">Nature Bar Soap</p>
        <p className=" text-sm mt-4 ">Offers a mild yet effective cleanse</p>
      </div>
      <div className="col-span-1 lg:h-[80vh]  flex flex-col items-center lg:pt-40">
        <Image src={soap2} alt="" />
        <p className=" text-sm font-semibold">Polish Bar Soap</p>
        <p className=" text-sm mt-4 ">
          Thoroughly cleanses and exfoliates skin
        </p>
      </div>
    </div>
  );
};

export default Hero2;
