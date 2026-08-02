import axios from "axios";

// Toggle this line depending on what you're doing:
// - Local development: use localhost
// - Deploying live: use your Render backend URL
// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://itmultitechnical.onrender.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

export function authHeader() {
  const token = localStorage.getItem("adminToken");
  return { headers: { Authorization: `Bearer ${token}` } };
}