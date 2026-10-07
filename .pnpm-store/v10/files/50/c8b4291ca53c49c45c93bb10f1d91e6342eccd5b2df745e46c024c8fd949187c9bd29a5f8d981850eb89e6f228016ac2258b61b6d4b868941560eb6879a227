import { pruneGetRequestBody } from './pruneGetRequestBody'
import type { IncomingWorkerRequest } from './workerChannel'

/**
 * Converts a given request received from the Service Worker
 * into a Fetch `Request` instance.
 */
export function deserializeRequest(
  serializedRequest: IncomingWorkerRequest,
): Request {
  return new Request(serializedRequest.url, {
    ...serializedRequest,
    body: pruneGetRequestBody(serializedRequest),
  })
}
