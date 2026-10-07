import type {
  UnknownFunction,
  Expand,
  TuplifyUnion,
  Has,
  List,
  IsTuple
} from '../types'

/** Given a set of input selectors, extracts the intersected parameters to determine
 * what values can actually be passed to all of the input selectors at once
 * WARNING: "you are not expected to understand this" :)
 */
export type MergeParameters<
  // The actual array of input selectors
  T extends readonly UnknownFunction[],
  // Given those selectors, we do several transformations on the types in sequence:
  // 1) Extract "the type of parameters" for each input selector, so that we now have
  //    a tuple of all those parameters
  ParamsArrays extends readonly any[][] = ExtractParams<T>,
  // 2) Transpose the parameter tuples.
  //    Originally, we have nested arrays with "all params from input", "from input 2", etc:
  //    `[ [i1a, i1b, i1c], [i2a, i2b, i2c], [i3a, i3b, i3c] ],
  //    In order to intersect the params at each index, we need to transpose them so that
  //    we have "all the first args", "all the second args", and so on:
  //    `[ [i1a, i2a, i3a], [i1b, i2b, i3b], [i1c, i2c, i3c] ]
  //    Unfortunately, this step also turns the arrays into a union, and weirder, it is
  //    a union of all possible combinations for all input functions, so there's duplicates.
  TransposedArrays = Transpose<ParamsArrays>,
  // 3) Turn the union of arrays back into a nested tuple. Order does not matter here.
  TuplifiedArrays extends any[] = TuplifyUnion<TransposedArrays>,
  // 4) Find the longest params array out of the ones we have.
  //    Note that this is actually the _nested_ data we wanted out of the transpose step,
  //    so it has all the right pieces we need.
  LongestParamsArray extends readonly any[] = LongestArray<TuplifiedArrays>
> =
  // After all that preparation work, we can actually do parameter extraction.
  // These steps work somewhat inside out (jump ahead to the middle):
  // 11) Finally, after all that, run a shallow expansion on the values to make the user-visible
  //     field details more readable when viewing the selector's type in a hover box.
  ExpandItems<
    // 10) Tuples can have field names attached, and it seems to work better to remove those
    RemoveNames<{
      // 5) We know the longest params array has N args. Loop over the indices of that array.
      // 6) For each index, do a check to ensure that we're _only_ checking numeric indices,
      //    not any field names for array functions like `slice()`
      [index in keyof LongestParamsArray]: LongestParamsArray[index] extends LongestParamsArray[number]
        ? // 9) Any object types that were intersected may have had
          IgnoreInvalidIntersections<
            // 8) Then, intersect all of the parameters for this arg together.
            IntersectAll<
              // 7) Since this is a _nested_ array, extract the right sub-array for this index
              LongestParamsArray[index]
            >
          >
        : never
    }>
  >

/*
 *
 * Reselect Internal Utility Types
 *
 */

/*
 *
 * Reselect Internal Utility Types
 *
 */

/** An object with no fields */
type EmptyObject = {
  [K in any]: never
}

type IgnoreInvalidIntersections<T> = T extends EmptyObject ? never : T

/** Extract the parameters from all functions as a tuple */
export type ExtractParams<T extends readonly UnknownFunction[]> = {
  [index in keyof T]: T[index] extends T[number] ? Parameters<T[index]> : never
}

/** Recursively expand all fields in an object for easier reading */
export type ExpandItems<T extends readonly unknown[]> = {
  [index in keyof T]: T[index] extends T[number] ? Expand<T[index]> : never
}

/** Select the longer of two arrays */
export type Longest<L extends List, L1 extends List> = L extends unknown
  ? L1 extends unknown
    ? { 0: L1; 1: L }[Has<keyof L, keyof L1>]
    : never
  : never

/** Recurse over a nested array to locate the longest one.
 * Acts like a type-level `reduce()`
 */
export type LongestArray<S extends readonly any[][]> =
  // If this isn't a tuple, all indices are the same, we can't tell a difference
  IsTuple<S> extends '0'
    ? // so just return the type of the first item
      S[0]
    : // If there's two nested arrays remaining, compare them
    S extends [any[], any[]]
    ? Longest<S[0], S[1]>
    : // If there's more than two, extract their types, treat the remainder as a smaller array
    S extends [any[], any[], ...infer Rest]
    ? // then compare those two, recurse through the smaller array, and compare vs its result
      Longest<
        Longest<S[0], S[1]>,
        Rest extends any[][] ? LongestArray<Rest> : []
      >
    : // If there's one item left, return it
    S extends [any[]]
    ? S[0]
    : never

/** Recursive type for intersecting together all items in a tuple, to determine
 *  the final parameter type at a given argument index in the generated selector. */
export type IntersectAll<T extends any[]> = IsTuple<T> extends '0'
  ? T[0]
  : _IntersectAll<T>

type IfJustNullish<T, True, False> = [T] extends [undefined | null]
  ? True
  : False

/** Intersect a pair of types together, for use in parameter type calculation.
 * This is made much more complex because we need to correctly handle cases
 * where a function has fewer parameters and the type is `undefined`, as well as
 * optional params or params that have `null` or `undefined` as part of a union.
 *
 * If the next type by itself is `null` or `undefined`, we exclude it and return
 * the other type. Otherwise, intersect them together.
 */
type _IntersectAll<T, R = unknown> = T extends [infer First, ...infer Rest]
  ? _IntersectAll<Rest, IfJustNullish<First, R, R & First>>
  : R

/*
 *
 * External/Copied Utility Types
 *
 */

/**
 * Removes field names from a tuple
 * Source: https://stackoverflow.com/a/63571175/62937
 */
type RemoveNames<T extends readonly any[]> = [any, ...T] extends [
  any,
  ...infer U
]
  ? U
  : never

/**
 * Transposes nested arrays
 * Source: https://stackoverflow.com/a/66303933/62937
 */
type Transpose<T> = T[Extract<
  keyof T,
  T extends readonly any[] ? number : unknown
>] extends infer V
  ? {
      [K in keyof V]: {
        [L in keyof T]: K extends keyof T[L] ? T[L][K] : undefined
      }
    }
  : never
