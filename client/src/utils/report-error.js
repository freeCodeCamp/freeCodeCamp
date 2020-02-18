/* global ENVIRONMENT */

export function reportClientSideError(e, message = 'Unhandled error') {
  return ENVIRONMENT === 'production'
    ? console.error(`Client: ${message}`, e)
    : console.error(`Stub Rollbar call - Client: ${message}`, e);
}
