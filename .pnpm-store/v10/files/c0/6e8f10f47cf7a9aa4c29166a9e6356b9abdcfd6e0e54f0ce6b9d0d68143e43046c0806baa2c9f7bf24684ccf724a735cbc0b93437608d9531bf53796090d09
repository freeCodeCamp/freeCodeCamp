import {dequal} from 'dequal'

/**
 * @type {Set<string>}
 */
const codesWarned = new Set()

class AssertionError extends Error {
  name = /** @type {const} */ ('Assertion')
  code = /** @type {const} */ ('ERR_ASSERTION')

  /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */
  // eslint-disable-next-line max-params
  constructor(message, actual, expected, operator, generated) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    /**
     * @type {unknown}
     */
    this.actual = actual

    /**
     * @type {unknown}
     */
    this.expected = expected

    /**
     * @type {boolean}
     */
    this.generated = generated

    /**
     * @type {string}
     */
    this.operator = operator
  }
}

class DeprecationError extends Error {
  name = /** @type {const} */ ('DeprecationWarning')

  /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */
  constructor(message, code) {
    super(message)

    /**
     * @type {string | undefined}
     */
    this.code = code
  }
}

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
export function deprecate(fn, message, code) {
  let warned = false

  // The wrapper will keep the same prototype as fn to maintain prototype chain
  Object.setPrototypeOf(deprecated, fn)

  // @ts-expect-error: it’s perfect, typescript…
  return deprecated

  /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */
  function deprecated(...args) {
    if (!warned) {
      warned = true

      if (typeof code === 'string' && codesWarned.has(code)) {
        // Empty.
      } else {
        console.error(new DeprecationError(message, code || undefined))

        if (typeof code === 'string') codesWarned.add(code)
      }
    }

    return new.target
      ? Reflect.construct(fn, args, new.target)
      : Reflect.apply(fn, this, args)
  }
}

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
export function equal(actual, expected, message) {
  assert(
    dequal(actual, expected),
    actual,
    expected,
    'equal',
    'Expected values to be deeply equal',
    message
  )
}

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
export function ok(value, message) {
  assert(
    Boolean(value),
    false,
    true,
    'ok',
    'Expected value to be truthy',
    message
  )
}

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
export function unreachable(message) {
  assert(false, false, true, 'ok', 'Unreachable', message)
}

/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */
// eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
  if (!bool) {
    throw userMessage instanceof Error
      ? userMessage
      : new AssertionError(
          userMessage || defaultMessage,
          actual,
          expected,
          operator,
          !userMessage
        )
  }
}
