import React from "react";
import "../styles/video-card.style.css";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";

const VideoCard = () => {
  return (
    <section id="video-card-container">
      <div className="card-sections">
        <div className="card-container">
          <div className="img-container">
            <img src={Img1} alt="video" />
          </div>
          <div className="video-title">
            <div className="profile-img">
              <img src={Img1} alt="" />
              <h1>How to read Dickson's chat</h1>
            </div>

            <div className="video-details">
              <h3>Kevin Powell</h3>
              <p>
                1.3M views<span> . 1 month ago </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={Img2} alt="video" />
          </div>
          <div className="video-title">
            <div className="profile-img">
              <img src={Img1} alt="" />
              <h1>How to make Dev Femi Badmus give me N200, 000</h1>
            </div>
            <div className="video-details">
              <h3>Kevin Powell</h3>
              <p>
                1.3M views<span> . 1 month ago </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={Img3} alt="video" />
          </div>
          <div className="video-title">
            <div className="profile-img">
              <img src={Img3} alt="" />
              <h1>7 Ways to make your code neat</h1>
            </div>
            <div className="video-details">
              <h3>Kevin Powell</h3>
              <p>
                1.3M views<span> . 1 month ago </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-sections">
        <div className="card-container">
          <div className="img-container">
            <img src={Img1} alt="video" />
          </div>
          <div className="video-title">
            <div className="profile-img">
              <img src={Img1} alt="" />
              <h1>How to read Dickson's chat</h1>
            </div>

            <div className="video-details">
              <h3>Kevin Powell</h3>
              <p>
                1.3M views<span> . 1 month ago </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={Img2} alt="video" />
          </div>
          <div className="video-title">
            <div className="profile-img">
              <img src={Img1} alt="" />
              <h1>How to make Dev Femi Badmus give me N200, 000</h1>
            </div>
            <div className="video-details">
              <h3>Kevin Powell</h3>
              <p>
                1.3M views<span> . 1 month ago </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={Img3} alt="video" />
          </div>
          <div className="video-title">
            <div className="profile-img">
              <img src={Img3} alt="" />
              <h1>7 Ways to make your code neat</h1>
            </div>
            <div className="video-details">
              <h3>Kevin Powell</h3>
              <p>
                1.3M views<span> . 1 month ago </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
