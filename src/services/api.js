import axios from "axios";

const api = axios.create({
 baseURL: "https://pfs5backend.onrender.com/"
});

export default api;
