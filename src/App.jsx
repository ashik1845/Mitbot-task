import React from "react";
import Nav from "./Navbar";
import MyService from "./Myservice";
import Experience from "./Experience";
import Hire from "./Hire";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import EmailCTA from "./email";
import Effect from "./Effect";
import Footer from "./Footer";


function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Nav/>
      <MyService/>
      <Experience/>
      <Hire/>
      <Portfolio/>
      <Testimonials/>
      <EmailCTA/>
      <Effect/>
      <Footer/>
    </div>
  );
}


export default App;
