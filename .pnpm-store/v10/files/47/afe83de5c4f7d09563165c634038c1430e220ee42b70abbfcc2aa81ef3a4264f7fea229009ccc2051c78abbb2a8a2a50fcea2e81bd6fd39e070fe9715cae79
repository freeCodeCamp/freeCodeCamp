import {
  parse as parseCookie,
  serialize as serializeCookie,
} from '../../../shims/cookie'
import { cookieStore } from '../cookieStore'

function parseCookies(input: string): Record<string, string> {
  const parsedCookies = parseCookie(input)
  const cookies: Record<string, string> = {}

  for (const cookieName in parsedCookies) {
    if (typeof parsedCookies[cookieName] !== 'undefined') {
      cookies[cookieName] = parsedCookies[cookieName]
    }
  }

  return cookies
}

function getAllDocumentCookies() {
  return parseCookies(document.cookie)
}

function getDocumentCookies(request: Request): Record<string, string> {
  if (typeof document === 'undefined' || typeof location === 'undefined') {
    return {}
  }

  switch (request.credentials) {
    case 'same-origin': {
      const requestUrl = new URL(request.url)

      // Return document cookies only when requested a resource
      // from the same origin as the current document.
      return location.origin === requestUrl.origin
        ? getAllDocumentCookies()
        : {}
    }

    case 'include': {
      // Return all document cookies.
      return getAllDocumentCookies()
    }

    default: {
      return {}
    }
  }
}

export function getAllRequestCookies(request: Request): Record<string, string> {
  /**
   * @note While the "cookie" header is a forbidden header field
   * in the browser, you can read it in Node.js. We need to respect
   * it for mocking in Node.js.
   */
  const requestCookieHeader = request.headers.get('cookie')
  const cookiesFromHeaders = requestCookieHeader
    ? parseCookies(requestCookieHeader)
    : {}

  const cookiesFromDocument = getDocumentCookies(request)

  // Forward the document cookies to the request headers.
  for (const name in cookiesFromDocument) {
    request.headers.append(
      'cookie',
      serializeCookie(name, cookiesFromDocument[name]),
    )
  }

  const cookiesFromStore = cookieStore.getCookies(request.url)
  const storedCookiesObject = Object.fromEntries(
    cookiesFromStore.map((cookie) => [cookie.key, cookie.value]),
  )

  // Forward the raw stored cookies to request headers
  // so they contain metadata like "expires", "secure", etc.
  for (const cookie of cookiesFromStore) {
    request.headers.append('cookie', cookie.toString())
  }

  return {
    ...cookiesFromDocument,
    ...storedCookiesObject,
    ...cookiesFromHeaders,
  }
}
