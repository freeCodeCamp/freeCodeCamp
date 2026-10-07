"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nominal = exports.errors = exports.error = exports.all = exports.RefinedConstructorsTypeId = exports.BrandTypeId = void 0;
exports.refined = refined;
exports.unbranded = void 0;
var Arr = _interopRequireWildcard(require("./Array.js"));
var Either = _interopRequireWildcard(require("./Either.js"));
var _Function = require("./Function.js");
var Option = _interopRequireWildcard(require("./Option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides types and utility functions to create and work with branded types,
 * which are TypeScript types with an added type tag to prevent accidental usage of a value in the wrong context.
 *
 * The `refined` and `nominal` functions are both used to create branded types in TypeScript.
 * The main difference between them is that `refined` allows for validation of the data, while `nominal` does not.
 *
 * The `nominal` function is used to create a new branded type that has the same underlying type as the input, but with a different name.
 * This is useful when you want to distinguish between two values of the same type that have different meanings.
 * The `nominal` function does not perform any validation of the input data.
 *
 * On the other hand, the `refined` function is used to create a new branded type that has the same underlying type as the input,
 * but with a different name, and it also allows for validation of the input data.
 * The `refined` function takes a predicate that is used to validate the input data.
 * If the input data fails the validation, a `BrandErrors` is returned, which provides information about the specific validation failure.
 *
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 * @category symbols
 */
const BrandTypeId = exports.BrandTypeId = /*#__PURE__*/Symbol.for("effect/Brand");
/**
 * @since 2.0.0
 * @category symbols
 */
const RefinedConstructorsTypeId = exports.RefinedConstructorsTypeId = /*#__PURE__*/Symbol.for("effect/Brand/Refined");
/**
 * Returns a `BrandErrors` that contains a single `RefinementError`.
 *
 * @since 2.0.0
 * @category constructors
 */
const error = (message, meta) => [{
  message,
  meta
}];
/**
 * Takes a variable number of `BrandErrors` and returns a single `BrandErrors` that contains all refinement errors.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.error = error;
const errors = (...errors) => Arr.flatten(errors);
exports.errors = errors;
function refined(...args) {
  const either = args.length === 2 ? unbranded => args[0](unbranded) ? Either.right(unbranded) : Either.left(args[1](unbranded)) : unbranded => {
    return Option.match(args[0](unbranded), {
      onNone: () => Either.right(unbranded),
      onSome: Either.left
    });
  };
  return Object.assign(unbranded => Either.getOrThrowWith(either(unbranded), _Function.identity), {
    [RefinedConstructorsTypeId]: RefinedConstructorsTypeId,
    option: args => Option.getRight(either(args)),
    either,
    is: args => Either.isRight(either(args))
  });
}
/**
 * This function returns a `Brand.Constructor` that **does not apply any runtime checks**, it just returns the provided value.
 * It can be used to create nominal types that allow distinguishing between two values of the same type but with different meanings.
 *
 * If you also want to perform some validation, see {@link refined}.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Brand } from "effect"
 *
 * type UserId = number & Brand.Brand<"UserId">
 *
 * const UserId = Brand.nominal<UserId>()
 *
 * console.log(UserId(1))
 * // 1
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const nominal = () => {
  // @ts-expect-error
  return Object.assign(args => args, {
    [RefinedConstructorsTypeId]: RefinedConstructorsTypeId,
    option: args => Option.some(args),
    either: args => Either.right(args),
    is: _args => true
  });
};
/**
 * Combines two or more brands together to form a single branded type.
 * This API is useful when you want to validate that the input data passes multiple brand validators.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Brand } from "effect"
 *
 * type Int = number & Brand.Brand<"Int">
 * const Int = Brand.refined<Int>(
 *   (n) => Number.isInteger(n),
 *   (n) => Brand.error(`Expected ${n} to be an integer`)
 * )
 * type Positive = number & Brand.Brand<"Positive">
 * const Positive = Brand.refined<Positive>(
 *   (n) => n > 0,
 *   (n) => Brand.error(`Expected ${n} to be positive`)
 * )
 *
 * const PositiveInt = Brand.all(Int, Positive)
 *
 * console.log(PositiveInt(1))
 * // 1
 *
 * assert.throws(() => PositiveInt(1.1))
 * ```
 *
 * @since 2.0.0
 * @category combining
 */
exports.nominal = nominal;
const all = (...brands) => {
  const either = args => {
    let result = Either.right(args);
    for (const brand of brands) {
      const nextResult = brand.either(args);
      if (Either.isLeft(result) && Either.isLeft(nextResult)) {
        result = Either.left([...result.left, ...nextResult.left]);
      } else {
        result = Either.isLeft(result) ? result : nextResult;
      }
    }
    return result;
  };
  // @ts-expect-error
  return Object.assign(args => Either.match(either(args), {
    onLeft: e => {
      throw e;
    },
    onRight: _Function.identity
  }), {
    [RefinedConstructorsTypeId]: RefinedConstructorsTypeId,
    option: args => Option.getRight(either(args)),
    either,
    is: args => Either.isRight(either(args))
  });
};
/**
 * Retrieves the unbranded value from a `Brand` instance.
 *
 * @since 3.15.0
 * @category getters
 */
exports.all = all;
const unbranded = exports.unbranded = _Function.unsafeCoerce;
//# sourceMappingURL=Brand.js.map