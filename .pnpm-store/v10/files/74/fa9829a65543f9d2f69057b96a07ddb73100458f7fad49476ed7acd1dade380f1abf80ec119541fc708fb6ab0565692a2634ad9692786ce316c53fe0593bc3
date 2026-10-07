import { Observable } from '../Observable';
import { subscribeToObservable } from '../util/subscribeToObservable';
import { InteropObservable, SchedulerLike } from '../types';
import { scheduleObservable } from '../scheduled/scheduleObservable';

export function fromObservable<T>(input: InteropObservable<T>, scheduler?: SchedulerLike) {
  if (!scheduler) {
    return new Observable<T>(subscribeToObservable(input));
  } else {
    return scheduleObservable(input, scheduler);
  }
}
