"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiChevronDown, FiX, FiChevronRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import categoriesData from "../data/categories.json";

const NavBar = () => {
  const categories = categoriesData.categories || [];
  const [isOpen, setIsOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState("main");
  const catRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (catRef.current && !catRef.current.contains(event.target)) {
        setCatOpen(false);
      }
    }
    if (catOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [catOpen]);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="relative w-full h-14 bg-white flex justify-between items-center p-4 border-y border-gray-300">
        <div>
          {/* <Image
            src="/horizontal_logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-auto"
          /> */}
          <h1 className="t text-[25px] !font-semibold">SUN SEEDS FOODS</h1>
        </div>
        <div className="block md:hidden">
          {isOpen ? (
            <FiX
              size={24}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <FiMenu
              size={24}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-10 font-semibold">
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              About
            </li>
            <li
              className=" text-gray-700 hover:text-gray-900 cursor-pointer group"
              onClick={() => setCatOpen((prev) => !prev)}
              ref={catRef}
            >
              Our Product
              <FiChevronDown className="ml-1 inline" size={16} />
              {/* Submenu */}
              <div
                className={`
                  absolute
                  left-0 md:left-1/2
                  md:-translate-x-1/2
                  top-full
                  min-w-full md:min-w-[150px]
                  transition-all duration-200
                  bg-white shadow-lg mt-2 rounded-md z-10
                  ${catOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                  w-full md:w-auto
                  max-w-full md:max-w-none
                `}
              >
                <div className="grid grid-cols-2 lg:flex lg:justify-center lg:gap-2 bg-white rounded-t-md p-2 w-[800px] lg:w-full max-h-90 overflow-y-auto ">
                  {categories &&
                    categories.map((category, i) => (
                      <div className="block p-2" key={i}>
                        <h1 className="whitespace-nowrap font-semibold p-2 text-xl">
                          {category?.name}
                        </h1>
                        {category?.products?.map((product, j) => (
                          <div
                            key={j}
                            className="p-2 hover:underline cursor-pointer rounded-t-md transition-colors duration-150"
                          >
                            {product?.name}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Blog
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className="absolute md:hidden top-14 left-0 w-full p-4 z-10 h-screen overflow-y-auto">
            {/* Main menu */}
            <div
              className={` transition-transform duration-300 ${
                mobileMenuView === "main"
                  ? "translate-x-0"
                  : "-translate-x-full"
              } absolute top-0 left-0 w-full h-screen overflow-x-hidden bg-white shadow-lg`}
            >
              <ul className="flex flex-col space-y-4 font-bold text-lg px-4">
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                  Home
                </li>
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                  About
                </li>
                <li
                  className="flex justify-between items-center text-gray-700 hover:text-gray-900 cursor-pointer group"
                  onClick={() => setMobileMenuView("products")}
                >
                  Our Product
                  <FaChevronRight className="ml-1 inline" size={16} />
                </li>
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                  Blog
                </li>
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            {/* Product categories submenu */}
            <div
              className={` transition-transform duration-300 ${
                mobileMenuView === "products"
                  ? "translate-x-0"
                  : "translate-x-full"
              } absolute top-0 left-0 w-full overflow-x-hidden bg-white shadow-lg`}
            >
              <button
                className="flex items-center mb-4 text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuView("main")}
              >
                <FaChevronRight className="rotate-180 mr-2" size={16} />
                Back
              </button>
              <div className="pl-2">
                {categories.map((category, i) => (
                  <div key={i}>
                    <div className="font-semibold py-2">{category.name}</div>
                    {category.products.map((product, j) => (
                      <div
                        key={product.slug}
                        className="flex items-center p-2 rounded transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
