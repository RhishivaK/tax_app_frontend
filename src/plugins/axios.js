import axios from 'axios';
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return '';
}

const config = {
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
    'X-CSRFToken': getCookie('csrftoken')
  }
}

export const authAxios = axios.create(config);
