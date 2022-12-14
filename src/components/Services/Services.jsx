import img10 from "./img/10.jpg";
import img6 from "./img/6.jpg";
import img5 from "./img/5.jpg";
import img4 from "./img/4.jpg";
import img2 from "./img/2.jpg";
import img8 from "./img/8.jpg";
import img3 from "./img/3.jpg";

import img7 from "./img/7.jpg";
// import img4 from "./img/4.jpg";

import "./services.css";
const Services = () => {
  const servicedata = [
    {
      title: "HEALTHCARE ENVIRONMENTAL SERVICES",
      image: img10,
    },
    {
      title: "OFFICE BUILDING CLEANING",
      image: img6,
    },
    {
      title: "INDUSTRIAL CLEANING",
      image: img5,
    },
    {
      title: "HOSPITALITY CLEANING",
      image: img4,
    },
    {
      title: "EDUCATION CLEANING",
      image: img2,
    },
    {
      title: "RELIGIOUS BUILDING CLEANING",
      image: img8,
    },
    {
      title: "EVENT CENTER CLEANING",
      image: img3,
    },
    {
      title: "RECREATION AND SHOPPING CLEANING",
      image: img7,
    },
  ];
  return (
    <div className="w-full h-full text-center">
      <div className="services-text flex flex-col items-center">
        <h1>Services De Nettoyage</h1>
        <p className="max-w-[60rem] p-[3px]">
          Tout bâtiment. Toute industrie. À toute heure. Un environnement propre
          et sain est essentiel pour toutes les entreprises et installations,
          quel que soit le secteur. Maintenant plus que jamais, des méthodes de
          désinfection détaillées doivent être en place pour protéger les
          clients et les employés de votre établissement. Les professionnels de
          Menage-lik services ont l'expérience et les compétences requises pour
          obtenir des résultats irréprochables. Nous sommes soutenus par plus de
          3 ans d'expérience et utilisons des produits et des processus de
          nettoyage avancés qui aideront à éliminer la saleté, la poussière, les
          germes et les bactéries de votre environnement.
        </p>
      </div>
      <div className="services-cards grid">
        {servicedata.map((i) => (
          <div className="card-item">
            <img src={i.image} alt="" />
            <h3>{i.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
