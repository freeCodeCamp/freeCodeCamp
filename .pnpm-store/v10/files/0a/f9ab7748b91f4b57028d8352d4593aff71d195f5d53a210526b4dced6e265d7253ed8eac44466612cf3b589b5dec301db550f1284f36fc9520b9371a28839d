/// <reference types="node" />
import { EventEmitter } from 'events';
declare function once<T>(emitter: EventEmitter, name: string): once.CancelablePromise<T>;
declare namespace once {
    interface CancelFunction {
        (): void;
    }
    interface CancelablePromise<T> extends Promise<T> {
        cancel: CancelFunction;
    }
    type CancellablePromise<T> = CancelablePromise<T>;
    function spread<T extends any[]>(emitter: EventEmitter, name: string): once.CancelablePromise<T>;
}
export = once;
