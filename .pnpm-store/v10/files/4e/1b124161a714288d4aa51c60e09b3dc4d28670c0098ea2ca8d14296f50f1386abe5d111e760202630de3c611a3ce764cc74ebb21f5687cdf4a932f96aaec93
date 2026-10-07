
import { isArray } from '../util/isArray';
import { CombineLatestOperator } from '../observable/combineLatest';
import { from } from '../observable/from';
import { Observable } from '../Observable';
import { ObservableInput, OperatorFunction } from '../types';

const none = {};

/* tslint:disable:max-line-length */
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, R>(project: (v1: T) => R): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, R>(v2: ObservableInput<T2>, project: (v1: T, v2: T2) => R): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, project: (v1: T, v2: T2, v3: T3) => R): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, T4, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, project: (v1: T, v2: T2, v3: T3, v4: T4) => R): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, T4, T5, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, T4, T5, T6, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): OperatorFunction<T, R> ;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2>(v2: ObservableInput<T2>): OperatorFunction<T, [T, T2]>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): OperatorFunction<T, [T, T2, T3]>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): OperatorFunction<T, [T, T2, T3, T4]>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): OperatorFunction<T, [T, T2, T3, T4, T5]>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): OperatorFunction<T, [T, T2, T3, T4, T5, T6]> ;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, R>(...observables: Array<ObservableInput<T> | ((...values: Array<T>) => R)>): OperatorFunction<T, R>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, R>(array: ObservableInput<T>[]): OperatorFunction<T, Array<T>>;
/** @deprecated Deprecated in favor of static combineLatest. */
export function combineLatest<T, TOther, R>(array: ObservableInput<TOther>[], project: (v1: T, ...values: Array<TOther>) => R): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * @deprecated Deprecated in favor of static {@link combineLatest}.
 */
export function combineLatest<T, R>(...observables: Array<ObservableInput<any> |
                                                    Array<ObservableInput<any>> |
                                                    ((...values: Array<any>) => R)>): OperatorFunction<T, R> {
  let project: (...values: Array<any>) => R = null;
  if (typeof observables[observables.length - 1] === 'function') {
    project = <(...values: Array<any>) => R>observables.pop();
  }

  // if the first and only other argument besides the resultSelector is an array
  // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
  if (observables.length === 1 && isArray(observables[0])) {
    observables = (<any>observables[0]).slice();
  }

  return (source: Observable<T>) => source.lift.call(from([source, ...observables]), new CombineLatestOperator(project));
}
