/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export interface Poller<T> {
    start(): Promise<void>;
    stop(): Promise<void>;
    result(): Promise<T>;
}
/**
 * @internal
 */
export declare class MutationPoller<T> implements Poller<T> {
    #private;
    constructor(fn: () => Promise<T>, root: Node);
    start(): Promise<void>;
    stop(): Promise<void>;
    result(): Promise<T>;
}
/**
 * @internal
 */
export declare class RAFPoller<T> implements Poller<T> {
    #private;
    constructor(fn: () => Promise<T>);
    start(): Promise<void>;
    stop(): Promise<void>;
    result(): Promise<T>;
}
/**
 * @internal
 */
export declare class IntervalPoller<T> implements Poller<T> {
    #private;
    constructor(fn: () => Promise<T>, ms: number);
    start(): Promise<void>;
    stop(): Promise<void>;
    result(): Promise<T>;
}
//# sourceMappingURL=Poller.d.ts.map