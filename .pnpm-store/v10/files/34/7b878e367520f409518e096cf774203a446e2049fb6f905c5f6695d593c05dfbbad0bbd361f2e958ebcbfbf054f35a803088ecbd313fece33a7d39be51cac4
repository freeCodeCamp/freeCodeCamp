/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FarmOptions, PromiseWithCustomMessage, TaskQueue } from './types';
export default class Farm {
    private _numOfWorkers;
    private _callback;
    private readonly _computeWorkerKey;
    private readonly _workerSchedulingPolicy;
    private readonly _cacheKeys;
    private readonly _locks;
    private _offset;
    private readonly _taskQueue;
    constructor(_numOfWorkers: number, _callback: Function, options?: {
        computeWorkerKey?: FarmOptions['computeWorkerKey'];
        workerSchedulingPolicy?: FarmOptions['workerSchedulingPolicy'];
        taskQueue?: TaskQueue;
    });
    doWork(method: string, ...args: Array<unknown>): PromiseWithCustomMessage<unknown>;
    private _process;
    private _push;
    private _getNextWorkerOffset;
    private _lock;
    private _unlock;
    private _isLocked;
}
