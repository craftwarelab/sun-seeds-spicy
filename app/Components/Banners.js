"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Banners = () => {
    const images = ["/Banners/organic_spicey (3).jpg", "/Banners/organic_spicey (2).jpg", "/Banners/organic_spicey (1).jpg"];
const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-swipe logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) {
      // Swipe right
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else if (diff < -50) {
      // Swipe left
      setCurrent((prev) => (prev + 1) % images.length);
    }
    touchStartX.current = null;
  };
  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <div className="w-full flex-shrink-0" key={i}>
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              width={1200}
              height={400}
              className="w-full h-[180px] sm:h-[300px] md:h-screen object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-[#e3f2d4]" : "bg-white"}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Prev/Next buttons (optional) */}
      {/* <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white transition hidden sm:block"
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white transition hidden sm:block"
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        aria-label="Next"
      >
        &#8594;
      </button> */}
    </div>
  );
};

export default Banners;
