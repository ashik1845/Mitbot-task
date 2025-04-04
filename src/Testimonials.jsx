import React from "react";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <section className="testimonials-section">
        <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a66a9b4aa33f43fc76ad1a65e4a46de91dde725?placeholderIfAbsent=true&apiKey=bf7362d068e944f1b86d90c093e84367"
        className="background-image"
        alt="Background pattern"
      />
      <div className="testimonials-container">
        <header className="testimonials-header">
          <h2 className="testimonials-title">
            <span>Testimonials That</span>
            <span className="highlight">Speak to My Results</span>
          </h2>
          <p className="testimonials-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </header>
        <div className="testimonials-scroll">
        <div className="testimonials-grid">
          {[...Array(3)].map((_, index) => (
            <article key={index} className="testimonial-card">
                <div className="card-header">
                <div className="quote-icon-wrapper">
                <svg
                  width="128"
                  height="129"
                  viewBox="0 0 128 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="quote-icon"
                >
                  <path d="M84.8533 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2267 104.134C87.4667 105.201 86.88 107.441 87.9467 109.254C89.0133 111.014 91.2533 111.601 93.0667 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9067C75.52 17.0942 68.4267 24.1876 68.4267 33.5742V49.5742C68.3733 58.9609 75.4667 66.0542 84.8533 66.0542Z" fill="#667085" fillOpacity="0.3"></path>
                  <path d="M27.1467 66.0542H52.16C51.7333 90.9609 46.8267 95.0676 31.52 104.134C29.76 105.201 29.1733 107.441 30.24 109.254C31.3067 111.014 33.5467 111.601 35.36 110.534C53.3867 99.8676 59.68 93.3609 59.68 62.3209V33.5742C59.68 24.4542 52.2667 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6667 24.1876 10.6667 33.5742V49.5742C10.6667 58.9609 17.76 66.0542 27.1467 66.0542Z" fill="#667085" fillOpacity="0.3"></path>
                </svg>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="Profile"
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <h3 className="author-name">Fawzi Sayed</h3>
                  <p className="author-role">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-icon"
                    >
                      <path d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5859 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5579C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5579 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1858C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z" fill="#FD853A"></path>
                    </svg>
                  ))}
                </div>
                <span className="rating-score">5.0</span>
              </div>
              </div>
              <p className="testimonial-text">
                consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
                orci elementum egestas lobortis.
              </p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;