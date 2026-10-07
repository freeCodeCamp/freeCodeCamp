"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.void = exports.try = exports.transposeOption = exports.transposeMapOption = exports.right = exports.orElse = exports.merge = exports.match = exports.mapLeft = exports.mapBoth = exports.map = exports.liftPredicate = exports.let = exports.left = exports.isRight = exports.isLeft = exports.isEither = exports.getRight = exports.getOrUndefined = exports.getOrThrowWith = exports.getOrThrow = exports.getOrNull = exports.getOrElse = exports.getLeft = exports.getEquivalence = exports.gen = exports.fromOption = exports.fromNullable = exports.flip = exports.flatMap = exports.filterOrLeft = exports.bindTo = exports.bind = exports.ap = exports.andThen = exports.all = exports.TypeId = exports.Do = void 0;
var Equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var doNotation = _interopRequireWildcard(require("./internal/doNotation.js"));
var either = _interopRequireWildcard(require("./internal/either.js"));
var option_ = _interopRequireWildcard(require("./internal/option.js"));
var _Predicate = require("./Predicate.js");
var Gen = _interopRequireWildcard(require("./Utils.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @category symbols
 * @since 2.0.0
 */
const TypeId = exports.TypeId = either.TypeId;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 2.0.0
 */
const right = exports.right = either.right;
const void_ = exports.void = /*#__PURE__*/right(void 0);
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 2.0.0
 */
const left = exports.left = either.left;
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
const fromNullable = exports.fromNullable = /*#__PURE__*/(0, _Function.dual)(2, (self, onNullable) => self == null ? left(onNullable(self)) : right(self));
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
const fromOption = exports.fromOption = either.fromOption;
const try_ = evaluate => {
  if ((0, _Predicate.isFunction)(evaluate)) {
    try {
      return right(evaluate());
    } catch (e) {
      return left(e);
    }
  } else {
    try {
      return right(evaluate.try());
    } catch (e) {
      return left(evaluate.catch(e));
    }
  }
};
exports.try = try_;
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
const isEither = exports.isEither = either.isEither;
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
const isLeft = exports.isLeft = either.isLeft;
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
const isRight = exports.isRight = either.isRight;
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
const getRight = exports.getRight = either.getRight;
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
const getLeft = exports.getLeft = either.getLeft;
/**
 * @category equivalence
 * @since 2.0.0
 */
const getEquivalence = ({
  left,
  right
}) => Equivalence.make((x, y) => isLeft(x) ? isLeft(y) && left(x.left, y.left) : isRight(y) && right(x.right, y.right));
/**
 * @category mapping
 * @since 2.0.0
 */
exports.getEquivalence = getEquivalence;
const mapBoth = exports.mapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onLeft,
  onRight
}) => isLeft(self) ? left(onLeft(self.left)) : right(onRight(self.right)));
/**
 * Maps the `Left` side of an `Either` value to a new `Either` value.
 *
 * @category mapping
 * @since 2.0.0
 */
const mapLeft = exports.mapLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => isLeft(self) ? left(f(self.left)) : right(self.right));
/**
 * Maps the `Right` side of an `Either` value to a new `Either` value.
 *
 * @category mapping
 * @since 2.0.0
 */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => isRight(self) ? right(f(self.right)) : left(self.left));
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
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onLeft,
  onRight
}) => isLeft(self) ? onLeft(self.left) : onRight(self.right));
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
const liftPredicate = exports.liftPredicate = /*#__PURE__*/(0, _Function.dual)(3, (a, predicate, orLeftWith) => predicate(a) ? right(a) : left(orLeftWith(a)));
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
const filterOrLeft = exports.filterOrLeft = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, orLeftWith) => flatMap(self, r => predicate(r) ? right(r) : left(orLeftWith(r))));
/**
 * @category getters
 * @since 2.0.0
 */
const merge = exports.merge = /*#__PURE__*/match({
  onLeft: _Function.identity,
  onRight: _Function.identity
});
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
const getOrElse = exports.getOrElse = /*#__PURE__*/(0, _Function.dual)(2, (self, onLeft) => isLeft(self) ? onLeft(self.left) : self.right);
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
const getOrNull = exports.getOrNull = /*#__PURE__*/getOrElse(_Function.constNull);
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
const getOrUndefined = exports.getOrUndefined = /*#__PURE__*/getOrElse(_Function.constUndefined);
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
const getOrThrowWith = exports.getOrThrowWith = /*#__PURE__*/(0, _Function.dual)(2, (self, onLeft) => {
  if (isRight(self)) {
    return self.right;
  }
  throw onLeft(self.left);
});
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
const getOrThrow = exports.getOrThrow = /*#__PURE__*/getOrThrowWith(() => new Error("getOrThrow called on a Left"));
/**
 * Returns `self` if it is a `Right` or `that` otherwise.
 *
 * @category error handling
 * @since 2.0.0
 */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => isLeft(self) ? that(self.left) : right(self.right));
/**
 * @category sequencing
 * @since 2.0.0
 */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => isLeft(self) ? left(self.left) : f(self.right));
/**
 * Executes a sequence of two `Either`s. The second `Either` can be dependent on the result of the first `Either`.
 *
 * @category sequencing
 * @since 2.0.0
 */
const andThen = exports.andThen = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(self, a => {
  const b = (0, _Predicate.isFunction)(f) ? f(a) : f;
  return isEither(b) ? b : right(b);
}));
/**
 * @category zipping
 * @since 2.0.0
 */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => flatMap(self, r => map(that, r2 => f(r, r2))));
/**
 * @category combining
 * @since 2.0.0
 */
const ap = exports.ap = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => zipWith(self, that, (f, a) => f(a)));
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
const all = input => {
  if (Symbol.iterator in input) {
    const out = [];
    for (const e of input) {
      if (isLeft(e)) {
        return e;
      }
      out.push(e.right);
    }
    return right(out);
  }
  const out = {};
  for (const key of Object.keys(input)) {
    const e = input[key];
    if (isLeft(e)) {
      return e;
    }
    out[key] = e.right;
  }
  return right(out);
};
/**
 * Returns an `Either` that swaps the error/success cases. This allows you to
 * use all methods on the error channel, possibly before flipping back.
 *
 * @since 2.0.0
 * @category mapping
 */
exports.all = all;
const flip = self => isLeft(self) ? right(self.left) : left(self.right);
exports.flip = flip;
const adapter = /*#__PURE__*/Gen.adapter();
/**
 * @category generators
 * @since 2.0.0
 */
const gen = (...args) => {
  const f = args.length === 1 ? args[0] : args[1].bind(args[0]);
  const iterator = f(adapter);
  let state = iterator.next();
  while (!state.done) {
    const current = Gen.isGenKind(state.value) ? state.value.value : Gen.yieldWrapGet(state.value);
    if (isLeft(current)) {
      return current;
    }
    state = iterator.next(current.right);
  }
  return right(state.value);
};
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
exports.gen = gen;
const Do = exports.Do = /*#__PURE__*/right({});
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
const bind = exports.bind = /*#__PURE__*/doNotation.bind(map, flatMap);
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
const bindTo = exports.bindTo = /*#__PURE__*/doNotation.bindTo(map);
const let_ = exports.let = /*#__PURE__*/doNotation.let_(map);
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
const transposeOption = self => {
  return option_.isNone(self) ? right(option_.none) : map(self.value, option_.some);
};
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
exports.transposeOption = transposeOption;
const transposeMapOption = exports.transposeMapOption = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => option_.isNone(self) ? right(option_.none) : map(f(self.value), option_.some));
//# sourceMappingURL=Either.js.map