import envData from '../../../config/env.json';
import cookies from 'browser-cookies';

const { apiLocation } = envData;

const base = apiLocation;

const defaultOptions = {
  credentials: 'include'
};

// csrf_token is passed to the client as a cookie. The client must send
// this back as a header.
function getCSRFToken() {
  const token = typeof window !== 'undefined' && cookies.get('csrf_token');
  return token ?? '';
}

function get(path) {
  return fetch(`${base}${path}`, defaultOptions).then(res => res.json());
}

export function post(path, body) {
  return request('POST', path, body);
}

function put(path, body) {
  return request('PUT', path, body);
}

function request(method, path, body) {
  const options = {
    ...defaultOptions,
    method,
    headers: {
      'CSRF-Token': getCSRFToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(`${base}${path}`, options).then(res => res.json());
}

/** GET **/

export function getSessionUser() {
  return get('/user/get-session-user');
}

export function getUserProfile(username) {
  return get(`/api/users/get-public-profile?username=${username}`);
}

export function getShowCert(username, certSlug) {
  return get(`/certificate/showCert/${username}/${certSlug}`);
}

export function getUsernameExists(username) {
  return get(`/api/users/exists?username=${username}`);
}

export function getArticleById(shortId) {
  return get(`/n/${shortId}`);
}

/** POST **/

export function addDonation(body) {
  return post('/donate/add-donation', body);
}

export function postReportUser(body) {
  return post('/user/report-user', body);
}

export function postDeleteAccount(body) {
  return post('/account/delete', body);
}

export function postResetProgress(body) {
  return post('/account/reset-progress', body);
}

/** PUT **/

export function putUpdateMyAbout(values) {
  return put('/update-my-about', { ...values });
}

export function putUpdateMyUsername(username) {
  return put('/update-my-username', { username });
}

export function putUpdateMyProfileUI(profileUI) {
  return put('/update-my-profileui', { profileUI });
}

export function putUpdateUserFlag(update) {
  return put('/update-user-flag', update);
}

export function putUserAcceptsTerms(quincyEmails) {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email) {
  return put('/update-my-email', { email });
}

export function putVerifyCert(certSlug) {
  return put('/certificate/verify', { certSlug });
}
