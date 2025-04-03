import React from "react";
import "./Effect.css";

const Effect = () => {
  return (
    <section className="banner">
      <div className="banner-strip">
        <div className="marquee">
          <div className="category-container">
            <h2 className="category-text">UX Design</h2>
            <div className="star-icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M243.383 87.3908L248.615 99.4739L261.108 103.633L249.025 108.865L244.866 121.358L239.634 109.275L227.141 105.116L239.224 99.884L243.383 87.3908Z"
              fill="#FD853A"
            ></path>
              </svg>
            </div>
            <h2 className="category-text">App Design</h2>
            <div className="star-icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M566.076 73.3019L571.308 85.3851L583.801 89.5442L571.718 94.7764L567.559 107.27L562.327 95.1864L549.833 91.0273L561.917 85.7951L566.076 73.3019Z"
                fill="#FD853A"
              ></path>
              </svg>
            </div>
            <h2 className="category-text">Dashboard</h2>
            <div className="star-icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M884.772 59.3874L890.004 71.4705L902.497 75.6297L890.414 80.8618L886.255 93.355L881.023 81.2719L868.53 77.1127L880.613 71.8805L884.772 59.3874Z" fill="#FD853A" />
              </svg>
            </div>
            <h2 className="category-text">Wireframe</h2>
            <div className="star-icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1188.48 46.1271L1193.71 58.2103L1206.21 62.3694L1194.12 67.6016L1189.97 80.0948L1184.73 68.0116L1172.24 63.8525L1184.32 58.6203L1188.48 46.1271Z" fill="#FD853A" />
              </svg>
            </div>
            <h2 className="category-text">User Research</h2>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effect;
