import React, { useState, useEffect } from "react";
import StartupProject from "./projects.component";
import { StyleProvider } from "../../contexts/StyleContext";

export const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    setIsDark({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }, []);

  const changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  return (
    <div>
      <h1 className="welcome-title">Portfolio</h1>
      <StyleProvider
        value={{ isDark: { isDark }, changeTheme: { changeTheme } }}
      >
        <StartupProject />
      </StyleProvider>
    </div>
  );
};
