import whyus from "../../assets/whyus.jpg";

const ChooseUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* This is a placeholder for any previous components */}
      <div className="p-4 text-center text-gray-700">
        {/* Placeholder for other page content */}
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-blue-900 py-16 px-4 md:px-8 lg:px-30 flex flex-col lg:flex-row items-center justify-center lg:justify-between rounded-lg mx-auto  my-8">
        {/* Left Section - Text and Image */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 lg:mr-12 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Why choose us ?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            At Saabr Digital, we don’t just build websites or manage social
            media — we help businesses grow, communicate, and succeed online.
            Here’s why small businesses and institutes trust us:
          </p>
          {/* Placeholder Image */}
          <img
            src={whyus}
            alt="Team Meeting"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/333333/FFFFFF?text=Image+Load+Error";
            }}
          />
        </div>

        {/* Right Section - Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-2xl">
          {/* Feature Card 1: Real-Time Insights */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 12l3-3m0 0l3 3m-3-3v8m0-9a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Personalized Solutions
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Tailored strategies, websites, and content built specifically for
              your business goals — not templates.
            </p>
          </div>

          {/* Feature Card 2: Flexible Plans */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H10a2 2 0 01-2-2v-2m0-8l4 4m-4 0l-4-4"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">Flexible Plans</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Choose what suits your business today, scale it as you grow.
            </p>
          </div>
          {/* Feature Card 4: Results Focused Approach */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Results-Focused Approach
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Our work drives real outcomes: more leads, more visibility, more
              growth.
            </p>
          </div>
          {/* Feature Card 4: Dedicated Support */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Transparent Process
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              No surprises, no hidden fees — you stay informed at every step
              with full clarity.
            </p>
          </div>

          {/* Feature Card 4: Dedicated Support */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Dedicated Support
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              You’re never left guessing — we’re here to support you through
              every step of your journey.y
            </p>
          </div>

          {/* Feature Card 3: Secure Transactions */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-3">
              {/* Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zM7 7V5a2 2 0 012-2h6a2 2 0 012 2v2m0 0H9m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2"
                />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Secure & Reliable
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              From websites to transactions, your business stays safe with
              modern security standards.n
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
