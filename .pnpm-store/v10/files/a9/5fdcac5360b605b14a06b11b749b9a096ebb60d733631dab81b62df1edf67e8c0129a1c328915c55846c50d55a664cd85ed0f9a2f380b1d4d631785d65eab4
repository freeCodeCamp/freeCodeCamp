import { Subject } from '../Subject';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { ConnectableObservable, connectableObservableDescriptor } from '../observable/ConnectableObservable';
import { MonoTypeOperatorFunction, OperatorFunction, UnaryFunction, ObservedValueOf, ObservableInput } from '../types';

/* tslint:disable:max-line-length */
export function multicast<T>(subject: Subject<T>): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export function multicast<T, O extends ObservableInput<any>>(subject: Subject<T>, selector: (shared: Observable<T>) => O): UnaryFunction<Observable<T>, ConnectableObservable<ObservedValueOf<O>>>;
export function multicast<T>(subjectFactory: (this: Observable<T>) => Subject<T>): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export function multicast<T, O extends ObservableInput<any>>(SubjectFactory: (this: Observable<T>) => Subject<T>, selector: (shared: Observable<T>) => O): OperatorFunction<T, ObservedValueOf<O>>;
/* tslint:enable:max-line-length */

/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * ![](multicast.png)
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} [selector] - Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} An Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
export function multicast<T, R>(subjectOrSubjectFactory: Subject<T> | (() => Subject<T>),
                                selector?: (source: Observable<T>) => Observable<R>): OperatorFunction<T, R> {
  return function multicastOperatorFunction(source: Observable<T>): Observable<R> {
    let subjectFactory: () => Subject<T>;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = <() => Subject<T>>subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return <Subject<T>>subjectOrSubjectFactory;
      };
    }

    if (typeof selector === 'function') {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }

    const connectable: any = Object.create(source, connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;

    return <ConnectableObservable<R>> connectable;
  };
}

export class MulticastOperator<T, R> implements Operator<T, R> {
  constructor(private subjectFactory: () => Subject<T>,
              private selector: (source: Observable<T>) => Observable<R>) {
  }
  call(subscriber: Subscriber<R>, source: any): any {
    const { selector } = this;
    const subject = this.subjectFactory();
    const subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  }
}
