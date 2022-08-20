import { Handlers, captureException } from '@sentry/node';
import { sentry } from '../../../../config/secrets';
import { isHandledError } from '../utils/create-handled-error';

// sends directly to Sentry
export function reportError(err) {
  return sentry.dsn === 'dsn_from_sentry_dashboard'
    ? console.error(err)
    : captureException(err);
}

// determines which errors should be reported
export default function sentryErrorHandler() {
  return sentry.dsn === 'dsn_from_sentry_dashboard'
    ? (req, res, next) => next()
    : Handlers.errorHandler({
        shouldHandleError(err) {
          // CSRF errors have status 403, consider ignoring them once csurf is
          // no longer rejecting people incorrectly.
          return !isHandledError(err) && (!err.status || err.status >= 500);
        }
      });
}
