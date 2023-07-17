import React from "react";
import "../styles/index.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/Slider";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      {/* <!--=================== Hero section ============--> */}
      <section className="container">
        <video autoPlay loop muted className="hero-video">
          <source src="./src/images/myMovie.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>Velocity Motors</h1>
        </div>
      </section>
      {/* <!-- =================== Information services ================ --> */}
      <section className="row-container">
        <article className="info-card">
          <article className="info-details">
            <h2 className="info">Info</h2>
            <p className="hours">
              Phone: 704-270-8123
              <br />
              Hour: Mon - Fri 9AM - 6PM
              <br />
              Sat 9 AM - 4 PM
            </p>
          </article>
          <article className="info-details">
            <h2 className="info">Services Offered</h2>
            <p className="hours">Exotic Car Sales</p>
          </article>
          <article className="info-details">
            <h2 className="info">Address</h2>
            <p className="hours">
              2205 Gap Street
              <br />
              Charlotte, NC 28214
            </p>
          </article>
        </article>
      </section>

      <br />
      <br />

      <section className="background-image">
        <img src="../images/charlottebackground.webp" alt=""></img>
      </section>
      {/* <!-- ====================== Available Cars ===================== --> */}
      <br />
      <br />
      <br />
      <section className="row-container">
        <article className="car-inventory">
          <article className="car-details-heading">
            <h4 className="info">16 Cars Available</h4>
          </article>
          <article className="car-details-heading">
            <a href="products.html">View All Charlotte Cars</a>
          </article>
        </article>
      </section>
      {/* <!--=================== slider section ============--> */}
      <Slider />
      {/* <!-- =============== background image ==================== --> */}
      <br />
      <br />
      <br />
      <section className="background-image">
        <img src="../images/background-img.webp" alt=""></img>
      </section>
      <Footer />
    </>
  );
}

export default Home;
/* <!-- =================== Information services ================ --> */
