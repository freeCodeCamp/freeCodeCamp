import { Observable } from '../Observable';
import { BehaviorSubject } from '../BehaviorSubject';
import { multicast } from './multicast';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { UnaryFunction } from '../types';

/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
export function publishBehavior<T>(value: T):  UnaryFunction<Observable<T>, ConnectableObservable<T>> {
  return (source: Observable<T>) => multicast(new BehaviorSubject<T>(value))(source) as ConnectableObservable<T>;
}
