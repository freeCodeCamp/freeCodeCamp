import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { OperatorFunction, MonoTypeOperatorFunction, TeardownLogic } from '../types';

export function takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S): OperatorFunction<T, S>;
export function takeWhile<T, S extends T>(predicate: (value: T, index: number) => value is S, inclusive: false): OperatorFunction<T, S>;
export function takeWhile<T>(predicate: (value: T, index: number) => boolean, inclusive?: boolean): MonoTypeOperatorFunction<T>;

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * ![](takeWhile.png)
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * ## Example
 * Emit click events only while the clientX property is greater than 200
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { takeWhile } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(takeWhile(ev => ev.clientX > 200));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @param {boolean} inclusive When set to `true` the value that caused
 * `predicate` to return `false` will also be emitted.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
export function takeWhile<T>(
    predicate: (value: T, index: number) => boolean,
    inclusive = false): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) =>
             source.lift(new TakeWhileOperator(predicate, inclusive));
}

class TakeWhileOperator<T> implements Operator<T, T> {
  constructor(
      private predicate: (value: T, index: number) => boolean,
      private inclusive: boolean) {}

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(
        new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class TakeWhileSubscriber<T> extends Subscriber<T> {
  private index: number = 0;

  constructor(
      destination: Subscriber<T>,
      private predicate: (value: T, index: number) => boolean,
      private inclusive: boolean) {
    super(destination);
  }

  protected _next(value: T): void {
    const destination = this.destination;
    let result: boolean;
    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }
    this.nextOrComplete(value, result);
  }

  private nextOrComplete(value: T, predicateResult: boolean): void {
    const destination = this.destination;
    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }
      destination.complete();
    }
  }
}
