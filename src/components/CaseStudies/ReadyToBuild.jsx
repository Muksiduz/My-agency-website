import React from "react";
import scuess from "../../assets/scuess.jpg";

const ReadyToBuild = () => {
  return (
    <div>
      {" "}
      {/* Call to Action Section (similar to "Build Your Business With Us!") */}
      <section className="bg-blue-900 py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center md:justify-between lg:justify-between rounded-lg mx-auto max-w-7xl my-8">
        {/* Left Section - Call to Action */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 lg:mr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Build Your{" "}
            <span className="text-orange-400">Success Story</span>
            <br />
            With Us?
          </h2>
          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <a href="tel:+917577918465">Get a Free Consultation</a>
          </button>
        </div>

        {/* Right Section - Image Placeholder (optional, keeping it simple for now) */}
        <div className="hidden lg:flex justify-end  ">
          <img
            src={scuess}
            alt="Success Illustration"
            className="rounded-lg shadow-xl w-[50%] h-[50%] object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x250/333333/FFFFFF?text=Image+Load+Error";
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ReadyToBuild;
