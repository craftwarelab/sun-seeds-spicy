"use client";
// This is a client component
import { useState, useEffect } from "react";
import Banners from "./Components/Banners";
import Image from "next/image";
import productsData from "./Data/featureproducts.json";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const products = productsData.products;
  const headerIcons = [
    "/header_icon/cruelty_free.avif",
    "/header_icon/recyclable_packaging.avif",
    "/header_icon/sourced_locally.avif",
    "/header_icon/women_workforce.avif",
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="block">
      <Banners />
      {/* #f2e8d9 */}
      <div className="flex justify-center items-center text-[#7a9352] py-8 px-[24px]">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
            Welcome to Sun Seeds
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg px-4 sm:px-0 text-center">
            Sri Lanka&apos;s trusted source for natural spices, herbal teas,
            superfoods, and healthy snacks. Quality you can taste, wellness you
            can trust.
          </p>
          <div className=" flex flex-wrap justify-center items-center gap-18 mt-8 overflow-hidden">
            {headerIcons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  src={icon}
                  alt={`Header Icon ${index + 1}`}
                  width={254}
                  height={254}
                  className="w-28 h-28 sm:w-44 sm:h-44 object-contain"
                />
                <span className="text-md sm:!text-lg !font-bold capitalize">
                  {icon.split("/").pop().split(".")[0].replace(/_/g, " ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-8 px-[24px] bg-[#e3f2d4]">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
            What We Do
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 shadow hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="!font-bold !text-xl mb-2">{product.name}</h2>
                <p className="text-gray-600 text-center !text-[16px]">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <span className="bg-[#7a9352] py-2 px-3 rounded-2xl text-white cursor-pointer mt-8 !text-[16px]">See More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
