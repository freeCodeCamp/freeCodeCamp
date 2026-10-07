import { Subscriber } from '../Subscriber';

/**
 * Subscribes to an ArrayLike with a subscriber
 * @param array The array or array-like to subscribe to
 */
export const subscribeToArray = <T>(array: ArrayLike<T>) => (subscriber: Subscriber<T>) => {
  for (let i = 0, len = array.length; i < len && !subscriber.closed; i++) {
    subscriber.next(array[i]);
  }
  subscriber.complete();
};
