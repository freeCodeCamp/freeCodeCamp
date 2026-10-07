import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { ObservableInput, OperatorFunction } from '../types';
import { SimpleOuterSubscriber } from '../innerSubscribe';
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * ## Example
 * Count the number of click events
 * ```ts
 * import { fromEvent, of } from 'rxjs';
 * import { mapTo, mergeScan } from 'rxjs/operators';
 *
 * const click$ = fromEvent(document, 'click');
 * const one$ = click$.pipe(mapTo(1));
 * const seed = 0;
 * const count$ = one$.pipe(
 *   mergeScan((acc, one) => of(acc + one), seed),
 * );
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * // 1
 * // 2
 * // 3
 * // 4
 * // ...and so on for each click
 * ```
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
export declare function mergeScan<T, R>(accumulator: (acc: R, value: T, index: number) => ObservableInput<R>, seed: R, concurrent?: number): OperatorFunction<T, R>;
export declare class MergeScanOperator<T, R> implements Operator<T, R> {
    private accumulator;
    private seed;
    private concurrent;
    constructor(accumulator: (acc: R, value: T, index: number) => ObservableInput<R>, seed: R, concurrent: number);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class MergeScanSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
    private accumulator;
    private acc;
    private concurrent;
    private hasValue;
    private hasCompleted;
    private buffer;
    private active;
    protected index: number;
    constructor(destination: Subscriber<R>, accumulator: (acc: R, value: T, index: number) => ObservableInput<R>, acc: R, concurrent: number);
    protected _next(value: any): void;
    private _innerSub;
    protected _complete(): void;
    notifyNext(innerValue: R): void;
    notifyComplete(): void;
}
