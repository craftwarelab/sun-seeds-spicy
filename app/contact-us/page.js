"use client";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow p-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7a9352] mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          We&apos;d love to hear from you! Fill out the form below and our team will get back to you soon.
        </p>
        {submitted ? (
          <div className="text-green-700 font-semibold text-center">
            Thank you for reaching out! We will contact you soon.
          </div>
        ) : (
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a9352]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a9352]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a9352]"
            />
            <button
              type="submit"
              className="bg-[#7a9352] text-white font-bold py-2 px-6 rounded hover:bg-[#5a7a3a] transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-gray-700 text-center text-sm">
          <div>Address: Colombo, Sri Lanka</div>
          <div>
            Email:{" "}
            <a href="mailto:sunseedscolombo@gmail.com" className="text-[#7a9352] underline">
              sunseedscolombo@gmail.com
            </a>
          </div>
          <div>Phone: 123456789</div>
        </div>
      </div>
    </div>
  );
}