"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceOption = exports.replace = exports.removeOption = exports.remove = exports.reduceRight = exports.reduce = exports.range = exports.prependAll = exports.prepend = exports.partitionMap = exports.partition = exports.pad = exports.of = exports.modifyOption = exports.modifyNonEmptyLast = exports.modifyNonEmptyHead = exports.modify = exports.min = exports.max = exports.matchRight = exports.matchLeft = exports.match = exports.mapAccum = exports.map = exports.makeBy = exports.make = exports.liftPredicate = exports.liftOption = exports.liftNullable = exports.liftEither = exports.let = exports.length = exports.lastNonEmpty = exports.last = exports.join = exports.isNonEmptyReadonlyArray = exports.isNonEmptyArray = exports.isEmptyReadonlyArray = exports.isEmptyArray = exports.isArray = exports.intersperse = exports.intersectionWith = exports.intersection = exports.insertAt = exports.initNonEmpty = exports.init = exports.headNonEmpty = exports.head = exports.groupWith = exports.groupBy = exports.group = exports.getSomes = exports.getRights = exports.getOrder = exports.getLefts = exports.getEquivalence = exports.get = exports.fromRecord = exports.fromOption = exports.fromNullable = exports.fromIterable = exports.forEach = exports.flatten = exports.flatMapNullable = exports.flatMap = exports.findLastIndex = exports.findLast = exports.findFirstWithIndex = exports.findFirstIndex = exports.findFirst = exports.filterMapWhile = exports.filterMap = exports.filter = exports.extend = exports.every = exports.ensure = exports.empty = exports.dropWhile = exports.dropRight = exports.drop = exports.differenceWith = exports.difference = exports.dedupeWith = exports.dedupeAdjacentWith = exports.dedupeAdjacent = exports.dedupe = exports.countBy = exports.copy = exports.containsWith = exports.contains = exports.chunksOf = exports.chop = exports.cartesianWith = exports.cartesian = exports.bindTo = exports.bind = exports.appendAll = exports.append = exports.allocate = exports.Do = void 0;
exports.zipWith = exports.zip = exports.window = exports.unzip = exports.unsafeGet = exports.unprepend = exports.unionWith = exports.union = exports.unfold = exports.unappend = exports.takeWhile = exports.takeRight = exports.take = exports.tailNonEmpty = exports.tail = exports.splitWhere = exports.splitNonEmptyAt = exports.splitAt = exports.split = exports.span = exports.sortWith = exports.sortBy = exports.sort = exports.some = exports.setNonEmptyLast = exports.setNonEmptyHead = exports.separate = exports.scanRight = exports.scan = exports.rotate = exports.reverse = exports.replicate = void 0;
var Either = _interopRequireWildcard(require("./Either.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var Equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var internalArray = _interopRequireWildcard(require("./internal/array.js"));
var internalDoNotation = _interopRequireWildcard(require("./internal/doNotation.js"));
var moduleIterable = _interopRequireWildcard(require("./Iterable.js"));
var Option = _interopRequireWildcard(require("./Option.js"));
var Order = _interopRequireWildcard(require("./Order.js"));
var Predicate = _interopRequireWildcard(require("./Predicate.js"));
var Record = _interopRequireWildcard(require("./Record.js"));
var Tuple = _interopRequireWildcard(require("./Tuple.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions for working with arrays in TypeScript.
 *
 * @since 2.0.0
 */

/**
 * Builds a `NonEmptyArray` from an non-empty collection of elements.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.make(1, 2, 3)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
const make = (...elements) => elements;
/**
 * Creates a new `Array` of the specified length.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.allocate<number>(3)
 * console.log(result) // [ <3 empty items> ]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
exports.make = make;
const allocate = n => new Array(n);
/**
 * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * **Example**
 *
 * ```ts
 * import { makeBy } from "effect/Array"
 *
 * const result = makeBy(5, n => n * 2)
 * console.log(result) // [0, 2, 4, 6, 8]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
exports.allocate = allocate;
const makeBy = exports.makeBy = /*#__PURE__*/(0, _Function.dual)(2, (n, f) => {
  const max = Math.max(1, Math.floor(n));
  const out = new Array(max);
  for (let i = 0; i < max; i++) {
    out[i] = f(i);
  }
  return out;
});
/**
 * Return a `NonEmptyArray` containing a range of integers, including both endpoints.
 *
 * **Example**
 *
 * ```ts
 * import { range } from "effect/Array"
 *
 * const result = range(1, 3)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
const range = (start, end) => start <= end ? makeBy(end - start + 1, i => start + i) : [start];
/**
 * Return a `NonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.replicate("a", 3)
 * console.log(result) // ["a", "a", "a"]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
exports.range = range;
const replicate = exports.replicate = /*#__PURE__*/(0, _Function.dual)(2, (a, n) => makeBy(n, () => a));
/**
 * Creates a new `Array` from an iterable collection of values.
 * If the input is already an array, it returns the input as-is.
 * Otherwise, it converts the iterable collection to an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.fromIterable(new Set([1, 2, 3]))
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
const fromIterable = collection => Array.isArray(collection) ? collection : Array.from(collection);
/**
 * Creates a new `Array` from a value that might not be an iterable.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.ensure("a")) // ["a"]
 * console.log(Array.ensure(["a"])) // ["a"]
 * console.log(Array.ensure(["a", "b", "c"])) // ["a", "b", "c"]
 * ```
 *
 * @category constructors
 * @since 3.3.0
 */
exports.fromIterable = fromIterable;
const ensure = self => Array.isArray(self) ? self : [self];
/**
 * Takes a record and returns an array of tuples containing its keys and values.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.fromRecord({ a: 1, b: 2, c: 3 })
 * console.log(result) // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
exports.ensure = ensure;
const fromRecord = exports.fromRecord = Record.toEntries;
/**
 * Converts an `Option` to an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * console.log(Array.fromOption(Option.some(1))) // [1]
 * console.log(Array.fromOption(Option.none())) // []
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
const fromOption = exports.fromOption = Option.toArray;
/**
 * Matches the elements of an array, applying functions to cases of empty and non-empty arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const match = Array.match({
 *   onEmpty: () => "empty",
 *   onNonEmpty: ([head, ...tail]) => `head: ${head}, tail: ${tail.length}`
 * })
 * console.log(match([])) // "empty"
 * console.log(match([1, 2, 3])) // "head: 1, tail: 2"
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self) ? onNonEmpty(self) : onEmpty());
/**
 * Matches the elements of an array from the left, applying functions to cases of empty and non-empty arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const matchLeft = Array.matchLeft({
 *   onEmpty: () => "empty",
 *   onNonEmpty: (head, tail) => `head: ${head}, tail: ${tail.length}`
 * })
 * console.log(matchLeft([])) // "empty"
 * console.log(matchLeft([1, 2, 3])) // "head: 1, tail: 2"
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
const matchLeft = exports.matchLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self) ? onNonEmpty(headNonEmpty(self), tailNonEmpty(self)) : onEmpty());
/**
 * Matches the elements of an array from the right, applying functions to cases of empty and non-empty arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const matchRight = Array.matchRight({
 *   onEmpty: () => "empty",
 *   onNonEmpty: (init, last) => `init: ${init.length}, last: ${last}`
 * })
 * console.log(matchRight([])) // "empty"
 * console.log(matchRight([1, 2, 3])) // "init: 2, last: 3"
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
const matchRight = exports.matchRight = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self) ? onNonEmpty(initNonEmpty(self), lastNonEmpty(self)) : onEmpty());
/**
 * Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.prepend([2, 3, 4], 1)
 * console.log(result) // [1, 2, 3, 4]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
const prepend = exports.prepend = /*#__PURE__*/(0, _Function.dual)(2, (self, head) => [head, ...self]);
/**
 * Prepends the specified prefix array (or iterable) to the beginning of the specified array (or iterable).
 * If either array is non-empty, the result is also a non-empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.prependAll([2, 3], [0, 1])
 * console.log(result) // [0, 1, 2, 3]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
const prependAll = exports.prependAll = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => fromIterable(that).concat(fromIterable(self)));
/**
 * Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.append([1, 2, 3], 4);
 * console.log(result) // [1, 2, 3, 4]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
const append = exports.append = /*#__PURE__*/(0, _Function.dual)(2, (self, last) => [...self, last]);
/**
 * Concatenates two arrays (or iterables), combining their elements.
 * If either array is non-empty, the result is also a non-empty array.
 *
 * @category concatenating
 * @since 2.0.0
 */
const appendAll = exports.appendAll = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => fromIterable(self).concat(fromIterable(that)));
/**
 * Accumulates values from an `Iterable` starting from the left, storing
 * each intermediate result in an array. Useful for tracking the progression of
 * a value through a series of transformations.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.scan([1, 2, 3, 4], 0, (acc, value) => acc + value)
 * console.log(result) // [0, 1, 3, 6, 10]
 *
 * // Explanation:
 * // This function starts with the initial value (0 in this case)
 * // and adds each element of the array to this accumulator one by one,
 * // keeping track of the cumulative sum after each addition.
 * // Each of these sums is captured in the resulting array.
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
const scan = exports.scan = /*#__PURE__*/(0, _Function.dual)(3, (self, b, f) => {
  const out = [b];
  let i = 0;
  for (const a of self) {
    out[i + 1] = f(out[i], a);
    i++;
  }
  return out;
});
/**
 * Accumulates values from an `Iterable` starting from the right, storing
 * each intermediate result in an array. Useful for tracking the progression of
 * a value through a series of transformations.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.scanRight([1, 2, 3, 4], 0, (acc, value) => acc + value)
 * console.log(result) // [10, 9, 7, 4, 0]
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
const scanRight = exports.scanRight = /*#__PURE__*/(0, _Function.dual)(3, (self, b, f) => {
  const input = fromIterable(self);
  const out = new Array(input.length + 1);
  out[input.length] = b;
  for (let i = input.length - 1; i >= 0; i--) {
    out[i] = f(out[i + 1], input[i]);
  }
  return out;
});
/**
 * Determine if `unknown` is an Array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isArray(null)) // false
 * console.log(Array.isArray([1, 2, 3])) // true
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isArray = exports.isArray = Array.isArray;
/**
 * Determine if an `Array` is empty narrowing down the type to `[]`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isEmptyArray([])) // true
 * console.log(Array.isEmptyArray([1, 2, 3])) // false
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isEmptyArray = self => self.length === 0;
/**
 * Determine if a `ReadonlyArray` is empty narrowing down the type to `readonly []`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isEmptyReadonlyArray([])) // true
 * console.log(Array.isEmptyReadonlyArray([1, 2, 3])) // false
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isEmptyArray = isEmptyArray;
const isEmptyReadonlyArray = exports.isEmptyReadonlyArray = isEmptyArray;
/**
 * Determine if an `Array` is non empty narrowing down the type to `NonEmptyArray`.
 *
 * An `Array` is considered to be a `NonEmptyArray` if it contains at least one element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isNonEmptyArray([])) // false
 * console.log(Array.isNonEmptyArray([1, 2, 3])) // true
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isNonEmptyArray = exports.isNonEmptyArray = internalArray.isNonEmptyArray;
/**
 * Determine if a `ReadonlyArray` is non empty narrowing down the type to `NonEmptyReadonlyArray`.
 *
 * A `ReadonlyArray` is considered to be a `NonEmptyReadonlyArray` if it contains at least one element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isNonEmptyReadonlyArray([])) // false
 * console.log(Array.isNonEmptyReadonlyArray([1, 2, 3])) // true
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isNonEmptyReadonlyArray = exports.isNonEmptyReadonlyArray = internalArray.isNonEmptyArray;
/**
 * Return the number of elements in a `ReadonlyArray`.
 *
 * @category getters
 * @since 2.0.0
 */
const length = self => self.length;
exports.length = length;
const isOutOfBounds = (i, as) => i < 0 || i >= as.length;
const clamp = (i, as) => Math.floor(Math.min(Math.max(0, i), as.length));
/**
 * This function provides a safe way to read a value at a particular index from a `ReadonlyArray`.
 *
 * @category getters
 * @since 2.0.0
 */
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => {
  const i = Math.floor(index);
  return isOutOfBounds(i, self) ? Option.none() : Option.some(self[i]);
});
/**
 * Gets an element unsafely, will throw on out of bounds.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeGet = exports.unsafeGet = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => {
  const i = Math.floor(index);
  if (isOutOfBounds(i, self)) {
    throw new Error(`Index ${i} out of bounds`);
  }
  return self[i];
});
/**
 * Return a tuple containing the first element, and a new `Array` of the remaining elements, if any.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.unprepend([1, 2, 3, 4])
 * console.log(result) // [1, [2, 3, 4]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
const unprepend = self => [headNonEmpty(self), tailNonEmpty(self)];
/**
 * Return a tuple containing a copy of the `NonEmptyReadonlyArray` without its last element, and that last element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.unappend([1, 2, 3, 4])
 * console.log(result) // [[1, 2, 3], 4]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
exports.unprepend = unprepend;
const unappend = self => [initNonEmpty(self), lastNonEmpty(self)];
/**
 * Get the first element of a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
exports.unappend = unappend;
const head = exports.head = /*#__PURE__*/get(0);
/**
 * Get the first element of a non empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.headNonEmpty([1, 2, 3, 4])
 * console.log(result) // 1
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
const headNonEmpty = exports.headNonEmpty = /*#__PURE__*/unsafeGet(0);
/**
 * Get the last element in a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
const last = self => isNonEmptyReadonlyArray(self) ? Option.some(lastNonEmpty(self)) : Option.none();
/**
 * Get the last element of a non empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.lastNonEmpty([1, 2, 3, 4])
 * console.log(result) // 4
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
exports.last = last;
const lastNonEmpty = self => self[self.length - 1];
/**
 * Get all but the first element of an `Iterable`, creating a new `Array`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
exports.lastNonEmpty = lastNonEmpty;
const tail = self => {
  const input = fromIterable(self);
  return isNonEmptyReadonlyArray(input) ? Option.some(tailNonEmpty(input)) : Option.none();
};
/**
 * Get all but the first element of a `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.tailNonEmpty([1, 2, 3, 4])
 * console.log(result) // [2, 3, 4]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
exports.tail = tail;
const tailNonEmpty = self => self.slice(1);
/**
 * Get all but the last element of an `Iterable`, creating a new `Array`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
exports.tailNonEmpty = tailNonEmpty;
const init = self => {
  const input = fromIterable(self);
  return isNonEmptyReadonlyArray(input) ? Option.some(initNonEmpty(input)) : Option.none();
};
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.initNonEmpty([1, 2, 3, 4])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
exports.init = init;
const initNonEmpty = self => self.slice(0, -1);
/**
 * Keep only a max number of elements from the start of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.take([1, 2, 3, 4, 5], 3)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
exports.initNonEmpty = initNonEmpty;
const take = exports.take = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  return input.slice(0, clamp(n, input));
});
/**
 * Keep only a max number of elements from the end of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.takeRight([1, 2, 3, 4, 5], 3)
 * console.log(result) // [3, 4, 5]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
const takeRight = exports.takeRight = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  const i = clamp(n, input);
  return i === 0 ? [] : input.slice(-i);
});
/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.takeWhile([1, 3, 2, 4, 1, 2], x => x < 4)
 * console.log(result) // [1, 3, 2]
 *
 * // Explanation:
 * // - The function starts with the first element (`1`), which is less than `4`, so it adds `1` to the result.
 * // - The next element (`3`) is also less than `4`, so it adds `3`.
 * // - The next element (`2`) is again less than `4`, so it adds `2`.
 * // - The function then encounters `4`, which is not less than `4`. At this point, it stops checking further elements and finalizes the result.
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
const takeWhile = exports.takeWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  let i = 0;
  const out = [];
  for (const a of self) {
    if (!predicate(a, i)) {
      break;
    }
    out.push(a);
    i++;
  }
  return out;
});
const spanIndex = (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (!predicate(a, i)) {
      break;
    }
    i++;
  }
  return i;
};
/**
 * Split an `Iterable` into two parts:
 *
 * 1. the longest initial subarray for which all elements satisfy the specified predicate
 * 2. the remaining elements
 *
 * @category splitting
 * @since 2.0.0
 */
const span = exports.span = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => splitAt(self, spanIndex(self, predicate)));
/**
 * Drop a max number of elements from the start of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.drop([1, 2, 3, 4, 5], 2)
 * console.log(result) // [3, 4, 5]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
const drop = exports.drop = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  return input.slice(clamp(n, input), input.length);
});
/**
 * Drop a max number of elements from the end of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dropRight([1, 2, 3, 4, 5], 2)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
const dropRight = exports.dropRight = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  return input.slice(0, input.length - clamp(n, input));
});
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dropWhile([1, 2, 3, 4, 5], x => x < 4)
 * console.log(result) // [4, 5]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
const dropWhile = exports.dropWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => fromIterable(self).slice(spanIndex(self, predicate)));
/**
 * Return the first index for which a predicate holds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findFirstIndex([5, 3, 8, 9], x => x > 5)
 * console.log(result) // Option.some(2)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const findFirstIndex = exports.findFirstIndex = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (predicate(a, i)) {
      return Option.some(i);
    }
    i++;
  }
  return Option.none();
});
/**
 * Return the last index for which a predicate holds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findLastIndex([1, 3, 8, 9], x => x < 5)
 * console.log(result) // Option.some(1)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const findLastIndex = exports.findLastIndex = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const input = fromIterable(self);
  for (let i = input.length - 1; i >= 0; i--) {
    if (predicate(input[i], i)) {
      return Option.some(i);
    }
  }
  return Option.none();
});
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
 * console.log(result) // Option.some(4)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const findFirst = exports.findFirst = moduleIterable.findFirst;
/**
 * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
 * Returns an `Option` containing the found element, or `Option.none` if no element matches.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
 * console.log(result) // Option.some(4)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const findLast = exports.findLast = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const input = fromIterable(self);
  for (let i = input.length - 1; i >= 0; i--) {
    const a = input[i];
    const o = f(a, i);
    if (Predicate.isBoolean(o)) {
      if (o) {
        return Option.some(a);
      }
    } else {
      if (Option.isSome(o)) {
        return o;
      }
    }
  }
  return Option.none();
});
/**
 * Returns a tuple of the first element that satisfies the specified
 * predicate and its index, or `None` if no such element exists.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
 * console.log(result) // Option.some([4, 3])
 * ```
 *
 * @category elements
 * @since 3.17.0
 */
const findFirstWithIndex = exports.findFirstWithIndex = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let i = 0;
  for (const a of self) {
    const o = f(a, i);
    if (Predicate.isBoolean(o)) {
      if (o) {
        return Option.some([a, i]);
      }
    } else {
      if (Option.isSome(o)) {
        return Option.some([o.value, i]);
      }
    }
    i++;
  }
  return Option.none();
});
/**
 * Counts all the element of the given array that pass the given predicate
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
 * console.log(result) // 2
 * ```
 *
 * @category folding
 * @since 3.16.0
 */
const countBy = exports.countBy = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let count = 0;
  const as = fromIterable(self);
  for (let i = 0; i < as.length; i++) {
    const a = as[i];
    if (f(a, i)) {
      count++;
    }
  }
  return count;
});
/**
 * Insert an element at the specified index, creating a new `NonEmptyArray`,
 * or return `None` if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.insertAt(['a', 'b', 'c', 'e'], 3, 'd')
 * console.log(result) // Option.some(['a', 'b', 'c', 'd', 'e'])
 * ```
 *
 * @since 2.0.0
 */
const insertAt = exports.insertAt = /*#__PURE__*/(0, _Function.dual)(3, (self, i, b) => {
  const out = Array.from(self);
  //             v--- `= self.length` is ok, it means inserting in last position
  if (i < 0 || i > out.length) {
    return Option.none();
  }
  out.splice(i, 0, b);
  return Option.some(out);
});
/**
 * Change the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.replace(['a', 'b', 'c', 'd'], 1, 'z')
 * console.log(result) // ['a', 'z', 'c', 'd']
 * ```
 *
 * @since 2.0.0
 */
const replace = exports.replace = /*#__PURE__*/(0, _Function.dual)(3, (self, i, b) => modify(self, i, () => b));
/**
 * Replaces an element in an array with the given value, returning an option of the updated array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.replaceOption([1, 2, 3], 1, 4)
 * console.log(result) // Option.some([1, 4, 3])
 * ```
 *
 * @since 2.0.0
 */
const replaceOption = exports.replaceOption = /*#__PURE__*/(0, _Function.dual)(3, (self, i, b) => modifyOption(self, i, () => b));
/**
 * Apply a function to the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.modify([1, 2, 3, 4], 2, (n) => n * 2)
 * console.log(result) // [1, 2, 6, 4]
 * ```
 *
 * @since 2.0.0
 */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(3, (self, i, f) => {
  const out = Array.from(self);
  if (isOutOfBounds(i, out)) {
    return out;
  }
  const b = f(out[i]);
  out[i] = b;
  return out;
});
/**
 * Apply a function to the element at the specified index, creating a new `Array`,
 * or return `None` if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const input = [1, 2, 3, 4]
 * const result = Array.modifyOption(input, 2, (n) => n * 2)
 * console.log(result) // Option.some([1, 2, 6, 4])
 *
 * const outOfBoundsResult = Array.modifyOption(input, 5, (n) => n * 2)
 * console.log(outOfBoundsResult) // Option.none()
 * ```
 *
 * @since 2.0.0
 */
const modifyOption = exports.modifyOption = /*#__PURE__*/(0, _Function.dual)(3, (self, i, f) => {
  const arr = fromIterable(self);
  if (isOutOfBounds(i, arr)) {
    return Option.none();
  }
  const out = Array.isArray(self) ? self.slice() : arr;
  const b = f(arr[i]);
  out[i] = b;
  return Option.some(out);
});
/**
 * Delete the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const input = [1, 2, 3, 4]
 * const result = Array.remove(input, 2)
 * console.log(result) // [1, 2, 4]
 *
 * const outOfBoundsResult = Array.remove(input, 5)
 * console.log(outOfBoundsResult) // [1, 2, 3, 4]
 * ```
 *
 * @since 2.0.0
 */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, i) => {
  const out = Array.from(self);
  if (isOutOfBounds(i, out)) {
    return out;
  }
  out.splice(i, 1);
  return out;
});
/**
 * Delete the element at the specified index, creating a new `Array`,
 * or return `None` if the index is out of bounds.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Array, Option } from "effect"
 *
 * const numbers = [1, 2, 3, 4]
 * const result = Array.removeOption(numbers, 2)
 * assert.deepStrictEqual(result, Option.some([1, 2, 4]))
 *
 * const outOfBoundsResult = Array.removeOption(numbers, 5)
 * assert.deepStrictEqual(outOfBoundsResult, Option.none())
 * ```
 *
 * @since 3.16.0
 */
const removeOption = exports.removeOption = /*#__PURE__*/(0, _Function.dual)(2, (self, i) => {
  const arr = fromIterable(self);
  if (isOutOfBounds(i, arr)) {
    return Option.none();
  }
  const out = Array.isArray(self) ? self.slice() : arr;
  out.splice(i, 1);
  return Option.some(out);
});
/**
 * Reverse an `Iterable`, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.reverse([1, 2, 3, 4])
 * console.log(result) // [4, 3, 2, 1]
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const reverse = self => Array.from(self).reverse();
/**
 * Create a new array with elements sorted in increasing order based on the specified comparator.
 * If the input is a `NonEmptyReadonlyArray`, the output will also be a `NonEmptyReadonlyArray`.
 *
 * @category sorting
 * @since 2.0.0
 */
exports.reverse = reverse;
const sort = exports.sort = /*#__PURE__*/(0, _Function.dual)(2, (self, O) => {
  const out = Array.from(self);
  out.sort(O);
  return out;
});
/**
 * Sorts an array based on a provided mapping function and order. The mapping
 * function transforms the elements into a value that can be compared, and the
 * order defines how those values should be sorted.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order } from "effect"
 *
 * const result = Array.sortWith(["aaa", "b", "cc"], (s) => s.length, Order.number)
 * console.log(result) // ["b", "cc", "aaa"]
 *
 * // Explanation:
 * // The array of strings is sorted based on their lengths. The mapping function `(s) => s.length`
 * // converts each string into its length, and the `Order.number` specifies that the lengths should
 * // be sorted in ascending order.
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
const sortWith = exports.sortWith = /*#__PURE__*/(0, _Function.dual)(3, (self, f, order) => Array.from(self).map(a => [a, f(a)]).sort(([, a], [, b]) => order(a, b)).map(([_]) => _));
/**
 * Sorts the elements of an `Iterable` in increasing order based on the provided
 * orders. The elements are compared using the first order in `orders`, then the
 * second order if the first comparison is equal, and so on.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order, pipe } from "effect"
 *
 * const users = [
 *   { name: "Alice", age: 30 },
 *   { name: "Bob", age: 25 },
 *   { name: "Charlie", age: 30 }
 * ]
 *
 * const result = pipe(
 *   users,
 *   Array.sortBy(
 *     Order.mapInput(Order.number, (user: (typeof users)[number]) => user.age),
 *     Order.mapInput(Order.string, (user: (typeof users)[number]) => user.name)
 *   )
 * )
 *
 * console.log(result)
 * // [
 * //   { name: "Bob", age: 25 },
 * //   { name: "Alice", age: 30 },
 * //   { name: "Charlie", age: 30 }
 * // ]
 *
 * // Explanation:
 * // The array of users is sorted first by age in ascending order. When ages are equal,
 * // the users are further sorted by name in ascending order.
 * ```
 *
 * @category sorting
 * @since 2.0.0
 */
const sortBy = (...orders) => {
  const sortByAll = sort(Order.combineAll(orders));
  return self => {
    const input = fromIterable(self);
    if (isNonEmptyReadonlyArray(input)) {
      return sortByAll(input);
    }
    return [];
  };
};
/**
 * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
 * If one input `Iterable` is short, excess elements of the
 * longer `Iterable` are discarded.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.zip([1, 2, 3], ['a', 'b'])
 * console.log(result) // [[1, 'a'], [2, 'b']]
 * ```
 *
 * @category zipping
 * @since 2.0.0
 */
exports.sortBy = sortBy;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWith(self, that, Tuple.make));
/**
 * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
 * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
 * console.log(result) // [5, 7, 9]
 * ```
 *
 * @category zipping
 * @since 2.0.0
 */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => {
  const as = fromIterable(self);
  const bs = fromIterable(that);
  if (isNonEmptyReadonlyArray(as) && isNonEmptyReadonlyArray(bs)) {
    const out = [f(headNonEmpty(as), headNonEmpty(bs))];
    const len = Math.min(as.length, bs.length);
    for (let i = 1; i < len; i++) {
      out[i] = f(as[i], bs[i]);
    }
    return out;
  }
  return [];
});
/**
 * This function is the inverse of `zip`. Takes an `Iterable` of pairs and return two corresponding `Array`s.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.unzip([[1, "a"], [2, "b"], [3, "c"]])
 * console.log(result) // [[1, 2, 3], ['a', 'b', 'c']]
 * ```
 *
 * @since 2.0.0
 */
const unzip = self => {
  const input = fromIterable(self);
  if (isNonEmptyReadonlyArray(input)) {
    const fa = [input[0][0]];
    const fb = [input[0][1]];
    for (let i = 1; i < input.length; i++) {
      fa[i] = input[i][0];
      fb[i] = input[i][1];
    }
    return [fa, fb];
  }
  return [[], []];
};
/**
 * Places an element in between members of an `Iterable`.
 * If the input is a non-empty array, the result is also a non-empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.intersperse([1, 2, 3], 0)
 * console.log(result) // [1, 0, 2, 0, 3]
 * ```
 *
 * @since 2.0.0
 */
exports.unzip = unzip;
const intersperse = exports.intersperse = /*#__PURE__*/(0, _Function.dual)(2, (self, middle) => {
  const input = fromIterable(self);
  if (isNonEmptyReadonlyArray(input)) {
    const out = [headNonEmpty(input)];
    const tail = tailNonEmpty(input);
    for (let i = 0; i < tail.length; i++) {
      if (i < tail.length) {
        out.push(middle);
      }
      out.push(tail[i]);
    }
    return out;
  }
  return [];
});
/**
 * Apply a function to the head, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.modifyNonEmptyHead([1, 2, 3], n => n * 10)
 * console.log(result) // [10, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const modifyNonEmptyHead = exports.modifyNonEmptyHead = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => [f(headNonEmpty(self)), ...tailNonEmpty(self)]);
/**
 * Change the head, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.setNonEmptyHead([1, 2, 3], 10)
 * console.log(result) // [10, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const setNonEmptyHead = exports.setNonEmptyHead = /*#__PURE__*/(0, _Function.dual)(2, (self, b) => modifyNonEmptyHead(self, () => b));
/**
 * Apply a function to the last element, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.modifyNonEmptyLast([1, 2, 3], n => n * 2)
 * console.log(result) // [1, 2, 6]
 * ```
 *
 * @since 2.0.0
 */
const modifyNonEmptyLast = exports.modifyNonEmptyLast = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => append(initNonEmpty(self), f(lastNonEmpty(self))));
/**
 * Change the last element, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.setNonEmptyLast([1, 2, 3], 4)
 * console.log(result) // [1, 2, 4]
 * ```
 *
 * @since 2.0.0
 */
const setNonEmptyLast = exports.setNonEmptyLast = /*#__PURE__*/(0, _Function.dual)(2, (self, b) => modifyNonEmptyLast(self, () => b));
/**
 * Rotate an `Iterable` by `n` steps.
 * If the input is a non-empty array, the result is also a non-empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.rotate(['a', 'b', 'c', 'd', 'e'], 2)
 * console.log(result) // [ 'd', 'e', 'a', 'b', 'c' ]
 * ```
 *
 * @since 2.0.0
 */
const rotate = exports.rotate = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  if (isNonEmptyReadonlyArray(input)) {
    const len = input.length;
    const m = Math.round(n) % len;
    if (isOutOfBounds(Math.abs(m), input) || m === 0) {
      return copy(input);
    }
    if (m < 0) {
      const [f, s] = splitNonEmptyAt(input, -m);
      return appendAll(s, f);
    } else {
      return rotate(self, m - len);
    }
  }
  return [];
});
/**
 * Returns a function that checks if a `ReadonlyArray` contains a given value using a provided `isEquivalent` function.
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const isEquivalent = (a: number, b: number) => a === b
 * const containsNumber = Array.containsWith(isEquivalent)
 * const result = pipe([1, 2, 3, 4], containsNumber(3))
 * console.log(result) // true
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const containsWith = isEquivalent => (0, _Function.dual)(2, (self, a) => {
  for (const i of self) {
    if (isEquivalent(a, i)) {
      return true;
    }
  }
  return false;
});
exports.containsWith = containsWith;
const _equivalence = /*#__PURE__*/Equal.equivalence();
/**
 * Returns a function that checks if a `ReadonlyArray` contains a given value using the default `Equivalence`.
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const result = pipe(['a', 'b', 'c', 'd'], Array.contains('c'))
 * console.log(result) // true
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
const contains = exports.contains = /*#__PURE__*/containsWith(_equivalence);
/**
 * A useful recursion pattern for processing an `Iterable` to produce a new `Array`, often used for "chopping" up the input
 * `Iterable`. Typically chop is called with some function that will consume an initial prefix of the `Iterable` and produce a
 * value and the rest of the `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.chop([1, 2, 3, 4, 5], (as): [number, Array<number>] => [as[0] * 2, as.slice(1)])
 * console.log(result) // [2, 4, 6, 8, 10]
 *
 * // Explanation:
 * // The `chopFunction` takes the first element of the array, doubles it, and then returns it along with the rest of the array.
 * // The `chop` function applies this `chopFunction` recursively to the input array `[1, 2, 3, 4, 5]`,
 * // resulting in a new array `[2, 4, 6, 8, 10]`.
 * ```
 *
 * @since 2.0.0
 */
const chop = exports.chop = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const input = fromIterable(self);
  if (isNonEmptyReadonlyArray(input)) {
    const [b, rest] = f(input);
    const out = [b];
    let next = rest;
    while (internalArray.isNonEmptyArray(next)) {
      const [b, rest] = f(next);
      out.push(b);
      next = rest;
    }
    return out;
  }
  return [];
});
/**
 * Splits an `Iterable` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` can be `0`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.splitAt([1, 2, 3, 4, 5], 3)
 * console.log(result) // [[1, 2, 3], [4, 5]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
const splitAt = exports.splitAt = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = Array.from(self);
  const _n = Math.floor(n);
  if (isNonEmptyReadonlyArray(input)) {
    if (_n >= 1) {
      return splitNonEmptyAt(input, _n);
    }
    return [[], input];
  }
  return [input, []];
});
/**
 * Splits a `NonEmptyReadonlyArray` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` must be `>= 1`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.splitNonEmptyAt(["a", "b", "c", "d", "e"], 3)
 * console.log(result) // [["a", "b", "c"], ["d", "e"]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
const splitNonEmptyAt = exports.splitNonEmptyAt = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const _n = Math.max(1, Math.floor(n));
  return _n >= self.length ? [copy(self), []] : [prepend(self.slice(1, _n), headNonEmpty(self)), self.slice(_n)];
});
/**
 * Splits this iterable into `n` equally sized arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.split([1, 2, 3, 4, 5, 6, 7, 8], 3)
 * console.log(result) // [[1, 2, 3], [4, 5, 6], [7, 8]]
 * ```
 *
 * @since 2.0.0
 * @category splitting
 */
const split = exports.split = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  return chunksOf(input, Math.ceil(input.length / Math.floor(n)));
});
/**
 * Splits this iterable on the first element that matches this predicate.
 * Returns a tuple containing two arrays: the first one is before the match, and the second one is from the match onward.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.splitWhere([1, 2, 3, 4, 5], n => n > 3)
 * console.log(result) // [[1, 2, 3], [4, 5]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
const splitWhere = exports.splitWhere = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => span(self, (a, i) => !predicate(a, i)));
/**
 * Copies an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.copy([1, 2, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const copy = self => self.slice();
/**
 * Pads an array.
 * Returns a new array of length `n` with the elements of `array` followed by `fill` elements if `array` is shorter than `n`.
 * If `array` is longer than `n`, the returned array will be a slice of `array` containing the `n` first elements of `array`.
 * If `n` is less than or equal to 0, the returned array will be an empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.pad([1, 2, 3], 6, 0)
 * console.log(result) // [1, 2, 3, 0, 0, 0]
 * ```
 *
 * @since 3.8.4
 */
exports.copy = copy;
const pad = exports.pad = /*#__PURE__*/(0, _Function.dual)(3, (self, n, fill) => {
  if (self.length >= n) {
    return take(self, n);
  }
  return appendAll(self, makeBy(n - self.length, () => fill));
});
/**
 * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `Iterable`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts skip-type-checking
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `self`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.chunksOf([1, 2, 3, 4, 5], 2)
 * console.log(result) // [[1, 2], [3, 4], [5]]
 *
 * // Explanation:
 * // The `chunksOf` function takes an array of numbers `[1, 2, 3, 4, 5]` and a number `2`.
 * // It splits the array into chunks of length 2. Since the array length is not evenly divisible by 2,
 * // the last chunk contains the remaining elements.
 * // The result is `[[1, 2], [3, 4], [5]]`.
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
const chunksOf = exports.chunksOf = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  if (isNonEmptyReadonlyArray(input)) {
    return chop(input, splitNonEmptyAt(n));
  }
  return [];
});
/**
 * Creates sliding windows of size `n` from an `Iterable`.
 * If the number of elements is less than `n` or if `n` is not greater than zero,
 * an empty array is returned.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Array } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5]
 * assert.deepStrictEqual(Array.window(numbers, 3), [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
 * assert.deepStrictEqual(Array.window(numbers, 6), [])
 * ```
 *
 * @category splitting
 * @since 3.13.2
 */
const window = exports.window = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const input = fromIterable(self);
  if (n > 0 && isNonEmptyReadonlyArray(input)) {
    return Array.from({
      length: input.length - (n - 1)
    }, (_, index) => input.slice(index, index + n));
  }
  return [];
});
/**
 * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s using the provided `isEquivalent` function.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.groupWith(["a", "a", "b", "b", "b", "c", "a"], (x, y) => x === y)
 * console.log(result) // [["a", "a"], ["b", "b", "b"], ["c"], ["a"]]
 * ```
 *
 * @category grouping
 * @since 2.0.0
 */
const groupWith = exports.groupWith = /*#__PURE__*/(0, _Function.dual)(2, (self, isEquivalent) => chop(self, as => {
  const h = headNonEmpty(as);
  const out = [h];
  let i = 1;
  for (; i < as.length; i++) {
    const a = as[i];
    if (isEquivalent(a, h)) {
      out.push(a);
    } else {
      break;
    }
  }
  return [out, as.slice(i)];
}));
/**
 * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.group([1, 1, 2, 2, 2, 3, 1])
 * console.log(result) // [[1, 1], [2, 2, 2], [3], [1]]
 * ```
 *
 * @category grouping
 * @since 2.0.0
 */
const group = exports.group = /*#__PURE__*/groupWith(/*#__PURE__*/Equal.equivalence());
/**
 * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const people = [
 *   { name: "Alice", group: "A" },
 *   { name: "Bob", group: "B" },
 *   { name: "Charlie", group: "A" }
 * ]
 *
 * const result = Array.groupBy(people, person => person.group)
 * console.log(result)
 * // {
 * //  A: [{ name: "Alice", group: "A" }, { name: "Charlie", group: "A" }],
 * //  B: [{ name: "Bob", group: "B" }]
 * // }
 * ```
 *
 * @category grouping
 * @since 2.0.0
 */
const groupBy = exports.groupBy = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const out = {};
  for (const a of self) {
    const k = f(a);
    if (Object.prototype.hasOwnProperty.call(out, k)) {
      out[k].push(a);
    } else {
      out[k] = [a];
    }
  }
  return out;
});
/**
 * Calculates the union of two arrays using the provided equivalence relation.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
 * console.log(union) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const unionWith = exports.unionWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, isEquivalent) => {
  const a = fromIterable(self);
  const b = fromIterable(that);
  if (isNonEmptyReadonlyArray(a)) {
    if (isNonEmptyReadonlyArray(b)) {
      const dedupe = dedupeWith(isEquivalent);
      return dedupe(appendAll(a, b));
    }
    return a;
  }
  return b;
});
/**
 * Creates a union of two arrays, removing duplicates.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.union([1, 2], [2, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const union = exports.union = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => unionWith(self, that, _equivalence));
/**
 * Creates an `Array` of unique values that are included in all given `Iterable`s using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
 * const array2 = [{ id: 3 }, { id: 4 }, { id: 1 }]
 * const isEquivalent = (a: { id: number }, b: { id: number }) => a.id === b.id
 * const result = Array.intersectionWith(isEquivalent)(array2)(array1)
 * console.log(result) // [{ id: 1 }, { id: 3 }]
 * ```
 *
 * @since 2.0.0
 */
const intersectionWith = isEquivalent => {
  const has = containsWith(isEquivalent);
  return (0, _Function.dual)(2, (self, that) => {
    const bs = fromIterable(that);
    return fromIterable(self).filter(a => has(bs, a));
  });
};
/**
 * Creates an `Array` of unique values that are included in all given `Iterable`s.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.intersection([1, 2, 3], [3, 4, 1])
 * console.log(result) // [1, 3]
 * ```
 *
 * @since 2.0.0
 */
exports.intersectionWith = intersectionWith;
const intersection = exports.intersection = /*#__PURE__*/intersectionWith(_equivalence);
/**
 * Creates a `Array` of values not included in the other given `Iterable` using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const array1 = [1, 2, 3]
 * const array2 = [2, 3, 4]
 * const difference = Array.differenceWith<number>((a, b) => a === b)(array1, array2)
 * console.log(difference) // [1]
 * ```
 *
 * @since 2.0.0
 */
const differenceWith = isEquivalent => {
  const has = containsWith(isEquivalent);
  return (0, _Function.dual)(2, (self, that) => {
    const bs = fromIterable(that);
    return fromIterable(self).filter(a => !has(bs, a));
  });
};
/**
 * Creates a `Array` of values not included in the other given `Iterable`.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const difference = Array.difference([1, 2, 3], [2, 3, 4])
 * console.log(difference) // [1]
 * ```
 *
 * @since 2.0.0
 */
exports.differenceWith = differenceWith;
const difference = exports.difference = /*#__PURE__*/differenceWith(_equivalence);
/**
 * @category constructors
 * @since 2.0.0
 */
const empty = () => [];
/**
 * Constructs a new `NonEmptyArray<A>` from the specified value.
 *
 * @category constructors
 * @since 2.0.0
 */
exports.empty = empty;
const of = a => [a];
/**
 * @category mapping
 * @since 2.0.0
 */
exports.of = of;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.map(f));
/**
 * Applies a function to each element in an array and returns a new array containing the concatenated mapped elements.
 *
 * @category sequencing
 * @since 2.0.0
 */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  if (isEmptyReadonlyArray(self)) {
    return [];
  }
  const out = [];
  for (let i = 0; i < self.length; i++) {
    const inner = f(self[i], i);
    for (let j = 0; j < inner.length; j++) {
      out.push(inner[j]);
    }
  }
  return out;
});
/**
 * Combines multiple arrays into a single array by concatenating all elements
 * from each nested array. This function ensures that the structure of nested
 * arrays is collapsed into a single, flat array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.flatten([[1, 2], [], [3, 4], [], [5, 6]])
 * console.log(result) // [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @category sequencing
 * @since 2.0.0
 */
const flatten = exports.flatten = /*#__PURE__*/flatMap(_Function.identity);
/**
 * Applies a function to each element of the `Iterable` and filters based on the result, keeping the transformed values where the function returns `Some`.
 * This method combines filtering and mapping functionalities, allowing transformations and filtering of elements based on a single function pass.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * const evenSquares = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
 *
 * const result = Array.filterMap([1, 2, 3, 4, 5], evenSquares);
 * console.log(result) // [4, 16]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const filterMap = exports.filterMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const as = fromIterable(self);
  const out = [];
  for (let i = 0; i < as.length; i++) {
    const o = f(as[i], i);
    if (Option.isSome(o)) {
      out.push(o.value);
    }
  }
  return out;
});
/**
 * Applies a function to each element of the array and filters based on the result, stopping when a condition is not met.
 * This method combines filtering and mapping in a single pass, and short-circuits, i.e., stops processing, as soon as the function returns `None`.
 * This is useful when you need to transform an array but only up to the point where a certain condition holds true.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * const toSquareTillOdd = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
 *
 * const result = Array.filterMapWhile([2, 4, 5], toSquareTillOdd)
 * console.log(result) // [4, 16]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const filterMapWhile = exports.filterMapWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let i = 0;
  const out = [];
  for (const a of self) {
    const b = f(a, i);
    if (Option.isSome(b)) {
      out.push(b.value);
    } else {
      break;
    }
    i++;
  }
  return out;
});
/**
 * Applies a function to each element of the `Iterable`, categorizing the results into two separate arrays.
 * This function is particularly useful for operations where each element can result in two possible types,
 * and you want to separate these types into different collections. For instance, separating validation results
 * into successes and failures.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect";
 *
 * const isEven = (x: number) => x % 2 === 0
 *
 * const result = Array.partitionMap([1, 2, 3, 4, 5], x =>
 *   isEven(x) ? Either.right(x) : Either.left(x)
 * )
 * console.log(result)
 * // [
 * //   [1, 3, 5],
 * //   [2, 4]
 * // ]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const partitionMap = exports.partitionMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const left = [];
  const right = [];
  const as = fromIterable(self);
  for (let i = 0; i < as.length; i++) {
    const e = f(as[i], i);
    if (Either.isLeft(e)) {
      left.push(e.left);
    } else {
      right.push(e.right);
    }
  }
  return [left, right];
});
/**
 * Retrieves the `Some` values from an `Iterable` of `Option`s, collecting them into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * const result = Array.getSomes([Option.some(1), Option.none(), Option.some(2)])
 * console.log(result) // [1, 2]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const getSomes = exports.getSomes = /*#__PURE__*/filterMap(_Function.identity);
/**
 * Retrieves the `Left` values from an `Iterable` of `Either`s, collecting them into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect"
 *
 * const result = Array.getLefts([Either.right(1), Either.left("err"), Either.right(2)])
 * console.log(result) // ["err"]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const getLefts = self => {
  const out = [];
  for (const a of self) {
    if (Either.isLeft(a)) {
      out.push(a.left);
    }
  }
  return out;
};
/**
 * Retrieves the `Right` values from an `Iterable` of `Either`s, collecting them into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect"
 *
 * const result = Array.getRights([Either.right(1), Either.left("err"), Either.right(2)])
 * console.log(result) // [1, 2]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
exports.getLefts = getLefts;
const getRights = self => {
  const out = [];
  for (const a of self) {
    if (Either.isRight(a)) {
      out.push(a.right);
    }
  }
  return out;
};
/**
 * @category filtering
 * @since 2.0.0
 */
exports.getRights = getRights;
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const as = fromIterable(self);
  const out = [];
  for (let i = 0; i < as.length; i++) {
    if (predicate(as[i], i)) {
      out.push(as[i]);
    }
  }
  return out;
});
/**
 * Separate elements based on a predicate that also exposes the index of the element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.partition([1, 2, 3, 4], n => n % 2 === 0)
 * console.log(result) // [[1, 3], [2, 4]]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const partition = exports.partition = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const left = [];
  const right = [];
  const as = fromIterable(self);
  for (let i = 0; i < as.length; i++) {
    if (predicate(as[i], i)) {
      right.push(as[i]);
    } else {
      left.push(as[i]);
    }
  }
  return [left, right];
});
/**
 * Separates an `Iterable` into two arrays based on a predicate.
 *
 * @category filtering
 * @since 2.0.0
 */
const separate = exports.separate = /*#__PURE__*/partitionMap(_Function.identity);
/**
 * Reduces an array from the left.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.reduce([1, 2, 3], 0, (acc, n) => acc + n)
 * console.log(result) // 6
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, b, f) => fromIterable(self).reduce((b, a, i) => f(b, a, i), b));
/**
 * Reduces an array from the right.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.reduceRight([1, 2, 3], 0, (acc, n) => acc + n)
 * console.log(result) // 6
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
const reduceRight = exports.reduceRight = /*#__PURE__*/(0, _Function.dual)(3, (self, b, f) => fromIterable(self).reduceRight((b, a, i) => f(b, a, i), b));
/**
 * Lifts a predicate into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const isEven = (n: number) => n % 2 === 0
 * const to = Array.liftPredicate(isEven)
 * console.log(to(1)) // []
 * console.log(to(2)) // [2]
 * ```
 *
 * @category lifting
 * @since 2.0.0
 */
const liftPredicate = predicate => b => predicate(b) ? [b] : [];
/**
 * @category lifting
 * @since 2.0.0
 */
exports.liftPredicate = liftPredicate;
const liftOption = f => (...a) => fromOption(f(...a));
/**
 * @category conversions
 * @since 2.0.0
 */
exports.liftOption = liftOption;
const fromNullable = a => a == null ? empty() : [a];
/**
 * @category lifting
 * @since 2.0.0
 */
exports.fromNullable = fromNullable;
const liftNullable = f => (...a) => fromNullable(f(...a));
/**
 * Maps over an array and flattens the result, removing null and undefined values.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.flatMapNullable([1, 2, 3], n => (n % 2 === 0 ? null : n))
 * console.log(result) // [1, 3]
 *
 * // Explanation:
 * // The array of numbers [1, 2, 3] is mapped with a function that returns null for even numbers
 * // and the number itself for odd numbers. The resulting array [1, null, 3] is then flattened
 * // to remove null values, resulting in [1, 3].
 * ```
 *
 * @category sequencing
 * @since 2.0.0
 */
exports.liftNullable = liftNullable;
const flatMapNullable = exports.flatMapNullable = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(self, a => fromNullable(f(a))));
/**
 * Lifts a function that returns an `Either` into a function that returns an array.
 * If the `Either` is a left, it returns an empty array.
 * If the `Either` is a right, it returns an array with the right value.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect"
 *
 * const parseNumber = (s: string): Either.Either<number, Error> =>
 *   isNaN(Number(s)) ? Either.left(new Error("Not a number")) : Either.right(Number(s))
 *
 * const liftedParseNumber = Array.liftEither(parseNumber)
 *
 * const result1 = liftedParseNumber("42")
 * console.log(result1) // [42]
 *
 * const result2 = liftedParseNumber("not a number")
 * console.log(result2) // []
 *
 * // Explanation:
 * // The function parseNumber is lifted to return an array.
 * // When parsing "42", it returns an Either.left with the number 42, resulting in [42].
 * // When parsing "not a number", it returns an Either.right with an error, resulting in an empty array [].
 * ```
 *
 * @category lifting
 * @since 2.0.0
 */
const liftEither = f => (...a) => {
  const e = f(...a);
  return Either.isLeft(e) ? [] : [e.right];
};
/**
 * Check if a predicate holds true for every `ReadonlyArray` element.
 *
 * @category elements
 * @since 2.0.0
 */
exports.liftEither = liftEither;
const every = exports.every = /*#__PURE__*/(0, _Function.dual)(2, (self, refinement) => self.every(refinement));
/**
 * Check if a predicate holds true for some `ReadonlyArray` element.
 *
 * @category elements
 * @since 2.0.0
 */
const some = exports.some = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => self.some(predicate));
/**
 * Extends an array with a function that maps each subarray to a value.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.extend([1, 2, 3], as => as.length)
 * console.log(result) // [3, 2, 1]
 *
 * // Explanation:
 * // The function maps each subarray starting from each element to its length.
 * // The subarrays are: [1, 2, 3], [2, 3], [3].
 * // The lengths are: 3, 2, 1.
 * // Therefore, the result is [3, 2, 1].
 * ```
 *
 * @since 2.0.0
 */
const extend = exports.extend = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.map((_, i, as) => f(as.slice(i))));
/**
 * Finds the minimum element in an array based on a comparator.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order } from "effect"
 *
 * const result = Array.min([3, 1, 2], Order.number)
 * console.log(result) // 1
 * ```
 *
 * @since 2.0.0
 */
const min = exports.min = /*#__PURE__*/(0, _Function.dual)(2, (self, O) => self.reduce(Order.min(O)));
/**
 * Finds the maximum element in an array based on a comparator.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order } from "effect"
 *
 * const result = Array.max([3, 1, 2], Order.number)
 * console.log(result) // 3
 * ```
 *
 * @since 2.0.0
 */
const max = exports.max = /*#__PURE__*/(0, _Function.dual)(2, (self, O) => self.reduce(Order.max(O)));
/**
 * @category constructors
 * @since 2.0.0
 */
const unfold = (b, f) => {
  const out = [];
  let next = b;
  let o;
  while (Option.isSome(o = f(next))) {
    const [a, b] = o.value;
    out.push(a);
    next = b;
  }
  return out;
};
/**
 * This function creates and returns a new `Order` for an array of values based on a given `Order` for the elements of the array.
 * The returned `Order` compares two arrays by applying the given `Order` to each element in the arrays.
 * If all elements are equal, the arrays are then compared based on their length.
 * It is useful when you need to compare two arrays of the same type and you have a specific way of comparing each element of the array.
 *
 * @category instances
 * @since 2.0.0
 */
exports.unfold = unfold;
const getOrder = exports.getOrder = Order.array;
/**
 * Creates an equivalence relation for arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const eq = Array.getEquivalence<number>((a, b) => a === b)
 * console.log(eq([1, 2, 3], [1, 2, 3])) // true
 * ```
 *
 * @category instances
 * @since 2.0.0
 */
const getEquivalence = exports.getEquivalence = Equivalence.array;
/**
 * Performs a side-effect for each element of the `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * Array.forEach([1, 2, 3], n => console.log(n)) // 1, 2, 3
 * ```
 *
 * @since 2.0.0
 */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => fromIterable(self).forEach((a, i) => f(a, i)));
/**
 * Remove duplicates from an `Iterable` using the provided `isEquivalent` function,
 * preserving the order of the first occurrence of each element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dedupeWith([1, 2, 2, 3, 3, 3], (a, b) => a === b)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const dedupeWith = exports.dedupeWith = /*#__PURE__*/(0, _Function.dual)(2, (self, isEquivalent) => {
  const input = fromIterable(self);
  if (isNonEmptyReadonlyArray(input)) {
    const out = [headNonEmpty(input)];
    const rest = tailNonEmpty(input);
    for (const r of rest) {
      if (out.every(a => !isEquivalent(r, a))) {
        out.push(r);
      }
    }
    return out;
  }
  return [];
});
/**
 * Remove duplicates from an `Iterable`, preserving the order of the first occurrence of each element.
 * The equivalence used to compare elements is provided by `Equal.equivalence()` from the `Equal` module.
 *
 * @since 2.0.0
 */
const dedupe = self => dedupeWith(self, Equal.equivalence());
/**
 * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dedupeAdjacentWith([1, 1, 2, 2, 3, 3], (a, b) => a === b)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
exports.dedupe = dedupe;
const dedupeAdjacentWith = exports.dedupeAdjacentWith = /*#__PURE__*/(0, _Function.dual)(2, (self, isEquivalent) => {
  const out = [];
  let lastA = Option.none();
  for (const a of self) {
    if (Option.isNone(lastA) || !isEquivalent(a, lastA.value)) {
      out.push(a);
      lastA = Option.some(a);
    }
  }
  return out;
});
/**
 * Deduplicates adjacent elements that are identical.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dedupeAdjacent([1, 1, 2, 2, 3, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
const dedupeAdjacent = exports.dedupeAdjacent = /*#__PURE__*/dedupeAdjacentWith(/*#__PURE__*/Equal.equivalence());
/**
 * Joins the elements together with "sep" in the middle.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const strings = ["a", "b", "c"]
 * const joined = Array.join(strings, "-")
 * console.log(joined) // "a-b-c"
 * ```
 *
 * @since 2.0.0
 * @category folding
 */
const join = exports.join = /*#__PURE__*/(0, _Function.dual)(2, (self, sep) => fromIterable(self).join(sep));
/**
 * Statefully maps over the chunk, producing new elements of type `B`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.mapAccum([1, 2, 3], 0, (acc, n) => [acc + n, acc + n])
 * console.log(result) // [6, [1, 3, 6]]
 * ```
 *
 * @since 2.0.0
 * @category folding
 */
const mapAccum = exports.mapAccum = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => {
  let i = 0;
  let s1 = s;
  const out = [];
  for (const a of self) {
    const r = f(s1, a, i);
    s1 = r[0];
    out.push(r[1]);
    i++;
  }
  return [s1, out];
});
/**
 * Zips this chunk crosswise with the specified chunk using the specified combiner.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.cartesianWith([1, 2], ["a", "b"], (a, b) => `${a}-${b}`)
 * console.log(result) // ["1-a", "1-b", "2-a", "2-b"]
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
const cartesianWith = exports.cartesianWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => flatMap(self, a => map(that, b => f(a, b))));
/**
 * Zips this chunk crosswise with the specified chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.cartesian([1, 2], ["a", "b"])
 * console.log(result) // [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
const cartesian = exports.cartesian = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => cartesianWith(self, that, (a, b) => [a, b]));
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 * ```
 *
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 3.2.0
 */
const Do = exports.Do = /*#__PURE__*/of({});
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 * ```
 *
 * @see {@link bindTo}
 * @see {@link Do}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 3.2.0
 */
const bind = exports.bind = /*#__PURE__*/internalDoNotation.bind(map, flatMap);
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 * ```
 *
 * @see {@link bindTo}
 * @see {@link Do}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 3.2.0
 */
const bindTo = exports.bindTo = /*#__PURE__*/internalDoNotation.bindTo(map);
const let_ = exports.let = /*#__PURE__*/internalDoNotation.let_(map);
//# sourceMappingURL=Array.js.map