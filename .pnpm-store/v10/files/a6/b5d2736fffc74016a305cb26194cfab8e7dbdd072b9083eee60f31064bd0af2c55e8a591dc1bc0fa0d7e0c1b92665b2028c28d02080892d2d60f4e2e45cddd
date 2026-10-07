import type { HttpResponse } from './HttpResponse'

/**
 * Performs the intercepted request as-is.
 *
 * This stops request handler lookup so no other handlers
 * can affect this request past this point.
 * Unlike `bypass()`, this will not trigger an additional request.
 *
 * @example
 * http.get('/resource', () => {
 *   return passthrough()
 * })
 *
 * @see {@link https://mswjs.io/docs/api/passthrough `passthrough()` API reference}
 */
export function passthrough(): HttpResponse<any> {
  return new Response(null, {
    status: 302,
    statusText: 'Passthrough',
    headers: {
      'x-msw-intention': 'passthrough',
    },
  }) as HttpResponse<any>
}
