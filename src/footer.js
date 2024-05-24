import * as React from "react";

const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h3 className="column-title">{title}</h3>
    {links.map((link, index) => (
      <a key={index} href={link.url} className="column-link">
        {link.text}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const navigationLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Menu", url: "/menu" },
    { text: "Reservations", url: "/reservations" },
    { text: "Order Online", url: "/order-online" },
    { text: "Login", url: "/login" },
  ];

  const contactLinks = [
    { text: "Address", url: "/address" },
    { text: "Phone Number", url: "/phone" },
    { text: "Email", url: "/email" },
  ];

  const socialMediaLinks = [
    { text: "Instagram", url: "/instagram" },
    { text: "Facebook", url: "/facebook" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo-column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e6c1d1f79cc43dbbc6f758ba372a83cb43e680e941692093ed7b80302fa8fd?apiKey=5a37ad01f46049e59cf840da1c96c3b6&"
              alt="Company Logo"
              className="logo-img"
            />
          </div>
          <FooterColumn title="Doormat Navigation" links={navigationLinks} />
          <FooterColumn title="Contact" links={contactLinks} />
          <FooterColumn title="Social Media Links" links={socialMediaLinks} />
        </div>
      </footer>
      <style jsx>{`
        .footer {
          max-width: 959px;
          padding: 0 20px;
          margin-left: 10vw;
          margin-top: 70px;
          margin-bottom: 100px;
        }

        .footer-content {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .footer-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .logo-column {
          width: 25%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .logo-column {
            width: 100%;
          }
        }

        .logo-img {
          width: 103px;
          margin-top: 6px;
          max-width: 100%;
          aspect-ratio: 0.71;
          object-fit: auto;
          object-position: center;
        }

        @media (max-width: 991px) {
          .logo-img {
            margin-top: 40px;
          }
        }

        .footer-column {
          width: 25%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .footer-column {
            width: 100%;
            margin-top: 40px;
          }
        }

        .column-title {
          color: #008a8a;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-weight: 600;
          margin: 0;
        }

        .column-link {
          display: block;
          font-family: Inter, sans-serif;
          text-decoration: underline;
          margin-top: 10px;
          font-size: 20px;
          color: #000;
          font-weight: 600;

          @media (max-width: 991px) {
            .footer {
              margin-bottom: 30vh;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Footer;