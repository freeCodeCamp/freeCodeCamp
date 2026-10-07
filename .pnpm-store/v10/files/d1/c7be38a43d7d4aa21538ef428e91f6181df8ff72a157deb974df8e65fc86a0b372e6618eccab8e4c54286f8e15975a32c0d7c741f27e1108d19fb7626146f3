import { Observable } from '../Observable';
import { isArray } from '../util/isArray';
import { isFunction } from '../util/isFunction';
import { NodeEventHandler } from './fromEvent';
import { map } from '../operators/map';

/* tslint:disable:max-line-length */
export function fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any, removeHandler?: (handler: NodeEventHandler, signal?: any) => void): Observable<T>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export function fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any, removeHandler?: (handler: NodeEventHandler, signal?: any) => void, resultSelector?: (...args: any[]) => T): Observable<T>;
/* tslint:enable:max-line-length */

/**
 * Creates an Observable from an arbitrary API for registering event handlers.
 *
 * <span class="informal">When that method for adding event handler was something {@link fromEvent}
 * was not prepared for.</span>
 *
 * ![](fromEventPattern.png)
 *
 * `fromEventPattern` allows you to convert into an Observable any API that supports registering handler functions
 * for events. It is similar to {@link fromEvent}, but far
 * more flexible. In fact, all use cases of {@link fromEvent} could be easily handled by
 * `fromEventPattern` (although in slightly more verbose way).
 *
 * This operator accepts as a first argument an `addHandler` function, which will be injected with
 * handler parameter. That handler is actually an event handler function that you now can pass
 * to API expecting it. `addHandler` will be called whenever Observable
 * returned by the operator is subscribed, so registering handler in API will not
 * necessarily happen when `fromEventPattern` is called.
 *
 * After registration, every time an event that we listen to happens,
 * Observable returned by `fromEventPattern` will emit value that event handler
 * function was called with. Note that if event handler was called with more
 * then one argument, second and following arguments will not appear in the Observable.
 *
 * If API you are using allows to unregister event handlers as well, you can pass to `fromEventPattern`
 * another function - `removeHandler` - as a second parameter. It will be injected
 * with the same handler function as before, which now you can use to unregister
 * it from the API. `removeHandler` will be called when consumer of resulting Observable
 * unsubscribes from it.
 *
 * In some APIs unregistering is actually handled differently. Method registering an event handler
 * returns some kind of token, which is later used to identify which function should
 * be unregistered or it itself has method that unregisters event handler.
 * If that is the case with your API, make sure token returned
 * by registering method is returned by `addHandler`. Then it will be passed
 * as a second argument to `removeHandler`, where you will be able to use it.
 *
 * If you need access to all event handler parameters (not only the first one),
 * or you need to transform them in any way, you can call `fromEventPattern` with optional
 * third parameter - project function which will accept all arguments passed to
 * event handler when it is called. Whatever is returned from project function will appear on
 * resulting stream instead of usual event handlers first argument. This means
 * that default project can be thought of as function that takes its first parameter
 * and ignores the rest.
 *
 * ## Example
 * ### Emits clicks happening on the DOM document
 *
 * ```ts
 * import { fromEventPattern } from 'rxjs';
 *
 * function addClickHandler(handler) {
 *   document.addEventListener('click', handler);
 * }
 *
 * function removeClickHandler(handler) {
 *   document.removeEventListener('click', handler);
 * }
 *
 * const clicks = fromEventPattern(
 *   addClickHandler,
 *   removeClickHandler
 * );
 * clicks.subscribe(x => console.log(x));
 *
 * // Whenever you click anywhere in the browser, DOM MouseEvent
 * // object will be logged.
 * ```
 *
 * ## Example
 * ### Use with API that returns cancellation token
 *
 * ```ts
 * import { fromEventPattern } from 'rxjs';
 *
 * const token = someAPI.registerEventHandler(function() {});
 * someAPI.unregisterEventHandler(token); // this APIs cancellation method accepts
 *                                        // not handler itself, but special token.
 *
 * const someAPIObservable = fromEventPattern(
 *   function(handler) { return someAPI.registerEventHandler(handler); }, // Note that we return the token here...
 *   function(handler, token) { someAPI.unregisterEventHandler(token); }  // ...to then use it here.
 * );
 * ```
 *
 * ## Example
 * ### Use with project function
 *
 * ```ts
 * import { fromEventPattern } from 'rxjs';
 *
 * someAPI.registerEventHandler((eventType, eventMessage) => {
 *   console.log(eventType, eventMessage); // Logs "EVENT_TYPE" "EVENT_MESSAGE" to console.
 * });
 *
 * const someAPIObservable = fromEventPattern(
 *   handler => someAPI.registerEventHandler(handler),
 *   handler => someAPI.unregisterEventHandler(handler)
 *   (eventType, eventMessage) => eventType + " --- " + eventMessage // without that function only "EVENT_TYPE"
 * );                                                                // would be emitted by the Observable
 *
 * someAPIObservable.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "EVENT_TYPE --- EVENT_MESSAGE"
 * ```
 *
 * @see {@link fromEvent}
 * @see {@link bindCallback}
 * @see {@link bindNodeCallback}
 *
 * @param {function(handler: Function): any} addHandler A function that takes
 * a `handler` function as argument and attaches it somehow to the actual
 * source of events.
 * @param {function(handler: Function, token?: any): void} [removeHandler] A function that
 * takes a `handler` function as an argument and removes it from the event source. If `addHandler`
 * returns some kind of token, `removeHandler` function will have it as a second parameter.
 * @param {function(...args: any): T} [project] A function to
 * transform results. It takes the arguments from the event handler and
 * should return a single value.
 * @return {Observable<T>} Observable which, when an event happens, emits first parameter
 * passed to registered event handler. Alternatively it emits whatever project function returns
 * at that moment.
 * @static true
 * @name fromEventPattern
 * @owner Observable
 */

export function fromEventPattern<T>(addHandler: (handler: NodeEventHandler) => any,
                                    removeHandler?: (handler: NodeEventHandler, signal?: any) => void,
                                    resultSelector?: (...args: any[]) => T): Observable<T | T[]> {

  if (resultSelector) {
    // DEPRECATED PATH
    return fromEventPattern<T>(addHandler, removeHandler).pipe(
      map(args => isArray(args) ? resultSelector(...args) : resultSelector(args))
    );
  }

  return new Observable<T | T[]>(subscriber => {
    const handler = (...e: T[]) => subscriber.next(e.length === 1 ? e[0] : e);

    let retValue: any;
    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!isFunction(removeHandler)) {
      return undefined;
    }

    return () => removeHandler(handler, retValue) ;
  });
}
