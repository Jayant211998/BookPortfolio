import React, { useLayoutEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import { allExperienceData } from "../About/About";
import { Typography } from "@mui/material";
import "./secondpage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { data } from "./data";
const screenSize = window.innerWidth;

export function setWidth() {
  if (screenSize > 1440) {
    return "450px";
  } else if (screenSize > 1024) {
    return "300px";
  } else {
    return "80%";
  }
}

export const SecondFrontPage = ({ play }) => {
  const [hoverIndex, setIndex] = useState(-1);

  return (
    <div className="frontPage-content">
      <div className="heading-box">
        <h1 className="heading">Experience</h1>
      </div>
      <div
        className={
          hoverIndex === -1 || hoverIndex === 2
            ? "frontPage-content-text"
            : "frontPage-content-text-hover"
        }
      >
        <div style={{ width: "100%", padding: "20px 0px" }}>
          <VerticalTimeline
            layout="1-column"
            lineColor="rgb(255, 208, 0)"
            className={play ? "animate-timeline" : "animate-timeline1"}
          >
            {allExperienceData.map((experience, index) => {
              return (
                <VerticalTimelineElement
                  className={`vertical-timeline-element-${index}`}
                  key={index}
                  contentStyle={{
                    background: "none",
                    color: "rgb(255, 208, 0)",
                    border: "1.5px solid rgb(255, 208, 0)",
                    width: `${setWidth()}`,
                  }}
                  icon={<WorkIcon color="rgb(255, 208, 0)" />}
                  date={
                    <span className="date-class">{experience.duration}</span>
                  }
                >
                  <div
                    onMouseEnter={() => {
                      setIndex(index);
                    }}
                    onMouseLeave={() => {
                      setIndex(-1);
                    }}
                  >
                    <div className="experience">
                      <Typography variant="p">
                        {`${experience.company} (${experience.position})`}
                      </Typography>
                      {index === hoverIndex && (
                        <>
                          <br />
                          <br />
                          <ul>
                            {experience.description.map((element) => {
                              return (
                                <>
                                  <li className="content">{element}</li>
                                  <br />
                                </>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export const SecondBackPage = ({ handleBack, handleNext }) => {
  return (
    <div className="backPage-container1">
      <div className="heading-box">
        <h1 className="heading">Certifications</h1>
      </div>
      <div className="certificationList">
        {data.map((element) => {
          return (
            <div className="certification" key={element.id}>
              <div className="certification-image-box">
                <img
                  src={element.image}
                  alt="certification"
                  className="certification-image"
                />
              </div>
              <div className="description">
                <div className="certification-title">
                  <Typography variant="p">{element.title}</Typography>
                </div>
                <div className="certification-company">
                  <Typography variant="p">{element.company}</Typography>
                </div>
                <div className="certification-date">
                  <Typography variant="p">{element.date}</Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-box" style={{ display: "flex" }}>
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
