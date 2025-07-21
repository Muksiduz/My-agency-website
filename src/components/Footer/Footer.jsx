import logo from "../../assets/sizz3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-white font-sans antialiased flex flex-col justify-between">
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Wavy background element (simplified from image) */}
        <div className="absolute bottom-0 left-0 w-full h-48 ">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor">
            <path
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* Logo Placeholder (using SVG for the wave effect) */}

              <img
                src={logo}
                className="h-15 w-15 rounded-full text-blue-800 mr-2"
                alt="Company Logo"
              />
              <span className="text-orange-500 text-2xl font-bold">Osizz</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Website Development | E-commerce Solutions | Digital Marketing |
              Content Creation
              <br />
              <span className="pt-10">
                <br />
                📍 Assam, India <br />
                📞 +91 7577918465
              </span>
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.235 0-4.188 1.567-4.188 4.042v2.958z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/osizz__?utm_source=ig_web_button_share_sheet&igsh=MTJyM3dnNHEyeGE5dg=="
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0 2.163c-3.21 0-3.604.012-4.86.07-2.71.124-3.95 1.45-4.074 4.074-.058 1.256-.07 1.65-.07 4.86s.012 3.604.07 4.86c.124 2.624 1.364 3.864 4.074 4.074 1.256.058 1.65.07 4.86.07s3.604-.012 4.86-.07c2.71-.124 3.95-1.45 4.074-4.074.058-1.256.07-1.65.07-4.86s-.012-3.604-.07-4.86c-.124-2.624-1.364-3.864-4.074-4.074-1.256-.058-1.65-.07-4.86-.07zm0 3.627c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 2.163c1.285 0 2.337 1.052 2.337 2.337s-1.052 2.337-2.337 2.337-2.337-1.052-2.337-2.337 1.052-2.337 2.337-2.337zm6.406-7.062c-.672 0-1.217.545-1.217 1.217s.545 1.217 1.217 1.217 1.217-.545 1.217-1.217-.545-1.217-1.217-1.217z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Why Us
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"></a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Careers
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/service"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <ink
                  to="/service"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Digital Marketing
                </ink>
              </li>
              <li>
                <ink
                  to="/service"
                  className="hover:text-blue-400 transition-colors duration-300">
                  E-commerce Solutions
                </ink>
              </li>
              <li>
                <ink
                  to="/service"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Content Creation
                </ink>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links (from second image) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="relative  z-100 text-center mt-11 pt-8 ">
          <p className="text-sm text-black font-bold">
            <span>
              {" "}
              &copy; {new Date().getFullYear()} Osizz | All Rights Reserved
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
