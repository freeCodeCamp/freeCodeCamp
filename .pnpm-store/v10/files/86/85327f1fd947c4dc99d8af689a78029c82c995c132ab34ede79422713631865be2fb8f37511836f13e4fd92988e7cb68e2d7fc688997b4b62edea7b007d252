import { SchedulerAction, SchedulerLike } from '../types';
import { Observable } from '../Observable';
/**
 * Creates an Observable that emits a sequence of numbers within a specified
 * range.
 *
 * <span class="informal">Emits a sequence of numbers in a range.</span>
 *
 * ![](range.png)
 *
 * `range` operator emits a range of sequential integers, in order, where you
 * select the `start` of the range and its `length`. By default, uses no
 * {@link SchedulerLike} and just delivers the notifications synchronously, but may use
 * an optional {@link SchedulerLike} to regulate those deliveries.
 *
 * ## Example
 * Emits the numbers 1 to 10</caption>
 * ```ts
 * import { range } from 'rxjs';
 *
 * const numbers = range(1, 10);
 * numbers.subscribe(x => console.log(x));
 * ```
 * @see {@link timer}
 * @see {@link index/interval}
 *
 * @param {number} [start=0] The value of the first integer in the sequence.
 * @param {number} count The number of sequential integers to generate.
 * @param {SchedulerLike} [scheduler] A {@link SchedulerLike} to use for scheduling
 * the emissions of the notifications.
 * @return {Observable} An Observable of numbers that emits a finite range of
 * sequential integers.
 * @static true
 * @name range
 * @owner Observable
 */
export declare function range(start?: number, count?: number, scheduler?: SchedulerLike): Observable<number>;
/** @internal */
export declare function dispatch(this: SchedulerAction<any>, state: any): void;
