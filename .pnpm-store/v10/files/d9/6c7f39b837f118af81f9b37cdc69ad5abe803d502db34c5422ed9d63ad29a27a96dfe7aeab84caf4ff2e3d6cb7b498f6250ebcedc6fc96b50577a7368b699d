const kRawRequest = Symbol('kRawRequest')

/**
 * Returns a raw request instance associated with this request.
 *
 * @example
 * interceptor.on('request', ({ request }) => {
 *   const rawRequest = getRawRequest(request)
 *
 *   if (rawRequest instanceof http.ClientRequest) {
 *     console.log(rawRequest.rawHeaders)
 *   }
 * })
 */
export function getRawRequest(request: Request): unknown | undefined {
  return Reflect.get(request, kRawRequest)
}

export function setRawRequest(request: Request, rawRequest: unknown): void {
  Reflect.set(request, kRawRequest, rawRequest)
}
