import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { async } from '../scheduler/async';
import { MonoTypeOperatorFunction, SchedulerAction, SchedulerLike, TeardownLogic } from '../types';

/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * ![](sampleTime.png)
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * ## Example
 * Every second, emit the most recent click at most once
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { sampleTime } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(sampleTime(1000));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {SchedulerLike} [scheduler=async] The {@link SchedulerLike} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
export function sampleTime<T>(period: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SampleTimeOperator(period, scheduler));
}

class SampleTimeOperator<T> implements Operator<T, T> {
  constructor(private period: number,
              private scheduler: SchedulerLike) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SampleTimeSubscriber<T> extends Subscriber<T> {
  lastValue: T;
  hasValue: boolean = false;

  constructor(destination: Subscriber<T>,
              private period: number,
              private scheduler: SchedulerLike) {
    super(destination);
    this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period }));
  }

  protected _next(value: T) {
    this.lastValue = value;
    this.hasValue = true;
  }

  notifyNext() {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.lastValue);
    }
  }
}

function dispatchNotification<T>(this: SchedulerAction<any>, state: any) {
  let { subscriber, period } = state;
  subscriber.notifyNext();
  this.schedule(state, period);
}
