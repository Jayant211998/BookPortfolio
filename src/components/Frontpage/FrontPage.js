import React from "react";
import "./frontpage.css";
import logo from "../../assets/applogo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typed from "../Intro/Typed";
import { DATA } from "../Skills/Skills";
import { Line } from "rc-progress";
import { Grid } from "@mui/material";
import { Animate } from "react-simple-animate";

export const Frontpage = ({ handleNext }) => {
  return (
    <div className="frontpage-content">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="frontpage-content-text">
        <div className="name">
          <h1>JAYANT GAWALI</h1>
        </div>

        <div className="aim">
          <p>
            Aspiring to become a valuable asset for the industry using skills
            like time management and openness to experience and challenges.
          </p>
        </div>

        <div className="webDeveloper">
          <h3 className="webDeveloper">
            <Typed />
          </h3>
        </div>
      </div>
      <div className="arrow-box">
        <div className="arrow">
          <button className="next-btn" onClick={handleNext}>
            <p>Next</p>
            <ArrowForwardIosIcon className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const BackPage = ({ handleBack, handleNext, play }) => {
  const [data, setData] = React.useState(DATA);
  React.useLayoutEffect(() => {
    const data = DATA.filter(
      (skill) => skill.id !== 3 && skill.id !== 7 && skill.id !== 9
    );
    setData(data);
  }, []);

  return (
    <div className="backPage-content">
      <div className="backPage-content-text">
        <div className="back-page-heading">
          <h1>Skills</h1>
        </div>
        <div className="back-page-text">
          {data.map((skill) => (
            <Grid item xs={12} sm={6} className="skillBlock">
              <h3>{skill.name}</h3>
              <Animate
                play={play}
                start={{ percent: 0 }}
                end={{ percent: skill.percentage }}
                duration={2.5}
                delay={0.5}
                easing="easeInOutQuad"
                render={({ style }) => (
                  <Line
                    percent={style.percent}
                    strokeWidth="4"
                    strokeColor="rgb(255, 208, 0)"
                    trailWidth="4"
                  />
                )}
              />
            </Grid>
          ))}
        </div>
      </div>
      <div className="back-arrow">
        <button className="back-btn" onClick={handleBack}>
          <ArrowBackIosIcon className="back-arrow-btn" />
          <p>Back</p>
        </button>
        <button className="nextbtn" onClick={handleNext}>
          <p>Next</p>
          <ArrowForwardIosIcon className="next" />
        </button>
      </div>
    </div>
  );
};

export default Frontpage;
