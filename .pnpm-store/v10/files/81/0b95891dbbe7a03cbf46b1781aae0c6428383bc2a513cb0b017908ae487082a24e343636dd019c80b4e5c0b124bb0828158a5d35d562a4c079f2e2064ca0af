import type { FindWorker } from '../glossary'

/**
 * Attempts to resolve a Service Worker instance from a given registration,
 * regardless of its state (active, installing, waiting).
 */
export function getWorkerByRegistration(
  registration: ServiceWorkerRegistration,
  absoluteWorkerUrl: string,
  findWorker: FindWorker,
): ServiceWorker | null {
  const allStates = [
    registration.active,
    registration.installing,
    registration.waiting,
  ]

  const relevantStates = allStates.filter((state): state is ServiceWorker => {
    return state != null
  })

  const worker = relevantStates.find((worker) => {
    return findWorker(worker.scriptURL, absoluteWorkerUrl)
  })

  return worker || null
}
