import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <section className="row">
          <section className="footer-column">
            <h4>Velocity Motors</h4>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="products.html">Inventory</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </section>
          <section className="footer-column">
            <h4>Visit Us</h4>
            <ul>
              <li>2205 Gap Street</li>
              <li>Charlotte, NC 28214</li>
              <li>28214</li>
            </ul>
          </section>
          <section className="footer-column">
            <h4>Follow US</h4>
            <article className="social-links">
              <a href="https://www.facebook.com/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i class="fab fa-youtube"></i>
              </a>
            </article>
          </section>
          {/* <section className="footer-column">
            <h4>Join Our Newsletter</h4>
            <article className="newsletter">
            
              <button className="btnn btn1"> Send </button>
            </article>
          </section> */}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
