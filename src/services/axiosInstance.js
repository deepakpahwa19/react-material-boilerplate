import axios from "axios";
import { BASE_URL } from "./api_contants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export default axiosInstance;
