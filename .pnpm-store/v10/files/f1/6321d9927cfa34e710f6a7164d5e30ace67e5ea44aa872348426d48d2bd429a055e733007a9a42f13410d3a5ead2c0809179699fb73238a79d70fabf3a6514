import { EmptyError } from '../util/EmptyError';
import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { TeardownLogic, MonoTypeOperatorFunction } from '../types';

/**
 * If the source observable completes without emitting a value, it will emit
 * an error. The error will be created at that time by the optional
 * `errorFactory` argument, otherwise, the error will be {@link EmptyError}.
 *
 * ![](throwIfEmpty.png)
 *
 * ## Example
 * ```ts
 * import { fromEvent, timer } from 'rxjs';
 * import { throwIfEmpty, takeUntil } from 'rxjs/operators';
 *
 * const click$ = fromEvent(document, 'click');
 *
 * click$.pipe(
 *   takeUntil(timer(1000)),
 *   throwIfEmpty(
 *     () => new Error('the document was not clicked within 1 second')
 *   ),
 * )
 * .subscribe({
 *   next() { console.log('The button was clicked'); },
 *   error(err) { console.error(err); }
 * });
 * ```
 *
 * @param errorFactory A factory function called to produce the
 * error to be thrown when the source observable completes without emitting a
 * value.
 */
export function throwIfEmpty <T>(errorFactory: (() => any) = defaultErrorFactory): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => {
    return source.lift(new ThrowIfEmptyOperator(errorFactory));
  };
}

class ThrowIfEmptyOperator<T> implements Operator<T, T> {
  constructor(private errorFactory: () => any) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
  }
}

class ThrowIfEmptySubscriber<T> extends Subscriber<T> {
  private hasValue: boolean = false;

  constructor(destination: Subscriber<T>, private errorFactory: () => any) {
    super(destination);
  }

  protected _next(value: T): void {
    this.hasValue = true;
    this.destination.next(value);
  }

  protected _complete() {
    if (!this.hasValue) {
      let err: any;
      try {
        err = this.errorFactory();
      } catch (e) {
        err = e;
      }
      this.destination.error(err);
    } else {
        return this.destination.complete();
    }
  }
}

function defaultErrorFactory() {
  return new EmptyError();
}
