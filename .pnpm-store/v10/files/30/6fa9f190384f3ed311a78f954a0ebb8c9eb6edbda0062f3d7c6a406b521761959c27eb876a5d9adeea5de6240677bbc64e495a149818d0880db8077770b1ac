import { Observable } from '../Observable';
import { isArray } from '../util/isArray';
import { MonoTypeOperatorFunction, OperatorFunction } from '../types';
import { race as raceStatic } from '../observable/race';

/* tslint:disable:max-line-length */
/** @deprecated Deprecated in favor of static race. */
export function race<T>(observables: Array<Observable<T>>): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static race. */
export function race<T, R>(observables: Array<Observable<T>>): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static race. */
export function race<T>(...observables: Array<Observable<T> | Array<Observable<T>>>): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static race. */
export function race<T, R>(...observables: Array<Observable<any> | Array<Observable<any>>>): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Returns an Observable that mirrors the first source Observable to emit a next,
 * error or complete notification from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 * @deprecated Deprecated in favor of static {@link race}.
 */
export function race<T>(...observables: (Observable<T> | Observable<T>[])[]): MonoTypeOperatorFunction<T> {
  return function raceOperatorFunction(source: Observable<T>) {
    // if the only argument is an array, it was most likely called with
    // `pair([obs1, obs2, ...])`
    if (observables.length === 1 && isArray(observables[0])) {
      observables = observables[0] as Observable<T>[];
    }

    return source.lift.call(raceStatic(source, ...(observables as Observable<T>[])));
  };
}
