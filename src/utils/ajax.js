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

function sniff(things) {
  console.log(things);
  return things;
}

export function getSessionUser() {
  return get('/user/get-session-user').then(sniff);
}

export function putUserAcceptsTerms(quincyEmails) {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email) {
  return put('/update-my-email', { email });
}
