import envData from '../../../config/env.json';
import Tokens from 'csrf';
import cookies from 'browser-cookies';

const { apiLocation } = envData as { apiLocation: string };

const base = apiLocation;
const tokens = new Tokens();

const defaultOptions: RequestInit = {
  credentials: 'include'
};

// _csrf is passed to the client as a cookie. Tokens are sent back to the server
// via headers:
function getCSRFToken() {
  const _csrf = typeof window !== 'undefined' && cookies.get('_csrf');
  if (!_csrf) {
    return '';
  } else {
    return tokens.create(_csrf);
  }
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${base}${path}`, defaultOptions);
  return (await res.json()) as Promise<T>;
}

export function post<T = void>(path: string, body: unknown): Promise<T> {
  return request('POST', path, body);
}

function put<T = void>(path: string, body: unknown): Promise<T> {
  return request('PUT', path, body);
}

async function request<T>(
  method: 'POST' | 'PUT',
  path: string,
  body: unknown
): Promise<T> {
  const options: RequestInit = {
    ...defaultOptions,
    method,
    headers: {
      'CSRF-Token': getCSRFToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  const res = await fetch(`${base}${path}`, options);
  return (await res.json()) as Promise<T>;
}

/** GET **/

export function getSessionUser() {
  return get('/user/get-session-user');
}

export function getUserProfile(username: string) {
  return get(`/api/users/get-public-profile?username=${username}`);
}

export function getShowCert(username: string, certSlug: string) {
  return get(`/certificate/showCert/${username}/${certSlug}`);
}

export function getUsernameExists(username: string): Promise<boolean> {
  return get(`/api/users/exists?username=${username}`);
}

export function getArticleById(shortId: string) {
  return get(`/n/${shortId}`);
}

/** POST **/

export function addDonation(body): Promise<void> {
  return post('/donate/add-donation', body);
}

export function postReportUser(body): Promise<void> {
  return post('/user/report-user', body);
}

export function postDeleteAccount(body): Promise<void> {
  return post('/account/delete', body);
}

export function postResetProgress(body): Promise<void> {
  return post('/account/reset-progress', body);
}

/** PUT **/

export function putUpdateMyAbout(values): Promise<void> {
  return put('/update-my-about', { ...values });
}

export function putUpdateMyUsername(username: string): Promise<void> {
  return put('/update-my-username', { username });
}

export function putUpdateMyProfileUI(profileUI): Promise<void> {
  return put('/update-my-profileui', { profileUI });
}

export function putUpdateUserFlag(update): Promise<void> {
  return put('/update-user-flag', update);
}

export function putUserAcceptsTerms(quincyEmails): Promise<void> {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email: string): Promise<void> {
  return put('/update-my-email', { email });
}

export function putVerifyCert(certSlug: string): Promise<void> {
  return put('/certificate/verify', { certSlug });
}
