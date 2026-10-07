import * as utils from './utils';
/**
 * Choose type base on whether or not a tuple is finite
 * @example IsFinite<[0, 1, 2]> → true
 * @example IsFinite<[0, 1, 2, ...number[]]> → false
 * @example IsFinite<[0], 'Finite', 'Infinite'> → 'Finite'
 * @example IsFinite<[0, ...number[]], 'Finite', 'Infinite'> → Infinite
 */
export declare type IsFinite<Tuple extends any[], Finite = true, Infinite = false> = utils.IsFinite<Tuple, Finite, Infinite>;
/**
 * Split an infinite tuple into a finite tuple and an array
 * @example SplitInfiniteTuple<[0, 1, 2, ...number[]]> → [[0, 1, 2], number[]]
 */
export declare type SplitInfiniteTuple<Tuple extends any[]> = utils.SplitInfiniteTuple<Tuple>;
/**
 * Get type of first element
 * @example First<[0, 1, 2]> → 0
 */
export declare type First<Tuple extends [any, ...any[]]> = Tuple[0];
/**
 * Get type of last element
 * @example Last<[0, 1, 2]> → 2
 */
export declare type Last<Tuple extends any[]> = utils.Last<Tuple>;
/**
 * Drop the first element
 * @example Tail<[0, 1, 2, 3]> → [1, 2, 3]
 */
export declare type Tail<Tuple extends any[]> = utils.Tail<Tuple>;
/**
 * Find index of a type in tuple
 * @example FirstIndexEqual<'x', ['a', 'b', 'c', 'x', 'd']> → 3
 * @example FirstIndexEqual<'x', ['a', 'b', 'c']> → never
 * @example FirstIndexEqual<'x', ['a', 'b', 'c'], 'NotFound'> → 'NotFound'
 */
export declare type FirstIndexEqual<Type, Tuple extends any[], NotFound = never> = utils.FirstIndexEqual<Type, Tuple, NotFound>;
/**
 * Find index of the first element in tuple that satifies a type
 * @example FirstIndexSubset<string, [true, false, 'x', 3]> → 2
 * @example FirstIndexSubset<string, [true, false, 0, 1]> → never
 * @example FirstIndexSubset<string, [true, false, 0, 1], 'NotFound'> → 'NotFound'
 */
export declare type FirstIndexSubset<Type, Tuple extends any[], NotFound = never> = utils.FirstIndexSubset<Type, Tuple, NotFound>;
/**
 * Find index of the first element in tuple that satifies a type
 * @example FirstIndexSuperset<5, [boolean, string, number, object]> → 2
 * @example FirstIndexSuperset<5, [boolean, string, object]> → never
 * @example FirstIndexSuperset<5, [boolean, string, object], 'NotFound'> → 'NotFound'
 */
export declare type FirstIndexSuperset<Type, Tuple extends any[], NotFound = never> = utils.FirstIndexSuperset<Type, Tuple, NotFound>;
/**
 * Find index of a type in tuple
 * @example LastIndexEqual<'x', ['a', 'b', 'c', 'x', 'd']> → 3
 * @example LastIndexEqual<'x', ['a', 'b', 'c']> → never
 * @example LastIndexEqual<'x', ['a', 'b', 'c'], 'NotFound'> → 'NotFound'
 */
export declare type LastIndexEqual<Type, Tuple extends any[], NotFound = never> = utils.LastIndexEqual<Type, Tuple, NotFound>;
/**
 * Find index of the first element in tuple that satifies a type
 * @example LastIndexSubset<string, [true, false, 'x', 3]> → 2
 * @example LastIndexSubset<string, [true, false, 0, 1]> → never
 * @example LastIndexSubset<string, [true, false, 0, 1], 'NotFound'> → 'NotFound'
 */
export declare type LastIndexSubset<Type, Tuple extends any[], NotFound = never> = utils.LastIndexSubset<Type, Tuple, NotFound>;
/**
 * Find index of the first element in tuple that satifies a type
 * @example LastIndexSuperset<5, [boolean, string, number, object]> → 2
 * @example LastIndexSuperset<5, [boolean, string, object]> → never
 * @example LastIndexSuperset<5, [boolean, string, object], 'NotFound'> → 'NotFound'
 */
export declare type LastIndexSuperset<Type, Tuple extends any[], NotFound = never> = utils.LastIndexSuperset<Type, Tuple, NotFound>;
/**
 * Find all indexes of a type in tuple
 * @example AllIndexesEqual<'x', ['a', 'b', 'x', 'c', 'x', 'x']> → [2, 4, 5]
 */
export declare type AllIndexesEqual<Type, Tuple extends any[]> = utils._IndexesNormalize<utils._AllIndexesEqual<Type, Tuple>>;
/**
 * Find all indexes of a type in tuple
 * @example AllIndexesSubset<string, [0, false, 'a', 1, 'b', 'c']> → [2, 4, 5]
 */
export declare type AllIndexesSubset<Type, Tuple extends any[]> = utils._IndexesNormalize<utils._AllIndexesSubset<Type, Tuple>>;
/**
 * Find all indexes of a type in tuple
 * @example AllIndexesSuperset<'x', [number, boolean, string, 0, 'x', 'a' | 'b']> → [2, 4, 5]
 */
export declare type AllIndexesSuperset<Type, Tuple extends any[]> = utils._IndexesNormalize<utils._AllIndexesSuperset<Type, Tuple>>;
/**
 * Add an element to the end of a tuple
 * @example Append<[0, 1, 2], 'new'> → [0, 1, 2, 'new']
 */
export declare type Append<Tuple extends any[], Addend> = Reverse<Prepend<Reverse<Tuple>, Addend>>;
/**
 * Add an element to the beginning of a tuple
 * @example Prepend<[0, 1, 2], 'new'> → ['new', 0, 1, 2]
 */
export declare type Prepend<Tuple extends any[], Addend> = utils.Prepend<Tuple, Addend>;
/**
 * Reverse a tuple
 * @example Reverse<[0, 1, 2]> → [2, 1, 0]
 */
export declare type Reverse<Tuple extends any[]> = utils.Reverse<Tuple>;
/**
 * Concat two tuple into one
 * @example Concat<[0, 1, 2], ['a', 'b', 'c']> → [0, 1, 2, 'a', 'b', 'c']
 */
export declare type Concat<Left extends any[], Right extends any[]> = utils.Concat<Left, Right>;
/**
 * Repeat a certain type into a tuple
 * @example Repeat<'foo', 4> → ['foo', 'foo', 'foo', 'foo']
 * @warning To avoid potential infinite loop, Count must be an integer greater than or equal to 0
 */
export declare type Repeat<Type, Count extends number> = utils.Repeat<Type, Count, []>;
/**
 * Concat multiple tuples
 * @example ConcatMultiple<[], [0], [1, 2], [3, 4, 5]> → [0, 1, 2, 3, 4, 5]
 */
export declare type ConcatMultiple<TupleSet extends any[][]> = utils.ConcatMultiple<TupleSet>;
/**
 * Slice a tuple
 * @example SliceStartQuantity<[0, 1, 2, 3, 4, 5, 6], 2> → [2, 3, 4, 5, 6]
 * @example SliceStartQuantity<[0, 1, 2, 3, 4, 5, 6], 2, 3> → [2, 3, 4]
 * @example SliceStartQuantity<[0, 1, 2, 3, 4, 5, 6], 2, 9> → [2, 3, 4, 5, 6]
 */
export declare type SliceStartQuantity<Tuple extends any[], Start extends number, Quantity extends number = Tuple['length']> = utils.SliceStartQuantity<Tuple, Start, Quantity>;
/**
 * Create a set of tuple of single element
 * @example SingleTupleSet<[0, 1, 2]> → [[0], [1], [2]]
 * @example SingleTupleSet<[0, 1, 2, ...number[]]> → [[0], [1], [2], ...[number][]]
 */
export declare type SingleTupleSet<Types extends any[]> = utils.SingleTupleSet<Types>;
/**
 * Fill a tuple of types
 * @example FillTuple<[0, 1, 2], 'x'> → ['x', 'x', 'x']
 * @example FillTuple<any[], 'x'> → 'x'[]
 */
export declare type FillTuple<Tuple extends any[], Replacement> = utils.FillTuple<Tuple, Replacement>;
/**
 * Compare length of two tuple
 * @example CompareLength<[0, 1, 2], ['a', 'b', 'c']> → 'equal'
 * @example CompareLength<[0, 1], ['a', 'b', 'c']> → 'shorterLeft'
 * @example CompareLength<[0, 1, 2], ['a', 'b']> → 'shorterRight'
 */
export declare type CompareLength<Left extends any[], Right extends any[]> = utils.CompareLength<Left, Right>;
/**
 * Sort two tuples in order of [shorter, longer]
 * @example SortTwoTuple<[0, 1, 2, 3], ['a', 'b']> → [['a', 'b'], [0, 1, 2, 3]]
 * @example SortTwoTuple<[0, 1], ['a', 'b', 'c', 'd']> → [[0, 1], ['a', 'b', 'c', 'd']]
 * @example SortTwoTuple<[0, 1, 2], ['a', 'b', 'c']> → [[0, 1, 2], ['a', 'b', 'c']]
 * @example SortTwoTuple<[0, 1, 2], ['a', 'b', 'c'], 'EQUAL'> → 'EQUAL'
 */
export declare type SortTwoTuple<Left extends any[], Right extends any[], WhenEqual = [Left, Right]> = utils.SortTwoTuple<Left, Right, WhenEqual>;
/**
 * Find shortest tuple in a set of tuples
 * @example ShortestTuple<[[0, 1, 2], [true, false], ['a', 'b', 'c', 'd']]> → [true, false]
 */
export declare type ShortestTuple<TupleSet extends [any[], ...any[][]]> = utils.ShortestTuple<TupleSet>;
/**
 * Find shortest tuple in a set of tuples
 * @example LongestTuple<[[0, 1, 2], [true, false], ['a', 'b', 'c', 'd']]> → ['a', 'b', 'c', 'd']
 */
export declare type LongestTuple<TupleSet extends [any[], ...any[][]]> = utils.LongestTuple<TupleSet>;
