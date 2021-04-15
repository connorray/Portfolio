import React from "react";
import Pdf from "./RaymondYoo.pdf";

export const Download = () => {
  return (
    <>
      <a
        className="banner-button btn btn-outline-dark"
        href={Pdf}
        target="_blank"
      >
        Resume
      </a>
    </>
  );
};
