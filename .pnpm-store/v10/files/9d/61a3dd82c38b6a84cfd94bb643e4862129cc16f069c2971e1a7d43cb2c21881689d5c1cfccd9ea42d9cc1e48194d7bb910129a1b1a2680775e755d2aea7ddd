import { Observable } from '../Observable';
import { OperatorFunction } from '../types';
import { Subject } from '../Subject';
import { Subscriber } from '../Subscriber';
import { Operator } from '../Operator';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * ![](window.png)
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * ## Example
 * In every window of 1 second each, emit at most 2 click events
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { window, mergeAll, map, take } from 'rxjs/operators';
 *
 *  const clicks = fromEvent(document, 'click');
 *  const sec = interval(1000);
 *  const result = clicks.pipe(
 *      window(sec),
 *      map(win => win.pipe(take(2))), // each window has at most 2 emissions
 *      mergeAll(),              // flatten the Observable-of-Observables
 *  );
 *  result.subscribe(x => console.log(x));
 * ```
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
export function window<T>(windowBoundaries: Observable<any>): OperatorFunction<T, Observable<T>> {
  return function windowOperatorFunction(source: Observable<T>) {
    return source.lift(new WindowOperator(windowBoundaries));
  };
}

class WindowOperator<T> implements Operator<T, Observable<T>> {

  constructor(private windowBoundaries: Observable<any>) {
  }

  call(subscriber: Subscriber<Observable<T>>, source: any): any {
    const windowSubscriber = new WindowSubscriber(subscriber);
    const sourceSubscription = source.subscribe(windowSubscriber);
    if (!sourceSubscription.closed) {
      windowSubscriber.add(innerSubscribe(this.windowBoundaries, new SimpleInnerSubscriber(windowSubscriber)));
    }
    return sourceSubscription;
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class WindowSubscriber<T> extends SimpleOuterSubscriber<T, any> {

  private window: Subject<T> = new Subject<T>();

  constructor(destination: Subscriber<Observable<T>>) {
    super(destination);
    destination.next(this.window);
  }

  notifyNext(): void {
    this.openWindow();
  }

  notifyError(error: any): void {
    this._error(error);
  }

  notifyComplete(): void {
    this._complete();
  }

  protected _next(value: T): void {
    this.window.next(value);
  }

  protected _error(err: any): void {
    this.window.error(err);
    this.destination.error!(err);
  }

  protected _complete(): void {
    this.window.complete();
    this.destination.complete!();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    this.window = null!;
  }

  private openWindow(): void  {
    const prevWindow = this.window;
    if (prevWindow) {
      prevWindow.complete();
    }
    const destination = this.destination;
    const newWindow = this.window = new Subject<T>();
    destination.next!(newWindow);
  }
}
