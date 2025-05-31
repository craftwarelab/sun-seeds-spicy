"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="block bg-[#e3f2d4] px-8 sm:px-20 pt-8 sm:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 gap-6 md:gap-16 ">
        <div className="flex flex-col justify-start items-start space-y-4 p-2">
          <h1 className="font-semibold text-lg">Sun Seeds Products Pvt(Ltd)</h1>
          <p className="text-gray-600 !text-[14px]">
            Sri Lanka&apos;s trusted source for natural spices, herbal teas,
            superfoods, and healthy snacks. Quality you can taste, wellness you
            can trust.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start space-y-4 p-2">
          <h1 className="font-semibold text-lg">About</h1>
          <Link href={"/"} className="">
            <span className="text-gray-600 hover:text-gray-950 !text-[14px] cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start space-y-4 p-2">
          <h1 className="font-semibold text-lg">Support</h1>
          
          <Link href={"/"} className="">
            <span className="text-gray-600 hover:text-gray-950 !text-[14px] cursor-pointer">
              Shipping
            </span>
          </Link>
          <Link href={"/"} className="">
            <span className="text-gray-600 hover:text-gray-950 !text-[14px] cursor-pointer">
              FAQs
            </span>
          </Link>
          <Link href={"/"} className="">
            <span className="text-gray-600 hover:text-gray-950 !text-[14px] cursor-pointer">
              Terms & Conditions
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start space-y-4 p-2">
          <h1 className="font-semibold text-lg">Get in Touch</h1>
          <span className="text-gray-600 !text-[14px] cursor-pointer">
           Address, colombo, sri lanka
          </span>
            <span className="text-gray-600 !text-[14px] cursor-pointer">
           Email: sunseedscolombo@gmail.com
          </span>
           <span className="text-gray-600 !text-[14px] cursor-pointer">
           Phone: 123456789
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center pb-1.5 p-2">
        <a
          href="https://www.craftwarelab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="!text-[12px] font-extralight text-gray-600 hover:text-gray-950 cursor-pointer">
            Developed by Craftwarelab
          </span>
        </a>
      </div>
    </div>
  );
};
export default Footer;
