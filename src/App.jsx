import ChatBot from "./components/ChatBot/ChatBot.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ChatBot />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
