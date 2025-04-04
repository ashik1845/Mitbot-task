import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-top">
        <h2 className="connect-heading">Let's Connect There</h2>
        <button className="hire-button">
          <span className="hire-text">Hire me</span>
          <svg
            className="arrow-icon"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
          d="M12.75 29.8311L30.25 12.3311"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12.75 12.3311H30.25V29.8311"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
          </svg>
        </button>
      </section>

      <hr className="divider" />

      <section className="footer-content">
        <div className="company-info">
          <div className="logo-container">
            <svg
              className="logo-icon"
              width="46"
              height="47"
              viewBox="0 0 46 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.081" width="46" height="46" rx="23" fill="#FD853A" />
              <path d="M35.1944 26.6764C34.1017 27.8693 32.7602 28.607 31.1371 28.6695C28.0722 28.7874 25.6997 26.9872 25.4059 24.7349C24.8212 20.2513 27.7404 17.4922 30.9375 17.4922C32.5643 17.4922 33.7753 18.1138 34.8504 19.1104L37.6553 15.9515C36.1332 14.4472 33.7922 13.0811 30.9375 13.0811C28.1735 13.0811 25.6862 13.9951 23.8 15.7026V13.4886H9.90002V17.7684H18.6941V24.5762C18.6941 27.6672 17.517 28.6695 15.2262 28.6695C13.7383 28.6695 12.2159 27.7996 10.9276 26.19L8 29.356C9.96306 32.1021 12.8978 33.0811 15.3954 33.0811C19.2608 33.0811 21.5638 31.6694 22.7551 29.5421C24.6941 31.882 27.5364 33.0811 30.6114 33.0811C33.6424 33.0811 36.1623 31.9435 38 29.7663L35.1944 26.6764Z" fill="white" />
            </svg>
            <svg
              className="logo-text"
              width="83"
              height="20"
              viewBox="0 0 83 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              d="M0 16.4617L2.38046 13.8649C3.42546 15.1872 4.66067 15.9019 5.87012 15.9031C7.73027 15.9031 8.68769 15.0822 8.68927 12.543L8.69561 4.16227L1.55342 4.15503L1.5562 0.636719L12.8439 0.645572L12.8348 12.8882C12.832 16.522 11.0642 19.5281 6.00486 19.5252C3.97589 19.524 1.59305 18.7192 0 16.4617Z"
              fill="white"
            ></path>
            <path
              d="M15.8439 10.1754C15.8486 4.03055 19.6878 0.467171 24.5867 0.471195C26.9049 0.471195 28.8059 1.59554 30.0419 2.83297L27.7609 5.42653C26.8891 4.60641 25.9055 4.09494 24.5839 4.09373C21.9878 4.09373 20.0904 6.32794 20.0881 10.0406C20.0849 13.8507 21.9787 16.0631 24.7376 16.0672C26.0565 16.0672 27.1455 15.412 28.0335 14.4334L30.3098 16.9726C28.817 18.7609 26.7698 19.6929 24.3081 19.6909C19.7623 19.6853 15.8391 16.4293 15.8439 10.1754Z"
              fill="white"
            ></path>
            <path
              d="M47.7503 19.3552L43.6202 11.9355C45.5731 11.0417 46.8804 9.31538 46.8824 6.59224C46.886 2.18258 43.6991 0.815177 39.825 0.811958L33.3236 0.807129L33.3098 19.3427L37.4569 19.346L37.4616 12.6784H39.6356L43.1201 19.3484L47.7503 19.3552ZM37.468 4.13993H39.4854C41.6602 4.13993 42.8265 4.75763 42.8249 6.58741C42.8249 8.4019 41.6563 9.34918 39.4815 9.34757H37.464L37.468 4.13993Z"
              fill="white"
            ></path>
            <path
              d="M50.7649 0.808594L62.8872 0.817849L62.8844 4.33495L54.9017 4.32892L54.8989 8.04642L61.6813 8.05165L61.6785 11.5688L54.8962 11.5635L54.893 15.8291L63.1567 15.8356L63.1539 19.3539L50.7503 19.3442L50.7649 0.808594Z"
              fill="white"
            ></path>
            <path
              d="M78.12 19.3491L82.5085 19.3527L76.8278 0.812704L71.8667 0.809082L66.1567 19.3403L70.3929 19.3435L71.5124 14.9358L77.016 14.9399L78.12 19.3491ZM72.3422 11.6678L72.7781 9.96079C73.2426 8.10968 73.7526 5.93987 74.202 3.98413H74.3141C74.7532 5.94067 75.3076 8.1125 75.7697 9.96321L76.1977 11.6711L72.3422 11.6678Z"
              fill="white"
            ></path>
            </svg>
          </div>
          <p className="company-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <ul className="social-links">
          <li>
          <a href="#" aria-label="Facebook">
            <svg
              class="social-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.2711C22 19.9111 19.83 22.0811 16.19 22.0811H15C14.45 22.0811 14 21.6311 14 21.0811V15.3111C14 15.0411 14.22 14.8111 14.49 14.8111L16.25 14.7811C16.39 14.7711 16.51 14.6711 16.54 14.5311L16.89 12.6211C16.92 12.4411 16.78 12.2711 16.59 12.2711L14.46 12.3011C14.18 12.3011 13.96 12.0811 13.95 11.8111L13.91 9.36105C13.91 9.20105 14.04 9.06107 14.21 9.06107L16.61 9.02106C16.78 9.02106 16.91 8.89107 16.91 8.72107L16.87 6.32104C16.87 6.15104 16.74 6.02106 16.57 6.02106L13.87 6.06107C12.21 6.09107 10.89 7.45105 10.92 9.11105L10.97 11.8611C10.98 12.1411 10.76 12.3611 10.48 12.3711L9.28 12.3911C9.11 12.3911 8.98001 12.521 8.98001 12.691L9.01001 14.5911C9.01001 14.7611 9.14 14.8911 9.31 14.8911L10.51 14.8711C10.79 14.8711 11.01 15.0911 11.02 15.3611L11.11 21.0611C11.12 21.6211 10.67 22.0811 10.11 22.0811H7.81C4.17 22.0811 2 19.911 2 16.261V7.89105C2 4.25105 4.17 2.08105 7.81 2.08105H16.19C19.83 2.08105 22 4.25105 22 7.89105V16.2711Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="YouTube">
            <svg
              class="social-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 4.08105H7C4 4.08105 2 6.08105 2 9.08105V15.0811C2 18.0811 4 20.0811 7 20.0811H17C20 20.0811 22 18.0811 22 15.0811V9.08105C22 6.08105 20 4.08105 17 4.08105ZM13.89 13.1111L11.42 14.5911C10.42 15.1911 9.59998 14.7311 9.59998 13.5611V10.5911C9.59998 9.42106 10.42 8.96107 11.42 9.56107L13.89 11.041C14.84 11.621 14.84 12.5411 13.89 13.1111Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="WhatsApp">
            <svg
              class="social-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.98 11.491C21.64 5.69101 16.37 1.22102 10.3 2.22102C6.11998 2.91102 2.76999 6.301 2.11999 10.481C1.73999 12.901 2.24001 15.191 3.33001 17.081L2.43999 20.391C2.23999 21.141 2.92998 21.821 3.66998 21.611L6.92999 20.711C8.40999 21.581 10.14 22.081 11.99 22.081C17.63 22.081 22.31 17.111 21.98 11.491ZM16.88 15.801C16.79 15.981 16.68 16.151 16.54 16.311C16.29 16.581 16.02 16.781 15.72 16.901C15.42 17.031 15.09 17.091 14.74 17.091C14.23 17.091 13.68 16.971 13.11 16.721C12.53 16.471 11.96 16.141 11.39 15.731C10.81 15.311 10.27 14.841 9.74999 14.331C9.22999 13.811 8.76997 13.261 8.34997 12.691C7.93997 12.121 7.60999 11.551 7.36999 10.981C7.12999 10.411 7.01 9.86101 7.01 9.34101C7.01 9.00101 7.06999 8.67101 7.18999 8.37101C7.30999 8.06101 7.50001 7.78101 7.77001 7.53101C8.09001 7.21101 8.43999 7.06101 8.80999 7.06101C8.94999 7.06101 9.08996 7.09101 9.21996 7.15101C9.34996 7.21101 9.46999 7.30101 9.55999 7.43101L10.72 9.07099C10.81 9.20099 10.88 9.311 10.92 9.421C10.97 9.531 10.99 9.631 10.99 9.731C10.99 9.851 10.95 9.97101 10.88 10.091C10.81 10.211 10.72 10.331 10.6 10.451L10.22 10.851C10.16 10.911 10.14 10.971 10.14 11.051C10.14 11.091 10.15 11.131 10.16 11.171C10.18 11.211 10.19 11.241 10.2 11.271C10.29 11.441 10.45 11.651 10.67 11.911C10.9 12.171 11.14 12.441 11.4 12.701C11.67 12.971 11.93 13.211 12.2 13.441C12.46 13.661 12.68 13.811 12.85 13.901C12.88 13.911 12.91 13.931 12.94 13.941C12.98 13.961 13.02 13.961 13.07 13.961C13.16 13.961 13.22 13.931 13.28 13.871L13.66 13.491C13.79 13.361 13.91 13.271 14.02 13.211C14.14 13.141 14.25 13.101 14.38 13.101C14.48 13.101 14.58 13.121 14.69 13.171C14.8 13.221 14.92 13.281 15.04 13.371L16.7 14.551C16.83 14.641 16.92 14.751 16.98 14.871C17.03 15.001 17.06 15.121 17.06 15.261C17 15.431 16.96 15.621 16.88 15.801Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Instagram">
            <svg
              class="social-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.19 2.08105H7.81C4.17 2.08105 2 4.25105 2 7.89105V16.2611C2 19.9111 4.17 22.0811 7.81 22.0811H16.18C19.82 22.0811 21.99 19.9111 21.99 16.2711V7.89105C22 4.25105 19.83 2.08105 16.19 2.08105ZM12 15.9611C9.86 15.9611 8.12 14.2211 8.12 12.0811C8.12 9.94105 9.86 8.20105 12 8.20105C14.14 8.20105 15.88 9.94105 15.88 12.0811C15.88 14.2211 14.14 15.9611 12 15.9611ZM17.92 6.96105C17.87 7.08105 17.8 7.19105 17.71 7.29105C17.61 7.38105 17.5 7.45105 17.38 7.50105C17.26 7.55105 17.13 7.58105 17 7.58105C16.73 7.58105 16.48 7.48105 16.29 7.29105C16.2 7.19105 16.13 7.08105 16.08 6.96105C16.03 6.84105 16 6.71105 16 6.58105C16 6.45105 16.03 6.32105 16.08 6.20105C16.13 6.07105 16.2 5.97105 16.29 5.87105C16.52 5.64105 16.87 5.53105 17.19 5.60105C17.26 5.61105 17.32 5.63105 17.38 5.66105C17.44 5.68105 17.5 5.71105 17.56 5.75105C17.61 5.78105 17.66 5.83105 17.71 5.87105C17.8 5.97105 17.87 6.07105 17.92 6.20105C17.97 6.32105 18 6.45105 18 6.58105C18 6.71105 17.97 6.84105 17.92 6.96105Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Twitter">
            <svg
              class="social-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1066 8.71529C20.0826 8.49182 20.0546 8.31274 20.0316 8.18511L21.9161 5.3584C22.0345 5.18068 22.027 4.94731 21.8974 4.77756C21.7677 4.60781 21.5446 4.53917 21.3419 4.60671L18.7212 5.48027C18.5827 5.27371 18.3773 5.00125 18.1036 4.7275C17.5491 4.173 16.6794 3.58105 15.5 3.58105C14.2775 3.58105 13.3727 3.92323 12.7266 4.485C12.0872 5.041 11.75 5.76974 11.5775 6.45979C11.4052 7.14894 11.3898 7.82716 11.4147 8.32477C11.422 8.46989 11.4327 8.60123 11.4444 8.71489C10.1893 8.9818 8.87591 8.57293 7.58934 7.8094C6.17064 6.96746 4.87015 5.74406 3.85358 4.7275C3.71259 4.58651 3.50131 4.54277 3.31593 4.61618C3.13054 4.6896 3.0065 4.86614 3.00027 5.06544C2.87287 9.14225 3.71338 14.0768 7.51119 16.5791C5.9138 17.4432 4.34766 17.8462 2.43801 18.0849C2.21938 18.1122 2.04441 18.2795 2.00721 18.4966C1.97001 18.7138 2.07935 18.9297 2.27642 19.0283C7.43512 21.6076 14.1199 21.4212 17.9 16.3811C19.467 14.2917 19.9921 12.197 20.1233 10.6226C20.1888 9.83625 20.1563 9.17914 20.1066 8.71529Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </li>
          </ul>
        </div>

        <nav className="footer-nav">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="nav-linkss">
            {['Home', 'About Us', 'Service', 'Resume', 'Project'].map((link) => (
              <li key={link}><a href="#" className="nav-linkk">{link}</a></li>
            ))}
          </ul>
        </nav>

        <div className="contact-info">
          <h3 className="footer-heading">Contact</h3>
          <ul className="contact-list">
            <li className="contact-item">+20 11 43 63 73 41</li>
            <li className="contact-item">fawzisayed1209@gmail.com</li>
            <li className="contact-item">fawziuiux.com</li>
          </ul>
        </div>

        <div className="newsletter">
          <h3 className="footer-heading">Get the latest information</h3>
          <form className="newsletter-form">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                className="email-input"
                aria-label="Email Address"
              />
            </div>
            <button type="submit" className="submit-button" aria-label="Subscribe">
            <svg
            className="send-icon"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29602 3.48708C3.91012 2.38589 1.36183 4.66673 2.19279 7.15964L3.45424 10.9007C3.59136 11.3074 3.97267 11.5812 4.40182 11.5812H13C13.5523 11.5812 14 12.0289 14 12.5812C14 13.1335 13.5523 13.5812 13 13.5812H4.40182C3.97267 13.5812 3.59136 13.855 3.45424 14.2617L2.19281 18.0028C1.36183 20.4957 3.91012 22.7765 6.29603 21.6754L20.0983 15.3051C22.422 14.2326 22.422 10.9299 20.0983 9.85737L6.29602 3.48708Z"
              fill="white"
            ></path>
          </svg>
            </button>
          </form>
        </div>
      </section>

      <hr className="divider" />

      <section className="footer-bottom">
        <p className="copyright">Copyright© 2023 Fawziuiux. All Rights Reserved.</p>
        <p className="terms">User Terms & Conditions | Privacy Policy</p>
      </section>
    </footer>
  );
};

export default Footer;
