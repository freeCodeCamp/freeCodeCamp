/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import type { FarmOptions, PoolExitResult, PromiseWithCustomMessage, TaskQueue } from './types';
export { default as PriorityQueue } from './PriorityQueue';
export { default as FifoQueue } from './FifoQueue';
export { default as messageParent } from './workers/messageParent';
/**
 * The Jest farm (publicly called "Worker") is a class that allows you to queue
 * methods across multiple child processes, in order to parallelize work. This
 * is done by providing an absolute path to a module that will be loaded on each
 * of the child processes, and bridged to the main process.
 *
 * Bridged methods are specified by using the "exposedMethods" property of the
 * "options" object. This is an array of strings, where each of them corresponds
 * to the exported name in the loaded module.
 *
 * You can also control the amount of workers by using the "numWorkers" property
 * of the "options" object, and the settings passed to fork the process through
 * the "forkOptions" property. The amount of workers defaults to the amount of
 * CPUS minus one.
 *
 * Queueing calls can be done in two ways:
 *   - Standard method: calls will be redirected to the first available worker,
 *     so they will get executed as soon as they can.
 *
 *   - Sticky method: if a "computeWorkerKey" method is provided within the
 *     config, the resulting string of this method will be used as a key.
 *     Every time this key is returned, it is guaranteed that your job will be
 *     processed by the same worker. This is specially useful if your workers
 *     are caching results.
 */
export declare class Worker {
    private _ending;
    private _farm;
    private _options;
    private _workerPool;
    constructor(workerPath: string, options?: FarmOptions);
    private _bindExposedWorkerMethods;
    private _callFunctionWithArgs;
    getStderr(): NodeJS.ReadableStream;
    getStdout(): NodeJS.ReadableStream;
    end(): Promise<PoolExitResult>;
}
export type { PromiseWithCustomMessage, TaskQueue };
