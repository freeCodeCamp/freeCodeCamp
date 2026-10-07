import { invariant } from 'outvariant'
import type { Emitter } from 'rettime'
import { DeferredPromise } from '@open-draft/deferred-promise'
import { FetchResponse } from '@mswjs/interceptors'
import { NetworkSource } from '#core/experimental/sources/network-source'
import { RequestHandler } from '#core/handlers/RequestHandler'
import {
  HttpNetworkFrame,
  ResponseEvent,
} from '#core/experimental/frames/http-frame'
import { HttpResponse } from '#core/HttpResponse'
import { toResponseInit } from '#core/utils/toResponseInit'
import { devUtils } from '#core/utils/internal/devUtils'
import {
  supportsReadableStreamTransfer,
  supportsServiceWorker,
} from '../utils/supports'
import { getWorkerInstance } from '../utils/get-worker-instance'
import type { WorkerChannelEventMap } from '../utils/workerChannel'
import { WorkerChannel } from '../utils/workerChannel'
import type { FindWorker } from '../glossary'
import { deserializeRequest } from '../utils/deserializeRequest'
import { validateWorkerScope } from '../utils/validate-worker-scope'
import { shouldInvalidateWorker } from '../utils/should-invalidate-worker'

export interface ServiceWorkerSourceOptions {
  quiet?: boolean
  serviceWorker: {
    url: string
    options?: RegistrationOptions
  }
  findWorker?: FindWorker
}

type WorkerChannelRequestEvent = Emitter.Event<
  WorkerChannel,
  'REQUEST',
  WorkerChannelEventMap
>

type WorkerChannelResponseEvent = Emitter.Event<
  WorkerChannel,
  'RESPONSE',
  WorkerChannelEventMap
>

type WorkerChannelClient =
  WorkerChannelEventMap['MOCKING_ENABLED']['data']['client']

export class ServiceWorkerSource extends NetworkSource<ServiceWorkerHttpNetworkFrame> {
  static #current?: ServiceWorkerSource

  /**
   * Create a new Service Worker source or reuse an existing one.
   * These sources act as a singleton and only get recreated if the options change.
   */
  public static async from(
    options: ServiceWorkerSourceOptions,
  ): Promise<ServiceWorkerSource> {
    if (ServiceWorkerSource.#current == null) {
      ServiceWorkerSource.#current = new ServiceWorkerSource(options)
    } else if (
      shouldInvalidateWorker(ServiceWorkerSource.#current.#options, options)
    ) {
      await ServiceWorkerSource.#current.terminate()
      ServiceWorkerSource.#current = new ServiceWorkerSource(options)
    }

    return ServiceWorkerSource.#current
  }

  #options: ServiceWorkerSourceOptions
  #frames: Map<string, ServiceWorkerHttpNetworkFrame>
  #channel: WorkerChannel
  #listenerController?: AbortController
  #clientPromise?: Promise<WorkerChannelClient>
  #keepAliveInterval?: number
  #stoppedAt?: number

  public workerPromise: DeferredPromise<
    [ServiceWorker, ServiceWorkerRegistration]
  >

  constructor(options: ServiceWorkerSourceOptions) {
    super()

    invariant(
      supportsServiceWorker(),
      'Failed to use Service Worker as the network source: the Service Worker API is not supported in this environment',
    )

    this.#options = options
    this.#frames = new Map()
    this.workerPromise = new DeferredPromise()
    this.#channel = new WorkerChannel({
      getWorker: () => this.workerPromise.then(([worker]) => worker),
    })
  }

  public async enable(): Promise<ServiceWorkerRegistration> {
    /**
     * @note The source is considered already running if the worker has been
     * resolved AND `stop()` has not been called since. `workerPromise` is NOT
     * reset on `disable()` so that the channel's `getWorker()` can keep
     * resolving to the registered SW for post-stop passthrough replies.
     */
    if (
      this.workerPromise.state === 'fulfilled' &&
      typeof this.#stoppedAt == 'undefined'
    ) {
      devUtils.warn(
        'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.',
      )

      return this.workerPromise.then(([, registration]) => registration)
    }

    this.#stoppedAt = undefined
    this.#channel.removeAllListeners()
    this.#frames.clear()

    this.#listenerController = new AbortController()
    const [worker, registration] = await this.#startWorker()

    if (worker.state !== 'activated') {
      const controller = new AbortController()
      const activationPromise = new DeferredPromise<void>()
      activationPromise.then(() => controller.abort())

      worker.addEventListener(
        'statechange',
        () => {
          if (worker.state === 'activated') {
            activationPromise.resolve()
          }
        },
        {
          signal: controller.signal,
        },
      )

      await activationPromise
    }

    this.#channel.postMessage('MOCK_ACTIVATE')

    const clientConfirmationPromise = new DeferredPromise<WorkerChannelClient>()
    this.#clientPromise = clientConfirmationPromise

    this.#channel.once('MOCKING_ENABLED', (event) => {
      clientConfirmationPromise.resolve(event.data.client)
    })
    await clientConfirmationPromise

    if (!this.#options.quiet) {
      this.#printStartMessage()
    }

    return registration
  }

  public disable(): void {
    /**
     * @note Do NOT call `super.disable()` because it removes any "frame" listeners
     * from this network source, effectively turning it off. The Service Worker source
     * is a bit special since it might process in-flight requests that have been performed
     * after it's been disabled.
     */

    if (typeof this.#stoppedAt !== 'undefined') {
      devUtils.warn(
        `Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.`,
      )

      return
    }

    this.#stoppedAt = Date.now()

    this.#listenerController?.abort()
    this.#listenerController = undefined

    /**
     * @note Tell the Service Worker to drop this client from its active set
     * so it stops forwarding REQUEST events here. `stoppedAt` still guards
     * any requests the SW already forwarded before this message arrived.
     */
    this.#channel.postMessage('CLIENT_CLOSED')

    /**
     * @note Do NOT reset `workerPromise` here. The channel must continue to
     * resolve the currently registered SW so that any in-flight requests the
     * worker forwards after `stop()` can be answered with `PASSTHROUGH` by
     * `#handleRequest`. `#startWorker` swaps in a fresh deferred on re-enable.
     */

    if (!this.#options.quiet) {
      this.#printStopMessage()
    }
  }

  /**
   * Terminal teardown. Unregisters the Service Worker, tears down the channel,
   * and clears timers. Called when the singleton is being replaced with one
   * that has different options. The instance is not usable afterwards.
   */
  public async terminate(): Promise<void> {
    if (this.#keepAliveInterval != null) {
      clearInterval(this.#keepAliveInterval)
      this.#keepAliveInterval = undefined
    }

    this.#frames.clear()
    this.#channel.terminate()
    this.#listenerController?.abort()
    this.#listenerController = undefined

    if (this.workerPromise.state === 'fulfilled') {
      const [, registration] = await this.workerPromise
      await registration.unregister()
    }

    if (ServiceWorkerSource.#current === this) {
      ServiceWorkerSource.#current = undefined
    }
  }

  async #startWorker() {
    if (this.#keepAliveInterval) {
      clearInterval(this.#keepAliveInterval)
    }

    const workerUrl = this.#options.serviceWorker.url

    const [worker, registration] = await getWorkerInstance(
      workerUrl,
      this.#options.serviceWorker.options,
      this.#options.findWorker || this.#defaultFindWorker,
    )

    if (worker == null) {
      const missingWorkerMessage = this.#options?.findWorker
        ? devUtils.formatMessage(
            `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
     `,
            workerUrl,
          )
        : devUtils.formatMessage(
            `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
            workerUrl,
            location.host,
          )

      throw new Error(missingWorkerMessage)
    }

    if (this.workerPromise.state === 'pending') {
      this.workerPromise.resolve([worker, registration])
    } else {
      /**
       * @note Re-enable after `stop()`: the previous `workerPromise` is already
       * fulfilled and cannot be resolved again. Swap in a pre-resolved one so
       * `getWorker()` sees the new worker instance immediately.
       */
      this.workerPromise = new DeferredPromise((resolve) => {
        resolve([worker, registration])
      })
    }

    this.#channel.on('REQUEST', this.#handleRequest.bind(this))
    this.#channel.on('RESPONSE', this.#handleResponse.bind(this))

    window.addEventListener(
      'beforeunload',
      () => {
        if (worker.state !== 'redundant') {
          this.#channel.postMessage('CLIENT_CLOSED')
        }

        clearInterval(this.#keepAliveInterval)

        window.postMessage({ type: 'msw/worker:stop' })
      },
      {
        signal: this.#listenerController?.signal,
      },
    )

    await this.#checkWorkerIntegrity().catch((error) => {
      devUtils.error(
        'Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues) and include the original error below.',
      )
      console.error(error)
    })

    this.#keepAliveInterval = window.setInterval(() => {
      this.#channel.postMessage('KEEPALIVE_REQUEST')
    }, 5000)

    if (!this.#options.quiet) {
      validateWorkerScope(registration)
    }

    return [worker, registration] as const
  }

  async #handleRequest(event: WorkerChannelRequestEvent): Promise<void> {
    if (this.#stoppedAt && event.data.interceptedAt > this.#stoppedAt) {
      return event.postMessage('PASSTHROUGH')
    }

    const request = deserializeRequest(event.data)
    RequestHandler.cache.set(request, request.clone())

    const frame = new ServiceWorkerHttpNetworkFrame({
      event,
      request,
    })
    this.#frames.set(event.data.id, frame)

    await this.queue(frame)
  }

  async #handleResponse(event: WorkerChannelResponseEvent): Promise<void> {
    const { request, response, isMockedResponse } = event.data

    /**
     * CORS requests with `mode: "no-cors"` result in "opaque" responses.
     * That kind of responses cannot be manipulated in JavaScript due
     * to the security considerations.
     * @see https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
     * @see https://github.com/mswjs/msw/issues/529
     */
    if (response.type?.includes('opaque')) {
      this.#frames.delete(request.id)
      return
    }

    const frame = this.#frames.get(request.id)
    this.#frames.delete(request.id)

    /**
     * @note A request frame will be missing in case of passthrough after the worker is stopped.
     * Creating a frame is costly so it's better to handle it as an edge case here.
     */
    if (frame == null) {
      return
    }

    const fetchRequest = deserializeRequest(request)
    const fetchResponse =
      response.status === 0
        ? Response.error()
        : new FetchResponse(
            /**
             * Responses may be streams here, but when we create a response object
             * with null-body status codes, like 204, 205, 304 Response will
             * throw when passed a non-null body, so ensure it's null here
             * for those codes
             */
            FetchResponse.isResponseWithBody(response.status)
              ? response.body
              : null,
            {
              ...response,
              /**
               * Set response URL if it's not set already.
               * @see https://github.com/mswjs/msw/issues/2030
               * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/url
               */
              url: request.url,
            },
          )

    frame.events.emit(
      new ResponseEvent(
        isMockedResponse ? 'response:mocked' : 'response:bypass',
        {
          requestId: frame.data.id,
          request: fetchRequest,
          response: fetchResponse,
          isMockedResponse,
        },
      ),
    )
  }

  #defaultFindWorker: FindWorker = (workerUrl, mockServiceWorkerUrl) => {
    return workerUrl === mockServiceWorkerUrl
  }

  async #checkWorkerIntegrity(): Promise<void> {
    const integrityCheckPromise = new DeferredPromise<void>()

    this.#channel.postMessage('INTEGRITY_CHECK_REQUEST')
    this.#channel.once('INTEGRITY_CHECK_RESPONSE', (event) => {
      const { checksum, packageVersion } = event.data

      // Compare the response from the Service Worker and the
      // global variable set during the build.

      // The integrity is validated based on the worker script's checksum
      // that's derived from its minified content during the build.
      // The "SERVICE_WORKER_CHECKSUM" global variable is injected by the build.
      if (checksum !== SERVICE_WORKER_CHECKSUM) {
        devUtils.warn(
          `The currently registered Service Worker has been generated by a different version of MSW (${packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  \u2022 npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`,
        )
      }

      integrityCheckPromise.resolve()
    })

    return integrityCheckPromise
  }

  async #printStartMessage() {
    if (this.workerPromise.state === 'rejected') {
      return
    }

    invariant(
      this.#clientPromise != null,
      '[ServiceWorkerSource] Failed to print a start message: client confirmation not received',
    )

    const client = await this.#clientPromise
    const [worker, registration] = await this.workerPromise

    console.groupCollapsed(
      `%c${devUtils.formatMessage('Mocking enabled.')}`,
      'color:orangered;font-weight:bold;',
    )
    // eslint-disable-next-line no-console
    console.log(
      '%cDocumentation: %chttps://mswjs.io/docs',
      'font-weight:bold',
      'font-weight:normal',
    )
    // eslint-disable-next-line no-console
    console.log('Found an issue? https://github.com/mswjs/msw/issues')

    // eslint-disable-next-line no-console
    console.log('Worker script URL:', worker.scriptURL)

    // eslint-disable-next-line no-console
    console.log('Worker scope:', registration.scope)

    if (client) {
      // eslint-disable-next-line no-console
      console.log('Client ID: %s (%s)', client.id, client.frameType)
    }

    console.groupEnd()
  }

  #printStopMessage(): void {
    // eslint-disable-next-line no-console
    console.log(
      `%c${devUtils.formatMessage('Mocking disabled.')}`,
      'color:orangered;font-weight:bold;',
    )
  }
}

class ServiceWorkerHttpNetworkFrame extends HttpNetworkFrame {
  #event: WorkerChannelRequestEvent

  constructor(options: { event: WorkerChannelRequestEvent; request: Request }) {
    super({ request: options.request })
    this.#event = options.event
  }

  public passthrough(): void {
    this.#event.postMessage('PASSTHROUGH')
  }

  public respondWith(response?: Response): void {
    if (response) {
      this.#respondWith(response)
    }
  }

  public errorWith(reason?: unknown): void {
    if (reason instanceof Response) {
      return this.respondWith(reason)
    }

    devUtils.warn(
      `Uncaught exception in the request handler for "%s %s". This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/http/mocking-responses/error-responses`,
      this.data.request.method,
      this.data.request.url,
    )

    const error =
      reason instanceof Error
        ? reason
        : new Error(reason?.toString() || 'Request failure')

    // Treat exceptions during the request handling as 500 responses.
    // This should alert the developer that there's a problem.
    this.respondWith(
      HttpResponse.json(
        {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
        {
          status: 500,
          statusText: 'Request Handler Error',
        },
      ),
    )
  }

  async #respondWith(response: Response): Promise<void> {
    let responseBody: ReadableStream<Uint8Array> | ArrayBuffer | null
    let transfer: [ReadableStream<Uint8Array>] | undefined
    const responseInit = toResponseInit(response)

    if (supportsReadableStreamTransfer()) {
      responseBody = response.body
      transfer = response.body == null ? undefined : [response.body]
    } else {
      responseBody =
        response.body == null ? null : await response.clone().arrayBuffer()
    }

    this.#event.postMessage(
      'MOCK_RESPONSE',
      {
        ...responseInit,
        body: responseBody,
      },
      transfer,
    )
  }
}
