import cookies from 'browser-cookies';

export const _csrf = typeof window !== 'undefined' && cookies.get('_csrf');
export const jwt =
  typeof window !== 'undefined' && cookies.get('jwt_access_token');
