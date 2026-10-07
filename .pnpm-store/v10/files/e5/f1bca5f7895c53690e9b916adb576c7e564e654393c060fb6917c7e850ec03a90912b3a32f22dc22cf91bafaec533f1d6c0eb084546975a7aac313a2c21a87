import { until } from '@open-draft/until'
import { DeferredPromise } from '@open-draft/deferred-promise'
import { HttpRequestEventMap } from '../../glossary'
import { Interceptor } from '../../Interceptor'
import { RequestController } from '../../RequestController'
import { emitAsync } from '../../utils/emitAsync'
import { handleRequest } from '../../utils/handleRequest'
import { canParseUrl } from '../../utils/canParseUrl'
import { createRequestId } from '../../createRequestId'
import { createNetworkError } from './utils/createNetworkError'
import { followFetchRedirect } from './utils/followRedirect'
import { decompressResponse } from './utils/decompression'
import { hasConfigurableGlobal } from '../../utils/hasConfigurableGlobal'
import { FetchRequest, FetchResponse } from '../../utils/fetchUtils'
import { setRawRequest } from '../../getRawRequest'
import { isResponseError } from '../../utils/responseUtils'
import { patchesRegistry } from '../../utils/patchesRegistry'

export class FetchInterceptor extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('fetch')

  constructor() {
    super(FetchInterceptor.symbol)
  }

  protected checkEnvironment() {
    return hasConfigurableGlobal('fetch')
  }

  protected async setup() {
    const logger = this.logger.extend('setup')

    const pureFetch = globalThis.fetch

    const fetchProxy: typeof fetch = async (input, init) => {
      const requestId = createRequestId()

      /**
       * @note Resolve potentially relative request URL
       * against the present `location`. This is mainly
       * for native `fetch` in JSDOM.
       * @see https://github.com/mswjs/msw/issues/1625
       */
      const resolvedInput =
        typeof input === 'string' &&
        typeof location !== 'undefined' &&
        !canParseUrl(input)
          ? new URL(input, location.href)
          : input

      const request = new FetchRequest(resolvedInput, init)

      /**
       * @note Set the raw request only if a Request instance was provided to fetch.
       */
      if (input instanceof Request) {
        setRawRequest(request, input)
      }

      const responsePromise = new DeferredPromise<Response>()

      const controller = new RequestController(request, {
        passthrough: async () => {
          this.logger.info('request has not been handled, passthrough...')

          /**
           * @note Clone the request instance right before performing it.
           * This preserves any modifications made to the intercepted request
           * in the "request" listener. This also allows the user to read the
           * request body in the "response" listener (otherwise "unusable").
           */
          const requestCloneForResponseEvent = request.clone()

          // Perform the intercepted request as-is.
          const { error: responseError, data: originalResponse } = await until(
            () => pureFetch(request)
          )

          if (responseError) {
            return responsePromise.reject(responseError)
          }

          this.logger.info('original fetch performed', originalResponse)

          if (this.emitter.listenerCount('response') > 0) {
            this.logger.info('emitting the "response" event...')

            const responseClone = FetchResponse.clone(originalResponse)
            await emitAsync(this.emitter, 'response', {
              response: responseClone,
              isMockedResponse: false,
              request: requestCloneForResponseEvent,
              requestId,
            })
          }

          // Resolve the response promise with the original response
          // since the `fetch()` return this internal promise.
          responsePromise.resolve(originalResponse)
        },
        respondWith: async (rawResponse) => {
          // Handle mocked `Response.error()` (i.e. request errors).
          if (isResponseError(rawResponse)) {
            this.logger.info('request has errored!', { response: rawResponse })
            responsePromise.reject(createNetworkError(rawResponse))
            return
          }

          this.logger.info('received mocked response!', {
            rawResponse,
          })

          // Decompress the mocked response body, if applicable.
          const decompressedStream = decompressResponse(rawResponse)
          const response = new FetchResponse(
            decompressedStream || rawResponse.body,
            {
              url: request.url,
              status: rawResponse.status,
              statusText: rawResponse.statusText,
              headers: rawResponse.headers,
            }
          )

          /**
           * Undici's handling of following redirect responses.
           * Treat the "manual" redirect mode as a regular mocked response.
           * This way, the client can manually follow the redirect it receives.
           * @see https://github.com/nodejs/undici/blob/a6dac3149c505b58d2e6d068b97f4dc993da55f0/lib/web/fetch/index.js#L1173
           */
          if (FetchResponse.isRedirectResponse(response.status)) {
            // Reject the request promise if its `redirect` is set to `error`
            // and it receives a mocked redirect response.
            if (request.redirect === 'error') {
              responsePromise.reject(createNetworkError('unexpected redirect'))
              return
            }

            if (request.redirect === 'follow') {
              followFetchRedirect(request, response).then(
                (response) => {
                  responsePromise.resolve(response)
                },
                (reason) => {
                  responsePromise.reject(reason)
                }
              )
              return
            }
          }

          if (this.emitter.listenerCount('response') > 0) {
            this.logger.info('emitting the "response" event...')

            // Await the response listeners to finish before resolving
            // the response promise. This ensures all your logic finishes
            // before the interceptor resolves the pending response.
            await emitAsync(this.emitter, 'response', {
              // Clone the mocked response for the "response" event listener.
              // This way, the listener can read the response and not lock its body
              // for the actual fetch consumer.
              response: FetchResponse.clone(response),
              isMockedResponse: true,
              request,
              requestId,
            })
          }

          responsePromise.resolve(response)
        },
        errorWith: (reason) => {
          this.logger.info('request has been aborted!', { reason })
          responsePromise.reject(reason)
        },
      })

      this.logger.info('[%s] %s', request.method, request.url)
      this.logger.info('awaiting for the mocked response...')

      this.logger.info(
        'emitting the "request" event for %s listener(s)...',
        this.emitter.listenerCount('request')
      )

      await handleRequest({
        request,
        requestId,
        emitter: this.emitter,
        controller,
      })

      return responsePromise
    }

    logger.info('patching global fetch...')

    this.subscriptions.push(
      patchesRegistry.applyPatch(globalThis, 'fetch', () => fetchProxy)
    )

    logger.info('global fetch patched!', globalThis.fetch.name)
  }
}
