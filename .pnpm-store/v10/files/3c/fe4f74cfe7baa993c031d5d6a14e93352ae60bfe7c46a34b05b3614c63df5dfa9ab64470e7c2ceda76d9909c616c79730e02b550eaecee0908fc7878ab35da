/**
 * @since 2.0.0
 */

import * as Equivalence from "./Equivalence.js"
import type { LazyArg } from "./Function.js"
import { constNull, constUndefined, dual, identity } from "./Function.js"
import type { TypeLambda } from "./HKT.js"
import type { Inspectable } from "./Inspectable.js"
import * as doNotation from "./internal/doNotation.js"
import * as either from "./internal/either.js"
import * as option_ from "./internal/option.js"
import type { Option } from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type { Predicate, Refinement } from "./Predicate.js"
import { isFunction } from "./Predicate.js"
import type { Covariant, NoInfer, NotFunction } from "./Types.js"
import type * as Unify from "./Unify.js"
import * as Gen from "./Utils.js"

/**
 * @category models
 * @since 2.0.0
 */
export type Either<A, E = never> = Left<E, A> | Right<E, A>

/**
 * @category symbols
 * @since 2.0.0
 */
export const TypeId: unique symbol = either.TypeId

/**
 * @category symbols
 * @since 2.0.0
 */
export type TypeId = typeof TypeId

// TODO(4.0): flip the order of the type parameters
/**
 * @category models
 * @since 2.0.0
 */
export interface Left<out E, out A> extends Pipeable, Inspectable {
  readonly _tag: "Left"
  readonly _op: "Left"
  readonly left: E
  readonly [TypeId]: {
    readonly _R: Covariant<A>
    readonly _L: Covariant<E>
  }
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: EitherUnify<this>
  [Unify.ignoreSymbol]?: EitherUnifyIgnore
}

// TODO(4.0): flip the order of the type parameters
/**
 * @category models
 * @since 2.0.0
 */
export interface Right<out E, out A> extends Pipeable, Inspectable {
  readonly _tag: "Right"
  readonly _op: "Right"
  readonly right: A
  readonly [TypeId]: {
    readonly _R: Covariant<A>
    readonly _L: Covariant<E>
  }
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: EitherUnify<this>
  [Unify.ignoreSymbol]?: EitherUnifyIgnore
}

/**
 * @category models
 * @since 2.0.0
 */
export interface EitherUnify<A extends { [Unify.typeSymbol]?: any }> {
  Either?: () => A[Unify.typeSymbol] extends Either<infer R0, infer L0> | infer _ ? Either<R0, L0> : never
}

/**
 * @category models
 * @since 2.0.0
 */
export interface EitherUnifyIgnore {}

/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface EitherTypeLambda extends TypeLambda {
  readonly type: Either<this["Target"], this["Out1"]>
}

/**
 * @since 2.0.0
 */
export declare namespace Either {
  /**
   * @since 2.0.0
   * @category type-level
   */
  export type Left<T extends Either<any, any>> = [T] extends [Either<infer _A, infer _E>] ? _E : never
  /**
   * @since 2.0.0
   * @category type-level
   */
  export type Right<T extends Either<any, any>> = [T] extends [Either<infer _A, infer _E>] ? _A : never
}

/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */
export const right: <A>(a: A) => Either<A> = either.right

const void_: Either<void> = right(void 0)
export {
  /**
   * @category constructors
   * @since 3.13.0
   */
  void_ as void
}

/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
export const left: <E>(e: E) => Either<never, E> = either.left

/**
 * Takes a lazy default and a nullable value, if the value is not nully (`null` or `undefined`), turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.fromNullable(1, () => 'fallback'), Either.right(1))
 * assert.deepStrictEqual(Either.fromNullable(null, () => 'fallback'), Either.left('fallback'))
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export const fromNullable: {
  /**
   * Takes a lazy default and a nullable value, if the value is not nully (`null` or `undefined`), turn it into a `Right`, if the value is nully use
   * the provided default as a `Left`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either } from "effect"
   *
   * assert.deepStrictEqual(Either.fromNullable(1, () => 'fallback'), Either.right(1))
   * assert.deepStrictEqual(Either.fromNullable(null, () => 'fallback'), Either.left('fallback'))
   * ```
   *
   * @category constructors
   * @since 2.0.0
   */
  <A, E>(onNullable: (right: A) => E): (self: A) => Either<NonNullable<A>, E>
  /**
   * Takes a lazy default and a nullable value, if the value is not nully (`null` or `undefined`), turn it into a `Right`, if the value is nully use
   * the provided default as a `Left`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either } from "effect"
   *
   * assert.deepStrictEqual(Either.fromNullable(1, () => 'fallback'), Either.right(1))
   * assert.deepStrictEqual(Either.fromNullable(null, () => 'fallback'), Either.left('fallback'))
   * ```
   *
   * @category constructors
   * @since 2.0.0
   */
  <A, E>(self: A, onNullable: (right: A) => E): Either<NonNullable<A>, E>
} = dual(
  2,
  <A, E>(self: A, onNullable: (right: A) => E): Either<NonNullable<A>, E> =>
    self == null ? left(onNullable(self)) : right(self)
)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, Option } from "effect"
 *
 * assert.deepStrictEqual(Either.fromOption(Option.some(1), () => 'error'), Either.right(1))
 * assert.deepStrictEqual(Either.fromOption(Option.none(), () => 'error'), Either.left('error'))
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export const fromOption: {
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, Option } from "effect"
   *
   * assert.deepStrictEqual(Either.fromOption(Option.some(1), () => 'error'), Either.right(1))
   * assert.deepStrictEqual(Either.fromOption(Option.none(), () => 'error'), Either.left('error'))
   * ```
   *
   * @category constructors
   * @since 2.0.0
   */
  <E>(onNone: () => E): <A>(self: Option<A>) => Either<A, E>
  /**
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, Option } from "effect"
   *
   * assert.deepStrictEqual(Either.fromOption(Option.some(1), () => 'error'), Either.right(1))
   * assert.deepStrictEqual(Either.fromOption(Option.none(), () => 'error'), Either.left('error'))
   * ```
   *
   * @category constructors
   * @since 2.0.0
   */
  <A, E>(self: Option<A>, onNone: () => E): Either<A, E>
} = either.fromOption

const try_: {
  <A, E>(
    options: {
      readonly try: LazyArg<A>
      readonly catch: (error: unknown) => E
    }
  ): Either<A, E>
  <A>(evaluate: LazyArg<A>): Either<A, unknown>
} = (<A, E>(
  evaluate: LazyArg<A> | {
    readonly try: LazyArg<A>
    readonly catch: (error: unknown) => E
  }
) => {
  if (isFunction(evaluate)) {
    try {
      return right(evaluate())
    } catch (e) {
      return left(e)
    }
  } else {
    try {
      return right(evaluate.try())
    } catch (e) {
      return left(evaluate.catch(e))
    }
  }
}) as any

export {
  /**
   * Imports a synchronous side-effect into a pure `Either` value, translating any
   * thrown exceptions into typed failed eithers creating with `Either.left`.
   *
   * @category constructors
   * @since 2.0.0
   */
  try_ as try
}

/**
 * Tests if a value is a `Either`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.isEither(Either.right(1)), true)
 * assert.deepStrictEqual(Either.isEither(Either.left("a")), true)
 * assert.deepStrictEqual(Either.isEither({ right: 1 }), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export const isEither: (input: unknown) => input is Either<unknown, unknown> = either.isEither

/**
 * Determine if a `Either` is a `Left`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.isLeft(Either.right(1)), false)
 * assert.deepStrictEqual(Either.isLeft(Either.left("a")), true)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export const isLeft: <A, E>(self: Either<A, E>) => self is Left<E, A> = either.isLeft

/**
 * Determine if a `Either` is a `Right`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.isRight(Either.right(1)), true)
 * assert.deepStrictEqual(Either.isRight(Either.left("a")), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export const isRight: <A, E>(self: Either<A, E>) => self is Right<E, A> = either.isRight

/**
 * Converts a `Either` to an `Option` discarding the `Left`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, Option } from "effect"
 *
 * assert.deepStrictEqual(Either.getRight(Either.right('ok')), Option.some('ok'))
 * assert.deepStrictEqual(Either.getRight(Either.left('err')), Option.none())
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export const getRight: <A, E>(self: Either<A, E>) => Option<A> = either.getRight

/**
 * Converts a `Either` to an `Option` discarding the value.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, Option } from "effect"
 *
 * assert.deepStrictEqual(Either.getLeft(Either.right('ok')), Option.none())
 * assert.deepStrictEqual(Either.getLeft(Either.left('err')), Option.some('err'))
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export const getLeft: <A, E>(self: Either<A, E>) => Option<E> = either.getLeft

/**
 * @category equivalence
 * @since 2.0.0
 */
export const getEquivalence = <A, E>({ left, right }: {
  right: Equivalence.Equivalence<A>
  left: Equivalence.Equivalence<E>
}): Equivalence.Equivalence<Either<A, E>> =>
  Equivalence.make((x, y) =>
    isLeft(x) ?
      isLeft(y) && left(x.left, y.left) :
      isRight(y) && right(x.right, y.right)
  )

/**
 * @category mapping
 * @since 2.0.0
 */
export const mapBoth: {
  /**
   * @category mapping
   * @since 2.0.0
   */
  <E, E2, A, A2>(
    options: {
      readonly onLeft: (left: E) => E2
      readonly onRight: (right: A) => A2
    }
  ): (self: Either<A, E>) => Either<A2, E2>
  /**
   * @category mapping
   * @since 2.0.0
   */
  <A, E, E2, A2>(
    self: Either<A, E>,
    options: {
      readonly onLeft: (left: E) => E2
      readonly onRight: (right: A) => A2
    }
  ): Either<A2, E2>
} = dual(
  2,
  <A, E, E2, A2>(self: Either<A, E>, { onLeft, onRight }: {
    readonly onLeft: (left: E) => E2
    readonly onRight: (right: A) => A2
  }): Either<A2, E2> => isLeft(self) ? left(onLeft(self.left)) : right(onRight(self.right))
)

/**
 * Maps the `Left` side of an `Either` value to a new `Either` value.
 *
 * @category mapping
 * @since 2.0.0
 */
export const mapLeft: {
  /**
   * Maps the `Left` side of an `Either` value to a new `Either` value.
   *
   * @category mapping
   * @since 2.0.0
   */
  <E, E2>(f: (left: E) => E2): <A>(self: Either<A, E>) => Either<A, E2>
  /**
   * Maps the `Left` side of an `Either` value to a new `Either` value.
   *
   * @category mapping
   * @since 2.0.0
   */
  <A, E, E2>(self: Either<A, E>, f: (left: E) => E2): Either<A, E2>
} = dual(
  2,
  <A, E, E2>(self: Either<A, E>, f: (left: E) => E2): Either<A, E2> =>
    isLeft(self) ? left(f(self.left)) : right(self.right)
)

/**
 * Maps the `Right` side of an `Either` value to a new `Either` value.
 *
 * @category mapping
 * @since 2.0.0
 */
export const map: {
  /**
   * Maps the `Right` side of an `Either` value to a new `Either` value.
   *
   * @category mapping
   * @since 2.0.0
   */
  <A, A2>(f: (right: A) => A2): <E>(self: Either<A, E>) => Either<A2, E>
  /**
   * Maps the `Right` side of an `Either` value to a new `Either` value.
   *
   * @category mapping
   * @since 2.0.0
   */
  <A, E, A2>(self: Either<A, E>, f: (right: A) => A2): Either<A2, E>
} = dual(
  2,
  <A, E, A2>(self: Either<A, E>, f: (right: A) => A2): Either<A2, E> =>
    isRight(self) ? right(f(self.right)) : left(self.left)
)

/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the `onLeft function,
 * if the value is a `Right` the inner value is applied to the `onRight` function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Either } from "effect"
 *
 * const onLeft  = (strings: ReadonlyArray<string>): string => `strings: ${strings.join(', ')}`
 *
 * const onRight = (value: number): string => `Ok: ${value}`
 *
 * assert.deepStrictEqual(pipe(Either.right(1), Either.match({ onLeft, onRight })), 'Ok: 1')
 * assert.deepStrictEqual(
 *   pipe(Either.left(['string 1', 'string 2']), Either.match({ onLeft, onRight })),
 *   'strings: string 1, string 2'
 * )
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
export const match: {
  /**
   * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the `onLeft function,
   * if the value is a `Right` the inner value is applied to the `onRight` function.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const onLeft  = (strings: ReadonlyArray<string>): string => `strings: ${strings.join(', ')}`
   *
   * const onRight = (value: number): string => `Ok: ${value}`
   *
   * assert.deepStrictEqual(pipe(Either.right(1), Either.match({ onLeft, onRight })), 'Ok: 1')
   * assert.deepStrictEqual(
   *   pipe(Either.left(['string 1', 'string 2']), Either.match({ onLeft, onRight })),
   *   'strings: string 1, string 2'
   * )
   * ```
   *
   * @category pattern matching
   * @since 2.0.0
   */
  <E, B, A, C = B>(
    options: {
      readonly onLeft: (left: E) => B
      readonly onRight: (right: A) => C
    }
  ): (self: Either<A, E>) => B | C
  /**
   * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the `onLeft function,
   * if the value is a `Right` the inner value is applied to the `onRight` function.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const onLeft  = (strings: ReadonlyArray<string>): string => `strings: ${strings.join(', ')}`
   *
   * const onRight = (value: number): string => `Ok: ${value}`
   *
   * assert.deepStrictEqual(pipe(Either.right(1), Either.match({ onLeft, onRight })), 'Ok: 1')
   * assert.deepStrictEqual(
   *   pipe(Either.left(['string 1', 'string 2']), Either.match({ onLeft, onRight })),
   *   'strings: string 1, string 2'
   * )
   * ```
   *
   * @category pattern matching
   * @since 2.0.0
   */
  <A, E, B, C = B>(
    self: Either<A, E>,
    options: {
      readonly onLeft: (left: E) => B
      readonly onRight: (right: A) => C
    }
  ): B | C
} = dual(
  2,
  <A, E, B, C = B>(self: Either<A, E>, { onLeft, onRight }: {
    readonly onLeft: (left: E) => B
    readonly onRight: (right: A) => C
  }): B | C => isLeft(self) ? onLeft(self.left) : onRight(self.right)
)

/**
 * Transforms a `Predicate` function into a `Right` of the input value if the predicate returns `true`
 * or `Left` of the result of the provided function if the predicate returns false
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Either } from "effect"
 *
 * const isPositive = (n: number): boolean => n > 0
 * const isPositiveEither = Either.liftPredicate(isPositive, n => `${n} is not positive`)
 *
 * assert.deepStrictEqual(
 *   isPositiveEither(1),
 *   Either.right(1)
 * )
 * assert.deepStrictEqual(
 *   isPositiveEither(0),
 *   Either.left("0 is not positive")
 * )
 * ```
 *
 * @category lifting
 * @since 3.4.0
 */
export const liftPredicate: {
  /**
   * Transforms a `Predicate` function into a `Right` of the input value if the predicate returns `true`
   * or `Left` of the result of the provided function if the predicate returns false
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   * const isPositiveEither = Either.liftPredicate(isPositive, n => `${n} is not positive`)
   *
   * assert.deepStrictEqual(
   *   isPositiveEither(1),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   isPositiveEither(0),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @category lifting
   * @since 3.4.0
   */
  <A, B extends A, E>(refinement: Refinement<A, B>, orLeftWith: (a: A) => E): (a: A) => Either<B, E>
  /**
   * Transforms a `Predicate` function into a `Right` of the input value if the predicate returns `true`
   * or `Left` of the result of the provided function if the predicate returns false
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   * const isPositiveEither = Either.liftPredicate(isPositive, n => `${n} is not positive`)
   *
   * assert.deepStrictEqual(
   *   isPositiveEither(1),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   isPositiveEither(0),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @category lifting
   * @since 3.4.0
   */
  <B extends A, E, A = B>(predicate: Predicate<A>, orLeftWith: (a: A) => E): (a: B) => Either<B, E>
  /**
   * Transforms a `Predicate` function into a `Right` of the input value if the predicate returns `true`
   * or `Left` of the result of the provided function if the predicate returns false
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   * const isPositiveEither = Either.liftPredicate(isPositive, n => `${n} is not positive`)
   *
   * assert.deepStrictEqual(
   *   isPositiveEither(1),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   isPositiveEither(0),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @category lifting
   * @since 3.4.0
   */
  <A, E, B extends A>(self: A, refinement: Refinement<A, B>, orLeftWith: (a: A) => E): Either<B, E>
  /**
   * Transforms a `Predicate` function into a `Right` of the input value if the predicate returns `true`
   * or `Left` of the result of the provided function if the predicate returns false
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   * const isPositiveEither = Either.liftPredicate(isPositive, n => `${n} is not positive`)
   *
   * assert.deepStrictEqual(
   *   isPositiveEither(1),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   isPositiveEither(0),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @category lifting
   * @since 3.4.0
   */
  <B extends A, E, A = B>(self: B, predicate: Predicate<A>, orLeftWith: (a: A) => E): Either<B, E>
} = dual(
  3,
  <A, E>(a: A, predicate: Predicate<A>, orLeftWith: (a: A) => E): Either<A, E> =>
    predicate(a) ? right(a) : left(orLeftWith(a))
)

/**
 * Filter the right value with the provided function.
 * If the predicate fails, set the left value with the result of the provided function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Either } from "effect"
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     Either.right(1),
 *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
 *   ),
 *   Either.right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     Either.right(0),
 *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
 *   ),
 *   Either.left("0 is not positive")
 * )
 * ```
 *
 * @since 2.0.0
 * @category filtering & conditionals
 */
export const filterOrLeft: {
  /**
   * Filter the right value with the provided function.
   * If the predicate fails, set the left value with the result of the provided function.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   *
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(1),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(0),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @since 2.0.0
   * @category filtering & conditionals
   */
  <A, B extends A, E2>(
    refinement: Refinement<NoInfer<A>, B>,
    orLeftWith: (right: NoInfer<A>) => E2
  ): <E>(self: Either<A, E>) => Either<B, E2 | E>
  /**
   * Filter the right value with the provided function.
   * If the predicate fails, set the left value with the result of the provided function.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   *
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(1),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(0),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @since 2.0.0
   * @category filtering & conditionals
   */
  <A, E2>(predicate: Predicate<NoInfer<A>>, orLeftWith: (right: NoInfer<A>) => E2): <E>(self: Either<A, E>) => Either<A, E2 | E>
  /**
   * Filter the right value with the provided function.
   * If the predicate fails, set the left value with the result of the provided function.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   *
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(1),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(0),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @since 2.0.0
   * @category filtering & conditionals
   */
  <A, E, B extends A, E2>(
    self: Either<A, E>,
    refinement: Refinement<A, B>,
    orLeftWith: (right: A) => E2
  ): Either<B, E | E2>
  /**
   * Filter the right value with the provided function.
   * If the predicate fails, set the left value with the result of the provided function.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { pipe, Either } from "effect"
   *
   * const isPositive = (n: number): boolean => n > 0
   *
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(1),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.right(1)
   * )
   * assert.deepStrictEqual(
   *   pipe(
   *     Either.right(0),
   *     Either.filterOrLeft(isPositive, n => `${n} is not positive`)
   *   ),
   *   Either.left("0 is not positive")
   * )
   * ```
   *
   * @since 2.0.0
   * @category filtering & conditionals
   */
  <A, E, E2>(self: Either<A, E>, predicate: Predicate<A>, orLeftWith: (right: A) => E2): Either<A, E | E2>
} = dual(3, <A, E, E2>(
  self: Either<A, E>,
  predicate: Predicate<A>,
  orLeftWith: (right: A) => E2
): Either<A, E | E2> => flatMap(self, (r) => predicate(r) ? right(r) : left(orLeftWith(r))))

/**
 * @category getters
 * @since 2.0.0
 */
export const merge: <A, E>(self: Either<A, E>) => E | A = match({
  onLeft: identity,
  onRight: identity
})

/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.getOrElse(Either.right(1), (error) => error + "!"), 1)
 * assert.deepStrictEqual(Either.getOrElse(Either.left("not a number"), (error) => error + "!"), "not a number!")
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export const getOrElse: {
  /**
   * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either } from "effect"
   *
   * assert.deepStrictEqual(Either.getOrElse(Either.right(1), (error) => error + "!"), 1)
   * assert.deepStrictEqual(Either.getOrElse(Either.left("not a number"), (error) => error + "!"), "not a number!")
   * ```
   *
   * @category getters
   * @since 2.0.0
   */
  <E, A2>(onLeft: (left: E) => A2): <A>(self: Either<A, E>) => A2 | A
  /**
   * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either } from "effect"
   *
   * assert.deepStrictEqual(Either.getOrElse(Either.right(1), (error) => error + "!"), 1)
   * assert.deepStrictEqual(Either.getOrElse(Either.left("not a number"), (error) => error + "!"), "not a number!")
   * ```
   *
   * @category getters
   * @since 2.0.0
   */
  <A, E, A2>(self: Either<A, E>, onLeft: (left: E) => A2): A | A2
} = dual(
  2,
  <A, E, A2>(self: Either<A, E>, onLeft: (left: E) => A2): A | A2 => isLeft(self) ? onLeft(self.left) : self.right
)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.getOrNull(Either.right(1)), 1)
 * assert.deepStrictEqual(Either.getOrNull(Either.left("a")), null)
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export const getOrNull: <A, E>(self: Either<A, E>) => A | null = getOrElse(constNull)

/**
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.getOrUndefined(Either.right(1)), 1)
 * assert.deepStrictEqual(Either.getOrUndefined(Either.left("a")), undefined)
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export const getOrUndefined: <A, E>(self: Either<A, E>) => A | undefined = getOrElse(constUndefined)

/**
 * Extracts the value of an `Either` or throws if the `Either` is `Left`.
 *
 * If a default error is sufficient for your use case and you don't need to configure the thrown error, see {@link getOrThrow}.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Either.getOrThrowWith(Either.right(1), () => new Error('Unexpected Left')),
 *   1
 * )
 * assert.throws(() => Either.getOrThrowWith(Either.left("error"), () => new Error('Unexpected Left')))
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export const getOrThrowWith: {
  /**
   * Extracts the value of an `Either` or throws if the `Either` is `Left`.
   *
   * If a default error is sufficient for your use case and you don't need to configure the thrown error, see {@link getOrThrow}.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either } from "effect"
   *
   * assert.deepStrictEqual(
   *   Either.getOrThrowWith(Either.right(1), () => new Error('Unexpected Left')),
   *   1
   * )
   * assert.throws(() => Either.getOrThrowWith(Either.left("error"), () => new Error('Unexpected Left')))
   * ```
   *
   * @category getters
   * @since 2.0.0
   */
  <E>(onLeft: (left: E) => unknown): <A>(self: Either<A, E>) => A
  /**
   * Extracts the value of an `Either` or throws if the `Either` is `Left`.
   *
   * If a default error is sufficient for your use case and you don't need to configure the thrown error, see {@link getOrThrow}.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either } from "effect"
   *
   * assert.deepStrictEqual(
   *   Either.getOrThrowWith(Either.right(1), () => new Error('Unexpected Left')),
   *   1
   * )
   * assert.throws(() => Either.getOrThrowWith(Either.left("error"), () => new Error('Unexpected Left')))
   * ```
   *
   * @category getters
   * @since 2.0.0
   */
  <A, E>(self: Either<A, E>, onLeft: (left: E) => unknown): A
} = dual(2, <A, E>(self: Either<A, E>, onLeft: (left: E) => unknown): A => {
  if (isRight(self)) {
    return self.right
  }
  throw onLeft(self.left)
})

// TODO(4.0): by default should throw `L` (i.e getOrThrowWith with the identity function)
/**
 * Extracts the value of an `Either` or throws if the `Either` is `Left`.
 *
 * The thrown error is a default error. To configure the error thrown, see  {@link getOrThrowWith}.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.getOrThrow(Either.right(1)), 1)
 * assert.throws(() => Either.getOrThrow(Either.left("error")))
 * ```
 *
 * @throws `Error("getOrThrow called on a Left")`
 *
 * @category getters
 * @since 2.0.0
 */
export const getOrThrow: <A, E>(self: Either<A, E>) => A = getOrThrowWith(() =>
  new Error("getOrThrow called on a Left")
)

/**
 * Returns `self` if it is a `Right` or `that` otherwise.
 *
 * @category error handling
 * @since 2.0.0
 */
export const orElse: {
  /**
   * Returns `self` if it is a `Right` or `that` otherwise.
   *
   * @category error handling
   * @since 2.0.0
   */
  <E, A2, E2>(that: (left: E) => Either<A2, E2>): <A>(self: Either<A, E>) => Either<A | A2, E2>
  /**
   * Returns `self` if it is a `Right` or `that` otherwise.
   *
   * @category error handling
   * @since 2.0.0
   */
  <A, E, A2, E2>(self: Either<A, E>, that: (left: E) => Either<A2, E2>): Either<A | A2, E2>
} = dual(
  2,
  <A, E, A2, E2>(self: Either<A, E>, that: (left: E) => Either<A2, E2>): Either<A | A2, E2> =>
    isLeft(self) ? that(self.left) : right(self.right)
)

/**
 * @category sequencing
 * @since 2.0.0
 */
export const flatMap: {
  /**
   * @category sequencing
   * @since 2.0.0
   */
  <A, A2, E2>(f: (right: A) => Either<A2, E2>): <E>(self: Either<A, E>) => Either<A2, E | E2>
  /**
   * @category sequencing
   * @since 2.0.0
   */
  <A, E, A2, E2>(self: Either<A, E>, f: (right: A) => Either<A2, E2>): Either<A2, E | E2>
} = dual(
  2,
  <A, E, A2, E2>(self: Either<A, E>, f: (right: A) => Either<A2, E2>): Either<A2, E | E2> =>
    isLeft(self) ? left(self.left) : f(self.right)
)

/**
 * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
 *
 * @category sequencing
 * @since 2.0.0
 */
export const andThen: {
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A, A2, E2>(f: (right: A) => Either<A2, E2>): <E>(self: Either<A, E>) => Either<A2, E | E2>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A2, E2>(f: Either<A2, E2>): <E, A>(self: Either<A, E>) => Either<A2, E | E2>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A, A2>(f: (right: A) => A2): <E>(self: Either<A, E>) => Either<A2, E>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A2>(right: NotFunction<A2>): <A, E>(self: Either<A, E>) => Either<A2, E>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A, E, A2, E2>(self: Either<A, E>, f: (right: A) => Either<A2, E2>): Either<A2, E | E2>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A, E, A2, E2>(self: Either<A, E>, f: Either<A2, E2>): Either<A2, E | E2>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A, E, A2>(self: Either<A, E>, f: (right: A) => A2): Either<A2, E>
  /**
   * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
   *
   * @category sequencing
   * @since 2.0.0
   */
  <A, E, A2>(self: Either<A, E>, f: NotFunction<A2>): Either<A2, E>
} = dual(
  2,
  <A, E, A2, E2>(self: Either<A, E>, f: (right: A) => Either<A2, E2> | Either<A2, E2>): Either<A2, E | E2> =>
    flatMap(self, (a) => {
      const b = isFunction(f) ? f(a) : f
      return isEither(b) ? b : right(b)
    })
)

/**
 * @category zipping
 * @since 2.0.0
 */
export const zipWith: {
  /**
   * @category zipping
   * @since 2.0.0
   */
  <A2, E2, A, B>(that: Either<A2, E2>, f: (right: A, right2: A2) => B): <E>(self: Either<A, E>) => Either<B, E2 | E>
  /**
   * @category zipping
   * @since 2.0.0
   */
  <A, E, A2, E2, B>(self: Either<A, E>, that: Either<A2, E2>, f: (right: A, right2: A2) => B): Either<B, E | E2>
} = dual(
  3,
  <A, E, A2, E2, B>(self: Either<A, E>, that: Either<A2, E2>, f: (right: A, right2: A2) => B): Either<B, E | E2> =>
    flatMap(self, (r) => map(that, (r2) => f(r, r2)))
)

/**
 * @category combining
 * @since 2.0.0
 */
export const ap: {
  /**
   * @category combining
   * @since 2.0.0
   */
  <A, E2>(that: Either<A, E2>): <A2, E>(self: Either<(right: A) => A2, E>) => Either<A2, E | E2>
  /**
   * @category combining
   * @since 2.0.0
   */
  <A, A2, E, E2>(self: Either<(right: A) => A2, E>, that: Either<A, E2>): Either<A2, E | E2>
} = dual(
  2,
  <A, E, A2, E2>(self: Either<(right: A) => A2, E>, that: Either<A, E2>): Either<A2, E | E2> =>
    zipWith(self, that, (f, a) => f(a))
)

/**
 * Takes a structure of `Either`s and returns an `Either` of values with the same structure.
 *
 * - If a tuple is supplied, then the returned `Either` will contain a tuple with the same length.
 * - If a struct is supplied, then the returned `Either` will contain a struct with the same keys.
 * - If an iterable is supplied, then the returned `Either` will contain an array.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either } from "effect"
 *
 * assert.deepStrictEqual(Either.all([Either.right(1), Either.right(2)]), Either.right([1, 2]))
 * assert.deepStrictEqual(Either.all({ right: Either.right(1), b: Either.right("hello") }), Either.right({ right: 1, b: "hello" }))
 * assert.deepStrictEqual(Either.all({ right: Either.right(1), b: Either.left("error") }), Either.left("error"))
 * ```
 *
 * @category combining
 * @since 2.0.0
 */
// @ts-expect-error
export const all: <const I extends Iterable<Either<any, any>> | Record<string, Either<any, any>>>(
  input: I
) => [I] extends [ReadonlyArray<Either<any, any>>] ? Either<
    { -readonly [K in keyof I]: [I[K]] extends [Either<infer A, any>] ? A : never },
    I[number] extends never ? never : [I[number]] extends [Either<any, infer E>] ? E : never
  >
  : [I] extends [Iterable<Either<infer A, infer E>>] ? Either<Array<A>, E>
  : Either<
    { -readonly [K in keyof I]: [I[K]] extends [Either<infer A, any>] ? A : never },
    I[keyof I] extends never ? never : [I[keyof I]] extends [Either<any, infer E>] ? E : never
  > = (
    input: Iterable<Either<any, any>> | Record<string, Either<any, any>>
  ): Either<any, any> => {
    if (Symbol.iterator in input) {
      const out: Array<Either<any, any>> = []
      for (const e of input) {
        if (isLeft(e)) {
          return e
        }
        out.push(e.right)
      }
      return right(out)
    }

    const out: Record<string, any> = {}
    for (const key of Object.keys(input)) {
      const e = input[key]
      if (isLeft(e)) {
        return e
      }
      out[key] = e.right
    }
    return right(out)
  }

/**
 * Returns an `Either` that swaps the error/success cases. This allows you to
 * use all methods on the error channel, possibly before flipping back.
 *
 * @since 2.0.0
 * @category mapping
 */
export const flip = <A, E>(self: Either<A, E>): Either<E, A> => isLeft(self) ? right(self.left) : left(self.right)

const adapter = Gen.adapter<EitherTypeLambda>()

/**
 * @category generators
 * @since 2.0.0
 */
export const gen: Gen.Gen<EitherTypeLambda, Gen.Adapter<EitherTypeLambda>> = (...args) => {
  const f = args.length === 1 ? args[0] : args[1].bind(args[0])
  const iterator = f(adapter)
  let state: IteratorResult<any> = iterator.next()
  while (!state.done) {
    const current = Gen.isGenKind(state.value)
      ? state.value.value
      : Gen.yieldWrapGet(state.value)
    if (isLeft(current)) {
      return current
    }
    state = iterator.next(current.right as never)
  }
  return right(state.value) as any
}

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, pipe } from "effect"
 *
 * const result = pipe(
 *   Either.Do,
 *   Either.bind("x", () => Either.right(2)),
 *   Either.bind("y", () => Either.right(3)),
 *   Either.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link bind}
 * @see {@link bindTo}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
export const Do: Either<{}> = right({})

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, pipe } from "effect"
 *
 * const result = pipe(
 *   Either.Do,
 *   Either.bind("x", () => Either.right(2)),
 *   Either.bind("y", () => Either.right(3)),
 *   Either.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
export const bind: {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, pipe } from "effect"
   *
   * const result = pipe(
   *   Either.Do,
   *   Either.bind("x", () => Either.right(2)),
   *   Either.bind("y", () => Either.right(3)),
   *   Either.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <N extends string, A extends object, B, E2>(name: Exclude<N, keyof A>, f: (a: NoInfer<A>) => Either<B, E2>): <E>(self: Either<A, E>) => Either<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E | E2>
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, pipe } from "effect"
   *
   * const result = pipe(
   *   Either.Do,
   *   Either.bind("x", () => Either.right(2)),
   *   Either.bind("y", () => Either.right(3)),
   *   Either.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <A extends object, E, N extends string, B, E2>(
    self: Either<A, E>,
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => Either<B, E2>
  ): Either<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E | E2>
} = doNotation.bind<EitherTypeLambda>(map, flatMap)

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, pipe } from "effect"
 *
 * const result = pipe(
 *   Either.Do,
 *   Either.bind("x", () => Either.right(2)),
 *   Either.bind("y", () => Either.right(3)),
 *   Either.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
export const bindTo: {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, pipe } from "effect"
   *
   * const result = pipe(
   *   Either.Do,
   *   Either.bind("x", () => Either.right(2)),
   *   Either.bind("y", () => Either.right(3)),
   *   Either.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <N extends string>(name: N): <A, E>(self: Either<A, E>) => Either<{ [K in N]: A }, E>
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, pipe } from "effect"
   *
   * const result = pipe(
   *   Either.Do,
   *   Either.bind("x", () => Either.right(2)),
   *   Either.bind("y", () => Either.right(3)),
   *   Either.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <A, E, N extends string>(self: Either<A, E>, name: N): Either<{ [K in N]: A }, E>
} = doNotation.bindTo<EitherTypeLambda>(map)

const let_: {
  <N extends string, A extends object, B>(
    name: Exclude<N, keyof A>,
    f: (r: NoInfer<A>) => B
  ): <E>(self: Either<A, E>) => Either<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E>
  <A extends object, E, N extends string, B>(
    self: Either<A, E>,
    name: Exclude<N, keyof A>,
    f: (r: NoInfer<A>) => B
  ): Either<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E>
} = doNotation.let_<EitherTypeLambda>(map)

export {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Either` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Either, pipe } from "effect"
   *
   * const result = pipe(
   *   Either.Do,
   *   Either.bind("x", () => Either.right(2)),
   *   Either.bind("y", () => Either.right(3)),
   *   Either.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(result, Either.right({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link bind}
   *
   * @category do notation
   * @since 2.0.0
   */
  let_ as let
}

/**
 * Converts an `Option` of an `Either` into an `Either` of an `Option`.
 *
 * **Details**
 *
 * This function transforms an `Option<Either<A, E>>` into an
 * `Either<Option<A>, E>`. If the `Option` is `None`, the resulting `Either`
 * will be a `Right` with a `None` value. If the `Option` is `Some`, the
 * inner `Either` will be executed, and its result wrapped in a `Some`.
 *
 * @example
 * ```ts
 * import { Effect, Either, Option } from "effect"
 *
 * //      ┌─── Option<Either<number, never>>
 * //      ▼
 * const maybe = Option.some(Either.right(42))
 *
 * //      ┌─── Either<Option<number>, never, never>
 * //      ▼
 * const result = Either.transposeOption(maybe)
 *
 * console.log(Effect.runSync(result))
 * // Output: { _id: 'Option', _tag: 'Some', value: 42 }
 * ```
 *
 * @since 3.14.0
 * @category Optional Wrapping & Unwrapping
 */
export const transposeOption = <A = never, E = never>(
  self: Option<Either<A, E>>
): Either<Option<A>, E> => {
  return option_.isNone(self) ? right(option_.none) : map(self.value, option_.some)
}

/**
 * Applies an `Either` on an `Option` and transposes the result.
 *
 * **Details**
 *
 * If the `Option` is `None`, the resulting `Either` will immediately succeed with a `Right` value of `None`.
 * If the `Option` is `Some`, the transformation function will be applied to the inner value, and its result wrapped in a `Some`.
 *
 * @example
 * ```ts
 * import { Either, Option, pipe } from "effect"
 *
 * //          ┌─── Either<Option<number>, never>>
 * //          ▼
 * const noneResult = pipe(
 *   Option.none(),
 *   Either.transposeMapOption(() => Either.right(42)) // will not be executed
 * )
 * console.log(noneResult)
 * // Output: { _id: 'Either', _tag: 'Right', right: { _id: 'Option', _tag: 'None' } }
 *
 * //          ┌─── Either<Option<number>, never>>
 * //          ▼
 * const someRightResult = pipe(
 *   Option.some(42),
 *   Either.transposeMapOption((value) => Either.right(value * 2))
 * )
 * console.log(someRightResult)
 * // Output: { _id: 'Either', _tag: 'Right', right: { _id: 'Option', _tag: 'Some', value: 84 } }
 * ```
 *
 * @since 3.15.0
 * @category Optional Wrapping & Unwrapping
 */
export const transposeMapOption = dual<
  /**
   * Applies an `Either` on an `Option` and transposes the result.
   *
   * **Details**
   *
   * If the `Option` is `None`, the resulting `Either` will immediately succeed with a `Right` value of `None`.
   * If the `Option` is `Some`, the transformation function will be applied to the inner value, and its result wrapped in a `Some`.
   *
   * @example
   * ```ts
   * import { Either, Option, pipe } from "effect"
   *
   * //          ┌─── Either<Option<number>, never>>
   * //          ▼
   * const noneResult = pipe(
   *   Option.none(),
   *   Either.transposeMapOption(() => Either.right(42)) // will not be executed
   * )
   * console.log(noneResult)
   * // Output: { _id: 'Either', _tag: 'Right', right: { _id: 'Option', _tag: 'None' } }
   *
   * //          ┌─── Either<Option<number>, never>>
   * //          ▼
   * const someRightResult = pipe(
   *   Option.some(42),
   *   Either.transposeMapOption((value) => Either.right(value * 2))
   * )
   * console.log(someRightResult)
   * // Output: { _id: 'Either', _tag: 'Right', right: { _id: 'Option', _tag: 'Some', value: 84 } }
   * ```
   *
   * @since 3.15.0
   * @category Optional Wrapping & Unwrapping
   */
  <A, B, E = never>(f: (self: A) => Either<B, E>) => (self: Option<A>) => Either<Option<B>, E>,
  /**
   * Applies an `Either` on an `Option` and transposes the result.
   *
   * **Details**
   *
   * If the `Option` is `None`, the resulting `Either` will immediately succeed with a `Right` value of `None`.
   * If the `Option` is `Some`, the transformation function will be applied to the inner value, and its result wrapped in a `Some`.
   *
   * @example
   * ```ts
   * import { Either, Option, pipe } from "effect"
   *
   * //          ┌─── Either<Option<number>, never>>
   * //          ▼
   * const noneResult = pipe(
   *   Option.none(),
   *   Either.transposeMapOption(() => Either.right(42)) // will not be executed
   * )
   * console.log(noneResult)
   * // Output: { _id: 'Either', _tag: 'Right', right: { _id: 'Option', _tag: 'None' } }
   *
   * //          ┌─── Either<Option<number>, never>>
   * //          ▼
   * const someRightResult = pipe(
   *   Option.some(42),
   *   Either.transposeMapOption((value) => Either.right(value * 2))
   * )
   * console.log(someRightResult)
   * // Output: { _id: 'Either', _tag: 'Right', right: { _id: 'Option', _tag: 'Some', value: 84 } }
   * ```
   *
   * @since 3.15.0
   * @category Optional Wrapping & Unwrapping
   */
  <A, B, E = never>(self: Option<A>, f: (self: A) => Either<B, E>) => Either<Option<B>, E>
>(2, (self, f) => option_.isNone(self) ? right(option_.none) : map(f(self.value), option_.some))
