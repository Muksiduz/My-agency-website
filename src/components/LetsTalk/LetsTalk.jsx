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
            Let's Talk
          </button>
        </div>

        {/* Right Section - Feature Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="relative bg-white text-gray-500 p-6 rounded-lg shadow-xl text-center flex flex-col items-center justify-center min-h-[200px] w-64">
            <div className="absolute -top-6 bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center">
              {/* Placeholder for icon - you can use an SVG or an icon library */}
              <span className="text-orange-600 text-2xl font-bold">✓</span>
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
              <span className="text-orange-600 text-2xl font-bold">✓</span>
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
              <span className="text-orange-600 text-2xl font-bold">✓</span>
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
