import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { MonoTypeOperatorFunction, OperatorFunction, ObservableInput, SchedulerLike } from '../types';
import { SimpleOuterSubscriber } from '../innerSubscribe';
export declare function expand<T, R>(project: (value: T, index: number) => ObservableInput<R>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, R>;
export declare function expand<T>(project: (value: T, index: number) => ObservableInput<T>, concurrent?: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
export declare class ExpandOperator<T, R> implements Operator<T, R> {
    private project;
    private concurrent;
    private scheduler?;
    constructor(project: (value: T, index: number) => ObservableInput<R>, concurrent: number, scheduler?: SchedulerLike);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class ExpandSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
    private project;
    private concurrent;
    private scheduler?;
    private index;
    private active;
    private hasCompleted;
    private buffer?;
    constructor(destination: Subscriber<R>, project: (value: T, index: number) => ObservableInput<R>, concurrent: number, scheduler?: SchedulerLike);
    private static dispatch;
    protected _next(value: any): void;
    private subscribeToProjection;
    protected _complete(): void;
    notifyNext(innerValue: R): void;
    notifyComplete(): void;
}
