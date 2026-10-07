import { canParseUrl } from './canParseUrl'
import { getValueBySymbol } from './getValueBySymbol'

interface UndiciRequestState extends RequestInit {}

interface FetchRequestInit extends Omit<RequestInit, 'mode'> {
  mode?: RequestMode | 'websocket' | 'webtransport'
  duplex?: 'half' | 'full'
}

export class FetchRequest extends Request {
  static #resolveProperty<T extends keyof FetchRequestInit & keyof Request>(
    input: RequestInfo | URL,
    init: FetchRequestInit = {},
    key: T
  ): FetchRequestInit[T] {
    return init[key] ?? (input instanceof Request ? input[key] : undefined)
  }

  /**
   * Check if the given request method is configurable.
   * @see https://fetch.spec.whatwg.org/#methods
   */
  static isConfigurableMethod(method: string): boolean {
    return method !== 'CONNECT' && method !== 'TRACE' && method !== 'TRACK'
  }

  static isMethodWithBody(method: string): boolean {
    return (
      method !== 'HEAD' &&
      method !== 'GET' &&
      FetchRequest.isConfigurableMethod(method)
    )
  }

  /**
   * Check if the given request `mode` is configurable.
   * @see https://fetch.spec.whatwg.org/#concept-request-mode
   */
  static isConfigurableMode(mode: string): boolean {
    return (
      mode !== 'navigate' && mode !== 'websocket' && mode !== 'webtransport'
    )
  }

  constructor(input: URL | RequestInfo, init?: FetchRequestInit) {
    const method = FetchRequest.#resolveProperty(input, init, 'method') || 'GET'
    const safeMethod = FetchRequest.isConfigurableMethod(method)
      ? method
      : 'GET'

    const hasExplicitBody = init != null && 'body' in init

    /**
     * Only include `body` in the super init when it needs to be overridden.
     * When `input` is a Request and no explicit body is in `init`, let the
     * Request constructor handle body transfer naturally so it properly
     * marks the original request's body as consumed (bodyUsed = true).
     */
    const bodyInit: { body?: BodyInit | null } = !FetchRequest.isMethodWithBody(
      method
    )
      ? { body: undefined }
      : hasExplicitBody
        ? { body: init.body }
        : {}

    const mode =
      (FetchRequest.#resolveProperty(input, init, 'mode') as RequestMode) ??
      undefined
    const safeMode = FetchRequest.isConfigurableMode(mode) ? mode : undefined

    super(input, {
      ...(init || {}),
      method: safeMethod,
      mode: safeMode,
      // @ts-expect-error Untyped Node.js property.
      duplex:
        init?.duplex ??
        (FetchRequest.isMethodWithBody(method) ? 'half' : undefined),
      ...bodyInit,
    })

    if (method !== safeMethod) {
      this.#setInternalProperty('method', method)
    }

    if (method === 'CONNECT') {
      const url = new URL(input instanceof Request ? input.url : input)

      let authority: string

      /**
       * @note Node.js has a bug parsing raw CONNECT requests URLs like
       * "http://127.0.0.1:1337/localhost:80". It would treat "localhost:" as a protocol.
       */
      if (url.protocol === 'localhost:') {
        authority = url.href
      } else {
        authority = url.pathname.replace(/^\/+/, '')
      }

      /**
       * @note Define "url" as a getter because Undici uses their own
       * logic to resolve the "request.url" property. Simply reassigning
       * its value doesn't do anything. This is a destructive action
       * but it's safe because "CONNECT" requests are forbidden per fetch.
       */
      Object.defineProperty(this, 'url', {
        get: () => authority,
        enumerable: true,
        configurable: true,
      })
    }

    if (mode != null && mode !== safeMode) {
      this.#setInternalProperty('mode', mode)
    }
  }

  #setInternalProperty<T extends keyof Request>(
    key: T,
    value: Request[T]
  ): void {
    const internalState = getValueBySymbol<UndiciRequestState>('state', this)

    if (internalState) {
      Reflect.set(internalState, key, value)
    } else {
      Object.defineProperty(this, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: false,
      })
    }
  }
}

export interface FetchResponseInit extends ResponseInit {
  url?: string
}

interface UndiciResponseState {
  aborted: boolean
  rangeRequested: boolean
  timingAllowPassed: boolean
  requestIncludesCredentials: boolean
  type: ResponseType
  status: number
  statusText: string
  timingInfo: unknown
  cacheState: unknown
  headersList: Record<symbol, Map<string, unknown>>
  urlList: Array<URL>
  body?: {
    stream: ReadableStream
    source: unknown
    length: number
  }
}

const kStatus = Symbol('kStatus')
const kUrl = Symbol('kUrl')

export class FetchResponse extends Response {
  /**
   * Response status codes for responses that cannot have body.
   * @see https://fetch.spec.whatwg.org/#statuses
   */
  static readonly STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304]

  static readonly STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308]

  static isConfigurableStatusCode(status: number): boolean {
    return status >= 200 && status <= 599
  }

  static isRedirectResponse(status: number): boolean {
    return FetchResponse.STATUS_CODES_WITH_REDIRECT.includes(status)
  }

  /**
   * Returns a boolean indicating whether the given response status
   * code represents a response that can have a body.
   */
  static isResponseWithBody(status: number): boolean {
    return !FetchResponse.STATUS_CODES_WITHOUT_BODY.includes(status)
  }

  static setStatus(status: number, response: Response): void {
    /**
     * @note Undici keeps an internal "Symbol(state)" that holds
     * the actual value of response status. Update that in Node.js.
     */
    const internalState = getValueBySymbol<UndiciResponseState>(
      'state',
      response
    )

    if (internalState) {
      internalState.status = status
    } else {
      Object.defineProperty(response, 'status', {
        value: status,
        enumerable: true,
        configurable: true,
        writable: false,
      })
    }

    Object.defineProperty(response, kStatus, {
      value: status,
      enumerable: false,
    })
  }

  static setUrl(url: string | undefined, response: Response): void {
    if (!url || url === 'about:' || !canParseUrl(url)) {
      return
    }

    const state = getValueBySymbol<UndiciResponseState>('state', response)

    if (state) {
      // In Undici, push the URL to the internal list of URLs.
      // This will respect the `response.url` getter logic correctly.
      state.urlList.push(new URL(url))
    } else {
      // In other libraries, redefine the `url` property directly.
      Object.defineProperty(response, 'url', {
        value: url,
        enumerable: true,
        configurable: true,
        writable: false,
      })
    }

    Object.defineProperty(response, kUrl, {
      value: url,
      enumerable: false,
    })
  }

  /**
   * Parses the given raw HTTP headers into a Fetch API `Headers` instance.
   */
  static parseRawHeaders(rawHeaders: Array<string>): Headers {
    const headers = new Headers()

    for (let line = 0; line < rawHeaders.length; line += 2) {
      headers.append(rawHeaders[line], rawHeaders[line + 1])
    }

    return headers
  }

  /**
   * Safely clones the given `Response`.
   * Coerces response clone exceptions into 500 mocked responses.
   * Handy in the environments that introduce arbitrary response
   * cloning restrictions, like "101 Switching Protocols" cloning
   * in "miniflare".
   */
  static clone(response: Response): Response {
    try {
      const clone = response.clone()
      return clone
    } catch (error) {
      return Response.json(
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : {},
        {
          status: 500,
          statusText: 'Unclonable Response',
        }
      )
    }
  }

  constructor(body?: BodyInit | null, init: FetchResponseInit = {}) {
    const status = init.status ?? 200
    const safeStatus = FetchResponse.isConfigurableStatusCode(status)
      ? status
      : 200
    const finalBody = FetchResponse.isResponseWithBody(status) ? body : null

    super(finalBody, {
      status: safeStatus,
      statusText: init.statusText,
      headers: init.headers,
    })

    /**
     * Since Node.js v24, Undici stores the Response state in an inaccessible field "#state".
     * Forward the modified status/URL to the cloned response manually.
     * @see https://github.com/nodejs/undici/blob/f734c87280e626c75f59aad55b65eb6a89cef392/lib/web/fetch/response.js#L242
     */
    if (status !== safeStatus) {
      FetchResponse.setStatus(status, this)
    }

    FetchResponse.setUrl(init.url, this)
  }

  public clone() {
    const clonedResponse = super.clone()

    const customStatus = Reflect.get(this, kStatus) as number | undefined

    if (customStatus) {
      FetchResponse.setStatus(customStatus, clonedResponse)
    }

    const customUrl = Reflect.get(this, kUrl) as string | undefined

    if (customUrl) {
      FetchResponse.setUrl(customUrl, clonedResponse)
    }

    return clonedResponse
  }
}
