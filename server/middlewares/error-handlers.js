import errorHandler from 'errorhandler';
import accepts from 'accepts';
import { unwrapHandledError } from '../utils/create-handled-error.js';

export default function prodErrorHandler() {
  if (process.env.NODE_ENV === 'development') {
    return errorHandler({ log: true });
  }
  // error handling in production.
  // disabling eslint due to express parity rules for error handlers
  return function(err, req, res, next) { // eslint-disable-line
    // respect err.status
    if (err.status) {
      res.statusCode = err.status;
    }

    // default status code to 500
    if (res.statusCode < 400) {
      res.statusCode = 500;
    }

    // parse res type
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');
    const handled = unwrapHandledError(err);

    const redirectTo = handled.redirectTo || '/map';
    const message = handled.message ||
      'Oops! Something went wrong. Please try again later';
    if (type === 'html') {
      if (typeof req.flash === 'function') {
        req.flash(
          handled.type || 'errors',
          { msg: message }
        );
      }
      return res.redirect(redirectTo);
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({
        message
      });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  };
}
