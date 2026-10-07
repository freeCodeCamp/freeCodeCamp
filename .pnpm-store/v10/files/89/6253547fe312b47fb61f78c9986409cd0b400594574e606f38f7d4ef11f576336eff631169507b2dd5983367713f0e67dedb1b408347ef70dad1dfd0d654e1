import { joinUrls } from './utils'
import { isPlainObject } from './core/rtkImports'
import type { BaseQueryApi, BaseQueryFn } from './baseQueryTypes'
import type { MaybePromise, Override } from './tsHelpers'
import { anySignal, timeoutSignal } from './utils/signals'

export type ResponseHandler =
  | 'content-type'
  | 'json'
  | 'text'
  | ((response: Response) => Promise<any>)

type CustomRequestInit = Override<
  RequestInit,
  {
    headers?:
      | Headers
      | string[][]
      | Record<string, string | undefined>
      | undefined
  }
>

export interface FetchArgs extends CustomRequestInit {
  url: string
  params?: Record<string, any>
  body?: any
  responseHandler?: ResponseHandler
  validateStatus?: (response: Response, body: any) => boolean
  /**
   * A number in milliseconds that represents that maximum time a request can take before timing out.
   */
  timeout?: number
}

/**
 * A mini-wrapper that passes arguments straight through to
 * {@link [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)}.
 * Avoids storing `fetch` in a closure, in order to permit mocking/monkey-patching.
 */
const defaultFetchFn: typeof fetch = (...args) => fetch(...args)

const defaultValidateStatus = (response: Response) =>
  response.status >= 200 && response.status <= 299

const defaultIsJsonContentType = (headers: Headers) =>
  /*applicat*/ /ion\/(vnd\.api\+)?json/.test(headers.get('content-type') || '')

export type FetchBaseQueryError =
  | {
      /**
       * * `number`:
       *   HTTP status code
       */
      status: number
      data: unknown
    }
  | {
      /**
       * * `"FETCH_ERROR"`:
       *   An error that occurred during execution of `fetch` or the `fetchFn` callback option
       **/
      status: 'FETCH_ERROR'
      data?: undefined
      error: string
    }
  | {
      /**
       * * `"PARSING_ERROR"`:
       *   An error happened during parsing.
       *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",
       *   or an error occurred while executing a custom `responseHandler`.
       **/
      status: 'PARSING_ERROR'
      originalStatus: number
      data: string
      error: string
    }
  | {
      /**
       * * `"TIMEOUT_ERROR"`:
       *   Request timed out
       **/
      status: 'TIMEOUT_ERROR'
      data?: undefined
      error: string
    }
  | {
      /**
       * * `"CUSTOM_ERROR"`:
       *   A custom error type that you can return from your `queryFn` where another error might not make sense.
       **/
      status: 'CUSTOM_ERROR'
      data?: unknown
      error: string
    }

function stripUndefined(obj: any) {
  if (!isPlainObject(obj)) {
    return obj
  }
  const copy: Record<string, any> = { ...obj }
  for (const [k, v] of Object.entries(copy)) {
    if (v === undefined) delete copy[k]
  }
  return copy
}

// Only set the content-type to json if appropriate. Will not be true for FormData, ArrayBuffer, Blob, etc.
const isJsonifiable = (body: any) =>
  typeof body === 'object' &&
  (isPlainObject(body) ||
    Array.isArray(body) ||
    typeof body.toJSON === 'function')

export type FetchBaseQueryArgs = {
  baseUrl?: string
  prepareHeaders?: (
    headers: Headers,
    api: Pick<
      BaseQueryApi,
      'getState' | 'extra' | 'endpoint' | 'type' | 'forced'
    > & { arg: string | FetchArgs; extraOptions: unknown },
  ) => MaybePromise<Headers | void>
  fetchFn?: (
    input: RequestInfo,
    init?: RequestInit | undefined,
  ) => Promise<Response>
  paramsSerializer?: (params: Record<string, any>) => string
  /**
   * By default, we only check for 'application/json' and 'application/vnd.api+json' as the content-types for json. If you need to support another format, you can pass
   * in a predicate function for your given api to get the same automatic stringifying behavior
   * @example
   * ```ts
   * const isJsonContentType = (headers: Headers) => ["application/vnd.api+json", "application/json", "application/vnd.hal+json"].includes(headers.get("content-type")?.trim());
   * ```
   */
  isJsonContentType?: (headers: Headers) => boolean
  /**
   * Defaults to `application/json`;
   */
  jsonContentType?: string

  /**
   * Custom replacer function used when calling `JSON.stringify()`;
   */
  jsonReplacer?: (this: any, key: string, value: any) => any
} & RequestInit &
  Pick<FetchArgs, 'responseHandler' | 'validateStatus' | 'timeout'>

export type FetchBaseQueryMeta = { request: Request; response?: Response }

/**
 * This is a very small wrapper around fetch that aims to simplify requests.
 *
 * @example
 * ```ts
 * const baseQuery = fetchBaseQuery({
 *   baseUrl: 'https://api.your-really-great-app.com/v1/',
 *   prepareHeaders: (headers, { getState }) => {
 *     const token = (getState() as RootState).auth.token;
 *     // If we have a token set in state, let's assume that we should be passing it.
 *     if (token) {
 *       headers.set('authorization', `Bearer ${token}`);
 *     }
 *     return headers;
 *   },
 * })
 * ```
 *
 * @param {string} baseUrl
 * The base URL for an API service.
 * Typically in the format of https://example.com/
 *
 * @param {(headers: Headers, api: { getState: () => unknown; arg: string | FetchArgs; extra: unknown; endpoint: string; type: 'query' | 'mutation'; forced: boolean; }) => Headers} prepareHeaders
 * An optional function that can be used to inject headers on requests.
 * Provides a Headers object, most of the `BaseQueryApi` (`dispatch` is not available), and the arg passed into the query function.
 * Useful for setting authentication or headers that need to be set conditionally.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Headers
 *
 * @param {(input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>} fetchFn
 * Accepts a custom `fetch` function if you do not want to use the default on the window.
 * Useful in SSR environments if you need to use a library such as `isomorphic-fetch` or `cross-fetch`
 *
 * @param {(params: Record<string, unknown>) => string} paramsSerializer
 * An optional function that can be used to stringify querystring parameters.
 *
 * @param {(headers: Headers) => boolean} isJsonContentType
 * An optional predicate function to determine if `JSON.stringify()` should be called on the `body` arg of `FetchArgs`
 *
 * @param {string} jsonContentType Used when automatically setting the content-type header for a request with a jsonifiable body that does not have an explicit content-type header. Defaults to `application/json`.
 *
 * @param {(this: any, key: string, value: any) => any} jsonReplacer Custom replacer function used when calling `JSON.stringify()`.
 *
 * @param {number} timeout
 * A number in milliseconds that represents the maximum time a request can take before timing out.
 */

export function fetchBaseQuery({
  baseUrl,
  prepareHeaders = (x) => x,
  fetchFn = defaultFetchFn,
  paramsSerializer,
  isJsonContentType = defaultIsJsonContentType,
  jsonContentType = 'application/json',
  jsonReplacer,
  timeout: defaultTimeout,
  responseHandler: globalResponseHandler,
  validateStatus: globalValidateStatus,
  ...baseFetchOptions
}: FetchBaseQueryArgs = {}): BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> {
  if (typeof fetch === 'undefined' && fetchFn === defaultFetchFn) {
    console.warn(
      'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.',
    )
  }
  return async (arg, api, extraOptions) => {
    const { getState, extra, endpoint, forced, type } = api
    let meta: FetchBaseQueryMeta | undefined
    let {
      url,
      headers = new Headers(baseFetchOptions.headers),
      params = undefined,
      responseHandler = globalResponseHandler ?? ('json' as const),
      validateStatus = globalValidateStatus ?? defaultValidateStatus,
      timeout = defaultTimeout,
      ...rest
    } = typeof arg == 'string' ? { url: arg } : arg

    let config: RequestInit = {
      ...baseFetchOptions,
      signal: timeout
        ? anySignal(api.signal, timeoutSignal(timeout))
        : api.signal,
      ...rest,
    }

    headers = new Headers(stripUndefined(headers))
    config.headers =
      (await prepareHeaders(headers, {
        getState,
        arg,
        extra,
        endpoint,
        forced,
        type,
        extraOptions,
      })) || headers

    const bodyIsJsonifiable = isJsonifiable(config.body)

    // Remove content-type for non-jsonifiable bodies to let the browser set it automatically
    // Exception: keep content-type for string bodies as they might be intentional (text/plain, text/html, etc.)
    if (
      config.body != null &&
      !bodyIsJsonifiable &&
      typeof config.body !== 'string'
    ) {
      config.headers.delete('content-type')
    }

    if (!config.headers.has('content-type') && bodyIsJsonifiable) {
      config.headers.set('content-type', jsonContentType)
    }

    if (bodyIsJsonifiable && isJsonContentType(config.headers)) {
      config.body = JSON.stringify(config.body, jsonReplacer)
    }

    // Set Accept header based on responseHandler if not already set
    if (!config.headers.has('accept')) {
      if (responseHandler === 'json') {
        config.headers.set('accept', 'application/json')
      } else if (responseHandler === 'text') {
        config.headers.set('accept', 'text/plain, text/html, */*')
      }
      // For 'content-type' responseHandler, don't set Accept (let server decide)
    }

    if (params) {
      const divider = ~url.indexOf('?') ? '&' : '?'
      const query = paramsSerializer
        ? paramsSerializer(params)
        : new URLSearchParams(stripUndefined(params))
      url += divider + query
    }

    url = joinUrls(baseUrl, url)

    const request = new Request(url, config)
    const requestClone = new Request(url, config)
    meta = { request: requestClone }

    let response
    try {
      response = await fetchFn(request)
    } catch (e) {
      return {
        error: {
          status:
            (e instanceof Error ||
              (typeof DOMException !== 'undefined' &&
                e instanceof DOMException)) &&
            e.name === 'TimeoutError'
              ? 'TIMEOUT_ERROR'
              : 'FETCH_ERROR',
          error: String(e),
        },
        meta,
      }
    }
    const responseClone = response.clone()

    meta.response = responseClone

    let resultData: any
    let responseText: string = ''
    try {
      let handleResponseError
      await Promise.all([
        handleResponse(response, responseHandler).then(
          (r) => (resultData = r),
          (e) => (handleResponseError = e),
        ),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        responseClone.text().then(
          (r) => (responseText = r),
          () => {},
        ),
      ])
      if (handleResponseError) throw handleResponseError
    } catch (e) {
      return {
        error: {
          status: 'PARSING_ERROR',
          originalStatus: response.status,
          data: responseText,
          error: String(e),
        },
        meta,
      }
    }

    return validateStatus(response, resultData)
      ? {
          data: resultData,
          meta,
        }
      : {
          error: {
            status: response.status,
            data: resultData,
          },
          meta,
        }
  }

  async function handleResponse(
    response: Response,
    responseHandler: ResponseHandler,
  ) {
    if (typeof responseHandler === 'function') {
      return responseHandler(response)
    }

    if (responseHandler === 'content-type') {
      responseHandler = isJsonContentType(response.headers) ? 'json' : 'text'
    }

    if (responseHandler === 'json') {
      const text = await response.text()
      return text.length ? JSON.parse(text) : null
    }

    return response.text()
  }
}
