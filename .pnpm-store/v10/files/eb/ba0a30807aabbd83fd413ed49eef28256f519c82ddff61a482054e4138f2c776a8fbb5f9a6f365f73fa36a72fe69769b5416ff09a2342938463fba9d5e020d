import { CombineLatestOperator } from '../observable/combineLatest';
import { Observable } from '../Observable';
import { OperatorFunction, ObservableInput } from '../types';

export function combineAll<T>(): OperatorFunction<ObservableInput<T>, T[]>;
export function combineAll<T>(): OperatorFunction<any, T[]>;
export function combineAll<T, R>(project: (...values: T[]) => R): OperatorFunction<ObservableInput<T>, R>;
export function combineAll<R>(project: (...values: Array<any>) => R): OperatorFunction<any, R>;
/**
 * Flattens an Observable-of-Observables by applying {@link combineLatest} when the Observable-of-Observables completes.
 *
 * ![](combineAll.png)
 *
 * `combineAll` takes an Observable of Observables, and collects all Observables from it. Once the outer Observable completes,
 * it subscribes to all collected Observables and combines their values using the {@link combineLatest}</a> strategy, such that:
 *
 * * Every time an inner Observable emits, the output Observable emits
 * * When the returned observable emits, it emits all of the latest values by:
 *    * If a `project` function is provided, it is called with each recent value from each inner Observable in whatever order they
 *      arrived, and the result of the `project` function is what is emitted by the output Observable.
 *    * If there is no `project` function, an array of all the most recent values is emitted by the output Observable.
 *
 * ---
 *
 * ## Examples
 *
 * ### Map two click events to a finite interval Observable, then apply `combineAll`
 *
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { map, combineAll, take } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const higherOrder = clicks.pipe(
 *   map(ev =>
 *      interval(Math.random() * 2000).pipe(take(3))
 *   ),
 *   take(2)
 * );
 * const result = higherOrder.pipe(
 *   combineAll()
 * );
 *
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function(...values: Array<any>)} An optional function to map the most recent values from each inner Observable into a new result.
 * Takes each of the most recent values from each collected inner Observable as arguments, in order.
 * @return {Observable<T>}
 * @name combineAll
 */
export function combineAll<T, R>(project?: (...values: Array<any>) => R): OperatorFunction<T, R> {
  return (source: Observable<T>) => source.lift(new CombineLatestOperator(project));
}
