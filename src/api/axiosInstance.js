import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://content-eu-4.content-cms.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
