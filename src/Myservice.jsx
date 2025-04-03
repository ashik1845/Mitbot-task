import React, { useState } from "react";
import "./Myservice.css"; // Ensure CSS file exists

const MyService = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth - 0.5) * 30, // Adjust for parallax depth
      y: (clientY / window.innerHeight - 0.5) * 30,
    });
  };

  return (
    <section className="services-container" onMouseMove={handleMouseMove}>
      {/* Background Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a66a9b4aa33f43fc76ad1a65e4a46de91dde725?placeholderIfAbsent=true&apiKey=bf7362d068e944f1b86d90c093e84367"
        className="background-image"
        alt="Background pattern"
      />

      {/* Overlay Images with Parallax Effect */}
      <div className="background-overlay">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c378c77701611b2a5231bd4ee1c850feea56d4?placeholderIfAbsent=true&apiKey=bf7362d068e944f1b86d90c093e84367"
          className="overlay-image image1"
          alt="Decorative overlay 1"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotate(-10deg)`,
          }}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c378c77701611b2a5231bd4ee1c850feea56d4?placeholderIfAbsent=true&apiKey=bf7362d068e944f1b86d90c093e84367"
          className="overlay-image image2"
          alt="Decorative overlay 2"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px) rotate(10deg)`,
          }}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c378c77701611b2a5231bd4ee1c850feea56d4?placeholderIfAbsent=true&apiKey=bf7362d068e944f1b86d90c093e84367"
          className="overlay-image image3"
          alt="Decorative overlay 3"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) rotate(-80deg)`,
          }}
        />
      </div>

      {/* Services Section */}
      <div className="services-header">
        <h2 className="services-title">
          <span className="title-primary">My </span>
          <span className="title-accent">Services</span>
        </h2>
        <p className="services-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
          posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-content">
        <div className="services-cards">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="card-content">
                <img
                  src={service.background}
                  className="card-background"
                  alt="Service card background"
                />
                <div className="card-header">
                  <h3 className="card-title">{service.title}</h3>
                  <div className="card-divider"></div>
                </div>
                <img
                  src={service.image}
                  className="card-image"
                  alt={service.title}
                />
              </div>
              <div className="card-action">
                <img
                  src={service.actionIcon}
                  className="action-icon"
                  alt="Action icon"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="navigation-dots">
          {[...Array(4)].map((_, index) => (
            <div key={index} className={`dot ${index === 0 ? "active" : ""}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Data
const services = [
  {
    title: "UI/UX Design",
    background: "https://cdn.builder.io/api/v1/image/assets/TEMP/609c3a8de4273cbe4a3a1df44ac37c1a94314a29",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/201d82af761e31774d3e90999c62d581aee62dd6",
    actionIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1089d6063f5a713ac47c1dcc170686bf96f632f1",
  },
  {
    title: "Web Design",
    background: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a51c770c02afee813b3320ae5ccabaac7bc4cc4",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7324eefbf670f9029163b03a4e58c71d9a2d6db6",
    actionIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6befda27b510922196ec308f57dc90efaacee535",
  },
  {
    title: "Landing Page",
    background: "https://cdn.builder.io/api/v1/image/assets/TEMP/966a0445be8a8e94bba1dfecd4dc788994d48670",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/201d82af761e31774d3e90999c62d581aee62dd6",
    actionIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1089d6063f5a713ac47c1dcc170686bf96f632f1",
  },
];

export default MyService;
