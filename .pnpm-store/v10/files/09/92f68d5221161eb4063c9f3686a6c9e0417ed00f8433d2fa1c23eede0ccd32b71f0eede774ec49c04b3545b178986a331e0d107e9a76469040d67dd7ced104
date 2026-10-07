import { Observable } from '../Observable';
import { OperatorFunction } from '../types';
/**
 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
 *
 * ## Example
 * A simple example emitting true if all elements are less than 5, false otherwise
 * ```ts
 * import { of } from 'rxjs';
 * import { every } from 'rxjs/operators';
 *
 *  of(1, 2, 3, 4, 5, 6).pipe(
 *     every(x => x < 5),
 * )
 * .subscribe(x => console.log(x)); // -> false
 * ```
 *
 * @param {function} predicate A function for determining if an item meets a specified condition.
 * @param {any} [thisArg] Optional object to use for `this` in the callback.
 * @return {Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.
 * @method every
 * @owner Observable
 */
export declare function every<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): OperatorFunction<T, boolean>;
