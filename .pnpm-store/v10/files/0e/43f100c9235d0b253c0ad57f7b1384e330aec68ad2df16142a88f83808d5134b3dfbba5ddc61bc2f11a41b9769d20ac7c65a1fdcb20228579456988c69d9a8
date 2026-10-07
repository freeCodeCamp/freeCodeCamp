import { LensList } from './lens-list'

export type DefaultEventMap = {
  [eventType: string]: TypedEvent<any, any>
}

/**
 * Reserved event map containing special event types like '*' for catch-all listeners.
 */
export type ReservedEventMap = {
  '*': TypedEvent<any, any, '*'>
}

type IsReservedEvent<Type extends string> = Type extends keyof ReservedEventMap
  ? true
  : false

export interface TypedEvent<
  DataType = void,
  ReturnType = void,
  EventType extends string = string,
> extends Omit<MessageEvent<DataType>, 'type'> {
  type: EventType
}

const kDefaultPrevented = Symbol('kDefaultPrevented')
const kPropagationStopped = Symbol('kPropagationStopped')
const kImmediatePropagationStopped = Symbol('kImmediatePropagationStopped')

export class TypedEvent<
  DataType = void,
  ReturnType = void,
  EventType extends string = string,
>
  extends MessageEvent<DataType>
  implements TypedEvent<DataType, ReturnType, EventType>
{
  /**
   * @note Keep a placeholder property with the return type
   * because the type must be set somewhere in order to be
   * correctly associated and inferred from the event.
   */
  #returnType: ReturnType;

  [kDefaultPrevented]: boolean;
  [kPropagationStopped]?: Emitter<any>;
  [kImmediatePropagationStopped]?: boolean

  constructor(
    ...args: [DataType] extends [void]
      ? [type: EventType]
      : [type: EventType, init: { data: DataType }]
  ) {
    super(args[0], args[1])
    this[kDefaultPrevented] = false
  }

  get defaultPrevented(): boolean {
    return this[kDefaultPrevented]
  }

  public preventDefault(): void {
    super.preventDefault()
    this[kDefaultPrevented] = true
  }

  public stopImmediatePropagation(): void {
    /**
     * @note Despite `.stopPropagation()` and `.stopImmediatePropagation()` being defined
     * in Node.js, they do nothing. It is safe to re-define them.
     */
    super.stopImmediatePropagation()
    this[kImmediatePropagationStopped] = true
  }
}

/**
 * Brands a TypedEvent or its subclass while preserving its (narrower) type.
 */
type Brand<
  Event extends TypedEvent,
  EventType extends string,
  Loose extends boolean = false,
> = Loose extends true
  ? Event extends TypedEvent<infer Data, any, any>
    ? /**
       * @note Omit the `ReturnType` so emit methods can accept type events
       * where infering the return type is impossible.
       */
      TypedEvent<Data, any, EventType> & {
        type: EventType
      }
    : never
  : Event & { type: EventType }

type InferEventMap<Target extends Emitter<any>> =
  Target extends Emitter<infer EventMap> ? WithReservedEvents<EventMap> : never

/**
 * Extracts only user-defined events, excluding reserved event types.
 */
type UserEventMap<EventMap extends DefaultEventMap> = Omit<
  EventMap,
  keyof ReservedEventMap
>

/**
 * Decorates the given `EventMap` with the reserved emitter events (e.g. `*`).
 */
export type WithReservedEvents<EventMap extends DefaultEventMap> = EventMap &
  ReservedEventMap

/**
 * Creates a union of all events in the EventMap with their literal type strings.
 */
type AllEvents<EventMap extends DefaultEventMap> = {
  [K in keyof EventMap & string]: Brand<EventMap[K], K>
}[keyof EventMap & string]

export type TypedListenerOptions = {
  once?: boolean
  signal?: AbortSignal
}

export interface HookListenerOptions extends TypedListenerOptions {
  persist?: boolean
}

export type EmitterHookMap<EventMap extends DefaultEventMap> = {
  newListener: (
    type: keyof WithReservedEvents<EventMap> & string,
    listener: {
      [K in keyof WithReservedEvents<EventMap> & string]: Emitter.Listener<
        Emitter<EventMap>,
        K,
        WithReservedEvents<EventMap>
      >
    }[keyof WithReservedEvents<EventMap> & string],
    options: HookListenerOptions | undefined,
  ) => void

  removeListener: (
    type: keyof WithReservedEvents<EventMap> & string,
    listener: {
      [K in keyof WithReservedEvents<EventMap> & string]: Emitter.Listener<
        Emitter<EventMap>,
        K,
        WithReservedEvents<EventMap>
      >
    }[keyof WithReservedEvents<EventMap> & string],
    options: HookListenerOptions | undefined,
  ) => void

  beforeEmit: (event: EventMap[keyof EventMap & string]) => boolean | void
}

export namespace Emitter {
  /**
   * Returns a union of all event types, both public and reserved, for the given emitter.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent, handshake: TypedEvent }>()
   * type AllEventTypes = Emitter.AllEventTypes<typeof emitter>
   * // "*" | "greeting" | "handshake"
   */
  export type AllEventTypes<
    Target extends Emitter<any>,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
  > = string extends keyof EventMap ? never : keyof EventMap & string

  /**
   * Returns a union of all public event types for the given emitter.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent, handshake: TypedEvent }>()
   * type EventTypes = Emitter.EventTypes<typeof emitter>
   * // "greeting" | "handshake"
   */
  export type PublicEventTypes<
    Target extends Emitter<any>,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
    UserEvents extends UserEventMap<EventMap> = UserEventMap<EventMap>,
  > = string extends keyof UserEvents ? never : keyof UserEvents & string

  /**
   * Returns a union of all public event type for the given emitter.
   *
   * @example
   * const emitter = new Emitter<{ greeting: GreetingEvent, handshake: HandshakeEvent }>()
   * type Events = Emitter.Events<typeof emitter>
   * // GreetingEvent | HandshakeEvent
   */
  export type Events<
    Target extends Emitter<any>,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
  > = string extends keyof UserEventMap<EventMap>
    ? never
    : UserEventMap<EventMap>[keyof UserEventMap<EventMap>]

  /**
   * Returns an appropriate `Event` type for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent<string> }>()
   * type GreetingEvent = Emitter.Event<typeof emitter, 'greeting'>
   * // TypedEvent<string>
   */
  export type Event<
    Target extends Emitter<any>,
    EventType extends keyof EventMap & string,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
  > =
    IsReservedEvent<EventType> extends true
      ? AllEvents<UserEventMap<EventMap>>
      : Brand<EventMap[EventType], EventType>

  /**
   * Returns an appropriate event data type for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent<'hello'> }>()
   * type GreetingData = Emitter.EventData<typeof emitter, 'gretting'>
   * // "hello"
   */
  export type EventData<
    Target extends Emitter<any>,
    EventType extends keyof EventMap & string,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
  > = EventMap[EventType] extends TypedEvent<infer DataType> ? DataType : never

  /**
   * Returns the listener type for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ getTotalPrice: TypedEvent<Cart, number> }>()
   * type Listener = Emitter.ListenerType<typeof emitter, 'getTotalPrice'>
   * // (event: TypedEvent<Cart>) => number
   */
  export type Listener<
    Target extends Emitter<any>,
    EventType extends keyof EventMap & string,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
  > =
    IsReservedEvent<EventType> extends true
      ? (event: Emitter.Event<Target, EventType, EventMap>) => void
      : (
          event: Emitter.Event<Target, EventType, EventMap>,
        ) => Emitter.ListenerReturnType<Target, EventType, EventMap> extends [
          void,
        ]
          ? void
          : Emitter.ListenerReturnType<Target, EventType, EventMap>

  /**
   * Returns the return type of the listener for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ getTotalPrice: TypedEvent<Cart, number> }>()
   * type ListenerReturnType = Emitter.ListenerReturnType<typeof emitter, 'getTotalPrice'>
   * // number
   */
  export type ListenerReturnType<
    Target extends Emitter<any>,
    EventType extends keyof EventMap & string,
    EventMap extends DefaultEventMap = InferEventMap<Target>,
  > =
    IsReservedEvent<EventType> extends true
      ? void
      : EventMap[EventType] extends TypedEvent<unknown, infer ReturnType>
        ? ReturnType
        : never
}

export namespace EventMap {
  /**
   * Returns a union of all public event types from the given event map.
   *
   * @example
   * type MyEventMap = { greeting: TypedEvent, handshake: TypedEvent }
   * type EventTypes = EventMap.EventTypes<MyEventMap>
   * // "greeting" | "handshake"
   */
  export type EventTypes<Map extends DefaultEventMap> =
    Emitter.PublicEventTypes<Emitter<Map>>

  /**
   * Returns a union of all public event type from the given event map.
   *
   * @example
   * type MyEventMap = { greeting: GreetingEvent, handshake: HandshakeEvent }
   * type Events = EventMap.Events<MyEventMap>
   * // GreetingEvent | HandshakeEvent
   */
  export type Events<Map extends DefaultEventMap> = Emitter.Events<Emitter<Map>>

  /**
   * Returns an appropriate `Event` type for the given event type.
   *
   * @example
   * type MyEventMap = { greeting: TypedEvent<string> }
   * type GreetingEvent = EventMap.Event<MyEventMap, 'greeting'>
   * // TypedEvent<string>
   */
  export type Event<
    Map extends DefaultEventMap,
    Type extends keyof WithReservedEvents<Map> & string,
  > = Emitter.Event<Emitter<Map>, Type, WithReservedEvents<Map>>

  /**
   * Returns an appropriate event data type for the given event type.
   *
   * @example
   * type MyEventMap = { greeting: TypedEvent<'hello'> }
   * type GreetingData = EventMap.EventData<MyEventMap, 'greeting'>
   * // "hello"
   */
  export type EventData<
    Map extends DefaultEventMap,
    Type extends keyof WithReservedEvents<Map> & string,
  > = Emitter.EventData<Emitter<Map>, Type, WithReservedEvents<Map>>

  /**
   * Returns the listener type for the given event type.
   *
   * @example
   * type MyEventMap = { getTotalPrice: TypedEvent<Cart, number> }>
   * type Listener = EventMap.Listener<MyEventMap, 'getTotalPrice'>
   * // (event: TypedEvent<Cart>) => number
   */
  export type Listener<
    Map extends DefaultEventMap,
    Type extends keyof WithReservedEvents<Map> & string,
  > = Emitter.Listener<Emitter<Map>, Type, WithReservedEvents<Map>>

  /**
   * Returns the return type of the listener for the given event type.
   *
   * @example
   * type MyEventMap = { getTotalPrice: TypedEvent<Cart, number> }
   * type ListenerReturnType = EventMap.ListenerReturnType<MyEventMap, 'getTotalPrice'>
   * // number
   */
  export type ListenerReturnType<
    Map extends DefaultEventMap,
    Type extends keyof WithReservedEvents<Map> & string,
  > = Emitter.ListenerReturnType<Emitter<Map>, Type, WithReservedEvents<Map>>
}

export class Emitter<EventMap extends DefaultEventMap> {
  #listeners: LensList<
    Record<
      string,
      Emitter.Listener<
        typeof this,
        keyof WithReservedEvents<EventMap> & string,
        WithReservedEvents<EventMap>
      >
    >
  >

  #listenerOptions: WeakMap<Function, TypedListenerOptions>
  #listenerAbortCleanups: WeakMap<Function, () => void>
  #typelessListeners: WeakSet<Function>

  #hookListeners: LensList<EmitterHookMap<EventMap>>
  #hookListenerOptions: WeakMap<Function, HookListenerOptions>
  #hookListenerAbortCleanups: WeakMap<Function, () => void>

  public readonly hooks: {
    on<HookType extends keyof EmitterHookMap<EventMap>>(
      type: HookType,
      callback: EmitterHookMap<EventMap>[HookType],
      options?: HookListenerOptions,
    ): void

    removeListener<HookType extends keyof EmitterHookMap<EventMap>>(
      type: HookType,
      callback: EmitterHookMap<EventMap>[HookType],
      options?: HookListenerOptions,
    ): void
  }

  constructor() {
    this.#listeners = new LensList()
    this.#listenerOptions = new WeakMap()
    this.#listenerAbortCleanups = new WeakMap()
    this.#typelessListeners = new WeakSet()
    this.#hookListeners = new LensList()
    this.#hookListenerOptions = new WeakMap()
    this.#hookListenerAbortCleanups = new WeakMap()

    this.hooks = {
      on: (hook, callback, options) => {
        if (options?.once) {
          const original = callback as (...args: Array<any>) => void
          const wrapper = ((...args: Array<any>) => {
            this.#deleteHookListener(hook, wrapper)
            return original(...args)
          }) as typeof callback
          callback = wrapper
        }

        this.#hookListeners.append(hook, callback)

        if (options) {
          this.#hookListenerOptions.set(callback, options)
        }

        if (options?.signal) {
          const { signal } = options
          const onAbort = () => {
            this.#deleteHookListener(hook, callback)
          }
          signal.addEventListener('abort', onAbort, { once: true })
          this.#hookListenerAbortCleanups.set(callback, () => {
            signal.removeEventListener('abort', onAbort)
          })
        }
      },
      removeListener: (hook, callback) => {
        this.#deleteHookListener(hook, callback)
      },
    }
  }

  #deleteHookListener<HookType extends keyof EmitterHookMap<EventMap>>(
    hook: HookType,
    callback: EmitterHookMap<EventMap>[HookType],
  ): void {
    this.#hookListeners.delete(hook, callback)
    const cleanup = this.#hookListenerAbortCleanups.get(callback)
    if (cleanup) {
      cleanup()
      this.#hookListenerAbortCleanups.delete(callback)
    }
  }

  #deleteListener<EventType extends keyof WithReservedEvents<EventMap> & string>(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
  ): void {
    this.#listeners.delete(type, listener)
    const cleanup = this.#listenerAbortCleanups.get(listener)
    if (cleanup) {
      cleanup()
      this.#listenerAbortCleanups.delete(listener)
    }
  }

  /**
   * Adds a listener for the given event type.
   */
  public on<EventType extends keyof WithReservedEvents<EventMap> & string>(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
    options?: TypedListenerOptions,
  ): typeof this {
    this.#addListener(type, listener, options)
    return this
  }

  /**
   * Adds a one-time listener for the given event type.
   */
  public once<EventType extends keyof WithReservedEvents<EventMap> & string>(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
    options?: Omit<TypedListenerOptions, 'once'>,
  ): typeof this {
    return this.on(type, listener, {
      ...(options || {}),
      once: true,
    })
  }

  /**
   * Prepends a listener for the given event type.
   */
  public earlyOn<EventType extends keyof WithReservedEvents<EventMap> & string>(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
    options?: TypedListenerOptions,
  ): typeof this {
    this.#addListener(type, listener, options, 'prepend')
    return this
  }

  /**
   * Prepends a one-time listener for the given event type.
   */
  public earlyOnce<
    EventType extends keyof WithReservedEvents<EventMap> & string,
  >(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
    options?: Omit<TypedListenerOptions, 'once'>,
  ): typeof this {
    return this.earlyOn(type, listener, {
      ...(options || {}),
      once: true,
    })
  }

  /**
   * Emits the given typed event.
   *
   * @returns {boolean} Returns `true` if the event had any listeners, `false` otherwise.
   */
  public emit<EventType extends keyof EventMap & string>(
    event: Brand<EventMap[EventType], EventType, true>,
  ): boolean {
    if (this.#listeners.size === 0) {
      return false
    }

    /**
     * @note Calculate matching listeners before calling them
     * since one-time listeners will self-destruct.
     */
    const hasListeners = this.listenerCount(event.type) > 0

    const proxiedEvent = this.#proxyEvent(event)

    for (const listener of this.#matchListeners(event.type)) {
      if (
        proxiedEvent.event[kPropagationStopped] != null &&
        proxiedEvent.event[kPropagationStopped] !== this
      ) {
        proxiedEvent.revoke()
        return false
      }

      if (proxiedEvent.event[kImmediatePropagationStopped]) {
        break
      }

      this.#callListener(proxiedEvent.event, listener)
    }

    proxiedEvent.revoke()

    return hasListeners
  }

  /**
   * Emits the given typed event and returns a promise that resolves
   * when all the listeners for that event have settled.
   *
   * @returns {Promise<Array<Emitter.ListenerReturnType>>} A promise that resolves
   * with the return values of all listeners.
   */
  public async emitAsPromise<EventType extends keyof EventMap & string>(
    event: Brand<EventMap[EventType], EventType, true>,
  ): Promise<
    Array<Emitter.ListenerReturnType<typeof this, EventType, EventMap>>
  > {
    if (this.#listeners.size === 0) {
      return []
    }

    const pendingListeners: Array<
      Promise<Emitter.ListenerReturnType<typeof this, EventType, EventMap>>
    > = []

    const proxiedEvent = this.#proxyEvent(event)

    for (const listener of this.#matchListeners(event.type)) {
      if (
        proxiedEvent.event[kPropagationStopped] != null &&
        proxiedEvent.event[kPropagationStopped] !== this
      ) {
        proxiedEvent.revoke()
        return []
      }

      if (proxiedEvent.event[kImmediatePropagationStopped]) {
        break
      }

      const listenerPromise = Promise.resolve(
        this.#callListener(proxiedEvent.event, listener),
      )

      const returnValue = await listenerPromise

      if (!this.#isTypelessListener(listener)) {
        pendingListeners.push(returnValue)
      }
    }

    proxiedEvent.revoke()

    return Promise.allSettled(pendingListeners).then((results) => {
      return results.map((result) =>
        result.status === 'fulfilled' ? result.value : result.reason,
      )
    })
  }

  /**
   * Emits the given event and returns a generator that yields
   * the result of each listener in the order of their registration.
   * This way, you stop exhausting the listeners once you get the expected value.
   */
  public *emitAsGenerator<EventType extends keyof EventMap & string>(
    event: Brand<EventMap[EventType], EventType, true>,
  ): Generator<Emitter.ListenerReturnType<typeof this, EventType, EventMap>> {
    if (this.#listeners.size === 0) {
      return
    }

    const proxiedEvent = this.#proxyEvent(event)

    for (const listener of this.#matchListeners(event.type)) {
      if (
        proxiedEvent.event[kPropagationStopped] != null &&
        proxiedEvent.event[kPropagationStopped] !== this
      ) {
        proxiedEvent.revoke()
        return
      }

      if (proxiedEvent.event[kImmediatePropagationStopped]) {
        break
      }

      const returnValue = this.#callListener(proxiedEvent.event, listener)

      if (!this.#isTypelessListener(listener)) {
        yield returnValue
      }
    }

    proxiedEvent.revoke()
  }

  /**
   * Removes a listener for the given event type.
   */
  public removeListener<
    EventType extends keyof WithReservedEvents<EventMap> & string,
  >(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
  ): void {
    const options = this.#listenerOptions.get(listener)

    this.#deleteListener(type, listener)

    for (const hook of this.#hookListeners.get('removeListener')) {
      hook(
        type,
        listener as Parameters<EmitterHookMap<EventMap>['removeListener']>[1],
        options,
      )
    }
  }

  /**
   * Removes all listeners for the given event type.
   * If no event type is provided, removes all existing listeners.
   */
  public removeAllListeners<
    EventType extends keyof WithReservedEvents<EventMap> & string,
  >(type?: EventType): void {
    if (type == null) {
      for (const listener of this.#listeners.getAll()) {
        const cleanup = this.#listenerAbortCleanups.get(listener)
        if (cleanup) {
          cleanup()
          this.#listenerAbortCleanups.delete(listener)
        }
      }
      this.#listeners.clear()

      for (const [hookType, hookListener] of this.#hookListeners) {
        if (!this.#hookListenerOptions.get(hookListener)?.persist) {
          this.#deleteHookListener(
            hookType as keyof EmitterHookMap<EventMap>,
            hookListener as EmitterHookMap<EventMap>[keyof EmitterHookMap<EventMap>],
          )
        }
      }

      return
    }

    for (const listener of this.#listeners.get(type)) {
      const cleanup = this.#listenerAbortCleanups.get(listener)
      if (cleanup) {
        cleanup()
        this.#listenerAbortCleanups.delete(listener)
      }
    }
    this.#listeners.deleteAll(type)
  }

  /**
   * Returns the list of listeners for the given event type.
   * If no even type is provided, returns all listeners.
   */
  public listeners<
    EventType extends keyof WithReservedEvents<EventMap> & string,
  >(
    type?: EventType,
  ): Array<
    Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap>>
  > {
    if (type == null) {
      return this.#listeners.getAll()
    }

    return this.#listeners.get(type)
  }

  /**
   * Returns the number of listeners for the given event type.
   * If no even type is provided, returns the total number of listeners.
   */
  public listenerCount<
    EventType extends keyof WithReservedEvents<EventMap> & string,
  >(type?: EventType): number {
    if (type == null) {
      return this.#listeners.size
    }

    return this.listeners(type).length
  }

  #addListener<EventType extends keyof WithReservedEvents<EventMap> & string>(
    type: EventType,
    listener: Emitter.Listener<
      typeof this,
      EventType,
      WithReservedEvents<EventMap>
    >,
    options: TypedListenerOptions | undefined,
    insertMode: 'append' | 'prepend' = 'append',
  ): void {
    for (const hook of this.#hookListeners.get('newListener')) {
      hook(
        type,
        listener as Parameters<EmitterHookMap<EventMap>['newListener']>[1],
        options,
      )
    }

    if (type === '*') {
      this.#typelessListeners.add(listener)
    }

    if (insertMode === 'prepend') {
      this.#listeners.prepend(type, listener)
    } else {
      this.#listeners.append(type, listener)
    }

    if (options) {
      this.#listenerOptions.set(listener, options)

      if (options.signal) {
        const { signal } = options
        const onAbort = () => {
          this.removeListener(type, listener)
        }
        signal.addEventListener('abort', onAbort, { once: true })
        this.#listenerAbortCleanups.set(listener, () => {
          signal.removeEventListener('abort', onAbort)
        })
      }
    }
  }

  #proxyEvent<Event extends TypedEvent>(
    event: Event,
  ): { event: Event; revoke: () => void } {
    const { stopPropagation } = event

    event.stopPropagation = () => {
      event[kPropagationStopped] = this
      stopPropagation.call(event)
    }

    return {
      event,
      revoke() {
        event.stopPropagation = stopPropagation
      },
    }
  }

  #callListener(event: Event, listener: (event: any) => any) {
    for (const hook of this.#hookListeners.get('beforeEmit')) {
      if (hook(event as EventMap[keyof EventMap & string]) === false) {
        return
      }
    }

    const returnValue = listener.call(this, event)

    const options = this.#listenerOptions.get(listener)

    if (options?.once) {
      const type = this.#isTypelessListener(listener) ? '*' : event.type
      this.#deleteListener(type, listener)

      for (const hook of this.#hookListeners.get('removeListener')) {
        hook(type, listener, options)
      }
    }

    return returnValue
  }

  /**
   * Return a list of all event listeners relevant for the given event type.
   * This includes the explicit event listeners and also typeless event listeners.
   *
   * @note Snapshot the matching listeners before yielding. Listeners can add or
   * remove other listeners during emission (e.g. `earlyOn` unshifts `#list`),
   * which would otherwise shift the live iterator and re-yield prior entries.
   */
  *#matchListeners<EventType extends keyof EventMap & string>(type: EventType) {
    const snapshot: Array<
      Emitter.Listener<
        typeof this,
        keyof WithReservedEvents<EventMap> & string,
        WithReservedEvents<EventMap>
      >
    > = []
    for (const [key, listener] of this.#listeners) {
      if (key === '*' || key === type) {
        snapshot.push(listener)
      }
    }
    yield* snapshot
  }

  #isTypelessListener(listener: any): boolean {
    return this.#typelessListeners.has(listener)
  }
}
