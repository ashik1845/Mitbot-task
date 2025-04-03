import React from "react";
import "./Hire.css";

const Hire = () => {
  return (
    <section className="hire-section">
      <article className="content-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b3e9455af5554808866ea9ff197430ec4c4d114?placeholderIfAbsent=true&apiKey=bf7362d068e944f1b86d90c093e84367"
          alt="Professional portrait"
          className="profile-image"
        />
        <div className="text-content">
          <h2 className="section-heading">
            Why <span className="highlight">Hire me</span>?
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales.
          </p>
          <div className="stats-container">
            <div className="stat-block">
              <h3 className="stat-number">450+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-block">
              <h3 className="stat-number">450+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
          </div>
          <a href="#" className="hire-buttonn">Hire me</a>
        </div>
      </article>
    </section>
  );
};

export default Hire;
