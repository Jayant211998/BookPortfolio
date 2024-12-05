import React from "react";
import "./projects.css";
import { Card, Box, Typography, CardContent } from "@mui/material";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const projects = require("./data.json").data;

export const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  autoPlay: true,
};

const Projects = () => {
  const card = projects.map((project) => {
    return (
      <div clssName="projectBlock">
        <a href={project.link}>
          <div className="projectImg">
            <h2>{project.name}</h2>
          </div>
        </a>
      </div>
    );
  });

  return (
    <section id="projects">
      <span className="title">My Projects</span>
      <div className="container">
        <div className="slider1">
          <Slider {...settings}>{card}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
