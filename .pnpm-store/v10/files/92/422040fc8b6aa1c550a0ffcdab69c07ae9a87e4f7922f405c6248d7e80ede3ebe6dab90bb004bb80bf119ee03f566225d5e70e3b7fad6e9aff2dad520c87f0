import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { subscribeToResult } from '../util/subscribeToResult';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
import { OperatorFunction, SubscribableOrPromise } from '../types';

/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * ![](bufferToggle.png)
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * ## Example
 *
 * Every other second, emit the click events from the next 500ms
 *
 * ```ts
 * import { fromEvent, interval, EMPTY } from 'rxjs';
 * import { bufferToggle } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const openings = interval(1000);
 * const buffered = clicks.pipe(bufferToggle(openings, i =>
 *   i % 2 ? interval(500) : EMPTY
 * ));
 * buffered.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
export function bufferToggle<T, O>(
  openings: SubscribableOrPromise<O>,
  closingSelector: (value: O) => SubscribableOrPromise<any>
): OperatorFunction<T, T[]> {
  return function bufferToggleOperatorFunction(source: Observable<T>) {
    return source.lift(new BufferToggleOperator<T, O>(openings, closingSelector));
  };
}

class BufferToggleOperator<T, O> implements Operator<T, T[]> {

  constructor(private openings: SubscribableOrPromise<O>,
              private closingSelector: (value: O) => SubscribableOrPromise<any>) {
  }

  call(subscriber: Subscriber<T[]>, source: any): any {
    return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
  }
}

interface BufferContext<T> {
  buffer: T[];
  subscription: Subscription;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class BufferToggleSubscriber<T, O> extends OuterSubscriber<T, O> {
  private contexts: Array<BufferContext<T>> = [];

  constructor(destination: Subscriber<T[]>,
              openings: SubscribableOrPromise<O>,
              private closingSelector: (value: O) => SubscribableOrPromise<any> | void) {
    super(destination);
    this.add(subscribeToResult(this, openings));
  }

  protected _next(value: T): void {
    const contexts = this.contexts;
    const len = contexts.length;
    for (let i = 0; i < len; i++) {
      contexts[i].buffer.push(value);
    }
  }

  protected _error(err: any): void {
    const contexts = this.contexts;
    while (contexts.length > 0) {
      const context = contexts.shift()!;
      context.subscription.unsubscribe();
      context.buffer = null!;
      context.subscription = null!;
    }
    this.contexts = null!;
    super._error(err);
  }

  protected _complete(): void {
    const contexts = this.contexts;
    while (contexts.length > 0) {
      const context = contexts.shift()!;
      this.destination.next!(context.buffer);
      context.subscription.unsubscribe();
      context.buffer = null!;
      context.subscription = null!;
    }
    this.contexts = null!;
    super._complete();
  }

  notifyNext(outerValue: any, innerValue: O): void {
    outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
  }

  notifyComplete(innerSub: InnerSubscriber<T, O>): void {
    this.closeBuffer((<any> innerSub).context);
  }

  private openBuffer(value: O): void {
    try {
      const closingSelector = this.closingSelector;
      const closingNotifier = closingSelector.call(this, value);
      if (closingNotifier) {
        this.trySubscribe(closingNotifier);
      }
    } catch (err) {
      this._error(err);
    }
  }

  private closeBuffer(context: BufferContext<T>): void {
    const contexts = this.contexts;

    if (contexts && context) {
      const { buffer, subscription } = context;
      this.destination.next!(buffer);
      contexts.splice(contexts.indexOf(context), 1);
      this.remove(subscription);
      subscription.unsubscribe();
    }
  }

  private trySubscribe(closingNotifier: any): void {
    const contexts = this.contexts;

    const buffer: Array<T> = [];
    const subscription = new Subscription();
    const context = { buffer, subscription };
    contexts.push(context);

    const innerSubscription = subscribeToResult(this, closingNotifier, context as any);

    if (!innerSubscription || innerSubscription.closed) {
      this.closeBuffer(context);
    } else {
      (innerSubscription as any).context = context;

      this.add(innerSubscription);
      subscription.add(innerSubscription);
    }
  }
}
