import { type ServiceWorkerSourceOptions } from '../sources/service-worker-source'

export function shouldInvalidateWorker(
  prevOptions: ServiceWorkerSourceOptions,
  nextOptions: ServiceWorkerSourceOptions,
): boolean {
  return (
    prevOptions.findWorker !== nextOptions.findWorker ||
    prevOptions.serviceWorker.url !== nextOptions.serviceWorker.url ||
    JSON.stringify(prevOptions.serviceWorker.options) !==
      JSON.stringify(nextOptions.serviceWorker.options)
  )
}
