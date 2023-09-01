import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "./Logo";
const Hero = () => {
  return (
    <>
      <div className="bg-main-image h-[85vh] flex text-white px-10 md:pt-28 pt-10">
        <Logo />
        <div className="w-[27em]  ml-24 hidden sm:block">
          <p className="text-sm">Bar Soaps</p>
          <h2 className="text-3xl my-5 leading-9">
            A body care classic, reimagined{" "}
          </h2>
          <p className="leading-7">
            Breathing new life into the humble bar soap are Nurture, Polish and
            Refresh—three additions to the range, each imparting a unique
            constellation of benefits. 
          </p>
          <button className="flex justify-between items-center w-2/3 py-5 border-2 border-white px-5 mt-7 text-sm">
            Discover Bar Soaps
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full text-white p-10 bg-[#333333] sm:hidden  ">
        <p className="text-sm">Bar Soaps</p>
        <h2 className="text-3xl my-5 leading-9">
          A body care classic, reimagined{" "}
        </h2>
        <p className="leading-7">
          Breathing new life into the humble bar soap are Nurture, Polish and
          Refresh—three additions to the range, each imparting a unique
          constellation of benefits. 
        </p>
        <button className="flex justify-between items-center w-2/3 py-5 border-2 border-white px-5 mt-7 text-sm">
          Discover Bar Soaps
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default Hero;
