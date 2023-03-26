import axios from "axios";

import {API_BASE_URL} from "../config";

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.setAccessToken = (accessToken) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 401) {
            // This cause reload if the whole app, find better solution
            window.location.replace("/login");
            return Promise.resolve();
        } else {
            return Promise.reject(err);
        }
    });

export default api;