/// <reference types="node" />
import { MessagePort } from 'node:worker_threads';
export type AnyFn<R = any, T extends any[] = any[]> = (...args: T) => R;
export type AnyPromise<T = any> = Promise<T>;
export type AnyAsyncFn<T = any> = AnyFn<Promise<T>>;
export type Syncify<T extends AnyAsyncFn> = T extends (...args: infer Args) => Promise<infer R> ? (...args: Args) => R : never;
export type PromiseType<T extends AnyPromise> = T extends Promise<infer R> ? R : never;
export type ValueOf<T> = T[keyof T];
export interface MainToWorkerMessage<T extends unknown[]> {
    id: number;
    args: T;
}
export interface MainToWorkerCommandMessage {
    id: number;
    cmd: string;
}
export interface WorkerData {
    sharedBuffer: SharedArrayBuffer;
    workerPort: MessagePort;
    pnpLoaderPath: string | undefined;
}
export interface DataMessage<T> {
    result?: T;
    error?: unknown;
    properties?: unknown;
}
export interface WorkerToMainMessage<T = unknown> extends DataMessage<T> {
    id: number;
}
export interface GlobalShim {
    moduleName: string;
    globalName?: string;
    named?: string | null;
    conditional?: boolean;
}
