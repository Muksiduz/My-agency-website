import React from "react";
import founder from "../../assets/founder.jpeg";

const AboutFounder = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased flex items-center justify-center py-12">
      {/* About the Founder Section */}
      <section className="bg-white rounded-lg shadow-xl overflow-hidden max-w-7xl mx-auto p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Founder Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
          <img
            src={founder}
            alt="Founder Name"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-blue-400"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x300/CCCCCC/666666?text=Image+Load+Error";
            }}
          />
        </div>

        {/* Founder Information */}
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            About The <span className="text-orange-600">Founder</span>
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Muksiduz Zaman
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At the heart of Saabr Digital is a simple goal: to help small
            businesses grow online with creativity, consistency, and results. I
            started this journey with a passion for website development, digital
            marketing, and content creation, driven by the belief that every
            business — no matter how small — deserves a digital presence that
            works. My experience comes not from big agencies but from hands-on
            work, solving real problems for real businesses. With a background
            in web development, content creation, and marketing strategies, I
            understand the unique challenges that small and local businesses
            face. I’ve built Saabr Digital as a platform where companies can get
            reliable, affordable, and effective digital solutions without any
            unnecessary complexity or jargon. At Saabr Digital, it’s not just
            about delivering a service. It’s about helping clients generate
            leads, create impact, and build trust with their audience.
          </p>

          <p className="text-gray-700 leading-relaxed italic border-l-4 border-orange-500 pl-4 py-2">
            "Our mission is to empower businesses with the digital tools and
            strategies they need to not just compete, but to dominate their
            market."
          </p>
          {/* Optional: Social links for the founder */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              aria-label="Founder LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              aria-label="Founder Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.99-3.56-.18-6.73-1.89-8.85-4.48-.37.63-.58 1.37-.58 2.16 0 1.49.75 2.81 1.91 3.56-.7-.02-1.36-.22-1.93-.53v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.96 4.03 2.99-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.69-.02-1.03-.06C4.6 20.39 6.88 21 9.25 21c10.5 0 16.24-8.72 16.24-16.25 0-.25-.01-.5-.02-.75.84-.6 1.56-1.36 2.14-2.22z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounder;
