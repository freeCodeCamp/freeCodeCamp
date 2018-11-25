/* global Rollbar ENVIRONMENT */

export function reportClientSideError(e, message = 'Unhandled error') {
  return ENVIRONMENT === 'production'
    ? Rollbar.error(`Client: ${message}`, e)
    : console.error(`Stub Rollbar call - Client: ${message}`, e);
}
