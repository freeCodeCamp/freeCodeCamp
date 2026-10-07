/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

/// <reference lib="es2015.symbol" />
/// <reference lib="es2015.iterable" />
/// <reference lib="es2018.asynciterable" />

interface SymbolConstructor {
    /**
     * A method that is used to release resources held by an object. Called by the semantics of the `using` statement.
     */
    readonly dispose: unique symbol;

    /**
     * A method that is used to asynchronously release resources held by an object. Called by the semantics of the `await using` statement.
     */
    readonly asyncDispose: unique symbol;
}

interface Disposable {
    [Symbol.dispose](): void;
}

interface AsyncDisposable {
    [Symbol.asyncDispose](): PromiseLike<void>;
}

interface SuppressedError extends Error {
    error: any;
    suppressed: any;
}

interface SuppressedErrorConstructor {
    new (error: any, suppressed: any, message?: string): SuppressedError;
    (error: any, suppressed: any, message?: string): SuppressedError;
    readonly prototype: SuppressedError;
}
declare var SuppressedError: SuppressedErrorConstructor;

interface DisposableStack {
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    readonly disposed: boolean;
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    dispose(): void;
    /**
     * Adds a disposable resource to the stack, returning the resource.
     * @param value The resource to add. `null` and `undefined` will not be added, but will be returned.
     * @returns The provided {@link value}.
     */
    use<T extends Disposable | null | undefined>(value: T): T;
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     * @param value The value to add.
     * @param onDispose The callback to use in place of a `[Symbol.dispose]()` method. Will be invoked with `value`
     * as the first parameter.
     * @returns The provided {@link value}.
     */
    adopt<T>(value: T, onDispose: (value: T) => void): T;
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(onDispose: () => void): void;
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and marks this stack as disposed.
     * @example
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
     *     // all operations succeeded, move resources out of `stack` so that they aren't disposed
     *     // when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [Symbol.dispose]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move(): DisposableStack;
    [Symbol.dispose](): void;
    readonly [Symbol.toStringTag]: string;
}

interface DisposableStackConstructor {
    new (): DisposableStack;
    readonly prototype: DisposableStack;
}
declare var DisposableStack: DisposableStackConstructor;

interface AsyncDisposableStack {
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    readonly disposed: boolean;
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    disposeAsync(): Promise<void>;
    /**
     * Adds a disposable resource to the stack, returning the resource.
     * @param value The resource to add. `null` and `undefined` will not be added, but will be returned.
     * @returns The provided {@link value}.
     */
    use<T extends AsyncDisposable | Disposable | null | undefined>(value: T): T;
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     * @param value The value to add.
     * @param onDisposeAsync The callback to use in place of a `[Symbol.asyncDispose]()` method. Will be invoked with `value`
     * as the first parameter.
     * @returns The provided {@link value}.
     */
    adopt<T>(value: T, onDisposeAsync: (value: T) => PromiseLike<void> | void): T;
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(onDisposeAsync: () => PromiseLike<void> | void): void;
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and marks this stack as disposed.
     * @example
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
     *     // all operations succeeded, move resources out of `stack` so that they aren't disposed
     *     // when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [Symbol.dispose]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move(): AsyncDisposableStack;
    [Symbol.asyncDispose](): Promise<void>;
    readonly [Symbol.toStringTag]: string;
}

interface AsyncDisposableStackConstructor {
    new (): AsyncDisposableStack;
    readonly prototype: AsyncDisposableStack;
}
declare var AsyncDisposableStack: AsyncDisposableStackConstructor;

interface IteratorObject<T, TReturn, TNext> extends Disposable {
}

interface AsyncIteratorObject<T, TReturn, TNext> extends AsyncDisposable {
}
