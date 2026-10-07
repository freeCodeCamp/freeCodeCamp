/**
 * This module provides an implementation of the `Equivalence` type class, which defines a binary relation
 * that is reflexive, symmetric, and transitive. In other words, it defines a notion of equivalence between values of a certain type.
 * These properties are also known in mathematics as an "equivalence relation".
 *
 * @since 2.0.0
 */
import { dual } from "./Function.js"
import type { TypeLambda } from "./HKT.js"

/**
 * @category type class
 * @since 2.0.0
 */
export interface Equivalence<in A> {
  (self: A, that: A): boolean
}

/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface EquivalenceTypeLambda extends TypeLambda {
  readonly type: Equivalence<this["Target"]>
}

/**
 * @category constructors
 * @since 2.0.0
 */
export const make = <A>(isEquivalent: (self: A, that: A) => boolean): Equivalence<A> => (self: A, that: A): boolean =>
  self === that || isEquivalent(self, that)

const isStrictEquivalent = (x: unknown, y: unknown) => x === y

/**
 * Return an `Equivalence` that uses strict equality (===) to compare values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const strict: <A>() => Equivalence<A> = () => isStrictEquivalent

/**
 * @category instances
 * @since 2.0.0
 */
export const string: Equivalence<string> = strict()

/**
 * @category instances
 * @since 2.0.0
 */
export const number: Equivalence<number> = strict()

/**
 * @category instances
 * @since 2.0.0
 */
export const boolean: Equivalence<boolean> = strict()

/**
 * @category instances
 * @since 2.0.0
 */
export const bigint: Equivalence<bigint> = strict()

/**
 * @category instances
 * @since 2.0.0
 */
export const symbol: Equivalence<symbol> = strict()

/**
 * @category combining
 * @since 2.0.0
 */
export const combine: {
  /**
   * @category combining
   * @since 2.0.0
   */
  <A>(that: Equivalence<A>): (self: Equivalence<A>) => Equivalence<A>
  /**
   * @category combining
   * @since 2.0.0
   */
  <A>(self: Equivalence<A>, that: Equivalence<A>): Equivalence<A>
} = dual(2, <A>(self: Equivalence<A>, that: Equivalence<A>): Equivalence<A> => make((x, y) => self(x, y) && that(x, y)))

/**
 * @category combining
 * @since 2.0.0
 */
export const combineMany: {
  /**
   * @category combining
   * @since 2.0.0
   */
  <A>(collection: Iterable<Equivalence<A>>): (self: Equivalence<A>) => Equivalence<A>
  /**
   * @category combining
   * @since 2.0.0
   */
  <A>(self: Equivalence<A>, collection: Iterable<Equivalence<A>>): Equivalence<A>
} = dual(2, <A>(self: Equivalence<A>, collection: Iterable<Equivalence<A>>): Equivalence<A> =>
  make((x, y) => {
    if (!self(x, y)) {
      return false
    }
    for (const equivalence of collection) {
      if (!equivalence(x, y)) {
        return false
      }
    }
    return true
  }))

const isAlwaysEquivalent: Equivalence<unknown> = (_x, _y) => true

/**
 * @category combining
 * @since 2.0.0
 */
export const combineAll = <A>(collection: Iterable<Equivalence<A>>): Equivalence<A> =>
  combineMany(isAlwaysEquivalent, collection)

/**
 * @category mapping
 * @since 2.0.0
 */
export const mapInput: {
  /**
   * @category mapping
   * @since 2.0.0
   */
  <B, A>(f: (b: B) => A): (self: Equivalence<A>) => Equivalence<B>
  /**
   * @category mapping
   * @since 2.0.0
   */
  <A, B>(self: Equivalence<A>, f: (b: B) => A): Equivalence<B>
} = dual(
  2,
  <A, B>(self: Equivalence<A>, f: (b: B) => A): Equivalence<B> => make((x, y) => self(f(x), f(y)))
)

/**
 * @category instances
 * @since 2.0.0
 */
export const Date: Equivalence<Date> = mapInput(number, (date) => date.getTime())

/**
 * @category combining
 * @since 2.0.0
 */
export const product: {
  <B>(that: Equivalence<B>): <A>(self: Equivalence<A>) => Equivalence<readonly [A, B]> // readonly because invariant
  <A, B>(self: Equivalence<A>, that: Equivalence<B>): Equivalence<readonly [A, B]> // readonly because invariant
} = dual(
  2,
  <A, B>(self: Equivalence<A>, that: Equivalence<B>): Equivalence<readonly [A, B]> =>
    make(([xa, xb], [ya, yb]) => self(xa, ya) && that(xb, yb))
)

/**
 * @category combining
 * @since 2.0.0
 */
export const all = <A>(collection: Iterable<Equivalence<A>>): Equivalence<ReadonlyArray<A>> => {
  return make((x, y) => {
    const len = Math.min(x.length, y.length)

    let collectionLength = 0
    for (const equivalence of collection) {
      if (collectionLength >= len) {
        break
      }
      if (!equivalence(x[collectionLength], y[collectionLength])) {
        return false
      }
      collectionLength++
    }
    return true
  })
}

/**
 * @category combining
 * @since 2.0.0
 */
export const productMany = <A>(
  self: Equivalence<A>,
  collection: Iterable<Equivalence<A>>
): Equivalence<readonly [A, ...Array<A>]> /* readonly because invariant */ => {
  const equivalence = all(collection)
  return make((x, y) => !self(x[0], y[0]) ? false : equivalence(x.slice(1), y.slice(1)))
}

/**
 * Similar to `Promise.all` but operates on `Equivalence`s.
 *
 * ```ts skip-type-checking
 * [Equivalence<A>, Equivalence<B>, ...] -> Equivalence<[A, B, ...]>
 * ```
 *
 * Given a tuple of `Equivalence`s returns a new `Equivalence` that compares values of a tuple
 * by applying each `Equivalence` to the corresponding element of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export const tuple = <T extends ReadonlyArray<Equivalence<any>>>(
  ...elements: T
): Equivalence<Readonly<{ [I in keyof T]: [T[I]] extends [Equivalence<infer A>] ? A : never }>> => all(elements) as any

/**
 * Creates a new `Equivalence` for an array of values based on a given `Equivalence` for the elements of the array.
 *
 * @category combinators
 * @since 2.0.0
 */
export const array = <A>(item: Equivalence<A>): Equivalence<ReadonlyArray<A>> =>
  make((self, that) => {
    if (self.length !== that.length) {
      return false
    }

    for (let i = 0; i < self.length; i++) {
      const isEq = item(self[i], that[i])
      if (!isEq) {
        return false
      }
    }

    return true
  })

/**
 * Given a struct of `Equivalence`s returns a new `Equivalence` that compares values of a struct
 * by applying each `Equivalence` to the corresponding property of the struct.
 *
 * @category combinators
 * @since 2.0.0
 */
export const struct = <R extends Record<string, Equivalence<any>>>(
  fields: R
): Equivalence<{ readonly [K in keyof R]: [R[K]] extends [Equivalence<infer A>] ? A : never }> => {
  const keys = Object.keys(fields)
  return make((self, that) => {
    for (const key of keys) {
      if (!fields[key](self[key], that[key])) {
        return false
      }
    }
    return true
  })
}
