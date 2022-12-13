import React from "react";
import Navbar from "./navbar";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import hero from "../images/hero-ullistration.svg";
import mobile from "../images/mobile-hero.svg";

import "./heroSection.css";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section w-full h-full flex items-center p-[2rem] mt-[6rem]">
        <div className="hero-content max-w-[40%] p-[1rem]">
          <h1 className="hero-title ">Prenez du temps pour vous !</h1>
          <h1 className="hero-title-sub">Ménage lik services </h1>
          <p>
            vous propose une gamme complète de services pour vous permettre de
            retrouver du temps pour vous et vos proches. Vous venez de rentrer à
            la maison, souriez et détendez-vous.
          </p>
          <button className="bg-[#504A77] text-white hover:text-black md:py-2 rounded md:px-6 mt-[1rem] hover:bg-[#C4DFFD] duration-500 ">
            Contactez-nous
          </button>
        </div>
        <div className="illustration max-w-[60%] flex">
          <img className="md:block hidden" src={hero} alt="" />
          <img className="md:hidden" src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
