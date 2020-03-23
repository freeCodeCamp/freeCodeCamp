import { Handlers, captureException } from '@sentry/node';
import { sentry } from '../../../config/secrets';

export function reportError(err) {
  return sentry.dns === 'dsn_from_sentry_dashboard'
    ? console.error(err)
    : captureException(err);
}

export default function sentryErrorHandler() {
  return sentry.dns === 'dsn_from_sentry_dashboard'
    ? (req, res, next) => next()
    : Handlers.errorHandler({
        shouldHandleError(error) {
          // NOTE: 400 is too low, this is just for debugging
          return !error.status || error.status >= 400;
        }
      });
}
