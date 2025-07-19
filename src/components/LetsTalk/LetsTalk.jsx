import React from "react";

const LetsTalk = () => {
  return (
    <div className=" bg-white font-sans antialiased ">
      {/* Main Section */}
      <section className="bg-blue-900  h-content md:h-100 py-16 px-4 md:px-8 lg:px-30 flex flex-col lg:flex-row items-center justify-center lg:justify-between  mx-auto  my-8">
        {/* Left Section - Call to Action */}
        <div className="text-center  lg:text-left mb-12 lg:mb-0 lg:mr-8">
          <h2 className="text-4xl md:text-5xl font-extrabold  text-white leading-tight ">
            Build Your <span className="text-blue-400">Business</span>
            <br />
            <span> Online </span>
            With Us!
          </h2>
          <button className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 cursor-pointer text-white font-bold text-xl py-4 px-24 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <a href="tel:+917577918465"> Let's Talk</a>
          </button>
        </div>

        {/* Right Section - Feature Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="relative bg-white text-gray-500 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center min-h-[200px] w-64">
            <div className="absolute -top-6 bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center">
              {/* Placeholder for icon - you can use an SVG or an icon library */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -3 34 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 text-orange-500">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
                <path d="M21 11.5a1.5 1.5 0 0 0-1.5-1.5H16a1.5 1.5 0 0 0-1.5 1.5V14a1.5 1.5 0 0 0 1.5 1.5h3.5a1.5 1.5 0 0 0 1.5-1.5z"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl text-orange-500 font-bold">
              24/7 Dedicated Support
            </h3>
            <p className="mt-2 text-sm">
              Your business doesn’t stop — neither do we. Get fast, reliable
              support whenever you need help.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="relative bg-white text-gray-500 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center min-h-[200px] w-64">
            <div className="absolute -top-6 bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center">
              {/* Placeholder for icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -3 34 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 text-orange-500">
                {/* Growth/Faster (Graph/Chart) */}
                <path d="M3 18v-6l5-5 4 4 8-8"></path>
                <polyline points="15 8 20 8 20 13"></polyline>

                {/* Meaningful Content (Document/Text) */}
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="8" y1="13" x2="16" y2="13"></line>
                <line x1="8" y1="17" x2="16" y2="17"></line>
                <line x1="8" y1="9" x2="10" y2="9"></line>
              </svg>
            </div>
            <h3 className="mt-6 text-xl text-orange-500 font-bold">
              {" "}
              Grow Faster with Meaningful Content
            </h3>
            <p className="mt-2 text-sm">
              Let’s make sure every post, every ad, and every click moves your
              business forward..
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="relative bg-white text-gray-500 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center min-h-[200px] w-64">
            <div className="absolute -top-6 bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center">
              {/* Placeholder for icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 30 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 text-orange-500">
                {/* Conversion / Growth (Upward trend graph) */}
                <polyline points="22 12 18 18 12 12 6 18 2 12"></polyline>
                <path d="M17 6h5v5"></path>

                {/* Customers (Group of people) */}
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className="mt-6 text-xl text-orange-500 font-bold">
              High Conversion of Customers
            </h3>
            <p className="mt-2 text-sm">
              Websites, Funnels & Ads, Optimized for your Business
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetsTalk;
