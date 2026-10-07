import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { OperatorFunction } from '../types';

/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * ![](windowCount.png)
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * ## Examples
 * Ignore every 3rd click event, starting from the first one
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { windowCount, map, mergeAll, skip } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(
 *   windowCount(3),
 *   map(win => win.pipe(skip(1))), // skip first of every 3 clicks
 *   mergeAll()                     // flatten the Observable-of-Observables
 * );
 * result.subscribe(x => console.log(x));
 * ```
 *
 * Ignore every 3rd click event, starting from the third one
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { windowCount, mergeAll } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(
 *   windowCount(2, 3),
 *   mergeAll(),              // flatten the Observable-of-Observables
 * );
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
export function windowCount<T>(windowSize: number,
                               startWindowEvery: number = 0): OperatorFunction<T, Observable<T>> {
  return function windowCountOperatorFunction(source: Observable<T>) {
    return source.lift(new WindowCountOperator<T>(windowSize, startWindowEvery));
  };
}

class WindowCountOperator<T> implements Operator<T, Observable<T>> {

  constructor(private windowSize: number,
              private startWindowEvery: number) {
  }

  call(subscriber: Subscriber<Observable<T>>, source: any): any {
    return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class WindowCountSubscriber<T> extends Subscriber<T> {
  private windows: Subject<T>[] = [ new Subject<T>() ];
  private count: number = 0;

  constructor(protected destination: Subscriber<Observable<T>>,
              private windowSize: number,
              private startWindowEvery: number) {
    super(destination);
    destination.next(this.windows[0]);
  }

  protected _next(value: T) {
    const startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
    const destination = this.destination;
    const windowSize = this.windowSize;
    const windows = this.windows;
    const len = windows.length;

    for (let i = 0; i < len && !this.closed; i++) {
      windows[i].next(value);
    }
    const c = this.count - windowSize + 1;
    if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
      windows.shift().complete();
    }
    if (++this.count % startWindowEvery === 0 && !this.closed) {
      const window = new Subject<T>();
      windows.push(window);
      destination.next(window);
    }
  }

  protected _error(err: any) {
    const windows = this.windows;
    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().error(err);
      }
    }
    this.destination.error(err);
  }

  protected _complete() {
    const windows = this.windows;
    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().complete();
      }
    }
    this.destination.complete();
  }

  protected _unsubscribe() {
    this.count = 0;
    this.windows = null;
  }
}
