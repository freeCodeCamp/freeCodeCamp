import type { Middleware } from 'redux'
import { isAction, isPlainObject } from './reduxImports'
import { getTimeMeasureUtils } from './utils'

/**
 * Returns true if the passed value is "plain", i.e. a value that is either
 * directly JSON-serializable (boolean, number, string, array, plain object)
 * or `undefined`.
 *
 * @param val The value to check.
 *
 * @public
 */
export function isPlain(val: any) {
  const type = typeof val
  return (
    val == null ||
    type === 'string' ||
    type === 'boolean' ||
    type === 'number' ||
    Array.isArray(val) ||
    isPlainObject(val)
  )
}

interface NonSerializableValue {
  keyPath: string
  value: unknown
}

export type IgnorePaths = readonly (string | RegExp)[]

/**
 * @public
 */
export function findNonSerializableValue(
  value: unknown,
  path: string = '',
  isSerializable: (value: unknown) => boolean = isPlain,
  getEntries?: (value: unknown) => [string, any][],
  ignoredPaths: IgnorePaths = [],
  cache?: WeakSet<object>,
): NonSerializableValue | false {
  let foundNestedSerializable: NonSerializableValue | false

  if (!isSerializable(value)) {
    return {
      keyPath: path || '<root>',
      value: value,
    }
  }

  if (typeof value !== 'object' || value === null) {
    return false
  }

  if (cache?.has(value)) return false

  const entries = getEntries != null ? getEntries(value) : Object.entries(value)

  const hasIgnoredPaths = ignoredPaths.length > 0

  for (const [key, nestedValue] of entries) {
    const nestedPath = path ? path + '.' + key : key

    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath)
        }
        return nestedPath === ignored
      })
      if (hasMatches) {
        continue
      }
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue,
      }
    }

    if (typeof nestedValue === 'object') {
      foundNestedSerializable = findNonSerializableValue(
        nestedValue,
        nestedPath,
        isSerializable,
        getEntries,
        ignoredPaths,
        cache,
      )

      if (foundNestedSerializable) {
        return foundNestedSerializable
      }
    }
  }

  if (cache && isNestedFrozen(value)) cache.add(value)

  return false
}

export function isNestedFrozen(value: object) {
  if (!Object.isFrozen(value)) return false

  for (const nestedValue of Object.values(value)) {
    if (typeof nestedValue !== 'object' || nestedValue === null) continue

    if (!isNestedFrozen(nestedValue)) return false
  }

  return true
}

/**
 * Options for `createSerializableStateInvariantMiddleware()`.
 *
 * @public
 */
export interface SerializableStateInvariantMiddlewareOptions {
  /**
   * The function to check if a value is considered serializable. This
   * function is applied recursively to every value contained in the
   * state. Defaults to `isPlain()`.
   */
  isSerializable?: (value: any) => boolean
  /**
   * The function that will be used to retrieve entries from each
   * value.  If unspecified, `Object.entries` will be used. Defaults
   * to `undefined`.
   */
  getEntries?: (value: any) => [string, any][]

  /**
   * An array of action types to ignore when checking for serializability.
   * Defaults to []
   */
  ignoredActions?: string[]

  /**
   * An array of dot-separated path strings or regular expressions to ignore
   * when checking for serializability, Defaults to
   * ['meta.arg', 'meta.baseQueryMeta']
   */
  ignoredActionPaths?: (string | RegExp)[]

  /**
   * An array of dot-separated path strings or regular expressions to ignore
   * when checking for serializability, Defaults to []
   */
  ignoredPaths?: (string | RegExp)[]
  /**
   * Execution time warning threshold. If the middleware takes longer
   * than `warnAfter` ms, a warning will be displayed in the console.
   * Defaults to 32ms.
   */
  warnAfter?: number

  /**
   * Opt out of checking state. When set to `true`, other state-related params will be ignored.
   */
  ignoreState?: boolean

  /**
   * Opt out of checking actions. When set to `true`, other action-related params will be ignored.
   */
  ignoreActions?: boolean

  /**
   * Opt out of caching the results. The cache uses a WeakSet and speeds up repeated checking processes.
   * The cache is automatically disabled if no browser support for WeakSet is present.
   */
  disableCache?: boolean
}

/**
 * Creates a middleware that, after every state change, checks if the new
 * state is serializable. If a non-serializable value is found within the
 * state, an error is printed to the console.
 *
 * @param options Middleware options.
 *
 * @public
 */
export function createSerializableStateInvariantMiddleware(
  options: SerializableStateInvariantMiddlewareOptions = {},
): Middleware {
  if (process.env.NODE_ENV === 'production') {
    return () => (next) => (action) => next(action)
  } else {
    const {
      isSerializable = isPlain,
      getEntries,
      ignoredActions = [],
      ignoredActionPaths = ['meta.arg', 'meta.baseQueryMeta'],
      ignoredPaths = [],
      warnAfter = 32,
      ignoreState = false,
      ignoreActions = false,
      disableCache = false,
    } = options

    const cache: WeakSet<object> | undefined =
      !disableCache && WeakSet ? new WeakSet() : undefined

    return (storeAPI) => (next) => (action) => {
      if (!isAction(action)) {
        return next(action)
      }

      const result = next(action)

      const measureUtils = getTimeMeasureUtils(
        warnAfter,
        'SerializableStateInvariantMiddleware',
      )

      if (
        !ignoreActions &&
        !(
          ignoredActions.length &&
          ignoredActions.indexOf(action.type as any) !== -1
        )
      ) {
        measureUtils.measureTime(() => {
          const foundActionNonSerializableValue = findNonSerializableValue(
            action,
            '',
            isSerializable,
            getEntries,
            ignoredActionPaths,
            cache,
          )

          if (foundActionNonSerializableValue) {
            const { keyPath, value } = foundActionNonSerializableValue

            console.error(
              `A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`,
              value,
              '\nTake a look at the logic that dispatched this action: ',
              action,
              '\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)',
              '\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)',
            )
          }
        })
      }

      if (!ignoreState) {
        measureUtils.measureTime(() => {
          const state = storeAPI.getState()

          const foundStateNonSerializableValue = findNonSerializableValue(
            state,
            '',
            isSerializable,
            getEntries,
            ignoredPaths,
            cache,
          )

          if (foundStateNonSerializableValue) {
            const { keyPath, value } = foundStateNonSerializableValue

            console.error(
              `A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`,
              value,
              `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`,
            )
          }
        })

        measureUtils.warnIfExceeded()
      }

      return result
    }
  }
}
