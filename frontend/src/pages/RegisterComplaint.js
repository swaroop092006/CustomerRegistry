import React, { useState } from "react";
import "../styles/RegisterComplaint.css";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../services/complaintService";

function RegisterComplaint() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "Medium",
    description: "",
    contact: "Email",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    formData.title === "" ||
    formData.category === "" ||
    formData.description === ""
  ) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    await createComplaint({
  subject: formData.title,
  category: formData.category,
  priority: formData.priority,
  description: formData.description,
});
    alert("Complaint Registered Successfully!");

    setFormData({
      title: "",
      category: "",
      priority: "Medium",
      description: "",
      contact: "Email",
      image: null,
    });

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Failed to register complaint."
    );
  }
};
  return (
    <div className="register-page">

      <div className="register-container">

        <h1>📝 Register Complaint</h1>

        <p>
          Tell us about your issue and we'll help you resolve it.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Complaint Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter Complaint Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option>Banking</option>
              <option>Electricity</option>
              <option>Internet</option>
              <option>Water Supply</option>
              <option>Mobile Network</option>
              <option>Insurance</option>
              <option>Healthcare</option>
              <option>Gas</option>
              <option>Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority</label>

            <div className="priority-group">

              <label>
                <input
                  type="radio"
                  name="priority"
                  value="High"
                  checked={formData.priority === "High"}
                  onChange={handleChange}
                />
                High
              </label>

              <label>
                <input
                  type="radio"
                  name="priority"
                  value="Medium"
                  checked={formData.priority === "Medium"}
                  onChange={handleChange}
                />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  checked={formData.priority === "Low"}
                  onChange={handleChange}
                />
                Low
              </label>

            </div>

          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              placeholder="Describe your complaint..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Upload Image (Optional)</label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Preferred Contact</label>

            <select
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            >
              <option>Email</option>
              <option>Mobile</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Complaint
          </button>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterComplaint;
