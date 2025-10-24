import React from "react";
import {
  FaGlobeAmericas,
  FaHotel,
  FaHeadset,
  FaDollarSign,
  FaMapMarkedAlt,
  FaSmile,
} from "react-icons/fa";
import { Link } from "react-router";

const features = [
  {
    id: 1,
    icon: <FaGlobeAmericas size={36} />,
    title: "Worldwide Destinations",
    description:
      "Explore breathtaking locations across the world. From tropical beaches to mountain peaks, we’ve got your dream trip covered.",
  },
  {
    id: 2,
    icon: <FaHotel size={36} />,
    title: "Best Hotels & Stays",
    description:
      "Enjoy luxury and comfort at top-rated hotels with exclusive discounts and safe bookings.",
  },
  {
    id: 3,
    icon: <FaHeadset size={36} />,
    title: "24/7 Customer Support",
    description:
      "We’re here to help you anytime, anywhere. Your travel happiness is our top priority.",
  },
  {
    id: 4,
    icon: <FaDollarSign size={36} />,
    title: "Affordable Packages",
    description:
      "Get amazing travel experiences without breaking the bank. We offer flexible deals for every budget.",
  },
  {
    id: 5,
    icon: <FaMapMarkedAlt size={36} />,
    title: "Custom Travel Plans",
    description:
      "Design your trip your way — personalized itineraries and unique adventures just for you.",
  },
  {
    id: 6,
    icon: <FaSmile size={36} />,
    title: "Happy Travelers",
    description:
      "Thousands of explorers trust us to make their journeys memorable. Join our happy travel family today!",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-6 lg:px-12">
      <div className="max-w-[1580px] mx-auto text-center px-5 sm:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
           Why Choose <span className="text-purple-600">LET'S~GO?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We believe that traveling should be easy, exciting, and stress-free.
          Here’s why thousands of explorers love booking with us.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white border border-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to={"/contact"}>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              Start Your Journey 🚀
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
