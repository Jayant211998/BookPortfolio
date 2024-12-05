import React from "react";
import "./about.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Grid, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
const experienceData = require("./data.json");

const experienceData1 = [
  experienceData.experience[0],
  experienceData.experience[1],
];
const experienceData2 = [
  experienceData.experience[2],
  experienceData.experience[3],
];

export const allExperienceData = [
  experienceData.experience[0],
  experienceData.experience[1],
  experienceData.experience[2],
];

const About = () => {
  return (
    <section id="about">
      <span className="title">Experience</span>
      <div className="details">
        <p>
          {`I have about three years of working experience in different
          technologies like React.js, Node.js, Postgresql, Python, Data Science,
          Machine Learning and ELK.`}
        </p>
        <Grid xs={12} container className="container">
          <Grid item style={{ display: "flex" }}>
            <VerticalTimeline layout="1-column" lineColor="rgb(255, 208, 0)">
              <Grid sm={10} container>
                {experienceData1.map((experience, index) => {
                  return (
                    <VerticalTimelineElement
                      key={index}
                      className="timelineElement"
                      contentStyle={{
                        background: "none",
                        color: "rgb(255, 208, 0)",
                        border: "1.5px solid rgb(255, 208, 0)",
                      }}
                      icon={<WorkIcon color="rgb(255, 208, 0)" />}
                      date={experience.duration}
                    >
                      <div>
                        <div className="experience">
                          <Typography variant="h5">
                            {experience.company}
                          </Typography>
                          <Typography variant="h6">
                            {experience.position}
                          </Typography>
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
                        </div>
                      </div>
                    </VerticalTimelineElement>
                  );
                })}
              </Grid>
            </VerticalTimeline>
            <VerticalTimeline layout="1-column" lineColor="rgb(255, 208, 0)">
              <Grid sm={10} container>
                {experienceData2.map((experience, index) => {
                  return (
                    <VerticalTimelineElement
                      key={index}
                      className="timelineElement"
                      contentStyle={{
                        background: "none",
                        color: "rgb(255, 208, 0)",
                        border: "1.5px solid rgb(255, 208, 0)",
                      }}
                      icon={<WorkIcon color="rgb(255, 208, 0)" />}
                      date={experience.duration}
                    >
                      <div>
                        <div className="experience">
                          <Typography variant="h5">
                            {experience.company}
                          </Typography>
                          <Typography variant="h6">
                            {experience.position}
                          </Typography>
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
                        </div>
                      </div>
                    </VerticalTimelineElement>
                  );
                })}
              </Grid>
            </VerticalTimeline>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default About;

// const CustomCarousel = styled(Carousel)(({ theme }) => ({
//   "& .button": {
//     color: "white",
//   },
//   "& .control-arrow": {
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     opacity: 1,
//     "&:hover": {
//       backgroundColor: "rgba(255, 255, 255, 0.7)",
//     },
//   },
//   "& .control-arrow::before": {
//     borderColor: theme.palette.primary.main,
//   },
//   "& .control-prev.control-arrow": {
//     left: "15px",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//   },
//   "& .control-next.control-arrow": {
//     right: "15px",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//   },
//   "& .carousel carousel-slider": {
//     display: "flex",
//   },
// }));
