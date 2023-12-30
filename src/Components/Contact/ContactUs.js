import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../../CSS/Service/contact.css";

import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();

  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_8cb9v37",
        "template_4pcs1hj",
        form.current,
        "XtvbtmglJsaA7CJvG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/");
  };
  return (
    <>
      <div className="contactMain">
        <h1>Contact Us</h1>
        <p>
          Contact us about anything related to our company or services. We'll do
          our best to get back to you as soon as possible.
        </p>
        <div className="contactForm">
          <form id="cForm" ref={form} onSubmit={sendEmail}>
            <div className="contactInput">
              <h3>Name *</h3>
              <input type="text" required name="user_name" />
            </div>

            <div className="contactInput">
              <h3>Email *</h3>
              <input type="email" required name="user_email" />
            </div>

            <div className="contactInput">
              <h3>Contact *</h3>
              <input type="tel" max={11} required name="contact_number" />
            </div>

            <div className="contactInput">
              <h3>Question *</h3>
              <input type="text" required name="message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
