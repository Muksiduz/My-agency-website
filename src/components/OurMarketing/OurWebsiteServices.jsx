import React from "react";

const OurWebsiteServices = () => {
  // Data for the service cards
  const websiteServices = [
    {
      id: 1,
      icon: "💻",
      title: "Website Development",
      description:
        "We build modern, fast, and responsive websites that convert visitors into leads and customers.",
    },
    {
      id: 2,
      icon: "🛒",
      title: "E-Commerce Development",
      description:
        "Create reliable, secure, and scalable e-commerce platforms to drive online sales and manage your products with ease.",
    },
    {
      id: 3,
      icon: "🗂️",
      title: "Content Management",
      description:
        "Effortlessly manage and update your content across platforms through structured and scalable CMS solutions.",
    },
    {
      id: 4,
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Improve your website’s visibility on search engines through proven SEO strategies for long-term growth.",
    },
    {
      id: 5,
      icon: "☁️",
      title: "Hosting Solutions",
      description:
        "Reliable, fast, and secure hosting for your websites and applications with 99.9% uptime guarantee.",
    },
    {
      id: 6,
      icon: "🔧",
      title: "Website Maintenance",
      description:
        "Regular updates, backups, and performance checks to keep your website running smoothly and securely.",
    },
    {
      id: 7,
      icon: "🔒",
      title: "Website Security",
      description:
        "Protect your website from threats with advanced security protocols, SSL, and monitoring tools.",
    },
    {
      id: 8,
      icon: "📤",
      title: "Domain & Email Setup",
      description:
        "Professional domain and business email setup to enhance your brand credibility.",
    },
    {
      id: 9,
      icon: "⚡",
      title: "Speed Optimization",
      description:
        "Optimize your website for faster loading speeds to improve SEO and enhance user experience.",
    },
    {
      id: 10,
      icon: "🛎️",
      title: "Technical Support",
      description:
        "Dedicated technical support to solve any website issues promptly and keep things running smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased py-12">
      {/* Main Heading and Subtitle */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our Website Development Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge digital marketing services to enable your
          brand grow in the competitive world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {websiteServices.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600 hover:text-white transition-shadow duration-300 ease-in-out flex flex-col items-start text-left group">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWebsiteServices;
