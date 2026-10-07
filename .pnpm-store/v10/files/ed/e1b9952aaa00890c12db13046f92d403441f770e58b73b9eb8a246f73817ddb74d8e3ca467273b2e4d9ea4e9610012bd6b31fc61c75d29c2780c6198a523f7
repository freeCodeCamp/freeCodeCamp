/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { ChildMessage, OnCustomMessage, OnEnd, OnStart, WorkerInterface, WorkerOptions } from '../types';
/**
 * This class wraps the child process and provides a nice interface to
 * communicate with. It takes care of:
 *
 *  - Re-spawning the process if it dies.
 *  - Queues calls while the worker is busy.
 *  - Re-sends the requests if the worker blew up.
 *
 * The reason for queueing them here (since childProcess.send also has an
 * internal queue) is because the worker could be doing asynchronous work, and
 * this would lead to the child process to read its receiving buffer and start a
 * second call. By queueing calls here, we don't send the next call to the
 * children until we receive the result of the previous one.
 *
 * As soon as a request starts to be processed by a worker, its "processed"
 * field is changed to "true", so that other workers which might encounter the
 * same call skip it.
 */
export default class ChildProcessWorker implements WorkerInterface {
    private _child;
    private _options;
    private _request;
    private _retries;
    private _onProcessEnd;
    private _onCustomMessage;
    private _fakeStream;
    private _stdout;
    private _stderr;
    private _exitPromise;
    private _resolveExitPromise;
    constructor(options: WorkerOptions);
    initialize(): void;
    private _shutdown;
    private _onMessage;
    private _onExit;
    send(request: ChildMessage, onProcessStart: OnStart, onProcessEnd: OnEnd, onCustomMessage: OnCustomMessage): void;
    waitForExit(): Promise<void>;
    forceExit(): void;
    getWorkerId(): number;
    getStdout(): NodeJS.ReadableStream | null;
    getStderr(): NodeJS.ReadableStream | null;
    private _getFakeStream;
}
