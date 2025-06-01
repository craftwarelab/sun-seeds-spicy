"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Banners from "./Components/Banners";
import Image from "next/image";
import productsData from "./Data/products.json";
import Testimonials from "./Components/Testimonials";
import blogsData from "./Data/blogs.json";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const router = useRouter();
  const products = productsData.products.slice(0, 6); // Get first 6 products for the featured section
  const featureBlogs = blogsData.articles.slice(0, 3);

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
    <main className="block">
      {/* Hero Banner */}
      <Banners />

      {/* Welcome Section */}
      <section className="flex justify-center items-center text-[#7a9352] py-8 px-[24px] bg-white">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
            Welcome to Sun Seeds
          </h1>
          <h2 className="text-gray-600 text-xl sm:text-3xl font-bold mb-8 text-center">
            Sri Lanka&apos;s trusted source for natural spices, herbal teas, superfoods, and healthy snacks. Quality you can taste, wellness you can trust.
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-18 mt-8 overflow-hidden">
            {headerIcons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image
                  src={icon}
                  alt={`Header Icon ${index + 1}`}
                  width={120}
                  height={120}
                  className="w-28 h-28 sm:w-44 sm:h-44 object-contain"
                  loading="lazy"
                />
                <span className="text-md sm:text-lg font-bold capitalize">
                  {icon.split("/").pop().split(".")[0].replace(/_/g, " ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do / Featured Products */}
      <section className="flex justify-center items-center py-8 px-[24px] bg-[#e3f2d4]">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded"
                  loading="lazy"
                />
                <h3 className="font-bold text-xl mb-2 text-[#7a9352] text-center">{product.name}</h3>
                <p className="text-gray-600 text-center text-[16px]">{product.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-[#7a9352] py-2 px-3 rounded-2xl cursor-pointer mt-8 text-[16px] hover:underline font-semibold bg-transparent border-none"
              onClick={() => router.push(`/our-products`)}
              aria-label="See more products"
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex justify-center items-center py-8 px-[24px] bg-[#f2e8d9]">
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-xl sm:text-3xl font-bold mb-8 text-center text-[#89622e]">
            Our mission is to provide a wholesome, clean label, chemical-free and sustainable food choice for all our consumers, offering an alternative to chemically-processed and mass-produced foods.
          </h3>
          <div className="flex justify-center flex-col items-center gap-4">
            <div className="bg-[#89622e] p-3 rounded-4xl px-4 mb-8">
              <h4 className="text-2xl sm:text-4xl font-bold text-center text-[#f2e8d9]">
                We Believe in
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl">
              <div className="flex flex-col items-center shadow hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl">
                <Image
                  src="/we_believe_in/pesticide-01-01.webp"
                  alt="Chemical & pesticide free food"
                  width={300}
                  height={300}
                  className="w-58 h-58 object-cover mb-4 rounded"
                  loading="lazy"
                />
                <div className="bg-[#89622e] flex flex-col items-center p-4 text-[#f2e8d9] h-full rounded-b-xl">
                  <h5 className="font-bold text-xl mb-3 text-center">
                    Chemical & pesticide free food
                  </h5>
                  <p className="text-center text-[14px]">
                    Our products are made from the highest quality natural ingredients, without any artificial colors, flavors, or preservatives.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center shadow hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl">
                <Image
                  src="/we_believe_in/cow-01-01.webp"
                  alt="Ethical sourcing of premium ingredients"
                  width={300}
                  height={300}
                  className="w-58 h-58 object-cover mb-4 rounded"
                  loading="lazy"
                />
                <div className="bg-[#89622e] flex flex-col items-center p-4 text-[#f2e8d9] h-full rounded-b-xl">
                  <h5 className="font-bold text-xl mb-3 text-center">
                    Ethical sourcing of premium ingredients
                  </h5>
                  <p className="text-center text-[14px]">
                    All our products are natural, whole and unrefined, & retain more nutrients than conventionally produced refined food.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center shadow hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl">
                <Image
                  src="/we_believe_in/world-01-01.webp"
                  alt="Better for you, better for our planet"
                  width={300}
                  height={300}
                  className="w-58 h-58 object-cover mb-4 rounded"
                  loading="lazy"
                />
                <div className="bg-[#89622e] flex flex-col items-center p-4 text-[#f2e8d9] h-full rounded-b-xl">
                  <h5 className="font-bold text-xl mb-3 text-center">
                    Better for you, better for our planet
                  </h5>
                  <p className="text-center text-[14px]">
                    Our aim is to support small farmers and the farming communities that produce natural food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex justify-center items-center text-[#7a9352] py-8 px-[24px] bg-white">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
            Testimonials
          </h2>
          <h3 className="text-gray-600 text-xl sm:text-3xl font-bold mb-8 text-center">
            Hear from our happy customers who love our products and service.
          </h3>
          <div className="w-full max-w-screen-xl flex justify-center items-center">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="flex justify-center items-center py-8 px-[24px] bg-[#f2e8d9]">
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[#7a9352]">
            Featured Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureBlogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={blog.headImage}
                  alt={blog.title}
                  width={320}
                  height={180}
                  className="rounded-lg object-cover w-full h-40 mb-4"
                  loading="lazy"
                />
                <div className="flex flex-col items-center h-full">
                  <h3 className="font-bold text-xl mb-2 text-[#7a9352] text-center">{blog.title}</h3>
                  <p className="text-gray-700 mb-4 text-center">{blog.excerpt}</p>
                </div>
                <button
                  className="bg-[#7a9352] text-white font-bold py-2 px-6 rounded hover:bg-[#5a7a3a] transition cursor-pointer"
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
