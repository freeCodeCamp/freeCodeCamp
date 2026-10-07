import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';

import { MonoTypeOperatorFunction, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * ![](sample.png)
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * ## Example
 * On every click, sample the most recent "seconds" timer
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { sample } from 'rxjs/operators';
 *
 * const seconds = interval(1000);
 * const clicks = fromEvent(document, 'click');
 * const result = seconds.pipe(sample(clicks));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
export function sample<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SampleOperator(notifier));
}

class SampleOperator<T> implements Operator<T, T> {
  constructor(private notifier: Observable<any>) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    const sampleSubscriber = new SampleSubscriber(subscriber);
    const subscription = source.subscribe(sampleSubscriber);
    subscription.add(innerSubscribe(this.notifier, new SimpleInnerSubscriber(sampleSubscriber)));
    return subscription;
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SampleSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  private value?: T;
  private hasValue: boolean = false;

  protected _next(value: T) {
    this.value = value;
    this.hasValue = true;
  }

  notifyNext(): void {
    this.emitValue();
  }

  notifyComplete(): void {
    this.emitValue();
  }

  emitValue() {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next!(this.value!);
    }
  }
}
