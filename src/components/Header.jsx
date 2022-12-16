import React, { useState } from "react";
import "../styles/header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
// import { faBurger } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  const [slide, setSlide] = useState(false);
  return (
    <header>
      <div className="header-hamburger" onClick={() => setSlide(true)}>
        <FontAwesomeIcon icon={"fa-solid fa-bars"} size={"2x"} />
      </div>
      <div className="logo">
        <FontAwesomeIcon
          icon={"fa-brands fa-youtube"}
          size={"3x"}
          color={"red"}
        />
        <h1>
          YouTube
          <span>
            <sup>NG</sup>
          </span>
        </h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon
          className="s-btn"
          icon={"fa-solid fa-search"}
          size={"2x"}
        />
      </div>
      <div className="voice-search">
        <FontAwesomeIcon icon={"fa-solid fa-microphone"} size={"2x"} />
      </div>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={"fa-solid fa-video"} size={"2x"} />
          </li>
          <li>
            <FontAwesomeIcon icon={"fa-solid fa-bell"} size={"2x"} />
          </li>
          <li>
            <FontAwesomeIcon icon={"fa-solid fa-user"} size={"2x"} />
          </li>
        </ul>
      </nav>
      <br />
      <Sidebar slide={slide} setSlide={setSlide} />
    </header>
  );
};

export default Header;
