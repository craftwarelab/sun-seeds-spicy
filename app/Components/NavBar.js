"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiChevronDown, FiX } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import categoriesData from "../Data/categories.json";

const NavBar = () => {
  const categories = categoriesData.categories || [];
  const [isOpen, setIsOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState("main");
  const catRef = useRef(null);
  const router = useRouter();

  // Close desktop category dropdown on outside click
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

  // Accessibility: close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events?.on?.("routeChangeStart", handleRouteChange);
    return () => {
      router.events?.off?.("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Navigation items
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blogs" },
    { label: "Contact", path: "/contact-us" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="relative w-full h-14 bg-white flex justify-between items-center p-4 border-y border-gray-300">
        {/* Logo/Brand */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/60733ef1-5eb1-490f-b93e-e2a4f86576d6.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
          <span className="text-[25px] font-semibold select-none cursor-pointer">
            SUN SEEDS PRODUCTS
          </span>
        </div>
        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          {isOpen ? (
            <FiX
              size={24}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <FiMenu
              size={24}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-10 font-semibold items-center">
            {navLinks.slice(0, 2).map((link) => (
              <li
                key={link.label}
                className="relative text-gray-700 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7a9352] after:transition-all after:duration-300 hover:after:w-full"
                tabIndex={0}
                onClick={() => router.push(link.path)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && router.push(link.path)
                }
                aria-label={link.label}
              >
                {link.label}
              </li>
            ))}
            {/* Product Dropdown */}
            <li className=" text-gray-700 cursor-pointer group">
              <button
                type="button"
                className="flex items-center bg-transparent border-none outline-none p-0 relative text-gray-700 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7a9352] after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setCatOpen((prev) => !prev)}
                ref={catRef}
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={catOpen}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  setCatOpen((prev) => !prev)
                }
              >
                Our Product
                <FiChevronDown className="ml-1 inline" size={16} />
              </button>
              {/* Submenu */}
              {/* className={`
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
                `} */}

              <div
                className={`
                  absolute left-0 md:left-1/2 md:-translate-x-1/2 top-full min-w-full md:min-w-[150px]
                  transition-all duration-200 bg-white shadow-lg mt-2 rounded-md z-10
                  ${catOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                  w-full md:w-auto max-w-full md:max-w-none
                `}
              >
                <div className="grid grid-cols-2 lg:flex lg:justify-center lg:gap-2 bg-white rounded-t-md p-2 w-[800px] lg:w-full max-h-90 overflow-y-auto">
                  {categories.map((category, i) => (
                    <div className="block p-2" key={i}>
                      <h1 className="whitespace-nowrap font-semibold p-2 text-xl">
                        {category?.name}
                      </h1>
                      {category?.products?.map((product, j) => (
                        <div
                          key={j}
                          className="p-2 hover:underline cursor-pointer rounded-t-md transition-colors duration-150"
                          onClick={() => {
                            setCatOpen(false);
                            router.push(`/product/${product.slug}`);
                          }}
                          tabIndex={0}
                          onKeyDown={(e) =>
                            (e.key === "Enter" || e.key === " ") &&
                            router.push(`/product/${product.slug}`)
                          }
                        >
                          {product?.name}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {navLinks.slice(2).map((link) => (
              <li
                key={link.label}
                className="relative text-gray-700 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7a9352] after:transition-all after:duration-300 hover:after:w-full"
                tabIndex={0}
                onClick={() => router.push(link.path)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && router.push(link.path)
                }
                aria-label={link.label}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute md:hidden top-14 left-0 w-full p-4 z-10 h-screen bg-white">
            {/* Main menu */}
            <div
              className={`transition-transform duration-300 ${
                mobileMenuView === "main"
                  ? "translate-x-0"
                  : "-translate-x-full"
              } absolute top-0 left-0 w-full h-screen overflow-x-hidden bg-white shadow-lg`}
            >
              <ul className="flex flex-col space-y-4 font-bold text-lg px-4">
                {navLinks.map((link) =>
                  link.label !== "Our Product" ? (
                    <li
                      key={link.label}
                      className="text-gray-700 hover:text-[#7a9352] cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        router.push(link.path);
                      }}
                      tabIndex={0}
                      onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") &&
                        router.push(link.path)
                      }
                    >
                      {link.label}
                    </li>
                  ) : null
                )}
                <li
                  className="flex justify-between items-center text-gray-700 hover:text-[#7a9352] cursor-pointer group"
                  onClick={() => setMobileMenuView("products")}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setMobileMenuView("products")
                  }
                >
                  Our Product
                  <FaChevronRight className="ml-1 inline" size={16} />
                </li>
              </ul>
            </div>
            {/* Product categories submenu */}
            <div
              className={`transition-transform duration-300 ${
                mobileMenuView === "products"
                  ? "translate-x-0"
                  : "translate-x-full"
              } absolute top-0 left-0 w-full overflow-x-hidden bg-white shadow-lg`}
            >
              <button
                className="flex items-center mb-4 text-gray-700 hover:text-[#7a9352]"
                onClick={() => setMobileMenuView("main")}
                tabIndex={0}
                aria-label="Back"
              >
                <FaChevronRight className="rotate-180 mr-2" size={16} />
                Back
              </button>
              <div className="pl-2 h-screen overflow-y-auto">
                {categories.map((category, i) => (
                  <div key={i}>
                    <div className="font-semibold py-2">{category.name}</div>
                    {category.products.map((product, j) => (
                      <div
                        key={product.slug}
                        className="flex items-center p-2 rounded transition-colors duration-150 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileMenuView("main");
                          router.push(`/product/${product.slug}`);
                        }}
                        tabIndex={0}
                        onKeyDown={(e) =>
                          (e.key === "Enter" || e.key === " ") &&
                          router.push(`/product/${product.slug}`)
                        }
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
    </nav>
  );
};

export default NavBar;
