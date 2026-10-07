// This entire implementation courtesy of Anders Hjelsberg:
// https://github.com/microsoft/TypeScript/pull/50831#issuecomment-1253830522

import type { AnyFunction } from '../types'

/**
 * Represents the longest array within an array of arrays.
 *
 * @template ArrayOfTuples An array of arrays.
 *
 * @internal
 */
type LongestTuple<ArrayOfTuples extends readonly unknown[][]> =
  ArrayOfTuples extends [infer FirstArray extends unknown[]]
    ? FirstArray
    : ArrayOfTuples extends [
        infer FirstArray,
        ...infer RestArrays extends unknown[][]
      ]
    ? LongerOfTwo<FirstArray, LongestTuple<RestArrays>>
    : never

/**
 * Determines the longer of two array types.
 *
 * @template ArrayOne First array type.
 * @template ArrayTwo Second array type.
 *
 * @internal
 */
type LongerOfTwo<ArrayOne, ArrayTwo> = keyof ArrayTwo extends keyof ArrayOne
  ? ArrayOne
  : ArrayTwo

/**
 * Extracts the element at a specific index in an array.
 *
 * @template ArrayType The array type.
 * @template Index The index type.
 *
 * @internal
 */
type ElementAt<
  ArrayType extends unknown[],
  Index extends PropertyKey
> = Index extends keyof ArrayType ? ArrayType[Index] : unknown

/**
 * Maps each array in an array of arrays to its element at a given index.
 *
 * @template ArrayOfTuples An array of arrays.
 * @template Index The index to extract from each array.
 *
 * @internal
 */
type ElementsAtGivenIndex<
  ArrayOfTuples extends readonly unknown[][],
  Index extends PropertyKey
> = {
  [ArrayIndex in keyof ArrayOfTuples]: ElementAt<
    ArrayOfTuples[ArrayIndex],
    Index
  >
}

/**
 * Computes the intersection of all types in a tuple.
 *
 * @template Tuple A tuple of types.
 *
 * @internal
 */
type Intersect<Tuple extends readonly unknown[]> = Tuple extends []
  ? unknown
  : Tuple extends [infer Head, ...infer Tail]
  ? Head & Intersect<Tail>
  : Tuple[number]

/**
 * Merges a tuple of arrays into a single tuple, intersecting types at each index.
 *
 * @template ArrayOfTuples An array of tuples.
 * @template LongestArray The longest array in ArrayOfTuples.
 *
 * @internal
 */
type MergeTuples<
  ArrayOfTuples extends readonly unknown[][],
  LongestArray extends unknown[] = LongestTuple<ArrayOfTuples>
> = {
  [Index in keyof LongestArray]: Intersect<
    ElementsAtGivenIndex<ArrayOfTuples, Index>
  >
}

/**
 * Extracts the parameter types from a tuple of functions.
 *
 * @template FunctionsArray An array of function types.
 *
 * @internal
 */
type ExtractParameters<FunctionsArray extends readonly AnyFunction[]> = {
  [Index in keyof FunctionsArray]: Parameters<FunctionsArray[Index]>
}

/**
 * Merges the parameters of a tuple of functions into a single tuple.
 *
 * @template FunctionsArray An array of function types.
 *
 * @internal
 */
export type MergeParameters<FunctionsArray extends readonly AnyFunction[]> =
  '0' extends keyof FunctionsArray
    ? MergeTuples<ExtractParameters<FunctionsArray>>
    : Parameters<FunctionsArray[number]>
