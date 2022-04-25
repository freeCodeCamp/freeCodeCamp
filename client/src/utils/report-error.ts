// TODO: re-integrate sentry, once chunk errors are resolved
// https://github.com/freeCodeCamp/freeCodeCamp/pull/45778

export function reportClientSideError(
  e: Error,
  message = 'Unhandled error'
): void {
  return console.error(`Client: ${message}`, e);
}
