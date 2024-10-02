import { csrfOptions } from './csurf.js';

export default function setCSRFCookie() {
  return function (req, res, next) {
    // not all paths require a CSRF token, so the function may not be available.
    if (req.csrfToken && !req.cookies.csrf_token) {
      // use the middleware to generate a token. The client sends this back via
      // a header
      res.cookie('csrf_token', req.csrfToken(), csrfOptions);
    }
    next();
  };
}
