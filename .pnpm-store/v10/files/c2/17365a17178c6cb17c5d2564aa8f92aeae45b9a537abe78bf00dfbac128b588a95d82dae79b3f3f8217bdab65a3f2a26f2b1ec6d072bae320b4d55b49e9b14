"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withReturnType = exports.whenOr = exports.whenAnd = exports.when = exports.valueTags = exports.value = exports.undefined = exports.typeTags = exports.type = exports.tagsExhaustive = exports.tags = exports.tagStartsWith = exports.tag = exports.symbol = exports.string = exports.record = exports.orElseAbsurd = exports.orElse = exports.option = exports.number = exports.null = exports.not = exports.nonEmptyString = exports.is = exports.instanceOfUnsafe = exports.instanceOf = exports.exhaustive = exports.either = exports.discriminatorsExhaustive = exports.discriminators = exports.discriminatorStartsWith = exports.discriminator = exports.defined = exports.date = exports.boolean = exports.bigint = exports.any = exports.SafeRefinementId = exports.MatcherTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/matcher.js"));
var Predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @category Symbols
 * @since 1.0.0
 */
const MatcherTypeId = exports.MatcherTypeId = internal.TypeId;
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
const type = exports.type = internal.type;
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
const value = exports.value = internal.value;
/**
 * @category Creating a matcher
 * @since 1.0.0
 */
const valueTags = exports.valueTags = internal.valueTags;
/**
 * @category Creating a matcher
 * @since 1.0.0
 */
const typeTags = exports.typeTags = internal.typeTags;
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
const withReturnType = exports.withReturnType = internal.withReturnType;
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
const when = exports.when = internal.when;
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
const whenOr = exports.whenOr = internal.whenOr;
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
const whenAnd = exports.whenAnd = internal.whenAnd;
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
const discriminator = exports.discriminator = internal.discriminator;
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
const discriminatorStartsWith = exports.discriminatorStartsWith = internal.discriminatorStartsWith;
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
const discriminators = exports.discriminators = internal.discriminators;
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
const discriminatorsExhaustive = exports.discriminatorsExhaustive = internal.discriminatorsExhaustive;
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
const tag = exports.tag = internal.tag;
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
const tagStartsWith = exports.tagStartsWith = internal.tagStartsWith;
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
const tags = exports.tags = internal.tags;
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
const tagsExhaustive = exports.tagsExhaustive = internal.tagsExhaustive;
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
const not = exports.not = internal.not;
/**
 * Matches non-empty strings.
 *
 * @category Predicates
 * @since 1.0.0
 */
const nonEmptyString = exports.nonEmptyString = internal.nonEmptyString;
/**
 * Matches a specific set of literal values (e.g., `Match.is("a", 42, true)`).
 *
 * @category Predicates
 * @since 1.0.0
 */
const is = exports.is = internal.is;
/**
 * Matches values of type `string`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const string = exports.string = Predicate.isString;
/**
 * Matches values of type `number`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const number = exports.number = Predicate.isNumber;
/**
 * Matches any value without restrictions.
 *
 * @category Predicates
 * @since 1.0.0
 */
const any = exports.any = internal.any;
/**
 * Matches any defined (non-null and non-undefined) value.
 *
 * @category Predicates
 * @since 1.0.0
 */
const defined = exports.defined = internal.defined;
/**
 * Matches values of type `boolean`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const boolean = exports.boolean = Predicate.isBoolean;
const _undefined = exports.undefined = Predicate.isUndefined;
const _null = exports.null = Predicate.isNull;
/**
 * Matches values of type `bigint`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const bigint = exports.bigint = Predicate.isBigInt;
/**
 * Matches values of type `symbol`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const symbol = exports.symbol = Predicate.isSymbol;
/**
 * Matches values that are instances of `Date`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const date = exports.date = Predicate.isDate;
/**
 * Matches objects where keys are `string` or `symbol` and values are `unknown`.
 *
 * @category Predicates
 * @since 1.0.0
 */
const record = exports.record = Predicate.isRecord;
/**
 * Matches instances of a given class.
 *
 * @category Predicates
 * @since 1.0.0
 */
const instanceOf = exports.instanceOf = internal.instanceOf;
/**
 * @category Predicates
 * @since 1.0.0
 */
const instanceOfUnsafe = exports.instanceOfUnsafe = internal.instanceOf;
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
const orElse = exports.orElse = internal.orElse;
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
const orElseAbsurd = exports.orElseAbsurd = internal.orElseAbsurd;
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
const either = exports.either = internal.either;
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
const option = exports.option = internal.option;
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
const exhaustive = exports.exhaustive = internal.exhaustive;
/**
 * @since 1.0.0
 * @category Symbols
 */
const SafeRefinementId = exports.SafeRefinementId = /*#__PURE__*/Symbol.for("effect/SafeRefinement");
const Fail = /*#__PURE__*/Symbol.for("effect/Fail");
//# sourceMappingURL=Match.js.map