import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "Application/json",
  },
  withCredentials: true,
});
instance.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem("userToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
