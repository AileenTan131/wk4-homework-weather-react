import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      Coded by
      <a
        className="footer-links"
        href="https://www.linkedin.com/in/aileen-tan-878157b5/"
        target="_blank"
        rel="noreferrer"
      >
        Aileen Tan
      </a>
      ,
      <a
        className="footer-links"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Minim131/my-weather-app"
      >
        open-sourced on GitHub
      </a>
      and hosted on Netlify
    </div>
  );
}
