import React from 'react';
import './experience.css'; // Make sure the CSS file is correctly linked

const Experience = () => {
  return (
    <section className="work-experience-container">
      <header className="experiencee-header">
        <center>
        <h1 className="experience-title">
          <span className="title-primary">My </span>
          <span className="title-accent">Work Experience</span>
        </h1>
        </center>
      </header>

      <div className="experience-content">
        <div className="companies-column">
          <article className="company-item">
            <h2 className="company-name">Cognizant, Mumbai</h2>
            <time className="company-period">Sep 2016- July 2020</time>
          </article>

          <article className="company-item">
            <h2 className="company-name">Sugee Pvt Limited, Mumbai</h2>
            <time className="company-period">Sep 2020- July 2023</time>
          </article>

          <article className="company-item">
            <h2 className="company-name">Cinetstox, Mumbai</h2>
            <time className="company-period">Sep 2023</time>
          </article>
        </div>

        <div className="timeline-columnn">
          <div className="timeline-line"></div>
          <div className="timeline-markers">
            <div className="timeline-marker">
              <div className="marker-dot marker-orange"></div>
            </div>
            <div className="timeline-marker">
              <div className="marker-dot marker-dark"></div>
            </div>
            <div className="timeline-marker">
              <div className="marker-dot marker-orange"></div>
            </div>
          </div>
        </div>

        <div className="roles-column">
          <article className="role-item">
            <h3 className="role-title">Experience Designer</h3>
            <p className="role-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
            </p>
          </article>

          <article className="role-item">
            <h3 className="role-title">UI/UX Designer</h3>
            <p className="role-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
            </p>
          </article>

          <article className="role-item">
            <h3 className="role-title">Lead UX Designer</h3>
            {/* Add a description or leave it empty if necessary */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
