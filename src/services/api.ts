import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const checkHealth = async () => {
    try {
        const response = await api.get('/health');
        return response.data;
    } catch (error) {
        console.error('API Health Check Failed:', error);
        return null;
    }
};

export const registerUser = async (userData: any) => {
    const response = await api.post('/users/register', userData);
    return response.data;
};

export const getUserByAadhaar = async (aadhaar: string) => {
    const response = await api.get(`/users/${aadhaar}`);
    return response.data;
};
