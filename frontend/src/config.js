// src/config.js
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://vrv-assignment-a6zw.onrender.com'
  : 'http://localhost:3000';

export default API_BASE_URL;