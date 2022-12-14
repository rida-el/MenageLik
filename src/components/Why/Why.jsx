import React from "react";
import icon1 from "./img/1.png";
import icon2 from "./img/2.png";
import icon3 from "./img/3.png";
import icon4 from "./img/4.png";
import icon5 from "./img/5.png";
import icon6 from "./img/6.png";

import "./why.css";

const Why = () => {
  const dataSlide = [
    {
      icon: icon1,
      title: "Vérifiés et formés",
      text: "Les femmes de ménage près de chez vous sont soigneusement sélectionnées et suivent une formation standard pour s'assurer que vous bénéficierez du meilleur niveau de qualité de service.",
    },
    {
      icon: icon2,
      title: "Souplesse",
      text: "Vous pouvez réserver à la dernière minute et reporter ou annuler votre séance en cas d'empêchement.",
    },
    {
      icon: icon3,
      title: "Technicienne préférée",
      text: "Demandez votre femme de ménage préférée pour les futures réservations",
    },
    {
      icon: icon4,
      title: "Avis après la mise en service",
      text: "Nous recueillons des avis et des commentaires après chaque visite pour nous assurer que tous les nettoyeurs sont d'un standard 5 étoiles",
    },
    {
      icon: icon5,
      title: "Simplicité",
      text: "Réservez une séance de nettoyage en 60 secondes en quelques clics sur le site internet ou l'application mobile",
    },
    {
      icon: icon6,
      title: "Contrôle de qualité",
      text: "Nos inspecteurs du contrôle de la qualité suivent nos équipes pour s'assurer que nous livrons les résultats brillants que nous promettons.",
    },
  ];
  return (
    <div className="h-full w-full">
      <div className="why-content text-center ">
        <div className="why-text flex flex-col items-center">
          <h1>Pourquoi les gens nous choisissent</h1>
          <p>
            Chez Ménage lik services, nous sommes engagés à prendre soin. Nous
            sommes une entreprise familiale qui prend bien soin de ses employés,
            afin qu'ils puissent bien prendre soin de votre maison.
          </p>
        </div>
        <div className="why-grids grid">
          {dataSlide.map((i) => (
            <div class="grid-item flex flex-col items-center gap-[8px]">
              <div className="icon">
                <img src={i.icon} alt="" />
              </div>
              <div className="item-title">{i.title} </div>
              <div className="item-text">{i.text} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Why;
