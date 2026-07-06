import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Notifications.css";

function Notifications() {

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Complaint Registered",
      message: "Your complaint CCR1001 has been registered successfully.",
      time: "Today • 10:30 AM",
      read: false,
    },
    {
      id: 2,
      title: "Complaint Assigned",
      message: "Support executive has been assigned to your complaint.",
      time: "Yesterday • 3:15 PM",
      read: false,
    },
    {
      id: 3,
      title: "Complaint Resolved",
      message: "Your complaint CCR0998 has been resolved successfully.",
      time: "15 Jul 2026",
      read: true,
    },
    {
      id: 4,
      title: "Feedback Reminder",
      message: "Please rate your recent complaint experience.",
      time: "14 Jul 2026",
      read: true,
    },
  ]);

  const markAllRead = () => {
    setNotifications(
      notifications.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-page">

      <div className="notification-container">

        <div className="notification-header">

          <div>
            <h1>🔔 Notifications</h1>
            <p>Stay updated with your complaint activities.</p>
          </div>

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

        </div>

        <div className="notification-actions">

          <button
            className="read-btn"
            onClick={markAllRead}
          >
            Mark All Read
          </button>

          <button
            className="clear-btn"
            onClick={clearNotifications}
          >
            Clear All
          </button>

        </div>

        {notifications.length === 0 ? (

          <div className="empty-box">
            <h2>🎉</h2>
            <p>No Notifications Available</p>
          </div>

        ) : (

          notifications.map((item) => (

            <div
              key={item.id}
              className={`notification-card ${item.read ? "read" : "unread"}`}
            >

              <div className="notification-left">

                <div className="notification-icon">
                  {item.read ? "✅" : "🔔"}
                </div>

              </div>

              <div className="notification-content">

                <h3>{item.title}</h3>

                <p>{item.message}</p>

                <span>{item.time}</span>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Notifications;