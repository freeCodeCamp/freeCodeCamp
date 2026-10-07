import { OperatorFunction, ObservedValueOf } from '../../internal/types';
import { ObservableInput } from '../types';
export declare function mergeMapTo<T, O extends ObservableInput<any>>(innerObservable: O, concurrent?: number): OperatorFunction<any, ObservedValueOf<O>>;
/** @deprecated */
export declare function mergeMapTo<T, R, O extends ObservableInput<any>>(innerObservable: O, resultSelector: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R, concurrent?: number): OperatorFunction<T, R>;
