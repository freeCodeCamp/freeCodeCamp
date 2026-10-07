import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { EmptyError } from '../util/EmptyError';
import { OperatorFunction } from '../../internal/types';
import { filter } from './filter';
import { take } from './take';
import { defaultIfEmpty } from './defaultIfEmpty';
import { throwIfEmpty } from './throwIfEmpty';
import { identity } from '../util/identity';

/* tslint:disable:max-line-length */
export function first<T, D = T>(
  predicate?: null,
  defaultValue?: D
): OperatorFunction<T, T | D>;
export function first<T, S extends T>(
  predicate: (value: T, index: number, source: Observable<T>) => value is S,
  defaultValue?: S
): OperatorFunction<T, S>;
export function first<T, D = T>(
  predicate: (value: T, index: number, source: Observable<T>) => boolean,
  defaultValue?: D
): OperatorFunction<T, T | D>;
/* tslint:enable:max-line-length */

/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * ![](first.png)
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a deprecated `resultSelector` function to produce the output
 * value from the input value, and a `defaultValue` to emit in case the source
 * completes before it is able to emit a valid value. Throws an error if
 * `defaultValue` was not provided and a matching element is not found.
 *
 * ## Examples
 * Emit only the first click that happens on the DOM
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { first } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(first());
 * result.subscribe(x => console.log(x));
 * ```
 *
 * Emits the first click that happens on a DIV
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { first } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(first(ev => ev.target.tagName === 'DIV'));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
export function first<T, D>(
  predicate?: ((value: T, index: number, source: Observable<T>) => boolean) | null,
  defaultValue?: D
): OperatorFunction<T, T | D> {
  const hasDefaultValue = arguments.length >= 2;
  return (source: Observable<T>) => source.pipe(
    predicate ? filter((v, i) => predicate(v, i, source)) : identity,
    take(1),
    hasDefaultValue ? defaultIfEmpty<T | D>(defaultValue) : throwIfEmpty(() => new EmptyError()),
  );
}
