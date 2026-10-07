/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 */
declare class EventEmitter<
  EventTypes extends EventEmitter.ValidEventTypes = string | symbol,
  Context extends any = any
> {
  static prefixed: string | boolean;

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   */
  eventNames(): Array<EventEmitter.EventNames<EventTypes>>;

  /**
   * Return the listeners registered for a given event.
   */
  listeners<T extends EventEmitter.EventNames<EventTypes>>(
    event: T
  ): Array<EventEmitter.EventListener<EventTypes, T>>;

  /**
   * Return the number of listeners listening to a given event.
   */
  listenerCount(event: EventEmitter.EventNames<EventTypes>): number;

  /**
   * Calls each of the listeners registered for a given event.
   */
  emit<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    ...args: EventEmitter.EventArgs<EventTypes, T>
  ): boolean;

  /**
   * Add a listener for a given event.
   */
  on<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context
  ): this;
  addListener<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context
  ): this;

  /**
   * Add a one-time listener for a given event.
   */
  once<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context
  ): this;

  /**
   * Remove the listeners of a given event.
   */
  removeListener<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
    once?: boolean
  ): this;
  off<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
    once?: boolean
  ): this;

  /**
   * Remove all listeners, or those of the specified event.
   */
  removeAllListeners(event?: EventEmitter.EventNames<EventTypes>): this;
}

declare namespace EventEmitter {
  export interface ListenerFn<Args extends any[] = any[]> {
    (...args: Args): void;
  }

  export interface EventEmitterStatic {
    new <
      EventTypes extends ValidEventTypes = string | symbol,
      Context = any
    >(): EventEmitter<EventTypes, Context>;
  }

  /**
   * `object` should be in either of the following forms:
   * ```
   * interface EventTypes {
   *   'event-with-parameters': any[]
   *   'event-with-example-handler': (...args: any[]) => void
   * }
   * ```
   */
  export type ValidEventTypes = string | symbol | object;

  export type EventNames<T extends ValidEventTypes> = T extends string | symbol
    ? T
    : keyof T;

  export type ArgumentMap<T extends object> = {
    [K in keyof T]: T[K] extends (...args: any[]) => void
      ? Parameters<T[K]>
      : T[K] extends any[]
      ? T[K]
      : any[];
  };

  export type EventListener<
    T extends ValidEventTypes,
    K extends EventNames<T>
  > = T extends string | symbol
    ? (...args: any[]) => void
    : (
        ...args: ArgumentMap<Exclude<T, string | symbol>>[Extract<K, keyof T>]
      ) => void;

  export type EventArgs<
    T extends ValidEventTypes,
    K extends EventNames<T>
  > = Parameters<EventListener<T, K>>;

  export const EventEmitter: EventEmitterStatic;
}

export { EventEmitter }
export default EventEmitter;
