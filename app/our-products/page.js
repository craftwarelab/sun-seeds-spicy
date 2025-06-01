"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import productsData from "../Data/products.json";

export default function OurProducts() {
  const products = productsData.products;
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7a9352] mb-8 text-center">
          Our Products
        </h1>
        <p className="text-gray-700 text-lg mb-10 text-center max-w-2xl mx-auto">
          Discover our range of natural spices, herbal teas, superfoods, and
          healthy snacks. All our products are crafted with care, using the
          finest ingredients sourced from trusted local farmers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="flex flex-col items-center h-full">
                <h2 className="font-bold text-xl mb-2 text-[#7a9352] text-center">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-center text-[16px] mb-4">
                  {product.desc}
                </p>
              </div>
              <button
                className="bg-[#7a9352] text-white cursor-pointer font-bold py-2 px-6 rounded hover:bg-[#5a7a3a] transition"
                onClick={() => router.push(`/product/${product.slug}`)}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
