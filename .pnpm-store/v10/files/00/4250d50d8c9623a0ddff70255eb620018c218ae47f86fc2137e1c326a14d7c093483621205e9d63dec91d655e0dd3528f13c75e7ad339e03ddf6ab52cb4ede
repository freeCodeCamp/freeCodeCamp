/**
 * Returns an absolute Service Worker URL based on the given
 * relative URL (known during the registration).
 */
export function getAbsoluteWorkerUrl(workerUrl: string): string {
  return new URL(workerUrl, location.href).href
}
