import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import classes from "./Projects.module.css"; // Replace 'YourCSSFile' with the actual CSS file name

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projectsData = [
    {
      projectName: "Money tracking app",
      projectIcon: "/icons/dollar-sign.svg",
      projectLink: "https://github.com/lazare999/money-trackin-app",
    },
    {
      projectName: "Quiz site",
      projectIcon: "/icons/quiz (1).png",
      projectLink: "https://github.com/lazare999/project-1",
    },
  ];

  return (
    <div>
      <h1 className={`${classes.title} ${classes[theme]}`}>Projects</h1>
      <div className={`${classes.projectsContainer} ${classes[theme]}`}>
        {projectsData.map((project, index) => (
          <div key={index} className={classes.projects}>
            <img
              src={process.env.PUBLIC_URL + project.projectIcon}
              alt={`${project.projectName} icon`}
              className={classes.icon}
            />
            <p className={classes.project}>{project.projectName}</p>
            <a
              className={classes.projectLink}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.projectLink}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
