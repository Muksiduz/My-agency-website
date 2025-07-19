import React from "react";

// Reusable CaseStudyCard Component
const CaseStudyCard = ({ image, title, description, results, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x200/E0E0E0/333333?text=Image+Error";
        }}
      />
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="mb-4">
          {results.map((result, index) => (
            <p
              key={index}
              className="text-blue-600 font-medium text-sm flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {result}
            </p>
          ))}
        </div>
        <a
          href={link}
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          View Case Study
        </a>
      </div>
    </div>
  );
};

// Main App Component for the Case Studies Page
function CaseStudies() {
  const caseStudiesData = [
    {
      id: 1,
      image:
        "https://placehold.co/600x400/ADD8E6/000000?text=E-commerce+Redesign",
      title: "E-commerce Website Redesign",
      description:
        "Transformed an outdated e-commerce platform into a modern, user-friendly, and high-converting online store.",
      results: [
        "Increased conversion rate by 25%",
        "Reduced bounce rate by 15%",
        "Improved mobile responsiveness",
      ],
      link: "#",
    },
    {
      id: 2,
      image:
        "https://placehold.co/600x400/90EE90/000000?text=Lead+Generation+Campaign",
      title: "B2B Lead Generation Campaign",
      description:
        "Developed and executed a targeted digital marketing campaign to generate high-quality leads for a B2B software company.",
      results: [
        "Generated 500+ qualified leads in 3 months",
        "Achieved 10x ROI on ad spend",
        "Expanded market reach",
      ],
      link: "#",
    },
    {
      id: 3,
      image:
        "https://placehold.co/600x400/FFB6C1/000000?text=Brand+Awareness+Strategy",
      title: "Brand Awareness & Engagement",
      description:
        "Crafted a comprehensive content and social media strategy to boost brand visibility and community engagement for a startup.",
      results: [
        "Increased social media engagement by 40%",
        "Doubled website traffic from organic search",
        "Enhanced brand perception",
      ],
      link: "#",
    },
    {
      id: 4,
      image: "https://placehold.co/600x400/FFD700/000000?text=SEO+Optimization",
      title: "Local SEO Dominance",
      description:
        "Implemented advanced local SEO techniques to help a chain of local businesses rank higher in local search results.",
      results: [
        "Top 3 ranking for 80% of target keywords",
        "30% increase in local store visits",
        "Improved Google My Business ratings",
      ],
      link: "#",
    },
    {
      id: 5,
      image:
        "https://placehold.co/600x400/87CEEB/000000?text=Mobile+App+Launch",
      title: "Mobile App Launch Marketing",
      description:
        "Orchestrated a pre-launch and post-launch marketing strategy for a new mobile application, driving initial downloads and user adoption.",
      results: [
        "100,000+ downloads in first month",
        "Featured on app store homepages",
        "High user retention rate",
      ],
      link: "#",
    },
    {
      id: 6,
      image:
        "https://placehold.co/600x400/DA70D6/000000?text=Content+Marketing+Strategy",
      title: "Content Marketing for SaaS",
      description:
        "Developed a robust content marketing funnel for a SaaS company, from blog posts to whitepapers, to nurture leads.",
      results: [
        "2x increase in blog subscribers",
        "Generated 200+ content-qualified leads",
        "Established thought leadership",
      ],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen mt-50 mb-50 bg-gray-100 font-sans antialiased flex flex-col">
      {/* Hero Section for Case Studies Page */}
      <section className="bg-orange-500 text-white py-16 px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Our Success Stories
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Explore how we've helped businesses like yours achieve remarkable
          results through innovative digital strategies and dedicated
          partnership.
        </p>
      </section>

      {/* Case Studies Grid Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <CaseStudyCard
              key={study.id}
              image={study.image}
              title={study.title}
              description={study.description}
              results={study.results}
              link={study.link}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section (similar to "Build Your Business With Us!") */}
      <section className="bg-blue-900 py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between rounded-lg mx-auto max-w-7xl my-8">
        {/* Left Section - Call to Action */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 lg:mr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Build Your{" "}
            <span className="text-orange-400">Success Story</span>
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
            src="https://placehold.co/400x250/333333/FFFFFF?text=Success+Image"
            alt="Success Illustration"
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

export default CaseStudies;
