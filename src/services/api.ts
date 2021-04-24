import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plant-manager-json-server.herokuapp.com'
});

export default api;