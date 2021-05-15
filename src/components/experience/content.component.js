import React, { useContext } from "react";
import "./experience.styles.css";
import { experiencesList } from "./content";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ListOfExperiences() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  if (!experiencesList.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <hr className="line" />
          <h1 className="title">{experiencesList.title}</h1>

          <div className="projects-container">
            {experiencesList.experiences.map((experience, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <div className="text-light">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {experience.experienceName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {experience.experienceDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
