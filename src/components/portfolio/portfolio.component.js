import React, { useState, useEffect } from "react";
import StartupProject from "./projects.component";
import { StyleProvider } from "../../contexts/StyleContext";

export const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDark");
    if (storedTheme === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(darkPref.matches);
      localStorage.setItem("isDark", darkPref.matches);
    } else {
      setIsDark(JSON.parse(storedTheme));
    }
  }, []);

  const changeTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      localStorage.setItem("isDark", JSON.stringify(newIsDark));
      return newIsDark;
    });
  };

  return (
    <div className="portfolio-container">
      <h1 className="welcome-title">Portfolio</h1>
      <StyleProvider value={{ isDark, changeTheme }}>
        <StartupProject />
      </StyleProvider>
    </div>
  );
};
