import React, { useState } from "react";
import "../styles/sidebar.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ slide, setSlide }) => {
  console.log(slide);
  return (
    <aside id="slide__out-menu" className={slide === true ? "slide-out" : ""}>
      <div className="logo__menu-container">
        <div className="hamburger" onClick={() => setSlide(false)}>
          <FontAwesomeIcon icon={"fa-solid fa-bars"} size={"2x"} />
        </div>
        <div className="side-bar-logo">
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
      </div>
      <div className="menu">
        <nav className="nav-menu">
          <ul className="menu__list">
            <li className="menu__list-items-1 first">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-home"} size={"2x"} />
              </div>
              <h3>Home</h3>
            </li>
            <li className="menu__list-items-1">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-video"} size={"2x"} />
              </div>
              <h3>Shorts</h3>
            </li>
            <li className="menu__list-items-1">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-rotate"} size={"2x"} />
              </div>

              <h3>Subscription</h3>
            </li>
            <hr />
            <li className="menu__list-items-2 second">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-file"} size={"2x"} />
              </div>

              <h3>Library</h3>
            </li>
            <li className="menu__list-items-2">
              <div className="icon">
                <FontAwesomeIcon
                  icon={"fa-solid fa-clock-rotate-left"}
                  size={"2x"}
                />
              </div>

              <h3>History</h3>
            </li>
            <li className="menu__list-items-2">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-photo-film"} size={"2x"} />
              </div>
              <h3>Your videos</h3>
            </li>
            <li className="menu__list-items-2">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-clock"} size={"2x"} />
              </div>

              <h3>Watch later</h3>
            </li>
            <li className="menu__list-items-2">
              <div className="icon">
                <FontAwesomeIcon icon={"fa-solid fa-thumbs-up"} size={"2x"} />
              </div>

              <h3>Liked videos</h3>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
