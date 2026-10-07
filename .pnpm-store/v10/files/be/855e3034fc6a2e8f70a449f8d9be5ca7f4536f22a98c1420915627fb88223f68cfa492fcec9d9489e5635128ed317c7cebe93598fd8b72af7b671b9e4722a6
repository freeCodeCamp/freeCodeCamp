import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { async } from '../scheduler/async';
import { Observable } from '../Observable';
import { isDate } from '../util/isDate';
import { ObservableInput, OperatorFunction, SchedulerAction, SchedulerLike, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/* tslint:disable:max-line-length */
export function timeoutWith<T, R>(due: number | Date, withObservable: ObservableInput<R>, scheduler?: SchedulerLike): OperatorFunction<T, T | R>;
/* tslint:enable:max-line-length */

/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * ![](timeoutWith.png)
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * ## Example
 * Add fallback observable
 * ```ts
 * import { interval } from 'rxjs';
 * import { timeoutWith } from 'rxjs/operators';
 *
 * const seconds = interval(1000);
 * const minutes = interval(60 * 1000);
 *
 * seconds.pipe(timeoutWith(900, minutes))
 *   .subscribe(
 *     value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                  // since first value of `seconds` will not arrive fast enough.
 *     err => console.log(err),     // Would be called after 900ms in case of `timeout`,
 *                                  // but here will never be called.
 *   );
 * ```
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {SchedulerLike} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
export function timeoutWith<T, R>(due: number | Date,
                                  withObservable: ObservableInput<R>,
                                  scheduler: SchedulerLike = async): OperatorFunction<T, T | R> {
  return (source: Observable<T>) => {
    let absoluteTimeout = isDate(due);
    let waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(<number>due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}

class TimeoutWithOperator<T> implements Operator<T, T> {
  constructor(private waitFor: number,
              private absoluteTimeout: boolean,
              private withObservable: ObservableInput<any>,
              private scheduler: SchedulerLike) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new TimeoutWithSubscriber(
      subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler
    ));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class TimeoutWithSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {

  private action?: SchedulerAction<TimeoutWithSubscriber<T, R>>;

  constructor(destination: Subscriber<T>,
              private absoluteTimeout: boolean,
              private waitFor: number,
              private withObservable: ObservableInput<any>,
              private scheduler: SchedulerLike) {
    super(destination);
    this.scheduleTimeout();
  }

  private static dispatchTimeout<T, R>(subscriber: TimeoutWithSubscriber<T, R>): void {
    const { withObservable } = subscriber;
    subscriber._unsubscribeAndRecycle();
    subscriber.add(innerSubscribe(withObservable, new SimpleInnerSubscriber(subscriber)));
  }

  private scheduleTimeout(): void {
    const { action } = this;
    if (action) {
      // Recycle the action if we've already scheduled one. All the production
      // Scheduler Actions mutate their state/delay time and return themeselves.
      // VirtualActions are immutable, so they create and return a clone. In this
      // case, we need to set the action reference to the most recent VirtualAction,
      // to ensure that's the one we clone from next time.
      this.action = (<SchedulerAction<TimeoutWithSubscriber<T, R>>> action.schedule(this, this.waitFor));
    } else {
      this.add(this.action = (<SchedulerAction<TimeoutWithSubscriber<T, R>>> this.scheduler.schedule<TimeoutWithSubscriber<T, R>>(
        TimeoutWithSubscriber.dispatchTimeout as any, this.waitFor, this
      )));
    }
  }

  protected _next(value: T): void {
    if (!this.absoluteTimeout) {
      this.scheduleTimeout();
    }
    super._next(value);
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    this.action = undefined;
    this.scheduler = null!;
    this.withObservable = null!;
  }
}
