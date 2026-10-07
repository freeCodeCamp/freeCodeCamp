export {};

import { InternalEventTargetEventProperties } from "node:events";

type _AbortController = typeof globalThis extends { onmessage: any } ? {} : AbortController;
interface AbortController {
    readonly signal: AbortSignal;
    abort(reason?: any): void;
}

interface AbortSignalEventMap {
    "abort": Event;
}

type _AbortSignal = typeof globalThis extends { onmessage: any } ? {} : AbortSignal;
interface AbortSignal extends EventTarget, InternalEventTargetEventProperties<AbortSignalEventMap> {
    readonly aborted: boolean;
    readonly reason: any;
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(
        type: K,
        listener: (ev: AbortSignalEventMap[K]) => void,
        options?: AddEventListenerOptions | boolean,
    ): void;
    addEventListener(
        type: string,
        listener: EventListener | EventListenerObject,
        options?: AddEventListenerOptions | boolean,
    ): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(
        type: K,
        listener: (ev: AbortSignalEventMap[K]) => void,
        options?: EventListenerOptions | boolean,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListener | EventListenerObject,
        options?: EventListenerOptions | boolean,
    ): void;
}

declare global {
    interface AbortController extends _AbortController {}
    var AbortController: typeof globalThis extends { onmessage: any; AbortController: infer T } ? T
        : {
            prototype: AbortController;
            new(): AbortController;
        };

    interface AbortSignal extends _AbortSignal {}
    var AbortSignal: typeof globalThis extends { onmessage: any; AbortSignal: infer T } ? T
        : {
            prototype: AbortSignal;
            new(): AbortSignal;
            abort(reason?: any): AbortSignal;
            any(signals: AbortSignal[]): AbortSignal;
            timeout(milliseconds: number): AbortSignal;
        };
}
