import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { Subscription } from '../Subscription';

import { MonoTypeOperatorFunction, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * ![](repeatWhen.png)
 *
 * ## Example
 * Repeat a message stream on click
 * ```ts
 * import { of, fromEvent } from 'rxjs';
 * import { repeatWhen } from 'rxjs/operators';
 *
 * const source = of('Repeat message');
 * const documentClick$ = fromEvent(document, 'click');
 *
 * source.pipe(repeatWhen(() => documentClick$)
 * ).subscribe(data => console.log(data))
 * ```
 * @see {@link repeat}
 * @see {@link retry}
 * @see {@link retryWhen}
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
export function repeatWhen<T>(notifier: (notifications: Observable<any>) => Observable<any>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new RepeatWhenOperator(notifier));
}

class RepeatWhenOperator<T> implements Operator<T, T> {
  constructor(protected notifier: (notifications: Observable<any>) => Observable<any>) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class RepeatWhenSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {

  private notifications?: Subject<any>;
  private retries?: Observable<any>;
  private retriesSubscription?: Subscription;
  private sourceIsBeingSubscribedTo: boolean = true;

  constructor(destination: Subscriber<R>,
              private notifier: (notifications: Observable<any>) => Observable<any>,
              private source: Observable<T>) {
    super(destination);
  }

  notifyNext(): void {
    this.sourceIsBeingSubscribedTo = true;
    this.source.subscribe(this);
  }

  notifyComplete(): void {
    if (this.sourceIsBeingSubscribedTo === false) {
      return super.complete();
    }
  }

  complete() {
    this.sourceIsBeingSubscribedTo = false;

    if (!this.isStopped) {
      if (!this.retries) {
        this.subscribeToRetries();
      }
      if (!this.retriesSubscription || this.retriesSubscription.closed) {
        return super.complete();
      }

      this._unsubscribeAndRecycle();
      this.notifications!.next(undefined);
    }
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    const { notifications, retriesSubscription } = this;
    if (notifications) {
      notifications.unsubscribe();
      this.notifications = undefined;
    }
    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = undefined;
    }
    this.retries = undefined;
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribeAndRecycle(): Subscriber<T> {
    const { _unsubscribe } = this;

    this._unsubscribe = null!;
    super._unsubscribeAndRecycle();
    this._unsubscribe = _unsubscribe;

    return this;
  }

  private subscribeToRetries() {
    this.notifications = new Subject();
    let retries;
    try {
      const { notifier } = this;
      retries = notifier(this.notifications);
    } catch (e) {
      return super.complete();
    }
    this.retries = retries;
    this.retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
  }
}
