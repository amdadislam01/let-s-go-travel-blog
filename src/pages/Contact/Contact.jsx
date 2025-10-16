import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-2 tracking-wide">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or ready to plan your next adventure? Send us a message!
          </p>
          <div className="mt-4 w-36 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: <FaMapMarkerAlt className="text-2xl" />,
                title: "Address",
                info: "Road-11, Block-9, Green Model-R/A, Dhaka, Bangladesh",
                bg: "bg-gradient-to-r from-purple-500 to-pink-500"
              },
              {
                icon: <FaPhone className="text-2xl" />,
                title: "Phone",
                info: "+880123456789",
                bg: "bg-gradient-to-r from-purple-500 to-pink-500"
              },
              {
                icon: <FaEnvelope className="text-2xl" />,
                title: "Email",
                info: "contact@letsgo.com",
                bg: "bg-gradient-to-r from-purple-500 to-pink-500"
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 transform hover:scale-105 transition-all duration-300">
                <div className={`${item.bg} text-white p-5 rounded-xl shadow-lg flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-500">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/80 p-8 rounded-3xl shadow-2xl space-y-6 border border-purple-200"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="5"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message ✈️"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
