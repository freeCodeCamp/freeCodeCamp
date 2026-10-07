import { EventEmitter } from "events";
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
/**
 * Returns a union type containing all the keys of an event map that have an acknowledgement callback.
 *
 * That also have *some* data coming in.
 */
export type EventNamesWithAck<Map extends EventsMap, K extends EventNames<Map> = EventNames<Map>> = IfAny<Last<Parameters<Map[K]>> | Map[K], K, K extends (Last<Parameters<Map[K]>> extends (...args: any[]) => any ? FirstNonErrorArg<Last<Parameters<Map[K]>>> extends void ? never : K : never) ? K : never>;
/**
 * Returns a union type containing all the keys of an event map that have an acknowledgement callback.
 *
 * That also have *some* data coming in.
 */
export type EventNamesWithoutAck<Map extends EventsMap, K extends EventNames<Map> = EventNames<Map>> = IfAny<Last<Parameters<Map[K]>> | Map[K], K, K extends (Parameters<Map[K]> extends never[] ? K : never) ? K : K extends (Last<Parameters<Map[K]>> extends (...args: any[]) => any ? never : K) ? K : never>;
export type RemoveAcknowledgements<E extends EventsMap> = {
    [K in EventNamesWithoutAck<E>]: E[K];
};
export type EventNamesWithError<Map extends EventsMap, K extends EventNamesWithAck<Map> = EventNamesWithAck<Map>> = IfAny<Last<Parameters<Map[K]>> | Map[K], K, K extends (LooseParameters<Last<Parameters<Map[K]>>>[0] extends Error ? K : never) ? K : never>;
/** The tuple type representing the parameters of an event listener */
export type EventParams<Map extends EventsMap, Ev extends EventNames<Map>> = Parameters<Map[Ev]>;
/**
 * The event names that are either in ReservedEvents or in UserEvents
 */
export type ReservedOrUserEventNames<ReservedEventsMap extends EventsMap, UserEvents extends EventsMap> = EventNames<ReservedEventsMap> | EventNames<UserEvents>;
/**
 * Type of a listener of a user event or a reserved event. If `Ev` is in
 * `ReservedEvents`, the reserved event listener is returned.
 */
export type ReservedOrUserListener<ReservedEvents extends EventsMap, UserEvents extends EventsMap, Ev extends ReservedOrUserEventNames<ReservedEvents, UserEvents>> = FallbackToUntypedListener<Ev extends EventNames<ReservedEvents> ? ReservedEvents[Ev] : Ev extends EventNames<UserEvents> ? UserEvents[Ev] : never>;
/**
 * Returns an untyped listener type if `T` is `never`; otherwise, returns `T`.
 *
 * This is a hack to mitigate https://github.com/socketio/socket.io/issues/3833.
 * Needed because of https://github.com/microsoft/TypeScript/issues/41778
 */
type FallbackToUntypedListener<T> = [T] extends [never] ? (...args: any[]) => void | Promise<void> : T;
/**
 * Interface for classes that aren't `EventEmitter`s, but still expose a
 * strictly typed `emit` method.
 */
export interface TypedEventBroadcaster<EmitEvents extends EventsMap> {
    emit<Ev extends EventNames<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): boolean;
}
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
export declare abstract class StrictEventEmitter<ListenEvents extends EventsMap, EmitEvents extends EventsMap, ReservedEvents extends EventsMap = {}> extends EventEmitter implements TypedEventBroadcaster<EmitEvents> {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(ev: Ev, listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>): this;
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    once<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(ev: Ev, listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>): this;
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */
    emit<Ev extends EventNames<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): boolean;
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */
    protected emitReserved<Ev extends EventNames<ReservedEvents>>(ev: Ev, ...args: EventParams<ReservedEvents, Ev>): boolean;
    /**
     * Emits an event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can get around the strict typing. This is useful for
     * calling `emit.apply`, which can be called as `emitUntyped.apply`.
     *
     * @param ev Event name
     * @param args Arguments to emit along with the event
     */
    protected emitUntyped(ev: string, ...args: any[]): boolean;
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */
    listeners<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(event: Ev): ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>[];
}
/**
 * Returns a boolean for whether the given type is `any`.
 *
 * @link https://stackoverflow.com/a/49928360/1490091
 *
 * Useful in type utilities, such as disallowing `any`s to be passed to a function.
 *
 * @author sindresorhus
 * @link https://github.com/sindresorhus/type-fest
 */
type IsAny<T> = 0 extends 1 & T ? true : false;
/**
 * An if-else-like type that resolves depending on whether the given type is `any`.
 *
 * @see {@link IsAny}
 *
 * @author sindresorhus
 * @link https://github.com/sindresorhus/type-fest
 */
type IfAny<T, TypeIfAny = true, TypeIfNotAny = false> = IsAny<T> extends true ? TypeIfAny : TypeIfNotAny;
/**
 * Extracts the type of the last element of an array.
 *
 * Use-case: Defining the return type of functions that extract the last element of an array, for example [`lodash.last`](https://lodash.com/docs/4.17.15#last).
 *
 * @author sindresorhus
 * @link https://github.com/sindresorhus/type-fest
 */
export type Last<ValueType extends readonly unknown[]> = ValueType extends readonly [infer ElementType] ? ElementType : ValueType extends readonly [infer _, ...infer Tail] ? Last<Tail> : ValueType extends ReadonlyArray<infer ElementType> ? ElementType : never;
export type FirstNonErrorTuple<T extends unknown[]> = T[0] extends Error ? T[1] : T[0];
export type AllButLast<T extends any[]> = T extends [...infer H, infer L] ? H : any[];
/**
 * Like `Parameters<T>`, but doesn't require `T` to be a function ahead of time.
 */
type LooseParameters<T> = T extends (...args: infer P) => any ? P : never;
export type FirstNonErrorArg<T> = T extends (...args: infer Params) => any ? FirstNonErrorTuple<Params> : any;
type PrependTimeoutError<T extends any[]> = {
    [K in keyof T]: T[K] extends (...args: infer Params) => infer Result ? Params[0] extends Error ? T[K] : (err: Error, ...args: Params) => Result : T[K];
};
export type MultiplyArray<T extends unknown[]> = {
    [K in keyof T]: T[K][];
};
type InferFirstAndPreserveLabel<T extends any[]> = T extends [any, ...infer R] ? T extends [...infer H, ...R] ? H : never : never;
/**
 * Utility type to decorate the acknowledgement callbacks multiple values
 * on the first non error element while removing any elements after
 */
type ExpectMultipleResponses<T extends any[]> = {
    [K in keyof T]: T[K] extends (...args: infer Params) => infer Result ? Params extends [Error] ? (err: Error) => Result : Params extends [Error, ...infer Rest] ? (err: Error, ...args: InferFirstAndPreserveLabel<MultiplyArray<Rest>>) => Result : Params extends [] ? () => Result : (...args: InferFirstAndPreserveLabel<MultiplyArray<Params>>) => Result : T[K];
};
/**
 * Utility type to decorate the acknowledgement callbacks with a timeout error.
 *
 * This is needed because the timeout() flag breaks the symmetry between the sender and the receiver:
 *
 * @example
 * interface Events {
 *   "my-event": (val: string) => void;
 * }
 *
 * socket.on("my-event", (cb) => {
 *   cb("123"); // one single argument here
 * });
 *
 * socket.timeout(1000).emit("my-event", (err, val) => {
 *   // two arguments there (the "err" argument is not properly typed)
 * });
 *
 */
export type DecorateAcknowledgements<E> = {
    [K in keyof E]: E[K] extends (...args: infer Params) => infer Result ? (...args: PrependTimeoutError<Params>) => Result : E[K];
};
export type DecorateAcknowledgementsWithTimeoutAndMultipleResponses<E> = {
    [K in keyof E]: E[K] extends (...args: infer Params) => infer Result ? (...args: ExpectMultipleResponses<PrependTimeoutError<Params>>) => Result : E[K];
};
export type DecorateAcknowledgementsWithMultipleResponses<E> = {
    [K in keyof E]: E[K] extends (...args: infer Params) => infer Result ? (...args: ExpectMultipleResponses<Params>) => Result : E[K];
};
export {};
