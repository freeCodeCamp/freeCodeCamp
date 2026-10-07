/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { AwaitableIterable } from '../common/types.js';
/**
 * @internal
 */
export declare class AsyncIterableUtil {
    static map<T, U>(iterable: AwaitableIterable<T>, map: (item: T) => Promise<U>): AsyncIterable<U>;
    static flatMap<T, U>(iterable: AwaitableIterable<T>, map: (item: T) => AwaitableIterable<U>): AsyncIterable<U>;
    static collect<T>(iterable: AwaitableIterable<T>): Promise<T[]>;
    static first<T>(iterable: AwaitableIterable<T>): Promise<T | undefined>;
}
//# sourceMappingURL=AsyncIterableUtil.d.ts.map