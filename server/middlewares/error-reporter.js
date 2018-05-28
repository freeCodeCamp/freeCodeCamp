import debug from 'debug';

import {
  isHandledError,
  unwrapHandledError
} from '../utils/create-handled-error.js';

const log = debug('fcc:middlewares:error-reporter');

export default function errrorReporter() {
  if (process.env.NODE_ENV !== 'production' && process.env.ERROR_REPORTER) {
    return (err, req, res, next) => {
      if (isHandledError(err)) {
        // log out user messages in development
        const handled = unwrapHandledError(err);
        log(handled.message);
      }
      next(err);
    };
  }
  return (err, req, res, next) => next(err);
}
