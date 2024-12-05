import React, { useState, useRef } from "react";
import "./fifthpage.css";
import emailjs from "@emailjs/browser";

const FifthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "company") {
      setCompany(e.target.value);
    } else if (e.target.name === "contact") {
      setContact(e.target.value);
    } else {
      setMsg(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || msg === "") {
      alert("Please fill out all the fields");
    } else {
      emailjs
        .sendForm(
          "service_o4mzyfp",
          "template_jvu7bpr",
          form.current,
          "jR_GwW8hytWMHuhPq"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMsg("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="contact">
      <div className="heading-box">
        <h1>Contact</h1>
      </div>
      <div className="contact-form">
        <form
          className="contactForm"
          ref={form}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input-box">
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              name="name"
              onChange={(e) => handleChange(e)}
              value={name}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Company Name"
              className="input"
              name="company"
              onChange={(e) => handleChange(e)}
              value={company}
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Your E-Mail"
              className="input"
              name="email"
              onChange={(e) => handleChange(e)}
              value={email}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Your Contact Number"
              className="input"
              name="contact"
              onChange={(e) => handleChange(e)}
              value={contact}
            />
          </div>

          <div className="input-box">
            <textarea
              className="input1"
              rows="5"
              placeholder="Your Message"
              name="msg"
              onChange={(e) => handleChange(e)}
              value={msg}
            ></textarea>
          </div>
          <div className="btn-box">
            <button className="submitBtn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FifthPage;
