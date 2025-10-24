import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Exploring the Hidden Gems of Bali",
    author: "MD Amdad Islam",
    date: "October 10, 2025",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    description:
      "Discover Bali beyond the beaches — from lush rice terraces to serene temples hidden in the jungle.",
  },
  {
    id: 2,
    title: "A Romantic Getaway to Paris",
    author: "Zahidul Islam Mahim",
    date: "September 25, 2025",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    description:
      "Paris is not just the city of love; it’s a dream for photographers and food lovers alike.",
  },
  {
    id: 3,
    title: "Top 5 Mountains to Visit in the World",
    author: "Litan Molla",
    date: "August 30, 2025",
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/10/1433943616380/the-Matterhorn-and-Zermat-009.jpg?width=465&dpr=1&s=none&crop=none",
    description:
      "From the Himalayas to the Alps — experience the most breathtaking mountain ranges across the globe.",
  },
];

const Blogs = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-[1580px] mx-auto text-center px-5 sm:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
           Latest Blog Posts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Read the latest travel stories, tips, and guides from explorers around
          the world. Stay inspired and plan your next adventure!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 mb-4">
                  {blog.description.slice(0, 90)}...
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-purple-100 pt-3">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-purple-600" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-purple-600" />
                    {blog.date}
                  </div>
                </div>

                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
