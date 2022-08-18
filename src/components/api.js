import axios from "axios";

const apiProducts = axios.create({
    baseURL: "http://127.0.1:4000/api/",
    
})
export default apiProducts