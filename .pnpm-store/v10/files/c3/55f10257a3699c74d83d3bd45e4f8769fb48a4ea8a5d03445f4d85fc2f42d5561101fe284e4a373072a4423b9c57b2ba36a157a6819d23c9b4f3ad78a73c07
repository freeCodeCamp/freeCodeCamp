import { invariant } from 'outvariant'

export type BypassRequestInput = string | URL | Request

/**
 * Creates a `Request` instance that will always be ignored by MSW.
 *
 * @example
 * import { bypass } from 'msw'
 *
 * fetch(bypass('/resource'))
 * fetch(bypass(new URL('/resource', 'https://example.com)))
 * fetch(bypass(new Request('https://example.com/resource')))
 *
 * @see {@link https://mswjs.io/docs/api/bypass `bypass()` API reference}
 */
export function bypass(input: BypassRequestInput, init?: RequestInit): Request {
  // Always create a new Request instance.
  // This way, the "init" modifications will propagate
  // to the bypass request instance automatically.
  const request = new Request(
    // If given a Request instance, clone it not to exhaust
    // the original request's body.
    input instanceof Request ? input.clone() : input,
    init,
  )

  invariant(
    !request.bodyUsed,
    'Failed to create a bypassed request to "%s %s": given request instance already has its body read. Make sure to clone the intercepted request if you wish to read its body before bypassing it.',
    request.method,
    request.url,
  )

  const requestClone = request.clone()

  /**
   * Send the internal request header that would instruct MSW
   * to perform this request as-is, ignoring any matching handlers.
   * @note Use the `accept` header to support scenarios when the
   * request cannot have headers (e.g. `sendBeacon` requests).
   */
  requestClone.headers.append('accept', 'msw/passthrough')

  return requestClone
}
