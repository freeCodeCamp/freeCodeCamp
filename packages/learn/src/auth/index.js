/* global AUTH0_DOMAIN AUTH0_CLIENT_ID AUTH0_NAMESPACE*/
import auth0 from 'auth0-js/build/auth0';
import { navigateTo } from 'gatsby-link';

const namespace = AUTH0_NAMESPACE;
const domain = AUTH0_DOMAIN;
const clientID = AUTH0_CLIENT_ID;

class Auth {
  constructor() {
  this.auth0 = new auth0.WebAuth({
    domain,
    clientID,
    redirectUri: `${
      typeof window !== 'undefined' ? window.location.origin : ''
    }/auth-callback`,
    audience: `https://${domain}/api/v2/`,
    responseType: 'token id_token',
    scope: `openid profile email ${namespace + 'accountLinkId'}`
  });

    this.getUser = this.getUser.bind(this);
    this.getToken = this.getToken.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setSession = this.setSession.bind(this);
  }

  login() {
    return this.auth0.authorize();
  }

  logout() {
    return Promise.all([
      localStorage.removeItem('access_token'),
      localStorage.removeItem('id_token'),
      localStorage.removeItem('expires_at'),
      localStorage.removeItem('user')
    ]).then(
      () =>
        typeof window !== 'undefined'
          ? window.location.reload()
          : navigateTo('/#')
    );
  }

  handleAuthentication({ updateUserSignedIn, fetchUserComplete }) {
    if (typeof window !== 'undefined') {
      this.auth0.parseHash((err, authResult) => {
        if (err) {
          console.log(err);
          return navigateTo('/strange-place');
        }
        if (authResult && authResult.accessToken && authResult.idToken) {
          return (
            this.setSession(authResult)
              .then(user => {
                updateUserSignedIn(true);
                return fetchUserComplete(user);
              })
              // this could be current-challenge
              .then(() => navigateTo('/#'))
          );
        }
        return navigateTo('/strange-place');
      });
    }
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const isAuth = new Date().getTime() < expiresAt;
    return isAuth;
  }

  setSession = authResult => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
        if (err) {
          // TODO: Decide what we want to do here
          reject(err);
        }
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      });
    });
  };

  getUser() {
    const user = this.isAuthenticated() && localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }
}

export const auth = new Auth();
