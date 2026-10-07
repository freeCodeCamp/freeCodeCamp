"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flip = exports.dual = exports.constant = exports.constVoid = exports.constUndefined = exports.constTrue = exports.constNull = exports.constFalse = exports.compose = exports.apply = exports.absurd = exports.SK = void 0;
exports.flow = flow;
exports.isFunction = exports.identity = exports.hole = void 0;
exports.pipe = pipe;
exports.untupled = exports.unsafeCoerce = exports.tupled = exports.satisfies = void 0;
/**
 * Tests if a value is a `function`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isFunction } from "effect/Predicate"
 *
 * assert.deepStrictEqual(isFunction(isFunction), true)
 * assert.deepStrictEqual(isFunction("function"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isFunction = input => typeof input === "function";
/**
 * Creates a function that can be used in a data-last (aka `pipe`able) or
 * data-first style.
 *
 * The first parameter to `dual` is either the arity of the uncurried function
 * or a predicate that determines if the function is being used in a data-first
 * or data-last style.
 *
 * Using the arity is the most common use case, but there are some cases where
 * you may want to use a predicate. For example, if you have a function that
 * takes an optional argument, you can use a predicate to determine if the
 * function is being used in a data-first or data-last style.
 *
 * You can pass either the arity of the uncurried function or a predicate
 * which determines if the function is being used in a data-first or
 * data-last style.
 *
 * **Example** (Using arity to determine data-first or data-last style)
 *
 * ```ts
 * import { dual, pipe } from "effect/Function"
 *
 * const sum = dual<
 *   (that: number) => (self: number) => number,
 *   (self: number, that: number) => number
 * >(2, (self, that) => self + that)
 *
 * console.log(sum(2, 3)) // 5
 * console.log(pipe(2, sum(3))) // 5
 * ```
 *
 * **Example** (Using call signatures to define the overloads)
 *
 * ```ts
 * import { dual, pipe } from "effect/Function"
 *
 * const sum: {
 *   (that: number): (self: number) => number
 *   (self: number, that: number): number
 * } = dual(2, (self: number, that: number): number => self + that)
 *
 * console.log(sum(2, 3)) // 5
 * console.log(pipe(2, sum(3))) // 5
 * ```
 *
 * **Example** (Using a predicate to determine data-first or data-last style)
 *
 * ```ts
 * import { dual, pipe } from "effect/Function"
 *
 * const sum = dual<
 *   (that: number) => (self: number) => number,
 *   (self: number, that: number) => number
 * >(
 *   (args) => args.length === 2,
 *   (self, that) => self + that
 * )
 *
 * console.log(sum(2, 3)) // 5
 * console.log(pipe(2, sum(3))) // 5
 * ```
 *
 * @since 2.0.0
 */
exports.isFunction = isFunction;
const dual = function (arity, body) {
  if (typeof arity === "function") {
    return function () {
      if (arity(arguments)) {
        // @ts-expect-error
        return body.apply(this, arguments);
      }
      return self => body(self, ...arguments);
    };
  }
  switch (arity) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${arity}`);
    case 2:
      return function (a, b) {
        if (arguments.length >= 2) {
          return body(a, b);
        }
        return function (self) {
          return body(self, a);
        };
      };
    case 3:
      return function (a, b, c) {
        if (arguments.length >= 3) {
          return body(a, b, c);
        }
        return function (self) {
          return body(self, a, b);
        };
      };
    case 4:
      return function (a, b, c, d) {
        if (arguments.length >= 4) {
          return body(a, b, c, d);
        }
        return function (self) {
          return body(self, a, b, c);
        };
      };
    case 5:
      return function (a, b, c, d, e) {
        if (arguments.length >= 5) {
          return body(a, b, c, d, e);
        }
        return function (self) {
          return body(self, a, b, c, d);
        };
      };
    default:
      return function () {
        if (arguments.length >= arity) {
          // @ts-expect-error
          return body.apply(this, arguments);
        }
        const args = arguments;
        return function (self) {
          return body(self, ...args);
        };
      };
  }
};
/**
 * Apply a function to given values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, apply } from "effect/Function"
 * import { length } from "effect/String"
 *
 * assert.deepStrictEqual(pipe(length, apply("hello")), 5)
 * ```
 *
 * @since 2.0.0
 */
exports.dual = dual;
const apply = (...a) => self => self(...a);
/**
 * The identity function, i.e. A function that returns its input argument.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { identity } from "effect/Function"
 *
 * assert.deepStrictEqual(identity(5), 5)
 * ```
 *
 * @since 2.0.0
 */
exports.apply = apply;
const identity = a => a;
/**
 * A function that ensures that the type of an expression matches some type,
 * without changing the resulting type of that expression.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { satisfies } from "effect/Function"
 *
 * const test1 = satisfies<number>()(5 as const)
 *     //^? const test: 5
 *     // @ts-expect-error
 * const test2 = satisfies<string>()(5)
 *     //^? Argument of type 'number' is not assignable to parameter of type 'string'
 *
 * assert.deepStrictEqual(satisfies<number>()(5), 5)
 * ```
 *
 * @since 2.0.0
 */
exports.identity = identity;
const satisfies = () => b => b;
/**
 * Casts the result to the specified type.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeCoerce, identity } from "effect/Function"
 *
 * assert.deepStrictEqual(unsafeCoerce, identity)
 * ```
 *
 * @since 2.0.0
 */
exports.satisfies = satisfies;
const unsafeCoerce = exports.unsafeCoerce = identity;
/**
 * Creates a constant value that never changes.
 *
 * This is useful when you want to pass a value to a higher-order function (a function that takes another function as its argument)
 * and want that inner function to always use the same value, no matter how many times it is called.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { constant } from "effect/Function"
 *
 * const constNull = constant(null)
 *
 * assert.deepStrictEqual(constNull(), null)
 * assert.deepStrictEqual(constNull(), null)
 * ```
 *
 * @since 2.0.0
 */
const constant = value => () => value;
/**
 * A thunk that returns always `true`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { constTrue } from "effect/Function"
 *
 * assert.deepStrictEqual(constTrue(), true)
 * ```
 *
 * @since 2.0.0
 */
exports.constant = constant;
const constTrue = exports.constTrue = /*#__PURE__*/constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { constFalse } from "effect/Function"
 *
 * assert.deepStrictEqual(constFalse(), false)
 * ```
 *
 * @since 2.0.0
 */
const constFalse = exports.constFalse = /*#__PURE__*/constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { constNull } from "effect/Function"
 *
 * assert.deepStrictEqual(constNull(), null)
 * ```
 *
 * @since 2.0.0
 */
const constNull = exports.constNull = /*#__PURE__*/constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { constUndefined } from "effect/Function"
 *
 * assert.deepStrictEqual(constUndefined(), undefined)
 * ```
 *
 * @since 2.0.0
 */
const constUndefined = exports.constUndefined = /*#__PURE__*/constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { constVoid } from "effect/Function"
 *
 * assert.deepStrictEqual(constVoid(), undefined)
 * ```
 *
 * @since 2.0.0
 */
const constVoid = exports.constVoid = constUndefined;
/**
 * Reverses the order of arguments for a curried function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { flip } from "effect/Function"
 *
 * const f = (a: number) => (b: string) => a - b.length
 *
 * assert.deepStrictEqual(flip(f)('aaa')(2), -1)
 * ```
 *
 * @since 2.0.0
 */
const flip = f => (...b) => (...a) => f(...a)(...b);
/**
 * Composes two functions, `ab` and `bc` into a single function that takes in an argument `a` of type `A` and returns a result of type `C`.
 * The result is obtained by first applying the `ab` function to `a` and then applying the `bc` function to the result of `ab`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { compose } from "effect/Function"
 *
 * const increment = (n: number) => n + 1;
 * const square = (n: number) => n * n;
 *
 * assert.strictEqual(compose(increment, square)(2), 9);
 * ```
 *
 * @since 2.0.0
 */
exports.flip = flip;
const compose = exports.compose = /*#__PURE__*/dual(2, (ab, bc) => a => bc(ab(a)));
/**
 * The `absurd` function is a stub for cases where a value of type `never` is encountered in your code,
 * meaning that it should be impossible for this code to be executed.
 *
 * This function is particularly useful when it's necessary to specify that certain cases are impossible.
 *
 * @since 2.0.0
 */
const absurd = _ => {
  throw new Error("Called `absurd` function which should be uncallable");
};
/**
 * Creates a   version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { tupled } from "effect/Function"
 *
 * const sumTupled = tupled((x: number, y: number): number => x + y)
 *
 * assert.deepStrictEqual(sumTupled([1, 2]), 3)
 * ```
 *
 * @since 2.0.0
 */
exports.absurd = absurd;
const tupled = f => a => f(...a);
/**
 * Inverse function of `tupled`
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { untupled } from "effect/Function"
 *
 * const getFirst = untupled(<A, B>(tuple: [A, B]): A => tuple[0])
 *
 * assert.deepStrictEqual(getFirst(1, 2), 1)
 * ```
 *
 * @since 2.0.0
 */
exports.tupled = tupled;
const untupled = f => (...a) => f(a);
exports.untupled = untupled;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default:
      {
        let ret = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
          ret = arguments[i](ret);
        }
        return ret;
      }
  }
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function () {
        return bc(ab.apply(this, arguments));
      };
    case 3:
      return function () {
        return cd(bc(ab.apply(this, arguments)));
      };
    case 4:
      return function () {
        return de(cd(bc(ab.apply(this, arguments))));
      };
    case 5:
      return function () {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };
    case 6:
      return function () {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };
    case 7:
      return function () {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };
    case 8:
      return function () {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };
    case 9:
      return function () {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }
  return;
}
/**
 * Type hole simulation.
 *
 * @since 2.0.0
 */
const hole = exports.hole = /*#__PURE__*/unsafeCoerce(absurd);
/**
 * The SK combinator, also known as the "S-K combinator" or "S-combinator", is a fundamental combinator in the
 * lambda calculus and the SKI combinator calculus.
 *
 * This function is useful for discarding the first argument passed to it and returning the second argument.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { SK } from "effect/Function";
 *
 * assert.deepStrictEqual(SK(0, "hello"), "hello")
 * ```
 *
 * @since 2.0.0
 */
const SK = (_, b) => b;
exports.SK = SK;
//# sourceMappingURL=Function.js.map