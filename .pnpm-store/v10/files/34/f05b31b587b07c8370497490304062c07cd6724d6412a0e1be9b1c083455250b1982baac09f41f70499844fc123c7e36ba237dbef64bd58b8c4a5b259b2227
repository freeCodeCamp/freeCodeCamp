import _ = require("../index");

// Helper types to reject readonly arrays
type _Eq<T, U> = (<X>() => X extends T ? 1 : 2) extends (<X>() => X extends U ? 1 : 2) ? true : false
type _IsWritable<T> = _Eq<{ [K in keyof T]: T[K] }, { -readonly [K in keyof T]: T[K] }>
type RejectReadonly<T extends _.MutableList<unknown>> = _IsWritable<T> extends true ? T : never

export {}

declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
         * final chunk will be the remaining elements.
         *
         * @param array The array to process.
         * @param size The length of each chunk.
         * @return Returns the new array containing chunks.
         */
        chunk<T>(array: List<T> | null | undefined, size?: number): T[][];
    }
    interface Collection<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): Collection<T[]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): CollectionChain<T[]>;
    }
    interface LoDashStatic {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, 0n, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        compact<T>(array: List<T | Falsey> | null | undefined): T[];
    }

    type Falsey = null | undefined | false | "" | 0 | 0n;
    type Truthy<T> = T extends Falsey ? never : T;
    interface Collection<T> {
        /**
         * @see _.compact
         */
        compact(): Collection<Truthy<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.compact
         */
        compact(): CollectionChain<Truthy<T>>;
    }
    interface LoDashStatic {
        /**
         * Creates a new array concatenating `array` with any additional arrays
         * and/or values.
         *
         * @category Array
         * @param [values] The array values to concatenate.
         * @returns Returns the new concatenated array.
         * @example
         *
         * var array = [1];
         * var other = _.concat(array, 2, [3], [[4]]);
         *
         * console.log(other);
         * // => [1, 2, 3, [4]]
         *
         * console.log(array);
         * // => [1]
         */
         concat<T>(...values: Array<Many<T>>): T[];
    }
    interface Primitive<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface Collection<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of `array` values not included in the other provided arrays using SameValueZero for
         * equality comparisons. The order and references of result values are determined by the first array.
         *
         * @param array The array to inspect.
         * @param values The arrays of values to exclude.
         * @return Returns the new array of filtered values.
         */
        difference<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.difference
         */
        difference(...values: Array<List<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.difference
         */
        difference(...values: Array<List<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.difference except that it accepts iteratee which is invoked for each element
         * of array and values to generate the criterion by which they're compared. The order and references
         * of result values are determined by the first array. The iteratee is invoked with one argument: (value).
         *
         * @param array The array to inspect.
         * @param values The values to exclude.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the new array of filtered values.
         */
        differenceBy<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, iteratee: ValueIteratee<T1 | T2 | T3 | T4>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;
        /**
         * @see _.differenceBy
         */
        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;
        /**
         * @see _.differenceBy
         */
        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.difference except that it accepts comparator which is invoked to compare elements
         * of array to values. The order and references of result values are determined by the first array. The
         * comparator is invoked with two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

         * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }]
         */
        differenceWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];
        /**
         * @see _.differenceWith
         */
        differenceWith<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;
        /**
         * @see _.differenceWith
         */
        differenceWith<T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.differenceWith
         */
        differenceWith< T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;
        /**
         * @see _.differenceWith
         */
        differenceWith< T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        dropRight<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        dropRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        dropWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        fill<T>(array: any[] | null | undefined, value: T): T[];
        /**
         * @see _.fill
         */
        fill<T, AnyList extends MutableList<any>>(array: RejectReadonly<AnyList> | null | undefined, value: T): List<T>;
        /**
         * @see _.fill
         */
        fill<T, U>(array: U[] | null | undefined, value: T, start?: number, end?: number): Array<T | U>;
        /**
         * @see _.fill
         */
        fill<T, UList extends MutableList<any>>(array: RejectReadonly<UList> | null | undefined, value: T, start?: number, end?: number): List<T | UList[0]>;
    }
    interface Collection<T> {
        /**
         * @see _.fill
         */
        fill<U>(value: U, start?: number, end?: number): Collection<T | U>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.fill
         */
        fill<U>(value: U, start?: number, end?: number): CollectionChain<T | U>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
         *
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface Collection<T> {
        /**
         * @see _.findIndex
         */
        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.findIndex
         */
        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.findIndex except that it iterates over elements of collection from right to left.
         *
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findLastIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface Collection<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.head
         */
        first: LoDashStatic["head"];
    }
    interface String {
        /**
         * @see _.first
         */
        first(): string | undefined;
    }
    interface StringChain {
        /**
         * @see _.first
         */
        first(): StringNullableChain;
    }
    interface StringNullableChain {
        /**
         * @see _.first
         */
        first(): StringNullableChain;
    }
    interface Collection<T> {
        /**
         * @see _.first
         */
        first(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.first
         */
        first(): ExpChain<T | undefined>;
    }
    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
    interface LoDashStatic {
        /**
         * Flattens `array` a single level deep.
         *
         * @param array The array to flatten.
         * @return Returns the new flattened array.
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }
    interface String {
        /**
         * @see _.flatten
         */
        flatten(): Collection<string>;
    }
    interface StringChain {
        /**
         * @see _.flatten
         */
        flatten(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.flatten
         */
        flatten(): CollectionChain<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatten
         */
        flatten(): T extends Many<infer U> ? Collection<U> : Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatten
         */
        flatten(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;
    }

    type Flat<T> = T extends string ? T : (T extends List<any> ? never : T);

    interface LoDashStatic {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): Array<Flat<T>>;
    }
    interface Collection<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep(): T extends ListOfRecursiveArraysOrValues<infer U> ? Collection<Flat<U>> : Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep(): T extends ListOfRecursiveArraysOrValues<infer U> ? CollectionChain<Flat<U>> : CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Recursively flatten array up to depth times.
         *
         * @param array The array to recursively flatten.
         * @param number The maximum recursion depth.
         * @return Returns the new flattened array.
         */
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.flattenDepth
         */
        flattenDepth(depth?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flattenDepth
         */
        flattenDepth(depth?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        fromPairs<T>(pairs: List<[PropertyName, T]> | null | undefined): Dictionary<T>;
        /**
         * @see _.fromPairs
         */
        fromPairs(pairs: List<any[]> | null | undefined): Dictionary<any>;
    }
    interface Collection<T> {
        /**
         * @see _.fromPairs
         */
        fromPairs(): Object<Dictionary<T extends [PropertyName, infer U] ? U : any>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.fromPairs
         */
        fromPairs(): ObjectChain<Dictionary<T extends [PropertyName, infer U] ? U : any>>;
    }
    interface LoDashStatic {
        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        head<T>(array: readonly [T, ...unknown[]]): T;
        head<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface String {
        /**
         * @see _.head
         */
        head(): string | undefined;
    }
    interface StringChain {
        /**
         * @see _.head
         */
        head(): StringNullableChain;
    }
    interface StringNullableChain {
        /**
         * @see _.head
         */
        head(): StringNullableChain;
    }
    interface Collection<T> {
        /**
         * @see _.head
         */
        head(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.head
         */
        head(): ExpChain<T | undefined>;
    }
    interface LoDashStatic {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        indexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: number): number;
    }
    interface Collection<T> {
        /**
         * @see _.indexOf
         */
        indexOf(value: T, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.indexOf
         */
        indexOf(value: T, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        initial<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.initial
         */
        initial(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.initial
         */
        initial(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of shared values.
         */
        intersection<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.intersection
         */
        intersection(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.intersection
         */
        intersection(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        intersectionBy<T1, T2>(array: List<T1> | null, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(array: List<T1> | null, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>): T1[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(array?: List<T> | null, ...values: Array<List<T>>): T[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(...values: Array<List<T> | ValueIteratee<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): Collection<T>;
        /**
         * @see _.intersectionBy
         */
        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): CollectionChain<T>;
        /**
         * @see _.intersectionBy
         */
        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

         * _.intersectionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }]
         */
        intersectionWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T1 | T2>): T1[];
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T1 | T2 | T3>): T1[];
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T1 | T2 | T3 | T4>>): T1[];
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(array?: List<T> | null, ...values: Array<List<T> | Comparator<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T | T2>): Collection<T>;
        /**
         * @see _.intersectionWith
         */
        intersectionWith(...values: Array<List<unknown> | Comparator<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T | T2>): CollectionChain<T>;
        /**
         * @see _.intersectionWith
         */
        intersectionWith(...values: Array<List<unknown> | Comparator<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Converts all elements in `array` into a string separated by `separator`.
         *
         * @param array The array to convert.
         * @param separator The element separator.
         * @returns Returns the joined string.
         */
        join(array: List<any> | null | undefined, separator?: string): string;
    }
    interface String {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }
    interface StringChain {
        /**
         * @see _.join
         */
        join(separator?: string): StringChain;
    }
    interface StringNullableChain {
        /**
         * @see _.join
         */
        join(separator?: string): StringChain;
    }
    interface Collection<T> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }
    interface CollectionChain<T> {
        /**
         * @see _.join
         */
        join(separator?: string): StringChain;
    }
    interface LoDashStatic {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: readonly [...unknown[], T]): T;
        last<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.last
         */
        last(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.last
         */
        last(): ExpChain<T | undefined>;
    }
    interface String {
        /**
         * @see _.last
         */
        last(): string | undefined;
    }
    interface StringChain {
        /**
         * @see _.last
         */
        last(): StringNullableChain;
    }
    interface StringNullableChain {
        /**
         * @see _.last
         */
        last(): StringNullableChain;
    }
    interface LoDashStatic {
        /**
         * This method is like _.indexOf except that it iterates over elements of array from right to left.
         *
         * @param array The array to search.
         * @param value The value to search for.
         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
         * @return Returns the index of the matched value, else -1.
         */
        lastIndexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: true|number): number;
    }
    interface Collection<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(value: T, fromIndex?: true|number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(value: T, fromIndex?: true|number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        nth<T>(array: List<T> | null | undefined, n?: number): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.nth
         */
        nth(n?: number): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.nth
         */
        nth(n?: number): ExpChain<T | undefined>;
    }
    interface LoDashStatic {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        pull<T>(array: T[], ...values: T[]): T[];
        /**
         * @see _.pull
         */
        pull<TList extends MutableList<any>>(array: RejectReadonly<TList>, ...values: TList[0][]): TList;
    }
    interface Collection<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        pullAll<T>(array: T[], values?: List<T>): T[];
        /**
         * @see _.pullAll
         */
        pullAll<TList extends MutableList<any>>(array: RejectReadonly<TList>, values?: List<TList[0]>): TList;
    }
    interface Collection<T> {
        /**
         * @see _.pullAll
         */
        pullAll(values?: List<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAll
         */
        pullAll(values?: List<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `iteratee` which is
         * invoked for each element of `array` and `values` to to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
         *
         * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
         * console.log(array);
         * // => [{ 'x': 2 }]
         */
        pullAllBy<T>(array: T[], values?: List<T>, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.pullAllBy
         */
        pullAllBy<TList extends MutableList<any>>(array: RejectReadonly<TList>, values?: List<TList[0]>, iteratee?: ValueIteratee<TList[0]>): TList;
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(array: T1[], values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1List extends MutableList<any>, T2>(array: RejectReadonly<T1List>, values: List<T2>, iteratee: ValueIteratee<T1List[0] | T2>): T1List;
    }
    interface Collection<T> {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `comparator` which is
         * invoked to compare elements of array to values. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
         *
         * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
         * console.log(array);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
         */
        pullAllWith<T>(array: T[], values?: List<T>, comparator?: Comparator<T>): T[];
        /**
         * @see _.pullAllWith
         */
        pullAllWith<TList extends MutableList<any>>(array: RejectReadonly<TList>, values?: List<TList[0]>, comparator?: Comparator<TList[0]>): TList;
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(array: T1[], values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1List extends MutableList<any>, T2>(array: RejectReadonly<T1List>, values: List<T2>, comparator: Comparator2<T1List[0], T2>): T1List;
    }
    interface Collection<T> {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
         * Indexes may be specified as an array of indexes or as individual arguments.
         *
         * Note: Unlike _.at, this method mutates array.
         *
         * @param array The array to modify.
         * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
         * @return Returns the new array of removed elements.
         */
        pullAt<T>(array: T[], ...indexes: Array<Many<number>>): T[];
        /**
         * @see _.pullAt
         */
        pullAt<TList extends MutableList<any>>(array: RejectReadonly<TList>, ...indexes: Array<Many<number>>): TList;
    }
    interface Collection<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Removes all elements from array that predicate returns truthy for and returns an array of the removed
         * elements. The predicate is invoked with three arguments: (value, index, array).
         *
         * Note: Unlike _.filter, this method mutates array.
         *
         * @param array The array to modify.
         * @param predicate The function invoked per iteration.
         * @return Returns the new array of removed elements.
         */
        remove<TList extends MutableList<any>>(array: RejectReadonly<TList>, predicate?: ListIteratee<TList[0]>): TList[0][];
    }
    interface Collection<T> {
        /**
         * @see _.remove
         */
        remove(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.remove
         */
        remove(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Reverses `array` so that the first element becomes the last, the second
         * element becomes the second to last, and so on.
         *
         * **Note:** This method mutates `array` and is based on
         * [`Array#reverse`](https://mdn.io/Array/reverse).
         *
         * @category Array
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.reverse(array);
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        reverse<TList extends MutableList<any>>(array: RejectReadonly<TList>): TList;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        slice<T>(array: List<T> | null | undefined, start?: number, end?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.slice
         */
        slice(start?: number, end?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.slice
         */
        slice(start?: number, end?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Uses a binary search to determine the lowest index at which `value` should
         * be inserted into `array` in order to maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         *
         * _.sortedIndex([4, 5], 4);
         * // => 0
         */
        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * Uses a binary search to determine the lowest index at which `value` should
         * be inserted into `array` in order to maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         *
         * _.sortedIndex([4, 5], 4);
         * // => 0
         */
        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        sortedIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee?: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.indexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedIndexOf([1, 1, 2, 2], 2);
         * // => 2
         */
        sortedIndexOf<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it returns the highest
         * index at which `value` should be inserted into `array` in order to
         * maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedLastIndex([4, 5], 4);
         * // => 1
         */
        sortedLastIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        sortedLastIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        sortedLastIndexOf<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        sortedUniq<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.uniqBy` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
         * // => [1.1, 2.3]
         */
        sortedUniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(iteratee: ValueIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        tail<T extends unknown[]>(array: readonly [unknown, ...T]): T;
        tail<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.tail
         */
        tail(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.tail
         */
        tail(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        take<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.take
         */
        take(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.take
         */
        take(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        takeRight<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        takeRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns
         * falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        takeWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.union
         */
        union(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.union
         */
        union(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        unionBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, arrays5: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.unionBy
         */
        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;
        /**
         * @see _.unionBy
         */
        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unionBy
         */
        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;
        /**
         * @see _.unionBy
         */
        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `comparator` which
         * is invoked to compare elements of `arrays`. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of combined values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.unionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        unionWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.unionWith
         */
        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.unionWith
         */
        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.unionWith
         */
        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;
        /**
         * @see _.unionWith
         */
        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unionWith
         */
        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;
        /**
         * @see _.unionWith
         */
        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        uniq<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.uniq
         */
        uniq(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.uniq
         */
        uniq(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // using the `_.property` iteratee shorthand
         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy(iteratee: ValueIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `comparator` which
         * is invoked to compare elements of `array`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
         *
         * _.uniqWith(objects, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
         */
        uniqWith<T>(array: List<T> | null | undefined, comparator?: Comparator<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.uniqWith
         */
        uniqWith(comparator?: Comparator<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.uniqWith
         */
        uniqWith(comparator?: Comparator<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        unzip<T1, T2>(array: Array<[T1, T2]>): [T1[], T2[]];
        /**
         * @see _.unzip
         */
        unzip<T1, T2, T3>(
            array: Array<[T1, T2, T3]>,
        ): [T1[], T2[], T3[]];
        /**
         * @see _.unzip
         */
        unzip<T1, T2, T3, T4>(
            array: Array<[T1, T2, T3, T4]>,
        ): [T1[], T2[], T3[], T4[]];
        /**
         * @see _.unzip
         */
        unzip<T1, T2, T3, T4, T5>(
            array: Array<[T1, T2, T3, T4, T5]>,
        ): [T1[], T2[], T3[], T4[], T5[]];
        /**
         * @see _.unzip
         */
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }
    interface Collection<T> {
        /**
         * @see _.unzip
         */
        unzip(): T extends List<infer U> ? Collection<U[]> : unknown;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unzip
         */
        unzip(): T extends List<infer U> ? CollectionChain<U[]> : unknown;
    }
    interface LoDashStatic {
        /**
         * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
         * combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).
         *
         * @param array The array of grouped elements to process.
         * @param iteratee The function to combine regrouped values.
         * @return Returns the new array of regrouped elements.
         */
        unzipWith<T, TResult>(array: List<List<T>> | null | undefined, iteratee: (...values: T[]) => TResult): TResult[];
        /**
         * @see _.unzipWith
         */
        unzipWith<T>(array: List<List<T>> | null | undefined): T[][];
    }
    interface Collection<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): Collection<TResult>;
        /**
         * @see _.unzipWith
         */
        unzipWith(): T extends List<infer U> ? Collection<U[]> : unknown;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): CollectionChain<TResult>;
        /**
         * @see _.unzipWith
         */
        unzipWith(): T extends List<infer U> ? CollectionChain<U[]> : unknown;
    }
    interface LoDashStatic {
        /**
         * Creates an array excluding all provided values using SameValueZero for equality comparisons.
         *
         * @param array The array to filter.
         * @param values The values to exclude.
         * @return Returns the new array of filtered values.
         */
        without<T>(array: List<T> | null | undefined, ...values: T[]): T[];
    }
    interface Collection<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        xorBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.xorBy
         */
        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.xorBy
         */
        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.xorBy
         */
        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;
        /**
         * @see _.xorBy
         */
        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.xorBy
         */
        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;
        /**
         * @see _.xorBy
         */
        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        xorWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.xorWith
         */
        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.xorWith
         */
        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.xorWith
         */
        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;
        /**
         * @see _.xorWith
         */
        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.xorWith
         */
        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;
        /**
         * @see _.xorWith
         */
        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1 | undefined, T2 | undefined]>;
        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1 | undefined, T2 | undefined, T3 | undefined]>;
        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>;
        /**
         * @see _.zip
         */
        zip<T>(...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>>;
    }
    interface Collection<T> {
        /**
         * @see _.zip
         */
        zip<T2>(arrays2: List<T2>): Collection<[T | undefined, T2 | undefined]>;
        /**
         * @see _.zip
         */
        zip(...arrays: Array<List<T> | null | undefined>): Collection<Array<T | undefined>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zip
         */
        zip<T2>(arrays2: List<T2>): CollectionChain<[T | undefined, T2 | undefined]>;
        /**
         * @see _.zip
         */
        zip(...arrays: Array<List<T> | null | undefined>): CollectionChain<Array<T | undefined>>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObject<T>(props: List<PropertyName>, values: List<T>): Dictionary<T>;
        /**
         * @see _.zipObject
         */
        zipObject(props?: List<PropertyName>): Dictionary<undefined>;
    }
    interface Collection<T> {
        /**
         * @see _.zipObject
         */
        zipObject<U>(values: List<U>): Object<Dictionary<U>>;
        /**
         * @see _.zipObject
         */
        zipObject(): Object<Dictionary<undefined>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zipObject
         */
        zipObject<U>(values: List<U>): ObjectChain<Dictionary<U>>;
        /**
         * @see _.zipObject
         */
        zipObject(): ObjectChain<Dictionary<undefined>>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObjectDeep(paths?: List<PropertyPath>, values?: List<any>): object;
    }
    interface Collection<T> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(values?: List<any>): Object<object>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(values?: List<any>): ObjectChain<object>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is invoked with four arguments: (accumulator, value, index,
         * group).
         * @param arrays The arrays to process.
         * @param iteratee The function to combine grouped values.
         * @return Returns the new array of grouped elements.
         */
        zipWith<T, TResult>(arrays: List<T>, iteratee: (value1: T) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(arrays1: List<T1>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): TResult[];
    }
    interface Collection<T> {
        /**
         * @see _.zipWith
         */
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): Collection<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): Collection<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): Collection<TResult>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zipWith
         */
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): CollectionChain<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): CollectionChain<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): CollectionChain<TResult>;
    }
}
