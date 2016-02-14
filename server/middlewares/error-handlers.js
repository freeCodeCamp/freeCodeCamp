import errorHanlder from 'errorhandler';
import accepts from 'accepts';

export default function prodErrorHandler() {
  if (process.env.NODE_ENV === 'development') {
    return errorHanlder({ log: true });
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
    var accept = accepts(req);
    var type = accept.type('html', 'json', 'text');

    var message = 'Oops! Something went wrong. Please try again later';
    if (type === 'html') {
      if (typeof req.flash === 'function') {
        req.flash('errors', {
          msg: message
        });
      }
      return res.redirect('/map');
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
