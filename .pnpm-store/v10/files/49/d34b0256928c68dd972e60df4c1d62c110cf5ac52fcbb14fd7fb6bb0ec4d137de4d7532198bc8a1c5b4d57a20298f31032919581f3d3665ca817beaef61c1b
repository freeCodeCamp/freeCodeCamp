import type { Middleware } from 'redux'
import type { IgnorePaths } from './serializableStateInvariantMiddleware'
import { getTimeMeasureUtils } from './utils'

type EntryProcessor = (key: string, value: any) => any

/**
 * The default `isImmutable` function.
 *
 * @public
 */
export function isImmutableDefault(value: unknown): boolean {
  return typeof value !== 'object' || value == null || Object.isFrozen(value)
}

export function trackForMutations(
  isImmutable: IsImmutableFunc,
  ignoredPaths: IgnorePaths | undefined,
  obj: any,
) {
  const trackedProperties = trackProperties(isImmutable, ignoredPaths, obj)
  return {
    detectMutations() {
      return detectMutations(isImmutable, ignoredPaths, trackedProperties, obj)
    },
  }
}

interface TrackedProperty {
  value: any
  children: Record<string, any>
}

function trackProperties(
  isImmutable: IsImmutableFunc,
  ignoredPaths: IgnorePaths = [],
  obj: Record<string, any>,
  path: string = '',
  checkedObjects: Set<Record<string, any>> = new Set(),
) {
  const tracked: Partial<TrackedProperty> = { value: obj }

  if (!isImmutable(obj) && !checkedObjects.has(obj)) {
    checkedObjects.add(obj)
    tracked.children = {}

    const hasIgnoredPaths = ignoredPaths.length > 0

    for (const key in obj) {
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

      tracked.children[key] = trackProperties(
        isImmutable,
        ignoredPaths,
        obj[key],
        nestedPath,
      )
    }
  }
  return tracked as TrackedProperty
}

function detectMutations(
  isImmutable: IsImmutableFunc,
  ignoredPaths: IgnorePaths = [],
  trackedProperty: TrackedProperty,
  obj: any,
  sameParentRef: boolean = false,
  path: string = '',
): { wasMutated: boolean; path?: string } {
  const prevObj = trackedProperty ? trackedProperty.value : undefined

  const sameRef = prevObj === obj

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return { wasMutated: true, path }
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return { wasMutated: false }
  }

  // Gather all keys from prev (tracked) and after objs
  const keysToDetect: Record<string, boolean> = {}
  for (let key in trackedProperty.children) {
    keysToDetect[key] = true
  }
  for (let key in obj) {
    keysToDetect[key] = true
  }

  const hasIgnoredPaths = ignoredPaths.length > 0

  for (let key in keysToDetect) {
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

    const result = detectMutations(
      isImmutable,
      ignoredPaths,
      trackedProperty.children[key],
      obj[key],
      sameRef,
      nestedPath,
    )

    if (result.wasMutated) {
      return result
    }
  }
  return { wasMutated: false }
}

type IsImmutableFunc = (value: any) => boolean

/**
 * Options for `createImmutableStateInvariantMiddleware()`.
 *
 * @public
 */
export interface ImmutableStateInvariantMiddlewareOptions {
  /**
    Callback function to check if a value is considered to be immutable.
    This function is applied recursively to every value contained in the state.
    The default implementation will return true for primitive types
    (like numbers, strings, booleans, null and undefined).
   */
  isImmutable?: IsImmutableFunc
  /**
    An array of dot-separated path strings that match named nodes from
    the root state to ignore when checking for immutability.
    Defaults to undefined
   */
  ignoredPaths?: IgnorePaths
  /** Print a warning if checks take longer than N ms. Default: 32ms */
  warnAfter?: number
}

/**
 * Creates a middleware that checks whether any state was mutated in between
 * dispatches or during a dispatch. If any mutations are detected, an error is
 * thrown.
 *
 * @param options Middleware options.
 *
 * @public
 */
export function createImmutableStateInvariantMiddleware(
  options: ImmutableStateInvariantMiddlewareOptions = {},
): Middleware {
  if (process.env.NODE_ENV === 'production') {
    return () => (next) => (action) => next(action)
  } else {
    function stringify(
      obj: any,
      serializer?: EntryProcessor,
      indent?: string | number,
      decycler?: EntryProcessor,
    ): string {
      return JSON.stringify(obj, getSerialize(serializer, decycler), indent)
    }

    function getSerialize(
      serializer?: EntryProcessor,
      decycler?: EntryProcessor,
    ): EntryProcessor {
      let stack: any[] = [],
        keys: any[] = []

      if (!decycler)
        decycler = function (_: string, value: any) {
          if (stack[0] === value) return '[Circular ~]'
          return (
            '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']'
          )
        }

      return function (this: any, key: string, value: any) {
        if (stack.length > 0) {
          var thisPos = stack.indexOf(this)
          ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
          ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
          if (~stack.indexOf(value)) value = decycler!.call(this, key, value)
        } else stack.push(value)

        return serializer == null ? value : serializer.call(this, key, value)
      }
    }

    let {
      isImmutable = isImmutableDefault,
      ignoredPaths,
      warnAfter = 32,
    } = options

    const track = trackForMutations.bind(null, isImmutable, ignoredPaths)

    return ({ getState }) => {
      let state = getState()
      let tracker = track(state)

      let result
      return (next) => (action) => {
        const measureUtils = getTimeMeasureUtils(
          warnAfter,
          'ImmutableStateInvariantMiddleware',
        )

        measureUtils.measureTime(() => {
          state = getState()

          result = tracker.detectMutations()
          // Track before potentially not meeting the invariant
          tracker = track(state)

          if (result.wasMutated) {
            throw new Error(
              `A state mutation was detected between dispatches, in the path '${
                result.path || ''
              }'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`,
            )
          }
        })

        const dispatchedAction = next(action)

        measureUtils.measureTime(() => {
          state = getState()

          result = tracker.detectMutations()
          // Track before potentially not meeting the invariant
          tracker = track(state)

          if (result.wasMutated) {
            throw new Error(
              `A state mutation was detected inside a dispatch, in the path: ${
                result.path || ''
              }. Take a look at the reducer(s) handling the action ${stringify(
                action,
              )}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`,
            )
          }
        })

        measureUtils.warnIfExceeded()

        return dispatchedAction
      }
    }
  }
}
