"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f2e8d9] px-8 sm:px-20 pt-12 pb-4 border-t border-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 pb-10">
        {/* Brand */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-semibold text-lg text-[#7a9352]">
            Sun Seeds Products Pvt (Ltd)
          </h2>
          <p className="text-gray-600 text-sm">
            Sri Lanka&apos;s trusted source for natural spices, herbal teas,
            superfoods, and healthy snacks. Quality you can taste, wellness you
            can trust.
          </p>
        </div>
        {/* About */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-semibold text-lg text-[#7a9352]">About</h2>
          <Link
            href="/about"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/blogs"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
        {/* Support */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-semibold text-lg text-[#7a9352]">Support</h2>
          <Link
            href="/shipping"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            Shipping
          </Link>
          <Link
            href="/faq"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/termsandcondition"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-semibold text-lg text-[#7a9352]">Get in Touch</h2>
          <address className="not-italic text-gray-600 text-sm">
            Address: 159/3, Kalapugama Road, Walauwatta, Moronthuduwa, Sri Lanka
          </address>
          {/* <a
            href="mailto:sunseedscolombo@gmail.com"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            Email: sunseedscolombo@gmail.com
          </a> */}
          <a
            href="tel:+94768582692"
            className="text-gray-600 hover:text-[#7a9352] text-sm transition-colors"
          >
            Phone: +94 76 858 2692
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-500 pt-4">
        <span className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Sun Seeds Products Pvt (Ltd). All
          rights reserved.
        </span>
        <a
          href="https://www.craftwarelab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-[#7a9352] transition-colors"
        >
          Developed by Craftwarelab
        </a>
      </div>
    </footer>
  );
};

export default Footer;
