import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { EmptyError } from '../util/EmptyError';

import { Observer, MonoTypeOperatorFunction, TeardownLogic } from '../types';

/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * items, notify of an IllegalArgumentException or NoSuchElementException respectively. If the source Observable
 * emits items but none match the specified predicate then `undefined` is emitted.
 *
 * <span class="informal">Like {@link first}, but emit with error notification if there is more than one value.</span>
 * ![](single.png)
 *
 * ## Example
 * emits 'error'
 * ```ts
 * import { range } from 'rxjs';
 * import { single } from 'rxjs/operators';
 *
 * const numbers = range(1,5).pipe(single());
 * numbers.subscribe(x => console.log('never get called'), e => console.log('error'));
 * // result
 * // 'error'
 * ```
 *
 * emits 'undefined'
 * ```ts
 * import { range } from 'rxjs';
 * import { single } from 'rxjs/operators';
 *
 * const numbers = range(1,5).pipe(single(x => x === 10));
 * numbers.subscribe(x => console.log(x));
 * // result
 * // 'undefined'
 * ```
 *
 * @see {@link first}
 * @see {@link find}
 * @see {@link findIndex}
 * @see {@link elementAt}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate or `undefined` when no items match.
 *
 * @method single
 * @owner Observable
 */
export function single<T>(predicate?: (value: T, index: number, source: Observable<T>) => boolean): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SingleOperator(predicate, source));
}

class SingleOperator<T> implements Operator<T, T> {
  constructor(private predicate?: (value: T, index: number, source: Observable<T>) => boolean,
              private source?: Observable<T>) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SingleSubscriber<T> extends Subscriber<T> {
  private seenValue: boolean = false;
  private singleValue: T;
  private index: number = 0;

  constructor(destination: Observer<T>,
              private predicate?: (value: T, index: number, source: Observable<T>) => boolean,
              private source?: Observable<T>) {
    super(destination);
  }

  private applySingleValue(value: T): void {
    if (this.seenValue) {
      this.destination.error('Sequence contains more than one element');
    } else {
      this.seenValue = true;
      this.singleValue = value;
    }
  }

  protected _next(value: T): void {
    const index = this.index++;

    if (this.predicate) {
      this.tryNext(value, index);
    } else {
      this.applySingleValue(value);
    }
  }

  private tryNext(value: T, index: number): void {
    try {
      if (this.predicate(value, index, this.source)) {
        this.applySingleValue(value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  }

  protected _complete(): void {
    const destination = this.destination;

    if (this.index > 0) {
      destination.next(this.seenValue ? this.singleValue : undefined);
      destination.complete();
    } else {
      destination.error(new EmptyError);
    }
  }
}
