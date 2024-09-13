import React from 'react';
import backgroundImage from '../assets/herobg.png'; // Background image

const FAQs = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto mt-10 p-8 rounded-xl z-10">
        <h1 className="text-6xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h1>
        <ul className="space-y-6">
          <li className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-medium text-gray-700">Where are you located?</h2>
            <p className="mt-2 text-gray-600">We are located at Taguig City, Philippines.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-medium text-gray-700">What types of flowers do you offer?</h2>
            <p className="mt-2 text-gray-600">We specialize in preserved flowers, including roses, hydrangeas, and a variety of seasonal blooms.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-medium text-gray-700">Do you deliver?</h2>
            <p className="mt-2 text-gray-600">For deliveries, we currently don't offer direct delivery services. However, we highly recommend booking trusted courier services like Lalamove, Grab, Move It, or Angkas to handle the delivery for you. These services ensure reliable and quick transport.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-medium text-gray-700">Can I customize my bento cake design?</h2>
            <p className="mt-2 text-gray-600">Absolutely! We offer custom designs for our minimalist bento cakes. Just let us know your preferences.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-medium text-gray-700">How can I place an order?</h2>
            <p className="mt-2 text-gray-600">You can contact us directly through our social media channels.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQs;
