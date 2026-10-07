import { FetchRequest, FetchResponse } from '../../../utils/fetchUtils'

type HeaderTuple = [string, string]
type RawHeaders = Array<HeaderTuple>
type SetHeaderBehavior = 'set' | 'append'

const kRawHeaders = Symbol('kRawHeaders')
const kRestorePatches = Symbol('kRestorePatches')

function recordRawHeader(
  headers: Headers,
  args: HeaderTuple,
  behavior: SetHeaderBehavior
) {
  ensureRawHeadersSymbol(headers, [])
  const rawHeaders = Reflect.get(headers, kRawHeaders) as RawHeaders

  if (behavior === 'set') {
    // When recording a set header, ensure we remove any matching existing headers.
    for (let index = rawHeaders.length - 1; index >= 0; index--) {
      if (rawHeaders[index][0].toLowerCase() === args[0].toLowerCase()) {
        rawHeaders.splice(index, 1)
      }
    }
  }

  rawHeaders.push(args)
}

/**
 * Define the raw headers symbol on the given `Headers` instance.
 * If the symbol already exists, this function does nothing.
 */
function ensureRawHeadersSymbol(
  headers: Headers,
  rawHeaders: RawHeaders
): void {
  if (Reflect.has(headers, kRawHeaders)) {
    return
  }

  defineRawHeadersSymbol(headers, rawHeaders)
}

/**
 * Define the raw headers symbol on the given `Headers` instance.
 * If the symbol already exists, it gets overridden.
 */
function defineRawHeadersSymbol(headers: Headers, rawHeaders: RawHeaders) {
  Object.defineProperty(headers, kRawHeaders, {
    value: rawHeaders,
    enumerable: false,
    // Mark the symbol as configurable so its value can be overridden.
    // Overrides happen when merging raw headers from multiple sources.
    // E.g. new Request(new Request(url, { headers }), { headers })
    configurable: true,
  })
}

/**
 * Patch the global `Headers` class to store raw headers.
 * This is for compatibility with `IncomingMessage.prototype.rawHeaders`.
 *
 * @note Node.js has their own raw headers symbol but it
 * only records the first header name in case of multi-value headers.
 * Any other headers are normalized before comparing. This makes it
 * incompatible with the `rawHeaders` format.
 *
 * let h = new Headers()
 * h.append('X-Custom', 'one')
 * h.append('x-custom', 'two')
 * h[Symbol('headers map')] // Map { 'X-Custom' => 'one, two' }
 */
export function recordRawFetchHeaders() {
  // Prevent patching the Headers prototype multiple times.
  if (Reflect.get(Headers, kRestorePatches)) {
    return Reflect.get(Headers, kRestorePatches)
  }

  const {
    Headers: OriginalHeaders,
    Request: OriginalRequest,
    Response: OriginalResponse,
  } = globalThis
  const { set, append, delete: headersDeleteMethod } = Headers.prototype

  Object.defineProperty(Headers, kRestorePatches, {
    value: () => {
      Headers.prototype.set = set
      Headers.prototype.append = append
      Headers.prototype.delete = headersDeleteMethod
      globalThis.Headers = OriginalHeaders

      globalThis.Request = OriginalRequest
      globalThis.Response = OriginalResponse

      Object.setPrototypeOf(FetchRequest, OriginalRequest)
      Object.setPrototypeOf(FetchRequest.prototype, OriginalRequest.prototype)
      Object.setPrototypeOf(FetchResponse, OriginalResponse)
      Object.setPrototypeOf(FetchResponse.prototype, OriginalResponse.prototype)

      Reflect.deleteProperty(Headers, kRestorePatches)
    },
    enumerable: false,
    /**
     * @note Mark this property as configurable
     * so we can delete it using `Reflect.delete` during cleanup.
     */
    configurable: true,
  })

  Object.defineProperty(globalThis, 'Headers', {
    enumerable: true,
    writable: true,
    value: new Proxy(Headers, {
      construct(target, args, newTarget) {
        const headersInit = args[0] || []

        if (
          headersInit instanceof Headers &&
          Reflect.has(headersInit, kRawHeaders)
        ) {
          // Ensure each header tuple has exactly 2 elements (name, value).
          // Node.js 24+ may have stored tuples with extra internal arguments.
          const rawHeadersFromInit = Reflect.get(
            headersInit,
            kRawHeaders
          ) as RawHeaders
          const sanitizedHeaders = rawHeadersFromInit.map(
            (tuple): HeaderTuple => [tuple[0], tuple[1]]
          )
          const headers = Reflect.construct(
            target,
            [sanitizedHeaders],
            newTarget
          )
          ensureRawHeadersSymbol(headers, [
            /**
             * @note Spread the retrieved headers to clone them.
             * This prevents multiple Headers instances from pointing
             * at the same internal "rawHeaders" array.
             */
            ...sanitizedHeaders,
          ])
          return headers
        }

        const headers = Reflect.construct(target, args, newTarget)

        // Request/Response constructors will set the symbol
        // upon creating a new instance, using the raw developer
        // input as the raw headers. Skip the symbol altogether
        // in those cases because the input to Headers will be normalized.
        if (!Reflect.has(headers, kRawHeaders)) {
          const rawHeadersInit = Array.isArray(headersInit)
            ? headersInit
            : Object.entries(headersInit)
          ensureRawHeadersSymbol(headers, rawHeadersInit)
        }

        return headers
      },
    }),
  })

  Headers.prototype.set = new Proxy(Headers.prototype.set, {
    apply(target, thisArg, args: HeaderTuple) {
      // Use only the first two arguments (name, value) to record raw headers.
      // Node.js 24+ may pass additional internal arguments that should not
      // be included in the raw headers array.
      recordRawHeader(thisArg, [args[0], args[1]], 'set')
      return Reflect.apply(target, thisArg, args)
    },
  })

  Headers.prototype.append = new Proxy(Headers.prototype.append, {
    apply(target, thisArg, args: HeaderTuple) {
      // Use only the first two arguments (name, value) to record raw headers.
      // Node.js 24+ may pass additional internal arguments that should not
      // be included in the raw headers array.
      recordRawHeader(thisArg, [args[0], args[1]], 'append')
      return Reflect.apply(target, thisArg, args)
    },
  })

  Headers.prototype.delete = new Proxy(Headers.prototype.delete, {
    apply(target, thisArg, args: [string]) {
      const rawHeaders = Reflect.get(thisArg, kRawHeaders) as RawHeaders

      if (rawHeaders) {
        for (let index = rawHeaders.length - 1; index >= 0; index--) {
          if (rawHeaders[index][0].toLowerCase() === args[0].toLowerCase()) {
            rawHeaders.splice(index, 1)
          }
        }
      }

      return Reflect.apply(target, thisArg, args)
    },
  })

  Object.defineProperty(globalThis, 'Request', {
    enumerable: true,
    writable: true,
    value: new Proxy(Request, {
      construct(target, args, newTarget) {
        const request = Reflect.construct(target, args, newTarget)
        const inferredRawHeaders: RawHeaders = []

        // Infer raw headers from a `Request` instance used as init.
        if (typeof args[0] === 'object' && args[0].headers != null) {
          inferredRawHeaders.push(...inferRawHeaders(args[0].headers))
        }

        // Infer raw headers from the "headers" init argument.
        if (typeof args[1] === 'object' && args[1].headers != null) {
          inferredRawHeaders.push(...inferRawHeaders(args[1].headers))
        }

        if (inferredRawHeaders.length > 0) {
          ensureRawHeadersSymbol(request.headers, inferredRawHeaders)
        }

        return request
      },
    }),
  })

  Object.defineProperty(globalThis, 'Response', {
    enumerable: true,
    writable: true,
    value: new Proxy(Response, {
      construct(target, args, newTarget) {
        const response = Reflect.construct(target, args, newTarget)

        if (typeof args[1] === 'object' && args[1].headers != null) {
          ensureRawHeadersSymbol(
            response.headers,
            inferRawHeaders(args[1].headers)
          )
        }

        return response
      },
    }),
  })

  /**
   * Re-parent FetchRequest/FetchResponse so their `super()` calls go
   * through the proxied globalThis.Request/Response above. Without this,
   * FetchRequest extends the statically-captured (original) Request,
   * bypassing the construct proxy that records raw headers.
   */
  Object.setPrototypeOf(FetchRequest, globalThis.Request)
  Object.setPrototypeOf(FetchRequest.prototype, globalThis.Request.prototype)
  Object.setPrototypeOf(FetchResponse, globalThis.Response)
  Object.setPrototypeOf(FetchResponse.prototype, globalThis.Response.prototype)
}

export function restoreHeadersPrototype() {
  if (!Reflect.get(Headers, kRestorePatches)) {
    return
  }

  Reflect.get(Headers, kRestorePatches)()
}

export function getRawFetchHeaders(headers: Headers): RawHeaders {
  // If the raw headers recording failed for some reason,
  // use the normalized header entries instead.
  if (!Reflect.has(headers, kRawHeaders)) {
    return Array.from(headers.entries())
  }

  const rawHeaders = Reflect.get(headers, kRawHeaders) as RawHeaders
  return rawHeaders.length > 0 ? rawHeaders : Array.from(headers.entries())
}

/**
 * Infers the raw headers from the given `HeadersInit` provided
 * to the Request/Response constructor.
 *
 * If the `init.headers` is a Headers instance, use it directly.
 * That means the headers were created standalone and already have
 * the raw headers stored.
 * If the `init.headers` is a HeadersInit, create a new Headers
 * instance out of it.
 */
function inferRawHeaders(headers: HeadersInit): RawHeaders {
  if (headers instanceof Headers) {
    return Reflect.get(headers, kRawHeaders) || []
  }

  return Reflect.get(new Headers(headers), kRawHeaders)
}
