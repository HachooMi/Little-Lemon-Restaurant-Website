import React from 'react';
import BookingForm from './bookingForm';
import App from './App.js'

function Hero(props) {
  return (
    <div className="hero-class-section">
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-columns">
            <div className="hero-text-column">
              <div className="hero-text-content">
                <h1 className="restaurant-name">Little Lemon</h1>
                <h2 className="restaurant-location">Toronto</h2>
                <p className="restaurant-description">
                  We are a family owned Mediterranean restaurant focused on
                  traditional recipes served with a modern twist
                </p>
                <button className="reserve-table-button">Reserve a Table</button>
              </div>
            </div>
            <div className="hero-image-column">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bf7ff2eaa9418beffded571f3e1c5f353dc35533a924e3810b5330a1aa848a8?apiKey=5a37ad01f46049e59cf840da1c96c3b6&"
                className="hero-image"
                alt="Little Lemon restaurant food"
              />
            </div>
          </div>
        </div>
      </main>


      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Markazi+Text:wght@400..700&display=swap');
        .hero-class-section {
          width: 100%;
          margin-top: 7vh;
        }

        .hero-section {
          background-color: #495e57;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 60px;
          width: 100vw; /* Use viewport width */
          margin-left: calc((100% - 100vw) / 2); /* Center the content */
          margin-right: calc((100% - 100vw) / 2); /* Center the content */
        }

        @media (max-width: 991px) {
          .hero-section {
            padding: 0 20px;
          }
        }

        .hero-content {
          z-index: 10;
          width: 960px;
          max-width: 100%;
        }

        .hero-columns {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .hero-columns {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .hero-text-column {
          flex: 1;
        }

        @media (max-width: 991px) {
          .hero-text-column {
            width: 100%;
          }
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          color: #edefee;
          font-weight: 700;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .hero-text-content {
            margin-top: 40px;
          }
        }

        .restaurant-name {
          color: #f4ce14;
          font-family: 'Markazi Text', serif;
          font-weight: bold;
          margin: 0;
          margin-top: 80px;
          font-size: 64px;
        }

        @media (max-width: 991px) {
          .restaurant-name {
            font-size: 50px;
          }
        }

        .restaurant-location {
          margin: 38px 0 0;
          font: 30px Karla, sans-serif;
          font-weight: bold;
        }

        .restaurant-description {
          margin: 49px 0 0;
          font: 22px Karla, sans-serif;
          font-weight: bold;
        }

        @media (max-width: 991px) {
          .restaurant-description {
            margin-top: 40px;
            font-size: 15px;
            margin-right: 150px;
          }
        }

        .reserve-table-button {
          border-radius: 8px;
          background-color: rgba(244, 206, 20, 1);
          margin-top: 34px;
          color: #000;
          justify-content: center;
          padding: 18px 36px; /* Adjusted padding */
          font: 22px Karla, sans-serif;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }
        
        @media (max-width: 991px) {
          .reserve-table-button {
            margin-left: 0vw;
            padding: 15px 20px; /* Adjusted padding for smaller devices */
            width: 55vw;
            
            
          }
        }        

        .hero-image-column {
          flex: 1;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .hero-image-column {
            width: 100%;
            margin-left: -5vw;
          }
        }

        .hero-image {
          aspect-ratio: 0.9;
          object-fit: cover;
          width: 100%;
        }

        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
