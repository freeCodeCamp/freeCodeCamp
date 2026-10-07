import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
import { subscribeToPromise } from '../util/subscribeToPromise';
import { schedulePromise } from '../scheduled/schedulePromise';

export function fromPromise<T>(input: PromiseLike<T>, scheduler?: SchedulerLike) {
  if (!scheduler) {
    return new Observable<T>(subscribeToPromise(input));
  } else {
    return schedulePromise(input, scheduler);
  }
}
