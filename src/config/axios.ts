import axios from 'axios';
import { API_ROOT } from './consts';

axios.defaults.baseURL = API_ROOT;
axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export function axiosSignIn(token: string) {
  axios.defaults.headers.common.authorization = `Basic ${token}`;
  localStorage.setItem('token', token);
}

export function axiosSignOut() {
  axios.defaults.headers.common.authorization = '';
  localStorage.clear();
}

export function axiosInitSignIn() {
  const token = localStorage.getItem('token');

  if (token) {
    axiosSignIn(token);

    return true;
  }

  return false;
}

export function getToken(login: string, password: string) {
  return window.btoa(`${login}:${password}`);
}
