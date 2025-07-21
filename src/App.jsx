import ChatBot from "./components/ChatBot/ChatBot.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";

import { Routes, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage.jsx";

import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}>
        <Navbar />
      </motion.div>

      <ChatBot />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
