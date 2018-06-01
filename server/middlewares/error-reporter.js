import debug from 'debug';
import Rollbar from 'rollbar';
import {
  isHandledError,
  unwrapHandledError
} from '../utils/create-handled-error.js';

const { ROLLBAR_APP_ID } = process.env;

const rollbar = new Rollbar(ROLLBAR_APP_ID);
const log = debug('fcc:middlewares:error-reporter');

const errTemplate = ({message, ...restError}, req) => `
Time: ${new Date(Date.now()).toISOString()}
Error: ${message}
Is authenticated user: ${!!req.user}
Route: ${JSON.stringify(req.route, null, 2)}

${JSON.stringify(restError, null, 2)}

`;

export default function errrorReporter() {
  if (process.env.NODE_ENV !== 'production' && process.env.ERROR_REPORTER) {
    return (err, req, res, next) => {
      console.error(errTemplate(err, req));

      if (isHandledError(err)) {
        // log out user messages in development
        const handled = unwrapHandledError(err);
        log(handled.message);
      }
      next(err);
    };
  }
  return (err, req, res, next) => {
    // handled errors do not need to be reported,
    // they report a message and maybe redirect the user
    // errors with status codes shouldn't be reported
    // as they are usually user messages
    if (isHandledError(err) || err.statusCode || err.status) {
      return next(err);
    }
    // logging the error provides us with more information,
    // i.e isAuthenticatedUser, req.route
    console.error(errTemplate(err, req));
    return rollbar.error(err.message, err);
  };
}
