import axios from "axios";
import Cookies from "cookies-js";
const Api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        'Content-Type': 'multipart/form-data',

    }
});



Api.interceptors.request.use((config) => {
    const authtoken = Cookies.get("authtoken");
    if (authtoken) {
        config.headers.Authorization = `Token ${authtoken}`
    }
    return config
})

export default Api;