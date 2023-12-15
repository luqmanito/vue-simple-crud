import axios from "axios";
import { KEY_TOKEN } from "@/const/CommonConst";

const HttpCommon = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

HttpCommon.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(KEY_TOKEN);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

HttpCommon.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // logout for expired token
      localStorage.clear();
      window.location.href = "/";
    } else if (error.response && error.response.status === 404) {
      // window.location.href = "/error/404";
      // console.log(error);
    }

    return Promise.reject(error);
  }
);

export default HttpCommon;
