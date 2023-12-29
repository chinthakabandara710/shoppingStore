import React, { useState } from "react";
import "../App.css";
import introVideo from "../videos/intro.mp4";
import { FaFacebookMessenger } from "react-icons/fa";

const now = new Date().toLocaleTimeString("en-GB");

const HeroSection = () => {
  const [time, setTime] = useState(now);
  function updateTime() {
    let newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  console.log(time);

  return (
    <div className="hero-container">
      <video src={introVideo} autoPlay loop muted></video>
      <div className="mt-5">
        <h1 className="hero-container-heading">Happiness is Shopping... </h1>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      <div className="hero-btns"></div>
      <h5 className="hero-time" onClick={updateTime}>
        {time}
      </h5>

      <div className="notification">
        <FaFacebookMessenger />
      </div>
    </div>
  );
};

export default HeroSection;
