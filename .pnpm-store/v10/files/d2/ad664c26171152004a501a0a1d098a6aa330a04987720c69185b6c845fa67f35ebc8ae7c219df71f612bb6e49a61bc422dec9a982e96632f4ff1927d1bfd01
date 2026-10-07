import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
import { subscribeToArray } from '../util/subscribeToArray';
import { scheduleArray } from '../scheduled/scheduleArray';

export function fromArray<T>(input: ArrayLike<T>, scheduler?: SchedulerLike) {
  if (!scheduler) {
    return new Observable<T>(subscribeToArray(input));
  } else {
    return scheduleArray(input, scheduler);
  }
}
