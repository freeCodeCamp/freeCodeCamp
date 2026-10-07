import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';
export declare function switchMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported, use inner map instead */
export declare function switchMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: undefined): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported, use inner map instead */
export declare function switchMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, R>;
