import { FetchResponse } from '../../../utils/fetchUtils'

/**
 * Creates a Fetch API `Response` instance from the given
 * `XMLHttpRequest` instance and a response body.
 */
export function createResponse(
  request: XMLHttpRequest,
  body: BodyInit | null
): Response {
  /**
   * Handle XMLHttpRequest responses that must have null as the
   * response body when represented using Fetch API Response.
   * XMLHttpRequest response will always have an empty string
   * as the "request.response" in those cases, resulting in an error
   * when constructing a Response instance.
   * @see https://github.com/mswjs/interceptors/issues/379
   */
  const responseBodyOrNull = FetchResponse.isResponseWithBody(request.status)
    ? body
    : null

  return new FetchResponse(responseBodyOrNull, {
    url: request.responseURL,
    status: request.status,
    statusText: request.statusText,
    headers: createHeadersFromXMLHttpRequestHeaders(
      request.getAllResponseHeaders()
    ),
  })
}

function createHeadersFromXMLHttpRequestHeaders(headersString: string): Headers {
  const headers = new Headers()

  const lines = headersString.split(/[\r\n]+/)
  for (const line of lines) {
    if (line.trim() === '') {
      continue
    }

    const [name, ...parts] = line.split(': ')
    const value = parts.join(': ')

    headers.append(name, value)
  }

  return headers
}
