import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.css";
import Footer from "../components/footer";
import Header from "../components/header";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      number,
      message,
    };

    axios
      .post("http://localhost:8000/submit", formData)
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <>
      <Header />
      <main className="container1">
        <section className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="field"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="field"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                className="field"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="field"
                placeholder="Your Number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <textarea
                className="field"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" className="btn" value="Submit" />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
