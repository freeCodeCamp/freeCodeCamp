import {
	PluginArrayMethods,
	latest,
	loadPlugin,
	markChanged,
	prepareCopy,
	handleCrossReference,
	ProxyArrayState
} from "../internal"

/**
 * Methods that directly modify the array in place.
 * These operate on the copy without creating per-element proxies:
 * - `push`, `pop`: Add/remove from end
 * - `shift`, `unshift`: Add/remove from start (marks all indices reassigned)
 * - `splice`: Add/remove at arbitrary position (marks all indices reassigned)
 * - `reverse`, `sort`: Reorder elements (marks all indices reassigned)
 */
type MutatingArrayMethod =
	| "push"
	| "pop"
	| "shift"
	| "unshift"
	| "splice"
	| "reverse"
	| "sort"

/**
 * Methods that read from the array without modifying it.
 * These fall into distinct categories based on return semantics:
 *
 * **Subset operations** (return drafts - mutations propagate):
 * - `filter`, `slice`: Return array of draft proxies
 * - `find`, `findLast`: Return single draft proxy or undefined
 *
 * **Transform operations** (return base values - mutations don't track):
 * - `concat`, `flat`: Create new structures, not subsets of original
 *
 * **Primitive-returning** (no draft needed):
 * - `findIndex`, `findLastIndex`, `indexOf`, `lastIndexOf`: Return numbers
 * - `some`, `every`, `includes`: Return booleans
 * - `join`, `toString`, `toLocaleString`: Return strings
 */
type NonMutatingArrayMethod =
	| "filter"
	| "slice"
	| "concat"
	| "flat"
	| "find"
	| "findIndex"
	| "findLast"
	| "findLastIndex"
	| "some"
	| "every"
	| "indexOf"
	| "lastIndexOf"
	| "includes"
	| "join"
	| "toString"
	| "toLocaleString"

/** Union of all array operation methods handled by the plugin. */
export type ArrayOperationMethod = MutatingArrayMethod | NonMutatingArrayMethod

/**
 * Enables optimized array method handling for Immer drafts.
 *
 * This plugin overrides array methods to avoid unnecessary Proxy creation during iteration,
 * significantly improving performance for array-heavy operations.
 *
 * **Mutating methods** (push, pop, shift, unshift, splice, sort, reverse):
 * Operate directly on the copy without creating per-element proxies.
 *
 * **Non-mutating methods** fall into categories:
 * - **Subset operations** (filter, slice, find, findLast): Return draft proxies - mutations track
 * - **Transform operations** (concat, flat): Return base values - mutations don't track
 * - **Primitive-returning** (indexOf, includes, some, every, etc.): Return primitives
 *
 * **Important**: Callbacks for overridden methods receive base values, not drafts.
 * This is the core performance optimization.
 *
 * @example
 * ```ts
 * import { enableArrayMethods, produce } from "immer"
 *
 * enableArrayMethods()
 *
 * const next = produce(state, draft => {
 *   // Optimized - no proxy creation per element
 *   draft.items.sort((a, b) => a.value - b.value)
 *
 *   // filter returns drafts - mutations propagate
 *   const filtered = draft.items.filter(x => x.value > 5)
 *   filtered[0].value = 999 // Affects draft.items[originalIndex]
 * })
 * ```
 *
 * @see https://immerjs.github.io/immer/array-methods
 */
export function enableArrayMethods() {
	const SHIFTING_METHODS = new Set<MutatingArrayMethod>(["shift", "unshift"])

	const QUEUE_METHODS = new Set<MutatingArrayMethod>(["push", "pop"])

	const RESULT_RETURNING_METHODS = new Set<MutatingArrayMethod>([
		...QUEUE_METHODS,
		...SHIFTING_METHODS
	])

	const REORDERING_METHODS = new Set<MutatingArrayMethod>(["reverse", "sort"])

	// Optimized method detection using array-based lookup
	const MUTATING_METHODS = new Set<MutatingArrayMethod>([
		...RESULT_RETURNING_METHODS,
		...REORDERING_METHODS,
		"splice"
	])

	const FIND_METHODS = new Set<NonMutatingArrayMethod>(["find", "findLast"])

	const NON_MUTATING_METHODS = new Set<NonMutatingArrayMethod>([
		"filter",
		"slice",
		"concat",
		"flat",
		...FIND_METHODS,
		"findIndex",
		"findLastIndex",
		"some",
		"every",
		"indexOf",
		"lastIndexOf",
		"includes",
		"join",
		"toString",
		"toLocaleString"
	])

	// Type guard for method detection
	function isMutatingArrayMethod(
		method: string
	): method is MutatingArrayMethod {
		return MUTATING_METHODS.has(method as any)
	}

	function isNonMutatingArrayMethod(
		method: string
	): method is NonMutatingArrayMethod {
		return NON_MUTATING_METHODS.has(method as any)
	}

	function isArrayOperationMethod(
		method: string
	): method is ArrayOperationMethod {
		return isMutatingArrayMethod(method) || isNonMutatingArrayMethod(method)
	}

	function enterOperation(
		state: ProxyArrayState,
		method: ArrayOperationMethod
	) {
		state.operationMethod = method
	}

	function exitOperation(state: ProxyArrayState) {
		state.operationMethod = undefined
	}

	// Shared utility functions for array method handlers
	function executeArrayMethod<T>(
		state: ProxyArrayState,
		operation: () => T,
		markLength = true
	): T {
		prepareCopy(state)
		const result = operation()
		markChanged(state)
		if (markLength) state.assigned_!.set("length", true)
		return result
	}

	function markAllIndicesReassigned(state: ProxyArrayState) {
		state.allIndicesReassigned_ = true
	}

	function normalizeSliceIndex(index: number, length: number): number {
		if (index < 0) {
			return Math.max(length + index, 0)
		}
		return Math.min(index, length)
	}

	/**
	 * Calls handleCrossReference for each value being inserted into the array,
	 * and marks the corresponding indices as assigned in `assigned_`.
	 *
	 * This ensures nested drafts inside inserted values (e.g. from spreading
	 * a draft object) are properly finalized, matching the behavior of the
	 * proxy set trap which calls handleCrossReference on every assignment.
	 *
	 * Without this, values containing draft proxies (like `{...state[0]}`)
	 * pushed via the array methods plugin would have their nested drafts
	 * revoked during finalization without being replaced by final values.
	 */
	function handleInsertedValues(
		state: ProxyArrayState,
		startIndex: number,
		values: any[]
	) {
		for (let i = 0; i < values.length; i++) {
			const index = startIndex + i
			state.assigned_!.set(index, true)
			handleCrossReference(state, index, values[i])
		}
	}

	/**
	 * Handles mutating operations that add/remove elements (push, pop, shift, unshift, splice).
	 *
	 * Operates directly on `state.copy_` without creating per-element proxies.
	 * For shifting methods (shift, unshift), marks all indices as reassigned since
	 * indices shift.
	 *
	 * @returns For push/pop/shift/unshift: the native method result. For others: the draft.
	 */
	function handleSimpleOperation(
		state: ProxyArrayState,
		method: string,
		args: any[]
	) {
		return executeArrayMethod(state, () => {
			// For push/unshift, capture the length before the operation
			// so we can compute insertion indices for handleCrossReference
			const lengthBefore = state.copy_!.length

			const result = (state.copy_! as any)[method](...args)

			// Handle index reassignment for shifting methods
			if (SHIFTING_METHODS.has(method as MutatingArrayMethod)) {
				markAllIndicesReassigned(state)
			}

			// Handle cross-references for newly inserted values.
			// push appends at the end, unshift inserts at the beginning.
			if (method === "push" && args.length > 0) {
				handleInsertedValues(state, lengthBefore, args)
			} else if (method === "unshift" && args.length > 0) {
				handleInsertedValues(state, 0, args)
			}

			// Return appropriate value based on method
			return RESULT_RETURNING_METHODS.has(method as MutatingArrayMethod)
				? result
				: state.draft_
		})
	}

	/**
	 * Handles reordering operations (reverse, sort) that change element order.
	 *
	 * Operates directly on `state.copy_` and marks all indices as reassigned
	 * since element positions change. Does not mark length as changed since
	 * these operations preserve array length.
	 *
	 * @returns The draft proxy for method chaining.
	 */
	function handleReorderingOperation(
		state: ProxyArrayState,
		method: string,
		args: any[]
	) {
		return executeArrayMethod(
			state,
			() => {
				;(state.copy_! as any)[method](...args)
				markAllIndicesReassigned(state)
				return state.draft_
			},
			false
		) // Don't mark length as changed
	}

	/**
	 * Creates an interceptor function for a specific array method.
	 *
	 * The interceptor wraps array method calls to:
	 * 1. Set `state.operationMethod` flag during execution (allows proxy `get` trap
	 *    to detect we're inside an optimized method and skip proxy creation)
	 * 2. Route to appropriate handler based on method type
	 * 3. Clean up the operation flag in `finally` block
	 *
	 * The `operationMethod` flag is the key mechanism that enables the proxy's `get`
	 * trap to return base values instead of creating nested proxies during iteration.
	 *
	 * @param state - The proxy array state
	 * @param originalMethod - Name of the array method being intercepted
	 * @returns Interceptor function that handles the method call
	 */
	function createMethodInterceptor(
		state: ProxyArrayState,
		originalMethod: string
	) {
		return function interceptedMethod(...args: any[]) {
			// Enter operation mode - this flag tells the proxy's get trap to return
			// base values instead of creating nested proxies during iteration
			const method = originalMethod as ArrayOperationMethod
			enterOperation(state, method)

			try {
				// Check if this is a mutating method
				if (isMutatingArrayMethod(method)) {
					// Direct method dispatch - no configuration lookup needed
					if (RESULT_RETURNING_METHODS.has(method)) {
						return handleSimpleOperation(state, method, args)
					}
					if (REORDERING_METHODS.has(method)) {
						return handleReorderingOperation(state, method, args)
					}

					if (method === "splice") {
						const res = executeArrayMethod(state, () =>
							state.copy_!.splice(...(args as [number, number, ...any[]]))
						)
						markAllIndicesReassigned(state)
						// Handle cross-references for inserted values (args from index 2+)
						if (args.length > 2) {
							const startIndex = normalizeSliceIndex(
								args[0] ?? 0,
								state.copy_!.length
							)
							handleInsertedValues(state, startIndex, args.slice(2))
						}
						return res
					}
				} else {
					// Handle non-mutating methods
					return handleNonMutatingOperation(state, method, args)
				}
			} finally {
				// Always exit operation mode - must be in finally to handle exceptions
				exitOperation(state)
			}
		}
	}

	/**
	 * Handles non-mutating array methods with different return semantics.
	 *
	 * **Subset operations** return draft proxies for mutation tracking:
	 * - `filter`, `slice`: Return `state.draft_[i]` for each selected element
	 * - `find`, `findLast`: Return `state.draft_[i]` for the found element
	 *
	 * This allows mutations on returned elements to propagate back to the draft:
	 * ```ts
	 * const filtered = draft.items.filter(x => x.value > 5)
	 * filtered[0].value = 999 // Mutates draft.items[originalIndex]
	 * ```
	 *
	 * **Transform operations** return base values (no draft tracking):
	 * - `concat`, `flat`: These create NEW arrays rather than selecting subsets.
	 *   Since the result structure differs from the original, tracking mutations
	 *   back to specific draft indices would be impractical/impossible.
	 *
	 * **Primitive operations** return the native result directly:
	 * - `indexOf`, `includes`, `some`, `every`, `join`, etc.
	 *
	 * @param state - The proxy array state
	 * @param method - The non-mutating method name
	 * @param args - Arguments passed to the method
	 * @returns Drafts for subset operations, base values for transforms, primitives otherwise
	 */
	function handleNonMutatingOperation(
		state: ProxyArrayState,
		method: NonMutatingArrayMethod,
		args: any[]
	) {
		const source = latest(state)

		// Methods that return arrays with selected items - need to return drafts
		if (method === "filter") {
			const predicate = args[0]
			const result: any[] = []

			// First pass: call predicate on base values to determine which items pass
			for (let i = 0; i < source.length; i++) {
				if (predicate(source[i], i, source)) {
					// Only create draft for items that passed the predicate
					result.push(state.draft_[i])
				}
			}

			return result
		}

		if (FIND_METHODS.has(method)) {
			const predicate = args[0]
			const isForward = method === "find"
			const step = isForward ? 1 : -1
			const start = isForward ? 0 : source.length - 1

			for (let i = start; i >= 0 && i < source.length; i += step) {
				if (predicate(source[i], i, source)) {
					return state.draft_[i]
				}
			}
			return undefined
		}

		if (method === "slice") {
			const rawStart = args[0] ?? 0
			const rawEnd = args[1] ?? source.length

			// Normalize negative indices
			const start = normalizeSliceIndex(rawStart, source.length)
			const end = normalizeSliceIndex(rawEnd, source.length)

			const result: any[] = []

			// Return drafts for items in the slice range
			for (let i = start; i < end; i++) {
				result.push(state.draft_[i])
			}

			return result
		}

		// For other methods, call on base array directly:
		// - indexOf, includes, join, toString: Return primitives, no draft needed
		// - concat, flat: Return NEW arrays (not subsets). Elements are base values.
		//   This is intentional - concat/flat create new data structures rather than
		//   selecting subsets of the original, making draft tracking impractical.
		return source[method as keyof typeof Array.prototype](...args)
	}

	loadPlugin(PluginArrayMethods, {
		createMethodInterceptor,
		isArrayOperationMethod,
		isMutatingArrayMethod
	})
}
