import opbeat from 'opbeat';
import debug from 'debug';

import {
  isHandledError,
  unwrapHandledError
} from '../utils/create-handled-error.js';

const log = debug('fcc:middlewares:error-reporter');

export default function keymetrics() {
  if (process.env.NODE_ENV !== 'production') {
    return (err, req, res, next) => {
      if (isHandledError(err)) {
        // log out user messages in development
        const handled = unwrapHandledError(err);
        log(handled.message);
      }
      next(err);
     };
  }
  return (err, req, res, next) => {
    // handled errors do not need to be reported
    // the report a message and redirect the user
    if (isHandledError(err)) {
      return next(err);
    }
    return opbeat.captureError(err, { request: req }, () => next(err));
  };
}
