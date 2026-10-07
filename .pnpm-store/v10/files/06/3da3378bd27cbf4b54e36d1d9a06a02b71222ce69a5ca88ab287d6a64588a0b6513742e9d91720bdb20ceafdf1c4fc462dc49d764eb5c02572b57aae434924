"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeTail = exports.unsafeLast = exports.unsafeHead = exports.toChunk = exports.toArray = exports.take = exports.tail = exports.splitAt = exports.some = exports.size = exports.reverse = exports.reduceRight = exports.reduce = exports.prependAllReversed = exports.prependAll = exports.prepend = exports.partitionMap = exports.partition = exports.of = exports.nil = exports.map = exports.make = exports.last = exports.isNil = exports.isList = exports.isCons = exports.head = exports.getEquivalence = exports.fromIterable = exports.forEach = exports.flatMap = exports.findFirst = exports.filterMap = exports.filter = exports.every = exports.empty = exports.drop = exports.cons = exports.compact = exports.appendAll = exports.append = exports.TypeId = void 0;
var Arr = _interopRequireWildcard(require("./Array.js"));
var Chunk = _interopRequireWildcard(require("./Chunk.js"));
var Either = _interopRequireWildcard(require("./Either.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var Equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var Hash = _interopRequireWildcard(require("./Hash.js"));
var _Inspectable = require("./Inspectable.js");
var Option = _interopRequireWildcard(require("./Option.js"));
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * A data type for immutable linked lists representing ordered collections of elements of type `A`.
 *
 * This data type is optimal for last-in-first-out (LIFO), stack-like access patterns. If you need another access pattern, for example, random access or FIFO, consider using a collection more suited to this than `List`.
 *
 * **Performance**
 *
 * - Time: `List` has `O(1)` prepend and head/tail access. Most other operations are `O(n)` on the number of elements in the list. This includes the index-based lookup of elements, `length`, `append` and `reverse`.
 * - Space: `List` implements structural sharing of the tail list. This means that many operations are either zero- or constant-memory cost.
 *
 * @since 2.0.0
 */
/**
 * This file is ported from
 *
 * Scala (https://www.scala-lang.org)
 *
 * Copyright EPFL and Lightbend, Inc.
 *
 * Licensed under Apache License 2.0
 * (http://www.apache.org/licenses/LICENSE-2.0).
 */

/**
 * @since 2.0.0
 * @category symbol
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/List");
/**
 * Converts the specified `List` to an `Array`.
 *
 * @category conversions
 * @since 2.0.0
 */
const toArray = self => Arr.fromIterable(self);
/**
 * @category equivalence
 * @since 2.0.0
 */
exports.toArray = toArray;
const getEquivalence = isEquivalent => Equivalence.mapInput(Arr.getEquivalence(isEquivalent), toArray);
exports.getEquivalence = getEquivalence;
const _equivalence = /*#__PURE__*/getEquivalence(Equal.equals);
const ConsProto = {
  [TypeId]: TypeId,
  _tag: "Cons",
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Cons",
      values: toArray(this).map(_Inspectable.toJSON)
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  [Equal.symbol](that) {
    return isList(that) && this._tag === that._tag && _equivalence(this, that);
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.array(toArray(this)));
  },
  [Symbol.iterator]() {
    let done = false;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let self = this;
    return {
      next() {
        if (done) {
          return this.return();
        }
        if (self._tag === "Nil") {
          done = true;
          return this.return();
        }
        const value = self.head;
        self = self.tail;
        return {
          done,
          value
        };
      },
      return(value) {
        if (!done) {
          done = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
const makeCons = (head, tail) => {
  const cons = Object.create(ConsProto);
  cons.head = head;
  cons.tail = tail;
  return cons;
};
const NilHash = /*#__PURE__*/Hash.string("Nil");
const NilProto = {
  [TypeId]: TypeId,
  _tag: "Nil",
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  [Hash.symbol]() {
    return NilHash;
  },
  [Equal.symbol](that) {
    return isList(that) && this._tag === that._tag;
  },
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: true,
          value: undefined
        };
      }
    };
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
const _Nil = /*#__PURE__*/Object.create(NilProto);
/**
 * Returns `true` if the specified value is a `List`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isList = u => (0, _Predicate.hasProperty)(u, TypeId);
/**
 * Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
exports.isList = isList;
const isNil = self => self._tag === "Nil";
/**
 * Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
exports.isNil = isNil;
const isCons = self => self._tag === "Cons";
/**
 * Returns the number of elements contained in the specified `List`
 *
 * @since 2.0.0
 * @category getters
 */
exports.isCons = isCons;
const size = self => {
  let these = self;
  let len = 0;
  while (!isNil(these)) {
    len += 1;
    these = these.tail;
  }
  return len;
};
/**
 * Constructs a new empty `List<A>`.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.size = size;
const nil = () => _Nil;
/**
 * Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.nil = nil;
const cons = (head, tail) => makeCons(head, tail);
/**
 * Constructs a new empty `List<A>`.
 *
 * Alias of {@link nil}.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.cons = cons;
const empty = exports.empty = nil;
/**
 * Constructs a new `List<A>` from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const of = value => makeCons(value, _Nil);
/**
 * Creates a new `List` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.of = of;
const fromIterable = prefix => {
  const iterator = prefix[Symbol.iterator]();
  let next;
  if ((next = iterator.next()) && !next.done) {
    const result = makeCons(next.value, _Nil);
    let curr = result;
    while ((next = iterator.next()) && !next.done) {
      const temp = makeCons(next.value, _Nil);
      curr.tail = temp;
      curr = temp;
    }
    return result;
  } else {
    return _Nil;
  }
};
/**
 * Constructs a new `List<A>` from the specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.fromIterable = fromIterable;
const make = (...elements) => fromIterable(elements);
/**
 * Appends the specified element to the end of the `List`, creating a new `Cons`.
 *
 * @category concatenating
 * @since 2.0.0
 */
exports.make = make;
const append = exports.append = /*#__PURE__*/(0, _Function.dual)(2, (self, element) => appendAll(self, of(element)));
/**
 * Concatenates two lists, combining their elements.
 * If either list is non-empty, the result is also a non-empty list.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { List } from "effect"
 *
 * assert.deepStrictEqual(
 *   List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
 *   [1, 2, "a", "b"]
 * )
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
const appendAll = exports.appendAll = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => prependAll(that, self));
/**
 * Prepends the specified element to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
const prepend = exports.prepend = /*#__PURE__*/(0, _Function.dual)(2, (self, element) => cons(element, self));
/**
 * Prepends the specified prefix list to the beginning of the specified list.
 * If either list is non-empty, the result is also a non-empty list.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { List } from "effect"
 *
 * assert.deepStrictEqual(
 *   List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
 *   ["a", "b", 1, 2]
 * )
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
const prependAll = exports.prependAll = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => {
  if (isNil(self)) {
    return prefix;
  } else if (isNil(prefix)) {
    return self;
  } else {
    const result = makeCons(prefix.head, self);
    let curr = result;
    let that = prefix.tail;
    while (!isNil(that)) {
      const temp = makeCons(that.head, self);
      curr.tail = temp;
      curr = temp;
      that = that.tail;
    }
    return result;
  }
});
/**
 * Prepends the specified prefix list (in reverse order) to the beginning of the
 * specified list.
 *
 * @category concatenating
 * @since 2.0.0
 */
const prependAllReversed = exports.prependAllReversed = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => {
  let out = self;
  let pres = prefix;
  while (isCons(pres)) {
    out = makeCons(pres.head, out);
    pres = pres.tail;
  }
  return out;
});
/**
 * Drops the first `n` elements from the specified list.
 *
 * @since 2.0.0
 * @category combinators
 */
const drop = exports.drop = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  if (n <= 0) {
    return self;
  }
  if (n >= size(self)) {
    return _Nil;
  }
  let these = self;
  let i = 0;
  while (!isNil(these) && i < n) {
    these = these.tail;
    i += 1;
  }
  return these;
});
/**
 * Check if a predicate holds true for every `List` element.
 *
 * @since 2.0.0
 * @category elements
 */
const every = exports.every = /*#__PURE__*/(0, _Function.dual)(2, (self, refinement) => {
  for (const a of self) {
    if (!refinement(a)) {
      return false;
    }
  }
  return true;
});
/**
 * Check if a predicate holds true for some `List` element.
 *
 * @since 2.0.0
 * @category elements
 */
const some = exports.some = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  let these = self;
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return true;
    }
    these = these.tail;
  }
  return false;
});
/**
 * Filters a list using the specified predicate.
 *
 * @since 2.0.0
 * @category combinators
 */
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => noneIn(self, predicate, false));
// everything seen so far is not included
const noneIn = (self, predicate, isFlipped) => {
  while (true) {
    if (isNil(self)) {
      return _Nil;
    } else {
      if (predicate(self.head) !== isFlipped) {
        return allIn(self, self.tail, predicate, isFlipped);
      } else {
        self = self.tail;
      }
    }
  }
};
// everything from 'start' is included, if everything from this point is in we can return the origin
// start otherwise if we discover an element that is out we must create a new partial list.
const allIn = (start, remaining, predicate, isFlipped) => {
  while (true) {
    if (isNil(remaining)) {
      return start;
    } else {
      if (predicate(remaining.head) !== isFlipped) {
        remaining = remaining.tail;
      } else {
        return partialFill(start, remaining, predicate, isFlipped);
      }
    }
  }
};
// we have seen elements that should be included then one that should be excluded, start building
const partialFill = (origStart, firstMiss, predicate, isFlipped) => {
  const newHead = makeCons(unsafeHead(origStart), _Nil);
  let toProcess = unsafeTail(origStart);
  let currentLast = newHead;
  // we know that all elements are :: until at least firstMiss.tail
  while (!(toProcess === firstMiss)) {
    const newElem = makeCons(unsafeHead(toProcess), _Nil);
    currentLast.tail = newElem;
    currentLast = (0, _Function.unsafeCoerce)(newElem);
    toProcess = (0, _Function.unsafeCoerce)(toProcess.tail);
  }
  // at this point newHead points to a list which is a duplicate of all the 'in' elements up to the first miss.
  // currentLast is the last element in that list.
  // now we are going to try and share as much of the tail as we can, only moving elements across when we have to.
  let next = firstMiss.tail;
  let nextToCopy = (0, _Function.unsafeCoerce)(next); // the next element we would need to copy to our list if we cant share.
  while (!isNil(next)) {
    // generally recommended is next.isNonEmpty but this incurs an extra method call.
    const head = unsafeHead(next);
    if (predicate(head) !== isFlipped) {
      next = next.tail;
    } else {
      // its not a match - do we have outstanding elements?
      while (!(nextToCopy === next)) {
        const newElem = makeCons(unsafeHead(nextToCopy), _Nil);
        currentLast.tail = newElem;
        currentLast = newElem;
        nextToCopy = (0, _Function.unsafeCoerce)(nextToCopy.tail);
      }
      nextToCopy = (0, _Function.unsafeCoerce)(next.tail);
      next = next.tail;
    }
  }
  // we have remaining elements - they are unchanged attach them to the end
  if (!isNil(nextToCopy)) {
    currentLast.tail = nextToCopy;
  }
  return newHead;
};
/**
 * Filters and maps a list using the specified partial function. The resulting
 * list may be smaller than the input list due to the possibility of the partial
 * function not being defined for some elements.
 *
 * @since 2.0.0
 * @category combinators
 */
const filterMap = exports.filterMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const bs = [];
  for (const a of self) {
    const oa = f(a);
    if (Option.isSome(oa)) {
      bs.push(oa.value);
    }
  }
  return fromIterable(bs);
});
/**
 * Removes all `None` values from the specified list.
 *
 * @since 2.0.0
 * @category combinators
 */
const compact = self => filterMap(self, _Function.identity);
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
exports.compact = compact;
const findFirst = exports.findFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  let these = self;
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return Option.some(these.head);
    }
    these = these.tail;
  }
  return Option.none();
});
/**
 * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let rest = self;
  let head = undefined;
  let tail = undefined;
  while (!isNil(rest)) {
    let bs = f(rest.head);
    while (!isNil(bs)) {
      const next = makeCons(bs.head, _Nil);
      if (tail === undefined) {
        head = next;
      } else {
        tail.tail = next;
      }
      tail = next;
      bs = bs.tail;
    }
    rest = rest.tail;
  }
  if (head === undefined) {
    return _Nil;
  }
  return head;
});
/**
 * Applies the specified function to each element of the `List`.
 *
 * @since 2.0.0
 * @category combinators
 */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  let these = self;
  while (!isNil(these)) {
    f(these.head);
    these = these.tail;
  }
});
/**
 * Returns the first element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
const head = self => isNil(self) ? Option.none() : Option.some(self.head);
/**
 * Returns the last element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
exports.head = head;
const last = self => isNil(self) ? Option.none() : Option.some(unsafeLast(self));
/**
 * Applies the specified mapping function to each element of the list.
 *
 * @since 2.0.0
 * @category mapping
 */
exports.last = last;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  if (isNil(self)) {
    return self;
  } else {
    let i = 0;
    const head = makeCons(f(self.head, i++), _Nil);
    let nextHead = head;
    let rest = self.tail;
    while (!isNil(rest)) {
      const next = makeCons(f(rest.head, i++), _Nil);
      nextHead.tail = next;
      nextHead = next;
      rest = rest.tail;
    }
    return head;
  }
});
/**
 * Partition a list into two lists, where the first list contains all elements
 * that did not satisfy the specified predicate, and the second list contains
 * all elements that did satisfy the specified predicate.
 *
 * @since 2.0.0
 * @category combinators
 */
const partition = exports.partition = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const left = [];
  const right = [];
  for (const a of self) {
    if (predicate(a)) {
      right.push(a);
    } else {
      left.push(a);
    }
  }
  return [fromIterable(left), fromIterable(right)];
});
/**
 * Partition a list into two lists, where the first list contains all elements
 * for which the specified function returned a `Left`, and the second list
 * contains all elements for which the specified function returned a `Right`.
 *
 * @since 2.0.0
 * @category combinators
 */
const partitionMap = exports.partitionMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const left = [];
  const right = [];
  for (const a of self) {
    const e = f(a);
    if (Either.isLeft(e)) {
      left.push(e.left);
    } else {
      right.push(e.right);
    }
  }
  return [fromIterable(left), fromIterable(right)];
});
/**
 * Folds over the elements of the list using the specified function, using the
 * specified initial value.
 *
 * @since 2.0.0
 * @category folding
 */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => {
  let acc = zero;
  let these = self;
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
});
/**
 * Folds over the elements of the list using the specified function, beginning
 * with the last element of the list, using the specified initial value.
 *
 * @since 2.0.0
 * @category folding
 */
const reduceRight = exports.reduceRight = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => {
  let acc = zero;
  let these = reverse(self);
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
});
/**
 * Returns a new list with the elements of the specified list in reverse order.
 *
 * @since 2.0.0
 * @category elements
 */
const reverse = self => {
  let result = empty();
  let these = self;
  while (!isNil(these)) {
    result = prepend(result, these.head);
    these = these.tail;
  }
  return result;
};
/**
 * Splits the specified list into two lists at the specified index.
 *
 * @since 2.0.0
 * @category combinators
 */
exports.reverse = reverse;
const splitAt = exports.splitAt = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => [take(self, n), drop(self, n)]);
/**
 * Returns the tail of the specified list, or `None` if the list is empty.
 *
 * @since 2.0.0
 * @category getters
 */
const tail = self => isNil(self) ? Option.none() : Option.some(self.tail);
/**
 * Takes the specified number of elements from the beginning of the specified
 * list.
 *
 * @since 2.0.0
 * @category combinators
 */
exports.tail = tail;
const take = exports.take = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  if (n <= 0) {
    return _Nil;
  }
  if (n >= size(self)) {
    return self;
  }
  let these = make(unsafeHead(self));
  let current = unsafeTail(self);
  for (let i = 1; i < n; i++) {
    these = makeCons(unsafeHead(current), these);
    current = unsafeTail(current);
  }
  return reverse(these);
});
/**
 * Converts the specified `List` to a `Chunk`.
 *
 * @since 2.0.0
 * @category conversions
 */
const toChunk = self => Chunk.fromIterable(self);
exports.toChunk = toChunk;
const getExpectedListToBeNonEmptyErrorMessage = "Expected List to be non-empty";
/**
 * Unsafely returns the first element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeHead = self => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage);
  }
  return self.head;
};
/**
 * Unsafely returns the last element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
exports.unsafeHead = unsafeHead;
const unsafeLast = self => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage);
  }
  let these = self;
  let scout = self.tail;
  while (!isNil(scout)) {
    these = scout;
    scout = scout.tail;
  }
  return these.head;
};
/**
 * Unsafely returns the tail of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
exports.unsafeLast = unsafeLast;
const unsafeTail = self => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage);
  }
  return self.tail;
};
exports.unsafeTail = unsafeTail;
//# sourceMappingURL=List.js.map