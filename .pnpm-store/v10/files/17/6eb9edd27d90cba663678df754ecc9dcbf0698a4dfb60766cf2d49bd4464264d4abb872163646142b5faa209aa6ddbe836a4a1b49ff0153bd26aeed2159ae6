// Original source:
// - https://github.com/facebook/react/blob/0b974418c9a56f6c560298560265dcf4b65784bc/packages/react/src/ReactCache.js

import type {
  AnyFunction,
  DefaultMemoizeFields,
  EqualityFn,
  Simplify
} from './types'

class StrongRef<T> {
  constructor(private value: T) {}
  deref() {
    return this.value
  }
}

const Ref =
  typeof WeakRef !== 'undefined'
    ? WeakRef
    : (StrongRef as unknown as typeof WeakRef)

const UNTERMINATED = 0
const TERMINATED = 1

interface UnterminatedCacheNode<T> {
  /**
   * Status, represents whether the cached computation returned a value or threw an error.
   */
  s: 0
  /**
   * Value, either the cached result or an error, depending on status.
   */
  v: void
  /**
   * Object cache, a `WeakMap` where non-primitive arguments are stored.
   */
  o: null | WeakMap<Function | Object, CacheNode<T>>
  /**
   * Primitive cache, a regular Map where primitive arguments are stored.
   */
  p: null | Map<string | number | null | void | symbol | boolean, CacheNode<T>>
}

interface TerminatedCacheNode<T> {
  /**
   * Status, represents whether the cached computation returned a value or threw an error.
   */
  s: 1
  /**
   * Value, either the cached result or an error, depending on status.
   */
  v: T
  /**
   * Object cache, a `WeakMap` where non-primitive arguments are stored.
   */
  o: null | WeakMap<Function | Object, CacheNode<T>>
  /**
   * Primitive cache, a regular `Map` where primitive arguments are stored.
   */
  p: null | Map<string | number | null | void | symbol | boolean, CacheNode<T>>
}

type CacheNode<T> = TerminatedCacheNode<T> | UnterminatedCacheNode<T>

function createCacheNode<T>(): CacheNode<T> {
  return {
    s: UNTERMINATED,
    v: undefined,
    o: null,
    p: null
  }
}

/**
 * Configuration options for a memoization function utilizing `WeakMap` for
 * its caching mechanism.
 *
 * @template Result - The type of the return value of the memoized function.
 *
 * @since 5.0.0
 * @public
 */
export interface WeakMapMemoizeOptions<Result = any> {
  /**
   * If provided, used to compare a newly generated output value against previous values in the cache.
   * If a match is found, the old value is returned. This addresses the common
   * ```ts
   * todos.map(todo => todo.id)
   * ```
   * use case, where an update to another field in the original data causes a recalculation
   * due to changed references, but the output is still effectively the same.
   *
   * @since 5.0.0
   */
  resultEqualityCheck?: EqualityFn<Result>
}

/**
 * Creates a tree of `WeakMap`-based cache nodes based on the identity of the
 * arguments it's been called with (in this case, the extracted values from your input selectors).
 * This allows `weakMapMemoize` to have an effectively infinite cache size.
 * Cache results will be kept in memory as long as references to the arguments still exist,
 * and then cleared out as the arguments are garbage-collected.
 *
 * __Design Tradeoffs for `weakMapMemoize`:__
 * - Pros:
 *   - It has an effectively infinite cache size, but you have no control over
 *   how long values are kept in cache as it's based on garbage collection and `WeakMap`s.
 * - Cons:
 *   - There's currently no way to alter the argument comparisons.
 *   They're based on strict reference equality.
 *   - It's roughly the same speed as `lruMemoize`, although likely a fraction slower.
 *
 * __Use Cases for `weakMapMemoize`:__
 * - This memoizer is likely best used for cases where you need to call the
 * same selector instance with many different arguments, such as a single
 * selector instance that is used in a list item component and called with
 * item IDs like:
 *   ```ts
 *   useSelector(state => selectSomeData(state, props.category))
 *   ```
 * @param func - The function to be memoized.
 * @returns A memoized function with a `.clearCache()` method attached.
 *
 * @example
 * <caption>Using `createSelector`</caption>
 * ```ts
 * import { createSelector, weakMapMemoize } from 'reselect'
 *
 * interface RootState {
 *   items: { id: number; category: string; name: string }[]
 * }
 *
 * const selectItemsByCategory = createSelector(
 *   [
 *     (state: RootState) => state.items,
 *     (state: RootState, category: string) => category
 *   ],
 *   (items, category) => items.filter(item => item.category === category),
 *   {
 *     memoize: weakMapMemoize,
 *     argsMemoize: weakMapMemoize
 *   }
 * )
 * ```
 *
 * @example
 * <caption>Using `createSelectorCreator`</caption>
 * ```ts
 * import { createSelectorCreator, weakMapMemoize } from 'reselect'
 *
 * const createSelectorWeakMap = createSelectorCreator({ memoize: weakMapMemoize, argsMemoize: weakMapMemoize })
 *
 * const selectItemsByCategory = createSelectorWeakMap(
 *   [
 *     (state: RootState) => state.items,
 *     (state: RootState, category: string) => category
 *   ],
 *   (items, category) => items.filter(item => item.category === category)
 * )
 * ```
 *
 * @template Func - The type of the function that is memoized.
 *
 * @see {@link https://reselect.js.org/api/weakMapMemoize `weakMapMemoize`}
 *
 * @since 5.0.0
 * @public
 * @experimental
 */
export function weakMapMemoize<Func extends AnyFunction>(
  func: Func,
  options: WeakMapMemoizeOptions<ReturnType<Func>> = {}
) {
  let fnNode = createCacheNode()
  const { resultEqualityCheck } = options

  let lastResult: WeakRef<object> | undefined

  let resultsCount = 0

  function memoized() {
    let cacheNode = fnNode
    const { length } = arguments
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i]
      if (
        typeof arg === 'function' ||
        (typeof arg === 'object' && arg !== null)
      ) {
        // Objects go into a WeakMap
        let objectCache = cacheNode.o
        if (objectCache === null) {
          cacheNode.o = objectCache = new WeakMap()
        }
        const objectNode = objectCache.get(arg)
        if (objectNode === undefined) {
          cacheNode = createCacheNode()
          objectCache.set(arg, cacheNode)
        } else {
          cacheNode = objectNode
        }
      } else {
        // Primitives go into a regular Map
        let primitiveCache = cacheNode.p
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = new Map()
        }
        const primitiveNode = primitiveCache.get(arg)
        if (primitiveNode === undefined) {
          cacheNode = createCacheNode()
          primitiveCache.set(arg, cacheNode)
        } else {
          cacheNode = primitiveNode
        }
      }
    }

    const terminatedNode = cacheNode as unknown as TerminatedCacheNode<any>

    let result

    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v
    } else {
      // Allow errors to propagate
      result = func.apply(null, arguments as unknown as any[])
      resultsCount++

      if (resultEqualityCheck) {
        const lastResultValue = lastResult?.deref?.() ?? lastResult

        if (
          lastResultValue != null &&
          resultEqualityCheck(lastResultValue as ReturnType<Func>, result)
        ) {
          result = lastResultValue

          resultsCount !== 0 && resultsCount--
        }

        const needsWeakRef =
          (typeof result === 'object' && result !== null) ||
          typeof result === 'function'

        lastResult = needsWeakRef ? new Ref(result) : result
      }
    }

    terminatedNode.s = TERMINATED

    terminatedNode.v = result
    return result
  }

  memoized.clearCache = () => {
    fnNode = createCacheNode()
    memoized.resetResultsCount()
  }

  memoized.resultsCount = () => resultsCount

  memoized.resetResultsCount = () => {
    resultsCount = 0
  }

  return memoized as Func & Simplify<DefaultMemoizeFields>
}
