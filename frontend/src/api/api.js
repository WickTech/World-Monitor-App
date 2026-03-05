import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? "http://localhost:5000" : "");

export const fetchMetrics = async () => {
  const response = await axios.get(`${API_URL}/api/metrics`);
  return response.data;
};
