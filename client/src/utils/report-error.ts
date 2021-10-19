import * as Sentry from '@sentry/react';
import { sentry } from '../../../config/secrets';

export function reportClientSideError(
  e: Error,
  message = sentry.dns === 'dsn_from_sentry_dashboard'
    ? 'Unhandled error'
    : 'Error sent to Sentry'
): string | void {
  return sentry.dns === 'dsn_from_sentry_dashboard'
    ? console.error(`Client: ${message}`, e)
    : Sentry.captureException(e);
}
