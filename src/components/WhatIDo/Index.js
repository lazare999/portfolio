import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import classes from "./WhatIDo.module.css";

const WhatIDo = () => {
  const { theme } = useContext(ThemeContext);
  const workBox = [
    {
      text: "Software\nDevelopment",
      iconPath: "/icons/vector.svg",
    },
    {
      text: "Web\nDevelopment",
      iconPath: "/icons/vector (1).svg",
    },
    {
      text: "Web\nDesign",
      iconPath: "/icons/vector (2).svg",
    },
  ];

  const skillsBox = [
    {
      percent: "50%",
      skill: "HTML",
    },
    {
      percent: "20%",
      skill: "CSS",
    },
    {
      percent: "10%",
      skill: "JAVASCRIPT",
    },
    {
      percent: "2%",
      skill: "REACT",
    },
  ];

  return (
    <div>
      <h1 className={`${classes.title} ${classes[theme]}`}>What I do</h1>
      <div className={`${classes.container} ${classes[theme]}`}>
        {workBox.map((box, index) => (
          <div key={index} className={classes.workBox}>
            <img
              src={process.env.PUBLIC_URL + box.iconPath}
              alt="icons"
              className={classes.icon}
            />
            <p className={classes.boxText}>{box.text}</p>
          </div>
        ))}
      </div>
      <h1 className={`${classes.title} ${classes[theme]}`}>My Skills</h1>
      <div className={`${classes.skillsBox} ${classes[theme]}`}>
        <div className={classes.skillContainer}>
          {skillsBox.map((skill, index) => (
            <div key={index} className={classes.skills}>
              <p className={classes.percent}>{skill.percent}</p>
              <p className={classes.skill}>{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
