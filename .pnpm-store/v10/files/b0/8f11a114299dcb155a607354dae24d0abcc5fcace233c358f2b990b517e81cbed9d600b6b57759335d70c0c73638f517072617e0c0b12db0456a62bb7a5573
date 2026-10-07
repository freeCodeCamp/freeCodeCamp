import { urlToHttpOptions } from 'node:url'
import {
  Agent as HttpAgent,
  globalAgent as httpGlobalAgent,
  IncomingMessage,
} from 'node:http'
import {
  RequestOptions,
  Agent as HttpsAgent,
  globalAgent as httpsGlobalAgent,
} from 'node:https'
import {
  /**
   * @note Use the Node.js URL instead of the global URL
   * because environments like JSDOM may override the global,
   * breaking the compatibility with Node.js.
   * @see https://github.com/node-fetch/node-fetch/issues/1376#issuecomment-966435555
   */
  URL,
  Url as LegacyURL,
  parse as parseUrl,
} from 'node:url'
import { Logger } from '@open-draft/logger'
import {
  ResolvedRequestOptions,
  getUrlByRequestOptions,
} from '../../../utils/getUrlByRequestOptions'
import { cloneObject } from '../../../utils/cloneObject'
import { isObject } from '../../../utils/isObject'

const logger = new Logger('http normalizeClientRequestArgs')

export type HttpRequestCallback = (response: IncomingMessage) => void

export type ClientRequestArgs =
  // Request without any arguments is also possible.
  | []
  | [string | URL | LegacyURL, HttpRequestCallback?]
  | [string | URL | LegacyURL, RequestOptions, HttpRequestCallback?]
  | [RequestOptions, HttpRequestCallback?]

function resolveRequestOptions(
  args: ClientRequestArgs,
  url: URL
): RequestOptions {
  // Calling `fetch` provides only URL to `ClientRequest`
  // without any `RequestOptions` or callback.
  if (typeof args[1] === 'undefined' || typeof args[1] === 'function') {
    logger.info('request options not provided, deriving from the url', url)
    return urlToHttpOptions(url)
  }

  if (args[1]) {
    logger.info('has custom RequestOptions!', args[1])
    const requestOptionsFromUrl = urlToHttpOptions(url)

    logger.info('derived RequestOptions from the URL:', requestOptionsFromUrl)

    /**
     * Clone the request options to lock their state
     * at the moment they are provided to `ClientRequest`.
     * @see https://github.com/mswjs/interceptors/issues/86
     */
    logger.info('cloning RequestOptions...')
    const clonedRequestOptions = cloneObject(args[1])
    logger.info('successfully cloned RequestOptions!', clonedRequestOptions)

    return {
      ...requestOptionsFromUrl,
      ...clonedRequestOptions,
    }
  }

  logger.info('using an empty object as request options')
  return {} as RequestOptions
}

/**
 * Overrides the given `URL` instance with the explicit properties provided
 * on the `RequestOptions` object. The options object takes precedence,
 * and will replace URL properties like "host", "path", and "port", if specified.
 */
function overrideUrlByRequestOptions(url: URL, options: RequestOptions): URL {
  url.host = options.host || url.host
  url.hostname = options.hostname || url.hostname
  url.port = options.port ? options.port.toString() : url.port

  if (options.path) {
    const parsedOptionsPath = parseUrl(options.path, false)
    url.pathname = parsedOptionsPath.pathname || ''
    url.search = parsedOptionsPath.search || ''
  }

  return url
}

function resolveCallback(
  args: ClientRequestArgs
): HttpRequestCallback | undefined {
  return typeof args[1] === 'function' ? args[1] : args[2]
}

export type NormalizedClientRequestArgs = [
  url: URL,
  options: ResolvedRequestOptions,
  callback?: HttpRequestCallback
]

/**
 * Normalizes parameters given to a `http.request` call
 * so it always has a `URL` and `RequestOptions`.
 */
export function normalizeClientRequestArgs(
  defaultProtocol: string,
  args: ClientRequestArgs
): NormalizedClientRequestArgs {
  let url: URL
  let options: ResolvedRequestOptions
  let callback: HttpRequestCallback | undefined

  logger.info('arguments', args)
  logger.info('using default protocol:', defaultProtocol)

  // Support "http.request()" calls without any arguments.
  // That call results in a "GET http://localhost" request.
  if (args.length === 0) {
    const url = new URL('http://localhost')
    const options = resolveRequestOptions(args, url)
    return [url, options]
  }

  // Convert a url string into a URL instance
  // and derive request options from it.
  if (typeof args[0] === 'string') {
    logger.info('first argument is a location string:', args[0])

    url = new URL(args[0])
    logger.info('created a url:', url)

    const requestOptionsFromUrl = urlToHttpOptions(url)
    logger.info('request options from url:', requestOptionsFromUrl)

    options = resolveRequestOptions(args, url)
    logger.info('resolved request options:', options)

    callback = resolveCallback(args)
  }
  // Handle a given URL instance as-is
  // and derive request options from it.
  else if (args[0] instanceof URL) {
    url = args[0]
    logger.info('first argument is a URL:', url)

    // Check if the second provided argument is RequestOptions.
    // If it is, check if "options.path" was set and rewrite it
    // on the input URL.
    // Do this before resolving options from the URL below
    // to prevent query string from being duplicated in the path.
    if (typeof args[1] !== 'undefined' && isObject<RequestOptions>(args[1])) {
      url = overrideUrlByRequestOptions(url, args[1])
    }

    options = resolveRequestOptions(args, url)
    logger.info('derived request options:', options)

    callback = resolveCallback(args)
  }
  // Handle a legacy URL instance and re-normalize from either a RequestOptions object
  // or a WHATWG URL.
  else if ('hash' in args[0] && !('method' in args[0])) {
    const [legacyUrl] = args
    logger.info('first argument is a legacy URL:', legacyUrl)

    if (legacyUrl.hostname === null) {
      /**
       * We are dealing with a relative url, so use the path as an "option" and
       * merge in any existing options, giving priority to existing options -- i.e. a path in any
       * existing options will take precedence over the one contained in the url. This is consistent
       * with the behaviour in ClientRequest.
       * @see https://github.com/nodejs/node/blob/d84f1312915fe45fe0febe888db692c74894c382/lib/_http_client.js#L122
       */
      logger.info('given legacy URL is relative (no hostname)')

      return isObject(args[1])
        ? normalizeClientRequestArgs(defaultProtocol, [
            { path: legacyUrl.path, ...args[1] },
            args[2],
          ])
        : normalizeClientRequestArgs(defaultProtocol, [
            { path: legacyUrl.path },
            args[1] as HttpRequestCallback,
          ])
    }

    logger.info('given legacy url is absolute')

    // We are dealing with an absolute URL, so convert to WHATWG and try again.
    const resolvedUrl = new URL(legacyUrl.href)

    return args[1] === undefined
      ? normalizeClientRequestArgs(defaultProtocol, [resolvedUrl])
      : typeof args[1] === 'function'
      ? normalizeClientRequestArgs(defaultProtocol, [resolvedUrl, args[1]])
      : normalizeClientRequestArgs(defaultProtocol, [
          resolvedUrl,
          args[1],
          args[2],
        ])
  }
  // Handle a given "RequestOptions" object as-is
  // and derive the URL instance from it.
  else if (isObject(args[0])) {
    options = { ...(args[0] as any) }
    logger.info('first argument is RequestOptions:', options)

    // When handling a "RequestOptions" object without an explicit "protocol",
    // infer the protocol from the request issuing module (http/https).
    options.protocol = options.protocol || defaultProtocol
    logger.info('normalized request options:', options)

    url = getUrlByRequestOptions(options)
    logger.info('created a URL from RequestOptions:', url.href)

    callback = resolveCallback(args)
  } else {
    throw new Error(
      `Failed to construct ClientRequest with these parameters: ${args}`
    )
  }

  options.protocol = options.protocol || url.protocol
  options.method = options.method || 'GET'

  /**
   * Ensure that the default Agent is always set.
   * This prevents the protocol mismatch for requests with { agent: false },
   * where the global Agent is inferred.
   * @see https://github.com/mswjs/msw/issues/1150
   * @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L130
   * @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L157-L159
   */
  if (!options._defaultAgent) {
    logger.info(
      'has no default agent, setting the default agent for "%s"',
      options.protocol
    )

    options._defaultAgent =
      options.protocol === 'https:' ? httpsGlobalAgent : httpGlobalAgent
  }

  logger.info('successfully resolved url:', url.href)
  logger.info('successfully resolved options:', options)
  logger.info('successfully resolved callback:', callback)

  /**
   * @note If the user-provided URL is not a valid URL in Node.js,
   * (e.g. the one provided by the JSDOM polyfills), case it to
   * string. Otherwise, this throws on Node.js incompatibility
   * (`ERR_INVALID_ARG_TYPE` on the connection listener)
   * @see https://github.com/node-fetch/node-fetch/issues/1376#issuecomment-966435555
   */
  if (!(url instanceof URL)) {
    url = (url as any).toString()
  }

  return [url, options, callback]
}
