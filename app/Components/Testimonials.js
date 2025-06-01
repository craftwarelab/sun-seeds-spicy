import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// ...existing imports...

const testimonials = [
  {
    name: "Ayesha Perera",
    text: "Sun Seeds products are always fresh and natural. I love their Moringa Powder and the difference it has made in my daily routine!",
    image: "/testimonials/ayesha.jpg",
  },
  {
    name: "Ruwan Fernando",
    text: "The spices are so aromatic and pure. I trust Sun Seeds for my family's health and taste.",
    image: "/testimonials/ruwan.jpg",
  },
  {
    name: "Nimali Jayasinghe",
    text: "Their herbal teas are my favorite! The packaging is eco-friendly and the quality is unmatched.",
    image: "/testimonials/nimali.jpg",
  },
  {
    name: "Suresh De Silva",
    text: "I appreciate their commitment to supporting local farmers. The products are top-notch.",
    image: "/testimonials/suresh.jpg",
  },
  {
    name: "Dilani Wijeratne",
    text: "Fast delivery and excellent customer service. Highly recommend Sun Seeds to everyone!",
    image: "/testimonials/dilani.jpg",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="w-full max-w-xl mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div className="w-full h-full flex-shrink-0 px-4" key={i}>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              {/* <Image
                src={t.image}
                alt={t.name}
                width={254}
                height={254}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#e3f2d4]"
                loading="lazy"
              /> */}
              <p className="text-gray-700 text-center mb-4 italic">
                &quot;{t.text}&quot;
              </p>
              <span className="font-bold text-[#7a9352]">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 cursor-pointer">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
