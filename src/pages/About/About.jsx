import React from "react";
import { FaGlobe, FaRegSmile, FaStar } from "react-icons/fa";

const AboutPremium = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Travel"
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg font-semibold">
              Explore The World
            </div>
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-4xl font-bold text-purple-700 mb-4">
              About LET'S~GO
            </h2>
            <p className="text-gray-600 mb-6">
              We are passionate travelers who believe every journey should be memorable. 
              Our mission is to bring you closer to the world’s hidden gems and unforgettable adventures.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <FaGlobe className="text-purple-600 text-4xl mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">Global Destinations</h3>
                <p className="text-gray-500 text-sm">Handpicked destinations around the world for unique experiences.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <FaRegSmile className="text-purple-600 text-4xl mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">Amazing Experiences</h3>
                <p className="text-gray-500 text-sm">Create memories with adventures, activities, and travel stories.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <FaStar className="text-purple-600 text-4xl mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">Top Rated Service</h3>
                <p className="text-gray-500 text-sm">Highly rated for excellent service, guidance, and travel planning.</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/destinations"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPremium;
