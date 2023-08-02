import React from "react";
import "./footer.styles.css";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"dark-mode footer-text"}>Thanks for stopping by! 👋</p>
        <p className={"dark-mode footer-text"}>
          Contact me: officialraymondyoo@gmail.com
        </p>
      </div>
    </Fade>
  );
}
