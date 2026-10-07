import { invariant } from 'outvariant'
import { Emitter, type DefaultEventMap } from 'rettime'
import {
  NetworkSource,
  type ExtractSourceEvents,
} from './sources/network-source'
import { type NetworkFrameResolutionContext } from './frames/network-frame'
import { type UnhandledFrameHandle } from './on-unhandled-frame'
import {
  HandlersController,
  InMemoryHandlersController,
  type AnyHandler,
} from './handlers-controller'
import { toReadonlyArray } from '../utils/internal/toReadonlyArray'

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never

type MergeEventMaps<Sources extends Array<NetworkSource<any>>> =
  UnionToIntersection<ExtractSourceEvents<Sources[number]>> extends infer R
    ? R extends Record<string, any>
      ? R
      : DefaultEventMap
    : DefaultEventMap

type MaybePromise<T> =
  Extract<T, Promise<unknown>> extends never ? void : Promise<void>

export interface DefineNetworkOptions<
  Sources extends Array<NetworkSource<any>>,
> {
  /**
   * List of the network sources.
   * Every network source emits frames, and every frame describes how
   * to handle the various network scenarios, like mocking a response,
   * erroring the request, or performing it as-is.
   */
  sources: Sources
  /**
   * List of handlers to describe the network.
   */
  handlers?: Array<AnyHandler> | HandlersController
  context?: NetworkFrameResolutionContext
  onUnhandledFrame?: UnhandledFrameHandle
}

export interface NetworkApi<
  Sources extends Array<NetworkSource<any>>,
> extends NetworkHandlersApi {
  readyState: NetworkReadyState
  /**
   * Enable the network interception and handling.
   */
  enable: () => MaybePromise<ReturnType<Sources[number]['enable']>>
  /**
   * Disable the network interception and handling.
   */
  disable: () => MaybePromise<ReturnType<Sources[number]['disable']>>
  /**
   * Configure the network instance with additional options.
   * The options provided in the `.configure()` call will override the same
   * options in the `defineNetwork()` call.
   */
  configure: (options: Partial<DefineNetworkOptions<Sources>>) => void
  events: Emitter<MergeEventMaps<Sources>>
}

export interface NetworkHandlersApi {
  use: (...handlers: Array<AnyHandler>) => void
  resetHandlers: (...handlers: Array<AnyHandler>) => void
  restoreHandlers: () => void
  listHandlers: () => ReadonlyArray<AnyHandler>
}

function colorlessPromiseAll<T>(values: Array<T>): MaybePromise<T>
function colorlessPromiseAll(values: Array<unknown>): Promise<void> | void {
  const promises: Array<Promise<void>> = []

  for (const value of values) {
    if (value instanceof Promise) {
      promises.push(value)
    }
  }

  if (promises.length > 0) {
    return Promise.all(promises).then(() => {})
  }
}

export enum NetworkReadyState {
  DISABLED,
  ENABLED,
}

/**
 * Define a network instance with the given configuration.
 * @example
 * import { InterceptorSource } from 'msw/experimental'
 * import { handlers } from './handlers'
 *
 * const network = defineNetwork({
 *   sources: [new InterceptorSource({ interceptors })],
 *   handlers,
 * })
 * await network.enable()
 */
export function defineNetwork<Sources extends Array<NetworkSource<any>>>(
  options: DefineNetworkOptions<Sources>,
): NetworkApi<Sources> {
  let readyState: NetworkReadyState = NetworkReadyState.DISABLED
  const events = new Emitter<MergeEventMaps<Sources>>()

  const deriveHandlersController = (
    handlers: DefineNetworkOptions<Sources>['handlers'],
  ) => {
    return handlers instanceof HandlersController
      ? handlers
      : new InMemoryHandlersController(handlers || [])
  }

  let resolvedOptions: DefineNetworkOptions<Sources> = {
    ...options,
  }

  /**
   * @note Create the handlers controller immediately because
   * certain setup APIs, like `setupServer`, don't await `.enable` (`.listen`).
   */
  let handlersController = deriveHandlersController(resolvedOptions.handlers)
  let listenersController: AbortController

  return {
    get readyState() {
      return readyState
    },
    events,
    configure(options) {
      invariant(readyState === NetworkReadyState.DISABLED, '')

      if (
        options.handlers &&
        !Object.is(options.handlers, resolvedOptions.handlers)
      ) {
        handlersController = deriveHandlersController(options.handlers)
      }

      resolvedOptions = {
        ...resolvedOptions,
        ...options,
      }
    },
    enable() {
      invariant(
        readyState === NetworkReadyState.DISABLED,
        'Failed to call "enable" on the network: already enabled',
      )

      listenersController = new AbortController()
      readyState = NetworkReadyState.ENABLED

      const result = resolvedOptions.sources.map((source) => {
        /**
         * @note Preemptively disable the network source before enabling.
         * This intentionally calls only the prototype method that clears the
         * event listeners and nothing else. This prevents the "frame" listeners
         * from accumulating across enable/disable in case the source is a singleton.
         */
        NetworkSource.prototype.disable.call(source)

        source.on('frame', async ({ frame }) => {
          frame.events.on('*', (event) => events.emit(event), {
            signal: listenersController.signal,
          })

          const handlers = frame.getHandlers(handlersController)

          await frame.resolve(
            handlers,
            resolvedOptions.onUnhandledFrame || 'warn',
            resolvedOptions.context,
          )
        })

        return source.enable()
      })

      return colorlessPromiseAll(result) as MaybePromise<
        ReturnType<Sources[number]['enable']>
      >
    },
    disable() {
      invariant(
        readyState === NetworkReadyState.ENABLED,
        'Failed to call "disable" on the network: already disabled',
      )

      listenersController.abort()
      readyState = NetworkReadyState.DISABLED

      return colorlessPromiseAll(
        resolvedOptions.sources.map((source) => source.disable()),
      ) as MaybePromise<ReturnType<Sources[number]['disable']>>
    },
    use(...handlers) {
      handlersController.use(handlers)
    },
    resetHandlers(...handlers) {
      handlersController.reset(handlers)
    },
    restoreHandlers() {
      handlersController.restore()
    },
    listHandlers() {
      return toReadonlyArray(handlersController.currentHandlers())
    },
  }
}
