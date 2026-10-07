import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { MonoTypeOperatorFunction } from '../types';
import { SimpleOuterSubscriber } from '../innerSubscribe';
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * ## Examples
 * A simple example with numbers
 * ```ts
 * import { of } from 'rxjs';
 * import { distinct } from 'rxjs/operators';
 *
 * of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
 *     distinct(),
 *   )
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 * ```
 *
 * An example using a keySelector function
 * ```typescript
 * import { of } from 'rxjs';
 * import { distinct } from 'rxjs/operators';
 *
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *   ).pipe(
 *     distinct((p: Person) => p.name),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * ```
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
export declare function distinct<T, K>(keySelector?: (value: T) => K, flushes?: Observable<any>): MonoTypeOperatorFunction<T>;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class DistinctSubscriber<T, K> extends SimpleOuterSubscriber<T, T> {
    private keySelector?;
    private values;
    constructor(destination: Subscriber<T>, keySelector?: (value: T) => K, flushes?: Observable<any>);
    notifyNext(): void;
    notifyError(error: any): void;
    protected _next(value: T): void;
    private _useKeySelector;
    private _finalizeNext;
}
