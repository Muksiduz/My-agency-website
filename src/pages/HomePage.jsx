import React from "react";
import Hero from "../components/Hero/Hero";
import LetsTalk from "../components/LetsTalk/LetsTalk";
import Services from "../components/Service/Services";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Contactus from "../components/Contactus/Contactus";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LetsTalk />
      <Services />
      <ChooseUs />
      <Testimonials />
      <Contactus />
    </>
  );
};

export default HomePage;
