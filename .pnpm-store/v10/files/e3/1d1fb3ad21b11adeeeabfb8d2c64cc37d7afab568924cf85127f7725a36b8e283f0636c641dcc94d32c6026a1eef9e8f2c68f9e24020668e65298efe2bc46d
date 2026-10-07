import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';
import { SimpleOuterSubscriber } from '../innerSubscribe';
export declare function mergeMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, concurrent?: number): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector no longer supported, use inner map instead */
export declare function mergeMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: undefined, concurrent?: number): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector no longer supported, use inner map instead */
export declare function mergeMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R, concurrent?: number): OperatorFunction<T, R>;
export declare class MergeMapOperator<T, R> implements Operator<T, R> {
    private project;
    private concurrent;
    constructor(project: (value: T, index: number) => ObservableInput<R>, concurrent?: number);
    call(observer: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class MergeMapSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
    private project;
    private concurrent;
    private hasCompleted;
    private buffer;
    private active;
    protected index: number;
    constructor(destination: Subscriber<R>, project: (value: T, index: number) => ObservableInput<R>, concurrent?: number);
    protected _next(value: T): void;
    protected _tryNext(value: T): void;
    private _innerSub;
    protected _complete(): void;
    notifyNext(innerValue: R): void;
    notifyComplete(): void;
}
/**
 * @deprecated renamed. Use {@link mergeMap}
 */
export declare const flatMap: typeof mergeMap;
