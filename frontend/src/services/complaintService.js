import axios from "axios";

const API = "http://localhost:5000/api/complaints";

export const createComplaint = (data) => {
  return axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getComplaints = () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getComplaintById = (id) => {
  return axios.get(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const getComplaintByComplaintId = (id) => {
  return axios.get(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};