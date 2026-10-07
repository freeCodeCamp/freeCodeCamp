import { Observable } from '../Observable';
import { defer } from './defer';
import { EMPTY } from './empty';
import { SubscribableOrPromise } from '../types';

/**
 * Decides at subscription time which Observable will actually be subscribed.
 *
 * <span class="informal">`If` statement for Observables.</span>
 *
 * `iif` accepts a condition function and two Observables. When
 * an Observable returned by the operator is subscribed, condition function will be called.
 * Based on what boolean it returns at that moment, consumer will subscribe either to
 * the first Observable (if condition was true) or to the second (if condition was false). Condition
 * function may also not return anything - in that case condition will be evaluated as false and
 * second Observable will be subscribed.
 *
 * Note that Observables for both cases (true and false) are optional. If condition points to an Observable that
 * was left undefined, resulting stream will simply complete immediately. That allows you to, rather
 * than controlling which Observable will be subscribed, decide at runtime if consumer should have access
 * to given Observable or not.
 *
 * If you have more complex logic that requires decision between more than two Observables, {@link defer}
 * will probably be a better choice. Actually `iif` can be easily implemented with {@link defer}
 * and exists only for convenience and readability reasons.
 *
 *
 * ## Examples
 * ### Change at runtime which Observable will be subscribed
 * ```ts
 * import { iif, of } from 'rxjs';
 *
 * let subscribeToFirst;
 * const firstOrSecond = iif(
 *   () => subscribeToFirst,
 *   of('first'),
 *   of('second'),
 * );
 *
 * subscribeToFirst = true;
 * firstOrSecond.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "first"
 *
 * subscribeToFirst = false;
 * firstOrSecond.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "second"
 *
 * ```
 *
 * ### Control an access to an Observable
 * ```ts
 * let accessGranted;
 * const observableIfYouHaveAccess = iif(
 *   () => accessGranted,
 *   of('It seems you have an access...'), // Note that only one Observable is passed to the operator.
 * );
 *
 * accessGranted = true;
 * observableIfYouHaveAccess.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('The end'),
 * );
 *
 * // Logs:
 * // "It seems you have an access..."
 * // "The end"
 *
 * accessGranted = false;
 * observableIfYouHaveAccess.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('The end'),
 * );
 *
 * // Logs:
 * // "The end"
 * ```
 *
 * @see {@link defer}
 *
 * @param {function(): boolean} condition Condition which Observable should be chosen.
 * @param {Observable} [trueObservable] An Observable that will be subscribed if condition is true.
 * @param {Observable} [falseObservable] An Observable that will be subscribed if condition is false.
 * @return {Observable} Either first or second Observable, depending on condition.
 * @static true
 * @name iif
 * @owner Observable
*/
export function iif<T = never, F = never>(
  condition: () => boolean,
  trueResult: SubscribableOrPromise<T> = EMPTY,
  falseResult: SubscribableOrPromise<F> = EMPTY
): Observable<T|F> {
  return defer(() => condition() ? trueResult : falseResult);
}
