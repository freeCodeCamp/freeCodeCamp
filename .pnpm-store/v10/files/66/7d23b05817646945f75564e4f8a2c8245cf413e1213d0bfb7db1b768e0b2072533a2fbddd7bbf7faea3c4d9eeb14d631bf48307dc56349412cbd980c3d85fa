/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import type { ForkOptions } from 'child_process';
import type { EventEmitter } from 'events';
export interface ResourceLimits {
    maxYoungGenerationSizeMb?: number;
    maxOldGenerationSizeMb?: number;
    codeRangeSizeMb?: number;
}
export declare const CHILD_MESSAGE_INITIALIZE: 0;
export declare const CHILD_MESSAGE_CALL: 1;
export declare const CHILD_MESSAGE_END: 2;
export declare const PARENT_MESSAGE_OK: 0;
export declare const PARENT_MESSAGE_CLIENT_ERROR: 1;
export declare const PARENT_MESSAGE_SETUP_ERROR: 2;
export declare const PARENT_MESSAGE_CUSTOM: 3;
export declare type PARENT_MESSAGE_ERROR = typeof PARENT_MESSAGE_CLIENT_ERROR | typeof PARENT_MESSAGE_SETUP_ERROR;
export interface WorkerPoolInterface {
    getStderr(): NodeJS.ReadableStream;
    getStdout(): NodeJS.ReadableStream;
    getWorkers(): Array<WorkerInterface>;
    createWorker(options: WorkerOptions): WorkerInterface;
    send(workerId: number, request: ChildMessage, onStart: OnStart, onEnd: OnEnd, onCustomMessage: OnCustomMessage): void;
    end(): Promise<PoolExitResult>;
}
export interface WorkerInterface {
    send(request: ChildMessage, onProcessStart: OnStart, onProcessEnd: OnEnd, onCustomMessage: OnCustomMessage): void;
    waitForExit(): Promise<void>;
    forceExit(): void;
    getWorkerId(): number;
    getStderr(): NodeJS.ReadableStream | null;
    getStdout(): NodeJS.ReadableStream | null;
}
export declare type PoolExitResult = {
    forceExited: boolean;
};
export interface PromiseWithCustomMessage<T> extends Promise<T> {
    UNSTABLE_onCustomMessage?: (listener: OnCustomMessage) => () => void;
}
export type { ForkOptions };
export declare type FarmOptions = {
    computeWorkerKey?: (method: string, ...args: Array<unknown>) => string | null;
    exposedMethods?: ReadonlyArray<string>;
    forkOptions?: ForkOptions;
    resourceLimits?: ResourceLimits;
    setupArgs?: Array<unknown>;
    maxRetries?: number;
    numWorkers?: number;
    WorkerPool?: (workerPath: string, options?: WorkerPoolOptions) => WorkerPoolInterface;
    enableWorkerThreads?: boolean;
};
export declare type WorkerPoolOptions = {
    setupArgs: Array<unknown>;
    forkOptions: ForkOptions;
    resourceLimits: ResourceLimits;
    maxRetries: number;
    numWorkers: number;
    enableWorkerThreads: boolean;
};
export declare type WorkerOptions = {
    forkOptions: ForkOptions;
    resourceLimits: ResourceLimits;
    setupArgs: Array<unknown>;
    maxRetries: number;
    workerId: number;
    workerPath: string;
};
export declare type MessagePort = typeof EventEmitter & {
    postMessage(message: unknown): void;
};
export declare type MessageChannel = {
    port1: MessagePort;
    port2: MessagePort;
};
export declare type ChildMessageInitialize = [
    typeof CHILD_MESSAGE_INITIALIZE,
    boolean,
    string,
    // file
    Array<unknown> | undefined,
    // setupArgs
    MessagePort | undefined
];
export declare type ChildMessageCall = [
    typeof CHILD_MESSAGE_CALL,
    boolean,
    string,
    Array<unknown>
];
export declare type ChildMessageEnd = [
    typeof CHILD_MESSAGE_END,
    boolean
];
export declare type ChildMessage = ChildMessageInitialize | ChildMessageCall | ChildMessageEnd;
export declare type ParentMessageCustom = [
    typeof PARENT_MESSAGE_CUSTOM,
    unknown
];
export declare type ParentMessageOk = [
    typeof PARENT_MESSAGE_OK,
    unknown
];
export declare type ParentMessageError = [
    PARENT_MESSAGE_ERROR,
    string,
    string,
    string,
    unknown
];
export declare type ParentMessage = ParentMessageOk | ParentMessageError | ParentMessageCustom;
export declare type OnStart = (worker: WorkerInterface) => void;
export declare type OnEnd = (err: Error | null, result: unknown) => void;
export declare type OnCustomMessage = (message: Array<unknown> | unknown) => void;
export declare type QueueChildMessage = {
    request: ChildMessage;
    onStart: OnStart;
    onEnd: OnEnd;
    onCustomMessage: OnCustomMessage;
};
export declare type QueueItem = {
    task: QueueChildMessage;
    next: QueueItem | null;
};
