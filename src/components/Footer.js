import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-3  h-auto bg-[#252525] text-[#FFFEF2] p-10 text-sm gap-x-10 gap-y-24">
        <div className="md:col-span-2 col-span-3">
          <p className="font-semibold">Subscribe to Aesop communications</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <button className="flex justify-between items-center w-full py-1 border-[0.5px] border-white px-2 mt-7 text-lg">
            Email Address
            <AiOutlineArrowRight />
          </button>
          <div className="flex my-2">
            <input
              type="checkbox"
              class="form-checkbox text-indigo-600  h-5 w-5 mr-3"
            />
            <p>
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our privacy policy.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Orders and Support</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <div className="flex flex-col gap-y-2 text-md capitalize">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Services</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <div className="flex flex-col gap-y-2 text-md capitalize">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Location Prefernces</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <div className="flex flex-col gap-y-2 text-md capitalize">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1">
          <p className="font-semibold">Sustainability</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <p>
            Subscribe to receive communications from Aesop. By subscribing, you
            confirm you have read and understood our privacy policy.
          </p>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">About</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <div className="flex flex-col gap-y-2 text-md capitalize">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">Social Media</p>
          <div className="h-[0.5px] bg-[#FFFEF2] my-5 " />
          <div className="flex flex-col gap-y-2 text-md capitalize">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 bg-[#252525] text-[#FFFEF2] border-[#FFFEF2] p-7 text-xl">
        © Aesop
      </div>
    </>
  );
};
export default Footer;
