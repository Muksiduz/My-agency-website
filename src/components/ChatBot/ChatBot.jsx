import React, { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sticky Contact Bubble */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
        {/* Expanded Options */}
        {isOpen && (
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-3 animate-fade-in-up">
            <button
              className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ease-in-out font-medium shadow-sm"
              onClick={() => alert("Navigating to Contact Us page...")} // Replace with actual navigation
            >
              Contact Us
            </button>
            <button
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out font-medium shadow-sm"
              onClick={() => alert("Calling: +123 456 7890")} // Replace with actual phone number
            >
              Phone Number
            </button>
            <button
              className="w-full text-left px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-200 ease-in-out font-medium shadow-sm"
              onClick={() => alert("Requesting a call...")} // Replace with a modal/form for call request
            >
              Request a Call
            </button>
          </div>
        )}

        {/* Main Circular Toggle Button */}
        <button
          onClick={toggleOpen}
          className="bg-orange-600 hover:bg-orange-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer focus:ring-offset-2"
          aria-label={
            isOpen ? "Close contact options" : "Open contact options"
          }>
          {isOpen ? (
            // Close Icon (e.g., an 'X')
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Chat/Contact Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Tailwind CSS custom animation for fade-in-up */}
      <style>
        {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        `}
      </style>
    </>
  );
};

export default ChatBot;
