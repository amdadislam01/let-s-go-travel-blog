import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt } from "react-icons/fa";
import { destinations } from "./destinationsData";
import Loading from "../../components/Loading/Loading";


const Destinations = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaces(destinations); 
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-3">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most loved travel spots around the world — handpicked
            just for your next adventure!
          </p>
          <div className="mt-4 w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Destinations Grid or Loading */}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-purple-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-purple-700 flex items-center gap-1">
                    <FaMapMarkerAlt /> {place.country}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {place.description}
                  </p>

                  {/* Ratings */}
                  <div className="flex items-center gap-1 mt-3 text-yellow-400">
                    {Array.from({ length: 5 }, (_, index) => {
                      const rating = place.rating;
                      if (index + 1 <= rating) return <FaStar key={index} />;
                      if (index + 0.5 === rating) return <FaStarHalfAlt key={index} />;
                      return <FaRegStar key={index} />;
                    })}
                  </div>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-5">
                    <p className="text-purple-700 font-semibold text-lg">
                      ${place.price}
                      <span className="text-gray-500 text-sm"> / person</span>
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
