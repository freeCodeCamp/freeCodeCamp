import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { OperatorFunction } from '../types';
export declare function groupBy<T, K>(keySelector: (value: T) => K): OperatorFunction<T, GroupedObservable<K, T>>;
export declare function groupBy<T, K>(keySelector: (value: T) => K, elementSelector: void, durationSelector: (grouped: GroupedObservable<K, T>) => Observable<any>): OperatorFunction<T, GroupedObservable<K, T>>;
export declare function groupBy<T, K, R>(keySelector: (value: T) => K, elementSelector?: (value: T) => R, durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>): OperatorFunction<T, GroupedObservable<K, R>>;
export declare function groupBy<T, K, R>(keySelector: (value: T) => K, elementSelector?: (value: T) => R, durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>, subjectSelector?: () => Subject<R>): OperatorFunction<T, GroupedObservable<K, R>>;
export interface RefCountSubscription {
    count: number;
    unsubscribe: () => void;
    closed: boolean;
    attemptedToUnsubscribe: boolean;
}
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
export declare class GroupedObservable<K, T> extends Observable<T> {
    key: K;
    private groupSubject;
    private refCountSubscription?;
    /** @deprecated Do not construct this type. Internal use only */
    constructor(key: K, groupSubject: Subject<T>, refCountSubscription?: RefCountSubscription);
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<T>): Subscription;
}
