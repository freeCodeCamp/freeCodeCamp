import { Observable } from '../Observable';
import { MonoTypeOperatorFunction } from '../types';
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * items, notify of an IllegalArgumentException or NoSuchElementException respectively. If the source Observable
 * emits items but none match the specified predicate then `undefined` is emitted.
 *
 * <span class="informal">Like {@link first}, but emit with error notification if there is more than one value.</span>
 * ![](single.png)
 *
 * ## Example
 * emits 'error'
 * ```ts
 * import { range } from 'rxjs';
 * import { single } from 'rxjs/operators';
 *
 * const numbers = range(1,5).pipe(single());
 * numbers.subscribe(x => console.log('never get called'), e => console.log('error'));
 * // result
 * // 'error'
 * ```
 *
 * emits 'undefined'
 * ```ts
 * import { range } from 'rxjs';
 * import { single } from 'rxjs/operators';
 *
 * const numbers = range(1,5).pipe(single(x => x === 10));
 * numbers.subscribe(x => console.log(x));
 * // result
 * // 'undefined'
 * ```
 *
 * @see {@link first}
 * @see {@link find}
 * @see {@link findIndex}
 * @see {@link elementAt}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate or `undefined` when no items match.
 *
 * @method single
 * @owner Observable
 */
export declare function single<T>(predicate?: (value: T, index: number, source: Observable<T>) => boolean): MonoTypeOperatorFunction<T>;
