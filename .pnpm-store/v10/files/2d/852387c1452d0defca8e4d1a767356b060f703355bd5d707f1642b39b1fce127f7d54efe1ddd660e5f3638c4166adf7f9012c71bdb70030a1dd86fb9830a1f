/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { TimeoutError } from '../common/Errors.js';
/**
 * @internal
 */
export interface DeferredOptions {
    message: string;
    timeout: number;
}
/**
 * Creates and returns a deferred object along with the resolve/reject functions.
 *
 * If the deferred has not been resolved/rejected within the `timeout` period,
 * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
 * it is ignored.
 *
 * @internal
 */
export declare class Deferred<T, V extends Error = Error> {
    #private;
    static create<R, X extends Error = Error>(opts?: DeferredOptions): Deferred<R, X>;
    static race<R>(awaitables: Array<Promise<R> | Deferred<R>>): Promise<R>;
    constructor(opts?: DeferredOptions);
    resolve(value: T): void;
    reject(error: V | TimeoutError): void;
    resolved(): boolean;
    finished(): boolean;
    value(): T | V | TimeoutError | undefined;
    valueOrThrow(): Promise<T>;
}
//# sourceMappingURL=Deferred.d.ts.map