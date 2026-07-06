import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import RegisterComplaint from "./pages/RegisterComplaint";
import MyComplaints from "./pages/MyComplaints";
import TrackComplaint from "./pages/TrackComplaint";
import ChatSupport from "./pages/ChatSupport";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/register-complaint" element={<RegisterComplaint />} />

        <Route path="/my-complaints" element={<MyComplaints />} />

        <Route path="/track-complaint" element={<TrackComplaint />} />

        <Route path="/chat-support" element={<ChatSupport />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;