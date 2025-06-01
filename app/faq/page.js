"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What makes Sun Seeds products unique?",
    answer:
      "Sun Seeds products are made from the highest quality natural ingredients, sourced ethically from local farmers. We ensure all our products are chemical-free, preservative-free, and crafted for maximum nutrition and taste."
  },
  {
    question: "Are your products organic and chemical-free?",
    answer:
      "Yes, all our products are made from natural ingredients and are free from chemicals, pesticides, and artificial additives."
  },
  {
    question: "How can I order your products?",
    answer:
      "You can browse our products online and order directly through our website. For bulk or special orders, please contact us via WhatsApp or our contact page."
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we ship within Sri Lanka. For international orders, please contact us directly to discuss shipping options."
  },
  {
    question: "How should I store your products?",
    answer:
      "Store our products in a cool, dry place away from direct sunlight. Reseal the packaging after each use to maintain freshness."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-[#7a9352] mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <button
                className="w-full text-left flex justify-between items-center font-semibold text-lg text-[#7a9352] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span className="ml-2 text-xl cursor-pointer">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-700 text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}