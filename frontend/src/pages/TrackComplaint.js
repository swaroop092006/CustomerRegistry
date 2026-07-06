import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getComplaintById } from "../services/complaintService";
import "../styles/TrackComplaint.css";

function TrackComplaint() {
  const navigate = useNavigate();

  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);

  

  const handleTrack = async () => {
  try {
    const response = await getComplaintById(complaintId);

    const data = response.data;

    setComplaint({
      id: data._id,
      title: data.subject,
      category: "-",
      priority: "-",
      status: data.status,
      date: new Date(data.createdAt).toLocaleDateString(),
      progress:
        data.status === "Pending"
          ? 25
          : data.status === "In Progress"
          ? 65
          : 100,
    });

  } catch (error) {
    alert("Complaint not found.");
    setComplaint(null);
  }
};

  return (
    
    
    <div className="track-page">

      <div className="track-container">

        <div className="track-header">
          <h1>🔍 Track Complaint</h1>
          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>
        </div>
        

        <p className="subtitle">
          Enter your Complaint ID to check the latest status.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter Complaint ID"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
          />

          <button onClick={handleTrack}>
            Track
          </button>

        </div>

        {complaint && (

          <div className="result-card">

            <h2>{complaint.title}</h2>

            <div className="details">

              <p><strong>Complaint ID:</strong> {complaint.id}</p>

              <p><strong>Category:</strong> {complaint.category}</p>

              <p><strong>Priority:</strong> {complaint.priority}</p>

              <p><strong>Status:</strong> {complaint.status}</p>

              <p><strong>Date:</strong> {complaint.date}</p>

            </div>

            <h3>Progress</h3>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: `${complaint.progress}%` }}
              ></div>

            </div>

            <p>{complaint.progress}% Completed</p>

            <div className="timeline">

              <div className="step active">✔ Registered</div>

              <div className="step active">✔ Assigned</div>

              <div className={complaint.progress >= 65 ? "step active" : "step"}>
                ✔ Under Review
              </div>

              <div className={complaint.progress === 100 ? "step active" : "step"}>
                ✔ Resolved
                <div className="status-message">

  {complaint.status === "Pending" && (
    <p style={{ color: "#ff9800", fontWeight: "bold" }}>
      🟡 Your complaint has been registered successfully and is waiting to be assigned.
    </p>
  )}

  {complaint.status === "In Progress" && (
    <p style={{ color: "#2196f3", fontWeight: "bold" }}>
      🔵 Your complaint is in progress. Our support team is working on it. It will be updated soon.
    </p>
  )}

  {complaint.status === "Resolved" && (
    <p style={{ color: "green", fontWeight: "bold" }}>
      ✅ Your complaint has been resolved successfully. Thank you for your patience.
    </p>
  )}

  {complaint.status === "Rejected" && (
    <p style={{ color: "red", fontWeight: "bold" }}>
      ❌ Your complaint could not be processed. Please contact customer support for more information.
    </p>
  )}

</div>
              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default TrackComplaint;