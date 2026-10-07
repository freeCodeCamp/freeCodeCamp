import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Notification } from '../Notification';
import { MonoTypeOperatorFunction, PartialObserver, SchedulerAction, SchedulerLike, TeardownLogic } from '../types';

/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * ## Example
 * Ensure values in subscribe are called just before browser repaint.
 * ```ts
 * import { interval } from 'rxjs';
 * import { observeOn } from 'rxjs/operators';
 *
 * const intervals = interval(10);                // Intervals are scheduled
 *                                                // with async scheduler by default...
 * intervals.pipe(
 *   observeOn(animationFrameScheduler),          // ...but we will observe on animationFrame
 * )                                              // scheduler to ensure smooth animation.
 * .subscribe(val => {
 *   someDiv.style.height = val + 'px';
 * });
 * ```
 *
 * @see {@link delay}
 *
 * @param {SchedulerLike} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
export function observeOn<T>(scheduler: SchedulerLike, delay: number = 0): MonoTypeOperatorFunction<T> {
  return function observeOnOperatorFunction(source: Observable<T>): Observable<T> {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

export class ObserveOnOperator<T> implements Operator<T, T> {
  constructor(private scheduler: SchedulerLike, private delay: number = 0) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class ObserveOnSubscriber<T> extends Subscriber<T> {
  /** @nocollapse */
  static dispatch(this: SchedulerAction<ObserveOnMessage>, arg: ObserveOnMessage) {
    const { notification, destination } = arg;
    notification.observe(destination);
    this.unsubscribe();
  }

  constructor(destination: Subscriber<T>,
              private scheduler: SchedulerLike,
              private delay: number = 0) {
    super(destination);
  }

  private scheduleMessage(notification: Notification<any>): void {
    const destination = this.destination as Subscription;
    destination.add(this.scheduler.schedule(
      ObserveOnSubscriber.dispatch,
      this.delay,
      new ObserveOnMessage(notification, this.destination)
    ));
  }

  protected _next(value: T): void {
    this.scheduleMessage(Notification.createNext(value));
  }

  protected _error(err: any): void {
    this.scheduleMessage(Notification.createError(err));
    this.unsubscribe();
  }

  protected _complete(): void {
    this.scheduleMessage(Notification.createComplete());
    this.unsubscribe();
  }
}

export class ObserveOnMessage {
  constructor(public notification: Notification<any>,
              public destination: PartialObserver<any>) {
  }
}
