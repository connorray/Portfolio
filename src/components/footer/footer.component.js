import React, { useContext } from "react";
import "./footer.styles.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"dark-mode footer-text"}>
          {emoji("Thanks for stopping by! 👋")}
        </p>
        <p className={"dark-mode footer-text"}>
          Contact me: officialraymondyoo@gmail.com
        </p>
      </div>
    </Fade>
  );
}
