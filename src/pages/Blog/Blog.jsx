import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "./blogData";
import Loading from "../../components/Loading/Loading";


const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlogs(blogPosts); 
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-2">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our latest travel stories, tips, and guides.
          </p>
        </div>

        {/* Blog Grid or Loading */}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span className="mr-3">{post.author}</span> |{" "}
                    <span className="ml-3">{post.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.description}</p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 hover:text-purple-700 transition-all"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
