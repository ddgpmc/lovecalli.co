import React from 'react';
import about from '../assets/herobg.png'; // Background image
import about1 from '../assets/cake3.jpg'; // Secondary image

const About = () => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${about})` }} // No blur on the whole page
    >
      {/* Overlay for background color blending */}
      <div className="bg-black bg-opacity-30 p-8 rounded-lg min-h-screen">
        {/* Main Title */}
        <h1 className="text-6xl font-bold mb-2 text-center mt-20 text-white">About Us</h1>

        {/* Welcome Message Section */}
        <div className="max-w-4xl mx-auto rounded-lg p-8 text-center mb-10">
          <h2 className="text-3xl text-white font-semibold mb-4">🌸 Welcome to Love, Calli! 🌸</h2>
          <p className="text-xl mb-1 text-white leading-relaxed">
            We're thrilled to introduce our unique blend of beauty and indulgence. At Love, Calli, we specialize in creating stunning dried flower arrangements that brighten up any space and add a touch of elegance to your home. But that's not all—our offerings are paired with delicious pastries that make every moment a little sweeter!
          </p>
        </div>

        {/* Squares Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Left-side squares */}
          <div className="grid grid-cols-1 gap-4">
            {/* Square 1 */}
            <div className="w-full h-64 flex flex-col items-center justify-center text-center p-4 shadow-lg bg-white bg-opacity-70 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black mb-2">Who is Calli?</h3>
              <p className="text-black">
                She is the furry muse behind Love, Calli. With soft purrs and playful antics, she has inspired a world where dried flowers and delicious pastries come together to create moments of joy.
              </p>
            </div>

            {/* Square 2 */}
            <div className="w-full h-64 flex flex-col items-center justify-center text-center p-4 shadow-lg bg-white bg-opacity-70 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black mb-2">Why Dried Flowers?</h3>
              <p className="text-black">It’s better to gift someone preserved flowers because fresh flowers eventually wilt and die, but preserved flowers stay beautiful for much longer, capturing moments of joy for years to come.</p>
            </div>
          </div>

          {/* Rectangle in the middle (Square/Rectangle 3 - now an image) */}
          <div className="w-full h-96 md:h-96">
            <img 
              src={about1} 
              alt="Rectangle Image" 
              className="w-full h-full object-cover shadow-lg" 
            />
          </div>

          {/* Right-side squares */}
          <div className="grid grid-cols-1 gap-4">
            {/* Square 4 */}
            <div className="w-full h-64 flex flex-col items-center justify-center text-center p-4 shadow-lg bg-white bg-opacity-70 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black mb-2">Why Choose Us?</h3>
              <p className="text-black">At Love, Calli, we offer a unique combination of beautiful preserved flowers and delicious pastries, creating a perfect gift that delights both the eyes and the taste buds. We’re committed to providing products that create lasting memories.</p>
            </div>

            {/* Square 5 */}
            <div className="w-full h-64 flex flex-col items-center justify-center text-center p-4 shadow-lg bg-white bg-opacity-70 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black mb-2">Who Are the People Behind Love, Calli?</h3>
              <p className="text-black">Love, Calli is lovingly run by Calli’s mom and family, who are passionate about bringing beauty and sweetness into the lives of others through our flowers and pastries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
