import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';
export declare function exhaustMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported. Use inner map instead. */
export declare function exhaustMap<T, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector: undefined): OperatorFunction<T, ObservedValueOf<O>>;
/** @deprecated resultSelector is no longer supported. Use inner map instead. */
export declare function exhaustMap<T, I, R>(project: (value: T, index: number) => ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, R>;
