/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
declare global {
    interface SymbolConstructor {
        /**
         * A method that is used to release resources held by an object. Called by
         * the semantics of the `using` statement.
         */
        readonly dispose: unique symbol;
        /**
         * A method that is used to asynchronously release resources held by an
         * object. Called by the semantics of the `await using` statement.
         */
        readonly asyncDispose: unique symbol;
    }
    interface Disposable {
        [Symbol.dispose](): void;
    }
    interface AsyncDisposable {
        [Symbol.asyncDispose](): PromiseLike<void>;
    }
}
/**
 * @internal
 */
export declare const disposeSymbol: typeof Symbol.dispose;
/**
 * @internal
 */
export declare const asyncDisposeSymbol: typeof Symbol.asyncDispose;
/**
 * @internal
 */
export declare class DisposableStackPolyfill {
    #private;
    /**
     * Returns a value indicating whether the stack has been disposed.
     */
    get disposed(): boolean;
    /**
     * Alias for `[Symbol.dispose]()`.
     */
    dispose(): void;
    /**
     * Adds a disposable resource to the top of stack, returning the resource.
     * Has no effect if provided `null` or `undefined`.
     *
     * @param value - A `Disposable` object, `null`, or `undefined`.
     * `null` and `undefined` will not be added, but will be returned.
     * @returns The provided `value`.
     */
    use<T extends Disposable | null | undefined>(value: T): T;
    /**
     * Adds a non-disposable resource and a disposal callback to the top of the stack.
     *
     * @param value - A resource to be disposed.
     * @param onDispose - A callback invoked to dispose the provided value.
     * Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt<T>(value: T, onDispose: (value: T) => void): T;
    /**
     * Add a disposal callback to the top of the stack to be invoked when stack is disposed.
     * @param onDispose - A callback to invoke when this object is disposed.
     */
    defer(onDispose: () => void): void;
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     * @returns The new `DisposableStack`.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move(): DisposableStackPolyfill;
    /**
     * Disposes each resource in the stack in last-in-first-out (LIFO) manner.
     */
    [disposeSymbol](): void;
    readonly [Symbol.toStringTag] = "DisposableStack";
}
/**
 * @internal
 */
export declare const DisposableStack: typeof DisposableStackPolyfill;
/**
 * @internal
 */
export declare class AsyncDisposableStackPolyfill {
    #private;
    /**
     * Returns a value indicating whether the stack has been disposed.
     */
    get disposed(): boolean;
    /**
     * Alias for `[Symbol.asyncDispose]()`.
     */
    disposeAsync(): Promise<void>;
    /**
     * Adds a AsyncDisposable resource to the top of stack, returning the resource.
     * Has no effect if provided `null` or `undefined`.
     *
     * @param value - A `AsyncDisposable` object, `null`, or `undefined`.
     * `null` and `undefined` will not be added, but will be returned.
     * @returns The provided `value`.
     */
    use<T extends AsyncDisposable | Disposable | null | undefined>(value: T): T;
    /**
     * Adds a non-disposable resource and a disposal callback to the top of the stack.
     *
     * @param value - A resource to be disposed.
     * @param onDispose - A callback invoked to dispose the provided value.
     * Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt<T>(value: T, onDispose: (value: T) => Promise<void>): T;
    /**
     * Add a disposal callback to the top of the stack to be invoked when stack is disposed.
     * @param onDispose - A callback to invoke when this object is disposed.
     */
    defer(onDispose: () => Promise<void>): void;
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     * @returns The new `AsyncDisposableStack`.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move(): AsyncDisposableStackPolyfill;
    /**
     * Disposes each resource in the stack in last-in-first-out (LIFO) manner.
     */
    [asyncDisposeSymbol](): Promise<void>;
    readonly [Symbol.toStringTag] = "AsyncDisposableStack";
}
/**
 * @internal
 */
export declare const AsyncDisposableStack: typeof AsyncDisposableStackPolyfill;
/**
 * @internal
 * Represents an error that occurs when multiple errors are thrown during
 * the disposal of resources. This class encapsulates the primary error and
 * any suppressed errors that occurred subsequently.
 */
declare class SuppressedErrorPolyfill extends Error {
    #private;
    constructor(error: unknown, suppressed: unknown, message?: string);
    /**
     * The primary error that occurred during disposal.
     */
    get error(): unknown;
    /**
     * The suppressed error i.e. the error that was suppressed
     * because it occurred later in the flow after the original error.
     */
    get suppressed(): unknown;
}
/**
 * @internal
 */
export declare const SuppressedError: typeof SuppressedErrorPolyfill;
export {};
//# sourceMappingURL=disposable.d.ts.map