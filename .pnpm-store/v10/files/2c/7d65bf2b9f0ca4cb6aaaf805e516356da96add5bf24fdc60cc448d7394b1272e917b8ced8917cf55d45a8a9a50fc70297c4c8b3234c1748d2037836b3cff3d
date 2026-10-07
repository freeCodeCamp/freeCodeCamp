import { scheduleObservable } from './scheduleObservable';
import { schedulePromise } from './schedulePromise';
import { scheduleArray } from './scheduleArray';
import { scheduleIterable } from './scheduleIterable';
import { ObservableInput, SchedulerLike, Observable } from 'rxjs';
import { isInteropObservable } from '../util/isInteropObservable';
import { isPromise } from '../util/isPromise';
import { isArrayLike } from '../util/isArrayLike';
import { isIterable } from '../util/isIterable';

/**
 * Converts from a common {@link ObservableInput} type to an observable where subscription and emissions
 * are scheduled on the provided scheduler.
 *
 * @see from
 * @see of
 *
 * @param input The observable, array, promise, iterable, etc you would like to schedule
 * @param scheduler The scheduler to use to schedule the subscription and emissions from
 * the returned observable.
 */
export function scheduled<T>(input: ObservableInput<T>, scheduler: SchedulerLike): Observable<T> {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    } else if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    } else if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }  else if (isIterable(input) || typeof input === 'string') {
      return scheduleIterable(input, scheduler);
    }
  }

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
