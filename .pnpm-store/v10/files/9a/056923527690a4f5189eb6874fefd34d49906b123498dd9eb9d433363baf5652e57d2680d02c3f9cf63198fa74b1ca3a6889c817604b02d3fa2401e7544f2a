import { distinctUntilChanged } from './distinctUntilChanged';
import { MonoTypeOperatorFunction } from '../types';

/* tslint:disable:max-line-length */
export function distinctUntilKeyChanged<T>(key: keyof T): MonoTypeOperatorFunction<T>;
export function distinctUntilKeyChanged<T, K extends keyof T>(key: K, compare: (x: T[K], y: T[K]) => boolean): MonoTypeOperatorFunction<T>;
/* tslint:enable:max-line-length */

/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * ## Examples
 * An example comparing the name of persons
 * ```typescript
 * import { of } from 'rxjs';
 * import { distinctUntilKeyChanged } from 'rxjs/operators';
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'},
 *   ).pipe(
 *     distinctUntilKeyChanged('name'),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 * ```
 *
 * An example comparing the first letters of the name
 * ```typescript
 * import { of } from 'rxjs';
 * import { distinctUntilKeyChanged } from 'rxjs/operators';
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'},
 *   ).pipe(
 *     distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)),
 *   )
 *   .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 * ```
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
export function distinctUntilKeyChanged<T, K extends keyof T>(key: K, compare?: (x: T[K], y: T[K]) => boolean): MonoTypeOperatorFunction<T> {
  return distinctUntilChanged((x: T, y: T) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}
