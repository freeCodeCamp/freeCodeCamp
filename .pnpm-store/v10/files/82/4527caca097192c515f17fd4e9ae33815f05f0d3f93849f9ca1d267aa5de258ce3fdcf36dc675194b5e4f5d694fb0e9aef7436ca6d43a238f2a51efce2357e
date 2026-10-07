import type { Logger } from '@open-draft/logger'
import { XMLHttpRequestEmitter } from '.'
import { RequestController } from '../../RequestController'
import { XMLHttpRequestController } from './XMLHttpRequestController'
import { handleRequest } from '../../utils/handleRequest'
import { isResponseError } from '../../utils/responseUtils'

export interface XMLHttpRequestProxyOptions {
  emitter: XMLHttpRequestEmitter
  logger: Logger
}

/**
 * Create a proxied `XMLHttpRequest` class.
 * The proxied class establishes spies on certain methods,
 * allowing us to intercept requests and respond to them.
 */
export function createXMLHttpRequestProxy({
  emitter,
  logger,
}: XMLHttpRequestProxyOptions) {
  const XMLHttpRequestProxy = new Proxy(globalThis.XMLHttpRequest, {
    construct(target, args, newTarget) {
      logger.info('constructed new XMLHttpRequest')

      const originalRequest = Reflect.construct(
        target,
        args,
        newTarget
      ) as XMLHttpRequest

      /**
       * @note Forward prototype descriptors onto the proxied object.
       * XMLHttpRequest is implemented in JSDOM in a way that assigns
       * a bunch of descriptors, like "set responseType()" on the prototype.
       * With this propagation, we make sure that those descriptors trigger
       * when the user operates with the proxied request instance.
       */
      const prototypeDescriptors = Object.getOwnPropertyDescriptors(
        target.prototype
      )
      for (const propertyName in prototypeDescriptors) {
        Reflect.defineProperty(
          originalRequest,
          propertyName,
          prototypeDescriptors[propertyName]
        )
      }

      const xhrRequestController = new XMLHttpRequestController(
        originalRequest,
        logger
      )

      xhrRequestController.onRequest = async function ({ request, requestId }) {
        const controller = new RequestController(request, {
          passthrough: () => {
            this.logger.info(
              'no mocked response received, performing request as-is...'
            )
          },
          respondWith: async (response) => {
            if (isResponseError(response)) {
              this.errorWith(new TypeError('Network error'))
              return
            }

            await this.respondWith(response)
          },
          errorWith: (reason) => {
            this.logger.info('request errored!', { error: reason })

            if (reason instanceof Error) {
              this.errorWith(reason)
            }
          },
        })

        this.logger.info('awaiting mocked response...')

        this.logger.info(
          'emitting the "request" event for %s listener(s)...',
          emitter.listenerCount('request')
        )

        await handleRequest({
          request,
          requestId,
          controller,
          emitter,
        })
      }

      xhrRequestController.onResponse = async function ({
        response,
        isMockedResponse,
        request,
        requestId,
      }) {
        this.logger.info(
          'emitting the "response" event for %s listener(s)...',
          emitter.listenerCount('response')
        )

        emitter.emit('response', {
          response,
          isMockedResponse,
          request,
          requestId,
        })
      }

      // Return the proxied request from the controller
      // so that the controller can react to the consumer's interactions
      // with this request (opening/sending/etc).
      return xhrRequestController.request
    },
  })

  return XMLHttpRequestProxy
}
