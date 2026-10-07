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

(Symbol as any).dispose ??= Symbol('dispose');
(Symbol as any).asyncDispose ??= Symbol('asyncDispose');

/**
 * @internal
 */
export const disposeSymbol: typeof Symbol.dispose = Symbol.dispose;

/**
 * @internal
 */
export const asyncDisposeSymbol: typeof Symbol.asyncDispose =
  Symbol.asyncDispose;

/**
 * @internal
 */
export class DisposableStackPolyfill {
  #disposed = false;
  #stack: Disposable[] = [];

  /**
   * Returns a value indicating whether the stack has been disposed.
   */
  get disposed(): boolean {
    return this.#disposed;
  }

  /**
   * Alias for `[Symbol.dispose]()`.
   */
  dispose(): void {
    this[disposeSymbol]();
  }

  /**
   * Adds a disposable resource to the top of stack, returning the resource.
   * Has no effect if provided `null` or `undefined`.
   *
   * @param value - A `Disposable` object, `null`, or `undefined`.
   * `null` and `undefined` will not be added, but will be returned.
   * @returns The provided `value`.
   */
  use<T extends Disposable | null | undefined>(value: T): T {
    if (value && typeof value[disposeSymbol] === 'function') {
      this.#stack.push(value);
    }
    return value;
  }

  /**
   * Adds a non-disposable resource and a disposal callback to the top of the stack.
   *
   * @param value - A resource to be disposed.
   * @param onDispose - A callback invoked to dispose the provided value.
   * Will be invoked with `value` as the first parameter.
   * @returns The provided `value`.
   */
  adopt<T>(value: T, onDispose: (value: T) => void): T {
    this.#stack.push({
      [disposeSymbol]() {
        onDispose(value);
      },
    });
    return value;
  }

  /**
   * Add a disposal callback to the top of the stack to be invoked when stack is disposed.
   * @param onDispose - A callback to invoke when this object is disposed.
   */
  defer(onDispose: () => void): void {
    this.#stack.push({
      [disposeSymbol]() {
        onDispose();
      },
    });
  }

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
  move(): DisposableStackPolyfill {
    if (this.#disposed) {
      throw new ReferenceError('A disposed stack can not use anything new');
    }
    const stack = new DisposableStackPolyfill();
    stack.#stack = this.#stack;
    this.#stack = [];
    this.#disposed = true;
    return stack;
  }

  /**
   * Disposes each resource in the stack in last-in-first-out (LIFO) manner.
   */
  [disposeSymbol](): void {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    const errors: unknown[] = [];
    for (const resource of this.#stack.reverse()) {
      try {
        resource[disposeSymbol]();
      } catch (e) {
        errors.push(e);
      }
    }
    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      let suppressed = null;
      for (const error of errors) {
        if (suppressed === null) {
          suppressed = error;
        } else {
          suppressed = new SuppressedErrorPolyfill(error, suppressed);
        }
      }
      throw suppressed;
    }
  }

  readonly [Symbol.toStringTag] = 'DisposableStack';
}

/**
 * @internal
 */
export const DisposableStack: typeof DisposableStackPolyfill =
  (globalThis.DisposableStack as any) ?? DisposableStackPolyfill;

/**
 * @internal
 */
export class AsyncDisposableStackPolyfill {
  #disposed = false;
  #stack: AsyncDisposable[] = [];

  /**
   * Returns a value indicating whether the stack has been disposed.
   */
  get disposed(): boolean {
    return this.#disposed;
  }

  /**
   * Alias for `[Symbol.asyncDispose]()`.
   */
  async disposeAsync(): Promise<void> {
    await this[asyncDisposeSymbol]();
  }

  /**
   * Adds a AsyncDisposable resource to the top of stack, returning the resource.
   * Has no effect if provided `null` or `undefined`.
   *
   * @param value - A `AsyncDisposable` object, `null`, or `undefined`.
   * `null` and `undefined` will not be added, but will be returned.
   * @returns The provided `value`.
   */
  use<T extends AsyncDisposable | Disposable | null | undefined>(value: T): T {
    if (value) {
      const asyncDispose = (value as AsyncDisposable)[asyncDisposeSymbol];
      const dispose = (value as Disposable)[disposeSymbol];

      if (typeof asyncDispose === 'function') {
        this.#stack.push(value as AsyncDisposable);
      } else if (typeof dispose === 'function') {
        this.#stack.push({
          [asyncDisposeSymbol]: async () => {
            (value as Disposable)[disposeSymbol]();
          },
        });
      }
    }

    return value;
  }

  /**
   * Adds a non-disposable resource and a disposal callback to the top of the stack.
   *
   * @param value - A resource to be disposed.
   * @param onDispose - A callback invoked to dispose the provided value.
   * Will be invoked with `value` as the first parameter.
   * @returns The provided `value`.
   */
  adopt<T>(value: T, onDispose: (value: T) => Promise<void>): T {
    this.#stack.push({
      [asyncDisposeSymbol]() {
        return onDispose(value);
      },
    });
    return value;
  }

  /**
   * Add a disposal callback to the top of the stack to be invoked when stack is disposed.
   * @param onDispose - A callback to invoke when this object is disposed.
   */
  defer(onDispose: () => Promise<void>): void {
    this.#stack.push({
      [asyncDisposeSymbol]() {
        return onDispose();
      },
    });
  }

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
  move(): AsyncDisposableStackPolyfill {
    if (this.#disposed) {
      throw new ReferenceError('A disposed stack can not use anything new');
    }
    const stack = new AsyncDisposableStackPolyfill();
    stack.#stack = this.#stack;
    this.#stack = [];
    this.#disposed = true;
    return stack;
  }

  /**
   * Disposes each resource in the stack in last-in-first-out (LIFO) manner.
   */
  async [asyncDisposeSymbol](): Promise<void> {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    const errors: unknown[] = [];
    for (const resource of this.#stack.reverse()) {
      try {
        await resource[asyncDisposeSymbol]();
      } catch (e) {
        errors.push(e);
      }
    }
    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      let suppressed = null;
      for (const error of errors) {
        if (suppressed === null) {
          suppressed = error;
        } else {
          suppressed = new SuppressedErrorPolyfill(error, suppressed);
        }
      }
      throw suppressed;
    }
  }

  readonly [Symbol.toStringTag] = 'AsyncDisposableStack';
}

/**
 * @internal
 */
export const AsyncDisposableStack: typeof AsyncDisposableStackPolyfill =
  (globalThis.AsyncDisposableStack as any) ?? AsyncDisposableStackPolyfill;

/**
 * @internal
 * Represents an error that occurs when multiple errors are thrown during
 * the disposal of resources. This class encapsulates the primary error and
 * any suppressed errors that occurred subsequently.
 */
class SuppressedErrorPolyfill extends Error {
  #error: unknown;
  #suppressed: unknown;

  constructor(
    error: unknown,
    suppressed: unknown,
    message = 'An error was suppressed during disposal',
  ) {
    super(message);
    this.name = 'SuppressedError';
    this.#error = error;
    this.#suppressed = suppressed;
  }

  /**
   * The primary error that occurred during disposal.
   */
  get error(): unknown {
    return this.#error;
  }

  /**
   * The suppressed error i.e. the error that was suppressed
   * because it occurred later in the flow after the original error.
   */
  get suppressed(): unknown {
    return this.#suppressed;
  }
}

/**
 * @internal
 */
export const SuppressedError: typeof SuppressedErrorPolyfill =
  (globalThis.SuppressedError as any) ?? SuppressedErrorPolyfill;
