import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { ObservableInput, OperatorFunction } from '../types';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * ## Example
 * Count the number of click events
 * ```ts
 * import { fromEvent, of } from 'rxjs';
 * import { mapTo, mergeScan } from 'rxjs/operators';
 *
 * const click$ = fromEvent(document, 'click');
 * const one$ = click$.pipe(mapTo(1));
 * const seed = 0;
 * const count$ = one$.pipe(
 *   mergeScan((acc, one) => of(acc + one), seed),
 * );
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * // 1
 * // 2
 * // 3
 * // 4
 * // ...and so on for each click
 * ```
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
export function mergeScan<T, R>(accumulator: (acc: R, value: T, index: number) => ObservableInput<R>,
                                seed: R,
                                concurrent: number = Number.POSITIVE_INFINITY): OperatorFunction<T, R> {
  return (source: Observable<T>) => source.lift(new MergeScanOperator(accumulator, seed, concurrent));
}

export class MergeScanOperator<T, R> implements Operator<T, R> {
  constructor(private accumulator: (acc: R, value: T, index: number) => ObservableInput<R>,
              private seed: R,
              private concurrent: number) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new MergeScanSubscriber(
      subscriber, this.accumulator, this.seed, this.concurrent
    ));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class MergeScanSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  private hasValue: boolean = false;
  private hasCompleted: boolean = false;
  private buffer: Observable<any>[] = [];
  private active: number = 0;
  protected index: number = 0;

  constructor(destination: Subscriber<R>,
              private accumulator: (acc: R, value: T, index: number) => ObservableInput<R>,
              private acc: R,
              private concurrent: number) {
    super(destination);
  }

  protected _next(value: any): void {
    if (this.active < this.concurrent) {
      const index = this.index++;
      const destination = this.destination;
      let ish;
      try {
        const { accumulator } = this;
        ish = accumulator(this.acc, value, index);
      } catch (e) {
        return destination.error!(e);
      }
      this.active++;
      this._innerSub(ish);
    } else {
      this.buffer.push(value);
    }
  }

  private _innerSub(ish: any): void {
    const innerSubscriber = new SimpleInnerSubscriber(this);
    const destination = this.destination as Subscription;
    destination.add(innerSubscriber);
    const innerSubscription = innerSubscribe(ish, innerSubscriber);
    // The returned subscription will usually be the subscriber that was
    // passed. However, interop subscribers will be wrapped and for
    // unsubscriptions to chain correctly, the wrapper needs to be added, too.
    if (innerSubscription !== innerSubscriber) {
      destination.add(innerSubscription);
    }
  }

  protected _complete(): void {
    this.hasCompleted = true;
    if (this.active === 0 && this.buffer.length === 0) {
      if (this.hasValue === false) {
        this.destination.next!(this.acc);
      }
      this.destination.complete!();
    }
    this.unsubscribe();
  }

  notifyNext(innerValue: R): void {
    const { destination } = this;
    this.acc = innerValue;
    this.hasValue = true;
    destination.next!(innerValue);
  }

  notifyComplete(): void {
    const buffer = this.buffer;
    this.active--;
    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      if (this.hasValue === false) {
        this.destination.next!(this.acc);
      }
      this.destination.complete!();
    }
  }
}
