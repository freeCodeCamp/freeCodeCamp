import type { UnknownFunction, Expand, TuplifyUnion, Has, List, IsTuple } from '../types';
/** Given a set of input selectors, extracts the intersected parameters to determine
 * what values can actually be passed to all of the input selectors at once
 * WARNING: "you are not expected to understand this" :)
 */
export type MergeParameters<T extends readonly UnknownFunction[], ParamsArrays extends readonly any[][] = ExtractParams<T>, TransposedArrays = Transpose<ParamsArrays>, TuplifiedArrays extends any[] = TuplifyUnion<TransposedArrays>, LongestParamsArray extends readonly any[] = LongestArray<TuplifiedArrays>> = ExpandItems<RemoveNames<{
    [index in keyof LongestParamsArray]: LongestParamsArray[index] extends LongestParamsArray[number] ? IgnoreInvalidIntersections<IntersectAll<LongestParamsArray[index]>> : never;
}>>;
/** An object with no fields */
type EmptyObject = {
    [K in any]: never;
};
type IgnoreInvalidIntersections<T> = T extends EmptyObject ? never : T;
/** Extract the parameters from all functions as a tuple */
export type ExtractParams<T extends readonly UnknownFunction[]> = {
    [index in keyof T]: T[index] extends T[number] ? Parameters<T[index]> : never;
};
/** Recursively expand all fields in an object for easier reading */
export type ExpandItems<T extends readonly unknown[]> = {
    [index in keyof T]: T[index] extends T[number] ? Expand<T[index]> : never;
};
/** Select the longer of two arrays */
export type Longest<L extends List, L1 extends List> = L extends unknown ? L1 extends unknown ? {
    0: L1;
    1: L;
}[Has<keyof L, keyof L1>] : never : never;
/** Recurse over a nested array to locate the longest one.
 * Acts like a type-level `reduce()`
 */
export type LongestArray<S extends readonly any[][]> = IsTuple<S> extends '0' ? S[0] : S extends [any[], any[]] ? Longest<S[0], S[1]> : S extends [any[], any[], ...infer Rest] ? Longest<Longest<S[0], S[1]>, Rest extends any[][] ? LongestArray<Rest> : []> : S extends [any[]] ? S[0] : never;
/** Recursive type for intersecting together all items in a tuple, to determine
 *  the final parameter type at a given argument index in the generated selector. */
export type IntersectAll<T extends any[]> = IsTuple<T> extends '0' ? T[0] : _IntersectAll<T>;
type IfJustNullish<T, True, False> = [T] extends [undefined | null] ? True : False;
/** Intersect a pair of types together, for use in parameter type calculation.
 * This is made much more complex because we need to correctly handle cases
 * where a function has fewer parameters and the type is `undefined`, as well as
 * optional params or params that have `null` or `undefined` as part of a union.
 *
 * If the next type by itself is `null` or `undefined`, we exclude it and return
 * the other type. Otherwise, intersect them together.
 */
type _IntersectAll<T, R = unknown> = T extends [infer First, ...infer Rest] ? _IntersectAll<Rest, IfJustNullish<First, R, R & First>> : R;
/**
 * Removes field names from a tuple
 * Source: https://stackoverflow.com/a/63571175/62937
 */
type RemoveNames<T extends readonly any[]> = [any, ...T] extends [
    any,
    ...infer U
] ? U : never;
/**
 * Transposes nested arrays
 * Source: https://stackoverflow.com/a/66303933/62937
 */
type Transpose<T> = T[Extract<keyof T, T extends readonly any[] ? number : unknown>] extends infer V ? {
    [K in keyof V]: {
        [L in keyof T]: K extends keyof T[L] ? T[L][K] : undefined;
    };
} : never;
export {};
