export declare type EventType = string | symbol;
export declare type Handler<T = unknown> = (event: T) => void;
export declare type WildcardHandler<T = Record<string, unknown>> = (type: keyof T, event: T[keyof T]) => void;
export declare type EventHandlerList<T = unknown> = Array<Handler<T>>;
export declare type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>;
export declare type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<keyof Events | '*', EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>>;
export interface Emitter<Events extends Record<EventType, unknown>> {
    all: EventHandlerMap<Events>;
    on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void;
    on(type: '*', handler: WildcardHandler<Events>): void;
    off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void;
    off(type: '*', handler: WildcardHandler<Events>): void;
    emit<Key extends keyof Events>(type: Key, event: Events[Key]): void;
    emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void;
}
/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
export default function mitt<Events extends Record<EventType, unknown>>(all?: EventHandlerMap<Events>): Emitter<Events>;
