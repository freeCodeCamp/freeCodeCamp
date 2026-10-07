import { Subscriber } from '../Subscriber';
import { observable as Symbol_observable } from '../symbol/observable';

/**
 * Subscribes to an object that implements Symbol.observable with the given
 * Subscriber.
 * @param obj An object that implements Symbol.observable
 */
export const subscribeToObservable = <T>(obj: any) => (subscriber: Subscriber<T>) => {
  const obs = obj[Symbol_observable]();
  if (typeof obs.subscribe !== 'function') {
    // Should be caught by observable subscribe function error handling.
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  } else {
    return obs.subscribe(subscriber);
  }
};
