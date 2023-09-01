"use client";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const navbarData = [
  {
    id: 0,
    text: "Skin Care",
  },
  {
    id: 1,
    text: "Body & Hand",
  },
  {
    id: 2,
    text: "Hair",
  },
  {
    id: 3,
    text: "Fragrance",
  },
  {
    id: 4,
    text: "Home",
  },
  {
    id: 5,
    text: "Kits & Travel",
  },
  {
    id: 6,
    text: "Gifts",
  },
  {
    id: 7,
    text: "Read",
  },
  {
    id: 8,
    text: "Stores",
  },
  {
    id: 9,
    text: "Facial Appointments",
  },
  {
    id: 10,
    text: "Login",
  },
  {
    id: 11,
    text: "Cabinet",
  },
  {
    id: 12,
    text: "Cart",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className=" justify-between flex-row  bg-[#FFFEF2] py-7 px-8 border-b-2 text-black flex relative">
        <button
          className="lg:hidden text-xl hover:rotate-90 transition-all duration-200 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        {isOpen && (
          <div className="absolute h-[calc(100vh-10rem)] w-[calc(100vw-5rem)]  bg-gray-200 flex items-center justify-center  mx-auto rounded-lg">
            <div
              className="absolute top-3 right-3 text-xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GrClose />
            </div>
            <div className=" flex-col gap-y-5 text-sm font-semibold flex-wrap flex">
              {navbarData.slice(0, 10).map((item, index) => {
                return <h2 key={index}>{item.text}</h2>;
              })}
              <div>
                <FiSearch />
              </div>
            </div>
          </div>
        )}
        <div className=" gap-x-6  items-center text-sm font-semibold flex-wrap hidden lg:flex">
          {navbarData.slice(0, 10).map((item, index) => {
            return <h2 key={index}>{item.text}</h2>;
          })}
          <div>
            <FiSearch />
          </div>
        </div>
        <div className="flex gap-x-6 items-center text-sm font-semibold">
          {navbarData.slice(10).map((item, index) => {
            return <h2 key={index}>{item.text}</h2>;
          })}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
