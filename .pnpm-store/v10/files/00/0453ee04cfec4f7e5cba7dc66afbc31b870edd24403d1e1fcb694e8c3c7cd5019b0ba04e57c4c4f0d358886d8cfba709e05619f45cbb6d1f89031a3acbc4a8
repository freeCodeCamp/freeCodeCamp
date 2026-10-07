import {  concat as concatStatic } from '../observable/concat';
import { Observable } from '../Observable';
import { ObservableInput, OperatorFunction, MonoTypeOperatorFunction, SchedulerLike } from '../types';

/* tslint:disable:max-line-length */
/** @deprecated Deprecated in favor of static concat. */
export function concat<T>(scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T, T2>(v2: ObservableInput<T2>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T>(...observables: Array<ObservableInput<T> | SchedulerLike>): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static concat. */
export function concat<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike>): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * @deprecated Deprecated in favor of static {@link concat}.
 */
export function concat<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike>): OperatorFunction<T, R> {
  return (source: Observable<T>) => source.lift.call(concatStatic(source, ...observables));
}
