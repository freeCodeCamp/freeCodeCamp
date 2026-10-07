/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { ChildMessage, OnCustomMessage, OnEnd, OnStart, WorkerInterface, WorkerOptions } from '../types';
export default class ExperimentalWorker implements WorkerInterface {
    private _worker;
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
    private _forceExited;
    constructor(options: WorkerOptions);
    initialize(): void;
    private _shutdown;
    private _onMessage;
    private _onExit;
    waitForExit(): Promise<void>;
    forceExit(): void;
    send(request: ChildMessage, onProcessStart: OnStart, onProcessEnd: OnEnd | null, onCustomMessage: OnCustomMessage): void;
    getWorkerId(): number;
    getStdout(): NodeJS.ReadableStream | null;
    getStderr(): NodeJS.ReadableStream | null;
    private _getFakeStream;
}
