import React from "react";

const services = [
  {
    title: "1.25 Go à 5 dinars",
    url: "https://myspace.tunisietelecom.tn/Pages/AchatForfaitAno.aspx",
  },
  {
    title: "6 Go à 15 dinars",
    url: "https://myspace.tunisietelecom.tn/Pages/AchatForfaitAno.aspx",
  },
];

const InternetPackages = () => {
  return (
    <>
      {services.map(({ title, url }) => (
        <div className="my-2 text-blue-500">
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title} ➡
          </a>
        </div>
      ))}
    </>
  );
};

export default InternetPackages;
