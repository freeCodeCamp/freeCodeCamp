/**
 * This module provides utility functions for working with RegExp in TypeScript.
 *
 * @since 2.0.0
 */
import * as predicate from "./Predicate.js";
/**
 * Tests if a value is a `RegExp`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { RegExp } from "effect"
 *
 * assert.deepStrictEqual(RegExp.isRegExp(/a/), true)
 * assert.deepStrictEqual(RegExp.isRegExp("a"), false)
 * ```
 *
 * @category guards
 * @since 3.9.0
 */
export const isRegExp = predicate.isRegExp;
/**
 * Escapes special characters in a regular expression pattern.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { RegExp } from "effect"
 *
 * assert.deepStrictEqual(RegExp.escape("a*b"), "a\\*b")
 * ```
 *
 * @since 2.0.0
 */
export const escape = string => string.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");
//# sourceMappingURL=RegExp.js.map