import { useState } from "react";
import iifmLogo from "../../assets/iifmlogo.png";

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Working with Saabr Digital was smooth and efficient. They delivered a clean, professional website that matched exactly what our business needed. Communication was clear, and the final result exceeded expectations.",
      author: "IIFM, Guwahati, Assam",
      title: "IIFM, Guwahati, Assam",
      image: iifmLogo, // Placeholder image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 font-sans antialiased flex items-center justify-center py-12">
      {/* Testimonial Carousel Section */}
      <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:px-16  mx-auto rounded-lg shadow-xl overflow-hidden">
        {/* Background elements (simplified from image) */}
        <div className="absolute inset-0 opacity-10 z-0">
          {/* You can add more complex SVG patterns here if desired */}
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" fill="#E0E7FF" />
            <rect
              x="800"
              y="50"
              width="100"
              height="100"
              rx="20"
              fill="#E0E7FF"
            />
            <path d="M50 500L150 450L250 500L150 550L50 500Z" fill="#E0E7FF" />
            <path
              d="M700 400C750 350 850 350 900 400C950 450 850 550 800 500C750 450 650 450 700 400Z"
              fill="#E0E7FF"
            />
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            What Our <span className="text-blue-600">Clients</span> Say About
            Us!
          </h2>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center justify-center min-h-[200px] px-4">
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />
            <p className="text-xl font-semibold text-blue-600">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-gray-500 text-md">
              {testimonials[currentIndex].title}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                } transition-colors duration-300 focus:outline-none`}
                aria-label={`Go to slide ${index + 1}`}></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
