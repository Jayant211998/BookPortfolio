import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";
import "./thirdpage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { data } from "./data";
import { projects } from "../FourthPage/FourthPage";
import { setWidth } from "../SecondPage/SecondPage";

const screenWidth = window.innerWidth;

export const ThirdFrontPage = ({ play }) => {
  const [hoverIndex, setIndex] = useState(-1);

  return (
    <div className="frontPage-content">
      <div className="heading-box">
        <h1>Education</h1>
      </div>
      <div className="frontPage-content-text">
        <VerticalTimeline
          layout="1-column"
          lineColor="rgb(255, 208, 0)"
          className={play ? "animate-timeline" : "animate-timeline1"}
        >
          {data.map((experience, index) => {
            return (
              <div className="timeline">
                <VerticalTimelineElement
                  className={`vertical-timeline-element-${index}`}
                  key={index}
                  contentStyle={{
                    background: "none",
                    color: "rgb(255, 208, 0)",
                    border: "1.5px solid rgb(255, 208, 0)",
                    width: `${setWidth()}`,
                  }}
                  icon={<SchoolIcon color="rgb(255, 208, 0)" />}
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
                        {`${experience.organization}`}
                      </Typography>
                      <br />
                      {(index === hoverIndex || screenWidth > 1440) && (
                        <>
                          <br />
                          <Typography variant="p">
                            {`${experience.degree}`}
                          </Typography>
                          <br />
                        </>
                      )}
                      {index === hoverIndex && (
                        <>
                          <br />
                          <Typography variant="p">{`${experience.grade}`}</Typography>
                          <br />
                        </>
                      )}
                    </div>
                  </div>
                </VerticalTimelineElement>
              </div>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export const ThirdBackPage = ({ index, handleBack, handleNext }) => {
  return (
    <div className="backPage-container">
      <div className="box"></div>
      {index > -1 ? (
        <div className="project-description1">
          <div className="heading-box">
            <h1 className="heading">{projects[index]?.name}</h1>
          </div>
          <div className="description-box">
            <p className="description">{projects[index]?.description}</p>
          </div>
          <div className="linkbox">
            <p className="github">{`Github Link - ${projects[index]?.git}`}</p>
          </div>
        </div>
      ) : (
        <div className="project-description">
          <p>You will get to see project details here</p>
        </div>
      )}
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
