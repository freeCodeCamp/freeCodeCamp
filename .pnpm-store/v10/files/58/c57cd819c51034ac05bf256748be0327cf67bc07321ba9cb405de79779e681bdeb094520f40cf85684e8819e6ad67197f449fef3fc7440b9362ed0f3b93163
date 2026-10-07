/**
 * Wrap a function or class to show a deprecation message when first called.
 *
 * > 👉 **Important**: only shows a message when the `development` condition is
 * > used, does nothing in production.
 *
 * When the resulting wrapped `fn` is called, emits a warning once to
 * `console.error` (`stderr`).
 * If a code is given, one warning message will be emitted in total per code.
 *
 * @template {Function} T
 *   Function or class kind.
 * @param {T} fn
 *   Function or class.
 * @param {string} message
 *   Message explaining deprecation.
 * @param {string | null | undefined} [code]
 *   Deprecation identifier (optional); deprecation messages will be generated
 *   only once per code.
 * @returns {T}
 *   Wrapped `fn`.
 */
export function deprecate<T extends Function>(
  fn: T,
  message: string,
  code?: string | null | undefined
): T
/**
 * Assert deep strict equivalence.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @template {unknown} T
 *   Expected kind.
 * @param {unknown} actual
 *   Value.
 * @param {T} expected
 *   Baseline.
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Expected values to be deeply equal'`).
 * @returns {asserts actual is T}
 *   Nothing; throws when `actual` is not deep strict equal to `expected`.
 * @throws {AssertionError}
 *   Throws when `actual` is not deep strict equal to `expected`.
 */
export function equal<T extends unknown>(
  actual: unknown,
  expected: T,
  message?: Error | string | null | undefined
): asserts actual is T
/**
 * Assert if `value` is truthy.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @param {unknown} value
 *   Value to assert.
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Expected value to be truthy'`).
 * @returns {asserts value}
 *   Nothing; throws when `value` is falsey.
 * @throws {AssertionError}
 *   Throws when `value` is falsey.
 */
export function ok(
  value: unknown,
  message?: Error | string | null | undefined
): asserts value
/**
 * Assert that a code path never happens.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Unreachable'`).
 * @returns {never}
 *   Nothing; always throws.
 * @throws {AssertionError}
 *   Throws when `value` is falsey.
 */
export function unreachable(message?: Error | string | null | undefined): never
