"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import productsData from "../../Data/products.json"; // <-- use new JSON file
import { useEffect, useState } from "react";

export default function SingleProductPage() {
  const params = useParams();
  const router = useRouter();
  const product = params.product;
  const [prod, setProd] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const found = productsData.products.find(
        (p) => p.slug === product?.toLowerCase()
      );
      setProd(found);
    }
  }, [product]);

  // const handleAddToCart = () => {
  //   setAdded(true);
  //   setTimeout(() => setAdded(false), 2000);
  // };

  if (!prod) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-600 text-xl">Product not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={prod.image}
            alt={prod.name}
            width={400}
            height={400}
            className="w-full h-80 object-cover rounded"
          />
        </div>
        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-3xl font-bold text-[#7a9352] mb-4">
            {prod.name}
          </h1>
          <p className="text-gray-700 text-lg mb-4">{prod.desc}</p>
          <span className="text-xs text-gray-400 mb-4">Code: {prod.code}</span>
          {prod.features && (
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {prod.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-6">
            <button
              className="px-3 py-1 bg-[#e3f2d4] rounded text-2xl font-bold text-[#7a9352] hover:bg-[#c8e6b5] transition"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="px-3 py-1 bg-[#e3f2d4] rounded text-2xl font-bold text-[#7a9352] hover:bg-[#c8e6b5] transition"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          {/* Add to Cart Button */}
          {/* <button
            className="bg-[#7a9352] text-white font-bold py-2 px-8 rounded hover:bg-[#5a7a3a] transition mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          {added && (
            <div className="text-green-600 font-semibold mb-2">
              Added to cart!
            </div>
          )} */}
          {/* Order Now on WhatsApp */}
          <a
            href={`https://wa.me/94768582692?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(
              prod.name
            )}%20Quantity:%20${quantity}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-green-600 text-white font-bold py-2 px-8 rounded hover:bg-green-700 transition block text-center"
          >
            Order Now on WhatsApp
          </a>
          <button
            className="mt-4 text-[#7a9352] underline cursor-pointer"
            onClick={() => router.back()}
          >
            &larr; Back
          </button>
        </div>
      </div>
    </div>
  );
}
