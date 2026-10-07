import { Observable } from '../Observable';
import { from } from '../observable/from';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { isArray } from '../util/isArray';
import { ObservableInput, OperatorFunction } from '../types';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/* tslint:disable:max-line-length */
export function onErrorResumeNext<T>(): OperatorFunction<T, T>;
export function onErrorResumeNext<T, T2>(v: ObservableInput<T2>): OperatorFunction<T, T | T2>;
export function onErrorResumeNext<T, T2, T3>(v: ObservableInput<T2>, v2: ObservableInput<T3>): OperatorFunction<T, T | T2 | T3>;
export function onErrorResumeNext<T, T2, T3, T4>(v: ObservableInput<T2>, v2: ObservableInput<T3>, v3: ObservableInput<T4>): OperatorFunction<T, T | T2 | T3 | T4>;
export function onErrorResumeNext<T, T2, T3, T4, T5>(v: ObservableInput<T2>, v2: ObservableInput<T3>, v3: ObservableInput<T4>, v4: ObservableInput<T5>): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
export function onErrorResumeNext<T, T2, T3, T4, T5, T6>(v: ObservableInput<T2>, v2: ObservableInput<T3>, v3: ObservableInput<T4>, v4: ObservableInput<T5>, v5: ObservableInput<T6>): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
export function onErrorResumeNext<T, T2, T3, T4, T5, T6, T7>(v: ObservableInput<T2>, v2: ObservableInput<T3>, v3: ObservableInput<T4>, v4: ObservableInput<T5>, v5: ObservableInput<T6>, v6: ObservableInput<T7>): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6 | T7>;
export function onErrorResumeNext<T, R>(...observables: Array<ObservableInput<any>>): OperatorFunction<T, T | R>;
export function onErrorResumeNext<T, R>(array: ObservableInput<any>[]): OperatorFunction<T, T | R>;
/* tslint:enable:max-line-length */

/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * ![](onErrorResumeNext.png)
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catchError} instead.
 *
 *
 * ## Example
 * Subscribe to the next Observable after map fails
 * ```ts
 * import { of } from 'rxjs';
 * import { onErrorResumeNext, map } from 'rxjs/operators';
 *
 * of(1, 2, 3, 0).pipe(
 *   map(x => {
 *       if (x === 0) { throw Error(); }
 *        return 10 / x;
 *   }),
 *   onErrorResumeNext(of(1, 2, 3)),
 * )
 * .subscribe(
 *   val => console.log(val),
 *   err => console.log(err),          // Will never be called.
 *   () => console.log('that\'s it!')
 * );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 * ```
 *
 * @see {@link concat}
 * @see {@link catchError}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */

export function onErrorResumeNext<T, R>(...nextSources: Array<ObservableInput<any> |
                                                       Array<ObservableInput<any>>>): OperatorFunction<T, R> {
  if (nextSources.length === 1 && isArray(nextSources[0])) {
    nextSources = <Array<Observable<any>>>nextSources[0];
  }

  return (source: Observable<T>) => source.lift(new OnErrorResumeNextOperator<T, R>(nextSources));
}

/* tslint:disable:max-line-length */
export function onErrorResumeNextStatic<R>(v: ObservableInput<R>): Observable<R>;
export function onErrorResumeNextStatic<T2, T3, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<R>;
export function onErrorResumeNextStatic<T2, T3, T4, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<R>;
export function onErrorResumeNextStatic<T2, T3, T4, T5, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<R>;
export function onErrorResumeNextStatic<T2, T3, T4, T5, T6, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<R>;

export function onErrorResumeNextStatic<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
export function onErrorResumeNextStatic<R>(array: ObservableInput<any>[]): Observable<R>;
/* tslint:enable:max-line-length */

export function onErrorResumeNextStatic<T, R>(...nextSources: Array<ObservableInput<any> |
  Array<ObservableInput<any>> |
  ((...values: Array<any>) => R)>): Observable<R> {
  let source: ObservableInput<any>|undefined = undefined;

  if (nextSources.length === 1 && isArray(nextSources[0])) {
    nextSources = nextSources[0] as ObservableInput<any>[];
  }
  // TODO: resolve issue with passing no arguments.
  source = nextSources.shift()!;

  return from(source).lift(new OnErrorResumeNextOperator<T, R>(nextSources));
}

class OnErrorResumeNextOperator<T, R> implements Operator<T, R> {
  constructor(private nextSources: Array<ObservableInput<any>>) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
  }
}

class OnErrorResumeNextSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  constructor(protected destination: Subscriber<T>,
              private nextSources: Array<ObservableInput<any>>) {
    super(destination);
  }

  notifyError(): void {
    this.subscribeToNextSource();
  }

  notifyComplete(): void {
    this.subscribeToNextSource();
  }

  protected _error(err: any): void {
    this.subscribeToNextSource();
    this.unsubscribe();
  }

  protected _complete(): void {
    this.subscribeToNextSource();
    this.unsubscribe();
  }

  private subscribeToNextSource(): void {
    const next = this.nextSources.shift();
    if (!!next) {
      const innerSubscriber = new SimpleInnerSubscriber(this);
      const destination = this.destination as Subscription;
      destination.add(innerSubscriber);
      const innerSubscription = innerSubscribe(next, innerSubscriber);
      // The returned subscription will usually be the subscriber that was
      // passed. However, interop subscribers will be wrapped and for
      // unsubscriptions to chain correctly, the wrapper needs to be added, too.
      if (innerSubscription !== innerSubscriber) {
        destination.add(innerSubscription);
      }
    } else {
      this.destination.complete();
    }
  }
}
