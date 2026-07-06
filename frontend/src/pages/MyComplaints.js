import React, { useEffect, useState } from "react";
import { getComplaints } from "../services/complaintService";
import { useNavigate } from "react-router-dom";
import "../styles/MyComplaints.css";

function MyComplaints() {

  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
  const fetchComplaints = async () => {
  try {
    const response = await getComplaints();

    console.log(response.data);   // <-- Add this

    setComplaints(response.data);
  } catch (error) {
    console.log(error);
    alert("Unable to load complaints.");
  }
};

  fetchComplaints();
}, []);

 
  return (
    <div className="complaints-page">

      <div className="complaints-container">

        <div className="page-header">

          <div>
            <h1>📋 My Complaints</h1>
            <p>View all your registered complaints.</p>
          </div>

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

        </div>

        <table className="complaints-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Complaint</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {complaints.map((item) => (

              <tr key={item._id}>

                <td>{item.complaintId}</td>

                <td>{item.subject}</td>

                

                <td>{item.category}</td>

                <td>-</td>

                <td>
                  <span className={`status ${item.status.replace(" ", "-").toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>

                <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/complaint/${item._id}`)}
                  >
                    View
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default MyComplaints;