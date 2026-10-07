import { EventMap, Listener } from 'strict-event-emitter'
import { Interceptor, ExtractEventNames } from './Interceptor'

export interface BatchInterceptorOptions<
  InterceptorList extends ReadonlyArray<Interceptor<any>>
> {
  name: string
  interceptors: InterceptorList
}

export type ExtractEventMapType<
  InterceptorList extends ReadonlyArray<Interceptor<any>>
> = InterceptorList extends ReadonlyArray<infer InterceptorType>
  ? InterceptorType extends Interceptor<infer EventMap>
    ? EventMap
    : never
  : never

/**
 * A batch interceptor that exposes a single interface
 * to apply and operate with multiple interceptors at once.
 */
export class BatchInterceptor<
  InterceptorList extends ReadonlyArray<Interceptor<any>>,
  Events extends EventMap = ExtractEventMapType<InterceptorList>
> extends Interceptor<Events> {
  static symbol: symbol

  private interceptors: InterceptorList

  constructor(options: BatchInterceptorOptions<InterceptorList>) {
    BatchInterceptor.symbol = Symbol(options.name)
    super(BatchInterceptor.symbol)
    this.interceptors = options.interceptors
  }

  protected setup() {
    const logger = this.logger.extend('setup')

    logger.info('applying all %d interceptors...', this.interceptors.length)

    for (const interceptor of this.interceptors) {
      logger.info('applying "%s" interceptor...', interceptor.constructor.name)
      interceptor.apply()

      logger.info('adding interceptor dispose subscription')
      this.subscriptions.push(() => interceptor.dispose())
    }
  }

  public on<EventName extends ExtractEventNames<Events>>(
    event: EventName,
    listener: Listener<Events[EventName]>
  ): this {
    // Instead of adding a listener to the batch interceptor,
    // propagate the listener to each of the individual interceptors.
    for (const interceptor of this.interceptors) {
      interceptor.on(event, listener)
    }

    return this
  }

  public once<EventName extends ExtractEventNames<Events>>(
    event: EventName,
    listener: Listener<Events[EventName]>
  ): this {
    for (const interceptor of this.interceptors) {
      interceptor.once(event, listener)
    }

    return this
  }

  public off<EventName extends ExtractEventNames<Events>>(
    event: EventName,
    listener: Listener<Events[EventName]>
  ): this {
    for (const interceptor of this.interceptors) {
      interceptor.off(event, listener)
    }

    return this
  }

  public removeAllListeners<EventName extends ExtractEventNames<Events>>(
    event?: EventName | undefined
  ): this {
    for (const interceptors of this.interceptors) {
      interceptors.removeAllListeners(event)
    }

    return this
  }
}
