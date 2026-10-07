import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * ![](skip.png)
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
export function skip<T>(count: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SkipOperator(count));
}

class SkipOperator<T> implements Operator<T, T> {
  constructor(private total: number) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new SkipSubscriber(subscriber, this.total));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SkipSubscriber<T> extends Subscriber<T> {
  count: number = 0;

  constructor(destination: Subscriber<T>, private total: number) {
    super(destination);
  }

  protected _next(x: T) {
    if (++this.count > this.total) {
      this.destination.next(x);
    }
  }
}
