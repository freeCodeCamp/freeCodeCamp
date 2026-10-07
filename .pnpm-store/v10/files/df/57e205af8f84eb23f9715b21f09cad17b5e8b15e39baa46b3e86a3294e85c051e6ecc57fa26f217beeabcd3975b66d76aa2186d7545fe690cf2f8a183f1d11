export function getWorkerInstance(
  registration: ServiceWorkerRegistration
): ServiceWorker | null {
  return registration.installing || registration.waiting || registration.active;
}
