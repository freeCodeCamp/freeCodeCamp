export declare type EventMap = {
    [eventName: string]: Array<unknown>;
};
export declare type InternalEventNames = 'newListener' | 'removeListener';
export declare type InternalListener<Events extends EventMap> = Listener<[
    eventName: keyof Events,
    listener: Listener<Array<unknown>>
]>;
export declare type Listener<Data extends Array<unknown>> = (...data: Data) => void;
/**
 * Node.js-compatible implementation of `EventEmitter`.
 *
 * @example
 * const emitter = new Emitter<{ hello: [string] }>()
 * emitter.on('hello', (name) => console.log(name))
 * emitter.emit('hello', 'John')
 */
export declare class Emitter<Events extends EventMap> {
    private events;
    private maxListeners;
    private hasWarnedAboutPotentialMemoryLeak;
    static defaultMaxListeners: number;
    static listenerCount<Events extends EventMap>(emitter: Emitter<EventMap>, eventName: keyof Events): number;
    constructor();
    private _emitInternalEvent;
    private _getListeners;
    private _removeListener;
    private _wrapOnceListener;
    setMaxListeners(maxListeners: number): this;
    /**
     * Returns the current max listener value for the `Emitter` which is
     * either set by `emitter.setMaxListeners(n)` or defaults to
     * `Emitter.defaultMaxListeners`.
     */
    getMaxListeners(): number;
    /**
     * Returns an array listing the events for which the emitter has registered listeners.
     * The values in the array will be strings or Symbols.
     */
    eventNames(): Array<keyof Events>;
    /**
     * Synchronously calls each of the listeners registered for the event named `eventName`,
     * in the order they were registered, passing the supplied arguments to each.
     * Returns `true` if the event has listeners, `false` otherwise.
     *
     * @example
     * const emitter = new Emitter<{ hello: [string] }>()
     * emitter.emit('hello', 'John')
     */
    emit<EventName extends keyof Events>(eventName: EventName, ...data: Events[EventName]): boolean;
    addListener(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    addListener<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    on(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    on<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    once(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    once<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    prependListener(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    prependListener<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    prependOnceListener(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    prependOnceListener<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    removeListener(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    removeListener<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    off(eventName: InternalEventNames, listener: InternalListener<Events>): this;
    off<EventName extends keyof Events>(eventName: EventName, listener: Listener<Events[EventName]>): this;
    removeAllListeners(eventName?: InternalEventNames): this;
    removeAllListeners<EventName extends keyof Events>(eventName?: EventName): this;
    listeners(eventName: InternalEventNames): Array<Listener<any>>;
    listeners<EventName extends keyof Events>(eventName: EventName): Array<Listener<Events[EventName]>>;
    listenerCount(eventName: InternalEventNames): number;
    listenerCount<EventName extends keyof Events>(eventName: EventName): number;
    rawListeners<EventName extends keyof Events>(eventName: EventName): Array<Listener<Events[EventName]>>;
}
