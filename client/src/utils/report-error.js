/* global Rollbar */

export function reportClientSideError(e, message = 'Unhandled error') {
  return Rollbar.error(`Client: ${message}`, e);
}
