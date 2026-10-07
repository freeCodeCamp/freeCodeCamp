import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
import { subscribeToIterable } from '../util/subscribeToIterable';
import { scheduleIterable } from '../scheduled/scheduleIterable';

export function fromIterable<T>(input: Iterable<T>, scheduler?: SchedulerLike) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  if (!scheduler) {
    return new Observable<T>(subscribeToIterable(input));
  } else {
    return scheduleIterable(input, scheduler);
  }
}
