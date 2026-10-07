/**
 * @since 2.0.0
 */
import type { Either } from "./Either.js"
import * as Equal from "./Equal.js"
import * as Equivalence from "./Equivalence.js"
import type { LazyArg } from "./Function.js"
import { constNull, constUndefined, dual, identity, isFunction } from "./Function.js"
import type { TypeLambda } from "./HKT.js"
import type { Inspectable } from "./Inspectable.js"
import * as doNotation from "./internal/doNotation.js"
import * as either from "./internal/either.js"
import * as option from "./internal/option.js"
import type { Order } from "./Order.js"
import * as order from "./Order.js"
import type { Pipeable } from "./Pipeable.js"
import type { Predicate, Refinement } from "./Predicate.js"
import type { Covariant, NoInfer, NotFunction } from "./Types.js"
import type * as Unify from "./Unify.js"
import * as Gen from "./Utils.js"

/**
 * The `Option` data type represents optional values. An `Option<A>` can either
 * be `Some<A>`, containing a value of type `A`, or `None`, representing the
 * absence of a value.
 *
 * **When to Use**
 *
 * You can use `Option` in scenarios like:
 *
 * - Using it for initial values
 * - Returning values from functions that are not defined for all possible
 *   inputs (referred to as “partial functions”)
 * - Managing optional fields in data structures
 * - Handling optional function arguments
 *
 * @category Models
 * @since 2.0.0
 */
export type Option<A> = None<A> | Some<A>

/**
 * @category Symbols
 * @since 2.0.0
 */
export const TypeId: unique symbol = Symbol.for("effect/Option")

/**
 * @category Symbols
 * @since 2.0.0
 */
export type TypeId = typeof TypeId

/**
 * @category Models
 * @since 2.0.0
 */
export interface None<out A> extends Pipeable, Inspectable {
  readonly _tag: "None"
  readonly _op: "None"
  readonly [TypeId]: {
    readonly _A: Covariant<A>
  }
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: OptionUnify<this>
  [Unify.ignoreSymbol]?: OptionUnifyIgnore
}

/**
 * @category Models
 * @since 2.0.0
 */
export interface Some<out A> extends Pipeable, Inspectable {
  readonly _tag: "Some"
  readonly _op: "Some"
  readonly value: A
  readonly [TypeId]: {
    readonly _A: Covariant<A>
  }
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: OptionUnify<this>
  [Unify.ignoreSymbol]?: OptionUnifyIgnore
}

/**
 * @category Models
 * @since 2.0.0
 */
export interface OptionUnify<A extends { [Unify.typeSymbol]?: any }> {
  Option?: () => A[Unify.typeSymbol] extends Option<infer A0> | infer _ ? Option<A0> : never
}

/**
 * @since 2.0.0
 */
export declare namespace Option {
  /**
   * Extracts the type of the value contained in an `Option`.
   *
   * **Example** (Getting the Value Type of an Option)
   *
   * ```ts
   * import { Option } from "effect"
   *
   * // Declare an Option holding a string
   * declare const myOption: Option.Option<string>
   *
   * // Extract the type of the value within the Option
   * //
   * //      ┌─── string
   * //      ▼
   * type MyType = Option.Option.Value<typeof myOption>
   * ```
   *
   * @since 2.0.0
   * @category Type-level Utils
   */
  export type Value<T extends Option<any>> = [T] extends [Option<infer _A>] ? _A : never
}

/**
 * @category Models
 * @since 2.0.0
 */
export interface OptionUnifyIgnore {}

/**
 * @category Type Lambdas
 * @since 2.0.0
 */
export interface OptionTypeLambda extends TypeLambda {
  readonly type: Option<this["Target"]>
}

/**
 * Represents the absence of a value by creating an empty `Option`.
 *
 * `Option.none` returns an `Option<never>`, which is a subtype of `Option<A>`.
 * This means you can use it in place of any `Option<A>` regardless of the type
 * `A`.
 *
 * **Example** (Creating an Option with No Value)
 *
 * ```ts
 * import { Option } from "effect"
 *
 * // An Option holding no value
 * //
 * //      ┌─── Option<never>
 * //      ▼
 * const noValue = Option.none()
 *
 * console.log(noValue)
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @see {@link some} for the opposite operation.
 *
 * @category Constructors
 * @since 2.0.0
 */
export const none = <A = never>(): Option<A> => option.none

/**
 * Wraps the given value into an `Option` to represent its presence.
 *
 * **Example** (Creating an Option with a Value)
 *
 * ```ts
 * import { Option } from "effect"
 *
 * // An Option holding the number 1
 * //
 * //      ┌─── Option<number>
 * //      ▼
 * const value = Option.some(1)
 *
 * console.log(value)
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 * ```
 *
 * @see {@link none} for the opposite operation.
 *
 * @category Constructors
 * @since 2.0.0
 */
export const some: <A>(value: A) => Option<A> = option.some

/**
 * Determines whether the given value is an `Option`.
 *
 * **Details**
 *
 * This function checks if a value is an instance of `Option`. It returns `true`
 * if the value is either `Option.some` or `Option.none`, and `false` otherwise.
 * This is particularly useful when working with unknown values or when you need
 * to ensure type safety in your code.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.isOption(Option.some(1)))
 * // Output: true
 *
 * console.log(Option.isOption(Option.none()))
 * // Output: true
 *
 * console.log(Option.isOption({}))
 * // Output: false
 * ```
 *
 * @category Guards
 * @since 2.0.0
 */
export const isOption: (input: unknown) => input is Option<unknown> = option.isOption

/**
 * Checks whether an `Option` represents the absence of a value (`None`).
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.isNone(Option.some(1)))
 * // Output: false
 *
 * console.log(Option.isNone(Option.none()))
 * // Output: true
 * ```
 *
 * @see {@link isSome} for the opposite check.
 *
 * @category Guards
 * @since 2.0.0
 */
export const isNone: <A>(self: Option<A>) => self is None<A> = option.isNone

/**
 * Checks whether an `Option` contains a value (`Some`).
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.isSome(Option.some(1)))
 * // Output: true
 *
 * console.log(Option.isSome(Option.none()))
 * // Output: false
 * ```
 *
 * @see {@link isNone} for the opposite check.
 *
 * @category Guards
 * @since 2.0.0
 */
export const isSome: <A>(self: Option<A>) => self is Some<A> = option.isSome

/**
 * Performs pattern matching on an `Option` to handle both `Some` and `None`
 * cases.
 *
 * **Details**
 *
 * This function allows you to match against an `Option` and handle both
 * scenarios: when the `Option` is `None` (i.e., contains no value), and when
 * the `Option` is `Some` (i.e., contains a value). It executes one of the
 * provided functions based on the case:
 *
 * - If the `Option` is `None`, the `onNone` function is executed and its result
 *   is returned.
 * - If the `Option` is `Some`, the `onSome` function is executed with the
 *   contained value, and its result is returned.
 *
 * This function provides a concise and functional way to handle optional values
 * without resorting to `if` or manual checks, making your code more declarative
 * and readable.
 *
 * **Example** (Pattern Matching with Option)
 *
 * ```ts
 * import { Option } from "effect"
 *
 * const foo = Option.some(1)
 *
 * const message = Option.match(foo, {
 *   onNone: () => "Option is empty",
 *   onSome: (value) => `Option has a value: ${value}`
 * })
 *
 * console.log(message)
 * // Output: "Option has a value: 1"
 * ```
 *
 * @category Pattern matching
 * @since 2.0.0
 */
export const match: {
  /**
   * Performs pattern matching on an `Option` to handle both `Some` and `None`
   * cases.
   *
   * **Details**
   *
   * This function allows you to match against an `Option` and handle both
   * scenarios: when the `Option` is `None` (i.e., contains no value), and when
   * the `Option` is `Some` (i.e., contains a value). It executes one of the
   * provided functions based on the case:
   *
   * - If the `Option` is `None`, the `onNone` function is executed and its result
   *   is returned.
   * - If the `Option` is `Some`, the `onSome` function is executed with the
   *   contained value, and its result is returned.
   *
   * This function provides a concise and functional way to handle optional values
   * without resorting to `if` or manual checks, making your code more declarative
   * and readable.
   *
   * **Example** (Pattern Matching with Option)
   *
   * ```ts
   * import { Option } from "effect"
   *
   * const foo = Option.some(1)
   *
   * const message = Option.match(foo, {
   *   onNone: () => "Option is empty",
   *   onSome: (value) => `Option has a value: ${value}`
   * })
   *
   * console.log(message)
   * // Output: "Option has a value: 1"
   * ```
   *
   * @category Pattern matching
   * @since 2.0.0
   */
  <B, A, C = B>(
    options: {
      readonly onNone: LazyArg<B>
      readonly onSome: (a: A) => C
    }
  ): (self: Option<A>) => B | C
  /**
   * Performs pattern matching on an `Option` to handle both `Some` and `None`
   * cases.
   *
   * **Details**
   *
   * This function allows you to match against an `Option` and handle both
   * scenarios: when the `Option` is `None` (i.e., contains no value), and when
   * the `Option` is `Some` (i.e., contains a value). It executes one of the
   * provided functions based on the case:
   *
   * - If the `Option` is `None`, the `onNone` function is executed and its result
   *   is returned.
   * - If the `Option` is `Some`, the `onSome` function is executed with the
   *   contained value, and its result is returned.
   *
   * This function provides a concise and functional way to handle optional values
   * without resorting to `if` or manual checks, making your code more declarative
   * and readable.
   *
   * **Example** (Pattern Matching with Option)
   *
   * ```ts
   * import { Option } from "effect"
   *
   * const foo = Option.some(1)
   *
   * const message = Option.match(foo, {
   *   onNone: () => "Option is empty",
   *   onSome: (value) => `Option has a value: ${value}`
   * })
   *
   * console.log(message)
   * // Output: "Option has a value: 1"
   * ```
   *
   * @category Pattern matching
   * @since 2.0.0
   */
  <A, B, C = B>(
    self: Option<A>,
    options: {
      readonly onNone: LazyArg<B>
      readonly onSome: (a: A) => C
    }
  ): B | C
} = dual(
  2,
  <A, B, C = B>(self: Option<A>, { onNone, onSome }: {
    readonly onNone: LazyArg<B>
    readonly onSome: (a: A) => C
  }): B | C => isNone(self) ? onNone() : onSome(self.value)
)

/**
 * Converts an `Option`-returning function into a type guard.
 *
 * **Details**
 *
 * This function transforms a function that returns an `Option` into a type
 * guard, ensuring type safety when validating or narrowing types. The returned
 * type guard function checks whether the input satisfies the condition defined
 * in the original `Option`-returning function.
 *
 * If the original function returns `Option.some`, the type guard evaluates to
 * `true`, confirming the input is of the desired type. If the function returns
 * `Option.none`, the type guard evaluates to `false`.
 *
 * This utility is especially useful for validating types in union types,
 * filtering arrays, or ensuring safe handling of specific subtypes.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * type MyData = string | number
 *
 * const parseString = (data: MyData): Option.Option<string> =>
 *   typeof data === "string" ? Option.some(data) : Option.none()
 *
 * //      ┌─── (a: MyData) => a is string
 * //      ▼
 * const isString = Option.toRefinement(parseString)
 *
 * console.log(isString("a"))
 * // Output: true
 *
 * console.log(isString(1))
 * // Output: false
 * ```
 *
 * @category Conversions
 * @since 2.0.0
 */
export const toRefinement = <A, B extends A>(f: (a: A) => Option<B>): (a: A) => a is B => (a: A): a is B => isSome(f(a))

/**
 * Converts an `Iterable` into an `Option`, wrapping the first element if it
 * exists.
 *
 * **Details**
 *
 * This function takes an `Iterable` (e.g., an array, a generator, or any object
 * implementing the `Iterable` interface) and returns an `Option` based on its
 * content:
 *
 * - If the `Iterable` contains at least one element, the first element is
 *   wrapped in a `Some` and returned.
 * - If the `Iterable` is empty, `None` is returned, representing the absence of
 *   a value.
 *
 * This utility is useful for safely handling collections that might be empty,
 * ensuring you explicitly handle both cases where a value exists or doesn't.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.fromIterable([1, 2, 3]))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 *
 * console.log(Option.fromIterable([]))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Constructors
 * @since 2.0.0
 */
export const fromIterable = <A>(collection: Iterable<A>): Option<A> => {
  for (const a of collection) {
    return some(a)
  }
  return none()
}

/**
 * Converts an `Either` into an `Option` by discarding the error and extracting
 * the right value.
 *
 * **Details**
 *
 * This function takes an `Either` and returns an `Option` based on its value:
 *
 * - If the `Either` is a `Right`, its value is wrapped in a `Some` and
 *   returned.
 * - If the `Either` is a `Left`, the error is discarded, and `None` is
 *   returned.
 *
 * This is particularly useful when you only care about the success case
 * (`Right`) of an `Either` and want to handle the result using `Option`. By
 * using this function, you can convert `Either` into a simpler structure for
 * cases where error handling is not required.
 *
 * @example
 * ```ts
 * import { Either, Option } from "effect"
 *
 * console.log(Option.getRight(Either.right("ok")))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'ok' }
 *
 * console.log(Option.getRight(Either.left("err")))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @see {@link getLeft} for the opposite operation.
 *
 * @category Conversions
 * @since 2.0.0
 */
export const getRight: <R, L>(self: Either<R, L>) => Option<R> = either.getRight

/**
 * Converts an `Either` into an `Option` by discarding the right value and
 * extracting the left value.
 *
 * **Details**
 *
 * This function transforms an `Either` into an `Option` as follows:
 *
 * - If the `Either` is a `Left`, its value is wrapped in a `Some` and returned.
 * - If the `Either` is a `Right`, the value is discarded, and `None` is
 *   returned.
 *
 * This utility is useful when you only care about the error case (`Left`) of an
 * `Either` and want to handle it as an `Option`. By discarding the right value,
 * it simplifies error-focused workflows.
 *
 * @example
 * ```ts
 * import { Either, Option } from "effect"
 *
 * console.log(Option.getLeft(Either.right("ok")))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(Option.getLeft(Either.left("err")))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'err' }
 * ```
 *
 * @see {@link getRight} for the opposite operation.
 *
 * @category Conversions
 * @since 2.0.0
 */
export const getLeft: <R, L>(self: Either<R, L>) => Option<L> = either.getLeft

/**
 * Returns the value contained in the `Option` if it is `Some`, otherwise
 * evaluates and returns the result of `onNone`.
 *
 * **Details**
 *
 * This function allows you to provide a fallback value or computation for when
 * an `Option` is `None`. If the `Option` contains a value (`Some`), that value
 * is returned. If it is empty (`None`), the `onNone` function is executed, and
 * its result is returned instead.
 *
 * This utility is helpful for safely handling `Option` values by ensuring you
 * always receive a meaningful result, whether or not the `Option` contains a
 * value. It is particularly useful for providing default values or alternative
 * logic when working with optional values.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.some(1).pipe(Option.getOrElse(() => 0)))
 * // Output: 1
 *
 * console.log(Option.none().pipe(Option.getOrElse(() => 0)))
 * // Output: 0
 * ```
 *
 * @see {@link getOrNull} for a version that returns `null` instead of executing a function.
 * @see {@link getOrUndefined} for a version that returns `undefined` instead of executing a function.
 *
 * @category Getters
 * @since 2.0.0
 */
export const getOrElse: {
  /**
   * Returns the value contained in the `Option` if it is `Some`, otherwise
   * evaluates and returns the result of `onNone`.
   *
   * **Details**
   *
   * This function allows you to provide a fallback value or computation for when
   * an `Option` is `None`. If the `Option` contains a value (`Some`), that value
   * is returned. If it is empty (`None`), the `onNone` function is executed, and
   * its result is returned instead.
   *
   * This utility is helpful for safely handling `Option` values by ensuring you
   * always receive a meaningful result, whether or not the `Option` contains a
   * value. It is particularly useful for providing default values or alternative
   * logic when working with optional values.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.some(1).pipe(Option.getOrElse(() => 0)))
   * // Output: 1
   *
   * console.log(Option.none().pipe(Option.getOrElse(() => 0)))
   * // Output: 0
   * ```
   *
   * @see {@link getOrNull} for a version that returns `null` instead of executing a function.
   * @see {@link getOrUndefined} for a version that returns `undefined` instead of executing a function.
   *
   * @category Getters
   * @since 2.0.0
   */
  <B>(onNone: LazyArg<B>): <A>(self: Option<A>) => B | A
  /**
   * Returns the value contained in the `Option` if it is `Some`, otherwise
   * evaluates and returns the result of `onNone`.
   *
   * **Details**
   *
   * This function allows you to provide a fallback value or computation for when
   * an `Option` is `None`. If the `Option` contains a value (`Some`), that value
   * is returned. If it is empty (`None`), the `onNone` function is executed, and
   * its result is returned instead.
   *
   * This utility is helpful for safely handling `Option` values by ensuring you
   * always receive a meaningful result, whether or not the `Option` contains a
   * value. It is particularly useful for providing default values or alternative
   * logic when working with optional values.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.some(1).pipe(Option.getOrElse(() => 0)))
   * // Output: 1
   *
   * console.log(Option.none().pipe(Option.getOrElse(() => 0)))
   * // Output: 0
   * ```
   *
   * @see {@link getOrNull} for a version that returns `null` instead of executing a function.
   * @see {@link getOrUndefined} for a version that returns `undefined` instead of executing a function.
   *
   * @category Getters
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, onNone: LazyArg<B>): A | B
} = dual(
  2,
  <A, B>(self: Option<A>, onNone: LazyArg<B>): A | B => isNone(self) ? onNone() : self.value
)

/**
 * Returns the provided `Option` `that` if the current `Option` (`self`) is
 * `None`; otherwise, it returns `self`.
 *
 * **Details**
 *
 * This function provides a fallback mechanism for `Option` values. If the
 * current `Option` is `None` (i.e., it contains no value), the `that` function
 * is evaluated, and its resulting `Option` is returned. If the current `Option`
 * is `Some` (i.e., it contains a value), the original `Option` is returned
 * unchanged.
 *
 * This is particularly useful for chaining fallback values or computations,
 * allowing you to provide alternative `Option` values when the first one is
 * empty.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.none().pipe(Option.orElse(() => Option.none())))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(Option.some("a").pipe(Option.orElse(() => Option.none())))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
 *
 * console.log(Option.none().pipe(Option.orElse(() => Option.some("b"))))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
 *
 * console.log(Option.some("a").pipe(Option.orElse(() => Option.some("b"))))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
 * ```
 *
 * @category Error handling
 * @since 2.0.0
 */
export const orElse: {
  /**
   * Returns the provided `Option` `that` if the current `Option` (`self`) is
   * `None`; otherwise, it returns `self`.
   *
   * **Details**
   *
   * This function provides a fallback mechanism for `Option` values. If the
   * current `Option` is `None` (i.e., it contains no value), the `that` function
   * is evaluated, and its resulting `Option` is returned. If the current `Option`
   * is `Some` (i.e., it contains a value), the original `Option` is returned
   * unchanged.
   *
   * This is particularly useful for chaining fallback values or computations,
   * allowing you to provide alternative `Option` values when the first one is
   * empty.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.none().pipe(Option.orElse(() => Option.none())))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(Option.some("a").pipe(Option.orElse(() => Option.none())))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   *
   * console.log(Option.none().pipe(Option.orElse(() => Option.some("b"))))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
   *
   * console.log(Option.some("a").pipe(Option.orElse(() => Option.some("b"))))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Error handling
   * @since 2.0.0
   */
  <B>(that: LazyArg<Option<B>>): <A>(self: Option<A>) => Option<B | A>
  /**
   * Returns the provided `Option` `that` if the current `Option` (`self`) is
   * `None`; otherwise, it returns `self`.
   *
   * **Details**
   *
   * This function provides a fallback mechanism for `Option` values. If the
   * current `Option` is `None` (i.e., it contains no value), the `that` function
   * is evaluated, and its resulting `Option` is returned. If the current `Option`
   * is `Some` (i.e., it contains a value), the original `Option` is returned
   * unchanged.
   *
   * This is particularly useful for chaining fallback values or computations,
   * allowing you to provide alternative `Option` values when the first one is
   * empty.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.none().pipe(Option.orElse(() => Option.none())))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(Option.some("a").pipe(Option.orElse(() => Option.none())))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   *
   * console.log(Option.none().pipe(Option.orElse(() => Option.some("b"))))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
   *
   * console.log(Option.some("a").pipe(Option.orElse(() => Option.some("b"))))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Error handling
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<A | B>
} = dual(
  2,
  <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<A | B> => isNone(self) ? that() : self
)

/**
 * Returns the provided default value wrapped in `Some` if the current `Option`
 * (`self`) is `None`; otherwise, returns `self`.
 *
 * **Details**
 *
 * This function provides a way to supply a default value for cases where an
 * `Option` is `None`. If the current `Option` is empty (`None`), the `onNone`
 * function is executed to compute the default value, which is then wrapped in a
 * `Some`. If the current `Option` contains a value (`Some`), it is returned as
 * is.
 *
 * This is particularly useful for handling optional values where a fallback
 * default needs to be provided explicitly in case of absence.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.none().pipe(Option.orElseSome(() => "b")))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
 *
 * console.log(Option.some("a").pipe(Option.orElseSome(() => "b")))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
 * ```
 *
 * @category Error handling
 * @since 2.0.0
 */
export const orElseSome: {
  /**
   * Returns the provided default value wrapped in `Some` if the current `Option`
   * (`self`) is `None`; otherwise, returns `self`.
   *
   * **Details**
   *
   * This function provides a way to supply a default value for cases where an
   * `Option` is `None`. If the current `Option` is empty (`None`), the `onNone`
   * function is executed to compute the default value, which is then wrapped in a
   * `Some`. If the current `Option` contains a value (`Some`), it is returned as
   * is.
   *
   * This is particularly useful for handling optional values where a fallback
   * default needs to be provided explicitly in case of absence.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.none().pipe(Option.orElseSome(() => "b")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
   *
   * console.log(Option.some("a").pipe(Option.orElseSome(() => "b")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Error handling
   * @since 2.0.0
   */
  <B>(onNone: LazyArg<B>): <A>(self: Option<A>) => Option<B | A>
  /**
   * Returns the provided default value wrapped in `Some` if the current `Option`
   * (`self`) is `None`; otherwise, returns `self`.
   *
   * **Details**
   *
   * This function provides a way to supply a default value for cases where an
   * `Option` is `None`. If the current `Option` is empty (`None`), the `onNone`
   * function is executed to compute the default value, which is then wrapped in a
   * `Some`. If the current `Option` contains a value (`Some`), it is returned as
   * is.
   *
   * This is particularly useful for handling optional values where a fallback
   * default needs to be provided explicitly in case of absence.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.none().pipe(Option.orElseSome(() => "b")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'b' }
   *
   * console.log(Option.some("a").pipe(Option.orElseSome(() => "b")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Error handling
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, onNone: LazyArg<B>): Option<A | B>
} = dual(
  2,
  <A, B>(self: Option<A>, onNone: LazyArg<B>): Option<A | B> => isNone(self) ? some(onNone()) : self
)

/**
 * Similar to {@link orElse}, but returns an `Either` wrapped in an `Option` to
 * indicate the source of the value.
 *
 * **Details**
 *
 * This function allows you to provide a fallback `Option` in case the current
 * `Option` (`self`) is `None`. However, unlike `orElse`, it returns the value
 * wrapped in an `Either` object, providing additional information about where
 * the value came from:
 *
 * - If the value is from the fallback `Option` (`that`), it is wrapped in an
 *   `Either.right`.
 * - If the value is from the original `Option` (`self`), it is wrapped in an
 *   `Either.left`.
 *
 * This is especially useful when you need to differentiate between values
 * originating from the primary `Option` and those coming from the fallback,
 * while still maintaining the `Option`-style handling.
 *
 * @category Error handling
 * @since 2.0.0
 */
export const orElseEither: {
  /**
   * Similar to {@link orElse}, but returns an `Either` wrapped in an `Option` to
   * indicate the source of the value.
   *
   * **Details**
   *
   * This function allows you to provide a fallback `Option` in case the current
   * `Option` (`self`) is `None`. However, unlike `orElse`, it returns the value
   * wrapped in an `Either` object, providing additional information about where
   * the value came from:
   *
   * - If the value is from the fallback `Option` (`that`), it is wrapped in an
   *   `Either.right`.
   * - If the value is from the original `Option` (`self`), it is wrapped in an
   *   `Either.left`.
   *
   * This is especially useful when you need to differentiate between values
   * originating from the primary `Option` and those coming from the fallback,
   * while still maintaining the `Option`-style handling.
   *
   * @category Error handling
   * @since 2.0.0
   */
  <B>(that: LazyArg<Option<B>>): <A>(self: Option<A>) => Option<Either<B, A>>
  /**
   * Similar to {@link orElse}, but returns an `Either` wrapped in an `Option` to
   * indicate the source of the value.
   *
   * **Details**
   *
   * This function allows you to provide a fallback `Option` in case the current
   * `Option` (`self`) is `None`. However, unlike `orElse`, it returns the value
   * wrapped in an `Either` object, providing additional information about where
   * the value came from:
   *
   * - If the value is from the fallback `Option` (`that`), it is wrapped in an
   *   `Either.right`.
   * - If the value is from the original `Option` (`self`), it is wrapped in an
   *   `Either.left`.
   *
   * This is especially useful when you need to differentiate between values
   * originating from the primary `Option` and those coming from the fallback,
   * while still maintaining the `Option`-style handling.
   *
   * @category Error handling
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<Either<B, A>>
} = dual(
  2,
  <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<Either<B, A>> =>
    isNone(self) ? map(that(), either.right) : map(self, either.left)
)

/**
 * Returns the first `Some` value found in an `Iterable` collection of
 * `Option`s, or `None` if no `Some` is found.
 *
 * **Details**
 *
 * This function iterates over a collection of `Option` values and returns the
 * first `Some` it encounters. If the collection contains only `None` values,
 * the result will also be `None`. This utility is useful for efficiently
 * finding the first valid value in a sequence of potentially empty or invalid
 * options.
 *
 * The iteration stops as soon as a `Some` is found, making this function
 * efficient for large collections.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.firstSomeOf([
 *   Option.none(),
 *   Option.some(1),
 *   Option.some(2)
 * ]))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 * ```
 *
 * @category Error handling
 * @since 2.0.0
 */
export const firstSomeOf = <T, C extends Iterable<Option<T>> = Iterable<Option<T>>>(
  collection: C
): [C] extends [Iterable<Option<infer A>>] ? Option<A> : never => {
  let out: Option<unknown> = none()
  for (out of collection) {
    if (isSome(out)) {
      return out as any
    }
  }
  return out as any
}

/**
 * Converts a nullable value into an `Option`. Returns `None` if the value is
 * `null` or `undefined`, otherwise wraps the value in a `Some`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.fromNullable(undefined))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(Option.fromNullable(null))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(Option.fromNullable(1))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 * ```
 *
 * @category Conversions
 * @since 2.0.0
 */
export const fromNullable = <A>(
  nullableValue: A
): Option<NonNullable<A>> => (nullableValue == null ? none() : some(nullableValue as NonNullable<A>))

/**
 * Lifts a function that returns `null` or `undefined` into the `Option`
 * context.
 *
 * **Details**
 *
 * This function takes a function `f` that might return `null` or `undefined`
 * and transforms it into a function that returns an `Option`. The resulting
 * function will return:
 * - `Some` if the original function produces a non-null, non-undefined value.
 * - `None` if the original function produces `null` or `undefined`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const parse = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const parseOption = Option.liftNullable(parse)
 *
 * console.log(parseOption("1"))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 *
 * console.log(parseOption("not a number"))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Conversions
 * @since 2.0.0
 */
export const liftNullable = <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined
): (...a: A) => Option<NonNullable<B>> =>
(...a) => fromNullable(f(...a))

/**
 * Returns the value contained in the `Option` if it is `Some`; otherwise,
 * returns `null`.
 *
 * **Details**
 *
 * This function provides a way to extract the value of an `Option` while
 * falling back to `null` if the `Option` is `None`.
 *
 * It is particularly useful in scenarios where `null` is an acceptable
 * placeholder for the absence of a value, such as when interacting with APIs or
 * systems that use `null` as a default for missing values.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.getOrNull(Option.some(1)))
 * // Output: 1
 *
 * console.log(Option.getOrNull(Option.none()))
 * // Output: null
 * ```
 *
 * @category Getters
 * @since 2.0.0
 */
export const getOrNull: <A>(self: Option<A>) => A | null = getOrElse(constNull)

/**
 * Returns the value contained in the `Option` if it is `Some`; otherwise,
 * returns `undefined`.
 *
 * **Details**
 *
 * This function provides a way to extract the value of an `Option` while
 * falling back to `undefined` if the `Option` is `None`.
 *
 * It is particularly useful in scenarios where `undefined` is an acceptable
 * placeholder for the absence of a value, such as when interacting with APIs or
 * systems that use `undefined` as a default for missing values.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.getOrUndefined(Option.some(1)))
 * // Output: 1
 *
 * console.log(Option.getOrUndefined(Option.none()))
 * // Output: undefined
 * ```
 *
 * @category Getters
 * @since 2.0.0
 */
export const getOrUndefined: <A>(self: Option<A>) => A | undefined = getOrElse(constUndefined)

/**
 * Lifts a function that throws exceptions into a function that returns an
 * `Option`.
 *
 * **Details**
 *
 * This utility function takes a function `f` that might throw an exception and
 * transforms it into a safer function that returns an `Option`. If the original
 * function executes successfully, the result is wrapped in a `Some`. If an
 * exception is thrown, the result is `None`, allowing the developer to handle
 * errors in a functional, type-safe way.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const parse = Option.liftThrowable(JSON.parse)
 *
 * console.log(parse("1"))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 *
 * console.log(parse(""))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Conversions
 * @since 2.0.0
 */
export const liftThrowable = <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B
): (...a: A) => Option<B> =>
(...a) => {
  try {
    return some(f(...a))
  } catch {
    return none()
  }
}

/**
 * Extracts the value of an `Option` or throws an error if the `Option` is
 * `None`, using a custom error factory.
 *
 * **Details**
 *
 * This function allows you to extract the value of an `Option` when it is
 * `Some`. If the `Option` is `None`, it throws an error generated by the
 * provided `onNone` function. This utility is particularly useful when you need
 * a fail-fast behavior for empty `Option` values and want to provide a custom
 * error message or object.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Option } from "effect"
 *
 * assert.deepStrictEqual(
 *   Option.getOrThrowWith(Option.some(1), () => new Error('Unexpected None')),
 *   1
 * )
 * assert.throws(() => Option.getOrThrowWith(Option.none(), () => new Error('Unexpected None')))
 * ```
 *
 * @see {@link getOrThrow} for a version that throws a default error.
 *
 * @category Conversions
 * @since 2.0.0
 */
export const getOrThrowWith: {
  /**
   * Extracts the value of an `Option` or throws an error if the `Option` is
   * `None`, using a custom error factory.
   *
   * **Details**
   *
   * This function allows you to extract the value of an `Option` when it is
   * `Some`. If the `Option` is `None`, it throws an error generated by the
   * provided `onNone` function. This utility is particularly useful when you need
   * a fail-fast behavior for empty `Option` values and want to provide a custom
   * error message or object.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option } from "effect"
   *
   * assert.deepStrictEqual(
   *   Option.getOrThrowWith(Option.some(1), () => new Error('Unexpected None')),
   *   1
   * )
   * assert.throws(() => Option.getOrThrowWith(Option.none(), () => new Error('Unexpected None')))
   * ```
   *
   * @see {@link getOrThrow} for a version that throws a default error.
   *
   * @category Conversions
   * @since 2.0.0
   */
  (onNone: () => unknown): <A>(self: Option<A>) => A
  /**
   * Extracts the value of an `Option` or throws an error if the `Option` is
   * `None`, using a custom error factory.
   *
   * **Details**
   *
   * This function allows you to extract the value of an `Option` when it is
   * `Some`. If the `Option` is `None`, it throws an error generated by the
   * provided `onNone` function. This utility is particularly useful when you need
   * a fail-fast behavior for empty `Option` values and want to provide a custom
   * error message or object.
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option } from "effect"
   *
   * assert.deepStrictEqual(
   *   Option.getOrThrowWith(Option.some(1), () => new Error('Unexpected None')),
   *   1
   * )
   * assert.throws(() => Option.getOrThrowWith(Option.none(), () => new Error('Unexpected None')))
   * ```
   *
   * @see {@link getOrThrow} for a version that throws a default error.
   *
   * @category Conversions
   * @since 2.0.0
   */
  <A>(self: Option<A>, onNone: () => unknown): A
} = dual(2, <A>(self: Option<A>, onNone: () => unknown): A => {
  if (isSome(self)) {
    return self.value
  }
  throw onNone()
})

/**
 * Extracts the value of an `Option` or throws a default error if the `Option`
 * is `None`.
 *
 * **Details**
 *
 * This function extracts the value from an `Option` if it is `Some`. If the
 * `Option` is `None`, it throws a default error. It is useful for fail-fast
 * scenarios where the absence of a value is treated as an exceptional case and
 * a default error is sufficient.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Option } from "effect"
 *
 * assert.deepStrictEqual(Option.getOrThrow(Option.some(1)), 1)
 * assert.throws(() => Option.getOrThrow(Option.none()))
 * ```
 *
 * @see {@link getOrThrowWith} for a version that allows you to provide a custom error.
 *
 * @category Conversions
 * @since 2.0.0
 */
export const getOrThrow: <A>(self: Option<A>) => A = getOrThrowWith(() => new Error("getOrThrow called on a None"))

/**
 * Transforms the value inside a `Some` to a new value using the provided
 * function, while leaving `None` unchanged.
 *
 * **Details**
 *
 * This function applies a mapping function `f` to the value inside an `Option`
 * if it is a `Some`. If the `Option` is `None`, it remains unchanged. The
 * result is a new `Option` with the transformed value (if it was a `Some`) or
 * still `None`.
 *
 * This utility is particularly useful for chaining transformations in a
 * functional way without needing to manually handle `None` cases.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * // Mapping over a `Some`
 * const someValue = Option.some(2)
 *
 * console.log(Option.map(someValue, (n) => n * 2))
 * // Output: { _id: 'Option', _tag: 'Some', value: 4 }
 *
 * // Mapping over a `None`
 * const noneValue = Option.none<number>()
 *
 * console.log(Option.map(noneValue, (n) => n * 2))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Mapping
 * @since 2.0.0
 */
export const map: {
  /**
   * Transforms the value inside a `Some` to a new value using the provided
   * function, while leaving `None` unchanged.
   *
   * **Details**
   *
   * This function applies a mapping function `f` to the value inside an `Option`
   * if it is a `Some`. If the `Option` is `None`, it remains unchanged. The
   * result is a new `Option` with the transformed value (if it was a `Some`) or
   * still `None`.
   *
   * This utility is particularly useful for chaining transformations in a
   * functional way without needing to manually handle `None` cases.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Mapping over a `Some`
   * const someValue = Option.some(2)
   *
   * console.log(Option.map(someValue, (n) => n * 2))
   * // Output: { _id: 'Option', _tag: 'Some', value: 4 }
   *
   * // Mapping over a `None`
   * const noneValue = Option.none<number>()
   *
   * console.log(Option.map(noneValue, (n) => n * 2))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Mapping
   * @since 2.0.0
   */
  <A, B>(f: (a: A) => B): (self: Option<A>) => Option<B>
  /**
   * Transforms the value inside a `Some` to a new value using the provided
   * function, while leaving `None` unchanged.
   *
   * **Details**
   *
   * This function applies a mapping function `f` to the value inside an `Option`
   * if it is a `Some`. If the `Option` is `None`, it remains unchanged. The
   * result is a new `Option` with the transformed value (if it was a `Some`) or
   * still `None`.
   *
   * This utility is particularly useful for chaining transformations in a
   * functional way without needing to manually handle `None` cases.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Mapping over a `Some`
   * const someValue = Option.some(2)
   *
   * console.log(Option.map(someValue, (n) => n * 2))
   * // Output: { _id: 'Option', _tag: 'Some', value: 4 }
   *
   * // Mapping over a `None`
   * const noneValue = Option.none<number>()
   *
   * console.log(Option.map(noneValue, (n) => n * 2))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Mapping
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: (a: A) => B): Option<B>
} = dual(
  2,
  <A, B>(self: Option<A>, f: (a: A) => B): Option<B> => isNone(self) ? none() : some(f(self.value))
)

/**
 * Replaces the value inside a `Some` with the specified constant value, leaving
 * `None` unchanged.
 *
 * **Details**
 *
 * This function transforms an `Option` by replacing the value inside a `Some`
 * with the given constant value `b`. If the `Option` is `None`, it remains
 * unchanged.
 *
 * This is useful when you want to preserve the presence of a value (`Some`) but
 * replace its content with a fixed value.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * // Replacing the value of a `Some`
 * const someValue = Option.some(42)
 *
 * console.log(Option.as(someValue, "new value"))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'new value' }
 *
 * // Replacing a `None` (no effect)
 * const noneValue = Option.none<number>()
 *
 * console.log(Option.as(noneValue, "new value"))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Mapping
 * @since 2.0.0
 */
export const as: {
  /**
   * Replaces the value inside a `Some` with the specified constant value, leaving
   * `None` unchanged.
   *
   * **Details**
   *
   * This function transforms an `Option` by replacing the value inside a `Some`
   * with the given constant value `b`. If the `Option` is `None`, it remains
   * unchanged.
   *
   * This is useful when you want to preserve the presence of a value (`Some`) but
   * replace its content with a fixed value.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Replacing the value of a `Some`
   * const someValue = Option.some(42)
   *
   * console.log(Option.as(someValue, "new value"))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'new value' }
   *
   * // Replacing a `None` (no effect)
   * const noneValue = Option.none<number>()
   *
   * console.log(Option.as(noneValue, "new value"))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Mapping
   * @since 2.0.0
   */
  <B>(b: B): <X>(self: Option<X>) => Option<B>
  /**
   * Replaces the value inside a `Some` with the specified constant value, leaving
   * `None` unchanged.
   *
   * **Details**
   *
   * This function transforms an `Option` by replacing the value inside a `Some`
   * with the given constant value `b`. If the `Option` is `None`, it remains
   * unchanged.
   *
   * This is useful when you want to preserve the presence of a value (`Some`) but
   * replace its content with a fixed value.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Replacing the value of a `Some`
   * const someValue = Option.some(42)
   *
   * console.log(Option.as(someValue, "new value"))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'new value' }
   *
   * // Replacing a `None` (no effect)
   * const noneValue = Option.none<number>()
   *
   * console.log(Option.as(noneValue, "new value"))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Mapping
   * @since 2.0.0
   */
  <X, B>(self: Option<X>, b: B): Option<B>
} = dual(2, <X, B>(self: Option<X>, b: B): Option<B> => map(self, () => b))

/**
 * Replaces the value inside a `Some` with the constant value `void`, leaving
 * `None` unchanged.
 *
 * **Details**
 *
 * This function transforms an `Option` by replacing the value inside a `Some`
 * with `void`. If the `Option` is `None`, it remains unchanged.
 *
 * This is particularly useful in scenarios where the presence or absence of a
 * value is significant, but the actual content of the value is irrelevant.
 *
 * @category Mapping
 * @since 2.0.0
 */
export const asVoid: <_>(self: Option<_>) => Option<void> = as(undefined)

const void_: Option<void> = some(undefined)
export {
  /**
   * @since 2.0.0
   */
  void_ as void
}

/**
 * Applies a function to the value of a `Some` and flattens the resulting
 * `Option`. If the input is `None`, it remains `None`.
 *
 * **Details**
 *
 * This function allows you to chain computations that return `Option` values.
 * If the input `Option` is `Some`, the provided function `f` is applied to the
 * contained value, and the resulting `Option` is returned. If the input is
 * `None`, the function is not applied, and the result remains `None`.
 *
 * This utility is particularly useful for sequencing operations that may fail
 * or produce optional results, enabling clean and concise workflows for
 * handling such cases.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * interface Address {
 *   readonly city: string
 *   readonly street: Option.Option<string>
 * }
 *
 * interface User {
 *   readonly id: number
 *   readonly username: string
 *   readonly email: Option.Option<string>
 *   readonly address: Option.Option<Address>
 * }
 *
 * const user: User = {
 *   id: 1,
 *   username: "john_doe",
 *   email: Option.some("john.doe@example.com"),
 *   address: Option.some({
 *     city: "New York",
 *     street: Option.some("123 Main St")
 *   })
 * }
 *
 * // Use flatMap to extract the street value
 * const street = user.address.pipe(
 *   Option.flatMap((address) => address.street)
 * )
 *
 * console.log(street)
 * // Output: { _id: 'Option', _tag: 'Some', value: '123 Main St' }
 * ```
 *
 * @category Sequencing
 * @since 2.0.0
 */
export const flatMap: {
  /**
   * Applies a function to the value of a `Some` and flattens the resulting
   * `Option`. If the input is `None`, it remains `None`.
   *
   * **Details**
   *
   * This function allows you to chain computations that return `Option` values.
   * If the input `Option` is `Some`, the provided function `f` is applied to the
   * contained value, and the resulting `Option` is returned. If the input is
   * `None`, the function is not applied, and the result remains `None`.
   *
   * This utility is particularly useful for sequencing operations that may fail
   * or produce optional results, enabling clean and concise workflows for
   * handling such cases.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * interface Address {
   *   readonly city: string
   *   readonly street: Option.Option<string>
   * }
   *
   * interface User {
   *   readonly id: number
   *   readonly username: string
   *   readonly email: Option.Option<string>
   *   readonly address: Option.Option<Address>
   * }
   *
   * const user: User = {
   *   id: 1,
   *   username: "john_doe",
   *   email: Option.some("john.doe@example.com"),
   *   address: Option.some({
   *     city: "New York",
   *     street: Option.some("123 Main St")
   *   })
   * }
   *
   * // Use flatMap to extract the street value
   * const street = user.address.pipe(
   *   Option.flatMap((address) => address.street)
   * )
   *
   * console.log(street)
   * // Output: { _id: 'Option', _tag: 'Some', value: '123 Main St' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(f: (a: A) => Option<B>): (self: Option<A>) => Option<B>
  /**
   * Applies a function to the value of a `Some` and flattens the resulting
   * `Option`. If the input is `None`, it remains `None`.
   *
   * **Details**
   *
   * This function allows you to chain computations that return `Option` values.
   * If the input `Option` is `Some`, the provided function `f` is applied to the
   * contained value, and the resulting `Option` is returned. If the input is
   * `None`, the function is not applied, and the result remains `None`.
   *
   * This utility is particularly useful for sequencing operations that may fail
   * or produce optional results, enabling clean and concise workflows for
   * handling such cases.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * interface Address {
   *   readonly city: string
   *   readonly street: Option.Option<string>
   * }
   *
   * interface User {
   *   readonly id: number
   *   readonly username: string
   *   readonly email: Option.Option<string>
   *   readonly address: Option.Option<Address>
   * }
   *
   * const user: User = {
   *   id: 1,
   *   username: "john_doe",
   *   email: Option.some("john.doe@example.com"),
   *   address: Option.some({
   *     city: "New York",
   *     street: Option.some("123 Main St")
   *   })
   * }
   *
   * // Use flatMap to extract the street value
   * const street = user.address.pipe(
   *   Option.flatMap((address) => address.street)
   * )
   *
   * console.log(street)
   * // Output: { _id: 'Option', _tag: 'Some', value: '123 Main St' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: (a: A) => Option<B>): Option<B>
} = dual(
  2,
  <A, B>(self: Option<A>, f: (a: A) => Option<B>): Option<B> => isNone(self) ? none() : f(self.value)
)

/**
 * Chains two `Option`s together. The second `Option` can either be a static
 * value or depend on the result of the first `Option`.
 *
 * **Details**
 *
 * This function enables sequencing of two `Option` computations. If the first
 * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
 * either:
 *
 * - Be a static `Option` value.
 * - Be a function that produces an `Option`, optionally based on the value of
 *   the first `Option`.
 *
 * If the first `Option` is `None`, the function skips the evaluation of the
 * second `Option` and directly returns `None`.
 *
 * @category Sequencing
 * @since 2.0.0
 */
export const andThen: {
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(f: (a: A) => Option<B>): (self: Option<A>) => Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <B>(f: Option<B>): <A>(self: Option<A>) => Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(f: (a: A) => B): (self: Option<A>) => Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <B>(f: NotFunction<B>): <A>(self: Option<A>) => Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: (a: A) => Option<B>): Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: Option<B>): Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: (a: A) => B): Option<B>
  /**
   * Chains two `Option`s together. The second `Option` can either be a static
   * value or depend on the result of the first `Option`.
   *
   * **Details**
   *
   * This function enables sequencing of two `Option` computations. If the first
   * `Option` is `Some`, the second `Option` is evaluated. The second `Option` can
   * either:
   *
   * - Be a static `Option` value.
   * - Be a function that produces an `Option`, optionally based on the value of
   *   the first `Option`.
   *
   * If the first `Option` is `None`, the function skips the evaluation of the
   * second `Option` and directly returns `None`.
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: NotFunction<B>): Option<B>
} = dual(
  2,
  <A, B>(self: Option<A>, f: (a: A) => Option<B> | Option<B>): Option<B> =>
    flatMap(self, (a) => {
      const b = isFunction(f) ? f(a) : f
      return isOption(b) ? b : some(b)
    })
)

/**
 * Combines `flatMap` and `fromNullable`, transforming the value inside a `Some`
 * using a function that may return `null` or `undefined`.
 *
 * **Details**
 *
 * This function applies a transformation function `f` to the value inside a
 * `Some`. The function `f` may return a value, `null`, or `undefined`. If `f`
 * returns a value, it is wrapped in a `Some`. If `f` returns `null` or
 * `undefined`, the result is `None`. If the input `Option` is `None`, the
 * function is not applied, and `None` is returned.
 *
 * This utility is particularly useful when working with deeply nested optional
 * values or chaining computations that may result in `null` or `undefined` at
 * some point.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * interface Employee {
 *   company?: {
 *     address?: {
 *       street?: {
 *         name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: "high street" } } } }
 *
 * // Extracting a deeply nested property
 * console.log(
 *   Option.some(employee1)
 *     .pipe(Option.flatMapNullable((employee) => employee.company?.address?.street?.name))
 * )
 * // Output: { _id: 'Option', _tag: 'Some', value: 'high street' }
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * // Property does not exist
 * console.log(
 *   Option.some(employee2)
 *     .pipe(Option.flatMapNullable((employee) => employee.company?.address?.street?.name))
 * )
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Sequencing
 * @since 2.0.0
 */
export const flatMapNullable: {
  /**
   * Combines `flatMap` and `fromNullable`, transforming the value inside a `Some`
   * using a function that may return `null` or `undefined`.
   *
   * **Details**
   *
   * This function applies a transformation function `f` to the value inside a
   * `Some`. The function `f` may return a value, `null`, or `undefined`. If `f`
   * returns a value, it is wrapped in a `Some`. If `f` returns `null` or
   * `undefined`, the result is `None`. If the input `Option` is `None`, the
   * function is not applied, and `None` is returned.
   *
   * This utility is particularly useful when working with deeply nested optional
   * values or chaining computations that may result in `null` or `undefined` at
   * some point.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * interface Employee {
   *   company?: {
   *     address?: {
   *       street?: {
   *         name?: string
   *       }
   *     }
   *   }
   * }
   *
   * const employee1: Employee = { company: { address: { street: { name: "high street" } } } }
   *
   * // Extracting a deeply nested property
   * console.log(
   *   Option.some(employee1)
   *     .pipe(Option.flatMapNullable((employee) => employee.company?.address?.street?.name))
   * )
   * // Output: { _id: 'Option', _tag: 'Some', value: 'high street' }
   *
   * const employee2: Employee = { company: { address: { street: {} } } }
   *
   * // Property does not exist
   * console.log(
   *   Option.some(employee2)
   *     .pipe(Option.flatMapNullable((employee) => employee.company?.address?.street?.name))
   * )
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(f: (a: A) => B | null | undefined): (self: Option<A>) => Option<NonNullable<B>>
  /**
   * Combines `flatMap` and `fromNullable`, transforming the value inside a `Some`
   * using a function that may return `null` or `undefined`.
   *
   * **Details**
   *
   * This function applies a transformation function `f` to the value inside a
   * `Some`. The function `f` may return a value, `null`, or `undefined`. If `f`
   * returns a value, it is wrapped in a `Some`. If `f` returns `null` or
   * `undefined`, the result is `None`. If the input `Option` is `None`, the
   * function is not applied, and `None` is returned.
   *
   * This utility is particularly useful when working with deeply nested optional
   * values or chaining computations that may result in `null` or `undefined` at
   * some point.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * interface Employee {
   *   company?: {
   *     address?: {
   *       street?: {
   *         name?: string
   *       }
   *     }
   *   }
   * }
   *
   * const employee1: Employee = { company: { address: { street: { name: "high street" } } } }
   *
   * // Extracting a deeply nested property
   * console.log(
   *   Option.some(employee1)
   *     .pipe(Option.flatMapNullable((employee) => employee.company?.address?.street?.name))
   * )
   * // Output: { _id: 'Option', _tag: 'Some', value: 'high street' }
   *
   * const employee2: Employee = { company: { address: { street: {} } } }
   *
   * // Property does not exist
   * console.log(
   *   Option.some(employee2)
   *     .pipe(Option.flatMapNullable((employee) => employee.company?.address?.street?.name))
   * )
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: (a: A) => B | null | undefined): Option<NonNullable<B>>
} = dual(
  2,
  <A, B>(self: Option<A>, f: (a: A) => B | null | undefined): Option<NonNullable<B>> =>
    isNone(self) ? none() : fromNullable(f(self.value))
)

/**
 * Flattens an `Option` of `Option` into a single `Option`.
 *
 * **Details**
 *
 * This function takes an `Option` that wraps another `Option` and flattens it
 * into a single `Option`. If the outer `Option` is `Some`, the function
 * extracts the inner `Option`. If the outer `Option` is `None`, the result
 * remains `None`.
 *
 * This is useful for simplifying nested `Option` structures that may arise
 * during functional operations.
 *
 * @category Sequencing
 * @since 2.0.0
 */
export const flatten: <A>(self: Option<Option<A>>) => Option<A> = flatMap(identity)

/**
 * Combines two `Option`s, keeping the value from the second `Option` if both
 * are `Some`.
 *
 * **Details**
 *
 * This function takes two `Option`s and returns the second one if the first is
 * `Some`. If the first `Option` is `None`, the result will also be `None`,
 * regardless of the second `Option`. It effectively "zips" the two `Option`s
 * while discarding the value from the first `Option`.
 *
 * This is particularly useful when sequencing computations where the result of
 * the first computation is not needed, and you only care about the result of
 * the second computation.
 *
 * @category Zipping
 * @since 2.0.0
 */
export const zipRight: {
  /**
   * Combines two `Option`s, keeping the value from the second `Option` if both
   * are `Some`.
   *
   * **Details**
   *
   * This function takes two `Option`s and returns the second one if the first is
   * `Some`. If the first `Option` is `None`, the result will also be `None`,
   * regardless of the second `Option`. It effectively "zips" the two `Option`s
   * while discarding the value from the first `Option`.
   *
   * This is particularly useful when sequencing computations where the result of
   * the first computation is not needed, and you only care about the result of
   * the second computation.
   *
   * @category Zipping
   * @since 2.0.0
   */
  <B>(that: Option<B>): <_>(self: Option<_>) => Option<B>
  /**
   * Combines two `Option`s, keeping the value from the second `Option` if both
   * are `Some`.
   *
   * **Details**
   *
   * This function takes two `Option`s and returns the second one if the first is
   * `Some`. If the first `Option` is `None`, the result will also be `None`,
   * regardless of the second `Option`. It effectively "zips" the two `Option`s
   * while discarding the value from the first `Option`.
   *
   * This is particularly useful when sequencing computations where the result of
   * the first computation is not needed, and you only care about the result of
   * the second computation.
   *
   * @category Zipping
   * @since 2.0.0
   */
  <X, B>(self: Option<X>, that: Option<B>): Option<B>
} = dual(2, <X, B>(self: Option<X>, that: Option<B>): Option<B> => flatMap(self, () => that))

/**
 * Combines two `Option`s, keeping the value from the first `Option` if both are
 * `Some`.
 *
 * **Details**
 *
 * This function takes two `Option`s and returns the first one if it is `Some`.
 * If either the first `Option` or the second `Option` is `None`, the result
 * will be `None`. This operation "zips" the two `Option`s while discarding the
 * value from the second `Option`.
 *
 * This is useful when sequencing computations where the second `Option`
 * represents a dependency or condition that must hold, but its value is
 * irrelevant.
 *
 * @category Zipping
 * @since 2.0.0
 */
export const zipLeft: {
  /**
   * Combines two `Option`s, keeping the value from the first `Option` if both are
   * `Some`.
   *
   * **Details**
   *
   * This function takes two `Option`s and returns the first one if it is `Some`.
   * If either the first `Option` or the second `Option` is `None`, the result
   * will be `None`. This operation "zips" the two `Option`s while discarding the
   * value from the second `Option`.
   *
   * This is useful when sequencing computations where the second `Option`
   * represents a dependency or condition that must hold, but its value is
   * irrelevant.
   *
   * @category Zipping
   * @since 2.0.0
   */
  <_>(that: Option<_>): <A>(self: Option<A>) => Option<A>
  /**
   * Combines two `Option`s, keeping the value from the first `Option` if both are
   * `Some`.
   *
   * **Details**
   *
   * This function takes two `Option`s and returns the first one if it is `Some`.
   * If either the first `Option` or the second `Option` is `None`, the result
   * will be `None`. This operation "zips" the two `Option`s while discarding the
   * value from the second `Option`.
   *
   * This is useful when sequencing computations where the second `Option`
   * represents a dependency or condition that must hold, but its value is
   * irrelevant.
   *
   * @category Zipping
   * @since 2.0.0
   */
  <A, X>(self: Option<A>, that: Option<X>): Option<A>
} = dual(2, <A, X>(self: Option<A>, that: Option<X>): Option<A> => tap(self, () => that))

/**
 * Composes two functions that return `Option` values, creating a new function
 * that chains them together.
 *
 * **Details**
 *
 * This function allows you to compose two computations, each represented by a
 * function that returns an `Option`. The result of the first function is passed
 * to the second function if it is `Some`. If the first function returns `None`,
 * the composed function short-circuits and returns `None` without invoking the
 * second function.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const parse = (s: string): Option.Option<number> => isNaN(Number(s)) ? Option.none() : Option.some(Number(s))
 *
 * const double = (n: number): Option.Option<number> => n > 0 ? Option.some(n * 2) : Option.none()
 *
 * const parseAndDouble = Option.composeK(parse, double)
 *
 * console.log(parseAndDouble("42"))
 * // Output: { _id: 'Option', _tag: 'Some', value: 84 }
 *
 * console.log(parseAndDouble("not a number"))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Sequencing
 * @since 2.0.0
 */
export const composeK: {
  /**
   * Composes two functions that return `Option` values, creating a new function
   * that chains them together.
   *
   * **Details**
   *
   * This function allows you to compose two computations, each represented by a
   * function that returns an `Option`. The result of the first function is passed
   * to the second function if it is `Some`. If the first function returns `None`,
   * the composed function short-circuits and returns `None` without invoking the
   * second function.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const parse = (s: string): Option.Option<number> => isNaN(Number(s)) ? Option.none() : Option.some(Number(s))
   *
   * const double = (n: number): Option.Option<number> => n > 0 ? Option.some(n * 2) : Option.none()
   *
   * const parseAndDouble = Option.composeK(parse, double)
   *
   * console.log(parseAndDouble("42"))
   * // Output: { _id: 'Option', _tag: 'Some', value: 84 }
   *
   * console.log(parseAndDouble("not a number"))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <B, C>(bfc: (b: B) => Option<C>): <A>(afb: (a: A) => Option<B>) => (a: A) => Option<C>
  /**
   * Composes two functions that return `Option` values, creating a new function
   * that chains them together.
   *
   * **Details**
   *
   * This function allows you to compose two computations, each represented by a
   * function that returns an `Option`. The result of the first function is passed
   * to the second function if it is `Some`. If the first function returns `None`,
   * the composed function short-circuits and returns `None` without invoking the
   * second function.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const parse = (s: string): Option.Option<number> => isNaN(Number(s)) ? Option.none() : Option.some(Number(s))
   *
   * const double = (n: number): Option.Option<number> => n > 0 ? Option.some(n * 2) : Option.none()
   *
   * const parseAndDouble = Option.composeK(parse, double)
   *
   * console.log(parseAndDouble("42"))
   * // Output: { _id: 'Option', _tag: 'Some', value: 84 }
   *
   * console.log(parseAndDouble("not a number"))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, B, C>(afb: (a: A) => Option<B>, bfc: (b: B) => Option<C>): (a: A) => Option<C>
} = dual(2, <A, B, C>(afb: (a: A) => Option<B>, bfc: (b: B) => Option<C>) => (a: A): Option<C> => flatMap(afb(a), bfc))

/**
 * Applies the provided function `f` to the value of the `Option` if it is
 * `Some` and returns the original `Option`, unless `f` returns `None`, in which
 * case it returns `None`.
 *
 * **Details**
 *
 * This function allows you to perform additional computations on the value of
 * an `Option` without modifying its original value. If the `Option` is `Some`,
 * the provided function `f` is executed with the value, and its result
 * determines whether the original `Option` is returned (`Some`) or the result
 * is `None` if `f` returns `None`. If the input `Option` is `None`, the
 * function is not executed, and `None` is returned.
 *
 * This is particularly useful for applying side conditions or performing
 * validation checks while retaining the original `Option`'s value.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const getInteger = (n: number) => Number.isInteger(n) ? Option.some(n) : Option.none()
 *
 * console.log(Option.tap(Option.none(), getInteger))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(Option.tap(Option.some(1), getInteger))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 *
 * console.log(Option.tap(Option.some(1.14), getInteger))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Sequencing
 * @since 2.0.0
 */
export const tap: {
  /**
   * Applies the provided function `f` to the value of the `Option` if it is
   * `Some` and returns the original `Option`, unless `f` returns `None`, in which
   * case it returns `None`.
   *
   * **Details**
   *
   * This function allows you to perform additional computations on the value of
   * an `Option` without modifying its original value. If the `Option` is `Some`,
   * the provided function `f` is executed with the value, and its result
   * determines whether the original `Option` is returned (`Some`) or the result
   * is `None` if `f` returns `None`. If the input `Option` is `None`, the
   * function is not executed, and `None` is returned.
   *
   * This is particularly useful for applying side conditions or performing
   * validation checks while retaining the original `Option`'s value.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const getInteger = (n: number) => Number.isInteger(n) ? Option.some(n) : Option.none()
   *
   * console.log(Option.tap(Option.none(), getInteger))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(Option.tap(Option.some(1), getInteger))
   * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
   *
   * console.log(Option.tap(Option.some(1.14), getInteger))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, X>(f: (a: A) => Option<X>): (self: Option<A>) => Option<A>
  /**
   * Applies the provided function `f` to the value of the `Option` if it is
   * `Some` and returns the original `Option`, unless `f` returns `None`, in which
   * case it returns `None`.
   *
   * **Details**
   *
   * This function allows you to perform additional computations on the value of
   * an `Option` without modifying its original value. If the `Option` is `Some`,
   * the provided function `f` is executed with the value, and its result
   * determines whether the original `Option` is returned (`Some`) or the result
   * is `None` if `f` returns `None`. If the input `Option` is `None`, the
   * function is not executed, and `None` is returned.
   *
   * This is particularly useful for applying side conditions or performing
   * validation checks while retaining the original `Option`'s value.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const getInteger = (n: number) => Number.isInteger(n) ? Option.some(n) : Option.none()
   *
   * console.log(Option.tap(Option.none(), getInteger))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(Option.tap(Option.some(1), getInteger))
   * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
   *
   * console.log(Option.tap(Option.some(1.14), getInteger))
   * // Output: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Sequencing
   * @since 2.0.0
   */
  <A, X>(self: Option<A>, f: (a: A) => Option<X>): Option<A>
} = dual(2, <A, X>(self: Option<A>, f: (a: A) => Option<X>): Option<A> => flatMap(self, (a) => map(f(a), () => a)))

/**
 * Combines two `Option` values into a single `Option` containing a tuple of
 * their values if both are `Some`.
 *
 * **Details**
 *
 * This function takes two `Option`s and combines their values into a tuple `[A,
 * B]` if both are `Some`. If either of the `Option`s is `None`, the result is
 * `None`. This is particularly useful for combining multiple `Option` values
 * into a single one, ensuring both contain valid values.
 *
 * @category Combining
 * @since 2.0.0
 */
export const product = <A, B>(self: Option<A>, that: Option<B>): Option<[A, B]> =>
  isSome(self) && isSome(that) ? some([self.value, that.value]) : none()

/**
 * Combines an `Option` with a collection of `Option`s into a single `Option`
 * containing a tuple of their values if all are `Some`.
 *
 * **Details**
 *
 * This function takes a primary `Option` and a collection of `Option`s and
 * combines their values into a tuple `[A, ...Array<A>]` if all are `Some`. If
 * the primary `Option` or any `Option` in the collection is `None`, the result
 * is `None`.
 *
 * @category Combining
 * @since 2.0.0
 */
export const productMany = <A>(
  self: Option<A>,
  collection: Iterable<Option<A>>
): Option<[A, ...Array<A>]> => {
  if (isNone(self)) {
    return none()
  }
  const out: [A, ...Array<A>] = [self.value]
  for (const o of collection) {
    if (isNone(o)) {
      return none()
    }
    out.push(o.value)
  }
  return some(out)
}

/**
 * Combines a structure of `Option`s into a single `Option` containing the
 * values with the same structure.
 *
 * **Details**
 *
 * This function takes a structure of `Option`s (a tuple, struct, or iterable)
 * and produces a single `Option` that contains the values from the input
 * structure if all `Option`s are `Some`. If any `Option` in the input is
 * `None`, the result is `None`. The structure of the input is preserved in the
 * output.
 *
 * - If the input is a tuple (e.g., an array), the result will be an `Option`
 *   containing a tuple with the same length.
 * - If the input is a struct (e.g., an object), the result will be an `Option`
 *   containing a struct with the same keys.
 * - If the input is an iterable, the result will be an `Option` containing an
 *   array.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const maybeName: Option.Option<string> = Option.some("John")
 * const maybeAge: Option.Option<number> = Option.some(25)
 *
 * //      ┌─── Option<[string, number]>
 * //      ▼
 * const tuple = Option.all([maybeName, maybeAge])
 * console.log(tuple)
 * // Output:
 * // { _id: 'Option', _tag: 'Some', value: [ 'John', 25 ] }
 *
 * //      ┌─── Option<{ name: string; age: number; }>
 * //      ▼
 * const struct = Option.all({ name: maybeName, age: maybeAge })
 * console.log(struct)
 * // Output:
 * // { _id: 'Option', _tag: 'Some', value: { name: 'John', age: 25 } }
 * ```
 *
 * @category Combining
 * @since 2.0.0
 */
// @ts-expect-error
export const all: <const I extends Iterable<Option<any>> | Record<string, Option<any>>>(
  input: I
) => [I] extends [ReadonlyArray<Option<any>>] ? Option<
    { -readonly [K in keyof I]: [I[K]] extends [Option<infer A>] ? A : never }
  >
  : [I] extends [Iterable<Option<infer A>>] ? Option<Array<A>>
  : Option<{ -readonly [K in keyof I]: [I[K]] extends [Option<infer A>] ? A : never }> = (
    input: Iterable<Option<any>> | Record<string, Option<any>>
  ): Option<any> => {
    if (Symbol.iterator in input) {
      const out: Array<Option<any>> = []
      for (const o of (input as Iterable<Option<any>>)) {
        if (isNone(o)) {
          return none()
        }
        out.push(o.value)
      }
      return some(out)
    }

    const out: Record<string, any> = {}
    for (const key of Object.keys(input)) {
      const o = input[key]
      if (isNone(o)) {
        return none()
      }
      out[key] = o.value
    }
    return some(out)
  }

/**
 * Combines two `Option` values into a new `Option` by applying a provided
 * function to their values.
 *
 * **Details**
 *
 * This function takes two `Option` values (`self` and `that`) and a combining
 * function `f`. If both `Option` values are `Some`, the function `f` is applied
 * to their values, and the result is wrapped in a new `Some`. If either
 * `Option` is `None`, the result is `None`.
 *
 * This utility is useful for combining two optional computations into a single
 * result while maintaining type safety and avoiding explicit checks for `None`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const maybeName: Option.Option<string> = Option.some("John")
 * const maybeAge: Option.Option<number> = Option.some(25)
 *
 * // Combine the name and age into a person object
 * const person = Option.zipWith(maybeName, maybeAge, (name, age) => ({
 *   name: name.toUpperCase(),
 *   age
 * }))
 *
 * console.log(person)
 * // Output:
 * // { _id: 'Option', _tag: 'Some', value: { name: 'JOHN', age: 25 } }
 * ```
 *
 * @category Zipping
 * @since 2.0.0
 */
export const zipWith: {
  /**
   * Combines two `Option` values into a new `Option` by applying a provided
   * function to their values.
   *
   * **Details**
   *
   * This function takes two `Option` values (`self` and `that`) and a combining
   * function `f`. If both `Option` values are `Some`, the function `f` is applied
   * to their values, and the result is wrapped in a new `Some`. If either
   * `Option` is `None`, the result is `None`.
   *
   * This utility is useful for combining two optional computations into a single
   * result while maintaining type safety and avoiding explicit checks for `None`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const maybeName: Option.Option<string> = Option.some("John")
   * const maybeAge: Option.Option<number> = Option.some(25)
   *
   * // Combine the name and age into a person object
   * const person = Option.zipWith(maybeName, maybeAge, (name, age) => ({
   *   name: name.toUpperCase(),
   *   age
   * }))
   *
   * console.log(person)
   * // Output:
   * // { _id: 'Option', _tag: 'Some', value: { name: 'JOHN', age: 25 } }
   * ```
   *
   * @category Zipping
   * @since 2.0.0
   */
  <B, A, C>(that: Option<B>, f: (a: A, b: B) => C): (self: Option<A>) => Option<C>
  /**
   * Combines two `Option` values into a new `Option` by applying a provided
   * function to their values.
   *
   * **Details**
   *
   * This function takes two `Option` values (`self` and `that`) and a combining
   * function `f`. If both `Option` values are `Some`, the function `f` is applied
   * to their values, and the result is wrapped in a new `Some`. If either
   * `Option` is `None`, the result is `None`.
   *
   * This utility is useful for combining two optional computations into a single
   * result while maintaining type safety and avoiding explicit checks for `None`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const maybeName: Option.Option<string> = Option.some("John")
   * const maybeAge: Option.Option<number> = Option.some(25)
   *
   * // Combine the name and age into a person object
   * const person = Option.zipWith(maybeName, maybeAge, (name, age) => ({
   *   name: name.toUpperCase(),
   *   age
   * }))
   *
   * console.log(person)
   * // Output:
   * // { _id: 'Option', _tag: 'Some', value: { name: 'JOHN', age: 25 } }
   * ```
   *
   * @category Zipping
   * @since 2.0.0
   */
  <A, B, C>(self: Option<A>, that: Option<B>, f: (a: A, b: B) => C): Option<C>
} = dual(
  3,
  <A, B, C>(self: Option<A>, that: Option<B>, f: (a: A, b: B) => C): Option<C> =>
    map(product(self, that), ([a, b]) => f(a, b))
)

/**
 * Applies a function inside a `Some` to a value inside another `Some`,
 * combining them into a new `Option`.
 *
 * **Details**
 *
 * This function allows you to apply a function wrapped in an `Option` (`self`)
 * to a value wrapped in another `Option` (`that`). If both `Option`s are
 * `Some`, the function is applied to the value, and the result is wrapped in a
 * new `Some`. If either `Option` is `None`, the result is `None`.
 *
 * @category Combining
 * @since 2.0.0
 */
export const ap: {
  /**
   * Applies a function inside a `Some` to a value inside another `Some`,
   * combining them into a new `Option`.
   *
   * **Details**
   *
   * This function allows you to apply a function wrapped in an `Option` (`self`)
   * to a value wrapped in another `Option` (`that`). If both `Option`s are
   * `Some`, the function is applied to the value, and the result is wrapped in a
   * new `Some`. If either `Option` is `None`, the result is `None`.
   *
   * @category Combining
   * @since 2.0.0
   */
  <A>(that: Option<A>): <B>(self: Option<(a: A) => B>) => Option<B>
  /**
   * Applies a function inside a `Some` to a value inside another `Some`,
   * combining them into a new `Option`.
   *
   * **Details**
   *
   * This function allows you to apply a function wrapped in an `Option` (`self`)
   * to a value wrapped in another `Option` (`that`). If both `Option`s are
   * `Some`, the function is applied to the value, and the result is wrapped in a
   * new `Some`. If either `Option` is `None`, the result is `None`.
   *
   * @category Combining
   * @since 2.0.0
   */
  <A, B>(self: Option<(a: A) => B>, that: Option<A>): Option<B>
} = dual(2, <A, B>(self: Option<(a: A) => B>, that: Option<A>): Option<B> => zipWith(self, that, (f, a) => f(a)))

/**
 * Reduces an `Iterable` of `Option<A>` to a single value of type `B`, ignoring
 * elements that are `None`.
 *
 * **Details**
 *
 * This function takes an initial value of type `B` and a reducing function `f`
 * that combines the accumulator with values of type `A`. It processes an
 * iterable of `Option<A>`, applying `f` only to the `Some` values while
 * ignoring the `None` values. The result is a single value of type `B`.
 *
 * This utility is particularly useful for aggregating values from an iterable
 * of `Option`s while skipping the absent (`None`) values.
 *
 * @example
 * ```ts
 * import { Option, pipe } from "effect"
 *
 * const iterable = [Option.some(1), Option.none(), Option.some(2), Option.none()]
 *
 * console.log(pipe(iterable, Option.reduceCompact(0, (b, a) => b + a)))
 * // Output: 3
 * ```
 *
 * @category Reducing
 * @since 2.0.0
 */
export const reduceCompact: {
  /**
   * Reduces an `Iterable` of `Option<A>` to a single value of type `B`, ignoring
   * elements that are `None`.
   *
   * **Details**
   *
   * This function takes an initial value of type `B` and a reducing function `f`
   * that combines the accumulator with values of type `A`. It processes an
   * iterable of `Option<A>`, applying `f` only to the `Some` values while
   * ignoring the `None` values. The result is a single value of type `B`.
   *
   * This utility is particularly useful for aggregating values from an iterable
   * of `Option`s while skipping the absent (`None`) values.
   *
   * @example
   * ```ts
   * import { Option, pipe } from "effect"
   *
   * const iterable = [Option.some(1), Option.none(), Option.some(2), Option.none()]
   *
   * console.log(pipe(iterable, Option.reduceCompact(0, (b, a) => b + a)))
   * // Output: 3
   * ```
   *
   * @category Reducing
   * @since 2.0.0
   */
  <B, A>(b: B, f: (b: B, a: A) => B): (self: Iterable<Option<A>>) => B
  /**
   * Reduces an `Iterable` of `Option<A>` to a single value of type `B`, ignoring
   * elements that are `None`.
   *
   * **Details**
   *
   * This function takes an initial value of type `B` and a reducing function `f`
   * that combines the accumulator with values of type `A`. It processes an
   * iterable of `Option<A>`, applying `f` only to the `Some` values while
   * ignoring the `None` values. The result is a single value of type `B`.
   *
   * This utility is particularly useful for aggregating values from an iterable
   * of `Option`s while skipping the absent (`None`) values.
   *
   * @example
   * ```ts
   * import { Option, pipe } from "effect"
   *
   * const iterable = [Option.some(1), Option.none(), Option.some(2), Option.none()]
   *
   * console.log(pipe(iterable, Option.reduceCompact(0, (b, a) => b + a)))
   * // Output: 3
   * ```
   *
   * @category Reducing
   * @since 2.0.0
   */
  <A, B>(self: Iterable<Option<A>>, b: B, f: (b: B, a: A) => B): B
} = dual(
  3,
  <A, B>(self: Iterable<Option<A>>, b: B, f: (b: B, a: A) => B): B => {
    let out: B = b
    for (const oa of self) {
      if (isSome(oa)) {
        out = f(out, oa.value)
      }
    }
    return out
  }
)

/**
 * Converts an `Option` into an `Array`.
 * If the input is `None`, an empty array is returned.
 * If the input is `Some`, its value is wrapped in a single-element array.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.toArray(Option.some(1)))
 * // Output: [1]
 *
 * console.log(Option.toArray(Option.none()))
 * // Output: []
 * ```
 *
 * @category Conversions
 * @since 2.0.0
 */
export const toArray = <A>(self: Option<A>): Array<A> => isNone(self) ? [] : [self.value]

/**
 * Splits an `Option` into two `Option`s based on the result of a mapping
 * function that produces an `Either`.
 *
 * **Details**
 *
 * This function takes an `Option` and a mapping function `f` that converts its
 * value into an `Either`. It returns a tuple of two `Option`s:
 *
 * - The first `Option` (`left`) contains the value from the `Left` side of the
 *   `Either` if it exists, otherwise `None`.
 * - The second `Option` (`right`) contains the value from the `Right` side of
 *   the `Either` if it exists, otherwise `None`.
 *
 * If the input `Option` is `None`, both returned `Option`s are `None`.
 *
 * This utility is useful for filtering and categorizing the contents of an
 * `Option` based on a bifurcating computation.
 *
 * @category Filtering
 * @since 2.0.0
 */
export const partitionMap: {
  /**
   * Splits an `Option` into two `Option`s based on the result of a mapping
   * function that produces an `Either`.
   *
   * **Details**
   *
   * This function takes an `Option` and a mapping function `f` that converts its
   * value into an `Either`. It returns a tuple of two `Option`s:
   *
   * - The first `Option` (`left`) contains the value from the `Left` side of the
   *   `Either` if it exists, otherwise `None`.
   * - The second `Option` (`right`) contains the value from the `Right` side of
   *   the `Either` if it exists, otherwise `None`.
   *
   * If the input `Option` is `None`, both returned `Option`s are `None`.
   *
   * This utility is useful for filtering and categorizing the contents of an
   * `Option` based on a bifurcating computation.
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A, B, C>(f: (a: A) => Either<C, B>): (self: Option<A>) => [left: Option<B>, right: Option<C>]
  /**
   * Splits an `Option` into two `Option`s based on the result of a mapping
   * function that produces an `Either`.
   *
   * **Details**
   *
   * This function takes an `Option` and a mapping function `f` that converts its
   * value into an `Either`. It returns a tuple of two `Option`s:
   *
   * - The first `Option` (`left`) contains the value from the `Left` side of the
   *   `Either` if it exists, otherwise `None`.
   * - The second `Option` (`right`) contains the value from the `Right` side of
   *   the `Either` if it exists, otherwise `None`.
   *
   * If the input `Option` is `None`, both returned `Option`s are `None`.
   *
   * This utility is useful for filtering and categorizing the contents of an
   * `Option` based on a bifurcating computation.
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A, B, C>(self: Option<A>, f: (a: A) => Either<C, B>): [left: Option<B>, right: Option<C>]
} = dual(2, <A, B, C>(
  self: Option<A>,
  f: (a: A) => Either<C, B>
): [excluded: Option<B>, satisfying: Option<C>] => {
  if (isNone(self)) {
    return [none(), none()]
  }
  const e = f(self.value)
  return either.isLeft(e) ? [some(e.left), none()] : [none(), some(e.right)]
})

// TODO(4.0): remove?
/**
 * Alias of {@link flatMap}.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * // Transform and filter numbers
 * const transformEven = (n: Option.Option<number>): Option.Option<string> =>
 *   Option.filterMap(n, (n) => (n % 2 === 0 ? Option.some(`Even: ${n}`) : Option.none()))
 *
 * console.log(transformEven(Option.none()))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(transformEven(Option.some(1)))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(transformEven(Option.some(2)))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'Even: 2' }
 * ```
 *
 * @category Filtering
 * @since 2.0.0
 */
export const filterMap: {
  // TODO(4.0): remove?
  /**
   * Alias of {@link flatMap}.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Transform and filter numbers
   * const transformEven = (n: Option.Option<number>): Option.Option<string> =>
   *   Option.filterMap(n, (n) => (n % 2 === 0 ? Option.some(`Even: ${n}`) : Option.none()))
   *
   * console.log(transformEven(Option.none()))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(transformEven(Option.some(1)))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(transformEven(Option.some(2)))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'Even: 2' }
   * ```
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A, B>(f: (a: A) => Option<B>): (self: Option<A>) => Option<B>
  // TODO(4.0): remove?
  /**
   * Alias of {@link flatMap}.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Transform and filter numbers
   * const transformEven = (n: Option.Option<number>): Option.Option<string> =>
   *   Option.filterMap(n, (n) => (n % 2 === 0 ? Option.some(`Even: ${n}`) : Option.none()))
   *
   * console.log(transformEven(Option.none()))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(transformEven(Option.some(1)))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(transformEven(Option.some(2)))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'Even: 2' }
   * ```
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A, B>(self: Option<A>, f: (a: A) => Option<B>): Option<B>
} = flatMap

/**
 * Filters an `Option` using a predicate. If the predicate is not satisfied or the `Option` is `None` returns `None`.
 *
 * If you need to change the type of the `Option` in addition to filtering, see `filterMap`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const removeEmptyString = (input: Option.Option<string>) =>
 *   Option.filter(input, (value) => value !== "")
 *
 * console.log(removeEmptyString(Option.none()))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(removeEmptyString(Option.some("")))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * console.log(removeEmptyString(Option.some("a")))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
 * ```
 *
 * @category Filtering
 * @since 2.0.0
 */
export const filter: {
  /**
   * Filters an `Option` using a predicate. If the predicate is not satisfied or the `Option` is `None` returns `None`.
   *
   * If you need to change the type of the `Option` in addition to filtering, see `filterMap`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const removeEmptyString = (input: Option.Option<string>) =>
   *   Option.filter(input, (value) => value !== "")
   *
   * console.log(removeEmptyString(Option.none()))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("")))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("a")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Option<A>) => Option<B>
  /**
   * Filters an `Option` using a predicate. If the predicate is not satisfied or the `Option` is `None` returns `None`.
   *
   * If you need to change the type of the `Option` in addition to filtering, see `filterMap`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const removeEmptyString = (input: Option.Option<string>) =>
   *   Option.filter(input, (value) => value !== "")
   *
   * console.log(removeEmptyString(Option.none()))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("")))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("a")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Option<A>) => Option<A>
  /**
   * Filters an `Option` using a predicate. If the predicate is not satisfied or the `Option` is `None` returns `None`.
   *
   * If you need to change the type of the `Option` in addition to filtering, see `filterMap`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const removeEmptyString = (input: Option.Option<string>) =>
   *   Option.filter(input, (value) => value !== "")
   *
   * console.log(removeEmptyString(Option.none()))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("")))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("a")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A, B extends A>(self: Option<A>, refinement: Refinement<A, B>): Option<B>
  /**
   * Filters an `Option` using a predicate. If the predicate is not satisfied or the `Option` is `None` returns `None`.
   *
   * If you need to change the type of the `Option` in addition to filtering, see `filterMap`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const removeEmptyString = (input: Option.Option<string>) =>
   *   Option.filter(input, (value) => value !== "")
   *
   * console.log(removeEmptyString(Option.none()))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("")))
   * // Output: { _id: 'Option', _tag: 'None' }
   *
   * console.log(removeEmptyString(Option.some("a")))
   * // Output: { _id: 'Option', _tag: 'Some', value: 'a' }
   * ```
   *
   * @category Filtering
   * @since 2.0.0
   */
  <A>(self: Option<A>, predicate: Predicate<A>): Option<A>
} = dual(
  2,
  <A>(self: Option<A>, predicate: Predicate<A>): Option<A> =>
    filterMap(self, (b) => (predicate(b) ? option.some(b) : option.none))
)

/**
 * Creates an `Equivalence` instance for comparing `Option` values, using a
 * provided `Equivalence` for the inner type.
 *
 * **Details**
 *
 * This function takes an `Equivalence` instance for a specific type `A` and
 * produces an `Equivalence` instance for `Option<A>`. The resulting
 * `Equivalence` determines whether two `Option` values are equivalent:
 *
 * - Two `None`s are considered equivalent.
 * - A `Some` and a `None` are not equivalent.
 * - Two `Some` values are equivalent if their inner values are equivalent
 *   according to the provided `Equivalence`.
 *
 * **Example** (Comparing Optional Numbers for Equivalence)
 *
 * ```ts
 * import { Number, Option } from "effect"
 *
 * const isEquivalent = Option.getEquivalence(Number.Equivalence)
 *
 * console.log(isEquivalent(Option.none(), Option.none()))
 * // Output: true
 *
 * console.log(isEquivalent(Option.none(), Option.some(1)))
 * // Output: false
 *
 * console.log(isEquivalent(Option.some(1), Option.none()))
 * // Output: false
 *
 * console.log(isEquivalent(Option.some(1), Option.some(2)))
 * // Output: false
 *
 * console.log(isEquivalent(Option.some(1), Option.some(1)))
 * // Output: true
 * ```
 *
 * @category Equivalence
 * @since 2.0.0
 */
export const getEquivalence = <A>(isEquivalent: Equivalence.Equivalence<A>): Equivalence.Equivalence<Option<A>> =>
  Equivalence.make((x, y) => isNone(x) ? isNone(y) : isNone(y) ? false : isEquivalent(x.value, y.value))

/**
 * Creates an `Order` instance for comparing `Option` values, using a provided
 * `Order` for the inner type.
 *
 * **Details**
 *
 * This function produces an `Order` instance for `Option<A>`, allowing `Option`
 * values to be compared:
 *
 * - `None` is always considered less than any `Some` value.
 * - If both are `Some`, their inner values are compared using the provided
 *   `Order` instance.
 *
 * @example
 * ```ts
 * import { Number, Option } from "effect"
 *
 * const order = Option.getOrder(Number.Order)
 *
 * console.log(order(Option.none(), Option.none()))
 * // Output: 0
 *
 * console.log(order(Option.none(), Option.some(1)))
 * // Output: -1
 *
 * console.log(order(Option.some(1), Option.none()))
 * // Output: 1
 *
 * console.log(order(Option.some(1), Option.some(2)))
 * // Output: -1
 *
 * console.log(order(Option.some(1), Option.some(1)))
 * // Output: 0
 * ```
 *
 * @category Sorting
 * @since 2.0.0
 */
export const getOrder = <A>(O: Order<A>): Order<Option<A>> =>
  order.make((self, that) => isSome(self) ? (isSome(that) ? O(self.value, that.value) : 1) : -1)

/**
 * Lifts a binary function to work with `Option` values, allowing the function
 * to operate on two `Option`s.
 *
 * **Details**
 *
 * This function takes a binary function `f` and returns a new function that
 * applies `f` to the values of two `Option`s (`self` and `that`). If both
 * `Option`s are `Some`, the binary function `f` is applied to their values, and
 * the result is wrapped in a new `Some`. If either `Option` is `None`, the
 * result is `None`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * // A binary function to add two numbers
 * const add = (a: number, b: number): number => a + b
 *
 * // Lift the `add` function to work with `Option` values
 * const addOptions = Option.lift2(add)
 *
 * // Both `Option`s are `Some`
 * console.log(addOptions(Option.some(2), Option.some(3)))
 * // Output: { _id: 'Option', _tag: 'Some', value: 5 }
 *
 * // One `Option` is `None`
 * console.log(addOptions(Option.some(2), Option.none()))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Lifting
 * @since 2.0.0
 */
export const lift2 = <A, B, C>(f: (a: A, b: B) => C): {
  (that: Option<B>): (self: Option<A>) => Option<C>
  (self: Option<A>, that: Option<B>): Option<C>
} => dual(2, (self: Option<A>, that: Option<B>): Option<C> => zipWith(self, that, f))

/**
 * Lifts a `Predicate` or `Refinement` into the `Option` context, returning a
 * `Some` of the input value if the predicate is satisfied, or `None` otherwise.
 *
 * **Details**
 *
 * This function transforms a `Predicate` (or a more specific `Refinement`) into
 * a function that produces an `Option`. If the predicate evaluates to `true`,
 * the input value is wrapped in a `Some`. If the predicate evaluates to
 * `false`, the result is `None`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * // Check if a number is positive
 * const isPositive = (n: number) => n > 0
 *
 * //      ┌─── (b: number) => Option<number>
 * //      ▼
 * const parsePositive = Option.liftPredicate(isPositive)
 *
 * console.log(parsePositive(1))
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 *
 * console.log(parsePositive(-1))
 * // OUtput: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Lifting
 * @since 2.0.0
 */
export const liftPredicate: { // Note: I intentionally avoid using the NoInfer pattern here.
  <A, B extends A>(refinement: Refinement<A, B>): (a: A) => Option<B>
  /**
   * Lifts a `Predicate` or `Refinement` into the `Option` context, returning a
   * `Some` of the input value if the predicate is satisfied, or `None` otherwise.
   *
   * **Details**
   *
   * This function transforms a `Predicate` (or a more specific `Refinement`) into
   * a function that produces an `Option`. If the predicate evaluates to `true`,
   * the input value is wrapped in a `Some`. If the predicate evaluates to
   * `false`, the result is `None`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Check if a number is positive
   * const isPositive = (n: number) => n > 0
   *
   * //      ┌─── (b: number) => Option<number>
   * //      ▼
   * const parsePositive = Option.liftPredicate(isPositive)
   *
   * console.log(parsePositive(1))
   * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
   *
   * console.log(parsePositive(-1))
   * // OUtput: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Lifting
   * @since 2.0.0
   */
  <B extends A, A = B>(predicate: Predicate<A>): (b: B) => Option<B>
  /**
   * Lifts a `Predicate` or `Refinement` into the `Option` context, returning a
   * `Some` of the input value if the predicate is satisfied, or `None` otherwise.
   *
   * **Details**
   *
   * This function transforms a `Predicate` (or a more specific `Refinement`) into
   * a function that produces an `Option`. If the predicate evaluates to `true`,
   * the input value is wrapped in a `Some`. If the predicate evaluates to
   * `false`, the result is `None`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Check if a number is positive
   * const isPositive = (n: number) => n > 0
   *
   * //      ┌─── (b: number) => Option<number>
   * //      ▼
   * const parsePositive = Option.liftPredicate(isPositive)
   *
   * console.log(parsePositive(1))
   * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
   *
   * console.log(parsePositive(-1))
   * // OUtput: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Lifting
   * @since 2.0.0
   */
  <A, B extends A>(self: A, refinement: Refinement<A, B>): Option<B>
  /**
   * Lifts a `Predicate` or `Refinement` into the `Option` context, returning a
   * `Some` of the input value if the predicate is satisfied, or `None` otherwise.
   *
   * **Details**
   *
   * This function transforms a `Predicate` (or a more specific `Refinement`) into
   * a function that produces an `Option`. If the predicate evaluates to `true`,
   * the input value is wrapped in a `Some`. If the predicate evaluates to
   * `false`, the result is `None`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * // Check if a number is positive
   * const isPositive = (n: number) => n > 0
   *
   * //      ┌─── (b: number) => Option<number>
   * //      ▼
   * const parsePositive = Option.liftPredicate(isPositive)
   *
   * console.log(parsePositive(1))
   * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
   *
   * console.log(parsePositive(-1))
   * // OUtput: { _id: 'Option', _tag: 'None' }
   * ```
   *
   * @category Lifting
   * @since 2.0.0
   */
  <B extends A, A = B>(self: B, predicate: Predicate<A>): Option<B>
} = dual(
  2,
  <B extends A, A = B>(b: B, predicate: Predicate<A>): Option<B> => predicate(b) ? some(b) : none()
)

/**
 * Returns a function that checks if an `Option` contains a specified value,
 * using a provided equivalence function.
 *
 * **Details**
 *
 * This function allows you to check whether an `Option` contains a specific
 * value. It uses an equivalence function `isEquivalent` to compare the value
 * inside the `Option` to the provided value. If the `Option` is `Some` and the
 * equivalence function returns `true`, the result is `true`. If the `Option` is
 * `None` or the values are not equivalent, the result is `false`.
 *
 * @example
 * ```ts
 * import { Number, Option } from "effect"
 *
 * const contains = Option.containsWith(Number.Equivalence)
 *
 * console.log(Option.some(2).pipe(contains(2)))
 * // Output: true
 *
 * console.log(Option.some(1).pipe(contains(2)))
 * // Output: false
 *
 * console.log(Option.none().pipe(contains(2)))
 * // Output: false
 * ```
 *
 * @see {@link contains} for a version that uses the default `Equivalence`.
 *
 * @category Elements
 * @since 2.0.0
 */
export const containsWith = <A>(isEquivalent: (self: A, that: A) => boolean): {
  (a: A): (self: Option<A>) => boolean
  (self: Option<A>, a: A): boolean
} => dual(2, (self: Option<A>, a: A): boolean => isNone(self) ? false : isEquivalent(self.value, a))

const _equivalence = Equal.equivalence()

/**
 * Returns a function that checks if an `Option` contains a specified value
 * using the default `Equivalence`.
 *
 * **Details**
 *
 * This function allows you to check whether an `Option` contains a specific
 * value. It uses the default `Equivalence` for equality comparison. If the
 * `Option` is `Some` and its value is equivalent to the provided value, the
 * result is `true`. If the `Option` is `None` or the values are not equivalent,
 * the result is `false`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * console.log(Option.some(2).pipe(Option.contains(2)))
 * // Output: true
 *
 * console.log(Option.some(1).pipe(Option.contains(2)))
 * // Output: false
 *
 * console.log(Option.none().pipe(Option.contains(2)))
 * // Output: false
 * ```
 *
 * @see {@link containsWith} for a version that allows you to specify a custom equivalence function.
 *
 * @category Elements
 * @since 2.0.0
 */
export const contains: {
  /**
   * Returns a function that checks if an `Option` contains a specified value
   * using the default `Equivalence`.
   *
   * **Details**
   *
   * This function allows you to check whether an `Option` contains a specific
   * value. It uses the default `Equivalence` for equality comparison. If the
   * `Option` is `Some` and its value is equivalent to the provided value, the
   * result is `true`. If the `Option` is `None` or the values are not equivalent,
   * the result is `false`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.some(2).pipe(Option.contains(2)))
   * // Output: true
   *
   * console.log(Option.some(1).pipe(Option.contains(2)))
   * // Output: false
   *
   * console.log(Option.none().pipe(Option.contains(2)))
   * // Output: false
   * ```
   *
   * @see {@link containsWith} for a version that allows you to specify a custom equivalence function.
   *
   * @category Elements
   * @since 2.0.0
   */
  <A>(a: A): (self: Option<A>) => boolean
  /**
   * Returns a function that checks if an `Option` contains a specified value
   * using the default `Equivalence`.
   *
   * **Details**
   *
   * This function allows you to check whether an `Option` contains a specific
   * value. It uses the default `Equivalence` for equality comparison. If the
   * `Option` is `Some` and its value is equivalent to the provided value, the
   * result is `true`. If the `Option` is `None` or the values are not equivalent,
   * the result is `false`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * console.log(Option.some(2).pipe(Option.contains(2)))
   * // Output: true
   *
   * console.log(Option.some(1).pipe(Option.contains(2)))
   * // Output: false
   *
   * console.log(Option.none().pipe(Option.contains(2)))
   * // Output: false
   * ```
   *
   * @see {@link containsWith} for a version that allows you to specify a custom equivalence function.
   *
   * @category Elements
   * @since 2.0.0
   */
  <A>(self: Option<A>, a: A): boolean
} = containsWith(_equivalence)

/**
 * Checks if a value in an `Option` satisfies a given predicate or refinement.
 *
 * **Details**
 *
 * This function allows you to check if a value inside a `Some` meets a
 * specified condition. If the `Option` is `None`, the result is `false`. If the
 * `Option` is `Some`, the provided predicate or refinement is applied to the
 * value:
 *
 * - If the condition is met, the result is `true`.
 * - If the condition is not met, the result is `false`.
 *
 * @example
 * ```ts
 * import { Option } from "effect"
 *
 * const isEven = (n: number) => n % 2 === 0
 *
 * console.log(Option.some(2).pipe(Option.exists(isEven)))
 * // Output: true
 *
 * console.log(Option.some(1).pipe(Option.exists(isEven)))
 * // Output: false
 *
 * console.log(Option.none().pipe(Option.exists(isEven)))
 * // Output: false
 * ```
 *
 * @category Elements
 * @since 2.0.0
 */
export const exists: {
  /**
   * Checks if a value in an `Option` satisfies a given predicate or refinement.
   *
   * **Details**
   *
   * This function allows you to check if a value inside a `Some` meets a
   * specified condition. If the `Option` is `None`, the result is `false`. If the
   * `Option` is `Some`, the provided predicate or refinement is applied to the
   * value:
   *
   * - If the condition is met, the result is `true`.
   * - If the condition is not met, the result is `false`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const isEven = (n: number) => n % 2 === 0
   *
   * console.log(Option.some(2).pipe(Option.exists(isEven)))
   * // Output: true
   *
   * console.log(Option.some(1).pipe(Option.exists(isEven)))
   * // Output: false
   *
   * console.log(Option.none().pipe(Option.exists(isEven)))
   * // Output: false
   * ```
   *
   * @category Elements
   * @since 2.0.0
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): (self: Option<A>) => self is Option<B>
  /**
   * Checks if a value in an `Option` satisfies a given predicate or refinement.
   *
   * **Details**
   *
   * This function allows you to check if a value inside a `Some` meets a
   * specified condition. If the `Option` is `None`, the result is `false`. If the
   * `Option` is `Some`, the provided predicate or refinement is applied to the
   * value:
   *
   * - If the condition is met, the result is `true`.
   * - If the condition is not met, the result is `false`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const isEven = (n: number) => n % 2 === 0
   *
   * console.log(Option.some(2).pipe(Option.exists(isEven)))
   * // Output: true
   *
   * console.log(Option.some(1).pipe(Option.exists(isEven)))
   * // Output: false
   *
   * console.log(Option.none().pipe(Option.exists(isEven)))
   * // Output: false
   * ```
   *
   * @category Elements
   * @since 2.0.0
   */
  <A>(predicate: Predicate<NoInfer<A>>): (self: Option<A>) => boolean
  /**
   * Checks if a value in an `Option` satisfies a given predicate or refinement.
   *
   * **Details**
   *
   * This function allows you to check if a value inside a `Some` meets a
   * specified condition. If the `Option` is `None`, the result is `false`. If the
   * `Option` is `Some`, the provided predicate or refinement is applied to the
   * value:
   *
   * - If the condition is met, the result is `true`.
   * - If the condition is not met, the result is `false`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const isEven = (n: number) => n % 2 === 0
   *
   * console.log(Option.some(2).pipe(Option.exists(isEven)))
   * // Output: true
   *
   * console.log(Option.some(1).pipe(Option.exists(isEven)))
   * // Output: false
   *
   * console.log(Option.none().pipe(Option.exists(isEven)))
   * // Output: false
   * ```
   *
   * @category Elements
   * @since 2.0.0
   */
  <A, B extends A>(self: Option<A>, refinement: Refinement<A, B>): self is Option<B>
  /**
   * Checks if a value in an `Option` satisfies a given predicate or refinement.
   *
   * **Details**
   *
   * This function allows you to check if a value inside a `Some` meets a
   * specified condition. If the `Option` is `None`, the result is `false`. If the
   * `Option` is `Some`, the provided predicate or refinement is applied to the
   * value:
   *
   * - If the condition is met, the result is `true`.
   * - If the condition is not met, the result is `false`.
   *
   * @example
   * ```ts
   * import { Option } from "effect"
   *
   * const isEven = (n: number) => n % 2 === 0
   *
   * console.log(Option.some(2).pipe(Option.exists(isEven)))
   * // Output: true
   *
   * console.log(Option.some(1).pipe(Option.exists(isEven)))
   * // Output: false
   *
   * console.log(Option.none().pipe(Option.exists(isEven)))
   * // Output: false
   * ```
   *
   * @category Elements
   * @since 2.0.0
   */
  <A>(self: Option<A>, predicate: Predicate<A>): boolean
} = dual(
  2,
  <A, B extends A>(self: Option<A>, refinement: Refinement<A, B>): self is Option<B> =>
    isNone(self) ? false : refinement(self.value)
)

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Option, pipe } from "effect"
 *
 * const result = pipe(
 *   Option.Do,
 *   Option.bind("x", () => Option.some(2)),
 *   Option.bind("y", () => Option.some(3)),
 *   Option.let("sum", ({ x, y }) => x + y),
 *   Option.filter(({ x, y }) => x * y > 5)
 * )
 * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @category Do notation
 * @since 2.0.0
 */
export const bindTo: {
  // -------------------------------------------------------------------------------------
  // do notation
  // -------------------------------------------------------------------------------------

  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option, pipe } from "effect"
   *
   * const result = pipe(
   *   Option.Do,
   *   Option.bind("x", () => Option.some(2)),
   *   Option.bind("y", () => Option.some(3)),
   *   Option.let("sum", ({ x, y }) => x + y),
   *   Option.filter(({ x, y }) => x * y > 5)
   * )
   * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link let_ let}
   *
   * @category Do notation
   * @since 2.0.0
   */
  <N extends string>(name: N): <A>(self: Option<A>) => Option<{ [K in N]: A }>
  // -------------------------------------------------------------------------------------
  // do notation
  // -------------------------------------------------------------------------------------

  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option, pipe } from "effect"
   *
   * const result = pipe(
   *   Option.Do,
   *   Option.bind("x", () => Option.some(2)),
   *   Option.bind("y", () => Option.some(3)),
   *   Option.let("sum", ({ x, y }) => x + y),
   *   Option.filter(({ x, y }) => x * y > 5)
   * )
   * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link let_ let}
   *
   * @category Do notation
   * @since 2.0.0
   */
  <A, N extends string>(self: Option<A>, name: N): Option<{ [K in N]: A }>
} = doNotation.bindTo<OptionTypeLambda>(map)

const let_: {
  <N extends string, A extends object, B>(
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => B
  ): (self: Option<A>) => Option<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }>
  <A extends object, N extends string, B>(
    self: Option<A>,
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => B
  ): Option<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }>
} = doNotation.let_<OptionTypeLambda>(map)

export {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option, pipe } from "effect"
   *
   * const result = pipe(
   *   Option.Do,
   *   Option.bind("x", () => Option.some(2)),
   *   Option.bind("y", () => Option.some(3)),
   *   Option.let("sum", ({ x, y }) => x + y),
   *   Option.filter(({ x, y }) => x * y > 5)
   * )
   * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link bindTo}
   *
   * @category Do notation
   * @since 2.0.0
   */
  let_ as let
}

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Option, pipe } from "effect"
 *
 * const result = pipe(
 *   Option.Do,
 *   Option.bind("x", () => Option.some(2)),
 *   Option.bind("y", () => Option.some(3)),
 *   Option.let("sum", ({ x, y }) => x + y),
 *   Option.filter(({ x, y }) => x * y > 5)
 * )
 * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link let_ let}
 *
 * @category Do notation
 * @since 2.0.0
 */
export const bind: {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option, pipe } from "effect"
   *
   * const result = pipe(
   *   Option.Do,
   *   Option.bind("x", () => Option.some(2)),
   *   Option.bind("y", () => Option.some(3)),
   *   Option.let("sum", ({ x, y }) => x + y),
   *   Option.filter(({ x, y }) => x * y > 5)
   * )
   * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link let_ let}
   *
   * @category Do notation
   * @since 2.0.0
   */
  <N extends string, A extends object, B>(name: Exclude<N, keyof A>, f: (a: NoInfer<A>) => Option<B>): (self: Option<A>) => Option<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }>
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Option, pipe } from "effect"
   *
   * const result = pipe(
   *   Option.Do,
   *   Option.bind("x", () => Option.some(2)),
   *   Option.bind("y", () => Option.some(3)),
   *   Option.let("sum", ({ x, y }) => x + y),
   *   Option.filter(({ x, y }) => x * y > 5)
   * )
   * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link let_ let}
   *
   * @category Do notation
   * @since 2.0.0
   */
  <A extends object, N extends string, B>(
    self: Option<A>,
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => Option<B>
  ): Option<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }>
} = doNotation.bind<OptionTypeLambda>(map, flatMap)

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Option` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Option` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Option, pipe } from "effect"
 *
 * const result = pipe(
 *   Option.Do,
 *   Option.bind("x", () => Option.some(2)),
 *   Option.bind("y", () => Option.some(3)),
 *   Option.let("sum", ({ x, y }) => x + y),
 *   Option.filter(({ x, y }) => x * y > 5)
 * )
 * assert.deepStrictEqual(result, Option.some({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @category Do notation
 * @since 2.0.0
 */
export const Do: Option<{}> = some({})

const adapter = Gen.adapter<OptionTypeLambda>()

/**
 * Similar to `Effect.gen`, `Option.gen` provides a more readable,
 * generator-based syntax for working with `Option` values, making code that
 * involves `Option` easier to write and understand. This approach is similar to
 * using `async/await` but tailored for `Option`.
 *
 * **Example** (Using `Option.gen` to Create a Combined Value)
 *
 * ```ts
 * import { Option } from "effect"
 *
 * const maybeName: Option.Option<string> = Option.some("John")
 * const maybeAge: Option.Option<number> = Option.some(25)
 *
 * const person = Option.gen(function* () {
 *   const name = (yield* maybeName).toUpperCase()
 *   const age = yield* maybeAge
 *   return { name, age }
 * })
 *
 * console.log(person)
 * // Output:
 * // { _id: 'Option', _tag: 'Some', value: { name: 'JOHN', age: 25 } }
 * ```
 *
 * @category Generators
 * @since 2.0.0
 */
export const gen: Gen.Gen<OptionTypeLambda, Gen.Adapter<OptionTypeLambda>> = (...args) => {
  const f = args.length === 1 ? args[0] : args[1].bind(args[0])
  const iterator = f(adapter)
  let state: IteratorResult<any> = iterator.next()
  while (!state.done) {
    const current = Gen.isGenKind(state.value)
      ? state.value.value
      : Gen.yieldWrapGet(state.value)
    if (isNone(current)) {
      return current
    }
    state = iterator.next(current.value as never)
  }
  return some(state.value)
}

/**
 * Merges two optional values, applying a function if both exist.
 * Unlike {@link zipWith}, this function returns `None` only if both inputs are `None`.
 *
 * @internal
 */
export const mergeWith = <A>(f: (a1: A, a2: A) => A) => (o1: Option<A>, o2: Option<A>): Option<A> => {
  if (isNone(o1)) {
    return o2
  } else if (isNone(o2)) {
    return o1
  }
  return some(f(o1.value, o2.value))
}
