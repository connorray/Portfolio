import React, { useState } from "react";
import "./header.styles.css";
import { Download } from "./resume.component";
import flowerImage from "../../assets/images/flowers.png";

export const Header = () => {
  const [emailCopyText, setEmailCopyText] = useState("Copy Email");

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("officialraymondyoo@gmail.com");
    setEmailCopyText("Email Copied!");
    setTimeout(() => setEmailCopyText("Copy Email"), 2000);
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Raymond Yoo | Personal Site</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400,500,700|Open+Sans:300,400,600,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.10.2/antd.min.css"
        integrity="sha512-0k6l55idMd6b8+Grtl95coLjV0ntfW8I3Ey0N/Sz57cN1hKGWgEDgiynLaPxnOzf9dN0IXZMuCxkWfWKT/zq4Q=="
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />

      <section className="preloading-banner-wrapper">
        <div className="flower-overlay top-right">
          <img src={flowerImage} alt="Flower top right" />
        </div>
        <div className="flower-overlay bottom-left">
          <img src={flowerImage} alt="Flower bottom left" />
        </div>
        <div className="banner-title-wrapper">
          <h1 className="welcome-title">Hello, I'm Ray.</h1>
          <div className="banner-buttons">
            <Download />
            <a
              className="banner-button btn btn-outline-dark"
              style={{ marginLeft: "10px" }}
              onClick={handleEmailCopy}
            >
              {emailCopyText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
