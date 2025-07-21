import React from "react";
import website from "../assets/Website.png";
import ecommerce from "../assets/ecommerce.png";
import social from "../assets/social.png";
import digital from "../assets/digital.png";
import content from "../assets/contentcreation.png";

import { motion } from "framer-motion";

// Reusable ServiceCard Component
const ServiceCard = ({ image, title, description, price, link }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col p-6">
      <img src={image} className="w-full h-68 object-cover" alt="" />
      <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      <div className="mt-auto pt-4 ">
        {/* <p className="text-lg font-semibold text-blue-600 mb-4">{price}</p> */}
        <a
          href={link}
          className="inline-block bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-500 hover:to-orange-900 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <a href="tel:+917577918465"> Let's Talk</a>
        </a>
      </div>
    </motion.div>
  );
};

// Main App Component for the Service Page
function ServicePage() {
  const servicesData = [
    {
      id: 1,
      title: "Website Development",
      image: website,
      description:
        "Clean, modern, and mobile-friendly websites designed to represent your brand and convert visitors into customers.",
      price: "Starting at : ₹ 3,000/- per month",
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce Development",
      image: ecommerce,
      description:
        "Easy-to-manage online stores with secure payments, inventory management, and order tracking.",
      price: "Starting at : ₹ 5,000/- per month",
      link: "#",
    },
    {
      id: 3,
      title: "Digital Marketing",
      image: digital,
      description:
        "Social media marketing, paid ads, SEO, and lead generation to help you reach more people and grow faster.",
      price: "Starting at : ₹ 5,000/- per month",
      link: "#",
    },
    {
      id: 4,
      title: "Content Creation",
      image: content,
      description:
        "Graphics, Pamplates, posts, reels, and videos that attract attention, build trust, and keep your audience engaged.",
      price: "Starting at : ₹ 5,000/- per month",
      link: "#",
    },

    {
      id: 5,
      title: "Social Media Marketing",
      image: social,
      description:
        "Graphics, Pamplates, posts, reels, and videos that attract attention, build trust, and keep your audience engaged.",
      price: "Starting at : ₹ 5,000/- per month",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
      {/* Hero Section for Services Page */}
      <section className="bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-500 hover:to-orange-900 text-white py-16 px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Our Comprehensive Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Discover our range of digital solutions designed to elevate your brand
          and drive measurable results.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
              link={service.link}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section (similar to "Build Your Business With Us!") */}
      <section className="bg-blue-900 mb-20 py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between rounded-lg mx-auto max-w-7xl my-8">
        {/* Left Section - Call to Action */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 lg:mr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Transform Your{" "}
            <span className="text-orange-400">Online Presence</span>
            <br />
            With Us?
          </h2>
          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get a Free Consultation
          </button>
        </div>

        {/* Right Section - Image Placeholder (optional, keeping it simple for now) */}
        <div className="hidden lg:block">
          <img
            src="https://placehold.co/400x250/333333/FFFFFF?text=Service+Success"
            alt="Service Success Illustration"
            className="rounded-lg shadow-xl"
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
}

export default ServicePage;
