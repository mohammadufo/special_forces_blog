import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    toast.error("Our Serever is Done !");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.put,
  put: axios.put,
  delete: axios.delete,
};
