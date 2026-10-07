import { merge as mergeStatic } from '../observable/merge';
import { Observable } from '../Observable';
import { ObservableInput, OperatorFunction, MonoTypeOperatorFunction, SchedulerLike } from '../types';

/* tslint:disable:max-line-length */
/** @deprecated Deprecated in favor of static merge. */
export function merge<T>(scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T>(concurrent?: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2>(v2: ObservableInput<T2>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2>(v2: ObservableInput<T2>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3, T4>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3, T4, T5>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, T2, T3, T4, T5, T6>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number, scheduler?: SchedulerLike): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T>(...observables: Array<ObservableInput<T> | SchedulerLike | number>): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated in favor of static merge. */
export function merge<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike | number>): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * @deprecated Deprecated in favor of static {@link merge}.
 */
export function merge<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike | number>): OperatorFunction<T, R> {
  return (source: Observable<T>) => source.lift.call(mergeStatic(source, ...observables));
}
