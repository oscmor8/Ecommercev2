import React from "react";
import "../styles/index.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/Slider";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      {/* <!--=================== Hero section ============--> */}
      <HeroSection />
      {/* <!-- =================== Information services ================ --> */}
      <InfoSection />
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
            <Link to="/products">View All Charlotte Cars</Link>
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
        <img src="../images/hypercarlineup2.webp" alt=""></img>
      </section>
      <Footer />
    </>
  );
}

export default Home;
/* <!-- =================== Information services ================ --> */
