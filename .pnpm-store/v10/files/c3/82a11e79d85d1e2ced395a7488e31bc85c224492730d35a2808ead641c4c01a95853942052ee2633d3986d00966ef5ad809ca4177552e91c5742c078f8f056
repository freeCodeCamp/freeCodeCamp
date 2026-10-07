/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ElementHandle } from '../api/ElementHandle.js';
import type { Realm } from '../api/Realm.js';
import type { HandleFor } from './types.js';
/**
 * @internal
 */
export interface WaitTaskOptions {
    polling: 'raf' | 'mutation' | number;
    root?: ElementHandle<Node>;
    timeout: number;
    signal?: AbortSignal;
}
/**
 * @internal
 */
export declare class WaitTask<T = unknown> {
    #private;
    constructor(world: Realm, options: WaitTaskOptions, fn: ((...args: unknown[]) => Promise<T>) | string, ...args: unknown[]);
    get result(): Promise<HandleFor<T>>;
    rerun(): Promise<void>;
    terminate(error?: Error): Promise<void>;
    /**
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */
    getBadError(error: unknown): Error | undefined;
}
/**
 * @internal
 */
export declare class TaskManager {
    #private;
    add(task: WaitTask<any>): void;
    delete(task: WaitTask<any>): void;
    terminateAll(error?: Error): void;
    rerunAll(): Promise<void>;
}
//# sourceMappingURL=WaitTask.d.ts.map