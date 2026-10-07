/**
 * Resolve potentially relative WebSocket URLs the same way
 * the browser does (replace the protocol, use the origin, etc).
 *
 * @see https://websockets.spec.whatwg.org//#dom-websocket-websocket
 */
export function resolveWebSocketUrl(url: string | URL): string {
  if (typeof url === 'string') {
    /**
     * @note Cast the string to a URL first so the parsing errors
     * are thrown as a part of the WebSocket constructor, not consumers.
     */
    const urlRecord = new URL(
      url,
      typeof location !== 'undefined' ? location.href : undefined
    )

    return resolveWebSocketUrl(urlRecord)
  }

  if (url.protocol === 'http:') {
    url.protocol = 'ws:'
  } else if (url.protocol === 'https:') {
    url.protocol = 'wss:'
  }

  if (url.protocol !== 'ws:' && url.protocol !== 'wss:') {
    /**
     * @note These errors are modeled after the browser errors.
     * The exact error messages aren't provided in the specification.
     * Node.js uses more obscure error messages that I don't wish to replicate.
     */
    throw new SyntaxError(
      `Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${url.protocol}' is not allowed.`
    )
  }

  if (url.hash !== '') {
    throw new SyntaxError(
      `Failed to construct 'WebSocket': The URL contains a fragment identifier ('${url.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`
    )
  }

  return url.href
}
