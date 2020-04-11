import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.jsonbin.io/b/5e914765172eb6438961e948' });

export default api;