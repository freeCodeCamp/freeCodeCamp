/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { PoolExitResult, WorkerInterface, WorkerOptions, WorkerPoolOptions } from '../types';
export default class BaseWorkerPool {
    private readonly _stderr;
    private readonly _stdout;
    protected readonly _options: WorkerPoolOptions;
    private readonly _workers;
    constructor(workerPath: string, options: WorkerPoolOptions);
    getStderr(): NodeJS.ReadableStream;
    getStdout(): NodeJS.ReadableStream;
    getWorkers(): Array<WorkerInterface>;
    getWorkerById(workerId: number): WorkerInterface;
    createWorker(_workerOptions: WorkerOptions): WorkerInterface;
    end(): Promise<PoolExitResult>;
}
