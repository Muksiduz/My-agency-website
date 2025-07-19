import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* This is a placeholder for any previous components like a Navbar or Hero Section */}
      {/* You can remove or replace this div with your actual page structure */}
      <div className="p-4 text-center text-gray-700">
        {/* Placeholder for other page content */}
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We Provide The Best{" "}
            <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Let us unleash the full potential of your business with our
            data-driven strategies
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 3: Website Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 shadow-md">
              {/* Placeholder for icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Website Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Clean, modern, and mobile-friendly websites designed to represent
              your brand and convert visitors into customers.
            </p>
            <p className="text-green-900 font-bold text-sm mb-4">
              Starting at : ₹ 3,000/- per month
            </p>
            <a
              href="tel:+917577918465"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
              Let's Talk
            </a>
          </div>
          {/* Service Card 1: SEO/Sem */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-md">
              {/* Placeholder for icon - replace with actual SVG or Lucide React icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              E-commerce Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Easy-to-manage online stores with secure payments, inventory
              management, and order tracking.
            </p>
            <p className="text-green-900 font-bold text-sm mb-4">
              Starting at : ₹ 5,000/- per month
            </p>
            <a
              href="tel:+917577918465"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
              Let's Talk
            </a>
          </div>

          {/* Service Card 2: Marketing */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-md">
              {/* Placeholder for icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {" "}
              Digital Marketing
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Social media marketing, paid ads, SEO, and lead generation to help
              you reach more people and grow faster.
            </p>
            <p className="text-green-900 font-bold text-sm mb-4">
              Starting at : ₹ 5,000/- per month
            </p>
            <a
              href="tel:+917577918465"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
              Let's Talk
            </a>
          </div>

          {/* Service Card 4: Others */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 shadow-md">
              {/* Placeholder for icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l4 4m-4-4l-4 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Content Creation
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Graphics,Pamplates, posts, reels, and videos that attract
              attention, build trust, and keep your audience engaged.
            </p>
            <p className="text-green-900 text-sm font-bold mb-4">
              Starting at : ₹ 5,000/- per month
            </p>
            <a
              href="tel:+917577918465"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
