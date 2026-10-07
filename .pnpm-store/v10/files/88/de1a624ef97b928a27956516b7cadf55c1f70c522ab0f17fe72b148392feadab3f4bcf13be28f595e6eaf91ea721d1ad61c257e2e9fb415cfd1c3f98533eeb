import { devUtils } from '#core/utils/internal/devUtils'

/**
 * Print a warning if the given Service Worker registration has a scope
 * outside of the current page's location. That is to help with debugging
 * issues caused by the incorrectly registered Service Worker.
 */
export function validateWorkerScope(
  registration: ServiceWorkerRegistration,
): void {
  if (!location.href.startsWith(registration.scope)) {
    devUtils.warn(
      `Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`,
    )
  }
}
