import * as React from "react";
import { useState } from "react";
const menuItems = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/006703d9f6a04b30520c3cddc91103993412481b45e5cd47e50b4192be98f1a9?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic seasoning with salt and olive oil.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/85cf2486c0b0329eadd4f45b2e5067a7b066174f605cf8b836ba21297d8aa695?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as imagined.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3599e9c6338b95e9d64d745878ac69b64de3a9568a42312dd159b5b2a74da44?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
  },
];

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.imageSrc} alt={item.name} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item.name}</h3>
          <div className="menu-item-price">{item.price}</div>
        </div>
        <p className="menu-item-description">{item.description}</p>
        <div className="order-delivery">Order Delivery 🛵</div>
      </div>
    </div>
  );
}

function Specials() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="specials-heading">This Weeks Specials!</h1>
        <button className="online-menu-button">Online Menu</button>
      </header>
      <main>
        <section className="specials-menu">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </section>
      </main>

      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Markazi+Text:wght@400..700&display=swap');
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 40px;
          padding: 20px;
          margin-bottom: -200px

        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 960px; 
          margin-bottom: 20px;
        }

        .specials-heading {
          font-size: 35px;
          margin-left: -3.5vw;
          font-family: 'Markazi Text', serif;
        }

        .online-menu-button {
          margin-right: 50px;
          font-family: 'Karla', serif;
          font-weight: bold;
          padding: 10px 20px;
          font-size: 20px;
          background-color: rgba(244, 206, 20, 1);
          border: none;
          border-radius: 8px;
          color: #000;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .online-menu-button {
            margin-right: 30vw;
          }
        }

        .specials-menu {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .menu-item {
          background-color: #edefee;
          padding: 20px;
          width: calc(33.33% - 20px); 
          max-width: 300px; 
          border-radius: 8px;
        }

        .menu-item-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .menu-item-content {
          text-align: center;
        }

        .menu-item-name {
          font-family: 'Markazi Text', serif; 
          font-size: 30px;
          margin: 0;
        }

        .menu-item-price {
          font-family: 'Karla', serif;
          font-weight: bold;
          color: #ffa755;
          font-size: 18px;
          margin-top: 5px;
        }

        .menu-item-description {
          font-family: 'Karla', serif;
          font-size: 18px;
          color: #000;
          margin-top: 10px;
        }

        .order-delivery {
          font-size: 18px;
          margin-top: 20px;
        }
        @media (max-width: 900px) {
          .specials-heading{
            font-size: 30px;
          }
        }

        @media (max-width: 991px) {
          .specials-menu {
            padding: 0 20px;
            margin-right: 25vw;
          }
          .menu-item {
            width: calc(50% - 20px); 
            max-width: none; 
          }
        }

        @media (max-width: 600px) {
          .menu-item {
            width: 100%; 
          }
        }
      `}</style>
    </div>
  );
}

export default Specials;
