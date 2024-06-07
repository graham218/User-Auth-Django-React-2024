import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const register = (username, email, password) => {
    return axios.post(API_URL + 'register/', {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios.post(API_URL + 'token/', {
        username,
        password,
    }).then(response => {
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
