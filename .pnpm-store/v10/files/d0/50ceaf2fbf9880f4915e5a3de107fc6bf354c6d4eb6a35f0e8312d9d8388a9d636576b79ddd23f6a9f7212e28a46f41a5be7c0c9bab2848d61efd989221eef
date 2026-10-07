import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { multicast } from './multicast';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { MonoTypeOperatorFunction, OperatorFunction, UnaryFunction, ObservableInput, ObservedValueOf } from '../types';

/* tslint:disable:max-line-length */
export function publish<T>(): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export function publish<T, O extends ObservableInput<any>>(selector: (shared: Observable<T>) => O): OperatorFunction<T, ObservedValueOf<O>>;
export function publish<T>(selector: MonoTypeOperatorFunction<T>): MonoTypeOperatorFunction<T>;
/* tslint:enable:max-line-length */

/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <span class="informal">Makes a cold Observable hot</span>
 *
 * ![](publish.png)
 *
 * ## Examples
 * Make source$ hot by applying publish operator, then merge each inner observable into a single one
 * and subscribe.
 * ```ts
 * import { of, zip, interval, merge } from "rxjs";
 * import { map, publish, tap } from "rxjs/operators";
 *
 * const source$ = zip(interval(2000), of(1, 2, 3, 4, 5, 6, 7, 8, 9)).pipe(
 *   map(values => values[1])
 * );
 *
 * source$
 *   .pipe(
 *     publish(multicasted$ =>
 *       merge(
 *         multicasted$.pipe(tap(x => console.log('Stream 1:', x))),
 *         multicasted$.pipe(tap(x => console.log('Stream 2:', x))),
 *         multicasted$.pipe(tap(x => console.log('Stream 3:', x))),
 *       )
 *     )
 *   )
 *   .subscribe();
 *
 * // Results every two seconds
 * // Stream 1: 1
 * // Stream 2: 1
 * // Stream 3: 1
 * // ...
 * // Stream 1: 9
 * // Stream 2: 9
 * // Stream 3: 9
 * ```
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 *
 *
 */
export function publish<T, R>(selector?: OperatorFunction<T, R>): MonoTypeOperatorFunction<T> | OperatorFunction<T, R> {
  return selector ?
    multicast(() => new Subject<T>(), selector) :
    multicast(new Subject<T>());
}
