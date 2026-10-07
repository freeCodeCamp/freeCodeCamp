import { invariant } from 'outvariant'
import { isNodeProcess } from 'is-node-process'
import { WebSocketInterceptor } from '@mswjs/interceptors/WebSocket'
import {
  defineNetwork,
  NetworkReadyState,
} from '#core/experimental/define-network'
import type { AnyHandler } from '#core/experimental/handlers-controller'
import { InterceptorSource } from '#core/experimental/sources/interceptor-source'
import { fromLegacyOnUnhandledRequest } from '#core/experimental/compat'
import type { LifeCycleEventEmitter } from '#core/sharedOptions'
import type { HttpNetworkFrameEventMap } from '#core/experimental/frames/http-frame'
import type { WebSocketNetworkFrameEventMap } from '#core/experimental/frames/websocket-frame'
import { devUtils } from '#core/utils/internal/devUtils'
import { supportsServiceWorker } from './utils/supports'
import { ServiceWorkerSource } from './sources/service-worker-source'
import { FallbackHttpSource } from './sources/fallback-http-source'
import type {
  SetupWorker,
  StartOptions,
  StartReturnType,
  StopHandler,
} from './glossary'

const DEFAULT_WORKER_URL = '/mockServiceWorker.js'

/**
 * Sets up a requests interception in the browser with the given request handlers.
 * @param {Array<AnyHandler>} handlers List of request handlers.
 *
 * @see {@link https://mswjs.io/docs/api/setup-worker `setupWorker()` API reference}
 */
export function setupWorker(...handlers: Array<AnyHandler>): SetupWorker {
  invariant(
    !isNodeProcess(),
    devUtils.formatMessage(
      'Failed to execute `setupWorker` in a non-browser environment',
    ),
  )

  const network = defineNetwork<
    Array<ServiceWorkerSource | FallbackHttpSource | InterceptorSource>
  >({
    sources: [],
    handlers,
  })

  return {
    async start(options) {
      if (options?.waitUntilReady != null) {
        devUtils.warn(
          `The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.`,
        )
      }

      /**
       * @todo @fixme
       * This is kept for backward-compatibility reasons. We don't really need this check anymore.
       */
      if (network.readyState === NetworkReadyState.ENABLED) {
        devUtils.warn(
          'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.',
        )
        return
      }

      const httpSource = supportsServiceWorker()
        ? await ServiceWorkerSource.from({
            serviceWorker: {
              url:
                options?.serviceWorker?.url?.toString() || DEFAULT_WORKER_URL,
              options: options?.serviceWorker?.options,
            },
            findWorker: options?.findWorker,
            quiet: options?.quiet,
          })
        : new FallbackHttpSource({
            quiet: options?.quiet,
          })

      network.configure({
        sources: [
          httpSource,
          new InterceptorSource({
            interceptors: [new WebSocketInterceptor() as any],
          }),
        ],
        onUnhandledFrame: fromLegacyOnUnhandledRequest(() => {
          return options?.onUnhandledRequest || 'warn'
        }),
        context: {
          quiet: options?.quiet,
        },
      })

      await network.enable()

      if (httpSource instanceof ServiceWorkerSource) {
        const [, registration] = await httpSource.workerPromise
        return registration
      }
    },
    stop() {
      if (network.readyState === NetworkReadyState.DISABLED) {
        devUtils.warn(
          `Found a redundant "worker.stop()" call. Notice that stopping the worker after it has already been stopped has no effect. Consider removing this "worker.stop()" call.`,
        )
        return
      }

      network.disable()
      window.postMessage({ type: 'msw/worker:stop' })
    },
    events: network.events,
    use: network.use.bind(network),
    resetHandlers: network.resetHandlers.bind(network),
    restoreHandlers: network.restoreHandlers.bind(network),
    listHandlers: network.listHandlers.bind(network),
  }
}

/**
 * @deprecated
 * Please use the `defineNetwork` API instead.
 */
export class SetupWorkerApi implements SetupWorker {
  start: (options?: StartOptions) => StartReturnType
  stop: StopHandler
  use: (...handlers: Array<AnyHandler>) => void
  resetHandlers: (...nextHandlers: Array<AnyHandler>) => void
  restoreHandlers: () => void
  listHandlers: () => ReadonlyArray<AnyHandler>
  events: LifeCycleEventEmitter<
    HttpNetworkFrameEventMap & WebSocketNetworkFrameEventMap
  >

  constructor() {
    const worker = setupWorker()

    this.start = worker.start.bind(worker)
    this.stop = worker.stop.bind(worker)
    this.use = worker.use.bind(worker)
    this.resetHandlers = worker.resetHandlers.bind(worker)
    this.restoreHandlers = worker.restoreHandlers.bind(worker)
    this.listHandlers = worker.listHandlers.bind(worker)
    this.events = worker.events
  }
}
