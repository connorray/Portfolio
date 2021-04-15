import React, { useContext } from "react";
import "./projects.styles.css";
import { bigProjects } from "./projects";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <hr className="line" />
          <h1 className="title">{bigProjects.title}</h1>
          <p className={isDark ? "dark-mode subtitle" : "subTitle subtitle"}>
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="text-light">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openProjectInNewWindow(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
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
