/**
 * @since 2.0.0
 */
import * as RA from "./Array.js"
import type { NonEmptyReadonlyArray } from "./Array.js"
import type { Either } from "./Either.js"
import * as Equal from "./Equal.js"
import * as Equivalence from "./Equivalence.js"
import { dual, identity, pipe } from "./Function.js"
import * as Hash from "./Hash.js"
import type { TypeLambda } from "./HKT.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import type { NonEmptyIterable } from "./NonEmptyIterable.js"
import type { Option } from "./Option.js"
import * as O from "./Option.js"
import * as Order from "./Order.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import { hasProperty, type Predicate, type Refinement } from "./Predicate.js"
import type { Covariant, NoInfer } from "./Types.js"

const TypeId: unique symbol = Symbol.for("effect/Chunk") as TypeId

/**
 * @category symbol
 * @since 2.0.0
 */
export type TypeId = typeof TypeId

/**
 * @category models
 * @since 2.0.0
 */
export interface Chunk<out A> extends Iterable<A>, Equal.Equal, Pipeable, Inspectable {
  readonly [TypeId]: {
    readonly _A: Covariant<A>
  }
  readonly length: number
  /** @internal */
  right: Chunk<A>
  /** @internal */
  left: Chunk<A>
  /** @internal */
  backing: Backing<A>
  /** @internal */
  depth: number
}

/**
 * @category model
 * @since 2.0.0
 */
export interface NonEmptyChunk<out A> extends Chunk<A>, NonEmptyIterable<A> {}

/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface ChunkTypeLambda extends TypeLambda {
  readonly type: Chunk<this["Target"]>
}

type Backing<A> =
  | IArray<A>
  | IConcat<A>
  | ISingleton<A>
  | IEmpty
  | ISlice<A>

interface IArray<A> {
  readonly _tag: "IArray"
  readonly array: ReadonlyArray<A>
}

interface IConcat<A> {
  readonly _tag: "IConcat"
  readonly left: Chunk<A>
  readonly right: Chunk<A>
}

interface ISingleton<A> {
  readonly _tag: "ISingleton"
  readonly a: A
}

interface IEmpty {
  readonly _tag: "IEmpty"
}

interface ISlice<A> {
  readonly _tag: "ISlice"
  readonly chunk: Chunk<A>
  readonly offset: number
  readonly length: number
}

function copy<A>(
  src: ReadonlyArray<A>,
  srcPos: number,
  dest: Array<A>,
  destPos: number,
  len: number
) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i]!
  }
  return dest
}

const emptyArray: ReadonlyArray<never> = []

/**
 * Compares the two chunks of equal length using the specified function
 *
 * @category equivalence
 * @since 2.0.0
 */
export const getEquivalence = <A>(isEquivalent: Equivalence.Equivalence<A>): Equivalence.Equivalence<Chunk<A>> =>
  Equivalence.make((self, that) =>
    self.length === that.length && toReadonlyArray(self).every((value, i) => isEquivalent(value, unsafeGet(that, i)))
  )

const _equivalence = getEquivalence(Equal.equals)

const ChunkProto: Omit<Chunk<unknown>, "backing" | "depth" | "left" | "length" | "right"> = {
  [TypeId]: {
    _A: (_: never) => _
  },
  toString<A>(this: Chunk<A>) {
    return format(this.toJSON())
  },
  toJSON<A>(this: Chunk<A>) {
    return {
      _id: "Chunk",
      values: toReadonlyArray(this).map(toJSON)
    }
  },
  [NodeInspectSymbol]<A>(this: Chunk<A>) {
    return this.toJSON()
  },
  [Equal.symbol]<A>(this: Chunk<A>, that: unknown): boolean {
    return isChunk(that) && _equivalence(this, that)
  },
  [Hash.symbol]<A>(this: Chunk<A>): number {
    return Hash.cached(this, Hash.array(toReadonlyArray(this)))
  },
  [Symbol.iterator]<A>(this: Chunk<A>): Iterator<A> {
    switch (this.backing._tag) {
      case "IArray": {
        return this.backing.array[Symbol.iterator]()
      }
      case "IEmpty": {
        return emptyArray[Symbol.iterator]()
      }
      default: {
        return toReadonlyArray(this)[Symbol.iterator]()
      }
    }
  },
  pipe<A>(this: Chunk<A>) {
    return pipeArguments(this, arguments)
  }
}

const makeChunk = <A>(backing: Backing<A>): Chunk<A> => {
  const chunk = Object.create(ChunkProto)
  chunk.backing = backing
  switch (backing._tag) {
    case "IEmpty": {
      chunk.length = 0
      chunk.depth = 0
      chunk.left = chunk
      chunk.right = chunk
      break
    }
    case "IConcat": {
      chunk.length = backing.left.length + backing.right.length
      chunk.depth = 1 + Math.max(backing.left.depth, backing.right.depth)
      chunk.left = backing.left
      chunk.right = backing.right
      break
    }
    case "IArray": {
      chunk.length = backing.array.length
      chunk.depth = 0
      chunk.left = _empty
      chunk.right = _empty
      break
    }
    case "ISingleton": {
      chunk.length = 1
      chunk.depth = 0
      chunk.left = _empty
      chunk.right = _empty
      break
    }
    case "ISlice": {
      chunk.length = backing.length
      chunk.depth = backing.chunk.depth + 1
      chunk.left = _empty
      chunk.right = _empty
      break
    }
  }
  return chunk
}

/**
 * Checks if `u` is a `Chunk<unknown>`
 *
 * @category constructors
 * @since 2.0.0
 */
export const isChunk: {
  /**
   * Checks if `u` is a `Chunk<unknown>`
   *
   * @category constructors
   * @since 2.0.0
   */
  <A>(u: Iterable<A>): u is Chunk<A>
  /**
   * Checks if `u` is a `Chunk<unknown>`
   *
   * @category constructors
   * @since 2.0.0
   */
  (u: unknown): u is Chunk<unknown>
} = (u: unknown): u is Chunk<unknown> => hasProperty(u, TypeId)

const _empty = makeChunk<never>({ _tag: "IEmpty" })

/**
 * @category constructors
 * @since 2.0.0
 */
export const empty: <A = never>() => Chunk<A> = () => _empty

/**
 * Builds a `NonEmptyChunk` from an non-empty collection of elements.
 *
 * @category constructors
 * @since 2.0.0
 */
export const make = <As extends readonly [any, ...ReadonlyArray<any>]>(...as: As): NonEmptyChunk<As[number]> =>
  unsafeFromNonEmptyArray(as)

/**
 * Builds a `NonEmptyChunk` from a single element.
 *
 * @category constructors
 * @since 2.0.0
 */
export const of = <A>(a: A): NonEmptyChunk<A> => makeChunk({ _tag: "ISingleton", a }) as any

/**
 * Creates a new `Chunk` from an iterable collection of values.
 *
 * @category constructors
 * @since 2.0.0
 */
export const fromIterable = <A>(self: Iterable<A>): Chunk<A> =>
  isChunk(self) ? self : unsafeFromArray(RA.fromIterable(self))

const copyToArray = <A>(self: Chunk<A>, array: Array<any>, initial: number): void => {
  switch (self.backing._tag) {
    case "IArray": {
      copy(self.backing.array, 0, array, initial, self.length)
      break
    }
    case "IConcat": {
      copyToArray(self.left, array, initial)
      copyToArray(self.right, array, initial + self.left.length)
      break
    }
    case "ISingleton": {
      array[initial] = self.backing.a
      break
    }
    case "ISlice": {
      let i = 0
      let j = initial
      while (i < self.length) {
        array[j] = unsafeGet(self, i)
        i += 1
        j += 1
      }
      break
    }
  }
}

const toArray_ = <A>(self: Chunk<A>): Array<A> => toReadonlyArray(self).slice()

/**
 * Converts a `Chunk` into an `Array`. If the provided `Chunk` is non-empty
 * (`NonEmptyChunk`), the function will return a `NonEmptyArray`, ensuring the
 * non-empty property is preserved.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toArray: <S extends Chunk<any>>(
  self: S
) => S extends NonEmptyChunk<any> ? RA.NonEmptyArray<Chunk.Infer<S>> : Array<Chunk.Infer<S>> = toArray_ as any

const toReadonlyArray_ = <A>(self: Chunk<A>): ReadonlyArray<A> => {
  switch (self.backing._tag) {
    case "IEmpty": {
      return emptyArray
    }
    case "IArray": {
      return self.backing.array
    }
    default: {
      const arr = new Array<A>(self.length)
      copyToArray(self, arr, 0)
      self.backing = {
        _tag: "IArray",
        array: arr
      }
      self.left = _empty
      self.right = _empty
      self.depth = 0
      return arr
    }
  }
}

/**
 * Converts a `Chunk` into a `ReadonlyArray`. If the provided `Chunk` is
 * non-empty (`NonEmptyChunk`), the function will return a
 * `NonEmptyReadonlyArray`, ensuring the non-empty property is preserved.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toReadonlyArray: <S extends Chunk<any>>(
  self: S
) => S extends NonEmptyChunk<any> ? RA.NonEmptyReadonlyArray<Chunk.Infer<S>> : ReadonlyArray<Chunk.Infer<S>> =
  toReadonlyArray_ as any

const reverseChunk = <A>(self: Chunk<A>): Chunk<A> => {
  switch (self.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return self
    case "IArray": {
      return makeChunk({ _tag: "IArray", array: RA.reverse(self.backing.array) })
    }
    case "IConcat": {
      return makeChunk({ _tag: "IConcat", left: reverse(self.backing.right), right: reverse(self.backing.left) })
    }
    case "ISlice":
      return unsafeFromArray(RA.reverse(toReadonlyArray(self)))
  }
}

/**
 * Reverses the order of elements in a `Chunk`.
 * Importantly, if the input chunk is a `NonEmptyChunk`, the reversed chunk will also be a `NonEmptyChunk`.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const chunk = Chunk.make(1, 2, 3)
 * const result = Chunk.reverse(chunk)
 *
 * console.log(result)
 * // { _id: 'Chunk', values: [ 3, 2, 1 ] }
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export const reverse: <S extends Chunk<any>>(self: S) => Chunk.With<S, Chunk.Infer<S>> = reverseChunk as any

/**
 * This function provides a safe way to read a value at a particular index from a `Chunk`.
 *
 * @category elements
 * @since 2.0.0
 */
export const get: {
  /**
   * This function provides a safe way to read a value at a particular index from a `Chunk`.
   *
   * @category elements
   * @since 2.0.0
   */
  (index: number): <A>(self: Chunk<A>) => Option<A>
  /**
   * This function provides a safe way to read a value at a particular index from a `Chunk`.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, index: number): Option<A>
} = dual(
  2,
  <A>(self: Chunk<A>, index: number): Option<A> =>
    index < 0 || index >= self.length ? O.none() : O.some(unsafeGet(self, index))
)

/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeFromArray = <A>(self: ReadonlyArray<A>): Chunk<A> =>
  self.length === 0 ? empty() : self.length === 1 ? of(self[0]) : makeChunk({ _tag: "IArray", array: self })

/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeFromNonEmptyArray = <A>(self: NonEmptyReadonlyArray<A>): NonEmptyChunk<A> =>
  unsafeFromArray(self) as any

/**
 * Gets an element unsafely, will throw on out of bounds
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeGet: {
  /**
   * Gets an element unsafely, will throw on out of bounds
   *
   * @since 2.0.0
   * @category unsafe
   */
  (index: number): <A>(self: Chunk<A>) => A
  /**
   * Gets an element unsafely, will throw on out of bounds
   *
   * @since 2.0.0
   * @category unsafe
   */
  <A>(self: Chunk<A>, index: number): A
} = dual(2, <A>(self: Chunk<A>, index: number): A => {
  switch (self.backing._tag) {
    case "IEmpty": {
      throw new Error(`Index out of bounds`)
    }
    case "ISingleton": {
      if (index !== 0) {
        throw new Error(`Index out of bounds`)
      }
      return self.backing.a
    }
    case "IArray": {
      if (index >= self.length || index < 0) {
        throw new Error(`Index out of bounds`)
      }
      return self.backing.array[index]!
    }
    case "IConcat": {
      return index < self.left.length
        ? unsafeGet(self.left, index)
        : unsafeGet(self.right, index - self.left.length)
    }
    case "ISlice": {
      return unsafeGet(self.backing.chunk, index + self.backing.offset)
    }
  }
})

/**
 * Appends the specified element to the end of the `Chunk`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const append: {
  /**
   * Appends the specified element to the end of the `Chunk`.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A2>(a: A2): <A>(self: Chunk<A>) => NonEmptyChunk<A2 | A>
  /**
   * Appends the specified element to the end of the `Chunk`.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, A2>(self: Chunk<A>, a: A2): NonEmptyChunk<A | A2>
} = dual(2, <A, A2>(self: Chunk<A>, a: A2): NonEmptyChunk<A | A2> => appendAll(self, of(a)))

/**
 * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prepend: {
  /**
   * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <B>(elem: B): <A>(self: Chunk<A>) => NonEmptyChunk<B | A>
  /**
   * Prepend an element to the front of a `Chunk`, creating a new `NonEmptyChunk`.
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, elem: B): NonEmptyChunk<A | B>
} = dual(2, <A, B>(self: Chunk<A>, elem: B): NonEmptyChunk<A | B> => appendAll(of(elem), self))

/**
 * Takes the first up to `n` elements from the chunk
 *
 * @since 2.0.0
 */
export const take: {
  /**
   * Takes the first up to `n` elements from the chunk
   *
   * @since 2.0.0
   */
  (n: number): <A>(self: Chunk<A>) => Chunk<A>
  /**
   * Takes the first up to `n` elements from the chunk
   *
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, n: number): Chunk<A>
} = dual(2, <A>(self: Chunk<A>, n: number): Chunk<A> => {
  if (n <= 0) {
    return _empty
  } else if (n >= self.length) {
    return self
  } else {
    switch (self.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self.backing.chunk,
          length: n,
          offset: self.backing.offset
        })
      }
      case "IConcat": {
        if (n > self.left.length) {
          return makeChunk({
            _tag: "IConcat",
            left: self.left,
            right: take(self.right, n - self.left.length)
          })
        }

        return take(self.left, n)
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self,
          offset: 0,
          length: n
        })
      }
    }
  }
})

/**
 * Drops the first up to `n` elements from the chunk
 *
 * @since 2.0.0
 */
export const drop: {
  /**
   * Drops the first up to `n` elements from the chunk
   *
   * @since 2.0.0
   */
  (n: number): <A>(self: Chunk<A>) => Chunk<A>
  /**
   * Drops the first up to `n` elements from the chunk
   *
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, n: number): Chunk<A>
} = dual(2, <A>(self: Chunk<A>, n: number): Chunk<A> => {
  if (n <= 0) {
    return self
  } else if (n >= self.length) {
    return _empty
  } else {
    switch (self.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self.backing.chunk,
          offset: self.backing.offset + n,
          length: self.backing.length - n
        })
      }
      case "IConcat": {
        if (n > self.left.length) {
          return drop(self.right, n - self.left.length)
        }
        return makeChunk({
          _tag: "IConcat",
          left: drop(self.left, n),
          right: self.right
        })
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self,
          offset: n,
          length: self.length - n
        })
      }
    }
  }
})

/**
 * Drops the last `n` elements.
 *
 * @since 2.0.0
 */
export const dropRight: {
  /**
   * Drops the last `n` elements.
   *
   * @since 2.0.0
   */
  (n: number): <A>(self: Chunk<A>) => Chunk<A>
  /**
   * Drops the last `n` elements.
   *
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, n: number): Chunk<A>
} = dual(2, <A>(self: Chunk<A>, n: number): Chunk<A> => take(self, Math.max(0, self.length - n)))

/**
 * Drops all elements so long as the predicate returns true.
 *
 * @since 2.0.0
 */
export const dropWhile: {
  /**
   * Drops all elements so long as the predicate returns true.
   *
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Chunk<A>
  /**
   * Drops all elements so long as the predicate returns true.
   *
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A>
} = dual(2, <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A> => {
  const arr = toReadonlyArray(self)
  const len = arr.length
  let i = 0
  while (i < len && predicate(arr[i]!)) {
    i++
  }
  return drop(self, i)
})

/**
 * Prepends the specified prefix chunk to the beginning of the specified chunk.
 * If either chunk is non-empty, the result is also a non-empty chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
 *
 * console.log(result)
 * // [ "a", "b", 1, 2 ]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export const prependAll: {
  /**
   * Prepends the specified prefix chunk to the beginning of the specified chunk.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ "a", "b", 1, 2 ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <S extends Chunk<any>, T extends Chunk<any>>(that: T): (self: S) => Chunk.OrNonEmpty<S, T, Chunk.Infer<S> | Chunk.Infer<T>>
  /**
   * Prepends the specified prefix chunk to the beginning of the specified chunk.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ "a", "b", 1, 2 ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, that: NonEmptyChunk<B>): NonEmptyChunk<A | B>
  /**
   * Prepends the specified prefix chunk to the beginning of the specified chunk.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ "a", "b", 1, 2 ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: NonEmptyChunk<A>, that: Chunk<B>): NonEmptyChunk<A | B>
  /**
   * Prepends the specified prefix chunk to the beginning of the specified chunk.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.prependAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ "a", "b", 1, 2 ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B>
} = dual(2, <A, B>(self: NonEmptyChunk<A>, that: Chunk<B>): Chunk<A | B> => appendAll(that, self))

/**
 * Concatenates two chunks, combining their elements.
 * If either chunk is non-empty, the result is also a non-empty chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
 *
 * console.log(result)
 * // [ 1, 2, "a", "b" ]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export const appendAll: {
  /**
   * Concatenates two chunks, combining their elements.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ 1, 2, "a", "b" ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <S extends Chunk<any>, T extends Chunk<any>>(that: T): (self: S) => Chunk.OrNonEmpty<S, T, Chunk.Infer<S> | Chunk.Infer<T>>
  /**
   * Concatenates two chunks, combining their elements.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ 1, 2, "a", "b" ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, that: NonEmptyChunk<B>): NonEmptyChunk<A | B>
  /**
   * Concatenates two chunks, combining their elements.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ 1, 2, "a", "b" ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: NonEmptyChunk<A>, that: Chunk<B>): NonEmptyChunk<A | B>
  /**
   * Concatenates two chunks, combining their elements.
   * If either chunk is non-empty, the result is also a non-empty chunk.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
   *
   * console.log(result)
   * // [ 1, 2, "a", "b" ]
   * ```
   *
   * @category concatenating
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B>
} = dual(2, <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B> => {
  if (self.backing._tag === "IEmpty") {
    return that
  }
  if (that.backing._tag === "IEmpty") {
    return self
  }
  const diff = that.depth - self.depth
  if (Math.abs(diff) <= 1) {
    return makeChunk</**
     * Concatenates two chunks, combining their elements.
     * If either chunk is non-empty, the result is also a non-empty chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Chunk } from "effect"
     *
     * const result = Chunk.make(1, 2).pipe(Chunk.appendAll(Chunk.make("a", "b")), Chunk.toArray)
     *
     * console.log(result)
     * // [ 1, 2, "a", "b" ]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    A | B>({ _tag: "IConcat", left: self, right: that });
  } else if (diff < -1) {
    if (self.left.depth >= self.right.depth) {
      const nr = appendAll(self.right, that)
      return makeChunk({ _tag: "IConcat", left: self.left, right: nr })
    } else {
      const nrr = appendAll(self.right.right, that)
      if (nrr.depth === self.depth - 3) {
        const nr = makeChunk({ _tag: "IConcat", left: self.right.left, right: nrr })
        return makeChunk({ _tag: "IConcat", left: self.left, right: nr })
      } else {
        const nl = makeChunk({ _tag: "IConcat", left: self.left, right: self.right.left })
        return makeChunk({ _tag: "IConcat", left: nl, right: nrr })
      }
    }
  } else {
    if (that.right.depth >= that.left.depth) {
      const nl = appendAll(self, that.left)
      return makeChunk({ _tag: "IConcat", left: nl, right: that.right })
    } else {
      const nll = appendAll(self, that.left.left)
      if (nll.depth === that.depth - 3) {
        const nl = makeChunk({ _tag: "IConcat", left: nll, right: that.left.right })
        return makeChunk({ _tag: "IConcat", left: nl, right: that.right })
      } else {
        const nr = makeChunk({ _tag: "IConcat", left: that.left.right, right: that.right })
        return makeChunk({ _tag: "IConcat", left: nll, right: nr })
      }
    }
  }
})

/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterMap: {
  /**
   * Returns a filtered and mapped subset of the elements.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B>(f: (a: A, i: number) => Option<B>): (self: Chunk<A>) => Chunk<B>
  /**
   * Returns a filtered and mapped subset of the elements.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B>(self: Chunk<A>, f: (a: A, i: number) => Option<B>): Chunk<B>
} = dual(
  2,
  <A, B>(self: Chunk<A>, f: (a: A, i: number) => Option<B>): Chunk<B> => unsafeFromArray(RA.filterMap(self, f))
)

/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filter: {
  /**
   * Returns a filtered and mapped subset of the elements.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Chunk<B>
  /**
   * Returns a filtered and mapped subset of the elements.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Chunk<A>
  /**
   * Returns a filtered and mapped subset of the elements.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Chunk<B>
  /**
   * Returns a filtered and mapped subset of the elements.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A>
} = dual(
  2,
  <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A> => unsafeFromArray(RA.filter(self, predicate))
)

/**
 * Transforms all elements of the chunk for as long as the specified function returns some value
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterMapWhile: {
  /**
   * Transforms all elements of the chunk for as long as the specified function returns some value
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B>(f: (a: A) => Option<B>): (self: Chunk<A>) => Chunk<B>
  /**
   * Transforms all elements of the chunk for as long as the specified function returns some value
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B>(self: Chunk<A>, f: (a: A) => Option<B>): Chunk<B>
} = dual(2, <A, B>(self: Chunk<A>, f: (a: A) => Option<B>) => unsafeFromArray(RA.filterMapWhile(self, f)))

/**
 * Filter out optional values
 *
 * @since 2.0.0
 * @category filtering
 */
export const compact = <A>(self: Chunk<Option<A>>): Chunk<A> => filterMap(self, identity)

/**
 * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap: {
  /**
   * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <S extends Chunk<any>, T extends Chunk<any>>(f: (a: Chunk.Infer<S>, i: number) => T): (self: S) => Chunk.AndNonEmpty<S, T, Chunk.Infer<T>>
  /**
   * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, B>(self: NonEmptyChunk<A>, f: (a: A, i: number) => NonEmptyChunk<B>): NonEmptyChunk<B>
  /**
   * Applies a function to each element in a chunk and returns a new chunk containing the concatenated mapped elements.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, B>(self: Chunk<A>, f: (a: A, i: number) => Chunk<B>): Chunk<B>
} = dual(2, <A, B>(self: Chunk<A>, f: (a: A, i: number) => Chunk<B>) => {
  if (self.backing._tag === "ISingleton") {
    return f(self.backing.a, 0)
  }
  let out: Chunk<B> = _empty
  let i = 0
  for (const k of self) {
    out = appendAll(out, f(k, i++))
  }
  return out
})

/**
 * Iterates over each element of a `Chunk` and applies a function to it.
 *
 * **Details**
 *
 * This function processes every element of the given `Chunk`, calling the
 * provided function `f` on each element. It does not return a new value;
 * instead, it is primarily used for side effects, such as logging or
 * accumulating data in an external variable.
 *
 * @since 2.0.0
 * @category combinators
 */
export const forEach: {
  /**
   * Iterates over each element of a `Chunk` and applies a function to it.
   *
   * **Details**
   *
   * This function processes every element of the given `Chunk`, calling the
   * provided function `f` on each element. It does not return a new value;
   * instead, it is primarily used for side effects, such as logging or
   * accumulating data in an external variable.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(f: (a: A, index: number) => B): (self: Chunk<A>) => void
  /**
   * Iterates over each element of a `Chunk` and applies a function to it.
   *
   * **Details**
   *
   * This function processes every element of the given `Chunk`, calling the
   * provided function `f` on each element. It does not return a new value;
   * instead, it is primarily used for side effects, such as logging or
   * accumulating data in an external variable.
   *
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(self: Chunk<A>, f: (a: A, index: number) => B): void
} = dual(2, <A, B>(self: Chunk<A>, f: (a: A) => B): void => toReadonlyArray(self).forEach(f))

/**
 * Flattens a chunk of chunks into a single chunk by concatenating all chunks.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatten: <S extends Chunk<Chunk<any>>>(self: S) => Chunk.Flatten<S> = flatMap(identity) as any

/**
 * Groups elements in chunks of up to `n` elements.
 *
 * @since 2.0.0
 * @category elements
 */
export const chunksOf: {
  /**
   * Groups elements in chunks of up to `n` elements.
   *
   * @since 2.0.0
   * @category elements
   */
  (n: number): <A>(self: Chunk<A>) => Chunk<Chunk<A>>
  /**
   * Groups elements in chunks of up to `n` elements.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(self: Chunk<A>, n: number): Chunk<Chunk<A>>
} = dual(2, <A>(self: Chunk<A>, n: number) => {
  const gr: Array<Chunk<A>> = []
  let current: Array<A> = []
  toReadonlyArray(self).forEach((a) => {
    current.push(a)
    if (current.length >= n) {
      gr.push(unsafeFromArray(current))
      current = []
    }
  })
  if (current.length > 0) {
    gr.push(unsafeFromArray(current))
  }
  return unsafeFromArray(gr)
})

/**
 * Creates a Chunk of unique values that are included in all given Chunks.
 *
 * The order and references of result values are determined by the Chunk.
 *
 * @since 2.0.0
 * @category elements
 */
export const intersection: {
  /**
   * Creates a Chunk of unique values that are included in all given Chunks.
   *
   * The order and references of result values are determined by the Chunk.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(that: Chunk<A>): <B>(self: Chunk<B>) => Chunk<A & B>
  /**
   * Creates a Chunk of unique values that are included in all given Chunks.
   *
   * The order and references of result values are determined by the Chunk.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A & B>
} = dual(
  2,
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A & B> =>
    unsafeFromArray(RA.intersection(toReadonlyArray(self), toReadonlyArray(that)))
)

/**
 * Determines if the chunk is empty.
 *
 * @since 2.0.0
 * @category elements
 */
export const isEmpty = <A>(self: Chunk<A>): boolean => self.length === 0

/**
 * Determines if the chunk is not empty.
 *
 * @since 2.0.0
 * @category elements
 */
export const isNonEmpty = <A>(self: Chunk<A>): self is NonEmptyChunk<A> => self.length > 0

/**
 * Returns the first element of this chunk if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export const head: <A>(self: Chunk<A>) => Option<A> = get(0)

/**
 * Returns the first element of this chunk.
 *
 * It will throw an error if the chunk is empty.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeHead = <A>(self: Chunk<A>): A => unsafeGet(self, 0)

/**
 * Returns the first element of this non empty chunk.
 *
 * @since 2.0.0
 * @category elements
 */
export const headNonEmpty: <A>(self: NonEmptyChunk<A>) => A = unsafeHead

/**
 * Returns the last element of this chunk if it exists.
 *
 * @since 2.0.0
 * @category elements
 */
export const last = <A>(self: Chunk<A>): Option<A> => get(self, self.length - 1)

/**
 * Returns the last element of this chunk.
 *
 * It will throw an error if the chunk is empty.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeLast = <A>(self: Chunk<A>): A => unsafeGet(self, self.length - 1)

/**
 * Returns the last element of this non empty chunk.
 *
 * @since 3.4.0
 * @category elements
 */
export const lastNonEmpty: <A>(self: NonEmptyChunk<A>) => A = unsafeLast

/**
 * @since 2.0.0
 */
export declare namespace Chunk {
  /**
   * @since 2.0.0
   */
  export type Infer<S extends Chunk<any>> = S extends Chunk<infer A> ? A : never

  /**
   * @since 2.0.0
   */
  export type With<S extends Chunk<any>, A> = S extends NonEmptyChunk<any> ? NonEmptyChunk<A> : Chunk<A>

  /**
   * @since 2.0.0
   */
  export type OrNonEmpty<S extends Chunk<any>, T extends Chunk<any>, A> = S extends NonEmptyChunk<any> ?
    NonEmptyChunk<A>
    : T extends NonEmptyChunk<any> ? NonEmptyChunk<A>
    : Chunk<A>

  /**
   * @since 2.0.0
   */
  export type AndNonEmpty<S extends Chunk<any>, T extends Chunk<any>, A> = S extends NonEmptyChunk<any> ?
    T extends NonEmptyChunk<any> ? NonEmptyChunk<A>
    : Chunk<A> :
    Chunk<A>

  /**
   * @since 2.0.0
   */
  export type Flatten<T extends Chunk<Chunk<any>>> = T extends NonEmptyChunk<NonEmptyChunk<infer A>> ? NonEmptyChunk<A>
    : T extends Chunk<Chunk<infer A>> ? Chunk<A>
    : never
}

/**
 * Transforms the elements of a chunk using the specified mapping function.
 * If the input chunk is non-empty, the resulting chunk will also be non-empty.
 *
 * **Example**
 *
 * ```ts
 * import { Chunk } from "effect"
 *
 * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
 *
 * console.log(result)
 * // { _id: 'Chunk', values: [ 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * Transforms the elements of a chunk using the specified mapping function.
   * If the input chunk is non-empty, the resulting chunk will also be non-empty.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
   *
   * console.log(result)
   * // { _id: 'Chunk', values: [ 2, 3 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <S extends Chunk<any>, B>(f: (a: Chunk.Infer<S>, i: number) => B): (self: S) => Chunk.With<S, B>
  /**
   * Transforms the elements of a chunk using the specified mapping function.
   * If the input chunk is non-empty, the resulting chunk will also be non-empty.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
   *
   * console.log(result)
   * // { _id: 'Chunk', values: [ 2, 3 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B>(self: NonEmptyChunk<A>, f: (a: A, i: number) => B): NonEmptyChunk<B>
  /**
   * Transforms the elements of a chunk using the specified mapping function.
   * If the input chunk is non-empty, the resulting chunk will also be non-empty.
   *
   * **Example**
   *
   * ```ts
   * import { Chunk } from "effect"
   *
   * const result = Chunk.map(Chunk.make(1, 2), (n) => n + 1)
   *
   * console.log(result)
   * // { _id: 'Chunk', values: [ 2, 3 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B>(self: Chunk<A>, f: (a: A, i: number) => B): Chunk<B>
} = dual(2, <A, B>(self: Chunk<A>, f: (a: A, i: number) => B): Chunk<B> =>
  self.backing._tag === "ISingleton" ?
    of(f(self.backing.a, 0)) :
    unsafeFromArray(pipe(toReadonlyArray(self), RA.map((a, i) => f(a, i)))))

/**
 * Statefully maps over the chunk, producing new elements of type `B`.
 *
 * @since 2.0.0
 * @category folding
 */
export const mapAccum: {
  /**
   * Statefully maps over the chunk, producing new elements of type `B`.
   *
   * @since 2.0.0
   * @category folding
   */
  <S, A, B>(s: S, f: (s: S, a: A) => readonly [S, B]): (self: Chunk<A>) => [S, Chunk<B>]
  /**
   * Statefully maps over the chunk, producing new elements of type `B`.
   *
   * @since 2.0.0
   * @category folding
   */
  <S, A, B>(self: Chunk<A>, s: S, f: (s: S, a: A) => readonly [S, B]): [S, Chunk<B>]
} = dual(3, <S, A, B>(self: Chunk<A>, s: S, f: (s: S, a: A) => readonly [S, B]): [S, Chunk<B>] => {
  const [s1, as] = RA.mapAccum(self, s, f)
  return [s1, unsafeFromArray(as)]
})

/**
 * Separate elements based on a predicate that also exposes the index of the element.
 *
 * @category filtering
 * @since 2.0.0
 */
export const partition: {
  /**
   * Separate elements based on a predicate that also exposes the index of the element.
   *
   * @category filtering
   * @since 2.0.0
   */
  <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Chunk<A>) => [excluded: Chunk<Exclude<A, B>>, satisfying: Chunk<B>]
  /**
   * Separate elements based on a predicate that also exposes the index of the element.
   *
   * @category filtering
   * @since 2.0.0
   */
  <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Chunk<A>) => [excluded: Chunk<A>, satisfying: Chunk<A>]
  /**
   * Separate elements based on a predicate that also exposes the index of the element.
   *
   * @category filtering
   * @since 2.0.0
   */
  <A, B extends A>(self: Chunk<A>, refinement: (a: A, i: number) => a is B): [excluded: Chunk<Exclude<A, B>>, satisfying: Chunk<B>]
  /**
   * Separate elements based on a predicate that also exposes the index of the element.
   *
   * @category filtering
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: (a: A, i: number) => boolean): [excluded: Chunk<A>, satisfying: Chunk<A>]
} = dual(
  2,
  <A>(self: Chunk<A>, predicate: (a: A, i: number) => boolean): [excluded: Chunk<A>, satisfying: Chunk<A>] =>
    pipe(
      RA.partition(toReadonlyArray(self), predicate),
      ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]
    )
)

/**
 * Partitions the elements of this chunk into two chunks using f.
 *
 * @category filtering
 * @since 2.0.0
 */
export const partitionMap: {
  /**
   * Partitions the elements of this chunk into two chunks using f.
   *
   * @category filtering
   * @since 2.0.0
   */
  <A, B, C>(f: (a: A) => Either<C, B>): (self: Chunk<A>) => [left: Chunk<B>, right: Chunk<C>]
  /**
   * Partitions the elements of this chunk into two chunks using f.
   *
   * @category filtering
   * @since 2.0.0
   */
  <A, B, C>(self: Chunk<A>, f: (a: A) => Either<C, B>): [left: Chunk<B>, right: Chunk<C>]
} = dual(2, <A, B, C>(self: Chunk<A>, f: (a: A) => Either<C, B>): [left: Chunk<B>, right: Chunk<C>] =>
  pipe(
    RA.partitionMap(toReadonlyArray(self), f),
    ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]
  ))

/**
 * Partitions the elements of this chunk into two chunks.
 *
 * @category filtering
 * @since 2.0.0
 */
export const separate = <A, B>(self: Chunk<Either<B, A>>): [Chunk<A>, Chunk<B>] =>
  pipe(
    RA.separate(toReadonlyArray(self)),
    ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]
  )

/**
 * Retireves the size of the chunk
 *
 * @since 2.0.0
 * @category elements
 */
export const size = <A>(self: Chunk<A>): number => self.length

/**
 * Sort the elements of a Chunk in increasing order, creating a new Chunk.
 *
 * @since 2.0.0
 * @category sorting
 */
export const sort: {
  /**
   * Sort the elements of a Chunk in increasing order, creating a new Chunk.
   *
   * @since 2.0.0
   * @category sorting
   */
  <B>(O: Order.Order<B>): <A extends B>(self: Chunk<A>) => Chunk<A>
  /**
   * Sort the elements of a Chunk in increasing order, creating a new Chunk.
   *
   * @since 2.0.0
   * @category sorting
   */
  <A extends B, B>(self: Chunk<A>, O: Order.Order<B>): Chunk<A>
} = dual(
  2,
  <A extends B, B>(self: Chunk<A>, O: Order.Order<B>): Chunk<A> => unsafeFromArray(RA.sort(toReadonlyArray(self), O))
)

/**
 * @since 2.0.0
 * @category sorting
 */
export const sortWith: {
  /**
   * @since 2.0.0
   * @category sorting
   */
  <A, B>(f: (a: A) => B, order: Order.Order<B>): (self: Chunk<A>) => Chunk<A>
  /**
   * @since 2.0.0
   * @category sorting
   */
  <A, B>(self: Chunk<A>, f: (a: A) => B, order: Order.Order<B>): Chunk<A>
} = dual(
  3,
  <A, B>(self: Chunk<A>, f: (a: A) => B, order: Order.Order<B>): Chunk<A> => sort(self, Order.mapInput(order, f))
)

/**
 *  Returns two splits of this chunk at the specified index.
 *
 * @since 2.0.0
 * @category splitting
 */
export const splitAt: {
  /**
   *  Returns two splits of this chunk at the specified index.
   *
   * @since 2.0.0
   * @category splitting
   */
  (n: number): <A>(self: Chunk<A>) => [beforeIndex: Chunk<A>, fromIndex: Chunk<A>]
  /**
   *  Returns two splits of this chunk at the specified index.
   *
   * @since 2.0.0
   * @category splitting
   */
  <A>(self: Chunk<A>, n: number): [beforeIndex: Chunk<A>, fromIndex: Chunk<A>]
} = dual(2, <A>(self: Chunk<A>, n: number): [Chunk<A>, Chunk<A>] => [take(self, n), drop(self, n)])

/**
 * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` must be `>= 1`.
 *
 * @category splitting
 * @since 2.0.0
 */
export const splitNonEmptyAt: {
  /**
   * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
   * The value of `n` must be `>= 1`.
   *
   * @category splitting
   * @since 2.0.0
   */
  (n: number): <A>(self: NonEmptyChunk<A>) => [beforeIndex: NonEmptyChunk<A>, fromIndex: Chunk<A>]
  /**
   * Splits a `NonEmptyChunk` into two segments, with the first segment containing a maximum of `n` elements.
   * The value of `n` must be `>= 1`.
   *
   * @category splitting
   * @since 2.0.0
   */
  <A>(self: NonEmptyChunk<A>, n: number): [beforeIndex: NonEmptyChunk<A>, fromIndex: Chunk<A>]
} = dual(2, <A>(self: NonEmptyChunk<A>, n: number): [Chunk<A>, Chunk<A>] => {
  const _n = Math.max(1, Math.floor(n))
  return _n >= self.length ?
    [self, empty()] :
    [take(self, _n), drop(self, _n)]
})

/**
 * Splits this chunk into `n` equally sized chunks.
 *
 * @since 2.0.0
 * @category splitting
 */
export const split: {
  /**
   * Splits this chunk into `n` equally sized chunks.
   *
   * @since 2.0.0
   * @category splitting
   */
  (n: number): <A>(self: Chunk<A>) => Chunk<Chunk<A>>
  /**
   * Splits this chunk into `n` equally sized chunks.
   *
   * @since 2.0.0
   * @category splitting
   */
  <A>(self: Chunk<A>, n: number): Chunk<Chunk<A>>
} = dual(2, <A>(self: Chunk<A>, n: number) => chunksOf(self, Math.ceil(self.length / Math.floor(n))))

/**
 * Splits this chunk on the first element that matches this predicate.
 * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
 *
 * @category splitting
 * @since 2.0.0
 */
export const splitWhere: {
  /**
   * Splits this chunk on the first element that matches this predicate.
   * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
   *
   * @category splitting
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => [beforeMatch: Chunk<A>, fromMatch: Chunk<A>]
  /**
   * Splits this chunk on the first element that matches this predicate.
   * Returns a tuple containing two chunks: the first one is before the match, and the second one is from the match onward.
   *
   * @category splitting
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): [beforeMatch: Chunk<A>, fromMatch: Chunk<A>]
} = dual(2, <A>(self: Chunk<A>, predicate: Predicate<A>): [beforeMatch: Chunk<A>, fromMatch: Chunk<A>] => {
  let i = 0
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      break
    } else {
      i++
    }
  }
  return splitAt(self, i)
})

/**
 * Returns every elements after the first.
 *
 * @since 2.0.0
 * @category elements
 */
export const tail = <A>(self: Chunk<A>): Option<Chunk<A>> => self.length > 0 ? O.some(drop(self, 1)) : O.none()

/**
 * Returns every elements after the first.
 *
 * @since 2.0.0
 * @category elements
 */
export const tailNonEmpty = <A>(self: NonEmptyChunk<A>): Chunk<A> => drop(self, 1)

/**
 * Takes the last `n` elements.
 *
 * @since 2.0.0
 * @category elements
 */
export const takeRight: {
  /**
   * Takes the last `n` elements.
   *
   * @since 2.0.0
   * @category elements
   */
  (n: number): <A>(self: Chunk<A>) => Chunk<A>
  /**
   * Takes the last `n` elements.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(self: Chunk<A>, n: number): Chunk<A>
} = dual(2, <A>(self: Chunk<A>, n: number): Chunk<A> => drop(self, self.length - n))

/**
 * Takes all elements so long as the predicate returns true.
 *
 * @since 2.0.0
 * @category elements
 */
export const takeWhile: {
  /**
   * Takes all elements so long as the predicate returns true.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Chunk<B>
  /**
   * Takes all elements so long as the predicate returns true.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Chunk<A>
  /**
   * Takes all elements so long as the predicate returns true.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Chunk<B>
  /**
   * Takes all elements so long as the predicate returns true.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A>
} = dual(2, <A>(self: Chunk<A>, predicate: Predicate<A>): Chunk<A> => {
  const out: Array<A> = []
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      out.push(a)
    } else {
      break
    }
  }
  return unsafeFromArray(out)
})

/**
 * Creates a Chunks of unique values, in order, from all given Chunks.
 *
 * @since 2.0.0
 * @category elements
 */
export const union: {
  /**
   * Creates a Chunks of unique values, in order, from all given Chunks.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(that: Chunk<A>): <B>(self: Chunk<B>) => Chunk<A | B>
  /**
   * Creates a Chunks of unique values, in order, from all given Chunks.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<A | B>
} = dual(
  2,
  <A, B>(self: Chunk<A>, that: Chunk<B>) => unsafeFromArray(RA.union(toReadonlyArray(self), toReadonlyArray(that)))
)

/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @since 2.0.0
 * @category elements
 */
export const dedupe = <A>(self: Chunk<A>): Chunk<A> => unsafeFromArray(RA.dedupe(toReadonlyArray(self)))

/**
 * Deduplicates adjacent elements that are identical.
 *
 * @since 2.0.0
 * @category filtering
 */
export const dedupeAdjacent = <A>(self: Chunk<A>): Chunk<A> => unsafeFromArray(RA.dedupeAdjacent(self))

/**
 * Takes a `Chunk` of pairs and return two corresponding `Chunk`s.
 *
 * Note: The function is reverse of `zip`.
 *
 * @since 2.0.0
 * @category elements
 */
export const unzip = <A, B>(self: Chunk<readonly [A, B]>): [Chunk<A>, Chunk<B>] => {
  const [left, right] = RA.unzip(self)
  return [unsafeFromArray(left), unsafeFromArray(right)]
}

/**
 * Zips this chunk pointwise with the specified chunk using the specified combiner.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith: {
  /**
   * Zips this chunk pointwise with the specified chunk using the specified combiner.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, B, C>(that: Chunk<B>, f: (a: A, b: B) => C): (self: Chunk<A>) => Chunk<C>
  /**
   * Zips this chunk pointwise with the specified chunk using the specified combiner.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, B, C>(self: Chunk<A>, that: Chunk<B>, f: (a: A, b: B) => C): Chunk<C>
} = dual(
  3,
  <A, B, C>(self: Chunk<A>, that: Chunk<B>, f: (a: A, b: B) => C): Chunk<C> =>
    unsafeFromArray(RA.zipWith(self, that, f))
)

/**
 * Zips this chunk pointwise with the specified chunk.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip: {
  /**
   * Zips this chunk pointwise with the specified chunk.
   *
   * @since 2.0.0
   * @category zipping
   */
  <B>(that: Chunk<B>): <A>(self: Chunk<A>) => Chunk<[A, B]>
  /**
   * Zips this chunk pointwise with the specified chunk.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<[A, B]>
} = dual(
  2,
  <A, B>(self: Chunk<A>, that: Chunk<B>): Chunk<[A, B]> => zipWith(self, that, (a, b) => [a, b])
)

/**
 * Delete the element at the specified index, creating a new `Chunk`.
 *
 * @since 2.0.0
 */
export const remove: {
  /**
   * Delete the element at the specified index, creating a new `Chunk`.
   *
   * @since 2.0.0
   */
  (i: number): <A>(self: Chunk<A>) => Chunk<A>
  /**
   * Delete the element at the specified index, creating a new `Chunk`.
   *
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, i: number): Chunk<A>
} = dual(
  2,
  <A>(self: Chunk<A>, i: number): Chunk<A> => {
    if (i < 0 || i >= self.length) return self
    return unsafeFromArray(RA.remove(toReadonlyArray(self), i))
  }
)

/**
 * @since 3.16.0
 */
export const removeOption: {
  /**
   * @since 3.16.0
   */
  (i: number): <A>(self: Chunk<A>) => Option<Chunk<A>>
  /**
   * @since 3.16.0
   */
  <A>(self: Chunk<A>, i: number): Option<Chunk<A>>
} = dual(
  2,
  <A>(self: Chunk<A>, i: number): Option<Chunk<A>> => {
    if (i < 0 || i >= self.length) return O.none()
    return O.some(unsafeFromArray(RA.remove(toReadonlyArray(self), i)))
  }
)

/**
 * @since 2.0.0
 */
export const modifyOption: {
  /**
   * @since 2.0.0
   */
  <A, B>(i: number, f: (a: A) => B): (self: Chunk<A>) => Option<Chunk<A | B>>
  /**
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, i: number, f: (a: A) => B): Option<Chunk<A | B>>
} = dual(
  3,
  <A, B>(self: Chunk<A>, i: number, f: (a: A) => B): Option<Chunk<A | B>> => {
    if (i < 0 || i >= self.length) return O.none()
    return O.some(unsafeFromArray(RA.modify(toReadonlyArray(self), i, f)))
  }
)

/**
 * Apply a function to the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @since 2.0.0
 */
export const modify: {
  /**
   * Apply a function to the element at the specified index, creating a new `Chunk`,
   * or returning the input if the index is out of bounds.
   *
   * @since 2.0.0
   */
  <A, B>(i: number, f: (a: A) => B): (self: Chunk<A>) => Chunk<A | B>
  /**
   * Apply a function to the element at the specified index, creating a new `Chunk`,
   * or returning the input if the index is out of bounds.
   *
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, i: number, f: (a: A) => B): Chunk<A | B>
} = dual(
  3,
  <A, B>(self: Chunk<A>, i: number, f: (a: A) => B): Chunk<A | B> => O.getOrElse(modifyOption(self, i, f), () => self)
)

/**
 * Change the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @since 2.0.0
 */
export const replace: {
  /**
   * Change the element at the specified index, creating a new `Chunk`,
   * or returning the input if the index is out of bounds.
   *
   * @since 2.0.0
   */
  <B>(i: number, b: B): <A>(self: Chunk<A>) => Chunk<B | A>
  /**
   * Change the element at the specified index, creating a new `Chunk`,
   * or returning the input if the index is out of bounds.
   *
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, i: number, b: B): Chunk<B | A>
} = dual(3, <A, B>(self: Chunk<A>, i: number, b: B): Chunk<B | A> => modify(self, i, () => b))

/**
 * @since 2.0.0
 */
export const replaceOption: {
  /**
   * @since 2.0.0
   */
  <B>(i: number, b: B): <A>(self: Chunk<A>) => Option<Chunk<B | A>>
  /**
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, i: number, b: B): Option<Chunk<B | A>>
} = dual(3, <A, B>(self: Chunk<A>, i: number, b: B): Option<Chunk<B | A>> => modifyOption(self, i, () => b))

/**
 * Return a Chunk of length n with element i initialized with f(i).
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @category constructors
 * @since 2.0.0
 */
export const makeBy: {
  /**
   * Return a Chunk of length n with element i initialized with f(i).
   *
   * **Note**. `n` is normalized to an integer >= 1.
   *
   * @category constructors
   * @since 2.0.0
   */
  <A>(f: (i: number) => A): (n: number) => NonEmptyChunk<A>
  /**
   * Return a Chunk of length n with element i initialized with f(i).
   *
   * **Note**. `n` is normalized to an integer >= 1.
   *
   * @category constructors
   * @since 2.0.0
   */
  <A>(n: number, f: (i: number) => A): NonEmptyChunk<A>
} = dual(2, (n, f) => fromIterable(RA.makeBy(n, f)))

/**
 * Create a non empty `Chunk` containing a range of integers, including both endpoints.
 *
 * @category constructors
 * @since 2.0.0
 */
export const range = (start: number, end: number): NonEmptyChunk<number> =>
  start <= end ? makeBy(end - start + 1, (i) => start + i) : of(start)

// -------------------------------------------------------------------------------------
// re-exports from ReadonlyArray
// -------------------------------------------------------------------------------------

/**
 * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
 *
 * @category elements
 * @since 2.0.0
 */
export const contains: {
  // -------------------------------------------------------------------------------------
  // re-exports from ReadonlyArray
  // -------------------------------------------------------------------------------------

  /**
   * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(a: A): (self: Chunk<A>) => boolean
  // -------------------------------------------------------------------------------------
  // re-exports from ReadonlyArray
  // -------------------------------------------------------------------------------------

  /**
   * Returns a function that checks if a `Chunk` contains a given value using the default `Equivalence`.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, a: A): boolean
} = RA.contains

/**
 * Returns a function that checks if a `Chunk` contains a given value using a provided `isEquivalent` function.
 *
 * @category elements
 * @since 2.0.0
 */
export const containsWith: <A>(
  isEquivalent: (self: A, that: A) => boolean
) => {
  (a: A): (self: Chunk<A>) => boolean
  (self: Chunk<A>, a: A): boolean
} = RA.containsWith

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
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Option<B>
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Option<A>
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Option<B>
  /**
   * Returns the first element that satisfies the specified
   * predicate, or `None` if no such element exists.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Option<A>
} = RA.findFirst

/**
 * Return the first index for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export const findFirstIndex: {
  /**
   * Return the first index for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<A>): (self: Chunk<A>) => Option<number>
  /**
   * Return the first index for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Option<number>
} = RA.findFirstIndex

/**
 * Find the last element for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export const findLast: {
  /**
   * Find the last element for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => Option<B>
  /**
   * Find the last element for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => Option<A>
  /**
   * Find the last element for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): Option<B>
  /**
   * Find the last element for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Option<A>
} = RA.findLast

/**
 * Return the last index for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export const findLastIndex: {
  /**
   * Return the last index for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<A>): (self: Chunk<A>) => Option<number>
  /**
   * Return the last index for which a predicate holds.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): Option<number>
} = RA.findLastIndex

/**
 * Check if a predicate holds true for every `Chunk` element.
 *
 * @category elements
 * @since 2.0.0
 */
export const every: {
  /**
   * Check if a predicate holds true for every `Chunk` element.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Chunk<A>) => self is Chunk<B>
  /**
   * Check if a predicate holds true for every `Chunk` element.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<A>): (self: Chunk<A>) => boolean
  /**
   * Check if a predicate holds true for every `Chunk` element.
   *
   * @category elements
   * @since 2.0.0
   */
  <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): self is Chunk<B>
  /**
   * Check if a predicate holds true for every `Chunk` element.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): boolean
} = dual(
  2,
  <A, B extends A>(self: Chunk<A>, refinement: Refinement<A, B>): self is Chunk<B> =>
    RA.fromIterable(self).every(refinement)
)

/**
 * Check if a predicate holds true for some `Chunk` element.
 *
 * @category elements
 * @since 2.0.0
 */
export const some: {
  /**
   * Check if a predicate holds true for some `Chunk` element.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Chunk<A>) => self is NonEmptyChunk<A>
  /**
   * Check if a predicate holds true for some `Chunk` element.
   *
   * @category elements
   * @since 2.0.0
   */
  <A>(self: Chunk<A>, predicate: Predicate<A>): self is NonEmptyChunk<A>
} = dual(
  2,
  <A>(self: Chunk<A>, predicate: Predicate<A>): self is NonEmptyChunk<A> => RA.fromIterable(self).some(predicate)
)

/**
 * Joins the elements together with "sep" in the middle.
 *
 * @category folding
 * @since 2.0.0
 */
export const join: {
  /**
   * Joins the elements together with "sep" in the middle.
   *
   * @category folding
   * @since 2.0.0
   */
  (sep: string): (self: Chunk<string>) => string
  /**
   * Joins the elements together with "sep" in the middle.
   *
   * @category folding
   * @since 2.0.0
   */
  (self: Chunk<string>, sep: string): string
} = RA.join

/**
 * @category folding
 * @since 2.0.0
 */
export const reduce: {
  /**
   * @category folding
   * @since 2.0.0
   */
  <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Chunk<A>) => B
  /**
   * @category folding
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, b: B, f: (b: B, a: A, i: number) => B): B
} = RA.reduce

/**
 * @category folding
 * @since 2.0.0
 */
export const reduceRight: {
  /**
   * @category folding
   * @since 2.0.0
   */
  <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Chunk<A>) => B
  /**
   * @category folding
   * @since 2.0.0
   */
  <A, B>(self: Chunk<A>, b: B, f: (b: B, a: A, i: number) => B): B
} = RA.reduceRight

/**
 * Creates a `Chunk` of values not included in the other given `Chunk` using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Chunk`.
 *
 * @since 3.2.0
 */
export const differenceWith = <A>(isEquivalent: (self: A, that: A) => boolean): {
  (that: Chunk<A>): (self: Chunk<A>) => Chunk<A>
  (self: Chunk<A>, that: Chunk<A>): Chunk<A>
} => {
  return dual(
    2,
    (self: Chunk<A>, that: Chunk<A>): Chunk<A> => unsafeFromArray(RA.differenceWith(isEquivalent)(that, self))
  )
}

/**
 * Creates a `Chunk` of values not included in the other given `Chunk`.
 * The order and references of result values are determined by the first `Chunk`.
 *
 * @since 3.2.0
 */
export const difference: {
  /**
   * Creates a `Chunk` of values not included in the other given `Chunk`.
   * The order and references of result values are determined by the first `Chunk`.
   *
   * @since 3.2.0
   */
  <A>(that: Chunk<A>): (self: Chunk<A>) => Chunk<A>
  /**
   * Creates a `Chunk` of values not included in the other given `Chunk`.
   * The order and references of result values are determined by the first `Chunk`.
   *
   * @since 3.2.0
   */
  <A>(self: Chunk<A>, that: Chunk<A>): Chunk<A>
} = dual(
  2,
  <A>(self: Chunk<A>, that: Chunk<A>): Chunk<A> => unsafeFromArray(RA.difference(that, self))
)
