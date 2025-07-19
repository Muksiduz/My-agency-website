import logo from "../../assets/logo.jpg";
const Navbar = () => {
  return (
    <div className=" bg-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mx-auto px-30 mt-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          {/* Placeholder for the logo - you can replace this with an actual image */}
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">
              <img
                src={logo}
                className="w-20 h-20 object-cover rounded-full"
                alt="logo"
              />
            </span>
          </div>
          <span className="text-orange-500 text-2xl font-bold">Saabr</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition duration-300 ease-in-out">
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition duration-300 ease-in-out">
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition duration-300 ease-in-out">
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg font-medium transition duration-300 ease-in-out">
            Products
          </a>
        </div>

        {/* Contact Us Button */}
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Contact us
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
