import { ClientRequest } from 'node:http'
import { Readable } from 'node:stream'
import { invariant } from 'outvariant'
import { getRawRequest } from '../../getRawRequest'

const kRawRequestBodyStream = Symbol('kRawRequestBodyStream')

/**
 * Returns the request body stream of the given request.
 * @note This is only relevant in the context of `http.ClientRequest`.
 * This function will throw if the given `request` wasn't created based on
 * the `http.ClientRequest` instance.
 * You must rely on the web stream consumers for other request clients.
 */
export function getClientRequestBodyStream(request: Request): Readable {
  const rawRequest = getRawRequest(request)

  invariant(
    rawRequest instanceof ClientRequest,
    `Failed to retrieve raw request body stream: request is not an instance of "http.ClientRequest". Note that you can only use the "getClientRequestBodyStream" function with the requests issued by "http.clientRequest".`
  )

  const requestBodyStream = Reflect.get(request, kRawRequestBodyStream)

  invariant(
    requestBodyStream instanceof Readable,
    'Failed to retrieve raw request body stream: corrupted stream (%s)',
    typeof requestBodyStream
  )

  return requestBodyStream
}

export function setRawRequestBodyStream(
  request: Request,
  stream: Readable
): void {
  Reflect.set(request, kRawRequestBodyStream, stream)
}
