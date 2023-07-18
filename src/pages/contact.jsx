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
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  // represent the user's input for the form fields.

  const handleSubmit = (event) => {
    event.preventDefault();
    // We define the handleSubmit function, which is called when the form is submitted. The function takes an event object as its parameter. event.preventDefault() prevents the default form submission behavior, which would cause a page reload.

    // Check if the email is valid before submitting the form
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError(""); // Clear any previous error

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
        setFormSubmitted(true); // Set formSubmitted to true after successful submission
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  // Regular expression for email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      <Header />
      <main className="container1">
        <section className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            {formSubmitted ? (
              <p className="success-message">Form submitted successfully!</p>
            ) : (
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
                {emailError && <p className="error">{emailError}</p>}
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
