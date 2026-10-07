import type { IncomingWorkerRequest } from './workerChannel'

type Input = Pick<IncomingWorkerRequest, 'method' | 'body'>

/**
 * Ensures that an empty GET request body is always represented as `undefined`.
 */
export function pruneGetRequestBody(
  request: Input,
): IncomingWorkerRequest['body'] | undefined {
  // Force HEAD/GET request body to always be empty.
  // The worker reads any request's body as ArrayBuffer,
  // and you cannot re-construct a GET/HEAD Request
  // with an ArrayBuffer, even if empty. Also note that
  // "request.body" is always undefined in the worker.
  if (['HEAD', 'GET'].includes(request.method)) {
    return undefined
  }

  return request.body
}
