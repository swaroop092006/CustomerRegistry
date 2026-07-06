import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import { registerUser } from "../services/authService";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignup = async (e) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.mobile ||
    !formData.city ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!formData.terms) {
    alert("Please accept Terms & Conditions.");
    return;
  }

  try {
    await registerUser({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    alert("Account Created Successfully!");

    navigate("/");
  } catch (error) {
    alert(
      error.response?.data?.message || "Registration failed"
    );
  }
};

  return (
    <div className="signup-page">

      {/* Left Panel */}

      <div className="signup-left">

        <div className="branding">

          <h1>Customer Care Registry</h1>

          <h3>Create Your Account</h3>

          <p>
            Join our customer support platform and manage all your complaints,
            feedback and service requests from one place.
          </p>

          <div className="features">

            <div className="feature-box">✔ Raise Complaints Anytime</div>

            <div className="feature-box">✔ Track Complaint Progress</div>

            <div className="feature-box">✔ Secure Customer Account</div>

            <div className="feature-box">✔ Fast Customer Support</div>

            <div className="feature-box">✔ Email & SMS Updates</div>

          </div>

        </div>

      </div>

      {/* Right Panel */}

      <div className="signup-right">

        <div className="signup-card">

          <h2>Create Account</h2>

          <p className="subtitle">
            Fill your details to continue
          </p>

          <form onSubmit={handleSignup}>

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Mobile Number</label>

              <input
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-container">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>

              <div className="password-container">

                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="show-btn"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            <div className="terms">

              <label>

                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />

                I agree to the Terms & Conditions

              </label>

            </div>

            <button
              type="submit"
              className="signup-btn"
            >
              Create Account
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <div className="login-text">

            Already have an account?

            <Link to="/">
              {" "}Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;