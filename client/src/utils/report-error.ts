export function reportClientSideError(
  e: Error,
  message = 'Unhandled error'
): void {
  console.error(`Client: ${message}`, e);
}
