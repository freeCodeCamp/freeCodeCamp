import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
import { Subscription } from '../Subscription';

export function schedulePromise<T>(input: PromiseLike<T>, scheduler: SchedulerLike) {
  return new Observable<T>(subscriber => {
    const sub = new Subscription();
    sub.add(scheduler.schedule(() => input.then(
      value => {
        sub.add(scheduler.schedule(() => {
          subscriber.next(value);
          sub.add(scheduler.schedule(() => subscriber.complete()));
        }));
      },
      err => {
        sub.add(scheduler.schedule(() => subscriber.error(err)));
      }
    )));
    return sub;
  });
}
