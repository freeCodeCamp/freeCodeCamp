import cookies from 'browser-cookies';

export const jwt =
  typeof window !== 'undefined' && cookies.get('jwt_access_token');
