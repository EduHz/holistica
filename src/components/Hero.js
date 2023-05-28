import React from "react";

import logo from "../assets/logo.svg";
import wallpaper from "../images/wallpaperflare.com_wallpaper.jpg";
import "./Hero.css";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <div className="image-container">
      <img className="background-image" src={wallpaper} alt="Background" />
    </div>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
