/** @prettier */
import { Subscription } from './Subscription';
import { Subscriber } from './Subscriber';
interface SimpleOuterSubscriberLike<T> {
    /**
     * A handler for inner next notifications from the inner subscription
     * @param innerValue the value nexted by the inner producer
     */
    notifyNext(innerValue: T): void;
    /**
     * A handler for inner error notifications from the inner subscription
     * @param err the error from the inner producer
     */
    notifyError(err: any): void;
    /**
     * A handler for inner complete notifications from the inner subscription.
     */
    notifyComplete(): void;
}
export declare class SimpleInnerSubscriber<T> extends Subscriber<T> {
    private parent;
    constructor(parent: SimpleOuterSubscriberLike<any>);
    protected _next(value: T): void;
    protected _error(error: any): void;
    protected _complete(): void;
}
export declare class ComplexInnerSubscriber<T, R> extends Subscriber<R> {
    private parent;
    outerValue: T;
    outerIndex: number;
    constructor(parent: ComplexOuterSubscriber<T, R>, outerValue: T, outerIndex: number);
    protected _next(value: R): void;
    protected _error(error: any): void;
    protected _complete(): void;
}
export declare class SimpleOuterSubscriber<T, R> extends Subscriber<T> implements SimpleOuterSubscriberLike<R> {
    notifyNext(innerValue: R): void;
    notifyError(err: any): void;
    notifyComplete(): void;
}
/**
 * DO NOT USE (formerly "OuterSubscriber")
 * TODO: We want to refactor this and remove it. It is retaining values it shouldn't for long
 * periods of time.
 */
export declare class ComplexOuterSubscriber<T, R> extends Subscriber<T> {
    /**
     * @param _outerValue Used by: bufferToggle, delayWhen, windowToggle
     * @param innerValue Used by: subclass default, combineLatest, race, bufferToggle, windowToggle, withLatestFrom
     * @param _outerIndex Used by: combineLatest, race, withLatestFrom
     * @param _innerSub Used by: delayWhen
     */
    notifyNext(_outerValue: T, innerValue: R, _outerIndex: number, _innerSub: ComplexInnerSubscriber<T, R>): void;
    notifyError(error: any): void;
    /**
     * @param _innerSub Used by: race, bufferToggle, delayWhen, windowToggle, windowWhen
     */
    notifyComplete(_innerSub: ComplexInnerSubscriber<T, R>): void;
}
export declare function innerSubscribe(result: any, innerSubscriber: Subscriber<any>): Subscription | undefined;
export {};
