import axios from "axios";

const api = axios.create({
  baseURL: "https://jaummonster.pythonanywhere.com/",
});

export default api;
