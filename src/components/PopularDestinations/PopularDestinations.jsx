import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    country: "Greece",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image:
      "https://photos.smugmug.com/Kyoto/Honeymoon-in-Kyoto/i-LdmsJPZ/0/26b66d84/L/shutterstock_626644001-L.jpg",
    country: "Japan",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    country: "Indonesia",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    country: "France",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Cox’s Bazar, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    country: "Bangladesh",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Swiss Alps, Switzerland",
    image:
      "https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg",
    country: "Switzerland",
    rating: 4.8,
  },
];

const PopularDestinations = () => {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20 px-6 lg:px-12">
      <div className="max-w-[1580px] mx-auto text-center px-5 sm:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
           Popular Destinations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover some of the most breathtaking travel spots around the world.
          Pick your dream destination and start your next adventure today!
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-purple-100"
            >
              <div className="relative">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover group-hover:opacity-90 transition-all duration-300"
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaMapMarkerAlt /> {place.country}
                </div>
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  {place.name}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar /> <span className="text-gray-700">{place.rating}</span>
                  </div>
                  <Link to={'/destinations'}>
                  <button className="text-sm bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition cursor-pointer">
                    Explore
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
