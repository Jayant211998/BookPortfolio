import React, { useState, useRef } from "react";
import "./contactme.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.jpg";
import insta from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
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
          "service_5cbnp2u",
          "template_ayfe848",
          form.current,
          "2oPc_SbwNU6-JlznN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <section id="contact">
      <span className="title">Contact Me</span>
      <p>Please fill out the form below for any opportunities</p>
      <form
        className="contactForm"
        ref={form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="name"
          name="name"
          onChange={(e) => handleChange(e)}
          value={name}
        />
        <input
          type="text"
          placeholder="Your E-Mail"
          className="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={email}
        />
        <textarea
          className="msg"
          rows="5"
          placeholder="Your Message"
          name="msg"
          onChange={(e) => handleChange(e)}
          value={msg}
        ></textarea>
        <button className="submitBtn" type="submit">
          Send
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/jayant-gawali-0a64a31a7/">
            <img src={linkedin} alt="Linkedin" className="link" />
          </a>
          <a href="https://github.com/Jayant211998">
            <img src={github} alt="github" className="link" />
          </a>
          <a href="https://twitter.com/gawali_jay52073">
            <img src={twitter} alt="twitter" className="link" />
          </a>
          <a href="https://www.instagram.com/direct/t/27270951645852969/">
            <img src={insta} alt="instagram" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
