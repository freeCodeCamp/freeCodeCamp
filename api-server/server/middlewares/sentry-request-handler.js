import { Handlers } from '@sentry/node';
import { sentry } from '../../../config/secrets';

export default function sentryRequestHandler() {
  return sentry.dns === 'dsn_from_sentry_dashboard'
    ? (req, res, next) => next()
    : Handlers.requestHandler();
}
