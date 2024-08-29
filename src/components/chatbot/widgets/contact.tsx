const services = [
  {
    title: "Téléphone",
    url: "tel:1298",
    target: "",
  },
  {
    title: "Téléphone",
    url: "tel:71001298",
    target: "",
  },
  {
    title: "Nos espaces TT",
    url: "https://www.tunisietelecom.tn/particulier/trouver-un-espace-tt/",
    target: "_blank",
  },
];

const Contact = () => {
  return (
    <>
      {services.map(({ title, url, target }) => (
        <div className="my-2 text-blue-500">
          <a href={url} target={target} rel="noreferrer noopener">
            {title} ➡
          </a>
        </div>
      ))}
    </>
  );
};

export default Contact;
