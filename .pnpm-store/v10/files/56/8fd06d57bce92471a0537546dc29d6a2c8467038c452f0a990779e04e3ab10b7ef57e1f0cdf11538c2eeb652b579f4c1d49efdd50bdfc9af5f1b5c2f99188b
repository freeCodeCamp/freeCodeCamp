import { ObservableInput } from '../types';
import { subscribeToArray } from './subscribeToArray';
import { subscribeToPromise } from './subscribeToPromise';
import { subscribeToIterable } from './subscribeToIterable';
import { subscribeToObservable } from './subscribeToObservable';
import { isArrayLike } from './isArrayLike';
import { isPromise } from './isPromise';
import { isObject } from './isObject';
import { iterator as Symbol_iterator } from '../symbol/iterator';
import { observable as Symbol_observable } from '../symbol/observable';
import { Subscription } from '../Subscription';
import { Subscriber } from '../Subscriber';

export const subscribeTo = <T>(result: ObservableInput<T>): (subscriber: Subscriber<T>) => Subscription | void => {
  if (!!result && typeof result[Symbol_observable] === 'function') {
    return subscribeToObservable(result as any);
  } else if (isArrayLike(result)) {
    return subscribeToArray(result);
  } else if (isPromise(result)) {
    return subscribeToPromise(result as Promise<any>);
  } else if (!!result && typeof result[Symbol_iterator] === 'function') {
    return subscribeToIterable(result as any);
  } else {
    const value = isObject(result) ? 'an invalid object' : `'${result}'`;
    const msg = `You provided ${value} where a stream was expected.`
      + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};
