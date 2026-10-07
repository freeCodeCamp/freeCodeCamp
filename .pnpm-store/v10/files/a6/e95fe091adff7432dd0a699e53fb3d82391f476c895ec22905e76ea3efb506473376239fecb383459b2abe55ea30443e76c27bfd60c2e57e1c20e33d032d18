import { Observer, PartialObserver } from './types';
import { Subscription } from './Subscription';
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
export declare class Subscriber<T> extends Subscription implements Observer<T> {
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     * @nocollapse
     */
    static create<T>(next?: (x?: T) => void, error?: (e?: any) => void, complete?: () => void): Subscriber<T>;
    /** @internal */ syncErrorValue: any;
    /** @internal */ syncErrorThrown: boolean;
    /** @internal */ syncErrorThrowable: boolean;
    protected isStopped: boolean;
    protected destination: PartialObserver<any> | Subscriber<any>;
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    constructor(destinationOrNext?: PartialObserver<any> | ((value: T) => void), error?: (e?: any) => void, complete?: () => void);
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    next(value?: T): void;
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached `Error`. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    error(err?: any): void;
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    complete(): void;
    unsubscribe(): void;
    protected _next(value: T): void;
    protected _error(err: any): void;
    protected _complete(): void;
    /** @deprecated This is an internal implementation detail, do not use. */
    _unsubscribeAndRecycle(): Subscriber<T>;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class SafeSubscriber<T> extends Subscriber<T> {
    private _parentSubscriber;
    private _context;
    constructor(_parentSubscriber: Subscriber<T>, observerOrNext?: PartialObserver<T> | ((value: T) => void), error?: (e?: any) => void, complete?: () => void);
    next(value?: T): void;
    error(err?: any): void;
    complete(): void;
    private __tryOrUnsub;
    private __tryOrSetError;
    /** @internal This is an internal implementation detail, do not use. */
    _unsubscribe(): void;
}
