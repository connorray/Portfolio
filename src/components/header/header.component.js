import React, { useState } from "react";
import "./header.styles.css";
import { Download } from "./resume.component";

// TODO: link the buttons
export const Header = () => {
  const [emailCopyText, setEmailCopyText] = useState("Copy Email");
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Raymond Yoo | Personal Site</title>
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
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
      <link rel="stylesheet" href="./styles.css" />
      <section className="preloading-banner-wrapper">
        <div className="sphere sphere1" />
        <div className="sphere sphere2" />
        <div className="sphere sphere3" />
        <div className="sphere sphere4" />
        <div className="sphere sphere5" />
        <div className="banner-title-wrapper">
          <h1 className="welcome-title">Hi there!</h1>
          <div className="banner-buttons">
            {/* Opens the pdf file in a new tab on click */}
            <Download />
            <a
              className="banner-button btn btn-outline-dark"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                navigator.clipboard.writeText("officialraymondyoo@gmail.com");
                setEmailCopyText("Email Copied!");
                setTimeout(() => {
                  setEmailCopyText("Copy Email");
                }, 2000);
              }}
            >
              {emailCopyText}
            </a>
            {/* <a
              className="banner-button btn btn-outline-dark"
              style={{ marginLeft: "10px" }}
              href="https:raymondyoo.com/blog"
              target="_blank"
            >
              Blog
            </a>
            <a
              className="banner-button btn btn-outline-dark"
              style={{ marginLeft: "10px" }}
              href="https:raymondyoo.com"
              target="_blank"
            >
              About Me
            </a> */}
          </div>
        </div>
      </section>

      {/* <section className="overview-section">
        <div className="section-title-wrapper">
          <h1 className="section-title">I'm Ray.</h1>
          <hr />
        </div>
        <div className="ant-row">
          <div className="ant-col ant-col-xs-12 ant-col-xs-order-2 ant-col-xs-offset-6 ant-col-lg-8 ant-col-lg-order-1 ant-col-lg-offset-0">
            <img
              className="image profile-image"
              alt="Raymond Yoo"
              src="./ProfilePictureSmaller.jpg"
            />
            <p className="section-body">
              I am an aspiring full-stack software engineer with interests in
              machine learning, specifically natural language processing (NLP).
              I graduated from Cornell University in December 2018 with a BS in
              computer science and a minor in business. I'm currently a master's
              student in the Princeton University CS department. Over the past 6
              years, I've explored numerous fields from iOS app development,
              interactive voice response systems for taxi dispatching,
              commercial banking, data pipelines, search systems, and so much
              more. More recently, I've spent a lot of time working in React,
              ES6 JavaScript, PyTorch, Python, and Java.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};
