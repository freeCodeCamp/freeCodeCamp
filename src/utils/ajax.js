import axios from 'axios';

function get(path) {
  return axios.get(`/external${path}`);
}

function post(path, body) {
  return axios.post(`/external${path}`, body);
}

function put(path, body) {
  return axios.put(`/external${path}`, body);
}

function sniff(things) {
  console.log(things);
  return things;
}

export function getSessionUser() {
  return get('/user/get-session-user').then(sniff);
}
