import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, PartialObserver, TeardownLogic } from '../types';
import { noop } from '../util/noop';
import { isFunction } from '../util/isFunction';

/* tslint:disable:max-line-length */
/** @deprecated Use an observer instead of a complete callback */
export function tap<T>(next: null | undefined, error: null | undefined, complete: () => void): MonoTypeOperatorFunction<T>;
/** @deprecated Use an observer instead of an error callback */
export function tap<T>(next: null | undefined, error: (error: any) => void, complete?: () => void): MonoTypeOperatorFunction<T>;
/** @deprecated Use an observer instead of a complete callback */
export function tap<T>(next: (value: T) => void, error: null | undefined, complete: () => void): MonoTypeOperatorFunction<T>;
export function tap<T>(next?: (x: T) => void, error?: (e: any) => void, complete?: () => void): MonoTypeOperatorFunction<T>;
export function tap<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T>;
/* tslint:enable:max-line-length */

/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * ![](do.png)
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `tap` is not subscribed, the side effects specified by the
 * Observer will never happen. `tap` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * ## Example
 * Map every click to the clientX position of that click, while also logging the click event
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { tap, map } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const positions = clicks.pipe(
 *   tap(ev => console.log(ev)),
 *   map(ev => ev.clientX),
 * );
 * positions.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link map}
 * @see {@link Observable#subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @name tap
 */
export function tap<T>(nextOrObserver?: PartialObserver<T> | ((x: T) => void),
                       error?: (e: any) => void,
                       complete?: () => void): MonoTypeOperatorFunction<T> {
  return function tapOperatorFunction(source: Observable<T>): Observable<T> {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}

class DoOperator<T> implements Operator<T, T> {
  constructor(private nextOrObserver?: PartialObserver<T> | ((x: T) => void),
              private error?: (e: any) => void,
              private complete?: () => void) {
  }
  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */

class TapSubscriber<T> extends Subscriber<T> {
  private _context: any;

  private _tapNext: ((value: T) => void) = noop;

  private _tapError: ((err: any) => void) = noop;

  private _tapComplete: (() => void) = noop;

  constructor(destination: Subscriber<T>,
              observerOrNext?: PartialObserver<T> | ((value: T) => void),
              error?: (e?: any) => void,
              complete?: () => void) {
      super(destination);
      this._tapError = error || noop;
      this._tapComplete = complete || noop;
      if (isFunction(observerOrNext)) {
        this._context = this;
        this._tapNext = observerOrNext;
      } else if (observerOrNext) {
        this._context = observerOrNext;
        this._tapNext = observerOrNext.next || noop;
        this._tapError = observerOrNext.error || noop;
        this._tapComplete = observerOrNext.complete || noop;
      }
    }

  _next(value: T) {
    try {
      this._tapNext.call(this._context, value);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(value);
  }

  _error(err: any) {
    try {
      this._tapError.call(this._context, err);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.error(err);
  }

  _complete() {
    try {
      this._tapComplete.call(this._context, );
    } catch (err) {
      this.destination.error(err);
      return;
    }
    return this.destination.complete();
  }
}
