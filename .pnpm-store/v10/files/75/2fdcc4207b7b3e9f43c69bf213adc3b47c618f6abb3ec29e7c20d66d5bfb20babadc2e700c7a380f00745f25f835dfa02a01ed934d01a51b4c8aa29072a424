import statuses from '../../../shims/statuses'
import type { HttpResponseInit } from '../../HttpResponse'

const { message } = statuses

const kSetCookie = Symbol('kSetCookie')

export interface HttpResponseDecoratedInit extends HttpResponseInit {
  status: number
  statusText: string
  headers: Headers
}

export function normalizeResponseInit(
  init: HttpResponseInit = {},
): HttpResponseDecoratedInit {
  const status = init?.status || 200
  const statusText = init?.statusText || message[status] || ''
  const headers = new Headers(init?.headers)

  return {
    ...init,
    headers,
    status,
    statusText,
  }
}

export function decorateResponse(
  response: Response,
  init: HttpResponseDecoratedInit,
): Response {
  // Allow mocking the response type.
  if (init.type) {
    Object.defineProperty(response, 'type', {
      value: init.type,
      enumerable: true,
      writable: false,
    })
  }

  const responseCookies = init.headers.get('set-cookie')

  if (responseCookies) {
    // Record the raw "Set-Cookie" response header provided
    // in the HeadersInit. This is later used to store these cookies
    // in cookie jar and return the right cookies in the "cookies"
    // response resolver argument.
    Object.defineProperty(response, kSetCookie, {
      value: responseCookies,
      enumerable: false,
      writable: false,
    })
  }

  return response
}

export function getRawSetCookie(response: Response): string | undefined {
  return Reflect.get(response, kSetCookie)
}
