import React from "react";
import Contactus from "../components/Contactus/Contactus";

const ContactPage = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-white font-sans antialiased flex items-center justify-center py-12">
        <Contactus color="bg-blue-100" text="text-white" />
      </div>
    </>
  );
};

export default ContactPage;
