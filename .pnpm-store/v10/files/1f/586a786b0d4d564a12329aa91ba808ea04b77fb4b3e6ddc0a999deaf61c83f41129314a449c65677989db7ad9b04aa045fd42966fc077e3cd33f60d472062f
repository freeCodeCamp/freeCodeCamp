/**
 * The `effect/match` module provides a type-safe pattern matching system for
 * TypeScript. Inspired by functional programming, it simplifies conditional
 * logic by replacing verbose if/else or switch statements with a structured and
 * expressive API.
 *
 * This module supports matching against types, values, and discriminated unions
 * while enforcing exhaustiveness checking to ensure all cases are handled.
 *
 * Although pattern matching is not yet a native JavaScript feature,
 * `effect/match` offers a reliable implementation that is available today.
 *
 * **How Pattern Matching Works**
 *
 * Pattern matching follows a structured process:
 *
 * - **Creating a matcher**: Define a `Matcher` that operates on either a
 *   specific `Match.type` or `Match.value`.
 *
 * - **Defining patterns**: Use combinators such as `Match.when`, `Match.not`,
 *   and `Match.tag` to specify matching conditions.
 *
 * - **Completing the match**: Apply a finalizer such as `Match.exhaustive`,
 *   `Match.orElse`, or `Match.option` to determine how unmatched cases should
 *   be handled.
 *
 * @since 1.0.0
 */
import type * as Either from "./Either.js"
import * as internal from "./internal/matcher.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import * as Predicate from "./Predicate.js"
import type * as T from "./Types.js"
import type { Unify } from "./Unify.js"

/**
 * @category Symbols
 * @since 1.0.0
 */
export const MatcherTypeId: unique symbol = internal.TypeId

/**
 * @category Symbols
 * @since 1.0.0
 */
export type MatcherTypeId = typeof MatcherTypeId

/**
 * Pattern matching follows a structured process:
 *
 * - **Creating a matcher**: Define a `Matcher` that operates on either a
 *   specific `Match.type` or `Match.value`.
 *
 * - **Defining patterns**: Use combinators such as `Match.when`, `Match.not`,
 *   and `Match.tag` to specify matching conditions.
 *
 * - **Completing the match**: Apply a finalizer such as `Match.exhaustive`,
 *   `Match.orElse`, or `Match.option` to determine how unmatched cases should
 *   be handled.
 *
 * @example
 * ```ts
 * import { Match } from "effect"
 *
 * // Simulated dynamic input that can be a string or a number
 * const input: string | number = "some input"
 *
 * //      ┌─── string
 * //      ▼
 * const result = Match.value(input).pipe(
 *   // Match if the value is a number
 *   Match.when(Match.number, (n) => `number: ${n}`),
 *   // Match if the value is a string
 *   Match.when(Match.string, (s) => `string: ${s}`),
 *   // Ensure all possible cases are covered
 *   Match.exhaustive
 * )
 *
 * console.log(result)
 * // Output: "string: some input"
 * ```
 *
 * @category Model
 * @since 1.0.0
 */
export type Matcher<Input, Filters, RemainingApplied, Result, Provided, Return = any> =
  | TypeMatcher<Input, Filters, RemainingApplied, Result, Return>
  | ValueMatcher<Input, Filters, RemainingApplied, Result, Provided, Return>

/**
 * @category Model
 * @since 1.0.0
 */
export interface TypeMatcher<in Input, out Filters, out Remaining, out Result, out Return = any> extends Pipeable {
  readonly _tag: "TypeMatcher"
  readonly [MatcherTypeId]: {
    readonly _input: T.Contravariant<Input>
    readonly _filters: T.Covariant<Filters>
    readonly _remaining: T.Covariant<Remaining>
    readonly _result: T.Covariant<Result>
    readonly _return: T.Covariant<Return>
  }
  readonly cases: ReadonlyArray<Case>
  add<I, R, RA, A>(_case: Case): TypeMatcher<I, R, RA, A>
}

/**
 * @category Model
 * @since 1.0.0
 */
export interface ValueMatcher<in Input, out Filters, out Remaining, out Result, out Provided, out Return = any>
  extends Pipeable
{
  readonly _tag: "ValueMatcher"
  readonly [MatcherTypeId]: {
    readonly _input: T.Contravariant<Input>
    readonly _filters: T.Covariant<Filters>
    readonly _remaining: T.Covariant<Remaining>
    readonly _result: T.Covariant<Result>
    readonly _provided: T.Covariant<Result>
    readonly _return: T.Covariant<Return>
  }
  readonly provided: Provided
  readonly value: Either.Either<Provided, Remaining>
  add<I, R, RA, A, Pr>(_case: Case): ValueMatcher<I, R, RA, A, Pr>
}

/**
 * @category Model
 * @since 1.0.0
 */
export type Case = When | Not

/**
 * @category Model
 * @since 1.0.0
 */
export interface When {
  readonly _tag: "When"
  guard(u: unknown): boolean
  evaluate(input: unknown): any
}

/**
 * @category Model
 * @since 1.0.0
 */
export interface Not {
  readonly _tag: "Not"
  guard(u: unknown): boolean
  evaluate(input: unknown): any
}

/**
 * Creates a matcher for a specific type.
 *
 * **Details**
 *
 * This function defines a `Matcher` that operates on a given type, allowing you
 * to specify conditions for handling different cases. Once the matcher is
 * created, you can use pattern-matching functions like {@link when} to define
 * how different values should be processed.
 *
 * **Example** (Matching Numbers and Strings)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * // Create a matcher for values that are either strings or numbers
 * //
 * //      ┌─── (u: string | number) => string
 * //      ▼
 * const match = Match.type<string | number>().pipe(
 *   // Match when the value is a number
 *   Match.when(Match.number, (n) => `number: ${n}`),
 *   // Match when the value is a string
 *   Match.when(Match.string, (s) => `string: ${s}`),
 *   // Ensure all possible cases are handled
 *   Match.exhaustive
 * )
 *
 * console.log(match(0))
 * // Output: "number: 0"
 *
 * console.log(match("hello"))
 * // Output: "string: hello"
 * ```
 *
 * @see {@link value} for creating a matcher from a specific value.
 *
 * @category Creating a matcher
 * @since 1.0.0
 */
export const type: <I>() => Matcher<I, Types.Without<never>, I, never, never> = internal.type

/**
 * Creates a matcher from a specific value.
 *
 * **Details**
 *
 * This function allows you to define a `Matcher` directly from a given value,
 * rather than from a type. This is useful when working with known values,
 * enabling structured pattern matching on objects, primitives, or any data
 * structure.
 *
 * Once the matcher is created, you can use pattern-matching functions like
 * {@link when} to define how different cases should be handled.
 *
 * **Example** (Matching an Object by Property)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * const input = { name: "John", age: 30 }
 *
 * // Create a matcher for the specific object
 * const result = Match.value(input).pipe(
 *   // Match when the 'name' property is "John"
 *   Match.when(
 *     { name: "John" },
 *     (user) => `${user.name} is ${user.age} years old`
 *   ),
 *   // Provide a fallback if no match is found
 *   Match.orElse(() => "Oh, not John")
 * )
 *
 * console.log(result)
 * // Output: "John is 30 years old"
 * ```
 *
 * @see {@link type} for creating a matcher from a specific type.
 *
 * @category Creating a matcher
 * @since 1.0.0
 */
export const value: <const I>(
  i: I
) => Matcher<I, Types.Without<never>, I, never, I> = internal.value

/**
 * @category Creating a matcher
 * @since 1.0.0
 */
export const valueTags: {
  /**
   * @category Creating a matcher
   * @since 1.0.0
   */
  <
    const I,
    P extends
      & { readonly [Tag in Types.Tags<"_tag", I> & string]: (_: Extract<I, { readonly _tag: Tag }>) => any }
      & { readonly [Tag in Exclude<keyof P, Types.Tags<"_tag", I>>]: never }
  >(fields: P): (input: I) => Unify<ReturnType<P[keyof P]>>
  /**
   * @category Creating a matcher
   * @since 1.0.0
   */
  <
    const I,
    P extends
      & { readonly [Tag in Types.Tags<"_tag", I> & string]: (_: Extract<I, { readonly _tag: Tag }>) => any }
      & { readonly [Tag in Exclude<keyof P, Types.Tags<"_tag", I>>]: never }
  >(input: I, fields: P): Unify<ReturnType<P[keyof P]>>
} = internal.valueTags

/**
 * @category Creating a matcher
 * @since 1.0.0
 */
export const typeTags: {
  /**
   * @category Creating a matcher
   * @since 1.0.0
   */
  <I, Ret>(): <
    P extends
      & {
        readonly [Tag in Types.Tags<"_tag", I> & string]: (
          _: Extract<I, { readonly _tag: Tag }>
        ) => Ret
      }
      & { readonly [Tag in Exclude<keyof P, Types.Tags<"_tag", I>>]: never }
  >(fields: P) => (input: I) => Ret
  /**
   * @category Creating a matcher
   * @since 1.0.0
   */
  <I>(): <
    P extends
      & {
        readonly [Tag in Types.Tags<"_tag", I> & string]: (
          _: Extract<I, { readonly _tag: Tag }>
        ) => any
      }
      & { readonly [Tag in Exclude<keyof P, Types.Tags<"_tag", I>>]: never }
  >(fields: P) => (input: I) => Unify<ReturnType<P[keyof P]>>
} = internal.typeTags

/**
 * Ensures that all branches of a matcher return a specific type.
 *
 * **Details**
 *
 * This function enforces a consistent return type across all pattern-matching
 * branches. By specifying a return type, TypeScript will check that every
 * matching condition produces a value of the expected type.
 *
 * **Important:** This function must be the first step in the matcher pipeline.
 * If used later, TypeScript will not enforce type consistency correctly.
 *
 * **Example** (Validating Return Type Consistency)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * const match = Match.type<{ a: number } | { b: string }>().pipe(
 *   // Ensure all branches return a string
 *   Match.withReturnType<string>(),
 *   // ❌ Type error: 'number' is not assignable to type 'string'
 *   // @ts-expect-error
 *   Match.when({ a: Match.number }, (_) => _.a),
 *   // ✅ Correct: returns a string
 *   Match.when({ b: Match.string }, (_) => _.b),
 *   Match.exhaustive
 * )
 * ```
 *
 * @since 1.0.0
 */
export const withReturnType: <Ret>() => <I, F, R, A, Pr, _>(
  self: Matcher<I, F, R, A, Pr, _>
) => [Ret] extends [[A] extends [never] ? any : A] ? Matcher<I, F, R, A, Pr, Ret>
  : "withReturnType constraint does not extend Result type" = internal.withReturnType

/**
 * Defines a condition for matching values.
 *
 * **Details**
 *
 * This function enables pattern matching by checking whether a given value
 * satisfies a condition. It supports both direct value comparisons and
 * predicate functions. If the condition is met, the associated function is
 * executed.
 *
 * This function is useful when defining matchers that need to check for
 * specific values or apply logical conditions to determine a match. It works
 * well with structured objects and primitive types.
 *
 * **Example** (Matching with Values and Predicates)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * // Create a matcher for objects with an "age" property
 * const match = Match.type<{ age: number }>().pipe(
 *   // Match when age is greater than 18
 *   Match.when({ age: (age) => age > 18 }, (user) => `Age: ${user.age}`),
 *   // Match when age is exactly 18
 *   Match.when({ age: 18 }, () => "You can vote"),
 *   // Fallback case for all other ages
 *   Match.orElse((user) => `${user.age} is too young`)
 * )
 *
 * console.log(match({ age: 20 }))
 * // Output: "Age: 20"
 *
 * console.log(match({ age: 18 }))
 * // Output: "You can vote"
 *
 * console.log(match({ age: 4 }))
 * // Output: "4 is too young"
 * ```
 *
 * @see {@link whenOr} Use this when multiple patterns should match in a single
 * condition.
 * @see {@link whenAnd} Use this when a value must match all provided patterns.
 * @see {@link orElse} Provides a fallback when no patterns match.
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const when: <
  R,
  const P extends Types.PatternPrimitive<R> | Types.PatternBase<R>,
  Ret,
  Fn extends (_: Types.WhenMatch<R, P>) => Ret
>(
  pattern: P,
  f: Fn
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Types.PForExclude<P>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Types.PForExclude<P>>>,
  A | ReturnType<Fn>,
  Pr,
  Ret
> = internal.when

/**
 * Matches one of multiple patterns in a single condition.
 *
 * **Details**
 *
 * This function allows defining a condition where a value matches any of the
 * provided patterns. If a match is found, the associated function is executed.
 * It simplifies cases where multiple patterns share the same handling logic.
 *
 * Unlike {@link when}, which requires separate conditions for each pattern,
 * this function enables combining them into a single statement, making the
 * matcher more concise.
 *
 * @example
 * ```ts
 * import { Match } from "effect"
 *
 * type ErrorType =
 *   | { readonly _tag: "NetworkError"; readonly message: string }
 *   | { readonly _tag: "TimeoutError"; readonly duration: number }
 *   | { readonly _tag: "ValidationError"; readonly field: string }
 *
 * const handleError = Match.type<ErrorType>().pipe(
 *   Match.whenOr(
 *     { _tag: "NetworkError" },
 *     { _tag: "TimeoutError" },
 *     () => "Retry the request"
 *   ),
 *   Match.when({ _tag: "ValidationError" }, (_) => `Invalid field: ${_.field}`),
 *   Match.exhaustive
 * )
 *
 * console.log(handleError({ _tag: "NetworkError", message: "No connection" }))
 * // Output: "Retry the request"
 *
 * console.log(handleError({ _tag: "ValidationError", field: "email" }))
 * // Output: "Invalid field: email"
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const whenOr: <
  R,
  const P extends ReadonlyArray<Types.PatternPrimitive<R> | Types.PatternBase<R>>,
  Ret,
  Fn extends (_: Types.WhenMatch<R, P[number]>) => Ret
>(
  ...args: [...patterns: P, f: Fn]
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Types.PForExclude<P[number]>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Types.PForExclude<P[number]>>>,
  A | ReturnType<Fn>,
  Pr,
  Ret
> = internal.whenOr

/**
 * Matches a value that satisfies all provided patterns.
 *
 * **Details**
 *
 * This function allows defining a condition where a value must match all the
 * given patterns simultaneously. If the value satisfies every pattern, the
 * associated function is executed.
 *
 * Unlike {@link when}, which matches a single pattern at a time, this function
 * ensures that multiple conditions are met before executing the callback. It is
 * useful when checking for values that need to fulfill multiple criteria at
 * once.
 *
 * @example
 * ```ts
 * import { Match } from "effect"
 *
 * type User = { readonly age: number; readonly role: "admin" | "user" }
 *
 * const checkUser = Match.type<User>().pipe(
 *   Match.whenAnd(
 *     { age: (n) => n >= 18 },
 *     { role: "admin" },
 *     () => "Admin access granted"
 *   ),
 *   Match.orElse(() => "Access denied")
 * )
 *
 * console.log(checkUser({ age: 20, role: "admin" }))
 * // Output: "Admin access granted"
 *
 * console.log(checkUser({ age: 20, role: "user" }))
 * // Output: "Access denied"
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const whenAnd: <
  R,
  const P extends ReadonlyArray<Types.PatternPrimitive<R> | Types.PatternBase<R>>,
  Ret,
  Fn extends (_: Types.WhenMatch<R, T.UnionToIntersection<P[number]>>) => Ret
>(
  ...args: [...patterns: P, f: Fn]
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Types.PForExclude<T.UnionToIntersection<P[number]>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Types.PForExclude<T.UnionToIntersection<P[number]>>>>,
  A | ReturnType<Fn>,
  Pr
> = internal.whenAnd

/**
 * Matches values based on a specified discriminant field.
 *
 * **Details**
 *
 * This function is used to define pattern matching on objects that follow a
 * **discriminated union** structure, where a specific field (e.g., `type`,
 * `kind`, `_tag`) determines the variant of the object. It allows matching
 * multiple values of the discriminant and provides a function to handle the
 * matched cases.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ type: "A"; a: string } | { type: "B"; b: number } | { type: "C"; c: boolean }>(),
 *   Match.discriminator("type")("A", "B", (_) => `A or B: ${_.type}`),
 *   Match.discriminator("type")("C", (_) => `C(${_.c})`),
 *   Match.exhaustive
 * )
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const discriminator: <D extends string>(
  field: D
) => <R, P extends Types.Tags<D, R> & string, Ret, Fn extends (_: Extract<R, Record<D, P>>) => Ret>(
  ...pattern: [first: P, ...values: Array<P>, f: Fn]
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Extract<R, Record<D, P>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Extract<R, Record<D, P>>>>,
  A | ReturnType<Fn>,
  Pr,
  Ret
> = internal.discriminator

/**
 * Matches values where a specified field starts with a given prefix.
 *
 * **Details**
 *
 * This function is useful for working with discriminated unions where the
 * discriminant field follows a hierarchical or namespaced structure. It allows
 * you to match values based on whether the specified field starts with a given
 * prefix, making it easier to handle grouped cases.
 *
 * Instead of checking for exact matches, this function lets you match values
 * that share a common prefix. For example, if your discriminant field contains
 * hierarchical names like `"A"`, `"A.A"`, and `"B"`, you can match all values
 * starting with `"A"` using a single rule.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ type: "A" } | { type: "B" } | { type: "A.A" } | {}>(),
 *   Match.discriminatorStartsWith("type")("A", (_) => 1 as const),
 *   Match.discriminatorStartsWith("type")("B", (_) => 2 as const),
 *   Match.orElse((_) => 3 as const)
 * )
 *
 * console.log(match({ type: "A" })) // 1
 * console.log(match({ type: "B" })) // 2
 * console.log(match({ type: "A.A" })) // 1
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const discriminatorStartsWith: <D extends string>(
  field: D
) => <R, P extends string, Ret, Fn extends (_: Extract<R, Record<D, `${P}${string}`>>) => Ret>(
  pattern: P,
  f: Fn
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Extract<R, Record<D, `${P}${string}`>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Extract<R, Record<D, `${P}${string}`>>>>,
  A | ReturnType<Fn>,
  Pr,
  Ret
> = internal.discriminatorStartsWith

/**
 * Matches values based on a field that serves as a discriminator, mapping each
 * possible value to a corresponding handler.
 *
 * **Details**
 *
 * This function simplifies working with discriminated unions by letting you
 * define a set of handlers for each possible value of a given field. Instead of
 * chaining multiple calls to {@link discriminator}, this function allows
 * defining all possible cases at once using an object where the keys are the
 * possible values of the field, and the values are the corresponding handler
 * functions.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ type: "A"; a: string } | { type: "B"; b: number } | { type: "C"; c: boolean }>(),
 *   Match.discriminators("type")({
 *     A: (a) => a.a,
 *     B: (b) => b.b,
 *     C: (c) => c.c
 *   }),
 *   Match.exhaustive
 * )
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const discriminators: <D extends string>(
  field: D
) => <
  R,
  Ret,
  P extends
    & { readonly [Tag in Types.Tags<D, R> & string]?: ((_: Extract<R, Record<D, Tag>>) => Ret) | undefined }
    & { readonly [Tag in Exclude<keyof P, Types.Tags<D, R>>]: never }
>(
  fields: P
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Extract<R, Record<D, keyof P>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Extract<R, Record<D, keyof P>>>>,
  A | ReturnType<P[keyof P] & {}>,
  Pr,
  Ret
> = internal.discriminators

/**
 * Matches values based on a discriminator field and **ensures all cases are
 * handled**.
 *
 * **Details*+
 *
 * This function is similar to {@link discriminators}, but **requires that all
 * possible cases** are explicitly handled. It is useful when working with
 * discriminated unions, where a specific field (e.g., `"type"`) determines the
 * shape of an object. Each possible value of the field must have a
 * corresponding handler, ensuring **exhaustiveness checking** at compile time.
 *
 * This function **does not require** `Match.exhaustive` at the end of the
 * pipeline because it enforces exhaustiveness by design.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ type: "A"; a: string } | { type: "B"; b: number } | { type: "C"; c: boolean }>(),
 *   Match.discriminatorsExhaustive("type")({
 *     A: (a) => a.a,
 *     B: (b) => b.b,
 *     C: (c) => c.c
 *   })
 * )
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const discriminatorsExhaustive: <D extends string>(
  field: D
) => <
  R,
  Ret,
  P extends
    & { readonly [Tag in Types.Tags<D, R> & string]: (_: Extract<R, Record<D, Tag>>) => Ret }
    & { readonly [Tag in Exclude<keyof P, Types.Tags<D, R>>]: never }
>(
  fields: P
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => [Pr] extends [never] ? (u: I) => Unify<A | ReturnType<P[keyof P]>> : Unify<A | ReturnType<P[keyof P]>> =
  internal.discriminatorsExhaustive

/**
 * The `Match.tag` function allows pattern matching based on the `_tag` field in
 * a [Discriminated Union](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions).
 * You can specify multiple tags to match within a single pattern.
 *
 * **Note**
 *
 * The `Match.tag` function relies on the convention within the Effect ecosystem
 * of naming the tag field as `"_tag"`. Ensure that your discriminated unions
 * follow this naming convention for proper functionality.
 *
 * **Example** (Matching a Discriminated Union by Tag)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * type Event =
 *   | { readonly _tag: "fetch" }
 *   | { readonly _tag: "success"; readonly data: string }
 *   | { readonly _tag: "error"; readonly error: Error }
 *   | { readonly _tag: "cancel" }
 *
 * // Create a Matcher for Either<number, string>
 * const match = Match.type<Event>().pipe(
 *   // Match either "fetch" or "success"
 *   Match.tag("fetch", "success", () => `Ok!`),
 *   // Match "error" and extract the error message
 *   Match.tag("error", (event) => `Error: ${event.error.message}`),
 *   // Match "cancel"
 *   Match.tag("cancel", () => "Cancelled"),
 *   Match.exhaustive
 * )
 *
 * console.log(match({ _tag: "success", data: "Hello" }))
 * // Output: "Ok!"
 *
 * console.log(match({ _tag: "error", error: new Error("Oops!") }))
 * // Output: "Error: Oops!"
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const tag: <
  R,
  P extends Types.Tags<"_tag", R> & string,
  Ret,
  Fn extends (_: Extract<R, Record<"_tag", P>>) => Ret
>(
  ...pattern: [first: P, ...values: Array<P>, f: Fn]
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Extract<R, Record<"_tag", P>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Extract<R, Record<"_tag", P>>>>,
  ReturnType<Fn> | A,
  Pr,
  Ret
> = internal.tag

/**
 * Matches values where the `_tag` field starts with a given prefix.
 *
 * **Details**
 *
 * This function allows you to match on values in a **discriminated union**
 * based on whether the `_tag` field starts with a specified prefix. It is
 * useful for handling hierarchical or namespaced tags, where multiple related
 * cases share a common prefix.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ _tag: "A" } | { _tag: "B" } | { _tag: "A.A" } | {}>(),
 *   Match.tagStartsWith("A", (_) => 1 as const),
 *   Match.tagStartsWith("B", (_) => 2 as const),
 *   Match.orElse((_) => 3 as const)
 * )
 *
 * console.log(match({ _tag: "A" })) // 1
 * console.log(match({ _tag: "B" })) // 2
 * console.log(match({ _tag: "A.A" })) // 1
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const tagStartsWith: <
  R,
  P extends string,
  Ret,
  Fn extends (_: Extract<R, Record<"_tag", `${P}${string}`>>) => Ret
>(
  pattern: P,
  f: Fn
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Extract<R, Record<"_tag", `${P}${string}`>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Extract<R, Record<"_tag", `${P}${string}`>>>>,
  ReturnType<Fn> | A,
  Pr,
  Ret
> = internal.tagStartsWith

/**
 * Matches values based on their `_tag` field, mapping each tag to a
 * corresponding handler.
 *
 * **Details**
 *
 * This function provides a way to handle discriminated unions by mapping `_tag`
 * values to specific functions. Each handler receives the matched value and
 * returns a transformed result. If all possible tags are handled, you can
 * enforce exhaustiveness using `Match.exhaustive` to ensure no case is missed.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ _tag: "A"; a: string } | { _tag: "B"; b: number } | { _tag: "C"; c: boolean }>(),
 *   Match.tags({
 *     A: (a) => a.a,
 *     B: (b) => b.b,
 *     C: (c) => c.c
 *   }),
 *   Match.exhaustive
 * )
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const tags: <
  R,
  Ret,
  P extends
    & { readonly [Tag in Types.Tags<"_tag", R> & string]?: ((_: Extract<R, Record<"_tag", Tag>>) => Ret) | undefined }
    & { readonly [Tag in Exclude<keyof P, Types.Tags<"_tag", R>>]: never }
>(
  fields: P
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddWithout<F, Extract<R, Record<"_tag", keyof P>>>,
  Types.ApplyFilters<I, Types.AddWithout<F, Extract<R, Record<"_tag", keyof P>>>>,
  A | ReturnType<P[keyof P] & {}>,
  Pr,
  Ret
> = internal.tags

/**
 * Matches values based on their `_tag` field and requires handling of all
 * possible cases.
 *
 * **Details**
 *
 * This function is designed for **discriminated unions** where every possible
 * `_tag` value must have a corresponding handler. Unlike {@link tags}, this
 * function ensures **exhaustiveness**, meaning all cases must be explicitly
 * handled. If a `_tag` value is missing from the mapping, TypeScript will
 * report an error.
 *
 * @example
 * ```ts
 * import { Match, pipe } from "effect"
 *
 * const match = pipe(
 *   Match.type<{ _tag: "A"; a: string } | { _tag: "B"; b: number } | { _tag: "C"; c: boolean }>(),
 *   Match.tagsExhaustive({
 *     A: (a) => a.a,
 *     B: (b) => b.b,
 *     C: (c) => c.c
 *   })
 * )
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const tagsExhaustive: <
  R,
  Ret,
  P extends
    & { readonly [Tag in Types.Tags<"_tag", R> & string]: (_: Extract<R, Record<"_tag", Tag>>) => Ret }
    & { readonly [Tag in Exclude<keyof P, Types.Tags<"_tag", R>>]: never }
>(
  fields: P
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => [Pr] extends [never] ? (u: I) => Unify<A | ReturnType<P[keyof P]>> : Unify<A | ReturnType<P[keyof P]>> =
  internal.tagsExhaustive

/**
 * Excludes a specific value from matching while allowing all others.
 *
 * **Details**
 *
 * This function is useful when you need to **handle all values except one or
 * more specific cases**. Instead of listing all possible matches manually, this
 * function simplifies the logic by allowing you to specify values to exclude.
 * Any excluded value will bypass the provided function and continue matching
 * through other cases.
 *
 * **Example** (Ignoring a Specific Value)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * // Create a matcher for string or number values
 * const match = Match.type<string | number>().pipe(
 *   // Match any value except "hi", returning "ok"
 *   Match.not("hi", () => "ok"),
 *   // Fallback case for when the value is "hi"
 *   Match.orElse(() => "fallback")
 * )
 *
 * console.log(match("hello"))
 * // Output: "ok"
 *
 * console.log(match("hi"))
 * // Output: "fallback"
 * ```
 *
 * @category Defining patterns
 * @since 1.0.0
 */
export const not: <
  R,
  const P extends Types.PatternPrimitive<R> | Types.PatternBase<R>,
  Ret,
  Fn extends (_: Types.NotMatch<R, P>) => Ret
>(
  pattern: P,
  f: Fn
) => <I, F, A, Pr>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => Matcher<
  I,
  Types.AddOnly<F, Types.WhenMatch<R, P>>,
  Types.ApplyFilters<I, Types.AddOnly<F, Types.WhenMatch<R, P>>>,
  A | ReturnType<Fn>,
  Pr,
  Ret
> = internal.not

/**
 * Matches non-empty strings.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const nonEmptyString: SafeRefinement<string, never> = internal.nonEmptyString

/**
 * Matches a specific set of literal values (e.g., `Match.is("a", 42, true)`).
 *
 * @category Predicates
 * @since 1.0.0
 */
export const is: <
  Literals extends ReadonlyArray<string | number | bigint | boolean | null>
>(...literals: Literals) => SafeRefinement<Literals[number]> = internal.is

/**
 * Matches values of type `string`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const string: Predicate.Refinement<unknown, string> = Predicate.isString

/**
 * Matches values of type `number`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const number: Predicate.Refinement<unknown, number> = Predicate.isNumber

/**
 * Matches any value without restrictions.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const any: SafeRefinement<unknown, any> = internal.any

/**
 * Matches any defined (non-null and non-undefined) value.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const defined: <A>(u: A) => u is A & {} = internal.defined

/**
 * Matches values of type `boolean`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const boolean: Predicate.Refinement<unknown, boolean> = Predicate.isBoolean

const _undefined: Predicate.Refinement<unknown, undefined> = Predicate.isUndefined
export {
  /**
   * Matches the value `undefined`.
   *
   * @category Predicates
   * @since 1.0.0
   */
  _undefined as undefined
}

const _null: Predicate.Refinement<unknown, null> = Predicate.isNull
export {
  /**
   * Matches the value `null`.
   *
   * @category Predicates
   * @since 1.0.0
   */
  _null as null
}

/**
 * Matches values of type `bigint`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const bigint: Predicate.Refinement<unknown, bigint> = Predicate.isBigInt

/**
 * Matches values of type `symbol`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const symbol: Predicate.Refinement<unknown, symbol> = Predicate.isSymbol

/**
 * Matches values that are instances of `Date`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const date: Predicate.Refinement<unknown, Date> = Predicate.isDate

/**
 * Matches objects where keys are `string` or `symbol` and values are `unknown`.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const record: Predicate.Refinement<unknown, { [x: string | symbol]: unknown }> = Predicate.isRecord

/**
 * Matches instances of a given class.
 *
 * @category Predicates
 * @since 1.0.0
 */
export const instanceOf: <A extends abstract new(...args: any) => any>(
  constructor: A
) => SafeRefinement<InstanceType<A>, never> = internal.instanceOf

/**
 * @category Predicates
 * @since 1.0.0
 */
export const instanceOfUnsafe: <A extends abstract new(...args: any) => any>(
  constructor: A
) => SafeRefinement<InstanceType<A>, InstanceType<A>> = internal.instanceOf

/**
 * Provides a fallback value when no patterns match.
 *
 * **Details**
 *
 * This function ensures that a matcher always returns a valid result, even if
 * no defined patterns match. It acts as a default case, similar to the
 * `default` clause in a `switch` statement or the final `else` in an `if-else`
 * chain.
 *
 * **Example** (Providing a Default Value When No Patterns Match)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * // Create a matcher for string or number values
 * const match = Match.type<string | number>().pipe(
 *   // Match when the value is "a"
 *   Match.when("a", () => "ok"),
 *   // Fallback when no patterns match
 *   Match.orElse(() => "fallback")
 * )
 *
 * console.log(match("a"))
 * // Output: "ok"
 *
 * console.log(match("b"))
 * // Output: "fallback"
 * ```
 *
 * @category Completion
 * @since 1.0.0
 */
export const orElse: <RA, Ret, F extends (_: RA) => Ret>(
  f: F
) => <I, R, A, Pr>(
  self: Matcher<I, R, RA, A, Pr, Ret>
) => [Pr] extends [never] ? (input: I) => Unify<ReturnType<F> | A> : Unify<ReturnType<F> | A> = internal.orElse

// TODO(4.0): Rename to "orThrow"? Like Either.getOrThrow
/**
 * Throws an error if no pattern matches.
 *
 * **Details**
 *
 * This function finalizes a matcher by ensuring that if no patterns match, an
 * error is thrown. It is useful when all cases should be covered, and any
 * unexpected input should trigger an error instead of returning a default
 * value.
 *
 * When used, this function removes the need for an explicit fallback case and
 * ensures that an unmatched value is never silently ignored.
 *
 * @category Completion
 * @since 1.0.0
 */
export const orElseAbsurd: <I, R, RA, A, Pr, Ret>(
  self: Matcher<I, R, RA, A, Pr, Ret>
) => [Pr] extends [never] ? (input: I) => Unify<A> : Unify<A> = internal.orElseAbsurd

/**
 * Wraps the match result in an `Either`, distinguishing matched and unmatched
 * cases.
 *
 * **Details**
 *
 * This function ensures that the result of a matcher is always wrapped in an
 * `Either`, allowing clear differentiation between successful matches
 * (`Right(value)`) and cases where no pattern matched (`Left(unmatched
 * value)`).
 *
 * This approach is particularly useful when handling optional values or when an
 * unmatched case should be explicitly handled rather than returning a default
 * value or throwing an error.
 *
 * **Example** (Extracting a User Role with `Match.either`)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * type User = { readonly role: "admin" | "editor" | "viewer" }
 *
 * // Create a matcher to extract user roles
 * const getRole = Match.type<User>().pipe(
 *   Match.when({ role: "admin" }, () => "Has full access"),
 *   Match.when({ role: "editor" }, () => "Can edit content"),
 *   Match.either // Wrap the result in an Either
 * )
 *
 * console.log(getRole({ role: "admin" }))
 * // Output: { _id: 'Either', _tag: 'Right', right: 'Has full access' }
 *
 * console.log(getRole({ role: "viewer" }))
 * // Output: { _id: 'Either', _tag: 'Left', left: { role: 'viewer' } }
 * ```
 *
 * @category Completion
 * @since 1.0.0
 */
export const either: <I, F, R, A, Pr, Ret>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => [Pr] extends [never] ? (input: I) => Either.Either<Unify<A>, R> : Either.Either<Unify<A>, R> = internal.either

/**
 * Wraps the match result in an `Option`, representing an optional match.
 *
 * **Details**
 *
 * This function ensures that the result of a matcher is wrapped in an `Option`,
 * making it easy to handle cases where no pattern matches. If a match is found,
 * it returns `Some(value)`, otherwise, it returns `None`.
 *
 * This is useful in cases where a missing match is expected and should be
 * handled explicitly rather than throwing an error or returning a default
 * value.
 *
 * **Example** (Extracting a User Role with `Match.option`)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * type User = { readonly role: "admin" | "editor" | "viewer" }
 *
 * // Create a matcher to extract user roles
 * const getRole = Match.type<User>().pipe(
 *   Match.when({ role: "admin" }, () => "Has full access"),
 *   Match.when({ role: "editor" }, () => "Can edit content"),
 *   Match.option // Wrap the result in an Option
 * )
 *
 * console.log(getRole({ role: "admin" }))
 * // Output: { _id: 'Option', _tag: 'Some', value: 'Has full access' }
 *
 * console.log(getRole({ role: "viewer" }))
 * // Output: { _id: 'Option', _tag: 'None' }
 * ```
 *
 * @category Completion
 * @since 1.0.0
 */
export const option: <I, F, R, A, Pr, Ret>(
  self: Matcher<I, F, R, A, Pr, Ret>
) => [Pr] extends [never] ? (input: I) => Option.Option<Unify<A>> : Option.Option<Unify<A>> = internal.option

/**
 * The `Match.exhaustive` method finalizes the pattern matching process by
 * ensuring that all possible cases are accounted for. If any case is missing,
 * TypeScript will produce a type error. This is particularly useful when
 * working with unions, as it helps prevent unintended gaps in pattern matching.
 *
 * **Example** (Ensuring All Cases Are Covered)
 *
 * ```ts
 * import { Match } from "effect"
 *
 * // Create a matcher for string or number values
 * const match = Match.type<string | number>().pipe(
 *   // Match when the value is a number
 *   Match.when(Match.number, (n) => `number: ${n}`),
 *   // Mark the match as exhaustive, ensuring all cases are handled
 *   // TypeScript will throw an error if any case is missing
 *   // @ts-expect-error Type 'string' is not assignable to type 'never'
 *   Match.exhaustive
 * )
 * ```
 *
 * @category Completion
 * @since 1.0.0
 */
export const exhaustive: <I, F, A, Pr, Ret>(
  self: Matcher<I, F, never, A, Pr, Ret>
) => [Pr] extends [never] ? (u: I) => Unify<A> : Unify<A> = internal.exhaustive

/**
 * @since 1.0.0
 * @category Symbols
 */
export const SafeRefinementId = Symbol.for("effect/SafeRefinement")

/**
 * @since 1.0.0
 * @category Symbols
 */
export type SafeRefinementId = typeof SafeRefinementId

/**
 * @category Model
 * @since 1.0.0
 */
export interface SafeRefinement<in A, out R = A> {
  readonly [SafeRefinementId]: (a: A) => R
}

const Fail = Symbol.for("effect/Fail")
type Fail = typeof Fail

/**
 * @since 1.0.0
 */
export declare namespace Types {
  /**
   * @since 1.0.0
   */
  export type WhenMatch<R, P> =
    // check for any
    [0] extends [1 & R] ? ResolvePred<P> :
      P extends SafeRefinement<infer SP, never> ? SP
      : P extends Predicate.Refinement<infer _R, infer RP>
      // try to narrow refinement
        ? [Extract<R, RP>] extends [infer X] ? [X] extends [never]
            // fallback to original refinement
            ? RP
          : X
        : never
      : P extends PredicateA<infer PP> ? PP
      : ExtractMatch<R, P>

  /**
   * @since 1.0.0
   */
  export type NotMatch<R, P> = Exclude<R, ExtractMatch<R, PForNotMatch<P>>>

  type PForNotMatch<P> = [ToInvertedRefinement<P>] extends [infer X] ? X
    : never

  /**
   * @since 1.0.0
   */
  export type PForMatch<P> = [ResolvePred<P>] extends [infer X] ? X
    : never

  /**
   * @since 1.0.0
   */
  export type PForExclude<P> = [SafeRefinementR<ToSafeRefinement<P>>] extends [infer X] ? X
    : never

  // utilities
  type PredicateA<A> = Predicate.Predicate<A> | Predicate.Refinement<A, A>

  type SafeRefinementR<A> = A extends never ? never
    : A extends SafeRefinement<infer _, infer R> ? R
    : A extends Function ? A
    : A extends Record<string, any> ? { [K in keyof A]: SafeRefinementR<A[K]> }
    : A

  type ResolvePred<A, Input = any> = A extends never ? never
    : A extends SafeRefinement<infer _A, infer _R> ? _A
    : A extends Predicate.Refinement<Input, infer P> ? P
    : A extends Predicate.Predicate<infer P> ? P
    : A extends Record<string, any> ? { [K in keyof A]: ResolvePred<A[K]> }
    : A

  type ToSafeRefinement<A> = A extends never ? never
    : A extends Predicate.Refinement<any, infer P> ? SafeRefinement<P, P>
    : A extends Predicate.Predicate<infer P> ? SafeRefinement<P, never>
    : A extends SafeRefinement<any> ? A
    : A extends Record<string, any> ? { [K in keyof A]: ToSafeRefinement<A[K]> }
    : NonLiteralsTo<A, never>

  type ToInvertedRefinement<A> = A extends never ? never
    : A extends Predicate.Refinement<any, infer P> ? SafeRefinement<P>
    : A extends Predicate.Predicate<infer _P> ? SafeRefinement<never>
    : A extends SafeRefinement<infer _A, infer _R> ? SafeRefinement<_R>
    : A extends Record<string, any> ? { [K in keyof A]: ToInvertedRefinement<A[K]> }
    : NonLiteralsTo<A, never>

  type NonLiteralsTo<A, T> = [A] extends [string | number | boolean | bigint] ? [string] extends [A] ? T
    : [number] extends [A] ? T
    : [boolean] extends [A] ? T
    : [bigint] extends [A] ? T
    : A
    : A

  /**
   * @since 1.0.0
   */
  export type PatternBase<A> = A extends ReadonlyArray<infer _T> ? ReadonlyArray<any> | PatternPrimitive<A>
    : A extends Record<string, any> ? Partial<
        { [K in keyof A]: PatternPrimitive<A[K] & {}> | PatternBase<A[K] & {}> }
      >
    : never

  /**
   * @since 1.0.0
   */
  export type PatternPrimitive<A> = PredicateA<A> | A | SafeRefinement<any>

  /**
   * @since 1.0.0
   */
  export interface Without<out X> {
    readonly _tag: "Without"
    readonly _X: X
  }

  /**
   * @since 1.0.0
   */
  export interface Only<out X> {
    readonly _tag: "Only"
    readonly _X: X
  }

  /**
   * @since 1.0.0
   */
  export type AddWithout<A, X> = [A] extends [Without<infer WX>] ? Without<X | WX>
    : [A] extends [Only<infer OX>] ? Only<Exclude<OX, X>>
    : never

  /**
   * @since 1.0.0
   */
  export type AddOnly<A, X> = [A] extends [Without<infer WX>] ? [X] extends [WX] ? never
    : Only<X>
    : [A] extends [Only<infer OX>] ? [X] extends [OX] ? Only<X>
      : never
    : never

  /**
   * @since 1.0.0
   */
  export type ApplyFilters<I, A> = A extends Only<infer X> ? X
    : A extends Without<infer X> ? Exclude<I, X>
    : never

  /**
   * @since 1.0.0
   */
  export type Tags<D extends string, P> = P extends Record<D, infer X> ? X : never

  /**
   * @since 1.0.0
   */
  export type ArrayToIntersection<A extends ReadonlyArray<any>> = T.UnionToIntersection<
    A[number]
  >

  /**
   * @since 1.0.0
   */
  export type ExtractMatch<I, P> = [ExtractAndNarrow<I, P>] extends [infer EI] ? EI
    : never

  type Replace<A, B> = A extends Function ? A
    : A extends Record<string | number, any> ? { [K in keyof A]: K extends keyof B ? Replace<A[K], B[K]> : A[K] }
    : [B] extends [A] ? B
    : A

  type MaybeReplace<I, P> = [P] extends [I] ? P
    : [I] extends [P] ? Replace<I, P>
    : Fail

  type BuiltInObjects =
    | Function
    | Date
    | RegExp
    | Generator
    | { readonly [Symbol.toStringTag]: string }

  type IsPlainObject<T> = T extends BuiltInObjects ? false
    : T extends Record<string, any> ? true
    : false

  type Simplify<A> = { [K in keyof A]: A[K] } & {}

  type ExtractAndNarrow<Input, P> = P extends Predicate.Refinement<infer _In, infer _Out> ?
    _Out extends Input ? Extract<_Out, Input>
    : Extract<Input, _Out> :
    P extends SafeRefinement<infer _In, infer _R> ? [0] extends [1 & _R] ? Input
      : _In extends Input ? Extract<_In, Input>
      : Extract<Input, _In>
    : P extends Predicate.Predicate<infer _In> ? Extract<Input, _In>
    : Input extends infer I ? Exclude<
        I extends ReadonlyArray<any> ? P extends ReadonlyArray<any> ? {
              readonly [K in keyof I]: K extends keyof P ? ExtractAndNarrow<I[K], P[K]>
                : I[K]
            } extends infer R ? Fail extends R[keyof R] ? never
              : R
            : never
          : never
          : IsPlainObject<I> extends true ? string extends keyof I ? I extends P ? I
              : never
            : symbol extends keyof I ? I extends P ? I
              : never
            : Simplify<
              & { [RK in Extract<keyof I, keyof P>]-?: ExtractAndNarrow<I[RK], P[RK]> }
              & Omit<I, keyof P>
            > extends infer R ? keyof P extends NonFailKeys<R> ? R
              : never
            : never
          : MaybeReplace<I, P> extends infer R ? [I] extends [R] ? I
            : R
          : never,
        Fail
      > :
    never

  type NonFailKeys<A> = keyof A & {} extends infer K ? K extends keyof A ? A[K] extends Fail ? never : K
    : never :
    never
}
