import { dual } from "./Function.js";
/**
 * Inverts the ordering of the input `Ordering`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { reverse } from "effect/Ordering"
 *
 * assert.deepStrictEqual(reverse(1), -1)
 * assert.deepStrictEqual(reverse(-1), 1)
 * assert.deepStrictEqual(reverse(0), 0)
 * ```
 *
 * @since 2.0.0
 */
export const reverse = o => o === -1 ? 1 : o === 1 ? -1 : 0;
/**
 * Depending on the `Ordering` parameter given to it, returns a value produced by one of the 3 functions provided as parameters.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Ordering } from "effect"
 * import { constant } from "effect/Function"
 *
 * const toMessage = Ordering.match({
 *   onLessThan: constant('less than'),
 *   onEqual: constant('equal'),
 *   onGreaterThan: constant('greater than')
 * })
 *
 * assert.deepStrictEqual(toMessage(-1), "less than")
 * assert.deepStrictEqual(toMessage(0), "equal")
 * assert.deepStrictEqual(toMessage(1), "greater than")
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
export const match = /*#__PURE__*/dual(2, (self, {
  onEqual,
  onGreaterThan,
  onLessThan
}) => self === -1 ? onLessThan() : self === 0 ? onEqual() : onGreaterThan());
/**
 * @category combining
 * @since 2.0.0
 */
export const combine = /*#__PURE__*/dual(2, (self, that) => self !== 0 ? self : that);
/**
 * @category combining
 * @since 2.0.0
 */
export const combineMany = /*#__PURE__*/dual(2, (self, collection) => {
  let ordering = self;
  if (ordering !== 0) {
    return ordering;
  }
  for (ordering of collection) {
    if (ordering !== 0) {
      return ordering;
    }
  }
  return ordering;
});
/**
 * @category combining
 * @since 2.0.0
 */
export const combineAll = collection => combineMany(0, collection);
//# sourceMappingURL=Ordering.js.map