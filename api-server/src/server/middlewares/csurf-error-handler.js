import { csrfOptions } from './csurf.js';

export default function csrfErrorHandler() {
  return function (err, req, res, next) {
    if (err.code === 'EBADCSRFTOKEN' && req.csrfToken) {
      // use the middleware to generate a token. The client sends this back via
      // a header
      res.cookie('csrf_token', req.csrfToken(), csrfOptions);
    }
    next(err);
  };
}
