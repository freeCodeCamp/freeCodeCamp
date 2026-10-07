import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { OperatorFunction, MonoTypeOperatorFunction } from '../types';

/* tslint:disable:max-line-length */
export function defaultIfEmpty<T>(defaultValue?: T): MonoTypeOperatorFunction<T>;
export function defaultIfEmpty<T, R>(defaultValue?: R): OperatorFunction<T, T | R>;
/* tslint:enable:max-line-length */

/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * ![](defaultIfEmpty.png)
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * ## Example
 * If no clicks happen in 5 seconds, then emit "no clicks"
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { defaultIfEmpty, takeUntil } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
 * const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
export function defaultIfEmpty<T, R>(defaultValue: R = null): OperatorFunction<T, T | R> {
  return (source: Observable<T>) => source.lift(new DefaultIfEmptyOperator(defaultValue)) as Observable<T | R>;
}

class DefaultIfEmptyOperator<T, R> implements Operator<T, T | R> {

  constructor(private defaultValue: R) {
  }

  call(subscriber: Subscriber<T | R>, source: any): any {
    return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class DefaultIfEmptySubscriber<T, R> extends Subscriber<T> {
  private isEmpty: boolean = true;

  constructor(destination: Subscriber<T | R>, private defaultValue: R) {
    super(destination);
  }

  protected _next(value: T): void {
    this.isEmpty = false;
    this.destination.next(value);
  }

  protected _complete(): void {
    if (this.isEmpty) {
      this.destination.next(this.defaultValue);
    }
    this.destination.complete();
  }
}
