import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';
import { map } from './map';
import { from } from '../observable/from';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/* tslint:disable:max-line-length */
export function switchMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported, use inner map instead */
export function switchMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: undefined): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported, use inner map instead */
export function switchMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables.</span>
 *
 * ![](switchMap.png)
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * ## Example
 * Generate new Observable according to source Observable values
 * ```typescript
 * import { of } from 'rxjs';
 * import { switchMap } from 'rxjs/operators';
 *
 * const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
 * switched.subscribe(x => console.log(x));
 * // outputs
 * // 1
 * // 1
 * // 1
 * // 2
 * // 4
 * // 8
 * // ... and so on
 * ```
 *
 * Rerun an interval Observable on every click event
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { switchMap } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(switchMap((ev) => interval(1000)));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switchAll}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional deprecated `resultSelector`) to each item
 * emitted by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
export function switchMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R,
): OperatorFunction<T, ObservedValueOf<O>|R> {
  if (typeof resultSelector === 'function') {
    return (source: Observable<T>) => source.pipe(
      switchMap((a, i) => from(project(a, i)).pipe(
        map((b, ii) => resultSelector(a, b, i, ii))
      ))
    );
  }
  return (source: Observable<T>) => source.lift(new SwitchMapOperator(project));
}

class SwitchMapOperator<T, R> implements Operator<T, R> {
  constructor(private project: (value: T, index: number) => ObservableInput<R>) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SwitchMapSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  private index = 0;
  private innerSubscription?: Subscription;

  constructor(destination: Subscriber<R>,
              private project: (value: T, index: number) => ObservableInput<R>) {
    super(destination);
  }

  protected _next(value: T) {
    let result: ObservableInput<R>;
    const index = this.index++;
    try {
      result = this.project(value, index);
    } catch (error) {
      this.destination.error!(error);
      return;
    }
    this._innerSub(result);
  }

  private _innerSub(result: ObservableInput<R>) {
    const innerSubscription = this.innerSubscription;
    if (innerSubscription) {
      innerSubscription.unsubscribe();
    }
    const innerSubscriber = new SimpleInnerSubscriber(this);
    const destination = this.destination as Subscription;
    destination.add(innerSubscriber);
    this.innerSubscription = innerSubscribe(result, innerSubscriber);
    // The returned subscription will usually be the subscriber that was
    // passed. However, interop subscribers will be wrapped and for
    // unsubscriptions to chain correctly, the wrapper needs to be added, too.
    if (this.innerSubscription !== innerSubscriber) {
      destination.add(this.innerSubscription);
    }
  }

  protected _complete(): void {
    const {innerSubscription} = this;
    if (!innerSubscription || innerSubscription.closed) {
      super._complete();
    }
    this.unsubscribe();
  }

  protected _unsubscribe() {
    this.innerSubscription = undefined;
  }

  notifyComplete(): void {
    this.innerSubscription = undefined;
    if (this.isStopped) {
      super._complete();
    }
  }

  notifyNext(innerValue: R): void {
      this.destination.next!(innerValue);
  }
}
