import React from 'react';
import { Link } from 'react-router';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaChevronRight 
} from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-0 bg-gradient-to-b from-purple-800 to-purple-950 text-white overflow-hidden">
      {/* Top Wave Shape (Dew Design) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform">
        <svg 
          className="relative block w-full h-12 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="pt-16 pb-8 container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center mb-5">
              <GiWorld className="text-3xl text-purple-400 mr-2" />
              <h3 className="text-2xl font-extrabold text-white">LET'S~GO</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore the world with Global Wanderer — your digital travel companion 
              for discovering destinations, cultures, and unforgettable adventures.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-lg flex items-center justify-center w-10 h-10 shadow-md">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white p-2.5 rounded-lg flex items-center justify-center w-10 h-10 shadow-md">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-lg flex items-center justify-center w-10 h-10 shadow-md">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-lg flex items-center justify-center w-10 h-10 shadow-md">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3 md:pl-4">
            <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-purple-500/30">Quick Links</h3>
            <ul className="space-y-2">
              {['/', '/destinations', '/blog', '/about', '/contact', '/login'].map((path, index) => {
                const labels = ['Home', 'Destinations', 'Blog', 'About', 'Contact', 'Login'];
                return (
                  <li key={index} className="hover:translate-x-2 transition-transform duration-300">
                    <Link to={path} className="text-gray-300 hover:text-purple-400 flex items-center">
                      <FaChevronRight className="text-xs mr-2 text-purple-400" /> {labels[index]}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-4 md:pl-4">
            <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-purple-500/30">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-lg mt-1 mr-3 shadow-lg">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-200 text-sm mb-1">Email</h4>
                  <a href="mailto:info@globalwanderer.com" className="text-gray-300 hover:text-purple-400">
                    info@letsgo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-lg mt-1 mr-3 shadow-lg">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-200 text-sm mb-1">Phone</h4>
                  <span className="text-gray-300">+880 1234 567 890</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-lg mt-1 mr-3 shadow-lg">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-200 text-sm mb-1">Address</h4>
                  <p className="text-gray-300">
                    42 Wander Street<br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} <span className="text-purple-400">LET'S~GO</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
              {['/terms', '/privacy', '/faq', '/contact'].map((path, index) => {
                const labels = ['Terms', 'Privacy', 'FAQ', 'Contact'];
                return (
                  <Link key={index} to={path} className="text-gray-400 text-sm hover:text-purple-400">
                    {labels[index]}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-6 text-xs text-gray-400">
            Developed with <span className="text-purple-400">♥</span> by{" "}
            <a href="https://amdadislam-01.netlify.app/" className="underline text-purple-400 hover:text-purple-300">
              MD Amdad Islam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
