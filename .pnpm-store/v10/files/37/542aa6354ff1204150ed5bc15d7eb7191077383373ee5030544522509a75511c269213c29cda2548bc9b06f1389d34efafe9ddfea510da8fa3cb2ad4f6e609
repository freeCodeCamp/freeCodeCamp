import { Subscriber } from '../Subscriber';
import { hostReportError } from './hostReportError';

export const subscribeToPromise = <T>(promise: PromiseLike<T>) => (subscriber: Subscriber<T>) => {
  promise.then(
    (value) => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    },
    (err: any) => subscriber.error(err)
  )
  .then(null, hostReportError);
  return subscriber;
};
