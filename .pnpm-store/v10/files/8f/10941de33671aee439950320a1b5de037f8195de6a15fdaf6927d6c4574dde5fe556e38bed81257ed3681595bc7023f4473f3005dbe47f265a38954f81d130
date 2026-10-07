import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { ObservableInput, OperatorFunction, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

export function exhaust<T>(): OperatorFunction<ObservableInput<T>, T>;
export function exhaust<R>(): OperatorFunction<any, R>;

/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * ![](exhaust.png)
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * ## Example
 * Run a finite timer for each click, only if there is no currently active timer
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { exhaust, map, take } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const higherOrder = clicks.pipe(
 *   map((ev) => interval(1000).pipe(take(5))),
 * );
 * const result = higherOrder.pipe(exhaust());
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switchAll}
 * @see {@link switchMap}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
export function exhaust<T>(): OperatorFunction<any, T> {
  return (source: Observable<T>) => source.lift(new SwitchFirstOperator<T>());
}

class SwitchFirstOperator<T> implements Operator<T, T> {
  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new SwitchFirstSubscriber(subscriber));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SwitchFirstSubscriber<T> extends SimpleOuterSubscriber<T, T> {
  private hasCompleted: boolean = false;
  private hasSubscription: boolean = false;

  constructor(destination: Subscriber<T>) {
    super(destination);
  }

  protected _next(value: T): void {
    if (!this.hasSubscription) {
      this.hasSubscription = true;
      this.add(innerSubscribe(value, new SimpleInnerSubscriber(this)));
    }
  }

  protected _complete(): void {
    this.hasCompleted = true;
    if (!this.hasSubscription) {
      this.destination.complete!();
    }
  }

  notifyComplete(): void {
    this.hasSubscription = false;
    if (this.hasCompleted) {
      this.destination.complete!();
    }
  }
}
