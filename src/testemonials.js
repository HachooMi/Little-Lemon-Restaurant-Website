import * as React from "react";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonials-container {
          margin-top: 30px;
          display: flex;
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          margin-bottom: 10vh;
        }

        @media (max-width: 991px) {
          .testimonials-container {
            margin-top: 35vh;
            margin-bottom: 20vh;
          }
        }
        .testimonials-content {
          max-width: 952px;
          width: 100%;
          padding: 0 20px;
        }
        .testimonials-title {
          margin-top: 60px;
          color: #000;
          text-align: center;
          font: 600 50px Markazi Text, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .testimonials-title {
            font-size: 40px;
          }
        }
        .testimonials-grid {
          margin-top: 55px;
          width: 100%;
          gap: 20px;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .testimonials-grid {
            max-width: 100%;
            margin-top: 40px;
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <div className="avatar-container">
          <img
            loading="lazy"
            src={testimonial.image}
            alt={`${testimonial.name}'s avatar`}
            className="testimonial-avatar"
          />
        </div>
        <blockquote className="testimonial-quote">
          {testimonial.quote}
        </blockquote>
      </div>
      <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
      <style jsx>{`
        .testimonial-card {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          height: 250px; 
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .testimonial-card {
            width: 100%;
          }
        }
        .testimonial-content {
          background-color: #d9d9d9;
          display: flex;
          flex-direction: column;
          align-items: center; 
          justify-content: center; 
          color: #000;
          margin: 0 auto;
          padding: 16px;
          text-align: center; 
          height: 100%; 
        }
        @media (max-width: 900px) {
          .testimonial-content {
            margin-left: 5vw;
          }
          }
        }
        .avatar-container {
          flex: 1; 
          display: flex;
          align-items: center;
        }
        .testimonial-avatar {
          aspect-ratio: 1.15;
          object-fit: cover;
          object-position: center;
          width: 82px;
          border-radius: 50%;
        }
        .testimonial-name {
          font-size: 24px; 
          font-weight: 600;
          font-family: Markazi Text, -apple-system, Roboto, Helvetica, sans-serif;
          margin-bottom: 10px; 
        }
        .testimonial-quote {
          font-size: 16px; 
          font-style: italic; 
          margin: 0; 
        }
        .testimonial-rating {
          margin-top: 18px;
          font: 600 20px Inter, sans-serif;
          text-align: center; 
        }
        @media (max-width: 900px) {
          .testimonial-rating{
            margin-left: -30vw;
          }
        }
      `}</style>
    </div>
  );
}

export const testimonialData = [
  {
    name: "Richard",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d9adc8c83c66ad9a63c4a0245b2e0d2e17c4ce15fb03586b9652e92d0634f73?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
    quote: '"Absolutely Divine!"',
  },
  {
    name: "Michelle",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a536ab214e11ecb7ca73d5afb482434443d377b31b401428a22fe7a94c48377?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
    quote: '"A True Taste of The Mediterranean!"',
  },
  {
    name: "Brad",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00cc1fe9d5f1d165970e21ba62bed3381a077ec78d16248c0c9eb0533971681f?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
    quote: '"Perfection on a Plate!"',
  },
  {
    name: "Sally",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/90fc543d7d0b429a8a4d997c389d2ae63adf63f056891972d4c5441045f16d5b?apiKey=5a37ad01f46049e59cf840da1c96c3b6&",
    quote: '"Pure Bliss in a Bowl!"',
  },
];

export default Testimonials;
