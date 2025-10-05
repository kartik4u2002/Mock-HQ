// src/api.js
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const client = axios.create({
  baseURL: `${API_BASE}/api/auth`,
  headers: { "Content-Type": "application/json" },
});

export const signupRequest = (payload) => client.post("/signup", payload);
export const loginRequest = (payload) => client.post("/login", payload);
export default client;
