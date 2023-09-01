import React from "react";

const Banner = ({ text1, text2, className = "" }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full text-xs lg:text-sm  items-center justify-center  py-2.5 px-5 ${className}`}
    >
      <h2>{text1}</h2>
      <h2 className="font-semibold lg:ml-3">{text2}</h2>
    </div>
  );
};

export default Banner;
