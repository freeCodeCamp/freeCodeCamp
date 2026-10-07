/**
 * An events map is an interface that maps event names to their value, which
 * represents the type of the `on` listener.
 */
export interface EventsMap {
    [event: string]: any;
}

/**
 * The default events map, used if no EventsMap is given. Using this EventsMap
 * is equivalent to accepting all event names, and any data.
 */
export interface DefaultEventsMap {
    [event: string]: (...args: any[]) => void;
}

/**
 * Returns a union type containing all the keys of an event map.
 */
export type EventNames<Map extends EventsMap> = keyof Map & (string | symbol);

/** The tuple type representing the parameters of an event listener */
export type EventParams<
    Map extends EventsMap,
    Ev extends EventNames<Map>
    > = Parameters<Map[Ev]>;

/**
 * The event names that are either in ReservedEvents or in UserEvents
 */
export type ReservedOrUserEventNames<
    ReservedEventsMap extends EventsMap,
    UserEvents extends EventsMap
    > = EventNames<ReservedEventsMap> | EventNames<UserEvents>;

/**
 * Type of a listener of a user event or a reserved event. If `Ev` is in
 * `ReservedEvents`, the reserved event listener is returned.
 */
export type ReservedOrUserListener<
    ReservedEvents extends EventsMap,
    UserEvents extends EventsMap,
    Ev extends ReservedOrUserEventNames<ReservedEvents, UserEvents>
    > = FallbackToUntypedListener<
    Ev extends EventNames<ReservedEvents>
        ? ReservedEvents[Ev]
        : Ev extends EventNames<UserEvents>
        ? UserEvents[Ev]
        : never
    >;

/**
 * Returns an untyped listener type if `T` is `never`; otherwise, returns `T`.
 *
 * This is a hack to mitigate https://github.com/socketio/socket.io/issues/3833.
 * Needed because of https://github.com/microsoft/TypeScript/issues/41778
 */
type FallbackToUntypedListener<T> = [T] extends [never]
    ? (...args: any[]) => void | Promise<void>
    : T;

/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */
export class Emitter<
    ListenEvents extends EventsMap,
    EmitEvents extends EventsMap,
    ReservedEvents extends EventsMap = {}
    > {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(
        ev: Ev,
        listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>
    ): this;

    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    once<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(
        ev: Ev,
        listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>
    ): this;

    /**
     * Removes the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    off<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(
        ev?: Ev,
        listener?: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>
    ): this;

    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */
    emit<Ev extends EventNames<EmitEvents>>(
        ev: Ev,
        ...args: EventParams<EmitEvents, Ev>
    ): this;

    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */
    protected emitReserved<Ev extends EventNames<ReservedEvents>>(
        ev: Ev,
        ...args: EventParams<ReservedEvents, Ev>
    ): this;

    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */
    listeners<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(
        event: Ev
    ): ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>[];

    /**
     * Returns true if there is a listener for this event.
     *
     * @param event Event name
     * @returns boolean
     */
    hasListeners<
        Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>
        >(event: Ev): boolean;

    /**
     * Removes the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    removeListener<
        Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>
        >(
        ev?: Ev,
        listener?: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>
    ): this;

    /**
     * Removes all `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     */
    removeAllListeners<
        Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>
        >(ev?: Ev): this;
}
