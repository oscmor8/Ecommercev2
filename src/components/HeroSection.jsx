import React from "react";
function HeroSection() {
  return (
    <section className="container">
      <video autoPlay loop muted className="hero-video">
        <source src="./images/myMovie.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Velocity Motors</h1>
      </div>
    </section>
  );
}

export default HeroSection;
