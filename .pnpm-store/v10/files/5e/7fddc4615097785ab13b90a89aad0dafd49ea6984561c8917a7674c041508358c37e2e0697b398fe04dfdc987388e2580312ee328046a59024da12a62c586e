/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Awaitable } from '../common/types.js';
import type { BidiFrame } from './Frame.js';
/**
 * @internal
 */
export declare class ExposableFunction<Args extends unknown[], Ret> {
    #private;
    static from<Args extends unknown[], Ret>(frame: BidiFrame, name: string, apply: (...args: Args) => Awaitable<Ret>, isolate?: boolean): Promise<ExposableFunction<Args, Ret>>;
    readonly name: string;
    constructor(frame: BidiFrame, name: string, apply: (...args: Args) => Awaitable<Ret>, isolate?: boolean);
    [Symbol.dispose](): void;
    [Symbol.asyncDispose](): Promise<void>;
}
//# sourceMappingURL=ExposedFunction.d.ts.map