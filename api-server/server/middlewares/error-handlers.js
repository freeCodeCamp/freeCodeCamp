// import { inspect } from 'util';
// import _ from 'lodash/fp';
import accepts from 'accepts';

import { homeLocation } from '../../../config/env';

import { unwrapHandledError } from '../utils/create-handled-error.js';

const isDev = process.env.NODE_ENV !== 'production';

export default function prodErrorHandler() {
  // error handling in production.
  // eslint-disable-next-line no-unused-vars
  return function(err, req, res, next) {
    const handled = unwrapHandledError(err);
    // respect handled error status
    let status = handled.status || err.status || res.statusCode;
    if (!handled.status && status < 400) {
      status = 500;
    }
    res.status(status);

    // parse res type
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');

    const redirectTo = handled.redirectTo || `${homeLocation}/`;
    const message =
      handled.message || 'Oops! Something went wrong. Please try again later';

    if (isDev) {
      console.error(err);
    }

    if (type === 'html') {
      if (typeof req.flash === 'function') {
        req.flash(handled.type || 'danger', message);
      }
      return res.redirectWithFlash(redirectTo);
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({
        type: handled.type || 'errors',
        message
      });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  };
}
