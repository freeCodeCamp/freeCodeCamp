import { SchedulerLike, SchedulerAction } from '../types';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Observable } from '../Observable';
export interface DispatchArg<T> {
    source: Observable<T>;
    subscriber: Subscriber<T>;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class SubscribeOnObservable<T> extends Observable<T> {
    source: Observable<T>;
    private delayTime;
    private scheduler;
    /** @nocollapse */
    static create<T>(source: Observable<T>, delay?: number, scheduler?: SchedulerLike): Observable<T>;
    /** @nocollapse */
    static dispatch<T>(this: SchedulerAction<T>, arg: DispatchArg<T>): Subscription;
    constructor(source: Observable<T>, delayTime?: number, scheduler?: SchedulerLike);
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<T>): Subscription;
}
