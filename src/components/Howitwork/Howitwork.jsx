import React, { Component } from "react";
import "./howitwork.css";
import icon1 from "./icons/1.png";
import icon2 from "./icons/2.png";
import icon3 from "./icons/3.png";

const Howitwork = () => {
  let cardElement = [
    {
      icon: icon1,
      title: "Demander des services",
      text: "Choisissez la prestation, la date et l’horaire, directement depuis notre site Web ou notre application mobile.",
    },
    {
      icon: icon2,
      title: "Mise en relation",
      text: "Nous vous enverrons une confirmation dans la journée avec les coordonnées de la dame qui va venir à des prix fixes.",
    },
    {
      icon: icon3,
      title: "Profiter",
      text: "Votre technicien exécute le travail selon vos instructions. Vous pouvez la payer directement à la fin de la séance.",
    },
  ];

  return (
    <div>
      <div className="how-section w-full h-full p-[2rem] flex justify-center items-center flex-col mb-[3rem]">
        <div className="bg-section"></div>
        <div className="how-content flex items-center flex-col text-center w-full">
          <h1>Comment ça fonctionne</h1>
          <p className="md:w-[40rem] w-[18rem]">
            Nous nettoyons votre maison, bureau et tous vous espaces toutes les
            semaines, toutes les deux semaines ou toutes les trois semaines.
          </p>
          <div className="how-cards flex mt-[2rem]">
            {cardElement.map((i) => (
              <div className="card bg-white flex justify-center">
                <div className="icon">
                  <img src={i.icon} alt="" />
                </div>
                <h2 className="title text-2xl text-[#504a77]">{i.title} </h2>
                <p className="text">{i.text} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Howitwork;
