import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    headers: {
        "Content-Type": "multipart/form-data", 
        "ngrok-skip-browser-warning": "69420"
    }
  });