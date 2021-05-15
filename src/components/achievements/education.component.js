import React, { useContext } from "react";
import "./ae.styles.css";
import { educationList } from "./education";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ListOfEducations() {
  const { isDark } = useContext(StyleContext);
  if (!educationList.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <hr className="line" />
          <div className="projects-container">
            {educationList.educations.map((education, i) => {
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
                      style={{ textAlign: "left" }}
                    >
                      {education.schoolName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                      style={{ "white-space": "pre-line", textAlign: "left" }}
                    >
                      {education.gpa}
                      {/* {"\n"} */}
                      {education.major}
                      {/* {"\n"} */}
                      {education.coursework}
                      {/* {"\n"} */}
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
