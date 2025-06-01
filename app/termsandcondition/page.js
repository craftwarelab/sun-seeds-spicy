"use client";

export default function TermsAndConditionPage() {
  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-[#7a9352] mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to Sun Seeds Foods. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">1. General</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>All content on this website is for informational purposes only and may be updated without notice.</li>
          <li>We reserve the right to modify or discontinue any part of the website at any time.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">2. Product Information</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>We strive to ensure all product descriptions and images are accurate. However, slight variations may occur.</li>
          <li>All prices are subject to change without prior notice.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">3. Orders & Payments</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Orders are confirmed only after payment is received.</li>
          <li>We reserve the right to refuse or cancel any order at our discretion.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">4. Shipping & Delivery</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Delivery timelines are estimates and may vary due to unforeseen circumstances.</li>
          <li>Shipping charges and policies are detailed on our Shipping page.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">5. Returns & Refunds</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Returns are accepted only for damaged or incorrect products. Please contact us within 3 days of delivery.</li>
          <li>Refunds will be processed after inspection and approval.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">6. Privacy</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Your privacy is important to us. Please review our Privacy Policy for details on how we handle your information.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#7a9352] mt-6 mb-2">7. Contact</h2>
        <p className="text-gray-700">
          For any questions regarding these terms, please contact us via our <a href="/contact-us" className="text-[#7a9352] underline">Contact page</a>.
        </p>
      </div>
    </div>
  );
}