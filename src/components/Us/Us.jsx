import "./us.css";

const Us = () => {
  let datacard = [
    {
      title: "3+ ans",
      text: "De prendre soin de",
      subtext: "Clients de Menage-lik services",
    },
    {
      title: "2+ ans",
      text: "De prendre soin de",
      subtext: "Clients de Menage-lik services",
    },
    {
      title: "1+ ans",
      text: "De prendre soin de",
      subtext: "Clients de Menage-lik services",
    },
  ];
  return (
    <div className="w-full min-h-[600px] bg-[#C4DFFD] flex items-center relative mb-[5rem]">
      <div className="us-content">
        <div className="us-title">
          <h1>Qui nous sommes</h1>{" "}
        </div>
        <div className="us-text flex flex-col gap-[1rem]">
          <p>
            Nous sommes une équipe de nettoyage à domicile détenue et exploitée
            par une famille. Notre équipe est composée de frères et sœurs, de
            beaux-parents, de cousins, d'amis et d'employés de longue date.
            Ensemble, nous prenons soin des gens, partout dans la région Souss
            Massa. Rencontrez notre équipe.
          </p>
          {datacard.map((i) => (
            <div className="card-us">
              <h1> {i.title} </h1>
              <p> {i.text} </p>
              <p> {i.subtext} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="us-image md:flex hidden"></div>
    </div>
  );
};

export default Us;
