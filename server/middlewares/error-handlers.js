import errorHandler from 'errorhandler';
import accepts from 'accepts';

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

    const message = 'Oops! Something went wrong. Please try again later';
    if (type === 'html') {
      if (typeof req.flash === 'function') {
        req.flash(err.messageType || 'errors', {
          msg: err.userMessage || message
        });
      }
      return res.redirect(err.redirectTo || '/map');
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({
        message: message
      });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  };
}
