import React, { useState } from "react";
import "../styles/Feedback.css";
import { useNavigate } from "react-router-dom";
import { createFeedback } from "../services/feedbackService";

function Feedback() {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    rating: 5,
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!feedback.experience || !feedback.message) {
    alert("Please complete all fields.");
    return;
  }

  try {
    await createFeedback(feedback);

    alert("🎉 Thank you for your feedback!");

    setFeedback({
      rating: 5,
      experience: "",
      message: "",
    });

    navigate("/dashboard");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Failed to submit feedback."
    );
  }
};

  return (
    <div className="feedback-page">

      <div className="feedback-card">

        <h1>⭐ Feedback</h1>

        <p>
          We value your opinion. Please share your experience.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Overall Rating</label>

          <select
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
          >
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Very Good</option>
            <option value="3">⭐⭐⭐ Good</option>
            <option value="2">⭐⭐ Fair</option>
            <option value="1">⭐ Poor</option>
          </select>

          <label>Experience</label>

          <select
            name="experience"
            value={feedback.experience}
            onChange={handleChange}
          >
            <option value="">Select Experience</option>
            <option>Excellent</option>
            <option>Very Good</option>
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>

          <label>Your Feedback</label>

          <textarea
            rows="6"
            name="message"
            placeholder="Write your feedback here..."
            value={feedback.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit Feedback
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

export default Feedback;