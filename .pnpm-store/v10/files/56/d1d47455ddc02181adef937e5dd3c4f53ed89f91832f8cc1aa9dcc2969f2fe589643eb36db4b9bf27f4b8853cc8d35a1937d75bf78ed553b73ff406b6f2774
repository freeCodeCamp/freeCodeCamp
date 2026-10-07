import { Observable } from '../Observable';
import { Unsubscribable, ObservableInput } from '../types';
import { from } from './from'; // from from from! LAWL
import { EMPTY } from './empty';

/**
 * Creates an Observable that uses a resource which will be disposed at the same time as the Observable.
 *
 * <span class="informal">Use it when you catch yourself cleaning up after an Observable.</span>
 *
 * `using` is a factory operator, which accepts two functions. First function returns a disposable resource.
 * It can be an arbitrary object that implements `unsubscribe` method. Second function will be injected with
 * that object and should return an Observable. That Observable can use resource object during its execution.
 * Both functions passed to `using` will be called every time someone subscribes - neither an Observable nor
 * resource object will be shared in any way between subscriptions.
 *
 * When Observable returned by `using` is subscribed, Observable returned from the second function will be subscribed
 * as well. All its notifications (nexted values, completion and error events) will be emitted unchanged by the output
 * Observable. If however someone unsubscribes from the Observable or source Observable completes or errors by itself,
 * the `unsubscribe` method on resource object will be called. This can be used to do any necessary clean up, which
 * otherwise would have to be handled by hand. Note that complete or error notifications are not emitted when someone
 * cancels subscription to an Observable via `unsubscribe`, so `using` can be used as a hook, allowing you to make
 * sure that all resources which need to exist during an Observable execution will be disposed at appropriate time.
 *
 * @see {@link defer}
 *
 * @param {function(): ISubscription} resourceFactory A function which creates any resource object
 * that implements `unsubscribe` method.
 * @param {function(resource: ISubscription): Observable<T>} observableFactory A function which
 * creates an Observable, that can use injected resource object.
 * @return {Observable<T>} An Observable that behaves the same as Observable returned by `observableFactory`, but
 * which - when completed, errored or unsubscribed - will also call `unsubscribe` on created resource object.
 */
export function using<T>(resourceFactory: () => Unsubscribable | void,
                         observableFactory: (resource: Unsubscribable | void) => ObservableInput<T> | void): Observable<T> {
  return new Observable<T>(subscriber => {
    let resource: Unsubscribable | void;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    let result: ObservableInput<T> | void;
    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    const source = result ? from(result) : EMPTY;
    const subscription = source.subscribe(subscriber);
    return () => {
      subscription.unsubscribe();
      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
