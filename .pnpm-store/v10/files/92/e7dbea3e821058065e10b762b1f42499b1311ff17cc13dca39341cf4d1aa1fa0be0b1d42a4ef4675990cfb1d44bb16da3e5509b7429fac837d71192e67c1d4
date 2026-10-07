import { TNativeEventTarget } from '../types';

export interface IEventTarget<EventMap extends Record<string, Event>> extends TNativeEventTarget {
    addEventListener<Type extends keyof EventMap>(
        type: Type,
        listener: (this: this, event: EventMap[Type]) => void,
        options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(type: string, listener: null | EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;

    removeEventListener<Type extends keyof EventMap>(
        type: Type,
        listener: (this: this, event: EventMap[Type]) => void,
        options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(type: string, callback: null | EventListenerOrEventListenerObject, options?: EventListenerOptions | boolean): void;
}
