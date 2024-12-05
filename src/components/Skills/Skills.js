import React, { useEffect } from "react";
import "./skills.css";
import { Line } from "rc-progress";
import { Grid } from "@mui/material";
import { Animate } from "react-simple-animate";
const skills = require("./data.json").DATA;

export const DATA = skills;
const Skills = () => {
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setPlay(true);
    }, 1000);
  }, []);

  return (
    <section id="skills">
      <span className="skillTitle">These are some of my key skills.</span>
      <Grid container spacing={2} xs={12}>
        {DATA.map((skill) => (
          <Grid item xs={12} sm={6} className="skillBlock">
            <h3>{skill.name}</h3>
            <Animate
              play={play}
              start={{ percent: 0 }}
              end={{ percent: skill.percentage }}
              duration={3}
              render={({ style }) => (
                <Line
                  percent={style.percent}
                  strokeWidth="2"
                  strokeColor="rgb(255, 208, 0)"
                  trailWidth="2"
                />
              )}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
