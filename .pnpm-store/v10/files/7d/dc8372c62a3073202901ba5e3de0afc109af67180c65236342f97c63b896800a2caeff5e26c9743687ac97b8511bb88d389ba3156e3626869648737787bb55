export as namespace EventTargetShim

/**
 * `Event` interface.
 * @see https://dom.spec.whatwg.org/#event
 */
export interface Event {
    /**
     * The type of this event.
     */
    readonly type: string

    /**
     * The target of this event.
     */
    readonly target: EventTarget<{}, {}, "standard"> | null

    /**
     * The current target of this event.
     */
    readonly currentTarget: EventTarget<{}, {}, "standard"> | null

    /**
     * The target of this event.
     * @deprecated
     */
    readonly srcElement: any | null

    /**
     * The composed path of this event.
     */
    composedPath(): EventTarget<{}, {}, "standard">[]

    /**
     * Constant of NONE.
     */
    readonly NONE: number

    /**
     * Constant of CAPTURING_PHASE.
     */
    readonly CAPTURING_PHASE: number

    /**
     * Constant of BUBBLING_PHASE.
     */
    readonly BUBBLING_PHASE: number

    /**
     * Constant of AT_TARGET.
     */
    readonly AT_TARGET: number

    /**
     * Indicates which phase of the event flow is currently being evaluated.
     */
    readonly eventPhase: number

    /**
     * Stop event bubbling.
     */
    stopPropagation(): void

    /**
     * Stop event bubbling.
     */
    stopImmediatePropagation(): void

    /**
     * Initialize event.
     * @deprecated
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void

    /**
     * The flag indicating bubbling.
     */
    readonly bubbles: boolean

    /**
     * Stop event bubbling.
     * @deprecated
     */
    cancelBubble: boolean

    /**
     * Set or get cancellation flag.
     * @deprecated
     */
    returnValue: boolean

    /**
     * The flag indicating whether the event can be canceled.
     */
    readonly cancelable: boolean

    /**
     * Cancel this event.
     */
    preventDefault(): void

    /**
     * The flag to indicating whether the event was canceled.
     */
    readonly defaultPrevented: boolean

    /**
     * The flag to indicating if event is composed.
     */
    readonly composed: boolean

    /**
     * Indicates whether the event was dispatched by the user agent.
     */
    readonly isTrusted: boolean

    /**
     * The unix time of this event.
     */
    readonly timeStamp: number
}

/**
 * The constructor of `EventTarget` interface.
 */
export type EventTargetConstructor<
    TEvents extends EventTarget.EventDefinition = {},
    TEventAttributes extends EventTarget.EventDefinition = {},
    TMode extends EventTarget.Mode = "loose"
> = {
    prototype: EventTarget<TEvents, TEventAttributes, TMode>
    new(): EventTarget<TEvents, TEventAttributes, TMode>
}

/**
 * `EventTarget` interface.
 * @see https://dom.spec.whatwg.org/#interface-eventtarget
 */
export type EventTarget<
    TEvents extends EventTarget.EventDefinition = {},
    TEventAttributes extends EventTarget.EventDefinition = {},
    TMode extends EventTarget.Mode = "loose"
> = EventTarget.EventAttributes<TEventAttributes> & {
    /**
     * Add a given listener to this event target.
     * @param eventName The event name to add.
     * @param listener The listener to add.
     * @param options The options for this listener.
     */
    addEventListener<TEventType extends EventTarget.EventType<TEvents, TMode>>(
        type: TEventType,
        listener:
            | EventTarget.Listener<EventTarget.PickEvent<TEvents, TEventType>>
            | null,
        options?: boolean | EventTarget.AddOptions
    ): void

    /**
     * Remove a given listener from this event target.
     * @param eventName The event name to remove.
     * @param listener The listener to remove.
     * @param options The options for this listener.
     */
    removeEventListener<TEventType extends EventTarget.EventType<TEvents, TMode>>(
        type: TEventType,
        listener:
            | EventTarget.Listener<EventTarget.PickEvent<TEvents, TEventType>>
            | null,
        options?: boolean | EventTarget.RemoveOptions
    ): void

    /**
     * Dispatch a given event.
     * @param event The event to dispatch.
     * @returns `false` if canceled.
     */
    dispatchEvent<TEventType extends EventTarget.EventType<TEvents, TMode>>(
        event: EventTarget.EventData<TEvents, TEventType, TMode>
    ): boolean
}

export const EventTarget: EventTargetConstructor & {
    /**
     * Create an `EventTarget` instance with detailed event definition.
     *
     * The detailed event definition requires to use `defineEventAttribute()`
     * function later.
     *
     * Unfortunately, the second type parameter `TEventAttributes` was needed
     * because we cannot compute string literal types.
     *
     * @example
     * const signal = new EventTarget<{ abort: Event }, { onabort: Event }>()
     * defineEventAttribute(signal, "abort")
     */
    new <
        TEvents extends EventTarget.EventDefinition,
        TEventAttributes extends EventTarget.EventDefinition,
        TMode extends EventTarget.Mode = "loose"
    >(): EventTarget<TEvents, TEventAttributes, TMode>

    /**
     * Define an `EventTarget` constructor with attribute events and detailed event definition.
     *
     * Unfortunately, the second type parameter `TEventAttributes` was needed
     * because we cannot compute string literal types.
     *
     * @example
     * class AbortSignal extends EventTarget<{ abort: Event }, { onabort: Event }>("abort") {
     *      abort(): void {}
     * }
     *
     * @param events Optional event attributes (e.g. passing in `"click"` adds `onclick` to prototype).
     */
    <
        TEvents extends EventTarget.EventDefinition = {},
        TEventAttributes extends EventTarget.EventDefinition = {},
        TMode extends EventTarget.Mode = "loose"
    >(events: string[]): EventTargetConstructor<
        TEvents,
        TEventAttributes,
        TMode
    >

    /**
     * Define an `EventTarget` constructor with attribute events and detailed event definition.
     *
     * Unfortunately, the second type parameter `TEventAttributes` was needed
     * because we cannot compute string literal types.
     *
     * @example
     * class AbortSignal extends EventTarget<{ abort: Event }, { onabort: Event }>("abort") {
     *      abort(): void {}
     * }
     *
     * @param events Optional event attributes (e.g. passing in `"click"` adds `onclick` to prototype).
     */
    <
        TEvents extends EventTarget.EventDefinition = {},
        TEventAttributes extends EventTarget.EventDefinition = {},
        TMode extends EventTarget.Mode = "loose"
    >(event0: string, ...events: string[]): EventTargetConstructor<
        TEvents,
        TEventAttributes,
        TMode
    >
}

export namespace EventTarget {
    /**
     * Options of `removeEventListener()` method.
     */
    export interface RemoveOptions {
        /**
         * The flag to indicate that the listener is for the capturing phase.
         */
        capture?: boolean
    }

    /**
     * Options of `addEventListener()` method.
     */
    export interface AddOptions extends RemoveOptions {
        /**
         * The flag to indicate that the listener doesn't support
         * `event.preventDefault()` operation.
         */
        passive?: boolean
        /**
         * The flag to indicate that the listener will be removed on the first
         * event.
         */
        once?: boolean
    }

    /**
     * The type of regular listeners.
     */
    export interface FunctionListener<TEvent> {
        (event: TEvent): void
    }

    /**
     * The type of object listeners.
     */
    export interface ObjectListener<TEvent> {
        handleEvent(event: TEvent): void
    }

    /**
     * The type of listeners.
     */
    export type Listener<TEvent> =
        | FunctionListener<TEvent>
        | ObjectListener<TEvent>

    /**
     * Event definition.
     */
    export type EventDefinition = {
        readonly [key: string]: Event
    }

    /**
     * Mapped type for event attributes.
     */
    export type EventAttributes<TEventAttributes extends EventDefinition> = {
        [P in keyof TEventAttributes]:
            | FunctionListener<TEventAttributes[P]>
            | null
    }

    /**
     * The type of event data for `dispatchEvent()` method.
     */
    export type EventData<
        TEvents extends EventDefinition,
        TEventType extends keyof TEvents | string,
        TMode extends Mode
    > =
        TEventType extends keyof TEvents
            ? (
                // Require properties which are not generated automatically.
                & Pick<
                    TEvents[TEventType],
                    Exclude<keyof TEvents[TEventType], OmittableEventKeys>
                >
                // Properties which are generated automatically are optional.
                & Partial<Pick<Event, OmittableEventKeys>>
            )
            : (
                TMode extends "standard"
                    ? Event
                    : Event | NonStandardEvent
            )

    /**
     * The string literal types of the properties which are generated
     * automatically in `dispatchEvent()` method.
     */
    export type OmittableEventKeys = Exclude<keyof Event, "type">

    /**
     * The type of event data.
     */
    export type NonStandardEvent = {
        [key: string]: any
        type: string
    }

    /**
     * The type of listeners.
     */
    export type PickEvent<
        TEvents extends EventDefinition,
        TEventType extends keyof TEvents | string,
    > =
        TEventType extends keyof TEvents
            ? TEvents[TEventType]
            : Event

    /**
     * Event type candidates.
     */
    export type EventType<
        TEvents extends EventDefinition,
        TMode extends Mode
    > =
        TMode extends "strict"
            ? keyof TEvents
            : keyof TEvents | string

    /**
     * - `"strict"` ..... Methods don't accept unknown events.
     *                    `dispatchEvent()` accepts partial objects.
     * - `"loose"` ...... Methods accept unknown events.
     *                    `dispatchEvent()` accepts partial objects.
     * - `"standard"` ... Methods accept unknown events.
     *                    `dispatchEvent()` doesn't accept partial objects.
     */
    export type Mode = "strict" | "standard" | "loose"
}

/**
 * Specialized `type` property.
 */
export type Type<T extends string> = { type: T }

/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param prototype The event target prototype to define an event attribute.
 * @param eventName The event name to define.
 */
export function defineEventAttribute(
    prototype: EventTarget,
    eventName: string
): void

export default EventTarget
