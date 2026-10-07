import { OperatorFunction } from '../types';
/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * ![](toArray.png)
 *
 * `toArray` will wait until the source Observable completes before emitting
 * the array containing all emissions. When the source Observable errors no
 * array will be emitted.
 *
 *  ## Example
 * ```ts
 * import { interval } from 'rxjs';
 * import { toArray, take } from 'rxjs/operators';
 *
 * const source = interval(1000);
 * const example = source.pipe(
 *   take(10),
 *   toArray()
 * );
 *
 * const subscribe = example.subscribe(val => console.log(val));
 *
 * // output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * ```
* @return An array from an observable sequence.
* @method toArray
* @owner Observable
*/
export declare function toArray<T>(): OperatorFunction<T, T[]>;
