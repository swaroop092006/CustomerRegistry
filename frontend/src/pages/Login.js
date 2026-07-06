import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ================= LOGIN =================

  const handleLogin = async (e) => {
    e.preventDefault();

    if (
      loginData.username.trim() === "" ||
      loginData.password.trim() === ""
    ) {
      alert("Please enter Email and Password");
      return;
    }

    try {
      const response = await loginUser({
        email: loginData.username,
        password: loginData.password,
      });

      console.log(response);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  // ================= OTP =================

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter valid mobile number");
      return;
    }

    setOtpSent(true);
    alert("OTP Sent Successfully");
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    alert("OTP Verified");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <div className="branding">
          <h1>Customer Care Registry</h1>

          <h3>Your Customer Care Companion</h3>

          <p>
            A smart platform that helps customers register complaints,
            track complaint status, receive updates and communicate
            directly with support teams.
          </p>

          <div className="features">
            <div className="feature-box">✔ Register Complaints Easily</div>
            <div className="feature-box">✔ Track Complaint Status</div>
            <div className="feature-box">✔ Email & SMS Notifications</div>
            <div className="feature-box">✔ Secure OTP Login</div>
            <div className="feature-box">✔ 24×7 Customer Support</div>
          </div>
        </div>
      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p className="subtitle">
            Login to continue to your account
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email or Mobile Number</label>

              <input
                type="text"
                name="username"
                placeholder="Enter Email or Mobile"
                value={loginData.username}
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
                  value={loginData.password}
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

            <div className="login-options">

              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={loginData.remember}
                  onChange={handleChange}
                />
                Remember Me
              </label>

              <button type="button" className="link-btn">
                Forgot Password?
              </button>

            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            className="otp-btn"
            onClick={() => setShowOtpModal(true)}
          >
            📱 Login with OTP
          </button>

          <button className="google-btn">
            Continue with Google
          </button>

          <div className="signup-text">
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </div>

        </div>

      </div>

      {showOtpModal && (
        <div className="modal-overlay">

          <div className="otp-modal">

            <h2>Login using OTP</h2>

            <p>Enter your registered mobile number.</p>

            <input
              type="text"
              placeholder="Mobile Number"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            {!otpSent ? (
              <button
                className="send-btn"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  maxLength="6"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  className="verify-btn"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </>
            )}

            <button
              className="close-btn"
              onClick={() => {
                setShowOtpModal(false);
                setOtpSent(false);
                setMobile("");
                setOtp("");
              }}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Login;

