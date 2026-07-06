import axios from "axios";

const API = "http://localhost:5000/api/feedback";

export const createFeedback = (data) => {
  return axios.post(API, data);
};