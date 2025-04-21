import React from "react";
import Pdf from "./RaymondYoo.pdf";
import UpdatedPDF from "./RaymondYooApr25.pdf";

export const Download = () => {
  return (
    <>
      <a
        className="banner-button btn btn-outline-dark"
        href={UpdatedPDF}
        target="_blank"
      >
        Resume
      </a>
    </>
  );
};
