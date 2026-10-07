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
import * as Arr from "./Array.js";
import * as Either from "./Either.js";
import { identity, unsafeCoerce } from "./Function.js";
import * as Option from "./Option.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const BrandTypeId = /*#__PURE__*/Symbol.for("effect/Brand");
/**
 * @since 2.0.0
 * @category symbols
 */
export const RefinedConstructorsTypeId = /*#__PURE__*/Symbol.for("effect/Brand/Refined");
/**
 * Returns a `BrandErrors` that contains a single `RefinementError`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const error = (message, meta) => [{
  message,
  meta
}];
/**
 * Takes a variable number of `BrandErrors` and returns a single `BrandErrors` that contains all refinement errors.
 *
 * @since 2.0.0
 * @category constructors
 */
export const errors = (...errors) => Arr.flatten(errors);
export function refined(...args) {
  const either = args.length === 2 ? unbranded => args[0](unbranded) ? Either.right(unbranded) : Either.left(args[1](unbranded)) : unbranded => {
    return Option.match(args[0](unbranded), {
      onNone: () => Either.right(unbranded),
      onSome: Either.left
    });
  };
  return Object.assign(unbranded => Either.getOrThrowWith(either(unbranded), identity), {
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
export const nominal = () => {
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
export const all = (...brands) => {
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
    onRight: identity
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
export const unbranded = unsafeCoerce;
//# sourceMappingURL=Brand.js.map