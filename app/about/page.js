"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow p-8 flex flex-col items-center">
        <Image
          src="/Logo.jpeg"
          alt="Sun Seeds Foods Logo"
          width={120}
          height={120}
          className="mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7a9352] mb-4 text-center">
          About Sun Seeds Foods
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Sun Seeds Foods is Sri Lanka&apos;s trusted source for natural spices, herbal teas, superfoods, and healthy snacks. We are passionate about providing wholesome, clean label, chemical-free, and sustainable food choices for all our consumers.
        </p>
        <h2 className="text-2xl font-semibold text-[#7a9352] mb-2 mt-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          To offer an alternative to chemically-processed and mass-produced foods by supporting small farmers and communities, and delivering products that are better for you and better for our planet.
        </p>
        <h2 className="text-2xl font-semibold text-[#7a9352] mb-2 mt-4 text-center">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 text-left max-w-xl">
          <li>100% natural, chemical & pesticide-free ingredients</li>
          <li>Ethical sourcing and support for local farmers</li>
          <li>Eco-friendly packaging</li>
          <li>Commitment to quality and wellness</li>
          <li>Trusted by families across Sri Lanka</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[#7a9352] mb-2 mt-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-700 text-center">
          Address: Colombo, Sri Lanka<br />
          Email: <a href="mailto:sunseedscolombo@gmail.com" className="text-[#7a9352] underline">sunseedscolombo@gmail.com</a><br />
          Phone: 123456789
        </p>
      </div>
    </div>
  );
}