import { Observable } from '../Observable';
import { SubscribableOrPromise, ObservedValueOf, ObservableInput } from '../types';
import { from } from './from'; // lol
import { empty } from './empty';

/**
 * Creates an Observable that, on subscribe, calls an Observable factory to
 * make an Observable for each new Observer.
 *
 * <span class="informal">Creates the Observable lazily, that is, only when it
 * is subscribed.
 * </span>
 *
 * ![](defer.png)
 *
 * `defer` allows you to create the Observable only when the Observer
 * subscribes, and create a fresh Observable for each Observer. It waits until
 * an Observer subscribes to it, and then it generates an Observable,
 * typically with an Observable factory function. It does this afresh for each
 * subscriber, so although each subscriber may think it is subscribing to the
 * same Observable, in fact each subscriber gets its own individual
 * Observable.
 *
 * ## Example
 * ### Subscribe to either an Observable of clicks or an Observable of interval, at random
 * ```ts
 * import { defer, fromEvent, interval } from 'rxjs';
 *
 * const clicksOrInterval = defer(function () {
 *   return Math.random() > 0.5
 *     ? fromEvent(document, 'click')
 *     : interval(1000);
 * });
 * clicksOrInterval.subscribe(x => console.log(x));
 *
 * // Results in the following behavior:
 * // If the result of Math.random() is greater than 0.5 it will listen
 * // for clicks anywhere on the "document"; when document is clicked it
 * // will log a MouseEvent object to the console. If the result is less
 * // than 0.5 it will emit ascending numbers, one every second(1000ms).
 * ```
 *
 * @see {@link Observable}
 *
 * @param {function(): SubscribableOrPromise} observableFactory The Observable
 * factory function to invoke for each Observer that subscribes to the output
 * Observable. May also return a Promise, which will be converted on the fly
 * to an Observable.
 * @return {Observable} An Observable whose Observers' subscriptions trigger
 * an invocation of the given Observable factory function.
 * @static true
 * @name defer
 * @owner Observable
 */
export function defer<R extends ObservableInput<any> | void>(observableFactory: () => R): Observable<ObservedValueOf<R>> {
  return new Observable<ObservedValueOf<R>>(subscriber => {
    let input: R | void;
    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
    const source = input ? from(input as ObservableInput<ObservedValueOf<R>>) : empty();
    return source.subscribe(subscriber);
  });
}
