import React from "react";

const Banner = ({ text1, text2, className = "" }) => {
  return (
    <div className={`flex w-full justify-center text-sm py-2.5 ${className}`}>
      <h2>{text1}</h2>
      <h2 className="font-semibold ml-3">{text2}</h2>
    </div>
  );
};

export default Banner;
