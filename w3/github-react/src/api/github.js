import axios from 'axios';

const token = 'YOUR_TOKEN';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default githubApi;

