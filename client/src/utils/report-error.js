// TODO: integrate with Sentry?
export function reportClientSideError(e, message = 'Unhandled error') {
  return console.error(`Client: ${message}`, e);
}
