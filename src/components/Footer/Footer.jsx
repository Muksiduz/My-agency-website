import React from "react";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-800 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-4.707-8.293l-1.414 1.414L12 17.414l6.121-6.121-1.414-1.414L12 14.586l-4.707-4.707z" />
              </svg>
              <span className="text-orange-500 text-2xl font-bold">
                Saabr Digitals
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Website Development | E-commerce Solutions | Digital Marketing |
              Content Creation Helping schools, institutes, and businesses build
              their online presence with modern, affordable solutions.
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
                href="#"
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
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.99-3.56-.18-6.73-1.89-8.85-4.48-.37.63-.58 1.37-.58 2.16 0 1.49.75 2.81 1.91 3.56-.7-.02-1.36-.22-1.93-.53v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.96 4.03 2.99-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.69-.02-1.03-.06C4.6 20.39 6.88 21 9.25 21c10.5 0 16.24-8.72 16.24-16.25 0-.25-.01-.5-.02-.75.84-.6 1.56-1.36 2.14-2.22z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.294-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.797 24 17.299 24 12 24 5.373 18.627 0 12 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Dribbble">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.093 17.5c-1.285-1.122-2.02-2.613-2.02-4.25 0-1.637.735-3.128 2.02-4.25l-.001-.001c.214-.187.44-.358.675-.515.772-2.181 2.864-3.734 5.299-3.734 3.313 0 6 2.687 6 6s-2.687 6-6 6c-2.435 0-4.527-1.553-5.299-3.734-.235-.157-.461-.328-.675-.515l.001-.001zm4.093-12.5c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" />
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
                  Company History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300">
                  Content Creation
                </a>
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
              &copy; {new Date().getFullYear()} Saabr Digitals | All Rights
              Reserved
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
