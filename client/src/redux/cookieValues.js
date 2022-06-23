import cookies from 'browser-cookies';

export const jwt =
  // TOPCODER: we need to use the name of the cookie
  // created by the TC Auth0 impelmentation
  typeof window !== 'undefined' && cookies.get('tcjwt');
// typeof window !== 'undefined' && cookies.get('jwt_access_token');
