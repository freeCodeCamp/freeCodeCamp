import { Subject } from './Subject';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';
/**
 * A variant of Subject that only emits a value when it completes. It will emit
 * its latest value to all its observers on completion.
 *
 * @class AsyncSubject<T>
 */
export declare class AsyncSubject<T> extends Subject<T> {
    private value;
    private hasNext;
    private hasCompleted;
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<any>): Subscription;
    next(value: T): void;
    error(error: any): void;
    complete(): void;
}
