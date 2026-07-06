import React, { useEffect, useState } from "react";
import { getComplaints } from "../services/complaintService";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
  const fetchComplaints = async () => {
    try {
      const response = await getComplaints();
      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchComplaints();
}, []);

  

  return (
    <div className="dashboard">

      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h1>Customer Care Registry</h1>
          <p>Your Customer Care Companion</p>
        </div>

        <div className="header-icons">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">👤</button>
        </div>
      </header>

      {/* Welcome */}
      <section className="welcome-card">
        <h2>👋 Welcome Back!</h2>
        <p>
          We are here to help you manage and track your complaints easily.
        </p>
      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card pending">
          <h3>Pending</h3>
          <span>{complaints.filter(c => c.status === "Pending").length}</span>
        </div>

        <div className="stat-card progress">
          <h3>In Progress</h3>
          <span>{complaints.filter(c => c.status === "In Progress").length}</span>
        </div>

        <div className="stat-card resolved">
          <h3>Resolved</h3>
          <span>{complaints.filter(c => c.status === "Resolved").length}</span>
        </div>

        <div className="stat-card rejected">
          <h3>Rejected</h3>
          <span>0</span>
        </div>

      </section>

      {/* Quick Actions */}

      <section>

        <h2 className="section-title">Quick Actions</h2>

        <div className="actions">

          <div
            className="action-card"
            onClick={() => navigate("/register-complaint")}
            style={{ cursor: "pointer" }}
          >
            <div className="emoji">📝</div>
            <h3>Register Complaint</h3>
            <p>Create a new complaint.</p>
          </div>
          <div
    className="action-card"
    onClick={() => navigate("/notifications")}
    style={{ cursor: "pointer" }}
>
    <div className="emoji">🔔</div>
    <h3>Notifications</h3>
    <p>View recent updates.</p>
</div>

          <div
            className="action-card"
            onClick={() => navigate("/my-complaints")}
            style={{ cursor: "pointer" }}
          >
            <div className="emoji">📋</div>
            <h3>My Complaints</h3>
            <p>View complaint history.</p>
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/track-complaint")}
            style={{ cursor: "pointer" }}
          >
            <div className="emoji">🔍</div>
            <h3>Track Complaint</h3>
            <p>Track complaint status.</p>
          </div>

          <div
  className="action-card"
  onClick={() => navigate("/chat-support")}
  style={{ cursor: "pointer" }}
>
  <div className="emoji">💬</div>
  <h3>Chat Support</h3>
  <p>Talk to our support team.</p>
</div>

          <div
  className="action-card"
  onClick={() => navigate("/feedback")}
  style={{ cursor: "pointer" }}
>
  <div className="emoji">⭐</div>
  <h3>Feedback</h3>
  <p>Share your experience.</p>
</div>

          <div
            className="action-card"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          >
            <div className="emoji">👤</div>
            <h3>Profile</h3>
            <p>Manage your account.</p>
          </div>

        </div>

      </section>

      {/* Recent Complaints */}

      <section>

        <h2 className="section-title">Recent Complaints</h2>

        <table className="complaint-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Complaint</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {complaints.map((item) => (

              <tr key={item.id}>

                <td>{item._id.slice(-6)}</td>

                <td>{item.subject}</td>

                <td>
                  <span
                    className={
                      item.status === "Pending"
                        ? "status-pending"
                        : item.status === "In Progress"
                        ? "status-progress"
                        : item.status === "Resolved"
                        ? "status-resolved"
                        : "status-rejected"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>-</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                

              </tr>

            ))}

          </tbody>

        </table>

      </section>

      {/* Bottom Navigation */}

      <footer className="bottom-nav">

  <div
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/dashboard")}
  >
    🏠<br />
    Home
  </div>

  <div
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/register-complaint")}
  >
    📝<br />
    Complaint
  </div>

  <div
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/notifications")}
  >
    🔔<br />
    Notification
  </div>

  <div
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/profile")}
  >
    👤<br />
    Profile
  </div>

</footer>

    </div>
  );
}

export default Dashboard;