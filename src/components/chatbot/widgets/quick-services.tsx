
const services = [
  {
    title: "Achat internet",
    url: "https://myspace.tunisietelecom.tn/Pages/AchatForfaitAno.aspx",
  },
  {
    title: "Recharge TTCash",
    url: "https://myspace.tunisietelecom.tn/Pages/Achat-TTCash.aspx",
  },
  {
    title: "Ehdia Net",
    url: "https://myspace.tunisietelecom.tn/Pages/D_EhdiaNet.aspx",
  },
  {
    title: "Internet Sabba",
    url: "https://myspace.tunisietelecom.tn/Pages/internet-sabba.aspx",
  },
  {
    title: "Paiement Facetures",
    url: "https://myspace.tunisietelecom.tn/Pages/Paiement-Facture0.aspx",
  },
];

const QuickServices = () => {
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

export default QuickServices;
