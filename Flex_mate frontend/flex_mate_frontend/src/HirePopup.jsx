import React, { useState } from "react";
import "./HirePopup.css";

const HirePopup = ({ freelancerName, onClose }) => {
  const [formData, setFormData] = useState({
    hiringFor: "",
    categories: "",
    budget: "",
    projectDescription: "",
    personalNote: "",
    projectType: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hiring Details:", formData);
    onClose();
  };

  return (
    <div className="hire-popup-overlay">
      <div className="hire-popup">
        <button className="close-popup" onClick={onClose}>×</button>
        <h2>Hire {freelancerName}</h2>
        
        <form onSubmit={handleSubmit}>
          {/* What are you hiring for? */}
          <label>What are you hiring for?</label>
          <input type="text" name="hiringFor" value={formData.hiringFor} onChange={handleChange} required />

          {/* Categories Dropdown */}
          <label>Select a Category:</label>
          <select name="categories" value={formData.categories} onChange={handleChange} required>
            <option value="" disabled>Select a category</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="SEO">SEO</option>
            <option value="Marketing">Marketing</option>
            <option value="Content Writing">Content Writing</option>
          </select>

          {/* Budget */}
          <label>What is your budget?(in rupees)</label>
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />

          {/* Project Description */}
          <label>Project Description</label>
          <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />

          {/* Personal Note */}
          <label>Add a personal note to {freelancerName}</label>
          <textarea name="personalNote" value={formData.personalNote} onChange={handleChange} />

          {/* Project Type - Radio Buttons */}
          <label>Project Type</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="projectType" className="personal-project" value="Personal Project" checked={formData.projectType === "Personal Project"} onChange={handleChange} required />
              Personal 
            </label>
            <label>
              <input type="radio" name="projectType" value="Company" checked={formData.projectType === "Company"} onChange={handleChange} required />
              Company
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HirePopup;
