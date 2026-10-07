import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';
import { map } from './map';
import { from } from '../observable/from';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/* tslint:disable:max-line-length */
export function exhaustMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported. Use inner map instead. */
export function exhaustMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: undefined): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported. Use inner map instead. */
export function exhaustMap<T, I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * ![](exhaustMap.png)
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * ## Example
 * Run a finite timer for each click, only if there is no currently active timer
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { exhaustMap, take } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(
 *   exhaustMap(ev => interval(1000).pipe(take(5)))
 * );
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
export function exhaustMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R,
): OperatorFunction<T, ObservedValueOf<O>|R> {
  if (resultSelector) {
    // DEPRECATED PATH
    return (source: Observable<T>) => source.pipe(
      exhaustMap((a, i) => from(project(a, i)).pipe(
        map((b: any, ii: any) => resultSelector(a, b, i, ii)),
      )),
    );
  }
  return (source: Observable<T>) =>
    source.lift(new ExhaustMapOperator(project));
}

class ExhaustMapOperator<T, R> implements Operator<T, R> {
  constructor(private project: (value: T, index: number) => ObservableInput<R>) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class ExhaustMapSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  private hasSubscription = false;
  private hasCompleted = false;
  private index = 0;

  constructor(destination: Subscriber<R>,
              private project: (value: T, index: number) => ObservableInput<R>) {
    super(destination);
  }

  protected _next(value: T): void {
    if (!this.hasSubscription) {
      this.tryNext(value);
    }
  }

  private tryNext(value: T): void {
    let result: ObservableInput<R>;
    const index = this.index++;
    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error!(err);
      return;
    }
    this.hasSubscription = true;
    this._innerSub(result);
  }

  private _innerSub(result: ObservableInput<R>): void {
    const innerSubscriber = new SimpleInnerSubscriber(this);
    const destination = this.destination as Subscription;
    destination.add(innerSubscriber);
    const innerSubscription = innerSubscribe(result, innerSubscriber);
    // The returned subscription will usually be the subscriber that was
    // passed. However, interop subscribers will be wrapped and for
    // unsubscriptions to chain correctly, the wrapper needs to be added, too.
    if (innerSubscription !== innerSubscriber) {
      destination.add(innerSubscription);
    }
  }

  protected _complete(): void {
    this.hasCompleted = true;
    if (!this.hasSubscription) {
      this.destination.complete!();
    }
    this.unsubscribe();
  }

  notifyNext(innerValue: R): void {
    this.destination.next!(innerValue);
  }

  notifyError(err: any): void {
    this.destination.error!(err);
  }

  notifyComplete(): void {
    this.hasSubscription = false;
    if (this.hasCompleted) {
      this.destination.complete!();
    }
  }
}
