import axios from "axios";
import Cookies from "cookies-js";
const Api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json"
    }
})


Api.interceptors.request.use((config) => {
    const authToken = Cookies.get("authtoken");
    if (authToken) {
        config.headers.Authorization = `Token ${authToken}`

    }
    return config
})

export default Api;