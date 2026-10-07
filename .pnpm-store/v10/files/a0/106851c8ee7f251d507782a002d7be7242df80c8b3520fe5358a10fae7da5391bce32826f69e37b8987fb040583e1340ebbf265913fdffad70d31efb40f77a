//#region src/index.d.ts
type DefaultEventMap = {
  [eventType: string]: TypedEvent<any, any>;
};
/**
 * Reserved event map containing special event types like '*' for catch-all listeners.
 */
type ReservedEventMap = {
  '*': TypedEvent<any, any, '*'>;
};
type IsReservedEvent<Type extends string> = Type extends keyof ReservedEventMap ? true : false;
interface TypedEvent<DataType = void, ReturnType = void, EventType extends string = string> extends Omit<MessageEvent<DataType>, 'type'> {
  type: EventType;
}
declare const kDefaultPrevented: unique symbol;
declare const kPropagationStopped: unique symbol;
declare const kImmediatePropagationStopped: unique symbol;
declare class TypedEvent<DataType = void, ReturnType = void, EventType extends string = string> extends MessageEvent<DataType> implements TypedEvent<DataType, ReturnType, EventType> {
  #private;
  [kDefaultPrevented]: boolean;
  [kPropagationStopped]?: Emitter<any>;
  [kImmediatePropagationStopped]?: boolean;
  constructor(...args: [DataType] extends [void] ? [type: EventType] : [type: EventType, init: {
    data: DataType;
  }]);
  get defaultPrevented(): boolean;
  preventDefault(): void;
  stopImmediatePropagation(): void;
}
/**
 * Brands a TypedEvent or its subclass while preserving its (narrower) type.
 */
type Brand<Event extends TypedEvent, EventType extends string, Loose extends boolean = false> = Loose extends true ? Event extends TypedEvent<infer Data, any, any> ?
/**
* @note Omit the `ReturnType` so emit methods can accept type events
* where infering the return type is impossible.
*/
TypedEvent<Data, any, EventType> & {
  type: EventType;
} : never : Event & {
  type: EventType;
};
type InferEventMap<Target extends Emitter<any>> = Target extends Emitter<infer EventMap> ? WithReservedEvents<EventMap> : never;
/**
 * Extracts only user-defined events, excluding reserved event types.
 */
type UserEventMap<EventMap$1 extends DefaultEventMap> = Omit<EventMap$1, keyof ReservedEventMap>;
/**
 * Decorates the given `EventMap` with the reserved emitter events (e.g. `*`).
 */
type WithReservedEvents<EventMap$1 extends DefaultEventMap> = EventMap$1 & ReservedEventMap;
/**
 * Creates a union of all events in the EventMap with their literal type strings.
 */
type AllEvents<EventMap$1 extends DefaultEventMap> = { [K in keyof EventMap$1 & string]: Brand<EventMap$1[K], K> }[keyof EventMap$1 & string];
type TypedListenerOptions = {
  once?: boolean;
  signal?: AbortSignal;
};
interface HookListenerOptions extends TypedListenerOptions {
  persist?: boolean;
}
type EmitterHookMap<EventMap$1 extends DefaultEventMap> = {
  newListener: (type: keyof WithReservedEvents<EventMap$1> & string, listener: { [K in keyof WithReservedEvents<EventMap$1> & string]: Emitter.Listener<Emitter<EventMap$1>, K, WithReservedEvents<EventMap$1>> }[keyof WithReservedEvents<EventMap$1> & string], options: HookListenerOptions | undefined) => void;
  removeListener: (type: keyof WithReservedEvents<EventMap$1> & string, listener: { [K in keyof WithReservedEvents<EventMap$1> & string]: Emitter.Listener<Emitter<EventMap$1>, K, WithReservedEvents<EventMap$1>> }[keyof WithReservedEvents<EventMap$1> & string], options: HookListenerOptions | undefined) => void;
  beforeEmit: (event: EventMap$1[keyof EventMap$1 & string]) => boolean | void;
};
declare namespace Emitter {
  /**
   * Returns a union of all event types, both public and reserved, for the given emitter.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent, handshake: TypedEvent }>()
   * type AllEventTypes = Emitter.AllEventTypes<typeof emitter>
   * // "*" | "greeting" | "handshake"
   */
  type AllEventTypes<Target extends Emitter<any>, EventMap$1 extends DefaultEventMap = InferEventMap<Target>> = string extends keyof EventMap$1 ? never : keyof EventMap$1 & string;
  /**
   * Returns a union of all public event types for the given emitter.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent, handshake: TypedEvent }>()
   * type EventTypes = Emitter.EventTypes<typeof emitter>
   * // "greeting" | "handshake"
   */
  type PublicEventTypes<Target extends Emitter<any>, EventMap$1 extends DefaultEventMap = InferEventMap<Target>, UserEvents extends UserEventMap<EventMap$1> = UserEventMap<EventMap$1>> = string extends keyof UserEvents ? never : keyof UserEvents & string;
  /**
   * Returns a union of all public event type for the given emitter.
   *
   * @example
   * const emitter = new Emitter<{ greeting: GreetingEvent, handshake: HandshakeEvent }>()
   * type Events = Emitter.Events<typeof emitter>
   * // GreetingEvent | HandshakeEvent
   */
  type Events<Target extends Emitter<any>, EventMap$1 extends DefaultEventMap = InferEventMap<Target>> = string extends keyof UserEventMap<EventMap$1> ? never : UserEventMap<EventMap$1>[keyof UserEventMap<EventMap$1>];
  /**
   * Returns an appropriate `Event` type for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent<string> }>()
   * type GreetingEvent = Emitter.Event<typeof emitter, 'greeting'>
   * // TypedEvent<string>
   */
  type Event<Target extends Emitter<any>, EventType extends keyof EventMap$1 & string, EventMap$1 extends DefaultEventMap = InferEventMap<Target>> = IsReservedEvent<EventType> extends true ? AllEvents<UserEventMap<EventMap$1>> : Brand<EventMap$1[EventType], EventType>;
  /**
   * Returns an appropriate event data type for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ greeting: TypedEvent<'hello'> }>()
   * type GreetingData = Emitter.EventData<typeof emitter, 'gretting'>
   * // "hello"
   */
  type EventData<Target extends Emitter<any>, EventType extends keyof EventMap$1 & string, EventMap$1 extends DefaultEventMap = InferEventMap<Target>> = EventMap$1[EventType] extends TypedEvent<infer DataType> ? DataType : never;
  /**
   * Returns the listener type for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ getTotalPrice: TypedEvent<Cart, number> }>()
   * type Listener = Emitter.ListenerType<typeof emitter, 'getTotalPrice'>
   * // (event: TypedEvent<Cart>) => number
   */
  type Listener<Target extends Emitter<any>, EventType extends keyof EventMap$1 & string, EventMap$1 extends DefaultEventMap = InferEventMap<Target>> = IsReservedEvent<EventType> extends true ? (event: Emitter.Event<Target, EventType, EventMap$1>) => void : (event: Emitter.Event<Target, EventType, EventMap$1>) => Emitter.ListenerReturnType<Target, EventType, EventMap$1> extends [void] ? void : Emitter.ListenerReturnType<Target, EventType, EventMap$1>;
  /**
   * Returns the return type of the listener for the given event type.
   *
   * @example
   * const emitter = new Emitter<{ getTotalPrice: TypedEvent<Cart, number> }>()
   * type ListenerReturnType = Emitter.ListenerReturnType<typeof emitter, 'getTotalPrice'>
   * // number
   */
  type ListenerReturnType<Target extends Emitter<any>, EventType extends keyof EventMap$1 & string, EventMap$1 extends DefaultEventMap = InferEventMap<Target>> = IsReservedEvent<EventType> extends true ? void : EventMap$1[EventType] extends TypedEvent<unknown, infer ReturnType> ? ReturnType : never;
}
declare namespace EventMap {
  /**
   * Returns a union of all public event types from the given event map.
   *
   * @example
   * type MyEventMap = { greeting: TypedEvent, handshake: TypedEvent }
   * type EventTypes = EventMap.EventTypes<MyEventMap>
   * // "greeting" | "handshake"
   */
  type EventTypes<Map extends DefaultEventMap> = Emitter.PublicEventTypes<Emitter<Map>>;
  /**
   * Returns a union of all public event type from the given event map.
   *
   * @example
   * type MyEventMap = { greeting: GreetingEvent, handshake: HandshakeEvent }
   * type Events = EventMap.Events<MyEventMap>
   * // GreetingEvent | HandshakeEvent
   */
  type Events<Map extends DefaultEventMap> = Emitter.Events<Emitter<Map>>;
  /**
   * Returns an appropriate `Event` type for the given event type.
   *
   * @example
   * type MyEventMap = { greeting: TypedEvent<string> }
   * type GreetingEvent = EventMap.Event<MyEventMap, 'greeting'>
   * // TypedEvent<string>
   */
  type Event<Map extends DefaultEventMap, Type extends keyof WithReservedEvents<Map> & string> = Emitter.Event<Emitter<Map>, Type, WithReservedEvents<Map>>;
  /**
   * Returns an appropriate event data type for the given event type.
   *
   * @example
   * type MyEventMap = { greeting: TypedEvent<'hello'> }
   * type GreetingData = EventMap.EventData<MyEventMap, 'greeting'>
   * // "hello"
   */
  type EventData<Map extends DefaultEventMap, Type extends keyof WithReservedEvents<Map> & string> = Emitter.EventData<Emitter<Map>, Type, WithReservedEvents<Map>>;
  /**
   * Returns the listener type for the given event type.
   *
   * @example
   * type MyEventMap = { getTotalPrice: TypedEvent<Cart, number> }>
   * type Listener = EventMap.Listener<MyEventMap, 'getTotalPrice'>
   * // (event: TypedEvent<Cart>) => number
   */
  type Listener<Map extends DefaultEventMap, Type extends keyof WithReservedEvents<Map> & string> = Emitter.Listener<Emitter<Map>, Type, WithReservedEvents<Map>>;
  /**
   * Returns the return type of the listener for the given event type.
   *
   * @example
   * type MyEventMap = { getTotalPrice: TypedEvent<Cart, number> }
   * type ListenerReturnType = EventMap.ListenerReturnType<MyEventMap, 'getTotalPrice'>
   * // number
   */
  type ListenerReturnType<Map extends DefaultEventMap, Type extends keyof WithReservedEvents<Map> & string> = Emitter.ListenerReturnType<Emitter<Map>, Type, WithReservedEvents<Map>>;
}
declare class Emitter<EventMap$1 extends DefaultEventMap> {
  #private;
  readonly hooks: {
    on<HookType extends keyof EmitterHookMap<EventMap$1>>(type: HookType, callback: EmitterHookMap<EventMap$1>[HookType], options?: HookListenerOptions): void;
    removeListener<HookType extends keyof EmitterHookMap<EventMap$1>>(type: HookType, callback: EmitterHookMap<EventMap$1>[HookType], options?: HookListenerOptions): void;
  };
  constructor();
  /**
   * Adds a listener for the given event type.
   */
  on<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type: EventType, listener: Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap$1>>, options?: TypedListenerOptions): typeof this;
  /**
   * Adds a one-time listener for the given event type.
   */
  once<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type: EventType, listener: Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap$1>>, options?: Omit<TypedListenerOptions, 'once'>): typeof this;
  /**
   * Prepends a listener for the given event type.
   */
  earlyOn<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type: EventType, listener: Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap$1>>, options?: TypedListenerOptions): typeof this;
  /**
   * Prepends a one-time listener for the given event type.
   */
  earlyOnce<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type: EventType, listener: Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap$1>>, options?: Omit<TypedListenerOptions, 'once'>): typeof this;
  /**
   * Emits the given typed event.
   *
   * @returns {boolean} Returns `true` if the event had any listeners, `false` otherwise.
   */
  emit<EventType extends keyof EventMap$1 & string>(event: Brand<EventMap$1[EventType], EventType, true>): boolean;
  /**
   * Emits the given typed event and returns a promise that resolves
   * when all the listeners for that event have settled.
   *
   * @returns {Promise<Array<Emitter.ListenerReturnType>>} A promise that resolves
   * with the return values of all listeners.
   */
  emitAsPromise<EventType extends keyof EventMap$1 & string>(event: Brand<EventMap$1[EventType], EventType, true>): Promise<Array<Emitter.ListenerReturnType<typeof this, EventType, EventMap$1>>>;
  /**
   * Emits the given event and returns a generator that yields
   * the result of each listener in the order of their registration.
   * This way, you stop exhausting the listeners once you get the expected value.
   */
  emitAsGenerator<EventType extends keyof EventMap$1 & string>(event: Brand<EventMap$1[EventType], EventType, true>): Generator<Emitter.ListenerReturnType<typeof this, EventType, EventMap$1>>;
  /**
   * Removes a listener for the given event type.
   */
  removeListener<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type: EventType, listener: Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap$1>>): void;
  /**
   * Removes all listeners for the given event type.
   * If no event type is provided, removes all existing listeners.
   */
  removeAllListeners<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type?: EventType): void;
  /**
   * Returns the list of listeners for the given event type.
   * If no even type is provided, returns all listeners.
   */
  listeners<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type?: EventType): Array<Emitter.Listener<typeof this, EventType, WithReservedEvents<EventMap$1>>>;
  /**
   * Returns the number of listeners for the given event type.
   * If no even type is provided, returns the total number of listeners.
   */
  listenerCount<EventType extends keyof WithReservedEvents<EventMap$1> & string>(type?: EventType): number;
}
//#endregion
export { DefaultEventMap, Emitter, EmitterHookMap, EventMap, HookListenerOptions, ReservedEventMap, TypedEvent, TypedListenerOptions, WithReservedEvents };
//# sourceMappingURL=index.d.mts.map