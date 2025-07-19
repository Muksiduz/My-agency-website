import React from "react";

const Contactus = () => {
  return (
    <div
      className={`min-h-screen overflow-hidden bg-white font-sans antialiased flex items-center justify-center py-12`}>
      {/* Contact Us Section */}
      <section
        className={`  p-8 md:p-12 lg:p-30 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row border border-blue-200`}>
        {/* Left Section - Contact Form */}
        <div className="flex-1 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Intrested Sector
                </label>
                <select
                  id="services"
                  name="services"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <option>Website Development</option>
                  <option>Digital Marketing</option>
                  <option>E-commerce Development</option>
                  <option>Content Creation</option>
                  <option>Social Media Marketing</option>
                  <option>SEO (Search Engine Optimization)</option>{" "}
                  {/* Good addition for your agency */}
                  <option>Branding & Logo Design</option>{" "}
                  {/* Also highly requested */}
                  <option>UI/UX Design</option>{" "}
                  {/* Helps complete your offering */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="+91 12345-67890"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                What do you have in mind
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Please enter your query..."></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex-1 lg:pl-12 lg:border-l-2 border-blue-300">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            Let's Build Something Great Together.
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you need a website, digital marketing, or creative content —
            we're here to help your business grow.
          </p>

          <div className="space-y-6">
            <div className="flex items-center text-gray-700">
              <a href="tel:+917577918465">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <span>+91 7577918465</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v14z"
                />
              </svg>
              <span>Muksiduzz@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Barpeta,Assam</span>
            </div>
          </div>

          <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
            {/* Social Media Icons - Placeholder SVGs */}
            {/* <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.99-3.56-.18-6.73-1.89-8.85-4.48-.37.63-.58 1.37-.58 2.16 0 1.49.75 2.81 1.91 3.56-.7-.02-1.36-.22-1.93-.53v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.96 4.03 2.99-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.69-.02-1.03-.06C4.6 20.39 6.88 21 9.25 21c10.5 0 16.24-8.72 16.24-16.25 0-.25-.01-.5-.02-.75.84-.6 1.56-1.36 2.14-2.22z" />
              </svg>
            </a> */}
            {/* <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"> */}
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-red-600">
                {/* Red rounded rectangle for YouTube background */}
            {/* <path d="M21.543 6.494c-.812-.914-2.148-.914-2.96-.914-2.822 0-5.644 0-8.466 0s-5.644 0-8.466 0c-.812 0-2.148 0-2.96.914C.333 7.408 0 8.766 0 12s.333 4.592 1.691 5.506c.812.914 2.148.914 2.96.914 2.822 0 5.644 0 8.466 0s5.644 0 8.466 0c.812 0 2.148 0 2.96-.914C23.667 16.592 24 15.234 24 12s-.333-4.592-1.691-5.506z" /> */}
            {/* White play button triangle */}
            {/* <path
                  fill="#FFFFFF"
                  d="M9.75 15.938L15.5 12 9.75 8.062v7.876z"
                /> */}
            {/* </svg> */}
            {/* </a> */}
            <a
              href="tel:+917577918465"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
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
      </section>
    </div>
  );
};

export default Contactus;
