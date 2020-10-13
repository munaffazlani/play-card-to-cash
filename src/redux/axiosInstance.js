import axios from "axios";
import { message } from "antd";

const proxy = "https://cors-anywhere.herokuapp.com/";
const baseURL = "http://ec2-54-237-15-67.compute-1.amazonaws.com:3000/api/v1/";
const localhost = "http://localhost:3001/api";
const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
// SECTION - AXIOS INSTANCE

// Axios NoAuth Instance
export const axiosInstance = axios.create({
  baseURL: proxy + baseURL,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

// Axios Auth Instance
export const axiosAuthInstance = axios.create({
  baseURL: proxy + baseURL,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

// Axios Auth Instance
export const axiosAuthInstanceLocal = axios.create({
  baseURL: localhost,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

export const axiosGoogleAuthInstance = axios.create({
  baseURL: oauth2Endpoint,
  params:{
    client_id:
      "763549019844-s6kgkjr9uiimhfdlp9vgsq9cambhhssg.apps.googleusercontent.com",
    redirect_uri: "http://localhost:3000/verifying",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
    include_granted_scopes: "true",
    state: "pass-through value",
  },
  
});

// SECTION - API URLS
export const apiUrl = {
  LOGIN: "/auth",
  FORGOT_PASSWORD: "/forgetpassword",
  CHANGE_PASSWORD: "/changepassword",
  LOGOUT: "/logout",
  GET_PROFILE: "/getprofile",
  UPDATE_PROFILE: "/updateprofile",
  GET_USER: "users/getallusers",
  DELETE_USER: "users/deleteuser",
  UPDATE_USER: "users/updateuser",
  ADD_USER: "users/adduser",
  GET_INTERPRETERS: "interpreters/getallinterpreters",
  DELETE_INTERPRETER: "interpreters/deleteinterpreter",
  ADD_INTERPRETER: "interpreters/addinterpreters",
  UPDATE_INTERPRETER: "users/updateinterpreter",
  GET_PLANS: "plans/getallplans",
  DELETE_PLAN: "plans/deleteplan",
  UPDATE_PLAN: "plans/updateplan",
  ADD_NEW_PLAN: "plans/deleteplan",
};

// Intrceptors for Axios NoAuth Instance - Response
axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { data } = error.response;
    if (data && data.message) {
      message.error(data.message);
    }
    return Promise.reject(error);
  }
);

// Intrceptors for Axios auth Instance - for request - for adding token from sesssion storage

axiosAuthInstance.interceptors.request.use((config) => {
  const accessToken =
    localStorage.getItem("user_token") || sessionStorage.getItem("user_token");
  config.headers["Authorization"] = accessToken ? `Bearer ${accessToken}` : "";
  return config;
});
axiosAuthInstanceLocal.interceptors.request.use((config) => {
  const accessToken =
    localStorage.getItem("user_token") || sessionStorage.getItem("user_token");
  config.headers["Authorization"] = accessToken ? `Bearer ${accessToken}` : "";
  return config;
});
