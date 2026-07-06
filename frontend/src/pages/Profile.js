import React, { useState } from "react";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "Hyderabad, Telangana",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("Profile Updated Successfully!");
    setEditing(false);
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-top">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-image"
          />

          <h2>{user.name}</h2>

          <p>Customer</p>

        </div>

        <div className="profile-body">

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={user.name}
            disabled={!editing}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={user.email}
            disabled={!editing}
            onChange={handleChange}
          />

          <label>Mobile Number</label>

          <input
            type="text"
            name="phone"
            value={user.phone}
            disabled={!editing}
            onChange={handleChange}
          />

          <label>Address</label>

          <textarea
            rows="3"
            name="address"
            value={user.address}
            disabled={!editing}
            onChange={handleChange}
          />

        </div>

        <div className="profile-buttons">

          {!editing ? (
            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="save-btn"
              onClick={saveProfile}
            >
              Save Changes
            </button>
          )}
          

          <button
            className="password-btn"
            onClick={() => alert("Change Password Feature Coming Soon")}
          >
            Change Password
          </button>

          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >

            Logout
          </button>
          <button
  className="back-btn"
  onClick={() => navigate("/dashboard")}
>
  ← Back to Dashboard
</button>

        </div>

      </div>

    </div>
  );
}

export default Profile;