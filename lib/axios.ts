import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.api.evlepo.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// You can add interceptors here if needed (e.g., for error handling or adding auth tokens)
// apiClient.interceptors.request.use(config => {
//   // Do something before request is sent
//   return config;
// }, error => {
//   // Do something with request error
//   return Promise.reject(error);
// });

// apiClient.interceptors.response.use(response => {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   return response;
// }, error => {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   return Promise.reject(error);
// });

export default apiClient;
