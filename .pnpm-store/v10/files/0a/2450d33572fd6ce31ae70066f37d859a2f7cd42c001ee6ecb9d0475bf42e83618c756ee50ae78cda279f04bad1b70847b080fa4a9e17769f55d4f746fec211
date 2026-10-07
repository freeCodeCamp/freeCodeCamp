import { Logger } from '@open-draft/logger'
import { Emitter, Listener } from 'strict-event-emitter'

export type InterceptorEventMap = Record<string, any>
export type InterceptorSubscription = () => void

/**
 * Request header name to detect when a single request
 * is being handled by nested interceptors (XHR -> ClientRequest).
 * Obscure by design to prevent collisions with user-defined headers.
 * Ideally, come up with the Interceptor-level mechanism for this.
 * @see https://github.com/mswjs/interceptors/issues/378
 */
export const INTERNAL_REQUEST_ID_HEADER_NAME =
  'x-interceptors-internal-request-id'

export function getGlobalSymbol<V>(symbol: Symbol): V | undefined {
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || undefined
  )
}

function setGlobalSymbol(symbol: Symbol, value: any): void {
  // @ts-ignore
  globalThis[symbol] = value
}

export function deleteGlobalSymbol(symbol: Symbol): void {
  // @ts-ignore
  delete globalThis[symbol]
}

export enum InterceptorReadyState {
  INACTIVE = 'INACTIVE',
  APPLYING = 'APPLYING',
  APPLIED = 'APPLIED',
  DISPOSING = 'DISPOSING',
  DISPOSED = 'DISPOSED',
}

export type ExtractEventNames<Events extends Record<string, any>> =
  Events extends Record<infer EventName, any> ? EventName : never

export class Interceptor<Events extends InterceptorEventMap> {
  protected emitter: Emitter<Events>
  protected subscriptions: Array<InterceptorSubscription>
  protected logger: Logger

  public readyState: InterceptorReadyState

  constructor(private readonly symbol: symbol) {
    this.readyState = InterceptorReadyState.INACTIVE

    this.emitter = new Emitter()
    this.subscriptions = []
    this.logger = new Logger(symbol.description!)

    // Do not limit the maximum number of listeners
    // so not to limit the maximum amount of parallel events emitted.
    this.emitter.setMaxListeners(0)

    this.logger.info('constructing the interceptor...')
  }

  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  protected checkEnvironment(): boolean {
    return true
  }

  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  public apply(): void {
    const logger = this.logger.extend('apply')
    logger.info('applying the interceptor...')

    if (this.readyState === InterceptorReadyState.APPLIED) {
      logger.info('intercepted already applied!')
      return
    }

    const shouldApply = this.checkEnvironment()

    if (!shouldApply) {
      logger.info('the interceptor cannot be applied in this environment!')
      return
    }

    this.readyState = InterceptorReadyState.APPLYING

    // Whenever applying a new interceptor, check if it hasn't been applied already.
    // This enables to apply the same interceptor multiple times, for example from a different
    // interceptor, only proxying events but keeping the stubs in a single place.
    const runningInstance = this.getInstance()

    if (runningInstance) {
      logger.info('found a running instance, reusing...')

      // Proxy any listeners you set on this instance to the running instance.
      this.on = (event, listener) => {
        logger.info('proxying the "%s" listener', event)

        // Add listeners to the running instance so they appear
        // at the top of the event listeners list and are executed first.
        runningInstance.emitter.addListener(event, listener)

        // Ensure that once this interceptor instance is disposed,
        // it removes all listeners it has appended to the running interceptor instance.
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener)
          logger.info('removed proxied "%s" listener!', event)
        })

        return this
      }

      this.readyState = InterceptorReadyState.APPLIED

      return
    }

    logger.info('no running instance found, setting up a new instance...')

    // Setup the interceptor.
    this.setup()

    // Store the newly applied interceptor instance globally.
    this.setInstance()

    this.readyState = InterceptorReadyState.APPLIED
  }

  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  protected setup(): void {}

  /**
   * Listen to the interceptor's public events.
   */
  public on<EventName extends ExtractEventNames<Events>>(
    event: EventName,
    listener: Listener<Events[EventName]>
  ): this {
    const logger = this.logger.extend('on')

    if (
      this.readyState === InterceptorReadyState.DISPOSING ||
      this.readyState === InterceptorReadyState.DISPOSED
    ) {
      logger.info('cannot listen to events, already disposed!')
      return this
    }

    logger.info('adding "%s" event listener:', event, listener)

    this.emitter.on(event, listener)
    return this
  }

  public once<EventName extends ExtractEventNames<Events>>(
    event: EventName,
    listener: Listener<Events[EventName]>
  ): this {
    this.emitter.once(event, listener)
    return this
  }

  public off<EventName extends ExtractEventNames<Events>>(
    event: EventName,
    listener: Listener<Events[EventName]>
  ): this {
    this.emitter.off(event, listener)
    return this
  }

  public removeAllListeners<EventName extends ExtractEventNames<Events>>(
    event?: EventName
  ): this {
    this.emitter.removeAllListeners(event)
    return this
  }

  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  public dispose(): void {
    const logger = this.logger.extend('dispose')

    if (this.readyState === InterceptorReadyState.DISPOSED) {
      logger.info('cannot dispose, already disposed!')
      return
    }

    logger.info('disposing the interceptor...')
    this.readyState = InterceptorReadyState.DISPOSING

    if (!this.getInstance()) {
      logger.info('no interceptors running, skipping dispose...')
      return
    }

    // Delete the global symbol as soon as possible,
    // indicating that the interceptor is no longer running.
    this.clearInstance()

    logger.info('global symbol deleted:', getGlobalSymbol(this.symbol))

    if (this.subscriptions.length > 0) {
      logger.info('disposing of %d subscriptions...', this.subscriptions.length)

      for (const dispose of this.subscriptions) {
        dispose()
      }

      this.subscriptions = []

      logger.info('disposed of all subscriptions!', this.subscriptions.length)
    }

    this.emitter.removeAllListeners()
    logger.info('destroyed the listener!')

    this.readyState = InterceptorReadyState.DISPOSED
  }

  private getInstance(): this | undefined {
    const instance = getGlobalSymbol<this>(this.symbol)
    this.logger.info('retrieved global instance:', instance?.constructor?.name)
    return instance
  }

  private setInstance(): void {
    setGlobalSymbol(this.symbol, this)
    this.logger.info('set global instance!', this.symbol.description)
  }

  private clearInstance(): void {
    deleteGlobalSymbol(this.symbol)
    this.logger.info('cleared global instance!', this.symbol.description)
  }
}
