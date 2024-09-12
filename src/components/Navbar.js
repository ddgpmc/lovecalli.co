// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white text-lg hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-lg hover:underline">About</Link>
        </li>
        <li>
          <Link to="/faqs" className="text-white text-lg hover:underline">FAQs</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-lg hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
