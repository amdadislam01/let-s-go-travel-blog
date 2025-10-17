import React from "react";
import { Link, useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-[130px] md:text-[180px] font-extrabold text-white tracking-widest drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found 😢
        </h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">
          Looks like the page you’re looking for doesn’t exist or may have been
          moved. Don’t worry — let’s get you back to your next adventure!
        </p>

        {/* Go Home Button */}
        <button
          onClick={()=> navigate(-1)}
          className="inline-flex items-center gap-3 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all
           duration-300 cursor-pointer"
        >
          <FaHome className="text-xl" />
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
