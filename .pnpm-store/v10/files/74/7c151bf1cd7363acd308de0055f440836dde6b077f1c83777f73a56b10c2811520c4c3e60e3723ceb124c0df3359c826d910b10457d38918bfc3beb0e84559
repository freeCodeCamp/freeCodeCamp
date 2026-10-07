import { OperatorFunction } from '../types';
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * ![](mapTo.png)
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * ## Example
 * Map every click to the string 'Hi'
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { mapTo } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const greetings = clicks.pipe(mapTo('Hi'));
 * greetings.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
export declare function mapTo<T, R>(value: R): OperatorFunction<T, R>;
