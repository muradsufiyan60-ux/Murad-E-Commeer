import React from "react";
import Hero from "../components/Hero.jsx";
import ProductPrevie from "../components/ProductPrevie.jsx";
import About from "./About.jsx";
import Contact from "./contactme.jsx";

function Home() {
  return (
    <>
      <Hero />
      <ProductPrevie />
      
      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default Home;