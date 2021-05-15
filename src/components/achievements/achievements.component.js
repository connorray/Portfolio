import React, { useContext } from "react";
import "./ae.styles.css";
import { achievementsList } from "./achievements";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ListOfAchievements() {
  const { isDark } = useContext(StyleContext);
  if (!achievementsList.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <div className="projects-container">
            {achievementsList.achievements.map((achievement, i) => {
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
                      {achievement.achievementName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {achievement.achievementDesc}
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
