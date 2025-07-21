import iifmPhoto from "../../assets/iifmpage.png";
import myagency from "../../assets/myagency.png";
import chaiui from "../../assets/chaiui.png";

import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          We Help <span className="text-blue-600">Small Businesses</span> Get
          More
          <span className="text-blue-600"> Leads More Sales,</span> and a{" "}
          <span className="text-orange-600">Strong Online Presence</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-6 font-regular text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Get expert websites, digital marketing, and creative content designed
          to bring you leads and customers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}>
          <motion.button
            animate={{
              y: [0, -10, 0], // Moves up by 10px then back
            }}
            transition={{
              duration: 1.5, // How long one full cycle takes
              repeat: Infinity, // Repeat forever
              ease: "easeInOut", // Smooth easing
            }}
            className="mt-10 bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-500 hover:to-orange-900  text-white cursor-pointer font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105">
            {" "}
            <a href="tel:+917577918465">Get a Free Consultation</a>
          </motion.button>
        </motion.div>

        {/* Website Screenshots Section */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
          className="mt-16 relative flex justify-center items-center">
          {/* Main screenshot - using a placeholder */}
          <img
            src={iifmPhoto}
            alt="Main Website Screenshot"
            className="w-full max-w-3xl rounded-lg shadow-xl transform  scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x500/E0E0E0/333333?text=Image+Load+Error";
            }}
          />
          {/* Example of additional screenshots (can be layered or in a grid) */}
          <img
            src={myagency}
            alt="Website Screenshot 1"
            className="absolute top-10 left-0 md:left-20 w-60 h-auto rounded-md shadow-lg -rotate-6 hidden md:block"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/200x150/D0D0D0/555555?text=Error";
            }}
            style={{ transform: "rotate(-6deg) translateX(-50%)", left: "20%" }}
          />
          <img
            src={chaiui}
            alt="Website Screenshot 2"
            className="absolute bottom-10 right-0 md:right-20 w-60 h-auto rounded-md shadow-lg rotate-6 hidden md:block"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/200x150/C0C0C0/666666?text=Error";
            }}
            style={{ transform: "rotate(6deg) translateX(50%)", right: "20%" }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
