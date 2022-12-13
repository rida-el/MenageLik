import React, { Component } from "react";
import "./contactus.css";
const ContactUs = () => {
  return (
    <div>
      <div className="contact-content">
        <div className="contact-headr flex flex-col items-center relative">
          <div className="contact-text flex flex-col items-center justify-start p-10 text-center bg-[#C4DFFD] w-[80%] min-h-[260px] rounded-2xl">
            <h1
              className="text-[3rem] text-[#504a77]"
              style={{ fontWeight: "700" }}
            >
              contactez Nous
            </h1>
            <p className="md:w-[40rem] w-[18rem]">
              Nous nettoyons votre maison, bureau et tous vous espaces toutes
              les semaines, toutes les deux semaines ou toutes les trois
              semaines.
            </p>
          </div>
          <div className="contact-form bg-white min-h-[20rem] w-[50%] rounded-xl absolute top-[12rem] shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
