import React, { useState } from "react";
import Button from "./Button";
import logo from "../images/logo.svg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Q&A", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="items-center font-[Poppins] w-[15rem] ">
          <img src={logo} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-[1.3rem] font-medium md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-[#FECC92] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Contactez-nous</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
