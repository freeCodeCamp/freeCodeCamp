import { SchedulerLike, SchedulerAction } from '../types';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Observable } from '../Observable';
import { asap } from '../scheduler/asap';
import { isNumeric } from '../util/isNumeric';

export interface DispatchArg<T> {
  source: Observable<T>;
  subscriber: Subscriber<T>;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export class SubscribeOnObservable<T> extends Observable<T> {
  /** @nocollapse */
  static create<T>(source: Observable<T>, delay: number = 0, scheduler: SchedulerLike = asap): Observable<T> {
    return new SubscribeOnObservable(source, delay, scheduler);
  }

  /** @nocollapse */
  static dispatch<T>(this: SchedulerAction<T>, arg: DispatchArg<T>): Subscription {
    const { source, subscriber } = arg;
    return this.add(source.subscribe(subscriber));
  }

  constructor(public source: Observable<T>,
              private delayTime: number = 0,
              private scheduler: SchedulerLike = asap) {
    super();
    if (!isNumeric(delayTime) || delayTime < 0) {
      this.delayTime = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
      this.scheduler = asap;
    }
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>) {
    const delay = this.delayTime;
    const source = this.source;
    const scheduler = this.scheduler;

    return scheduler.schedule<DispatchArg<any>>(SubscribeOnObservable.dispatch, delay, {
      source, subscriber
    });
  }
}
