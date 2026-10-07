import { Observable } from '../Observable';
import { MonoTypeOperatorFunction } from '../types';
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * ![](repeatWhen.png)
 *
 * ## Example
 * Repeat a message stream on click
 * ```ts
 * import { of, fromEvent } from 'rxjs';
 * import { repeatWhen } from 'rxjs/operators';
 *
 * const source = of('Repeat message');
 * const documentClick$ = fromEvent(document, 'click');
 *
 * source.pipe(repeatWhen(() => documentClick$)
 * ).subscribe(data => console.log(data))
 * ```
 * @see {@link repeat}
 * @see {@link retry}
 * @see {@link retryWhen}
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
export declare function repeatWhen<T>(notifier: (notifications: Observable<any>) => Observable<any>): MonoTypeOperatorFunction<T>;
