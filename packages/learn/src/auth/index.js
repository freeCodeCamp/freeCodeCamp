import auth0 from 'auth0-js';
import { navigateTo } from 'gatsby-link';

import { ajax$ } from '../templates/Challenges/utils/ajax-stream';

const AUTH0_DOMAIN = 'freecodecamp.auth0.com';
const AUTH0_CLIENT_ID = 'vF70CJZyPKbZR4y0avecXXLkfyMNnyKn';

export default class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);

    this.sessionEmail = '';
  }

  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: 'http://localhost:8000/callback',
    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
  }

  handleAuthentication() {
    if (typeof window !== 'undefined') {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
        } else if (err) {
          console.error(err);
        }

        // Return to the homepage after authentication.
        navigateTo('/');
      });
    }
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const isAuth = new Date().getTime() < expiresAt;

    // isAuth && this.getFCCUser();
    return isAuth;
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 9000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
      if (err) {
        console.error(err);
      }
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  getFCCUser() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      console.warn('no token found');
    }
    const { email } = JSON.parse(localStorage.getItem('user'));
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const body = { email };
    ajax$({
      url: '/api/auth/auth0/login',
      headers,
      body
    }).subscribe(
      resp => {
        console.info('YES');
        console.log(resp);
      },
      err => {
        console.warn('NO?');
        console.log(err.message);
      },
      () => {
        console.log('done');
      }
    );
  }

  getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return null;
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name;
    }
    return null;
  }
}
