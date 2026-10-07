import { isObject } from './isObject'
import { isPropertyAccessible } from './isPropertyAccessible'

/**
 * Creates a generic 500 Unhandled Exception response.
 */
export function createServerErrorResponse(body: unknown): Response {
  return new Response(
    JSON.stringify(
      body instanceof Error
        ? {
            name: body.name,
            message: body.message,
            stack: body.stack,
          }
        : body
    ),
    {
      status: 500,
      statusText: 'Unhandled Exception',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}

export type ResponseError = Response & { type: 'error' }

/**
 * Check if the given response is a `Response.error()`.
 *
 * @note Some environments, like Miniflare (Cloudflare) do not
 * implement the "Response.type" property and throw on its access.
 * Safely check if we can access "type" on "Response" before continuing.
 * @see https://github.com/mswjs/msw/issues/1834
 */
export function isResponseError(response: unknown): response is ResponseError {
  return (
    response != null &&
    response instanceof Response &&
    isPropertyAccessible(response, 'type') &&
    response.type === 'error'
  )
}

/**
 * Check if the given value is a `Response` or a Response-like object.
 * This is different from `value instanceof Response` because it supports
 * custom `Response` constructors, like the one when using Undici directly.
 */
export function isResponseLike(value: unknown): value is Response {
  return (
    isObject<Record<string, any>>(value, true) &&
    isPropertyAccessible(value, 'status') &&
    isPropertyAccessible(value, 'statusText') &&
    isPropertyAccessible(value, 'bodyUsed')
  )
}
