/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { TimeoutSettings } from '../common/TimeoutSettings.js';
import type { EvaluateFunc, HandleFor } from '../common/types.js';
import { TaskManager } from '../common/WaitTask.js';
import { disposeSymbol } from '../util/disposable.js';
import type { ElementHandle } from './ElementHandle.js';
import type { Environment } from './Environment.js';
import type { Extension } from './Extension.js';
import type { JSHandle } from './JSHandle.js';
/**
 * @public
 */
export declare abstract class Realm {
    #private;
    /** @internal */
    protected readonly timeoutSettings: TimeoutSettings;
    /** @internal */
    readonly taskManager: TaskManager;
    /** @internal */
    constructor(timeoutSettings: TimeoutSettings);
    /** @internal */
    abstract get environment(): Environment;
    /**
     * Returns the origin that created the Realm.
     * For example, if the realm was created by an extension content script,
     * this will return the origin of the extension
     * (e.g., `chrome-extension://<extension-id>`).
     *
     * @experimental
     * @example
     * `chrome-extension://<chrome-extension-id>`
     */
    abstract get origin(): string | undefined;
    /**
     * Returns the {@link Extension} that created this realm, if applicable.
     * This is typically populated when the realm was created by an extension
     * content script injected into a page.
     *
     * @returns A promise that resolves to the {@link Extension}
     * or `null` if not created by an extension.
     * @experimental
     */
    abstract extension(): Promise<Extension | null>;
    /** @internal */
    abstract adoptHandle<T extends JSHandle<Node>>(handle: T): Promise<T>;
    /** @internal */
    abstract transferHandle<T extends JSHandle<Node>>(handle: T): Promise<T>;
    /**
     * Evaluates a function in the realm's context and returns a
     * {@link JSHandle} to the result.
     *
     * If the function passed to `realm.evaluateHandle` returns a Promise,
     * the method will wait for the promise to resolve and return its value.
     *
     * {@link JSHandle} instances can be passed as arguments to the function.
     *
     * @example
     *
     * ```ts
     * const aHandle = await realm.evaluateHandle(() => document.body);
     * const resultHandle = await realm.evaluateHandle(
     *   body => body.innerHTML,
     *   aHandle,
     * );
     * ```
     *
     * @param pageFunction - A function to be evaluated in the realm.
     * @param args - Arguments to be passed to the `pageFunction`.
     * @returns A promise that resolves to a {@link JSHandle} containing
     * the result.
     * @public
     */
    abstract evaluateHandle<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
    /**
     * Evaluates a function in the realm's context and returns the
     * resulting value.
     *
     * If the function passed to `realm.evaluate` returns a Promise,
     * the method will wait for the promise to resolve and return its value.
     *
     * {@link JSHandle} instances can be passed as arguments to the function.
     *
     * @example
     *
     * ```ts
     * const result = await realm.evaluate(() => {
     *   return Promise.resolve(8 * 7);
     * });
     * console.log(result); // prints "56"
     * ```
     *
     * @param pageFunction - A function to be evaluated in the realm.
     * @param args - Arguments to be passed to the `pageFunction`.
     * @returns A promise that resolves to the return value of the function.
     * @public
     */
    abstract evaluate<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
    /**
     * Waits for a function to return a truthy value when evaluated in
     * the realm's context.
     *
     * Arguments can be passed from Node.js to `pageFunction`.
     *
     * @example
     *
     * ```ts
     * const selector = '.foo';
     * await realm.waitForFunction(
     *   selector => !!document.querySelector(selector),
     *   {},
     *   selector,
     * );
     * ```
     *
     * @param pageFunction - A function to evaluate in the realm.
     * @param options - Options for polling and timeouts.
     * @param args - Arguments to pass to the function.
     * @returns A promise that resolves when the function returns a truthy
     * value.
     * @public
     */
    waitForFunction<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, options?: {
        polling?: 'raf' | 'mutation' | number;
        timeout?: number;
        root?: ElementHandle<Node>;
        signal?: AbortSignal;
    }, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
    /** @internal */
    abstract adoptBackendNode(backendNodeId?: number): Promise<JSHandle<Node>>;
    /** @internal */
    get disposed(): boolean;
    /** @internal */
    dispose(): void;
    /** @internal */
    [disposeSymbol](): void;
}
//# sourceMappingURL=Realm.d.ts.map