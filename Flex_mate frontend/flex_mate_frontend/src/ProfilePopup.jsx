import React, { useState } from "react";
import "./ProfilePopup.css"; 
import HirePopup from "./HirePopup"; // Import HirePopup Component

const ProfilePopup = ({ profile, onClose }) => {
  const [isHirePopupOpen, setHirePopupOpen] = useState(false);

  if (!profile) return null;

  return (
    <div className="profile-popup-overlay">
      <div className="profile-popup">
        <button className="close-popup" onClick={onClose}>×</button>
        <div className="popup-content">
          <div className="profile-header">
            <img className="profile-photo" src={profile.profilePhoto} alt={profile.name} />
            <div className="profile-info">
              <h2 className="profile-name">{profile.name}</h2>
              <div className="profile-location">
                <img className="location-icon" src={'https://cdn-icons-png.flaticon.com/128/14035/14035451.png'} alt="Location" />
                <span className="location-text">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="profile-skills">
            <div className="hire-name" onClick={() => setHirePopupOpen(true)}>
              Hire {profile.name}
            </div>
            <h3>Skills</h3>
            <div className="skills-list">
              {profile.categories?.map((category, index) => (
                <div className="skill-tag" key={index}>{category}</div>
              ))}
            </div>
          </div>

          {/* Work Section */}
          <div className="profile-work">
            <h3>Work</h3>
            <div className="work-images">
              {profile.images?.map((image, imgIndex) => (
                <img className="work-image" src={image} alt={`Work ${imgIndex + 1}`} key={imgIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HirePopup - Only opens when isHirePopupOpen is true */}
      {isHirePopupOpen && <HirePopup freelancerName={profile.name} onClose={() => setHirePopupOpen(false)} />}
    </div>
  );
};

export default ProfilePopup;
