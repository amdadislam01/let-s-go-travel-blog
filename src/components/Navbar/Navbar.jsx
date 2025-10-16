import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import {
  FaHome,
  FaGlobeAsia,
  FaBookOpen,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import logo from '/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);

  const navLinks = [
  { to: "/", label: "Home", icon: <FaHome className="inline mr-2" /> },
  { to: "/destinations", label: "Destinations", icon: <FaGlobeAsia className="inline mr-2" /> },
  { to: "/blog", label: "Blog", icon: <FaBookOpen className="inline mr-2" /> },
  { to: "/about", label: "About", icon: <FaInfoCircle className="inline mr-2" /> },
  { to: "/contact", label: "Contact", icon: <FaEnvelope className="inline mr-2" /> },
];

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300 border-b border-purple-100">
      <nav className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-14 h-14">
              <img src={logo} alt="" />
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-gray-800 group-hover:text-purple-700 transition-colors">
              LET'S~GO
            </span>
          </NavLink>

          {/* Menu Center */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center relative">
            {!user ? (
              <NavLink
                to="/login"
                className="ml-2 inline-flex items-center gap-2 justify-center px-5 py-2 rounded-md font-medium text-sm text-white bg-gradient-to-r from-purple-600 to-purple-500 shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
              >
                <FaUser /> Login
              </NavLink>
            ) : (
              <div className="relative">
                <img
                  src={user.photoURL || "https://i.ibb.co/Y3h8zGp/user.png"}
                  alt="User"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-500 hover:scale-105 transition-transform"
                />

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-3 w-52 bg-white border border-purple-100 shadow-lg rounded-xl overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-purple-100">
                      <h3 className="font-semibold text-gray-800">
                        {user.displayName || "Traveler"}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={logoutUser}
                      className="w-full flex items-center gap-2 px-4 py-2 text-left text-purple-600 hover:bg-purple-50 transition-colors cursor-pointer"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-white hover:bg-purple-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                    }`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}

              {!user ? (
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 mx-4 mt-2 px-4 py-2 rounded-md font-medium bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <FaUser /> Login
                </NavLink>
              ) : (
                <div className="mx-4 mt-4 bg-purple-50 rounded-lg p-3 text-center">
                  <p className="font-medium text-gray-800">{user.displayName}</p>
                  <p className="text-sm text-gray-500 mb-2">{user.email}</p>
                  <button
                    onClick={() => {
                      logoutUser();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 bg-purple-600 text-white w-full py-2 rounded-md hover:bg-purple-700 transition cursor-pointer"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
