import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Notification } from '../Notification';
import { OperatorFunction } from '../types';

/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * ![](materialize.png)
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * ## Example
 * Convert a faulty Observable to an Observable of Notifications
 * ```ts
 * import { of } from 'rxjs';
 * import { materialize, map } from 'rxjs/operators';
 *
 * const letters = of('a', 'b', 13, 'd');
 * const upperCase = letters.pipe(map(x => x.toUpperCase()));
 * const materialized = upperCase.pipe(materialize());
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 * ```
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
export function materialize<T>(): OperatorFunction<T, Notification<T>> {
  return function materializeOperatorFunction(source: Observable<T>) {
    return source.lift(new MaterializeOperator());
  };
}

class MaterializeOperator<T> implements Operator<T, Notification<T>> {
  call(subscriber: Subscriber<Notification<T>>, source: any): any {
    return source.subscribe(new MaterializeSubscriber(subscriber));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class MaterializeSubscriber<T> extends Subscriber<T> {
  constructor(destination: Subscriber<Notification<T>>) {
    super(destination);
  }

  protected _next(value: T) {
    this.destination.next(Notification.createNext(value));
  }

  protected _error(err: any) {
    const destination = this.destination;
    destination.next(Notification.createError(err));
    destination.complete();
  }

  protected _complete() {
    const destination = this.destination;
    destination.next(Notification.createComplete());
    destination.complete();
  }
}
