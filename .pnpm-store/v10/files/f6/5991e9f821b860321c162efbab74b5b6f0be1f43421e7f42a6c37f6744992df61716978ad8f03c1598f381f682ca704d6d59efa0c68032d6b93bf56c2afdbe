import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { Subscription } from '../Subscription';

import { MonoTypeOperatorFunction, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * ![](retryWhen.png)
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
export function retryWhen<T>(notifier: (errors: Observable<any>) => Observable<any>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new RetryWhenOperator(notifier, source));
}

class RetryWhenOperator<T> implements Operator<T, T> {
  constructor(protected notifier: (errors: Observable<any>) => Observable<any>,
              protected source: Observable<T>) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class RetryWhenSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {

  private errors?: Subject<any>;
  private retries?: Observable<any>;
  private retriesSubscription?: Subscription;

  constructor(destination: Subscriber<R>,
              private notifier: (errors: Observable<any>) => Observable<any>,
              private source: Observable<T>) {
    super(destination);
  }

  error(err: any) {
    if (!this.isStopped) {

      let errors = this.errors;
      let retries: any = this.retries;
      let retriesSubscription = this.retriesSubscription;

      if (!retries) {
        errors = new Subject();
        try {
          const { notifier } = this;
          retries = notifier(errors);
        } catch (e) {
          return super.error(e);
        }
        retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
      } else {
        this.errors = undefined;
        this.retriesSubscription = undefined;
      }

      this._unsubscribeAndRecycle();

      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;

      errors!.next(err);
    }
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    const { errors, retriesSubscription } = this;
    if (errors) {
      errors.unsubscribe();
      this.errors = undefined;
    }
    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = undefined;
    }
    this.retries = undefined;
  }

  notifyNext(): void {
    const { _unsubscribe } = this;

    this._unsubscribe = null!;
    this._unsubscribeAndRecycle();
    this._unsubscribe = _unsubscribe;

    this.source.subscribe(this);
  }
}
