const axios = require("axios");
const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = process.env.API_TOKEN;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

module.exports = {
    axios: axiosInstance
};
