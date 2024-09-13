import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import the social media icons
import backgroundImage from '../assets/herobg.png'; // Background image
import flowerImage from '../assets/callipic.png'; // Image of the flower arrangements
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Background overlay */}
      
      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row text-white text-center lg:text-left items-center lg:items-start lg:space-x-12 lg:px-12 p-6">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img 
            src={flowerImage} 
            alt="Flower Arrangements" 
            className="rounded-lg w-2/3 lg:w-full xl:w-full h-auto"
          />
        </div>
        
        {/* Text and Button Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:mt-32">
          <div className="p-6 bg-opacity-75 max-w-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Welcome to Love, Calli
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              At Love, Calli, we specialize in creating stunning dried flower arrangements that brighten up any space and add a touch of elegance to your home. But that's not all—our offerings are paired with delicious pastries that make every moment a little sweeter!
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gray-800 rounded hover:bg-gray-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex space-x-4 text-white">
        <a
          href="https://www.facebook.com/lovecalli.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebookF className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
        <a
          href="https://instagram.com/lovecalli.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
      </div>
    </div>
  );
};

export default Home;
