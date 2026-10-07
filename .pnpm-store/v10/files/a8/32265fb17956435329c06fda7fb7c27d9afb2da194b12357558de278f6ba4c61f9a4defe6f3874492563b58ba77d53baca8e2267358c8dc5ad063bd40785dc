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
import * as Arr from "./Array.js";
import * as Chunk from "./Chunk.js";
import * as Either from "./Either.js";
import * as Equal from "./Equal.js";
import * as Equivalence from "./Equivalence.js";
import { dual, identity, unsafeCoerce } from "./Function.js";
import * as Hash from "./Hash.js";
import { format, NodeInspectSymbol, toJSON } from "./Inspectable.js";
import * as Option from "./Option.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty } from "./Predicate.js";
/**
 * @since 2.0.0
 * @category symbol
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/List");
/**
 * Converts the specified `List` to an `Array`.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toArray = self => Arr.fromIterable(self);
/**
 * @category equivalence
 * @since 2.0.0
 */
export const getEquivalence = isEquivalent => Equivalence.mapInput(Arr.getEquivalence(isEquivalent), toArray);
const _equivalence = /*#__PURE__*/getEquivalence(Equal.equals);
const ConsProto = {
  [TypeId]: TypeId,
  _tag: "Cons",
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Cons",
      values: toArray(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
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
    return pipeArguments(this, arguments);
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
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    };
  },
  [NodeInspectSymbol]() {
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
    return pipeArguments(this, arguments);
  }
};
const _Nil = /*#__PURE__*/Object.create(NilProto);
/**
 * Returns `true` if the specified value is a `List`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isList = u => hasProperty(u, TypeId);
/**
 * Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isNil = self => self._tag === "Nil";
/**
 * Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isCons = self => self._tag === "Cons";
/**
 * Returns the number of elements contained in the specified `List`
 *
 * @since 2.0.0
 * @category getters
 */
export const size = self => {
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
export const nil = () => _Nil;
/**
 * Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const cons = (head, tail) => makeCons(head, tail);
/**
 * Constructs a new empty `List<A>`.
 *
 * Alias of {@link nil}.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty = nil;
/**
 * Constructs a new `List<A>` from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const of = value => makeCons(value, _Nil);
/**
 * Creates a new `List` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = prefix => {
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
export const make = (...elements) => fromIterable(elements);
/**
 * Appends the specified element to the end of the `List`, creating a new `Cons`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const append = /*#__PURE__*/dual(2, (self, element) => appendAll(self, of(element)));
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
export const appendAll = /*#__PURE__*/dual(2, (self, that) => prependAll(that, self));
/**
 * Prepends the specified element to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prepend = /*#__PURE__*/dual(2, (self, element) => cons(element, self));
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
export const prependAll = /*#__PURE__*/dual(2, (self, prefix) => {
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
export const prependAllReversed = /*#__PURE__*/dual(2, (self, prefix) => {
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
export const drop = /*#__PURE__*/dual(2, (self, n) => {
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
export const every = /*#__PURE__*/dual(2, (self, refinement) => {
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
export const some = /*#__PURE__*/dual(2, (self, predicate) => {
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
export const filter = /*#__PURE__*/dual(2, (self, predicate) => noneIn(self, predicate, false));
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
    currentLast = unsafeCoerce(newElem);
    toProcess = unsafeCoerce(toProcess.tail);
  }
  // at this point newHead points to a list which is a duplicate of all the 'in' elements up to the first miss.
  // currentLast is the last element in that list.
  // now we are going to try and share as much of the tail as we can, only moving elements across when we have to.
  let next = firstMiss.tail;
  let nextToCopy = unsafeCoerce(next); // the next element we would need to copy to our list if we cant share.
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
        nextToCopy = unsafeCoerce(nextToCopy.tail);
      }
      nextToCopy = unsafeCoerce(next.tail);
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
export const filterMap = /*#__PURE__*/dual(2, (self, f) => {
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
export const compact = self => filterMap(self, identity);
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
export const findFirst = /*#__PURE__*/dual(2, (self, predicate) => {
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
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
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
export const forEach = /*#__PURE__*/dual(2, (self, f) => {
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
export const head = self => isNil(self) ? Option.none() : Option.some(self.head);
/**
 * Returns the last element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const last = self => isNil(self) ? Option.none() : Option.some(unsafeLast(self));
/**
 * Applies the specified mapping function to each element of the list.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = /*#__PURE__*/dual(2, (self, f) => {
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
export const partition = /*#__PURE__*/dual(2, (self, predicate) => {
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
export const partitionMap = /*#__PURE__*/dual(2, (self, f) => {
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
export const reduce = /*#__PURE__*/dual(3, (self, zero, f) => {
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
export const reduceRight = /*#__PURE__*/dual(3, (self, zero, f) => {
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
export const reverse = self => {
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
export const splitAt = /*#__PURE__*/dual(2, (self, n) => [take(self, n), drop(self, n)]);
/**
 * Returns the tail of the specified list, or `None` if the list is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const tail = self => isNil(self) ? Option.none() : Option.some(self.tail);
/**
 * Takes the specified number of elements from the beginning of the specified
 * list.
 *
 * @since 2.0.0
 * @category combinators
 */
export const take = /*#__PURE__*/dual(2, (self, n) => {
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
export const toChunk = self => Chunk.fromIterable(self);
const getExpectedListToBeNonEmptyErrorMessage = "Expected List to be non-empty";
/**
 * Unsafely returns the first element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeHead = self => {
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
export const unsafeLast = self => {
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
export const unsafeTail = self => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage);
  }
  return self.tail;
};
//# sourceMappingURL=List.js.map