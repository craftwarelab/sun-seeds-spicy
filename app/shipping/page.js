"use client";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-[#7a9352] mb-6 text-center">
          Shipping & Delivery Information
        </h1>
        <p className="text-gray-700 mb-4">
          At Sun Seeds, we strive to deliver your order quickly and safely. Please review our shipping policy below.
        </p>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">Delivery Areas</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>We deliver island-wide across Sri Lanka.</li>
          <li>For international shipping, please contact us directly.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">Delivery Time</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Colombo & suburbs: 2-3 working days</li>
          <li>Other areas: 3-5 working days</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">Shipping Charges</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Delivery charges are calculated at checkout based on your location and order size.</li>
          <li>Free delivery for orders above Rs. 5,000 within Colombo city limits.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">Order Tracking</h2>
        <p className="text-gray-700 mb-4">
          Once your order is dispatched, you will receive a confirmation message with tracking details.
        </p>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">Need Help?</h2>
        <p className="text-gray-700">
          If you have any questions about your order or shipping, please contact us via our <a href="/contact-us" className="text-[#7a9352] underline">Contact page</a> or WhatsApp.
        </p>
      </div>
    </div>
  );
}