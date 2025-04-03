import React from "react";
import "./portfolio.css"; // Link to your provided CSS file

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <header className="portfolio-header">
        <div className="title-container">
          <h1 className="portfolio-title">
            <span className="title-primary">Let's have a look at my</span>
            <span className="title-accent"> Portfolio</span>
          </h1>
        </div>
        <button className="see-all-button">See All</button>
      </header>

      <div className="portfolio-content">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="image-gallery">
              {/* Image Wrapper with Arrow and Hover Description */}
              <div className="portfolio-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d95601d3436e04d866ee74439032b36732a6f19a"
                  alt="Portfolio project"
                  className="portfolio-image"
                />
                <div className="image-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas
                  lobortis.
                </div>
                <button className="image-arrow-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="image-arrow-icon"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="#fd853a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="#fd853a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="portfolio-image-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d95601d3436e04d866ee74439032b36732a6f19a"
                  alt="Portfolio project"
                  className="portfolio-image"
                />
                <div className="image-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas
                  lobortis.
                </div>
                <button className="image-arrow-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="image-arrow-icon"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="#fd853a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="#fd853a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-navigation">
            <div className="nav-dot active"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
            <div className="nav-dot"></div>
          </div>
        </div>

        <div className="category-filters">
          <button className="filter-button">Landing Page</button>
          <button className="filter-button">Product Design</button>
          <button className="filter-button">Animation</button>
          <button className="filter-button">Glassmorphism</button>
          <button className="filter-button">Cards</button>
        </div>

        <div className="featured-project">
          <div className="project-header">
            <h2 className="project-title">Lirante - Food Delivery Solution</h2>
            <div className="arrow-buttonnn">
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path
                  d="M9.91663 24.1646L24.0833 9.99788"
                  stroke="#FCFCFD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.91663 9.99788L24.0833 9.99788L24.0833 24.1646"
                  stroke="#FCFCFD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
