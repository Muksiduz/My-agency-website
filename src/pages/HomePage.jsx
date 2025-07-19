import React from "react";
import Hero from "../components/Hero/Hero";
import LetsTalk from "../components/LetsTalk/LetsTalk";
import Services from "../components/Service/Services";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Contactus from "../components/Contactus/Contactus";
import OurMarketingService from "../components/OurMarketing/OurMarketingService";
import OurWebsiteServices from "../components/OurMarketing/OurWebsiteServices";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import AboutFounder from "../components/AboutTheFounder/AboutFounder";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LetsTalk />
      <Services />
      <OurMarketingService />
      <OurWebsiteServices />
      <ChooseUs />
      <CaseStudies />
      <AboutFounder />
      <Contactus />
      <Testimonials />
    </>
  );
};

export default HomePage;
