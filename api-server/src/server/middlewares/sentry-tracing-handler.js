import { Handlers } from '@sentry/node';
import { sentry } from '../../../../config/secrets';

export default function sentryRequestHandler() {
  return sentry.dsn === 'dsn_from_sentry_dashboard'
    ? (req, res, next) => next()
    : Handlers.tracingHandler();
}
