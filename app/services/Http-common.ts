import axios from "axios";
import { BASE_URL } from "../config";

let Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});


// Api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${
//     JSON.parse(localStorage.getItem("user"))?.access_token
//   }`;
//   return config;
// });

//* Response interceptor
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('user');
        // window.location.href = '/login';
      } else {
        return  error.response.data;
        console.log('Error:', error.response.data);
      }
    } else {
      return  error.response.data;
      console.log('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);


export default Api;
