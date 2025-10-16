import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      {/* Spinning Circle */}
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading Text */}
      <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-purple-700">
        Loading <span className="animate-pulse">...</span>
      </h2>

      {/* Small Tagline */}
      <p className="text-gray-500 mt-2 text-sm sm:text-base">
        Please wait while we prepare something amazing 💫
      </p>
    </div>
  );
};

export default Loading;
