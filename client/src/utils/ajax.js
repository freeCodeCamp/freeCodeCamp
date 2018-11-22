import axios from 'axios';
import qs from 'query-string';

const base = '/internal';

function get(path) {
  return axios.get(`${base}${path}`);
}

export function post(path, body) {
  return axios.post(`${base}${path}`, body);
}

function put(path, body) {
  return axios.put(`${base}${path}`, body);
}

// function del(path) {
//   return axios.delete(`${base}${path}`);
// }

/** GET **/

export function getSessionUser() {
  return get('/user/get-session-user');
}

export function getIdToNameMap() {
  return get('/api/challenges/get-id-to-name');
}

export function getUserProfile(username) {
  return get(`/api/users/get-public-profile?username=${username}`);
}

export function getShowCert(username, cert) {
  return get(`/certificate/showCert/${username}/${cert}`);
}

export function getUsernameExists(username) {
  return get(`/api/users/exists?username=${username}`);
}

export function getArticleById(shortId) {
  return get(
    `/n/${shortId}`
  );
}

export function getFeaturedList(skip = 0) {
  return get(
    `/api/articles?${qs.stringify({
      filter: JSON.stringify({
        where: { featured: true, published: true },
        order: 'firstPublishedDate DESC',
        limit: 10,
        skip
      })
    })}`
  );
}

/** POST **/

export function postPopularityEvent(event) {
  return post('/p', event);
}

export function postReportUser(body) {
  return post('/user/report-user', body);
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

export function putVerifyCert(superBlock) {
  return put('/certificate/verify', { superBlock });
}

/** DELETE **/
