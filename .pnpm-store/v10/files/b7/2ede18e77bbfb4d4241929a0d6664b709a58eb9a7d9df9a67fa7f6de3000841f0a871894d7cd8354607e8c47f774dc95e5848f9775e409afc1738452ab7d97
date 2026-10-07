import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { OperatorFunction } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * ![](bufferWhen.png)
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * ## Example
 *
 * Emit an array of the last clicks every [1-5] random seconds
 *
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { bufferWhen } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const buffered = clicks.pipe(bufferWhen(() =>
 *   interval(1000 + Math.random() * 4000)
 * ));
 * buffered.subscribe(x => console.log(x));
 * ```
 *
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
export function bufferWhen<T>(closingSelector: () => Observable<any>): OperatorFunction<T, T[]> {
  return function (source: Observable<T>) {
    return source.lift(new BufferWhenOperator(closingSelector));
  };
}

class BufferWhenOperator<T> implements Operator<T, T[]> {

  constructor(private closingSelector: () => Observable<any>) {
  }

  call(subscriber: Subscriber<T[]>, source: any): any {
    return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class BufferWhenSubscriber<T> extends SimpleOuterSubscriber<T, any> {
  private buffer?: T[];
  private subscribing: boolean = false;
  private closingSubscription?: Subscription;

  constructor(destination: Subscriber<T[]>, private closingSelector: () => Observable<any>) {
    super(destination);
    this.openBuffer();
  }

  protected _next(value: T) {
    this.buffer!.push(value);
  }

  protected _complete() {
    const buffer = this.buffer;
    if (buffer) {
      this.destination.next!(buffer);
    }
    super._complete();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    this.buffer = undefined;
    this.subscribing = false;
  }

  notifyNext(): void {
    this.openBuffer();
  }

  notifyComplete(): void {
    if (this.subscribing) {
      this.complete();
    } else {
      this.openBuffer();
    }
  }

  openBuffer() {
    let { closingSubscription } = this;

    if (closingSubscription) {
      this.remove(closingSubscription);
      closingSubscription.unsubscribe();
    }

    const buffer = this.buffer;
    if (this.buffer) {
      this.destination.next!(buffer);
    }

    this.buffer = [];

    let closingNotifier;
    try {
      const { closingSelector } = this;
      closingNotifier = closingSelector();
    } catch (err) {
      return this.error(err);
    }
    closingSubscription = new Subscription();
    this.closingSubscription = closingSubscription;
    this.add(closingSubscription);
    this.subscribing = true;
    closingSubscription.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(this)));
    this.subscribing = false;
  }
}
