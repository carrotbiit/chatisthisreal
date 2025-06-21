// API Configuration
const config = {
  development: {
    apiUrl: 'http://localhost:5000'
  },
  production: {
    apiUrl: 'https://your-backend-app-name.onrender.com' // Replace with your actual Render URL
  }
};

const environment = import.meta.env.MODE || 'development';
export const API_BASE_URL = config[environment].apiUrl; 