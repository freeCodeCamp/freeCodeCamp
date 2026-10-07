import { Observable } from '../Observable';
import { multicast } from './multicast';
import { refCount } from './refCount';
import { Subject } from '../Subject';

import { MonoTypeOperatorFunction } from '../types';

function shareSubjectFactory() {
  return new Subject();
}

/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 * This is an alias for `multicast(() => new Subject()), refCount()`.
 *
 * ![](share.png)
 *
 * @return {Observable<T>} An Observable that upon connection causes the source Observable to emit items to its Observers.
 * @method share
 * @owner Observable
 */
export function share<T>(): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => refCount()(multicast(shareSubjectFactory)(source)) as Observable<T>;
}
