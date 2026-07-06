import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ChatSupport.css";

function ChatSupport() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
  {
    sender: "AI Assistant",
    text: "👋 Hello! I'm your Customer Care AI Assistant. I can help you register complaints, track complaint status, explain services, and answer common questions.",
  },
]);

  const [input, setInput] = useState("");

  const handleSend = () => {
  if (input.trim() === "") return;

  const userMessage = {
    sender: "You",
    text: input,
  };

  let reply = "";

  const message = input.toLowerCase();

  if (
    message.includes("hi") ||
    message.includes("hello") ||
    message.includes("hey")
  ) {
    reply =
      "👋 Hello! Welcome to Customer Care Registry. How can I assist you today?";
  }

  else if (
    message.includes("internet") ||
    message.includes("wifi") ||
    message.includes("network")
  ) {
    reply =
      "🌐 It looks like you're facing an Internet issue. Please restart your modem/router. If the problem continues, register a complaint under the Internet category.";
  }

  else if (
    message.includes("electricity") ||
    message.includes("power")
  ) {
    reply =
      "⚡ For electricity-related issues, please check your main supply. If the issue continues, register an Electricity complaint.";
  }

  else if (
    message.includes("water")
  ) {
    reply =
      "💧 Water supply issues can be reported through the Register Complaint page by selecting the Water Supply category.";
  }

  else if (
    message.includes("bank") ||
    message.includes("transaction") ||
    message.includes("payment")
  ) {
    reply =
      "🏦 For banking issues, verify your transaction history. If the amount isn't reversed within 24 hours, register a Banking complaint.";
  }

  else if (
    message.includes("mobile") ||
    message.includes("sim")
  ) {
    reply =
      "📱 Please restart your phone and check your network signal. If the issue persists, register a Mobile Network complaint.";
  }

  else if (
    message.includes("register complaint") ||
    message.includes("new complaint")
  ) {
    reply =
      "📝 Go to Dashboard → Register Complaint. Fill in the required details and click Submit.";
  }

  else if (
    message.includes("track") ||
    message.includes("status")
  ) {
    reply =
      "🔍 Go to Dashboard → Track Complaint. Enter your Complaint ID (e.g., CCR1001) to check the latest status.";
  }

  else if (
    message.includes("feedback")
  ) {
    reply =
      "⭐ We value your feedback! Open the Feedback page from the Dashboard and share your experience.";
  }

  else if (
    message.includes("profile")
  ) {
    reply =
      "👤 You can update your personal details from the Profile page.";
  }

  else if (
    message.includes("otp")
  ) {
    reply =
      "📲 OTP is sent to your registered mobile number or email. Please check your inbox or SMS.";
  }

  else if (
    message.includes("thank")
  ) {
    reply =
      "😊 You're welcome! I'm always here to help.";
  }

  else if (
    message.includes("bye")
  ) {
    reply =
      "👋 Thank you for using Customer Care Registry. Have a wonderful day!";
  }

  else {
    reply =
      "🤖 I understand your concern. Please provide a few more details, or register a complaint if the issue requires technical support.";
  }

  const botMessage = {
    sender: "AI Assistant",
    text: reply,
  };

  setMessages((prev) => [...prev, userMessage, botMessage]);
  setInput("");
};
  return (
    <div className="chat-page">

      <div className="chat-container">

        <div className="chat-header">
          <h1>💬 Chat Support</h1>

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>
        </div>

        <div className="chat-box">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "You"
                  ? "message user"
                  : "message support"
              }
            >
              <strong>{msg.sender}</strong>
              <p>{msg.text}</p>
            </div>
          ))}

        </div>

        <div className="chat-input">

          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={handleSend}>
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChatSupport;