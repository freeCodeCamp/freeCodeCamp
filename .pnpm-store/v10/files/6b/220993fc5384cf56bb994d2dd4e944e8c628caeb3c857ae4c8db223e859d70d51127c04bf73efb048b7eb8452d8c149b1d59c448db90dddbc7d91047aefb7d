/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FarmOptions, PromiseWithCustomMessage } from './types';
export default class Farm {
    private _computeWorkerKey;
    private _cacheKeys;
    private _callback;
    private _last;
    private _locks;
    private _numOfWorkers;
    private _offset;
    private _queue;
    constructor(numOfWorkers: number, callback: Function, computeWorkerKey?: FarmOptions['computeWorkerKey']);
    doWork(method: string, ...args: Array<unknown>): PromiseWithCustomMessage<unknown>;
    private _getNextTask;
    private _process;
    private _enqueue;
    private _push;
    private _lock;
    private _unlock;
    private _isLocked;
}
