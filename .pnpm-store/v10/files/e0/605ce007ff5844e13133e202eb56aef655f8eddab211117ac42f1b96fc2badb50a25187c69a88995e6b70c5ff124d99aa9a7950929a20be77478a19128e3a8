import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';

import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/* tslint:disable:max-line-length */
export function catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>;
/* tslint:enable:max-line-length */

/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * ![](catch.png)
 *
 * ## Examples
 * Continues with a different Observable when there's an error
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { map, catchError } from 'rxjs/operators';
 *
 * of(1, 2, 3, 4, 5).pipe(
 *     map(n => {
 *   	   if (n === 4) {
 * 	       throw 'four!';
 *       }
 *	     return n;
 *     }),
 *     catchError(err => of('I', 'II', 'III', 'IV', 'V')),
 *   )
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 * ```
 *
 * Retries the caught source Observable again in case of error, similar to retry() operator
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { map, catchError, take } from 'rxjs/operators';
 *
 * of(1, 2, 3, 4, 5).pipe(
 *     map(n => {
 *   	   if (n === 4) {
 *   	     throw 'four!';
 *       }
 * 	     return n;
 *     }),
 *     catchError((err, caught) => caught),
 *     take(30),
 *   )
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 * ```
 *
 * Throws a new error when the source Observable throws an error
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { map, catchError } from 'rxjs/operators';
 *
 * of(1, 2, 3, 4, 5).pipe(
 *     map(n => {
 *       if (n === 4) {
 *         throw 'four!';
 *       }
 *       return n;
 *     }),
 *     catchError(err => {
 *       throw 'error in source. Details: ' + err;
 *     }),
 *   )
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 * ```
 *
 *  @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @name catchError
 */
export function catchError<T, O extends ObservableInput<any>>(
  selector: (err: any, caught: Observable<T>) => O
): OperatorFunction<T, T | ObservedValueOf<O>> {
  return function catchErrorOperatorFunction(source: Observable<T>): Observable<T | ObservedValueOf<O>> {
    const operator = new CatchOperator(selector);
    const caught = source.lift(operator);
    return (operator.caught = caught as Observable<T>);
  };
}

class CatchOperator<T, R> implements Operator<T, T | R> {
  caught: Observable<T>;

  constructor(private selector: (err: any, caught: Observable<T>) => ObservableInput<T | R>) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class CatchSubscriber<T, R> extends SimpleOuterSubscriber<T, T | R> {
  constructor(destination: Subscriber<any>,
              private selector: (err: any, caught: Observable<T>) => ObservableInput<T | R>,
              private caught: Observable<T>) {
    super(destination);
  }

  // NOTE: overriding `error` instead of `_error` because we don't want
  // to have this flag this subscriber as `isStopped`. We can mimic the
  // behavior of the RetrySubscriber (from the `retry` operator), where
  // we unsubscribe from our source chain, reset our Subscriber flags,
  // then subscribe to the selector result.
  error(err: any) {
    if (!this.isStopped) {
      let result: any;
      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        super.error(err2);
        return;
      }
      this._unsubscribeAndRecycle();
      const innerSubscriber = new SimpleInnerSubscriber(this);
      this.add(innerSubscriber);
      const innerSubscription = innerSubscribe(result, innerSubscriber);
      // The returned subscription will usually be the subscriber that was
      // passed. However, interop subscribers will be wrapped and for
      // unsubscriptions to chain correctly, the wrapper needs to be added, too.
      if (innerSubscription !== innerSubscriber) {
        this.add(innerSubscription);
      }
    }
  }
}
