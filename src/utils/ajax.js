import axios from 'axios';

const base = '/internal';

function get(path) {
  return axios.get(`${base}${path}`);
}

function post(path, body) {
  return axios.post(`${base}${path}`, body);
}

function put(path, body) {
  return axios.put(`${base}${path}`, body);
}

export function getSessionUser() {
  return get('/user/get-session-user');
}

export function putUserAcceptsTerms(quincyEmails) {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email) {
  return put('/update-my-email', { email });
}
