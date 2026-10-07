
import { Observable } from '../Observable';
import { async } from '../scheduler/async';
import { SchedulerLike, OperatorFunction } from '../types';
import { scan } from './scan';
import { defer } from '../observable/defer';
import { map } from './map';

/**
 *
 * Emits an object containing the current value, and the time that has
 * passed between emitting the current value and the previous value, which is
 * calculated by using the provided `scheduler`'s `now()` method to retrieve
 * the current time at each emission, then calculating the difference. The `scheduler`
 * defaults to {@link asyncScheduler}, so by default, the `interval` will be in
 * milliseconds.
 *
 * <span class="informal">Convert an Observable that emits items into one that
 * emits indications of the amount of time elapsed between those emissions.</span>
 *
 * ![](timeinterval.png)
 *
 * ## Examples
 * Emit inteval between current value with the last value
 *
 * ```ts
 * const seconds = interval(1000);
 *
 * seconds.pipe(timeInterval())
 * .subscribe(
 *     value => console.log(value),
 *     err => console.log(err),
 * );
 *
 * seconds.pipe(timeout(900))
 * .subscribe(
 *     value => console.log(value),
 *     err => console.log(err),
 * );
 *
 * // NOTE: The values will never be this precise,
 * // intervals created with `interval` or `setInterval`
 * // are non-deterministic.
 *
 * // {value: 0, interval: 1000}
 * // {value: 1, interval: 1000}
 * // {value: 2, interval: 1000}
 * ```
 *
 * @param {SchedulerLike} [scheduler] Scheduler used to get the current time.
 * @return {Observable<{ interval: number, value: T }>} Observable that emit infomation about value and interval
 * @method timeInterval
 */
export function timeInterval<T>(scheduler: SchedulerLike = async): OperatorFunction<T, TimeInterval<T>> {
  return (source: Observable<T>) => defer(() => {
    return source.pipe(
      // TODO(benlesh): correct these typings.
      scan(
        ({ current }, value) => ({ value, current: scheduler.now(), last: current }),
        { current: scheduler.now(), value: undefined,  last: undefined }
      ) as any,
      map<any, TimeInterval<T>>(({ current, last, value }) => new TimeInterval(value, current - last)),
    );
  });
}

// TODO(benlesh): make this an interface, export the interface, but not the implemented class,
// there's no reason users should be manually creating this type.

/**
 * @deprecated exposed API, use as interface only.
 */
export class TimeInterval<T> {
  constructor(public value: T, public interval: number) {}
}
