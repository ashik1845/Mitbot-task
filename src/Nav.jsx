import React from "react";
import "./Nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Update state when resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="container">
      <header className="main-nav">
      <div className="logoo">
            <div className="logo-container">
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-circle">
                <rect x="0.745789" width="46" height="46" rx="23" fill="#FD853A" />
                <path
                  d="M35.9402 26.5953C34.8475 27.7882 33.506 28.526 31.8829 28.5885C28.818 28.7063 26.4455 26.9061 26.1517 24.6538C25.567 20.1703 28.4862 17.4112 31.6833 17.4112C33.3101 17.4112 34.5211 18.0328 35.5962 19.0293L38.4011 15.8705C36.879 14.3661 34.538 13 31.6833 13C28.9193 13 26.4319 13.914 24.5458 15.6215V13.4076H10.6458V17.6873H19.4399V24.4952C19.4399 27.5861 18.2628 28.5885 15.972 28.5885C14.4841 28.5885 12.9617 27.7186 11.6734 26.1089L8.74579 29.2749C10.7088 32.0211 13.6436 33 16.1411 33C20.0066 33 22.3096 31.5884 23.5009 29.4611C25.4399 31.801 28.2821 33 31.3572 33C34.3882 33 36.9081 31.8625 38.7458 29.6852L35.9402 26.5953Z"
                  fill="white"
                />
              </svg>
            </div>
          <div class="logo-text-container">
            <svg
              width="84"
              height="20"
              viewBox="0 0 84 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="logo-text"
            >
              <g clip-path="url(#clip0_263_139)">
                <path
                  d="M0.745789 16.3807L3.12625 13.7839C4.17125 15.1062 5.40646 15.8209 6.61591 15.8221C8.47606 15.8221 9.43347 15.0012 9.43506 12.462L9.4414 4.08129L2.29921 4.07404L2.30199 0.555733L13.5897 0.564586L13.5806 12.8072C13.5778 16.441 11.81 19.4471 6.75065 19.4443C4.72168 19.4431 2.33884 18.6382 0.745789 16.3807Z"
                  fill="white"
                ></path>
                <path
                  d="M16.5897 10.0944C16.5944 3.9495 20.4336 0.386116 25.3324 0.39014C27.6507 0.39014 29.5516 1.51449 30.7877 2.75191L28.5067 5.34547C27.6348 4.52535 26.6513 4.01388 25.3297 4.01268C22.7336 4.01268 20.8362 6.24688 20.8338 9.95956C20.8307 13.7696 22.7245 15.9821 25.4834 15.9861C26.8022 15.9861 27.8912 15.331 28.7793 14.3523L31.0555 16.8915C29.5627 18.6799 27.5156 19.6119 25.0538 19.6099C20.5081 19.6042 16.5849 16.3483 16.5897 10.0944Z"
                  fill="white"
                ></path>
                <path
                  d="M48.4961 19.274L44.366 11.8543C46.3189 10.9606 47.6262 9.2342 47.6282 6.51106C47.6318 2.1014 44.4449 0.734 40.5708 0.730781L34.0694 0.725952L34.0555 19.2616L38.2026 19.2648L38.2074 12.5972H40.3814L43.8659 19.2672L48.4961 19.274ZM38.2137 4.05875H40.2312C42.406 4.05875 43.5722 4.67645 43.5707 6.50623C43.5707 8.32072 42.402 9.268 40.2272 9.26639H38.2098L38.2137 4.05875Z"
                  fill="white"
                ></path>
                <path
                  d="M51.5108 0.727364L63.633 0.736619L63.6302 4.25372L55.6475 4.24769L55.6448 7.96519L62.4271 7.97042L62.4244 11.4875L55.642 11.4823L55.6388 15.7479L63.9025 15.7543L63.8997 19.2726L51.4961 19.263L51.5108 0.727364Z"
                  fill="white"
                ></path>
                <path
                  d="M78.8658 19.2682L83.2542 19.2718L77.5735 0.731786L72.6125 0.728165L66.9025 19.2593L71.1387 19.2626L72.2582 14.8549L77.7618 14.8589L78.8658 19.2682ZM73.088 11.5869L73.5239 9.87987C73.9884 8.02877 74.4984 5.85895 74.9478 3.90321H75.0599C75.499 5.85975 76.0534 8.03158 76.5155 9.88229L76.9435 11.5901L73.088 11.5869Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_263_139">
                  <rect
                    width="82.5084"
                    height="19.2197"
                    fill="white"
                    transform="translate(0.745789 0.390137)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      {!isMobile ? (
        // Normal Navbar for Large Screens
        <>
          <a href="#" className="nav-item nav-active">Home</a>
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item">Service</a>
          <div className="logo">
            <div className="logo-container">
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-circle">
                <rect x="0.745789" width="46" height="46" rx="23" fill="#FD853A" />
                <path
                  d="M35.9402 26.5953C34.8475 27.7882 33.506 28.526 31.8829 28.5885C28.818 28.7063 26.4455 26.9061 26.1517 24.6538C25.567 20.1703 28.4862 17.4112 31.6833 17.4112C33.3101 17.4112 34.5211 18.0328 35.5962 19.0293L38.4011 15.8705C36.879 14.3661 34.538 13 31.6833 13C28.9193 13 26.4319 13.914 24.5458 15.6215V13.4076H10.6458V17.6873H19.4399V24.4952C19.4399 27.5861 18.2628 28.5885 15.972 28.5885C14.4841 28.5885 12.9617 27.7186 11.6734 26.1089L8.74579 29.2749C10.7088 32.0211 13.6436 33 16.1411 33C20.0066 33 22.3096 31.5884 23.5009 29.4611C25.4399 31.801 28.2821 33 31.3572 33C34.3882 33 36.9081 31.8625 38.7458 29.6852L35.9402 26.5953Z"
                  fill="white"
                />
              </svg>
            </div>
          <div class="logo-text-container">
            <svg
              width="84"
              height="20"
              viewBox="0 0 84 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="logo-text"
            >
              <g clip-path="url(#clip0_263_139)">
                <path
                  d="M0.745789 16.3807L3.12625 13.7839C4.17125 15.1062 5.40646 15.8209 6.61591 15.8221C8.47606 15.8221 9.43347 15.0012 9.43506 12.462L9.4414 4.08129L2.29921 4.07404L2.30199 0.555733L13.5897 0.564586L13.5806 12.8072C13.5778 16.441 11.81 19.4471 6.75065 19.4443C4.72168 19.4431 2.33884 18.6382 0.745789 16.3807Z"
                  fill="white"
                ></path>
                <path
                  d="M16.5897 10.0944C16.5944 3.9495 20.4336 0.386116 25.3324 0.39014C27.6507 0.39014 29.5516 1.51449 30.7877 2.75191L28.5067 5.34547C27.6348 4.52535 26.6513 4.01388 25.3297 4.01268C22.7336 4.01268 20.8362 6.24688 20.8338 9.95956C20.8307 13.7696 22.7245 15.9821 25.4834 15.9861C26.8022 15.9861 27.8912 15.331 28.7793 14.3523L31.0555 16.8915C29.5627 18.6799 27.5156 19.6119 25.0538 19.6099C20.5081 19.6042 16.5849 16.3483 16.5897 10.0944Z"
                  fill="white"
                ></path>
                <path
                  d="M48.4961 19.274L44.366 11.8543C46.3189 10.9606 47.6262 9.2342 47.6282 6.51106C47.6318 2.1014 44.4449 0.734 40.5708 0.730781L34.0694 0.725952L34.0555 19.2616L38.2026 19.2648L38.2074 12.5972H40.3814L43.8659 19.2672L48.4961 19.274ZM38.2137 4.05875H40.2312C42.406 4.05875 43.5722 4.67645 43.5707 6.50623C43.5707 8.32072 42.402 9.268 40.2272 9.26639H38.2098L38.2137 4.05875Z"
                  fill="white"
                ></path>
                <path
                  d="M51.5108 0.727364L63.633 0.736619L63.6302 4.25372L55.6475 4.24769L55.6448 7.96519L62.4271 7.97042L62.4244 11.4875L55.642 11.4823L55.6388 15.7479L63.9025 15.7543L63.8997 19.2726L51.4961 19.263L51.5108 0.727364Z"
                  fill="white"
                ></path>
                <path
                  d="M78.8658 19.2682L83.2542 19.2718L77.5735 0.731786L72.6125 0.728165L66.9025 19.2593L71.1387 19.2626L72.2582 14.8549L77.7618 14.8589L78.8658 19.2682ZM73.088 11.5869L73.5239 9.87987C73.9884 8.02877 74.4984 5.85895 74.9478 3.90321H75.0599C75.499 5.85975 76.0534 8.03158 76.5155 9.88229L76.9435 11.5901L73.088 11.5869Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_263_139">
                  <rect
                    width="82.5084"
                    height="19.2197"
                    fill="white"
                    transform="translate(0.745789 0.390137)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <a href="#" className="nav-item">Resume</a>
          <a href="#" className="nav-item">Project</a>
          <a href="#" className="nav-item">Contact</a>
        </>
      ) : (
        <div className="mobile-nav">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          {menuOpen && (
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

              <a href="#" className="nav-item">Home</a>
              <a href="#" className="nav-item">About</a>
              <a href="#" className="nav-item">Service</a>
              <a href="#" className="nav-item">Resume</a>
              <a href="#" className="nav-item">Project</a>
              <a href="#" className="nav-item">Contact</a>
            </div>
          )}
        </div>
      )}
      </header>
      
      <main className="hero-section">
        <section className="intro-section">
          <span className="greeting-badge">Hello!</span>
          <h1 className="intro-heading"
          style={{
            transform: `translateY(${Math.min(scrollY * 2, 850)}px)`,
            opacity: scrollY > 200 ? 0 : 1,
          }}
          >
  I'm <span className="highlightt">Jenny</span>,<br />
  <span className="subheading">Product Designer</span>
</h1>



          <div className="testimoniall"
           style={{ transform: `translateY(${Math.max(-scrollY * 1, -250)}px)`, opacity: scrollY > 300 ? 0 : 1 }}
          >
          <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="quote-iconn"
            >
              <path
                d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28499 10.905 6.73499C11.4 6.43499 11.565 5.80499 11.265 5.29499C10.98 4.79999 10.335 4.63499 9.84 4.93499C4.77 7.93499 3 9.76499 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
                fill="#344054"
              ></path>
              <path
                d="M28.365 17.445H21.33C21.45 10.44 22.83 9.28499 27.135 6.73499C27.63 6.43499 27.795 5.80499 27.495 5.29499C27.195 4.79999 26.565 4.63499 26.055 4.93499C20.985 7.93499 19.215 9.76499 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
                fill="#344054"
              ></path>
            </svg>
            <p className="testimonial-textt">
              Jenny's Exceptional product design ensures our website's success. Highly Recommended.
            </p>
          </div>
          
          <div className="rating-experience"
          style={{ transform: `translateY(${Math.max(-scrollY * 1, -250)}px)`, opacity: scrollY > 300 ? 0 : 1 }}
          >
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <svg key={index} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="star">
                  <path d="M23.8912 19.0933C23.5459 19.428 23.3872 19.912 23.4659 20.3867L24.6512 26.9467C24.7512 27.5027 24.5165 28.0653 24.0512 28.3867C23.5952 28.72 22.9885 28.76 22.4912 28.4933L16.5858 25.4133C16.3805 25.304 16.1525 25.2453 15.9192 25.2387H15.5578C15.4325 25.2573 15.3099 25.2973 15.1979 25.3587L9.29118 28.4533C8.99918 28.6 8.66852 28.652 8.34452 28.6C7.55518 28.4507 7.02852 27.6987 7.15785 26.9053L8.34452 20.3453C8.42318 19.8667 8.26452 19.38 7.91918 19.04L3.10452 14.3733C2.70185 13.9827 2.56185 13.396 2.74585 12.8667C2.92452 12.3387 3.38052 11.9533 3.93118 11.8667L10.5578 10.9053C11.0619 10.8533 11.5045 10.5467 11.7312 10.0933L14.6512 4.10668C14.7205 3.97334 14.8099 3.85068 14.9179 3.74668L15.0378 3.65334C15.1005 3.58401 15.1725 3.52668 15.2525 3.48001L15.3979 3.42668L15.6245 3.33334H16.1859C16.6872 3.38534 17.1285 3.68534 17.3592 4.13334L20.3179 10.0933C20.5312 10.5293 20.9459 10.832 21.4245 10.9053L28.0512 11.8667C28.6112 11.9467 29.0792 12.3333 29.2645 12.8667C29.4392 13.4013 29.2885 13.988 28.8779 14.3733L23.8912 19.0933Z" fill="#FD853A" />
                </svg>
              ))}
            </div>
            <div className="experiencee"
  
            >
              <h2 className="experience-years">10 Years</h2>
              <p className="experience-text">Experience</p>
            </div>
          </div>
        </section>

        <section className="image-section">
          <svg width="813" height="406" viewBox="0 0 813 406" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shape">
            <path d="M812.673 406C542.08 406 271.487 406 0.894379 406C0.894379 181.833 182.617 0.110596 406.784 0.110596C630.95 0.110596 812.673 181.833 812.673 406Z" fill="#FEB273" />
          </svg>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c10678809c9d240945c05525c2df7ac9f1f5a2d"
            alt="Product Designer"
            className="hero-image"
          />

          <div className="cta-container">
            <a href="#" className="portfolio-btn">
              <span>Portfolio</span>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-iconn">
                <path d="M12.25 29.75L29.75 12.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.25 12.25H29.75V29.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className="portfolio-btn">
              <span>Hire me</span>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-iconn">
                <path d="M12.25 29.75L29.75 12.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.25 12.25H29.75V29.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg></a>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default Nav;