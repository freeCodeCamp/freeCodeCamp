import { MonoTypeOperatorFunction } from '../types';
/**
 * If the source observable completes without emitting a value, it will emit
 * an error. The error will be created at that time by the optional
 * `errorFactory` argument, otherwise, the error will be {@link EmptyError}.
 *
 * ![](throwIfEmpty.png)
 *
 * ## Example
 * ```ts
 * import { fromEvent, timer } from 'rxjs';
 * import { throwIfEmpty, takeUntil } from 'rxjs/operators';
 *
 * const click$ = fromEvent(document, 'click');
 *
 * click$.pipe(
 *   takeUntil(timer(1000)),
 *   throwIfEmpty(
 *     () => new Error('the document was not clicked within 1 second')
 *   ),
 * )
 * .subscribe({
 *   next() { console.log('The button was clicked'); },
 *   error(err) { console.error(err); }
 * });
 * ```
 *
 * @param errorFactory A factory function called to produce the
 * error to be thrown when the source observable completes without emitting a
 * value.
 */
export declare function throwIfEmpty<T>(errorFactory?: (() => any)): MonoTypeOperatorFunction<T>;
