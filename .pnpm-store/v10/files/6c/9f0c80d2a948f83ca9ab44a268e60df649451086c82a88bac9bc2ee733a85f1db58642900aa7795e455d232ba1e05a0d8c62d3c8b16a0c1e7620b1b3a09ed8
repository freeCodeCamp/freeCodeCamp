import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { OperatorFunction } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * ![](buffer.png)
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * ## Example
 *
 * On every click, emit array of most recent interval events
 *
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { buffer } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const intervalEvents = interval(1000);
 * const buffered = intervalEvents.pipe(buffer(clicks));
 * buffered.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
export function buffer<T>(closingNotifier: Observable<any>): OperatorFunction<T, T[]> {
  return function bufferOperatorFunction(source: Observable<T>) {
    return source.lift(new BufferOperator<T>(closingNotifier));
  };
}

class BufferOperator<T> implements Operator<T, T[]> {

  constructor(private closingNotifier: Observable<any>) {
  }

  call(subscriber: Subscriber<T[]>, source: any): any {
    return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class BufferSubscriber<T> extends SimpleOuterSubscriber<T, any> {
  private buffer: T[] = [];

  constructor(destination: Subscriber<T[]>, closingNotifier: Observable<any>) {
    super(destination);
    this.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(this)));
  }

  protected _next(value: T) {
    this.buffer.push(value);
  }

  notifyNext(): void {
    const buffer = this.buffer;
    this.buffer = [];
    this.destination.next!(buffer);
  }
}
