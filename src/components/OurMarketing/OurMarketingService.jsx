import React from "react";

const OurMarketingService = () => {
  // Data for the service cards
  const marketingServices = [
    {
      id: 1,
      icon: "📢",
      title: "Social Media Marketing",
      description:
        "Grow your brand and reach your target audience through engaging content and data-driven strategies on social platforms.",
    },
    {
      id: 2,
      icon: "✍️",
      title: "Content Marketing",
      description:
        "Attract and nurture your audience through educational, informative, and persuasive content strategies.",
    },
    {
      id: 3,
      icon: "🎥",
      title: "Content Creation",
      description:
        "Create compelling visuals, reels, banners, and marketing materials that represent your brand effectively.",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Leads Generation",
      description:
        "Execute result-driven strategies to generate high-quality leads that help grow your business consistently.",
    },
    {
      id: 5,
      icon: "🎨",
      title: "Graphic Design",
      description:
        "Eye-catching graphic designs that enhance brand identity and boost the performance of your marketing efforts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased py-12">
      {/* Main Heading and Subtitle */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our Digital Marketing Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide cutting-edge digital marketing services to enable your
          brand grow in the competitive world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {marketingServices.map((service) => (
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

export default OurMarketingService;
