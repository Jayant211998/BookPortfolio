import React from "react";
import "./intro.css";
import image from "../../assets/image.jpg";
import { Link } from "react-scroll";
import WorkIcon from "@mui/icons-material/Work";
import DownloadIcon from "@mui/icons-material/Download";
import Typed from "./Typed";

export const IntroText = () => {
  return ();
}
const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <br />
        <span className="introText">
          I'm <span className="introName">Jayant</span>
          <br />
          <Typed />
        </span>
        <br />
        <p className="introPara">
          Aspiring to become a valuable asset for the industry using skills like
          time management <br /> and openness to experience and challenges.
        </p>
        <br />
        <div className="btnContainer">
          <Link activeClass="active" to="contact" spy={true}>
            <button className="btn">
              <WorkIcon className="btnImg" />
              <p className="btnText">Hire Me</p>
            </button>
          </Link>
          <a href="/resume.pdf" download="resume.pdf">
            <button className="btn">
              <DownloadIcon className="btnImg" />
              <p className="btnText">Download Resume</p>
            </button>
          </a>
        </div>
      </div>
      <img src={image} alt="Image" className="bg" />
    </section>
  );
};

export default Intro;
