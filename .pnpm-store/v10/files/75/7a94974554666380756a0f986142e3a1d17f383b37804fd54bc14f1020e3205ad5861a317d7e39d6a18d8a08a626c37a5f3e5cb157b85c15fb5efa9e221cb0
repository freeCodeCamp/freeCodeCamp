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
import * as Arr from "./Array.js"
import * as Chunk from "./Chunk.js"
import * as Either from "./Either.js"
import * as Equal from "./Equal.js"
import * as Equivalence from "./Equivalence.js"
import { dual, identity, unsafeCoerce } from "./Function.js"
import * as Hash from "./Hash.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import type { nonEmpty, NonEmptyIterable } from "./NonEmptyIterable.js"
import * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import { hasProperty, type Predicate, type Refinement } from "./Predicate.js"
import type { NoInfer } from "./Types.js"

/**
 * Represents an immutable linked list of elements of type `A`.
 *
 * A `List` is optimal for last-in-first-out (LIFO), stack-like access patterns.
 * If you need another access pattern, for example, random access or FIFO,
 * consider using a collection more suited for that other than `List`.
 *
 * @since 2.0.0
 * @category models
 */
export type List<A> = Cons<A> | Nil<A>

/**
 * @since 2.0.0
 * @category symbol
 */
export const TypeId: unique symbol = Symbol.for("effect/List")

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface Nil<out A> extends Iterable<A>, Equal.Equal, Pipeable, Inspectable {
  readonly [TypeId]: TypeId
  readonly _tag: "Nil"
}

/**
 * @since 2.0.0
 * @category models
 */
export interface Cons<out A> extends NonEmptyIterable<A>, Equal.Equal, Pipeable, Inspectable {
  readonly [TypeId]: TypeId
  readonly _tag: "Cons"
  readonly head: A
  readonly tail: List<A>
}

/**
 * Converts the specified `List` to an `Array`.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toArray = <A>(self: List<A>): Array<A> => Arr.fromIterable(self)

/**
 * @category equivalence
 * @since 2.0.0
 */
export const getEquivalence = <A>(isEquivalent: Equivalence.Equivalence<A>): Equivalence.Equivalence<List<A>> =>
  Equivalence.mapInput(Arr.getEquivalence(isEquivalent), toArray<A>)

const _equivalence = getEquivalence(Equal.equals)

const ConsProto: Omit<Cons<unknown>, "head" | "tail" | typeof nonEmpty> = {
  [TypeId]: TypeId,
  _tag: "Cons",
  toString(this: Cons<unknown>) {
    return format(this.toJSON())
  },
  toJSON(this: Cons<unknown>) {
    return {
      _id: "List",
      _tag: "Cons",
      values: toArray(this).map(toJSON)
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  [Equal.symbol](this: Cons<unknown>, that: unknown): boolean {
    return isList(that) &&
      this._tag === that._tag &&
      _equivalence(this, that)
  },
  [Hash.symbol](this: Cons<unknown>): number {
    return Hash.cached(this, Hash.array(toArray(this)))
  },
  [Symbol.iterator](this: Cons<unknown>): Iterator<unknown> {
    let done = false
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let self: List<unknown> = this
    return {
      next() {
        if (done) {
          return this.return!()
        }
        if (self._tag === "Nil") {
          done = true
          return this.return!()
        }
        const value: unknown = self.head
        self = self.tail
        return { done, value }
      },
      return(value?: unknown) {
        if (!done) {
          done = true
        }
        return { done: true, value }
      }
    }
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

interface MutableCons<A> extends Cons<A> {
  head: A
  tail: List<A>
}

const makeCons = <A>(head: A, tail: List<A>): MutableCons<A> => {
  const cons = Object.create(ConsProto)
  cons.head = head
  cons.tail = tail
  return cons
}

const NilHash = Hash.string("Nil")
const NilProto: Nil<unknown> = {
  [TypeId]: TypeId,
  _tag: "Nil",
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  [Hash.symbol](): number {
    return NilHash
  },
  [Equal.symbol](that: unknown): boolean {
    return isList(that) && this._tag === that._tag
  },
  [Symbol.iterator](): Iterator<unknown> {
    return {
      next() {
        return { done: true, value: undefined }
      }
    }
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
} as const

const _Nil = Object.create(NilProto) as Nil<never>

/**
 * Returns `true` if the specified value is a `List`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isList: {
  /**
   * Returns `true` if the specified value is a `List`, `false` otherwise.
   *
   * @since 2.0.0
   * @category refinements
   */
  <A>(u: Iterable<A>): u is List<A>
  /**
   * Returns `true` if the specified value is a `List`, `false` otherwise.
   *
   * @since 2.0.0
   * @category refinements
   */
  (u: unknown): u is List<unknown>
} = (u: unknown): u is List<unknown> => hasProperty(u, TypeId)

/**
 * Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isNil = <A>(self: List<A>): self is Nil<A> => self._tag === "Nil"

/**
 * Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isCons = <A>(self: List<A>): self is Cons<A> => self._tag === "Cons"

/**
 * Returns the number of elements contained in the specified `List`
 *
 * @since 2.0.0
 * @category getters
 */
export const size = <A>(self: List<A>): number => {
  let these = self
  let len = 0
  while (!isNil(these)) {
    len += 1
    these = these.tail
  }
  return len
}

/**
 * Constructs a new empty `List<A>`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const nil = <A = never>(): List<A> => _Nil

/**
 * Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const cons = <A>(head: A, tail: List<A>): Cons<A> => makeCons(head, tail)

/**
 * Constructs a new empty `List<A>`.
 *
 * Alias of {@link nil}.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty = nil

/**
 * Constructs a new `List<A>` from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const of = <A>(value: A): Cons<A> => makeCons(value, _Nil)

/**
 * Creates a new `List` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = <A>(prefix: Iterable<A>): List<A> => {
  const iterator = prefix[Symbol.iterator]()
  let next: IteratorResult<A>
  if ((next = iterator.next()) && !next.done) {
    const result = makeCons(next.value, _Nil)
    let curr = result
    while ((next = iterator.next()) && !next.done) {
      const temp = makeCons(next.value, _Nil)
      curr.tail = temp
      curr = temp
    }
    return result
  } else {
    return _Nil
  }
}

/**
 * Constructs a new `List<A>` from the specified values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = <Elements extends readonly [any, ...Array<any>]>(
  ...elements: Elements
): Cons<Elements[number]> => fromIterable(elements) as any

/**
 * Appends the specified element to the end of the `List`, creating a new `Cons`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const append: {
  /**
   * Appends the specified element to the end of the `List`, creating a new `Cons`.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <B>(element: B): <A>(self: List<A>) => Cons<A | B>
  /**
   * Appends the specified element to the end of the `List`, creating a new `Cons`.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: List<A>, element: B): Cons<A | B>
} = dual(2, <A, B>(self: List<A>, element: B): Cons<A | B> => appendAll(self, of(element)))

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
export const appendAll: {
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
  <S extends List<any>, T extends List<any>>(that: T): (self: S) => List.OrNonEmpty<S, T, List.Infer<S> | List.Infer<T>>
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
  <A, B>(self: List<A>, that: Cons<B>): Cons<A | B>
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
  <A, B>(self: Cons<A>, that: List<B>): Cons<A | B>
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
  <A, B>(self: List<A>, that: List<B>): List<A | B>
} = dual(2, <A, B>(self: List<A>, that: List<B>): List<A | B> => prependAll(that, self))

/**
 * Prepends the specified element to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prepend: {
  /**
   * Prepends the specified element to the beginning of the list.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <B>(element: B): <A>(self: List<A>) => Cons<A | B>
  /**
   * Prepends the specified element to the beginning of the list.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: List<A>, element: B): Cons<A | B>
} = dual(2, <A, B>(self: List<A>, element: B): Cons<A | B> => cons</**
 * Prepends the specified element to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
A | B>(element, self))

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
export const prependAll: {
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
  <S extends List<any>, T extends List<any>>(that: T): (self: S) => List.OrNonEmpty<S, T, List.Infer<S> | List.Infer<T>>
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
  <A, B>(self: List<A>, that: Cons<B>): Cons<A | B>
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
  <A, B>(self: Cons<A>, that: List<B>): Cons<A | B>
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
  <A, B>(self: List<A>, that: List<B>): List<A | B>
} = dual(2, <A, B>(self: List<A>, prefix: List<B>): List<A | B> => {
  if (isNil(self)) {
    return prefix
  } else if (isNil(prefix)) {
    return self
  } else {
    const result = makeCons</**
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
    A | B>(prefix.head, self)
    let curr = result
    let that = prefix.tail
    while (!isNil(that)) {
      const temp = makeCons</**
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
      A | B>(that.head, self)
      curr.tail = temp
      curr = temp
      that = that.tail
    }
    return result
  }
})

/**
 * Prepends the specified prefix list (in reverse order) to the beginning of the
 * specified list.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prependAllReversed: {
  /**
   * Prepends the specified prefix list (in reverse order) to the beginning of the
   * specified list.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <B>(prefix: List<B>): <A>(self: List<A>) => List<A | B>
  /**
   * Prepends the specified prefix list (in reverse order) to the beginning of the
   * specified list.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: List<A>, prefix: List<B>): List<A | B>
} = dual(2, <A, B>(self: List<A>, prefix: List<B>): List<A | B> => {
  let out: List<A | B> = self
  let pres = prefix
  while (isCons(pres)) {
    out = makeCons(pres.head, out)
    pres = pres.tail
  }
  return out
})

/**
 * Drops the first `n` elements from the specified list.
 *
 * @since 2.0.0
 * @category combinators
 */
export const drop: {
  /**
   * Drops the first `n` elements from the specified list.
   *
   * @since 2.0.0
   * @category combinators
   */
  (n: number): <A>(self: List<A>) => List<A>
  /**
   * Drops the first `n` elements from the specified list.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(self: List<A>, n: number): List<A>
} = dual(2, <A>(self: List<A>, n: number): List<A> => {
  if (n <= 0) {
    return self
  }
  if (n >= size(self)) {
    return _Nil
  }
  let these = self
  let i = 0
  while (!isNil(these) && i < n) {
    these = these.tail
    i += 1
  }
  return these
})

/**
 * Check if a predicate holds true for every `List` element.
 *
 * @since 2.0.0
 * @category elements
 */
export const every: {
  /**
   * Check if a predicate holds true for every `List` element.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => self is List<B>
  /**
   * Check if a predicate holds true for every `List` element.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(predicate: Predicate<A>): (self: List<A>) => boolean
  /**
   * Check if a predicate holds true for every `List` element.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): self is List<B>
  /**
   * Check if a predicate holds true for every `List` element.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(self: List<A>, predicate: Predicate<A>): boolean
} = dual(2, <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): self is List<B> => {
  for (const a of self) {
    if (!refinement(a)) {
      return false
    }
  }
  return true
})

/**
 * Check if a predicate holds true for some `List` element.
 *
 * @since 2.0.0
 * @category elements
 */
export const some: {
  /**
   * Check if a predicate holds true for some `List` element.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => self is Cons<A>
  /**
   * Check if a predicate holds true for some `List` element.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(self: List<A>, predicate: Predicate<A>): self is Cons<A>
} = dual(2, <A>(self: List<A>, predicate: Predicate<A>): self is Cons<A> => {
  let these = self
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return true
    }
    these = these.tail
  }
  return false
})

/**
 * Filters a list using the specified predicate.
 *
 * @since 2.0.0
 * @category combinators
 */
export const filter: {
  /**
   * Filters a list using the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => List<B>
  /**
   * Filters a list using the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => List<A>
  /**
   * Filters a list using the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): List<B>
  /**
   * Filters a list using the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(self: List<A>, predicate: Predicate<A>): List<A>
} = dual(2, <A>(self: List<A>, predicate: Predicate<A>): List<A> => noneIn(self, predicate, false))

// everything seen so far is not included
const noneIn = <A>(
  self: List<A>,
  predicate: Predicate<A>,
  isFlipped: boolean
): List<A> => {
  while (true) {
    if (isNil(self)) {
      return _Nil
    } else {
      if (predicate(self.head) !== isFlipped) {
        return allIn(self, self.tail, predicate, isFlipped)
      } else {
        self = self.tail
      }
    }
  }
}

// everything from 'start' is included, if everything from this point is in we can return the origin
// start otherwise if we discover an element that is out we must create a new partial list.
const allIn = <A>(
  start: List<A>,
  remaining: List<A>,
  predicate: Predicate<A>,
  isFlipped: boolean
): List<A> => {
  while (true) {
    if (isNil(remaining)) {
      return start
    } else {
      if (predicate(remaining.head) !== isFlipped) {
        remaining = remaining.tail
      } else {
        return partialFill(start, remaining, predicate, isFlipped)
      }
    }
  }
}

// we have seen elements that should be included then one that should be excluded, start building
const partialFill = <A>(
  origStart: List<A>,
  firstMiss: List<A>,
  predicate: Predicate<A>,
  isFlipped: boolean
): List<A> => {
  const newHead = makeCons<A>(unsafeHead(origStart)!, _Nil)
  let toProcess = unsafeTail(origStart)! as Cons<A>
  let currentLast = newHead

  // we know that all elements are :: until at least firstMiss.tail
  while (!(toProcess === firstMiss)) {
    const newElem = makeCons(unsafeHead(toProcess)!, _Nil)
    currentLast.tail = newElem
    currentLast = unsafeCoerce(newElem)
    toProcess = unsafeCoerce(toProcess.tail)
  }

  // at this point newHead points to a list which is a duplicate of all the 'in' elements up to the first miss.
  // currentLast is the last element in that list.

  // now we are going to try and share as much of the tail as we can, only moving elements across when we have to.
  let next = firstMiss.tail
  let nextToCopy: Cons<A> = unsafeCoerce(next) // the next element we would need to copy to our list if we cant share.
  while (!isNil(next)) {
    // generally recommended is next.isNonEmpty but this incurs an extra method call.
    const head = unsafeHead(next)!
    if (predicate(head) !== isFlipped) {
      next = next.tail
    } else {
      // its not a match - do we have outstanding elements?
      while (!(nextToCopy === next)) {
        const newElem = makeCons(unsafeHead(nextToCopy)!, _Nil)
        currentLast.tail = newElem
        currentLast = newElem
        nextToCopy = unsafeCoerce(nextToCopy.tail)
      }
      nextToCopy = unsafeCoerce(next.tail)
      next = next.tail
    }
  }

  // we have remaining elements - they are unchanged attach them to the end
  if (!isNil(nextToCopy)) {
    currentLast.tail = nextToCopy
  }
  return newHead
}

/**
 * Filters and maps a list using the specified partial function. The resulting
 * list may be smaller than the input list due to the possibility of the partial
 * function not being defined for some elements.
 *
 * @since 2.0.0
 * @category combinators
 */
export const filterMap: {
  /**
   * Filters and maps a list using the specified partial function. The resulting
   * list may be smaller than the input list due to the possibility of the partial
   * function not being defined for some elements.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(f: (a: A) => Option.Option<B>): (self: List<A>) => List<B>
  /**
   * Filters and maps a list using the specified partial function. The resulting
   * list may be smaller than the input list due to the possibility of the partial
   * function not being defined for some elements.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(self: List<A>, f: (a: A) => Option.Option<B>): List<B>
} = dual(2, <A, B>(self: List<A>, f: (a: A) => Option.Option<B>): List<B> => {
  const bs: Array<B> = []
  for (const a of self) {
    const oa = f(a)
    if (Option.isSome(oa)) {
      bs.push(oa.value)
    }
  }
  return fromIterable(bs)
})

/**
 * Removes all `None` values from the specified list.
 *
 * @since 2.0.0
 * @category combinators
 */
export const compact = <A>(self: List<Option.Option<A>>): List<A> => filterMap(self, identity)

/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
export const findFirst: {
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => Option.Option<B>
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => Option.Option<A>
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): Option.Option<B>
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: List<A>, predicate: Predicate<A>): Option.Option<A>
} = dual(2, <A>(self: List<A>, predicate: Predicate<A>): Option.Option<A> => {
  let these = self
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return Option.some(these.head)
    }
    these = these.tail
  }
  return Option.none()
})

/**
 * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap: {
  /**
   * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <S extends List<any>, T extends List<any>>(f: (a: List.Infer<S>, i: number) => T): (self: S) => List.AndNonEmpty<S, T, List.Infer<T>>
  /**
   * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, B>(self: Cons<A>, f: (a: A, i: number) => Cons<B>): Cons<B>
  /**
   * Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, B>(self: List<A>, f: (a: A, i: number) => List<B>): List<B>
} = dual(2, <A, B>(self: List<A>, f: (a: A) => List<B>): List<B> => {
  let rest = self
  let head: MutableCons<B> | undefined = undefined
  let tail: MutableCons<B> | undefined = undefined
  while (!isNil(rest)) {
    let bs = f(rest.head)
    while (!isNil(bs)) {
      const next = makeCons(bs.head, _Nil)
      if (tail === undefined) {
        head = next
      } else {
        tail.tail = next
      }
      tail = next
      bs = bs.tail
    }
    rest = rest.tail
  }
  if (head === undefined) {
    return _Nil
  }
  return head
})

/**
 * Applies the specified function to each element of the `List`.
 *
 * @since 2.0.0
 * @category combinators
 */
export const forEach: {
  /**
   * Applies the specified function to each element of the `List`.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(f: (a: A) => B): (self: List<A>) => void
  /**
   * Applies the specified function to each element of the `List`.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(self: List<A>, f: (a: A) => B): void
} = dual(2, <A, B>(self: List<A>, f: (a: A) => B): void => {
  let these = self
  while (!isNil(these)) {
    f(these.head)
    these = these.tail
  }
})

/**
 * Returns the first element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const head = <A>(self: List<A>): Option.Option<A> => isNil(self) ? Option.none() : Option.some(self.head)

/**
 * Returns the last element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const last = <A>(self: List<A>): Option.Option<A> => isNil(self) ? Option.none() : Option.some(unsafeLast(self)!)

/**
 * @since 2.0.0
 */
export declare namespace List {
  /**
   * @since 2.0.0
   */
  export type Infer<S extends List<any>> = S extends List<infer A> ? A : never

  /**
   * @since 2.0.0
   */
  export type With<S extends List<any>, A> = S extends Cons<any> ? Cons<A> : List<A>

  /**
   * @since 2.0.0
   */
  export type OrNonEmpty<S extends List<any>, T extends List<any>, A> = S extends Cons<any> ? Cons<A>
    : T extends Cons<any> ? Cons<A>
    : List<A>

  /**
   * @since 2.0.0
   */
  export type AndNonEmpty<S extends List<any>, T extends List<any>, A> = S extends Cons<any> ?
    T extends Cons<any> ? Cons<A>
    : List<A> :
    List<A>
}

/**
 * Applies the specified mapping function to each element of the list.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * Applies the specified mapping function to each element of the list.
   *
   * @since 2.0.0
   * @category mapping
   */
  <S extends List<any>, B>(f: (a: List.Infer<S>, i: number) => B): (self: S) => List.With<S, B>
  /**
   * Applies the specified mapping function to each element of the list.
   *
   * @since 2.0.0
   * @category mapping
   */
  <S extends List<any>, B>(self: S, f: (a: List.Infer<S>, i: number) => B): List.With<S, B>
} = dual(2, <A, B>(self: List<A>, f: (a: A, i: number) => B): List<B> => {
  if (isNil(self)) {
    return self as unknown as List<B>
  } else {
    let i = 0
    const head = makeCons(f(self.head, i++), _Nil)
    let nextHead = head
    let rest = self.tail
    while (!isNil(rest)) {
      const next = makeCons(f(rest.head, i++), _Nil)
      nextHead.tail = next
      nextHead = next
      rest = rest.tail
    }
    return head
  }
})

/**
 * Partition a list into two lists, where the first list contains all elements
 * that did not satisfy the specified predicate, and the second list contains
 * all elements that did satisfy the specified predicate.
 *
 * @since 2.0.0
 * @category combinators
 */
export const partition: {
  /**
   * Partition a list into two lists, where the first list contains all elements
   * that did not satisfy the specified predicate, and the second list contains
   * all elements that did satisfy the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: List<A>) => [excluded: List<Exclude<A, B>>, satisfying: List<B>]
  /**
   * Partition a list into two lists, where the first list contains all elements
   * that did not satisfy the specified predicate, and the second list contains
   * all elements that did satisfy the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: List<A>) => [excluded: List<A>, satisfying: List<A>]
  /**
   * Partition a list into two lists, where the first list contains all elements
   * that did not satisfy the specified predicate, and the second list contains
   * all elements that did satisfy the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B extends A>(self: List<A>, refinement: Refinement<A, B>): [excluded: List<Exclude<A, B>>, satisfying: List<B>]
  /**
   * Partition a list into two lists, where the first list contains all elements
   * that did not satisfy the specified predicate, and the second list contains
   * all elements that did satisfy the specified predicate.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(self: List<A>, predicate: Predicate<A>): [excluded: List<A>, satisfying: List<A>]
} = dual(2, <A>(self: List<A>, predicate: Predicate<A>): [excluded: List<A>, satisfying: List<A>] => {
  const left: Array<A> = []
  const right: Array<A> = []
  for (const a of self) {
    if (predicate(a)) {
      right.push(a)
    } else {
      left.push(a)
    }
  }
  return [fromIterable(left), fromIterable(right)]
})

/**
 * Partition a list into two lists, where the first list contains all elements
 * for which the specified function returned a `Left`, and the second list
 * contains all elements for which the specified function returned a `Right`.
 *
 * @since 2.0.0
 * @category combinators
 */
export const partitionMap: {
  /**
   * Partition a list into two lists, where the first list contains all elements
   * for which the specified function returned a `Left`, and the second list
   * contains all elements for which the specified function returned a `Right`.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B, C>(f: (a: A) => Either.Either<C, B>): (self: List<A>) => [left: List<B>, right: List<C>]
  /**
   * Partition a list into two lists, where the first list contains all elements
   * for which the specified function returned a `Left`, and the second list
   * contains all elements for which the specified function returned a `Right`.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B, C>(self: List<A>, f: (a: A) => Either.Either<C, B>): [left: List<B>, right: List<C>]
} = dual(2, <A, B, C>(self: List<A>, f: (a: A) => Either.Either<C, B>): [left: List<B>, right: List<C>] => {
  const left: Array<B> = []
  const right: Array<C> = []
  for (const a of self) {
    const e = f(a)
    if (Either.isLeft(e)) {
      left.push(e.left)
    } else {
      right.push(e.right)
    }
  }
  return [fromIterable(left), fromIterable(right)]
})

/**
 * Folds over the elements of the list using the specified function, using the
 * specified initial value.
 *
 * @since 2.0.0
 * @category folding
 */
export const reduce: {
  /**
   * Folds over the elements of the list using the specified function, using the
   * specified initial value.
   *
   * @since 2.0.0
   * @category folding
   */
  <Z, A>(zero: Z, f: (b: Z, a: A) => Z): (self: List<A>) => Z
  /**
   * Folds over the elements of the list using the specified function, using the
   * specified initial value.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, Z>(self: List<A>, zero: Z, f: (b: Z, a: A) => Z): Z
} = dual(3, <A, Z>(self: List<A>, zero: Z, f: (b: Z, a: A) => Z): Z => {
  let acc = zero
  let these = self
  while (!isNil(these)) {
    acc = f(acc, these.head)
    these = these.tail
  }
  return acc
})

/**
 * Folds over the elements of the list using the specified function, beginning
 * with the last element of the list, using the specified initial value.
 *
 * @since 2.0.0
 * @category folding
 */
export const reduceRight: {
  /**
   * Folds over the elements of the list using the specified function, beginning
   * with the last element of the list, using the specified initial value.
   *
   * @since 2.0.0
   * @category folding
   */
  <Z, A>(zero: Z, f: (accumulator: Z, value: A) => Z): (self: List<A>) => Z
  /**
   * Folds over the elements of the list using the specified function, beginning
   * with the last element of the list, using the specified initial value.
   *
   * @since 2.0.0
   * @category folding
   */
  <Z, A>(self: List<A>, zero: Z, f: (accumulator: Z, value: A) => Z): Z
} = dual(3, <Z, A>(self: List<A>, zero: Z, f: (accumulator: Z, value: A) => Z): Z => {
  let acc = zero
  let these = reverse(self)
  while (!isNil(these)) {
    acc = f(acc, these.head)
    these = these.tail
  }
  return acc
})

/**
 * Returns a new list with the elements of the specified list in reverse order.
 *
 * @since 2.0.0
 * @category elements
 */
export const reverse = <A>(self: List<A>): List<A> => {
  let result = empty<A>()
  let these = self
  while (!isNil(these)) {
    result = prepend(result, these.head)
    these = these.tail
  }
  return result
}

/**
 * Splits the specified list into two lists at the specified index.
 *
 * @since 2.0.0
 * @category combinators
 */
export const splitAt: {
  /**
   * Splits the specified list into two lists at the specified index.
   *
   * @since 2.0.0
   * @category combinators
   */
  (n: number): <A>(self: List<A>) => [beforeIndex: List<A>, fromIndex: List<A>]
  /**
   * Splits the specified list into two lists at the specified index.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(self: List<A>, n: number): [beforeIndex: List<A>, fromIndex: List<A>]
} = dual(2, <A>(self: List<A>, n: number): [List<A>, List<A>] => [take(self, n), drop(self, n)])

/**
 * Returns the tail of the specified list, or `None` if the list is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const tail = <A>(self: List<A>): Option.Option<List<A>> => isNil(self) ? Option.none() : Option.some(self.tail)

/**
 * Takes the specified number of elements from the beginning of the specified
 * list.
 *
 * @since 2.0.0
 * @category combinators
 */
export const take: {
  /**
   * Takes the specified number of elements from the beginning of the specified
   * list.
   *
   * @since 2.0.0
   * @category combinators
   */
  (n: number): <A>(self: List<A>) => List<A>
  /**
   * Takes the specified number of elements from the beginning of the specified
   * list.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A>(self: List<A>, n: number): List<A>
} = dual(2, <A>(self: List<A>, n: number): List<A> => {
  if (n <= 0) {
    return _Nil
  }
  if (n >= size(self)) {
    return self
  }
  let these = make(unsafeHead(self))
  let current = unsafeTail(self)!
  for (let i = 1; i < n; i++) {
    these = makeCons(unsafeHead(current), these)
    current = unsafeTail(current!)
  }
  return reverse(these)
})

/**
 * Converts the specified `List` to a `Chunk`.
 *
 * @since 2.0.0
 * @category conversions
 */
export const toChunk = <A>(self: List<A>): Chunk.Chunk<A> => Chunk.fromIterable(self)

const getExpectedListToBeNonEmptyErrorMessage = "Expected List to be non-empty"

/**
 * Unsafely returns the first element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeHead = <A>(self: List<A>): A => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage)
  }
  return self.head
}

/**
 * Unsafely returns the last element of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeLast = <A>(self: List<A>): A => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage)
  }
  let these = self
  let scout = self.tail
  while (!isNil(scout)) {
    these = scout
    scout = scout.tail
  }
  return these.head
}

/**
 * Unsafely returns the tail of the specified `List`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeTail = <A>(self: List<A>): List<A> => {
  if (isNil(self)) {
    throw new Error(getExpectedListToBeNonEmptyErrorMessage)
  }
  return self.tail
}
