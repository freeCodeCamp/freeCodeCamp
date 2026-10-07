/** @prettier */
import { Subscription } from './Subscription';
import { Subscriber } from './Subscriber';
import { Observable } from './Observable';
import { subscribeTo } from './util/subscribeTo';

interface SimpleOuterSubscriberLike<T> {
  /**
   * A handler for inner next notifications from the inner subscription
   * @param innerValue the value nexted by the inner producer
   */
  notifyNext(innerValue: T): void;
  /**
   * A handler for inner error notifications from the inner subscription
   * @param err the error from the inner producer
   */
  notifyError(err: any): void;
  /**
   * A handler for inner complete notifications from the inner subscription.
   */
  notifyComplete(): void;
}

export class SimpleInnerSubscriber<T> extends Subscriber<T> {
  constructor(private parent: SimpleOuterSubscriberLike<any>) {
    super();
  }

  protected _next(value: T): void {
    this.parent.notifyNext(value);
  }

  protected _error(error: any): void {
    this.parent.notifyError(error);
    this.unsubscribe();
  }

  protected _complete(): void {
    this.parent.notifyComplete();
    this.unsubscribe();
  }
}

export class ComplexInnerSubscriber<T, R> extends Subscriber<R> {
  constructor(private parent: ComplexOuterSubscriber<T, R>, public outerValue: T, public outerIndex: number) {
    super();
  }

  protected _next(value: R): void {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
  }

  protected _error(error: any): void {
    this.parent.notifyError(error);
    this.unsubscribe();
  }

  protected _complete(): void {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  }
}

export class SimpleOuterSubscriber<T, R> extends Subscriber<T> implements SimpleOuterSubscriberLike<R> {
  notifyNext(innerValue: R): void {
    this.destination.next(innerValue);
  }

  notifyError(err: any): void {
    this.destination.error(err);
  }

  notifyComplete(): void {
    this.destination.complete();
  }
}

/**
 * DO NOT USE (formerly "OuterSubscriber")
 * TODO: We want to refactor this and remove it. It is retaining values it shouldn't for long
 * periods of time.
 */
export class ComplexOuterSubscriber<T, R> extends Subscriber<T> {
  /**
   * @param _outerValue Used by: bufferToggle, delayWhen, windowToggle
   * @param innerValue Used by: subclass default, combineLatest, race, bufferToggle, windowToggle, withLatestFrom
   * @param _outerIndex Used by: combineLatest, race, withLatestFrom
   * @param _innerSub Used by: delayWhen
   */
  notifyNext(_outerValue: T, innerValue: R, _outerIndex: number, _innerSub: ComplexInnerSubscriber<T, R>): void {
    this.destination.next(innerValue);
  }

  notifyError(error: any): void {
    this.destination.error(error);
  }

  /**
   * @param _innerSub Used by: race, bufferToggle, delayWhen, windowToggle, windowWhen
   */
  notifyComplete(_innerSub: ComplexInnerSubscriber<T, R>): void {
    this.destination.complete();
  }
}

export function innerSubscribe(result: any, innerSubscriber: Subscriber<any>): Subscription | undefined {
  if (innerSubscriber.closed) {
    return undefined;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  let subscription: Subscription;
  try {
    subscription = subscribeTo(result)(innerSubscriber) as Subscription;
  } catch (error) {
    innerSubscriber.error(error);
  }
  return subscription;
}
