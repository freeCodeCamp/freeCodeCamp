// TODO: integrate with Sentry?
export function reportClientSideError(
  e: Error,
  message = 'Unhandled error'
): void {
  return console.error(`Client: ${message}`, e);
}
