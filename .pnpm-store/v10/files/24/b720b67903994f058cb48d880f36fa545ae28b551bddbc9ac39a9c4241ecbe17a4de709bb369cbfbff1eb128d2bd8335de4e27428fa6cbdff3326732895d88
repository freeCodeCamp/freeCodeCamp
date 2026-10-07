"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.zip = exports.unsafeHead = exports.unfold = exports.takeWhile = exports.take = exports.some = exports.size = exports.scan = exports.replicate = exports.reduce = exports.range = exports.prependAll = exports.prepend = exports.of = exports.map = exports.makeBy = exports.isEmpty = exports.intersperse = exports.head = exports.groupWith = exports.groupBy = exports.group = exports.getSomes = exports.getRights = exports.getLefts = exports.fromRecord = exports.forEach = exports.flatten = exports.flatMapNullable = exports.flatMap = exports.findLast = exports.findFirst = exports.filterMapWhile = exports.filterMap = exports.filter = exports.empty = exports.drop = exports.dedupeAdjacentWith = exports.dedupeAdjacent = exports.countBy = exports.containsWith = exports.contains = exports.chunksOf = exports.cartesianWith = exports.cartesian = exports.appendAll = exports.append = void 0;
var E = _interopRequireWildcard(require("./Either.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var _Function = require("./Function.js");
var O = _interopRequireWildcard(require("./Option.js"));
var _Predicate = require("./Predicate.js");
var Tuple = _interopRequireWildcard(require("./Tuple.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions for working with Iterables in TypeScript.
 *
 * @since 2.0.0
 */

/**
 * Return a `Iterable` with element `i` initialized with `f(i)`.
 *
 * If the `length` is not specified, the `Iterable` will be infinite.
 *
 * **Note**. `length` is normalized to an integer >= 1.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { makeBy } from "effect/Iterable"
 *
 * assert.deepStrictEqual(Array.from(makeBy(n => n * 2, { length: 5 })), [0, 2, 4, 6, 8])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
const makeBy = (f, options) => {
  const max = options?.length !== undefined ? Math.max(1, Math.floor(options.length)) : Infinity;
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < max) {
            return {
              value: f(i++),
              done: false
            };
          }
          return {
            done: true,
            value: undefined
          };
        }
      };
    }
  };
};
/**
 * Return a `Iterable` containing a range of integers, including both endpoints.
 *
 * If `end` is omitted, the range will not have an upper bound.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { range } from "effect/Iterable"
 *
 * assert.deepStrictEqual(Array.from(range(1, 3)), [1, 2, 3])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
exports.makeBy = makeBy;
const range = (start, end) => {
  if (end === undefined) {
    return makeBy(i => start + i);
  }
  return makeBy(i => start + i, {
    length: start <= end ? end - start + 1 : 1
  });
};
/**
 * Return a `Iterable` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { replicate } from "effect/Iterable"
 *
 * assert.deepStrictEqual(Array.from(replicate("a", 3)), ["a", "a", "a"])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
exports.range = range;
const replicate = exports.replicate = /*#__PURE__*/(0, _Function.dual)(2, (a, n) => makeBy(() => a, {
  length: n
}));
/**
 * Takes a record and returns an Iterable of tuples containing its keys and values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { fromRecord } from "effect/Iterable"
 *
 * const x = { a: 1, b: 2, c: 3 }
 * assert.deepStrictEqual(Array.from(fromRecord(x)), [["a", 1], ["b", 2], ["c", 3]])
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
const fromRecord = self => ({
  *[Symbol.iterator]() {
    for (const key in self) {
      if (Object.prototype.hasOwnProperty.call(self, key)) {
        yield [key, self[key]];
      }
    }
  }
});
/**
 * Prepend an element to the front of an `Iterable`, creating a new `Iterable`.
 *
 * @category concatenating
 * @since 2.0.0
 */
exports.fromRecord = fromRecord;
const prepend = exports.prepend = /*#__PURE__*/(0, _Function.dual)(2, (self, head) => prependAll(self, [head]));
/**
 * Prepends the specified prefix iterable to the beginning of the specified iterable.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.prependAll([1, 2], ["a", "b"])),
 *   ["a", "b", 1, 2]
 * )
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
const prependAll = exports.prependAll = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => appendAll(that, self));
/**
 * Append an element to the end of an `Iterable`, creating a new `Iterable`.
 *
 * @category concatenating
 * @since 2.0.0
 */
const append = exports.append = /*#__PURE__*/(0, _Function.dual)(2, (self, last) => appendAll(self, [last]));
/**
 * Concatenates two iterables, combining their elements.
 *
 * @category concatenating
 * @since 2.0.0
 */
const appendAll = exports.appendAll = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => ({
  [Symbol.iterator]() {
    const iterA = self[Symbol.iterator]();
    let doneA = false;
    let iterB;
    return {
      next() {
        if (!doneA) {
          const r = iterA.next();
          if (r.done) {
            doneA = true;
            iterB = that[Symbol.iterator]();
            return iterB.next();
          }
          return r;
        }
        return iterB.next();
      }
    };
  }
}));
/**
 * Reduce an `Iterable` from the left, keeping all intermediate results instead of only the final result.
 *
 * @category folding
 * @since 2.0.0
 */
const scan = exports.scan = /*#__PURE__*/(0, _Function.dual)(3, (self, b, f) => ({
  [Symbol.iterator]() {
    let acc = b;
    let iterator;
    function next() {
      if (iterator === undefined) {
        iterator = self[Symbol.iterator]();
        return {
          done: false,
          value: acc
        };
      }
      const result = iterator.next();
      if (result.done) {
        return result;
      }
      acc = f(acc, result.value);
      return {
        done: false,
        value: acc
      };
    }
    return {
      next
    };
  }
}));
/**
 * Determine if an `Iterable` is empty
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isEmpty } from "effect/Iterable"
 *
 * assert.deepStrictEqual(isEmpty([]), true);
 * assert.deepStrictEqual(isEmpty([1, 2, 3]), false);
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isEmpty = self => {
  const iterator = self[Symbol.iterator]();
  return iterator.next().done === true;
};
/**
 * Return the number of elements in a `Iterable`.
 *
 * @category getters
 * @since 2.0.0
 */
exports.isEmpty = isEmpty;
const size = self => {
  const iterator = self[Symbol.iterator]();
  let count = 0;
  while (!iterator.next().done) {
    count++;
  }
  return count;
};
/**
 * Get the first element of a `Iterable`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
exports.size = size;
const head = self => {
  const iterator = self[Symbol.iterator]();
  const result = iterator.next();
  return result.done ? O.none() : O.some(result.value);
};
/**
 * Get the first element of a `Iterable`, or throw an error if the `Iterable` is empty.
 *
 * @category getters
 * @since 3.3.0
 */
exports.head = head;
const unsafeHead = self => {
  const iterator = self[Symbol.iterator]();
  const result = iterator.next();
  if (result.done) throw new Error("unsafeHead: empty iterable");
  return result.value;
};
/**
 * Keep only a max number of elements from the start of an `Iterable`, creating a new `Iterable`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 2.0.0
 */
exports.unsafeHead = unsafeHead;
const take = exports.take = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => ({
  [Symbol.iterator]() {
    let i = 0;
    const iterator = self[Symbol.iterator]();
    return {
      next() {
        if (i < n) {
          i++;
          return iterator.next();
        }
        return {
          done: true,
          value: undefined
        };
      }
    };
  }
}));
/**
 * Calculate the longest initial Iterable for which all element satisfy the specified predicate, creating a new `Iterable`.
 *
 * @category getters
 * @since 2.0.0
 */
const takeWhile = exports.takeWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        const result = iterator.next();
        if (result.done || !predicate(result.value, i++)) {
          return {
            done: true,
            value: undefined
          };
        }
        return result;
      }
    };
  }
}));
/**
 * Drop a max number of elements from the start of an `Iterable`
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 2.0.0
 */
const drop = exports.drop = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        while (i < n) {
          const result = iterator.next();
          if (result.done) {
            return {
              done: true,
              value: undefined
            };
          }
          i++;
        }
        return iterator.next();
      }
    };
  }
}));
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
const findFirst = exports.findFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let i = 0;
  for (const a of self) {
    const o = f(a, i);
    if ((0, _Predicate.isBoolean)(o)) {
      if (o) {
        return O.some(a);
      }
    } else {
      if (O.isSome(o)) {
        return o;
      }
    }
    i++;
  }
  return O.none();
});
/**
 * Find the last element for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
const findLast = exports.findLast = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let i = 0;
  let last = O.none();
  for (const a of self) {
    const o = f(a, i);
    if ((0, _Predicate.isBoolean)(o)) {
      if (o) {
        last = O.some(a);
      }
    } else {
      if (O.isSome(o)) {
        last = o;
      }
    }
    i++;
  }
  return last;
});
/**
 * Takes two `Iterable`s and returns an `Iterable` of corresponding pairs.
 *
 * @category zipping
 * @since 2.0.0
 */
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWith(self, that, Tuple.make));
/**
 * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results. If one
 * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
 *
 * @category zipping
 * @since 2.0.0
 */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => ({
  [Symbol.iterator]() {
    const selfIterator = self[Symbol.iterator]();
    const thatIterator = that[Symbol.iterator]();
    return {
      next() {
        const selfResult = selfIterator.next();
        const thatResult = thatIterator.next();
        if (selfResult.done || thatResult.done) {
          return {
            done: true,
            value: undefined
          };
        }
        return {
          done: false,
          value: f(selfResult.value, thatResult.value)
        };
      }
    };
  }
}));
/**
 * Places an element in between members of an `Iterable`.
 * If the input is a non-empty array, the result is also a non-empty array.
 *
 * @since 2.0.0
 */
const intersperse = exports.intersperse = /*#__PURE__*/(0, _Function.dual)(2, (self, middle) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let next = iterator.next();
    let emitted = false;
    return {
      next() {
        if (next.done) {
          return next;
        } else if (emitted) {
          emitted = false;
          return {
            done: false,
            value: middle
          };
        }
        emitted = true;
        const result = next;
        next = iterator.next();
        return result;
      }
    };
  }
}));
/**
 * Returns a function that checks if an `Iterable` contains a given value using a provided `isEquivalent` function.
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
 * Returns a function that checks if a `Iterable` contains a given value using the default `Equivalence`.
 *
 * @category elements
 * @since 2.0.0
 */
const contains = exports.contains = /*#__PURE__*/containsWith(_equivalence);
/**
 * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `Iterable`.
 *
 * @category splitting
 * @since 2.0.0
 */
const chunksOf = exports.chunksOf = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const safeN = Math.max(1, Math.floor(n));
  return {
    [Symbol.iterator]() {
      let iterator = self[Symbol.iterator]();
      return {
        next() {
          if (iterator === undefined) {
            return {
              done: true,
              value: undefined
            };
          }
          const chunk = [];
          for (let i = 0; i < safeN; i++) {
            const result = iterator.next();
            if (result.done) {
              iterator = undefined;
              return chunk.length === 0 ? {
                done: true,
                value: undefined
              } : {
                done: false,
                value: chunk
              };
            }
            chunk.push(result.value);
          }
          return {
            done: false,
            value: chunk
          };
        }
      };
    }
  };
});
/**
 * Group equal, consecutive elements of an `Iterable` into `NonEmptyArray`s using the provided `isEquivalent` function.
 *
 * @category grouping
 * @since 2.0.0
 */
const groupWith = exports.groupWith = /*#__PURE__*/(0, _Function.dual)(2, (self, isEquivalent) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let nextResult;
    return {
      next() {
        let result;
        if (nextResult !== undefined) {
          if (nextResult.done) {
            return {
              done: true,
              value: undefined
            };
          }
          result = nextResult;
          nextResult = undefined;
        } else {
          result = iterator.next();
          if (result.done) {
            return {
              done: true,
              value: undefined
            };
          }
        }
        const chunk = [result.value];
        while (true) {
          const next = iterator.next();
          if (next.done || !isEquivalent(result.value, next.value)) {
            nextResult = next;
            return {
              done: false,
              value: chunk
            };
          }
          chunk.push(next.value);
        }
      }
    };
  }
}));
/**
 * Group equal, consecutive elements of an `Iterable` into `NonEmptyArray`s.
 *
 * @category grouping
 * @since 2.0.0
 */
const group = exports.group = /*#__PURE__*/groupWith(/*#__PURE__*/Equal.equivalence());
/**
 * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
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
const constEmpty = {
  [Symbol.iterator]() {
    return constEmptyIterator;
  }
};
const constEmptyIterator = {
  next() {
    return {
      done: true,
      value: undefined
    };
  }
};
/**
 * @category constructors
 * @since 2.0.0
 */
const empty = () => constEmpty;
/**
 * Constructs a new `Iterable<A>` from the specified value.
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
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        const result = iterator.next();
        if (result.done) {
          return {
            done: true,
            value: undefined
          };
        }
        return {
          done: false,
          value: f(result.value, i++)
        };
      }
    };
  }
}));
/**
 * Applies a function to each element in an Iterable and returns a new Iterable containing the concatenated mapped elements.
 *
 * @category sequencing
 * @since 2.0.0
 */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatten(map(self, f)));
/**
 * Flattens an Iterable of Iterables into a single Iterable
 *
 * @category sequencing
 * @since 2.0.0
 */
const flatten = self => ({
  [Symbol.iterator]() {
    const outerIterator = self[Symbol.iterator]();
    let innerIterator;
    function next() {
      if (innerIterator === undefined) {
        const next = outerIterator.next();
        if (next.done) {
          return next;
        }
        innerIterator = next.value[Symbol.iterator]();
      }
      const result = innerIterator.next();
      if (result.done) {
        innerIterator = undefined;
        return next();
      }
      return result;
    }
    return {
      next
    };
  }
});
/**
 * @category filtering
 * @since 2.0.0
 */
exports.flatten = flatten;
const filterMap = exports.filterMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        let result = iterator.next();
        while (!result.done) {
          const b = f(result.value, i++);
          if (O.isSome(b)) {
            return {
              done: false,
              value: b.value
            };
          }
          result = iterator.next();
        }
        return {
          done: true,
          value: undefined
        };
      }
    };
  }
}));
/**
 * Transforms all elements of the `Iterable` for as long as the specified function returns some value
 *
 * @category filtering
 * @since 2.0.0
 */
const filterMapWhile = exports.filterMapWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        const result = iterator.next();
        if (result.done) {
          return {
            done: true,
            value: undefined
          };
        }
        const b = f(result.value, i++);
        if (O.isSome(b)) {
          return {
            done: false,
            value: b.value
          };
        }
        return {
          done: true,
          value: undefined
        };
      }
    };
  }
}));
/**
 * Retrieves the `Some` values from an `Iterable` of `Option`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable, Option } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.getSomes([Option.some(1), Option.none(), Option.some(2)])),
 *   [1, 2]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const getSomes = exports.getSomes = /*#__PURE__*/filterMap(_Function.identity);
/**
 * Retrieves the `Left` values from an `Iterable` of `Either`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.getLefts([Either.right(1), Either.left("err"), Either.right(2)])),
 *   ["err"]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
const getLefts = self => filterMap(self, E.getLeft);
/**
 * Retrieves the `Right` values from an `Iterable` of `Either`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.getRights([Either.right(1), Either.left("err"), Either.right(2)])),
 *   [1, 2]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
exports.getLefts = getLefts;
const getRights = self => filterMap(self, E.getRight);
/**
 * @category filtering
 * @since 2.0.0
 */
exports.getRights = getRights;
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        let result = iterator.next();
        while (!result.done) {
          if (predicate(result.value, i++)) {
            return {
              done: false,
              value: result.value
            };
          }
          result = iterator.next();
        }
        return {
          done: true,
          value: undefined
        };
      }
    };
  }
}));
/**
 * @category sequencing
 * @since 2.0.0
 */
const flatMapNullable = exports.flatMapNullable = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => filterMap(self, a => {
  const b = f(a);
  return b == null ? O.none() : O.some(b);
}));
/**
 * Check if a predicate holds true for some `Iterable` element.
 *
 * @category elements
 * @since 2.0.0
 */
const some = exports.some = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (predicate(a, i++)) {
      return true;
    }
  }
  return false;
});
/**
 * @category constructors
 * @since 2.0.0
 */
const unfold = (b, f) => ({
  [Symbol.iterator]() {
    let next = b;
    return {
      next() {
        const o = f(next);
        if (O.isNone(o)) {
          return {
            done: true,
            value: undefined
          };
        }
        const [a, b] = o.value;
        next = b;
        return {
          done: false,
          value: a
        };
      }
    };
  }
});
/**
 * Iterate over the `Iterable` applying `f`.
 *
 * @since 2.0.0
 */
exports.unfold = unfold;
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let i = 0;
  for (const a of self) {
    f(a, i++);
  }
});
/**
 * @category folding
 * @since 2.0.0
 */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, b, f) => {
  if (Array.isArray(self)) {
    return self.reduce(f, b);
  }
  let i = 0;
  let result = b;
  for (const n of self) {
    result = f(result, n, i++);
  }
  return result;
});
/**
 * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
 *
 * @since 2.0.0
 */
const dedupeAdjacentWith = exports.dedupeAdjacentWith = /*#__PURE__*/(0, _Function.dual)(2, (self, isEquivalent) => ({
  [Symbol.iterator]() {
    const iterator = self[Symbol.iterator]();
    let first = true;
    let last;
    function next() {
      const result = iterator.next();
      if (result.done) {
        return {
          done: true,
          value: undefined
        };
      }
      if (first) {
        first = false;
        last = result.value;
        return result;
      }
      const current = result.value;
      if (isEquivalent(last, current)) {
        return next();
      }
      last = current;
      return result;
    }
    return {
      next
    };
  }
}));
/**
 * Deduplicates adjacent elements that are identical.
 *
 * @since 2.0.0
 */
const dedupeAdjacent = exports.dedupeAdjacent = /*#__PURE__*/dedupeAdjacentWith(/*#__PURE__*/Equal.equivalence());
/**
 * Zips this Iterable crosswise with the specified Iterable using the specified combiner.
 *
 * @since 2.0.0
 * @category elements
 */
const cartesianWith = exports.cartesianWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => flatMap(self, a => map(that, b => f(a, b))));
/**
 * Zips this Iterable crosswise with the specified Iterable.
 *
 * @since 2.0.0
 * @category elements
 */
const cartesian = exports.cartesian = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => cartesianWith(self, that, (a, b) => [a, b]));
/**
 * Counts all the element of the given iterable that pass the given predicate
 *
 * **Example**
 *
 * ```ts
 * import { Iterable } from "effect"
 *
 * const result = Iterable.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
 * console.log(result) // 2
 * ```
 *
 * @category folding
 * @since 3.16.0
 */
const countBy = exports.countBy = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let count = 0;
  let i = 0;
  for (const a of self) {
    if (f(a, i)) {
      count++;
    }
    i++;
  }
  return count;
});
//# sourceMappingURL=Iterable.js.map