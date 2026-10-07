export {};

type _AbortController = typeof globalThis extends { onmessage: any } ? {} : AbortController;
interface AbortController {
    readonly signal: AbortSignal;
    abort(reason?: any): void;
}

type _AbortSignal = typeof globalThis extends { onmessage: any } ? {} : AbortSignal;
interface AbortSignal extends EventTarget {
    readonly aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    readonly reason: any;
    throwIfAborted(): void;
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
