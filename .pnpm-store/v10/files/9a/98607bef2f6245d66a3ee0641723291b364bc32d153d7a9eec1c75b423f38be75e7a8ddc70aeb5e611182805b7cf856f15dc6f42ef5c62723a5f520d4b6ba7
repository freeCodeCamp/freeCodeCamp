import type { LifeCycleEventEmitter, SharedOptions } from '#core/sharedOptions'
import type { RequiredDeep } from '#core/typeUtils'
import type { HttpNetworkFrameEventMap } from '#core/experimental/frames/http-frame'
import type { WebSocketNetworkFrameEventMap } from '#core/experimental/frames/websocket-frame'
import type { AnyHandler } from '#core/experimental/handlers-controller'

export interface StringifiedResponse extends ResponseInit {
  body: string | ArrayBuffer | ReadableStream<Uint8Array> | null
}

export type ServiceWorkerInstanceTuple = [
  ServiceWorker | null,
  ServiceWorkerRegistration,
]

export type FindWorker = (
  scriptUrl: string,
  mockServiceWorkerUrl: string,
) => boolean

export interface StartOptions extends SharedOptions {
  /**
   * Service Worker registration options.
   */
  serviceWorker?: {
    /**
     * Custom url to the worker script.
     * @default "/mockServiceWorker.js"
     */
    url?: string
    options?: RegistrationOptions
  }

  /**
   * Disables the logging of the intercepted requests
   * into browser's console.
   * @default false
   */
  quiet?: boolean

  /**
   * Defers any network requests until the Service Worker
   * instance is activated.
   * @default true
   * @deprecated
   * Please use a proper browser integration instead.
   * @see https://mswjs.io/docs/integrations/browser
   */
  waitUntilReady?: boolean

  /**
   * A custom lookup function to find a Mock Service Worker in the list
   * of all registered Service Workers on the page.
   */
  findWorker?: FindWorker
}

export type StartReturnType = Promise<ServiceWorkerRegistration | undefined>

export type StartHandler = (
  options: RequiredDeep<StartOptions>,
  initialOptions: StartOptions,
) => StartReturnType

export type StopHandler = () => void

export interface SetupWorker {
  /**
   * Registers and activates the mock Service Worker.
   *
   * @see {@link https://mswjs.io/docs/api/setup-worker/start `worker.start()` API reference}
   */
  start: (options?: StartOptions) => StartReturnType

  /**
   * Stops requests interception for the current client.
   *
   * @see {@link https://mswjs.io/docs/api/setup-worker/stop `worker.stop()` API reference}
   */
  stop: StopHandler

  /**
   * Prepends given request handlers to the list of existing handlers.
   * @param {Array<AnyHandler>} handlers List of runtime request handlers.
   *
   * @see {@link https://mswjs.io/docs/api/setup-worker/use `worker.use()` API reference}
   */
  use: (...handlers: Array<AnyHandler>) => void

  /**
   * Marks all request handlers that respond using `res.once()` as unused.
   *
   * @see {@link https://mswjs.io/docs/api/setup-worker/restore-handlers `worker.restoreHandlers()` API reference}
   */
  restoreHandlers: () => void

  /**
   * Resets request handlers to the initial list given to the `setupWorker` call, or to the explicit next request handlers list, if given.
   * @param {Array<AnyHandler>} nextHandlers List of the new initial request handlers.
   *
   * @see {@link https://mswjs.io/docs/api/setup-worker/reset-handlers `worker.resetHandlers()` API reference}
   */
  resetHandlers: (...nextHandlers: Array<AnyHandler>) => void

  /**
   * Returns a readonly list of currently active request handlers.
   *
   * @see {@link https://mswjs.io/docs/api/setup-worker/list-handlers `worker.listHandlers()` API reference}
   */
  listHandlers: () => ReadonlyArray<AnyHandler>

  /**
   * Life-cycle events.
   * Life-cycle events allow you to subscribe to the internal library events occurring during the request/response handling.
   *
   * @see {@link https://mswjs.io/docs/api/life-cycle-events Life-cycle Events API reference}
   */
  events: LifeCycleEventEmitter<
    HttpNetworkFrameEventMap & WebSocketNetworkFrameEventMap
  >
}
