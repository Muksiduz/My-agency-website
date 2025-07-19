import { useState } from "react";
import logo from "../../assets/logo.jpg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mx-auto mt-4 md:px-30">
        {/* Logo and Brand Name */}

        <Link className="flex items-center space-x-2" to="/">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src={logo}
              className="w-20 h-20 object-cover rounded-full"
              alt="logo"
            />
          </div>
          <span className="text-orange-500 text-2xl font-bold">Saabr</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Home
          </Link>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Products
          </a>
        </div>

        {/* Contact Us Button Desktop */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start p-4 bg-white rounded-lg shadow-md space-y-4">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition">
            Products
          </a>
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-x-125 cursor-pointer text-white font-semibold py-2 rounded-lg shadow-md transition">
            Contact us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
