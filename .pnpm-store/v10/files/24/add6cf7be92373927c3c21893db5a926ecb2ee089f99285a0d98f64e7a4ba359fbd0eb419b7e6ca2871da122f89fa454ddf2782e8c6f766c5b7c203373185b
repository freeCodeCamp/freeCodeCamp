import { async } from '../scheduler/async';
import { isDate } from '../util/isDate';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { TimeoutError } from '../util/TimeoutError';
import { MonoTypeOperatorFunction, SchedulerAction, SchedulerLike, TeardownLogic } from '../types';
import { timeoutWith } from './timeoutWith';
import { throwError } from '../observable/throwError';

/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * ![](timeout.png)
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * ## Examples
 * Check if ticks are emitted within certain timespan
 * ```ts
 * import { interval } from 'rxjs';
 * import { timeout } from 'rxjs/operators';
 *
 * const seconds = interval(1000);
 *
 * seconds.pipe(timeout(1100))      // Let's use bigger timespan to be safe,
 *                                  // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err),     // Will never be called.
 * );
 *
 * seconds.pipe(timeout(900))
 * .subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err),     // Will emit error before even first value is emitted,
 *                                  // since it did not arrive within 900ms period.
 * );
 * ```
 *
 * Use Date to check if Observable completed
 * ```ts
 * import { interval } from 'rxjs';
 * import { timeout } from 'rxjs/operators';
 *
 * const seconds = interval(1000);
 *
 * seconds.pipe(
 *   timeout(new Date("December 17, 2020 03:24:00")),
 * )
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err)      // On December 17, 2020 at 03:24:00 it will emit an error,
 *                                  // since Observable did not complete by then.
 * );
 * ```
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {SchedulerLike} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
export function timeout<T>(due: number | Date,
                           scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T> {
  return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}
