import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vYjk3OGY5NmUtN2Y5ZC00NjkyLWJiZWItZWY4YTUzZjg2YzM0LmpwZWc.webp"
          alt="Profile"
          className="profile-img"
        />
      </div>

      <div className="profile-details">
        <div className="profile-header">
          <div>
            <h2 className="profile-name">Alan Wake</h2>
            <p className="profile-title">Writer, Protagonist</p>
          </div>
          <div className="status">Offline</div>
        </div>

        <div className="bio-section">
          <h3>Bio</h3>
          <p>
          Alan Wake is a famous writer of suspense best-sellers. In search of inspiration,
           Alan travels with his wife Alice to the town of Bright Falls, where mysterious
            events start to occur. He becomes involved in a struggle to rescue Alice and
             uncover the dark and terrifying truth behind the paranormal phenomena
              surrounding the town. The engaging narrative and psychological horror
               make him an iconic character in suspense games.
          </p>
        </div>

        <div className="location-section">
          <h3>Location</h3>
          <p>Bright Falls, Washington</p>
        </div>

        <button className="message-btn">Send a Message</button>
      </div>

      <div className="extras">
        <div className="social-icons">
          <button className="fab fa-facebook"></button>
          <button className="fab fa-twitter"></button>
          <button className="fab fa-instagram"></button>
          <button className="fab fa-linkedin"></button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
