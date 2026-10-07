import { Observable } from '../Observable';
import { map } from './map';
import { OperatorFunction } from '../types';

/* tslint:disable:max-line-length */
export function pluck<T, K1 extends keyof T>(k1: K1): OperatorFunction<T, T[K1]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1]>(k1: K1, k2: K2): OperatorFunction<T, T[K1][K2]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(k1: K1, k2: K2, k3: K3): OperatorFunction<T, T[K1][K2][K3]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(k1: K1, k2: K2, k3: K3, k4: K4): OperatorFunction<T, T[K1][K2][K3][K4]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5): OperatorFunction<T, T[K1][K2][K3][K4][K5]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6): OperatorFunction<T, T[K1][K2][K3][K4][K5][K6]>;
export function pluck<T, R>(...properties: string[]): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * ![](pluck.png)
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * ## Example
 * Map every click to the tagName of the clicked target element
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { pluck } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const tagNames = clicks.pipe(pluck('target', 'tagName'));
 * tagNames.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
export function pluck<T, R>(...properties: string[]): OperatorFunction<T, R> {
  const length = properties.length;
  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }
  return (source: Observable<T>) => map(plucker(properties, length))(source as any);
}

function plucker(props: string[], length: number): (x: string) => any {
  const mapper = (x: string) => {
    let currentProp = x;
    for (let i = 0; i < length; i++) {
      const p = currentProp != null ? currentProp[props[i]] : undefined;
      if (p !== void 0) {
        currentProp = p;
      } else {
        return undefined;
      }
    }
    return currentProp;
  };

  return mapper;
}
