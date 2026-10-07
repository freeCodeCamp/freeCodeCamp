import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
/**
 * Creates an Observable that emits no items to the Observer and immediately
 * emits an error notification.
 *
 * <span class="informal">Just emits 'error', and nothing else.
 * </span>
 *
 * ![](throw.png)
 *
 * This static operator is useful for creating a simple Observable that only
 * emits the error notification. It can be used for composing with other
 * Observables, such as in a {@link mergeMap}.
 *
 * ## Examples
 * ### Emit the number 7, then emit an error
 * ```ts
 * import { throwError, concat, of } from 'rxjs';
 *
 * const result = concat(of(7), throwError(new Error('oops!')));
 * result.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Logs:
 * // 7
 * // Error: oops!
 * ```
 *
 * ---
 *
 * ### Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 2
 * ```ts
 * import { throwError, interval, of } from 'rxjs';
 * import { mergeMap } from 'rxjs/operators';
 *
 * interval(1000).pipe(
 *   mergeMap(x => x === 2
 *     ? throwError('Twos are bad')
 *     : of('a', 'b', 'c')
 *   ),
 * ).subscribe(x => console.log(x), e => console.error(e));
 *
 * // Logs:
 * // a
 * // b
 * // c
 * // a
 * // b
 * // c
 * // Twos are bad
 * ```
 *
 * @see {@link Observable}
 * @see {@link empty}
 * @see {@link never}
 * @see {@link of}
 *
 * @param {any} error The particular Error to pass to the error notification.
 * @param {SchedulerLike} [scheduler] A {@link SchedulerLike} to use for scheduling
 * the emission of the error notification.
 * @return {Observable} An error Observable: emits only the error notification
 * using the given error argument.
 * @static true
 * @name throwError
 * @owner Observable
 */
export declare function throwError(error: any, scheduler?: SchedulerLike): Observable<never>;
