export interface CurriedFn1<A, R> {
    (a: A): R;
}
export interface CurriedFn2<A, B, R> {
    (a: A): CurriedFn1<B, R>;
    (a: A, b: B): R;
}
export interface CurriedFn3<A, B, C, R> {
    (a: A): CurriedFn2<B, C, R>;
    (a: A, b: B): CurriedFn1<C, R>;
    (a: A, b: B, c: C): R;
}
export interface CurriedFn4<A, B, C, D, R> {
    (a: A): CurriedFn3<B, C, D, R>;
    (a: A, b: B): CurriedFn2<C, D, R>;
    (a: A, b: B, c: C): CurriedFn1<D, R>;
    (a: A, b: B, c: C, d: D): R;
}
/**
 * Converts a function to a curried function that accepts arguments in reverse order.
 *
 * @param fn The function to convert to FP
 * @param arity The arity of the function
 * @param curriedArgs The curried arguments
 *
 * @returns FP version of the function
 *
 * @private
 */
export declare function convertToFP<A, R>(fn: (a: A) => R, arity: 1): CurriedFn1<A, R>;
export declare function convertToFP<A, B, R>(fn: (a: A, b: B) => R, arity: 2): CurriedFn2<A, B, R>;
export declare function convertToFP<A, B, C, R>(fn: (a: A, b: B, c: C) => R, arity: 3): CurriedFn3<A, B, C, R>;
export declare function convertToFP<A, B, C, D, R>(fn: (a: A, b: B, c: C, d: D) => R, arity: 4): CurriedFn4<A, B, C, D, R>;
export declare function convertToFP(fn: Function, arity: number, curriedArgs: any[]): Function;
