import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.jpg";
import "./fourthpage.css";
import IconButton from "@mui/material/IconButton";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export const projects = require("./data.json").data;

export const FourthPageFront = ({ handleData }) => {
  const card = projects.map((project, index) => {
    return (
      <div
        className="project-block"
        onMouseEnter={() => {
          handleData(index);
        }}
        onMouseDown={() => {
          handleData(-1);
        }}
      >
        <a href={project.link}>
          <div className="project-img">
            <h3>{project.name}</h3>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="frontpage-container">
      <div className="frontpage-content">
        <div className="heading-box">
          <h1>Projects</h1>
        </div>
        <div className="project-section">{card}</div>
      </div>
    </div>
  );
};

export const FourthPageBack = ({ handleBack, handleNext }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jayant_Gawali_Resume.pdf";
    link.click();
  };

  return (
    <div className="page-back">
      <div></div>
      <div className="page-back-header">
        <div className="page-back-content">
          <div className="message">
            <p>If you like my portfolio please do reach out to me.</p>
            <p>You can also download my resume from below link.</p>
          </div>
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
            <div className="icon-link">
              <IconButton onClick={handleDownload}>
                <DownloadForOfflineOutlinedIcon
                  fontSize={window.innerWidth > 1440 ? "large" : "medium"}
                  className="icon"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="button-box">
        <button className="back-button" onClick={handleBack}>
          <ArrowBackIosIcon className="back-arrow-btn" />
          <p style={{ color: "white" }}>Back</p>
        </button>
        <button className="next-button" onClick={handleNext}>
          <p style={{ color: "white" }}>Next</p>
          <ArrowForwardIosIcon className="next" />
        </button>
      </div>
    </div>
  );
};
