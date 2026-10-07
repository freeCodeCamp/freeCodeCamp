/**
 * Represents the longest array within an array of arrays.
 *
 * @template ArrayOfTuples An array of arrays.
 *
 * @internal
 */
type LongestTuple<ArrayOfTuples extends readonly unknown[][]> = ArrayOfTuples extends [infer FirstArray extends unknown[]] ? FirstArray : ArrayOfTuples extends [
    infer FirstArray,
    ...infer RestArrays extends unknown[][]
] ? LongerOfTwo<FirstArray, LongestTuple<RestArrays>> : never;
/**
 * Determines the longer of two array types.
 *
 * @template ArrayOne First array type.
 * @template ArrayTwo Second array type.
 *
 * @internal
 */
type LongerOfTwo<ArrayOne, ArrayTwo> = keyof ArrayTwo extends keyof ArrayOne ? ArrayOne : ArrayTwo;
/**
 * Extracts the element at a specific index in an array.
 *
 * @template ArrayType The array type.
 * @template Index The index type.
 *
 * @internal
 */
type ElementAt<ArrayType extends unknown[], Index extends PropertyKey> = Index extends keyof ArrayType ? ArrayType[Index] : unknown;
/**
 * Maps each array in an array of arrays to its element at a given index.
 *
 * @template ArrayOfTuples An array of arrays.
 * @template Index The index to extract from each array.
 *
 * @internal
 */
type ElementsAtGivenIndex<ArrayOfTuples extends readonly unknown[][], Index extends PropertyKey> = {
    [ArrayIndex in keyof ArrayOfTuples]: ElementAt<ArrayOfTuples[ArrayIndex], Index>;
};
/**
 * Computes the intersection of all types in a tuple.
 *
 * @template Tuple A tuple of types.
 *
 * @internal
 */
type Intersect<Tuple extends readonly unknown[]> = Tuple extends [] ? unknown : Tuple extends [infer Head, ...infer Tail] ? Head & Intersect<Tail> : Tuple[number];
/**
 * Merges a tuple of arrays into a single tuple, intersecting types at each index.
 *
 * @template ArrayOfTuples An array of tuples.
 * @template LongestArray The longest array in ArrayOfTuples.
 *
 * @internal
 */
type MergeTuples<ArrayOfTuples extends readonly unknown[][], LongestArray extends unknown[] = LongestTuple<ArrayOfTuples>> = {
    [Index in keyof LongestArray]: Intersect<ElementsAtGivenIndex<ArrayOfTuples, Index>>;
};
/**
 * Extracts the parameter types from a tuple of functions.
 *
 * @template FunctionsArray An array of function types.
 *
 * @internal
 */
type ExtractParameters<FunctionsArray extends readonly AnyFunction[]> = {
    [Index in keyof FunctionsArray]: Parameters<FunctionsArray[Index]>;
};
/**
 * Merges the parameters of a tuple of functions into a single tuple.
 *
 * @template FunctionsArray An array of function types.
 *
 * @internal
 */
type MergeParameters<FunctionsArray extends readonly AnyFunction[]> = '0' extends keyof FunctionsArray ? MergeTuples<ExtractParameters<FunctionsArray>> : Parameters<FunctionsArray[number]>;

/**
 * Configuration options for a memoization function utilizing `WeakMap` for
 * its caching mechanism.
 *
 * @template Result - The type of the return value of the memoized function.
 *
 * @since 5.0.0
 * @public
 */
interface WeakMapMemoizeOptions<Result = any> {
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
    resultEqualityCheck?: EqualityFn<Result>;
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
declare function weakMapMemoize<Func extends AnyFunction>(func: Func, options?: WeakMapMemoizeOptions<ReturnType<Func>>): Func & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
};

/**
 * A standard selector function.
 * @template State - The first value, often a Redux root state object.
 * @template Result - The final result returned by the selector.
 * @template Params - All additional arguments passed into the selector.
 *
 * @public
 */
type Selector<State = any, Result = unknown, Params extends readonly any[] = any[]> = Distribute<
/**
 * A function that takes a state and returns data that is based on that state.
 *
 * @param state - The first argument, often a Redux root state object.
 * @param params - All additional arguments passed into the selector.
 * @returns A derived value from the state.
 */
(state: State, ...params: FallbackIfNever<Params, []>) => Result>;
/**
 * An array of input selectors.
 *
 * @public
 */
type SelectorArray<State = any> = readonly Selector<State>[];
/**
 * Extracts an array of all return types from all input selectors.
 *
 * @public
 */
type SelectorResultArray<Selectors extends SelectorArray> = ExtractReturnType<Selectors>;
/**
 * The options object used inside `createSelector` and `createSelectorCreator`.
 *
 * @template MemoizeFunction - The type of the memoize function that is used to memoize the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 * @template ArgsMemoizeFunction - The type of the optional memoize function that is used to memoize the arguments passed into the output selector generated by `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`). If none is explicitly provided, `weakMapMemoize` will be used.
 * @template OverrideMemoizeFunction - The type of the optional `memoize` function that could be passed into the options object inside `createSelector` to override the original `memoize` function that was initially passed into `createSelectorCreator`.
 * @template OverrideArgsMemoizeFunction - The type of the optional `argsMemoize` function that could be passed into the options object inside `createSelector` to override the original `argsMemoize` function that was initially passed into `createSelectorCreator`. If none was initially provided, `weakMapMemoize` will be used.
 *
 * @public
 */
interface CreateSelectorOptions<MemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, OverrideMemoizeFunction extends UnknownMemoizer = never, OverrideArgsMemoizeFunction extends UnknownMemoizer = never> {
    /**
     * Reselect performs additional checks in development mode to help identify
     * and warn about potential issues in selector behavior. This option
     * allows you to customize the behavior of these checks per selector.
     *
     * @see {@link https://reselect.js.org/api/development-only-stability-checks Development-Only Stability Checks}
     *
     * @since 5.0.0
     */
    devModeChecks?: Partial<DevModeChecks>;
    /**
     * The memoize function that is used to memoize the {@linkcode OutputSelectorFields.resultFunc resultFunc}
     * inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
     *
     * When passed directly into `createSelector`, it overrides the `memoize` function initially passed into `createSelectorCreator`.
     *
     * @example
     * ```ts
     * import { createSelector, weakMapMemoize } from 'reselect'
     *
     * const selectItemsByCategory = createSelector(
     *   [
     *     (state: RootState) => state.items,
     *     (state: RootState, category: string) => category
     *   ],
     *   (items, category) => items.filter(item => item.category === category),
     *   { memoize: weakMapMemoize }
     * )
     * ```
     *
     * @since 5.0.0
     */
    memoize?: FallbackIfNever<OverrideMemoizeFunction, MemoizeFunction>;
    /**
     * The optional memoize function that is used to memoize the arguments
     * passed into the output selector generated by `createSelector`
     * (e.g., `lruMemoize` or `weakMapMemoize`).
     *
     * When passed directly into `createSelector`, it overrides the
     * `argsMemoize` function initially passed into `createSelectorCreator`.
     * If none was initially provided, `weakMapMemoize` will be used.
     *
     * @example
     * ```ts
     * import { createSelector, weakMapMemoize } from 'reselect'
     *
     * const selectItemsByCategory = createSelector(
     *   [
     *     (state: RootState) => state.items,
     *     (state: RootState, category: string) => category
     *   ],
     *   (items, category) => items.filter(item => item.category === category),
     *   { argsMemoize: weakMapMemoize }
     * )
     * ```
     *
     * @default weakMapMemoize
     *
     * @since 5.0.0
     */
    argsMemoize?: FallbackIfNever<OverrideArgsMemoizeFunction, ArgsMemoizeFunction>;
    /**
     * Optional configuration options for the {@linkcode CreateSelectorOptions.memoize memoize} function.
     * These options are passed to the {@linkcode CreateSelectorOptions.memoize memoize} function as the second argument.
     *
     * @since 5.0.0
     */
    memoizeOptions?: OverrideMemoizeOptions<MemoizeFunction, OverrideMemoizeFunction>;
    /**
     * Optional configuration options for the {@linkcode CreateSelectorOptions.argsMemoize argsMemoize} function.
     * These options are passed to the {@linkcode CreateSelectorOptions.argsMemoize argsMemoize} function as the second argument.
     *
     * @since 5.0.0
     */
    argsMemoizeOptions?: OverrideMemoizeOptions<ArgsMemoizeFunction, OverrideArgsMemoizeFunction>;
}
/**
 * The additional fields attached to the output selector generated by `createSelector`.
 *
 * **Note**: Although {@linkcode CreateSelectorOptions.memoize memoize}
 * and {@linkcode CreateSelectorOptions.argsMemoize argsMemoize} are included in the attached fields,
 * the fields themselves are independent of the type of
 * {@linkcode CreateSelectorOptions.memoize memoize} and {@linkcode CreateSelectorOptions.argsMemoize argsMemoize} functions.
 * Meaning this type is not going to generate additional fields based on what functions we use to memoize our selectors.
 *
 * _This type is not to be confused with {@linkcode ExtractMemoizerFields ExtractMemoizerFields}._
 *
 * @template InputSelectors - The type of the input selectors.
 * @template Result - The type of the result returned by the `resultFunc`.
 * @template MemoizeFunction - The type of the memoize function that is used to memoize the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 * @template ArgsMemoizeFunction - The type of the optional memoize function that is used to memoize the arguments passed into the output selector generated by `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`). If none is explicitly provided, `weakMapMemoize` will be used.
 *
 * @public
 */
type OutputSelectorFields<InputSelectors extends SelectorArray = SelectorArray, Result = unknown, MemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize> = {
    /**
     * The final function passed to `createSelector`. Otherwise known as the `combiner`.
     */
    resultFunc: Combiner<InputSelectors, Result>;
    /**
     * The memoized version of {@linkcode OutputSelectorFields.resultFunc resultFunc}.
     */
    memoizedResultFunc: Combiner<InputSelectors, Result> & ExtractMemoizerFields<MemoizeFunction>;
    /**
     * @Returns The last result calculated by {@linkcode OutputSelectorFields.memoizedResultFunc memoizedResultFunc}.
     */
    lastResult: () => Result;
    /**
     * The array of the input selectors used by `createSelector` to compose the
     * combiner ({@linkcode OutputSelectorFields.memoizedResultFunc memoizedResultFunc}).
     */
    dependencies: InputSelectors;
    /**
     * Counts the number of times {@linkcode OutputSelectorFields.memoizedResultFunc memoizedResultFunc} has been recalculated.
     */
    recomputations: () => number;
    /**
     * Resets the count of {@linkcode OutputSelectorFields.recomputations recomputations} count to 0.
     */
    resetRecomputations: () => void;
    /**
     * Counts the number of times the input selectors ({@linkcode OutputSelectorFields.dependencies dependencies})
     * have been recalculated. This is distinct from {@linkcode OutputSelectorFields.recomputations recomputations},
     * which tracks the recalculations of the result function.
     *
     * @since 5.0.0
     */
    dependencyRecomputations: () => number;
    /**
     * Resets the count {@linkcode OutputSelectorFields.dependencyRecomputations dependencyRecomputations}
     * for the input selectors ({@linkcode OutputSelectorFields.dependencies dependencies})
     * of a memoized selector.
     *
     * @since 5.0.0
     */
    resetDependencyRecomputations: () => void;
} & Simplify<Required<Pick<CreateSelectorOptions<MemoizeFunction, ArgsMemoizeFunction>, 'argsMemoize' | 'memoize'>>>;
/**
 * Represents the actual selectors generated by `createSelector`.
 *
 * @template InputSelectors - The type of the input selectors.
 * @template Result - The type of the result returned by the `resultFunc`.
 * @template MemoizeFunction - The type of the memoize function that is used to memoize the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 * @template ArgsMemoizeFunction - The type of the optional memoize function that is used to memoize the arguments passed into the output selector generated by `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`). If none is explicitly provided, `weakMapMemoize` will be used.
 *
 * @public
 */
type OutputSelector<InputSelectors extends SelectorArray = SelectorArray, Result = unknown, MemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize> = Selector<GetStateFromSelectors<InputSelectors>, Result, GetParamsFromSelectors<InputSelectors>> & ExtractMemoizerFields<ArgsMemoizeFunction> & OutputSelectorFields<InputSelectors, Result, MemoizeFunction, ArgsMemoizeFunction>;
/**
 * A function that takes input selectors' return values as arguments and returns a result. Otherwise known as `resultFunc`.
 *
 * @template InputSelectors - An array of input selectors.
 * @template Result - Result returned by `resultFunc`.
 *
 * @public
 */
type Combiner<InputSelectors extends SelectorArray, Result> = Distribute<
/**
 * A function that takes input selectors' return values as arguments and returns a result. Otherwise known as `resultFunc`.
 *
 * @param resultFuncArgs - Return values of input selectors.
 * @returns The return value of {@linkcode OutputSelectorFields.resultFunc resultFunc}.
 */
(...resultFuncArgs: SelectorResultArray<InputSelectors>) => Result>;
/**
 * A standard function returning true if two values are considered equal.
 *
 * @public
 */
type EqualityFn<T = any> = (a: T, b: T) => boolean;
/**
 * The frequency of development mode checks.
 *
 * @since 5.0.0
 * @public
 */
type DevModeCheckFrequency = 'always' | 'once' | 'never';
/**
 * Represents the configuration for development mode checks.
 *
 * @since 5.0.0
 * @public
 */
interface DevModeChecks {
    /**
     * Overrides the global input stability check for the selector.
     * - `once` - Run only the first time the selector is called.
     * - `always` - Run every time the selector is called.
     * - `never` - Never run the input stability check.
     *
     * @default 'once'
     *
     * @see {@link https://reselect.js.org/api/development-only-stability-checks Development-Only Stability Checks}
     * @see {@link https://reselect.js.org/api/development-only-stability-checks#inputstabilitycheck `inputStabilityCheck`}
     * @see {@link https://reselect.js.org/api/development-only-stability-checks#2-per-selector-by-passing-an-inputstabilitycheck-option-directly-to- per-selector-configuration}
     *
     * @since 5.0.0
     */
    inputStabilityCheck: DevModeCheckFrequency;
    /**
     * Overrides the global identity function check for the selector.
     * - `once` - Run only the first time the selector is called.
     * - `always` - Run every time the selector is called.
     * - `never` - Never run the identity function check.
     *
     * @default 'once'
     *
     * @see {@link https://reselect.js.org/api/development-only-stability-checks Development-Only Stability Checks}
     * @see {@link https://reselect.js.org/api/development-only-stability-checks#identityfunctioncheck `identityFunctionCheck`}
     * @see {@link https://reselect.js.org/api/development-only-stability-checks#2-per-selector-by-passing-an-identityfunctioncheck-option-directly-to- per-selector-configuration}
     *
     * @since 5.0.0
     */
    identityFunctionCheck: DevModeCheckFrequency;
}
/**
 * Represents execution information for development mode checks.
 *
 * @public
 * @since 5.0.0
 */
type DevModeChecksExecutionInfo = {
    [K in keyof DevModeChecks]: {
        /**
         * A boolean indicating whether the check should be executed.
         */
        shouldRun: boolean;
        /**
         * The function to execute for the check.
         */
        run: AnyFunction;
    };
};
/**
 * Determines the combined single "State" type (first arg) from all input selectors.
 *
 * @public
 */
type GetStateFromSelectors<Selectors extends SelectorArray> = MergeParameters<Selectors>[0];
/**
 * Determines the combined  "Params" type (all remaining args) from all input selectors.
 *
 * @public
 */
type GetParamsFromSelectors<Selectors extends SelectorArray> = ArrayTail<MergeParameters<Selectors>>;
/**
 * Any Memoizer function. A memoizer is a function that accepts another function and returns it.
 *
 * @template FunctionType - The type of the function that is memoized.
 *
 * @public
 */
type UnknownMemoizer<FunctionType extends UnknownFunction = UnknownFunction> = (func: FunctionType, ...options: any[]) => FunctionType;
/**
 * Extracts the options type for a memoization function based on its parameters.
 * The first parameter of the function is expected to be the function to be memoized,
 * followed by options for the memoization process.
 *
 * @template MemoizeFunction - The type of the memoize function to be checked.
 *
 * @public
 */
type MemoizeOptionsFromParameters<MemoizeFunction extends UnknownMemoizer> = (NonFunctionType<DropFirstParameter<MemoizeFunction>[0]> | FunctionType<DropFirstParameter<MemoizeFunction>[0]>) | (NonFunctionType<DropFirstParameter<MemoizeFunction>[number]> | FunctionType<DropFirstParameter<MemoizeFunction>[number]>)[];
/**
 * Derive the type of memoize options object based on whether the memoize function itself was overridden.
 *
 * _This type can be used for both `memoizeOptions` and `argsMemoizeOptions`._
 *
 * @template MemoizeFunction - The type of the `memoize` or `argsMemoize` function initially passed into `createSelectorCreator`.
 * @template OverrideMemoizeFunction - The type of the optional `memoize` or `argsMemoize` function passed directly into `createSelector` which then overrides the original `memoize` or `argsMemoize` function passed into `createSelectorCreator`.
 *
 * @public
 */
type OverrideMemoizeOptions<MemoizeFunction extends UnknownMemoizer, OverrideMemoizeFunction extends UnknownMemoizer = never> = IfNever<OverrideMemoizeFunction, Simplify<MemoizeOptionsFromParameters<MemoizeFunction>>, Simplify<MemoizeOptionsFromParameters<OverrideMemoizeFunction>>>;
/**
 * Extracts the additional properties or methods that a memoize function attaches to
 * the function it memoizes (e.g., `clearCache`).
 *
 * @template MemoizeFunction - The type of the memoize function to be checked.
 *
 * @public
 */
type ExtractMemoizerFields<MemoizeFunction extends UnknownMemoizer> = Simplify<OmitIndexSignature<ReturnType<MemoizeFunction>>>;
/**
 * Represents the additional properties attached to a function memoized by `reselect`.
 *
 * `lruMemoize`, `weakMapMemoize` and `autotrackMemoize` all return these properties.
 *
 * @see {@linkcode ExtractMemoizerFields ExtractMemoizerFields}
 *
 * @public
 */
type DefaultMemoizeFields = {
    /**
     * Clears the memoization cache associated with a memoized function.
     * This method is typically used to reset the state of the cache, allowing
     * for the garbage collection of previously memoized results and ensuring
     * that future calls to the function recompute the results.
     */
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
};
/**
 * Any function with any arguments.
 *
 * @internal
 */
type AnyFunction = (...args: any[]) => any;
/**
 * Any function with unknown arguments.
 *
 * @internal
 */
type UnknownFunction = (...args: unknown[]) => unknown;
/**
 * When a generic type parameter is using its default value of `never`, fallback to a different type.
 *
 * @template T - Type to be checked.
 * @template FallbackTo - Type to fallback to if `T` resolves to `never`.
 *
 * @internal
 */
type FallbackIfNever<T, FallbackTo> = IfNever<T, FallbackTo, T>;
/**
 * Extracts the non-function part of a type.
 *
 * @template T - The input type to be refined by excluding function types and index signatures.
 *
 * @internal
 */
type NonFunctionType<T> = Simplify<OmitIndexSignature<Exclude<T, AnyFunction>>>;
/**
 * Extracts the function part of a type.
 *
 * @template T - The input type to be refined by extracting function types.
 *
 * @internal
 */
type FunctionType<T> = Extract<T, AnyFunction>;
/**
 * Extracts the return type from all functions as a tuple.
 *
 * @internal
 */
type ExtractReturnType<FunctionsArray extends readonly AnyFunction[]> = {
    [Index in keyof FunctionsArray]: FunctionsArray[Index] extends FunctionsArray[number] ? FallbackIfUnknown<ReturnType<FunctionsArray[Index]>, any> : never;
};
/**
 * Utility type to infer the type of "all params of a function except the first",
 * so we can determine what arguments a memoize function accepts.
 *
 * @internal
 */
type DropFirstParameter<Func extends AnyFunction> = Func extends (firstArg: any, ...restArgs: infer Rest) => any ? Rest : never;
/**
 * Distributes over a type. It is used mostly to expand a function type
 * in hover previews while preserving their original JSDoc information.
 *
 * If preserving JSDoc information is not a concern, you can use {@linkcode ExpandFunction ExpandFunction}.
 *
 * @template T The type to be distributed.
 *
 * @internal
 */
type Distribute<T> = T extends T ? T : never;
/**
 * Extracts the type of an array or tuple minus the first element.
 *
 * @internal
 */
type ArrayTail<ArrayType> = ArrayType extends readonly [
    unknown,
    ...infer Tail
] ? Tail : [];
/**
 * An alias for type `{}`. Represents any value that is not `null` or `undefined`.
 * It is mostly used for semantic purposes to help distinguish between an
 * empty object type and `{}` as they are not the same.
 *
 * @internal
 */
type AnyNonNullishValue = NonNullable<unknown>;
/**
 * Same as {@linkcode AnyNonNullishValue AnyNonNullishValue} but aliased
 * for semantic purposes. It is intended to be used in scenarios where
 * a recursive type definition needs to be interrupted to ensure type safety
 * and to avoid excessively deep recursion that could lead to performance issues.
 *
 * @internal
 */
type InterruptRecursion = AnyNonNullishValue;
/**
 * An if-else-like type that resolves depending on whether the given type is `never`.
 * This is mainly used to conditionally resolve the type of a `memoizeOptions` object based on whether `memoize` is provided or not.
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/if-never.d.ts Source}
 *
 * @internal
 */
type IfNever<T, TypeIfNever, TypeIfNotNever> = [T] extends [never] ? TypeIfNever : TypeIfNotNever;
/**
 * Omit any index signatures from the given object type, leaving only explicitly defined properties.
 * This is mainly used to remove explicit `any`s from the return type of some memoizers (e.g, `microMemoize`).
 *
 * __Disclaimer:__ When used on an intersection of a function and an object,
 * the function is erased.
 *
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/omit-index-signature.d.ts Source}
 *
 * @internal
 */
type OmitIndexSignature<ObjectType> = {
    [KeyType in keyof ObjectType as {} extends Record<KeyType, unknown> ? never : KeyType]: ObjectType[KeyType];
};
/**
 * The infamous "convert a union type to an intersection type" hack
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/union-to-intersection.d.ts Source}
 * @see {@link https://github.com/microsoft/TypeScript/issues/29594 Reference}
 *
 * @internal
 */
type UnionToIntersection<Union> = (Union extends unknown ? (distributedUnion: Union) => void : never) extends (mergedIntersection: infer Intersection) => void ? // The `& Union` is to allow indexing by the resulting type
Intersection & Union : never;
/**
 * Code to convert a union of values into a tuple.
 * @see {@link https://stackoverflow.com/a/55128956/62937 Source}
 *
 * @internal
 */
type Push<T extends any[], V> = [...T, V];
/**
 * @see {@link https://stackoverflow.com/a/55128956/62937 Source}
 *
 * @internal
 */
type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;
/**
 * TS4.1+
 * @see {@link https://stackoverflow.com/a/55128956/62937 Source}
 *
 * @internal
 */
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;
/**
 * Converts "the values of an object" into a tuple, like a type-level `Object.values()`
 * @see {@link https://stackoverflow.com/a/68695508/62937 Source}
 *
 * @internal
 */
type ObjectValuesToTuple<T, KS extends any[] = TuplifyUnion<keyof T>, R extends any[] = []> = KS extends [infer K, ...infer KT] ? ObjectValuesToTuple<T, KT, [...R, T[K & keyof T]]> : R;
/**
 * Create a type that makes the given keys required.
 * The remaining keys are kept as is.
 *
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/set-required.d.ts Source}
 *
 * @internal
 */
type SetRequired<BaseType, Keys extends keyof BaseType> = Omit<BaseType, Keys> & Required<Pick<BaseType, Keys>>;
/**
 * An if-else-like type that resolves depending on whether the given type is `unknown`.
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/if-unknown.d.ts Source}
 *
 * @internal
 */
type IfUnknown<T, TypeIfUnknown, TypeIfNotUnknown> = unknown extends T ? [T] extends [null] ? TypeIfNotUnknown : TypeIfUnknown : TypeIfNotUnknown;
/**
 * When a type is resolves to `unknown`, fallback to a different type.
 *
 * @template T - Type to be checked.
 * @template FallbackTo - Type to fallback to if `T` resolves to `unknown`.
 *
 * @internal
 */
type FallbackIfUnknown<T, FallbackTo> = IfUnknown<T, FallbackTo, T>;
/**
 * Useful to flatten the type output to improve type hints shown in editors.
 * And also to transform an interface into a type to aide with assignability.
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts Source}
 *
 * @internal
 */
type Simplify<T> = T extends AnyFunction ? T : {
    [KeyType in keyof T]: T[KeyType];
} & AnyNonNullishValue;

/**
 * Uses an "auto-tracking" approach inspired by the work of the Ember Glimmer team.
 * It uses a Proxy to wrap arguments and track accesses to nested fields
 * in your selector on first read. Later, when the selector is called with
 * new arguments, it identifies which accessed fields have changed and
 * only recalculates the result if one or more of those accessed fields have changed.
 * This allows it to be more precise than the shallow equality checks in `lruMemoize`.
 *
 * __Design Tradeoffs for `autotrackMemoize`:__
 * - Pros:
 *    - It is likely to avoid excess calculations and recalculate fewer times than `lruMemoize` will,
 *    which may also result in fewer component re-renders.
 * - Cons:
 *    - It only has a cache size of 1.
 *    - It is slower than `lruMemoize`, because it has to do more work. (How much slower is dependent on the number of accessed fields in a selector, number of calls, frequency of input changes, etc)
 *    - It can have some unexpected behavior. Because it tracks nested field accesses,
 *    cases where you don't access a field will not recalculate properly.
 *    For example, a badly-written selector like:
 *      ```ts
 *      createSelector([state => state.todos], todos => todos)
 *      ```
 *      that just immediately returns the extracted value will never update, because it doesn't see any field accesses to check.
 *
 * __Use Cases for `autotrackMemoize`:__
 * - It is likely best used for cases where you need to access specific nested fields
 * in data, and avoid recalculating if other fields in the same data objects are immutably updated.
 *
 * @param func - The function to be memoized.
 * @returns A memoized function with a `.clearCache()` method attached.
 *
 * @example
 * <caption>Using `createSelector`</caption>
 * ```ts
 * import { unstable_autotrackMemoize as autotrackMemoize, createSelector } from 'reselect'
 *
 * const selectTodoIds = createSelector(
 *   [(state: RootState) => state.todos],
 *   (todos) => todos.map(todo => todo.id),
 *   { memoize: autotrackMemoize }
 * )
 * ```
 *
 * @example
 * <caption>Using `createSelectorCreator`</caption>
 * ```ts
 * import { unstable_autotrackMemoize as autotrackMemoize, createSelectorCreator } from 'reselect'
 *
 * const createSelectorAutotrack = createSelectorCreator({ memoize: autotrackMemoize })
 *
 * const selectTodoIds = createSelectorAutotrack(
 *   [(state: RootState) => state.todos],
 *   (todos) => todos.map(todo => todo.id)
 * )
 * ```
 *
 * @template Func - The type of the function that is memoized.
 *
 * @see {@link https://reselect.js.org/api/unstable_autotrackMemoize autotrackMemoize}
 *
 * @since 5.0.0
 * @public
 * @experimental
 */
declare function autotrackMemoize<Func extends AnyFunction>(func: Func): Func & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
};

/**
 * An instance of `createSelector`, customized with a given memoize implementation.
 *
 * @template MemoizeFunction - The type of the memoize function that is used to memoize the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 * @template ArgsMemoizeFunction - The type of the optional memoize function that is used to memoize the arguments passed into the output selector generated by `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`). If none is explicitly provided, `weakMapMemoize` will be used.
 * @template StateType - The type of state that the selectors created with this selector creator will operate on.
 *
 * @public
 */
interface CreateSelectorFunction<MemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, StateType = any> {
    /**
     * Creates a memoized selector function.
     *
     * @param createSelectorArgs - An arbitrary number of input selectors as separate inline arguments and a `combiner` function.
     * @returns A memoized output selector.
     *
     * @template InputSelectors - The type of the input selectors as an array.
     * @template Result - The return type of the `combiner` as well as the output selector.
     * @template OverrideMemoizeFunction - The type of the optional `memoize` function that could be passed into the options object to override the original `memoize` function that was initially passed into `createSelectorCreator`.
     * @template OverrideArgsMemoizeFunction - The type of the optional `argsMemoize` function that could be passed into the options object to override the original `argsMemoize` function that was initially passed into `createSelectorCreator`.
     *
     * @see {@link https://reselect.js.org/api/createselector `createSelector`}
     */
    <InputSelectors extends SelectorArray<StateType>, Result>(...createSelectorArgs: [
        ...inputSelectors: InputSelectors,
        combiner: Combiner<InputSelectors, Result>
    ]): OutputSelector<InputSelectors, Result, MemoizeFunction, ArgsMemoizeFunction> & InterruptRecursion;
    /**
     * Creates a memoized selector function.
     *
     * @param createSelectorArgs - An arbitrary number of input selectors as separate inline arguments, a `combiner` function and an `options` object.
     * @returns A memoized output selector.
     *
     * @template InputSelectors - The type of the input selectors as an array.
     * @template Result - The return type of the `combiner` as well as the output selector.
     * @template OverrideMemoizeFunction - The type of the optional `memoize` function that could be passed into the options object to override the original `memoize` function that was initially passed into `createSelectorCreator`.
     * @template OverrideArgsMemoizeFunction - The type of the optional `argsMemoize` function that could be passed into the options object to override the original `argsMemoize` function that was initially passed into `createSelectorCreator`.
     *
     * @see {@link https://reselect.js.org/api/createselector `createSelector`}
     */
    <InputSelectors extends SelectorArray<StateType>, Result, OverrideMemoizeFunction extends UnknownMemoizer = MemoizeFunction, OverrideArgsMemoizeFunction extends UnknownMemoizer = ArgsMemoizeFunction>(...createSelectorArgs: [
        ...inputSelectors: InputSelectors,
        combiner: Combiner<InputSelectors, Result>,
        createSelectorOptions: Simplify<CreateSelectorOptions<MemoizeFunction, ArgsMemoizeFunction, OverrideMemoizeFunction, OverrideArgsMemoizeFunction>>
    ]): OutputSelector<InputSelectors, Result, OverrideMemoizeFunction, OverrideArgsMemoizeFunction> & InterruptRecursion;
    /**
     * Creates a memoized selector function.
     *
     * @param inputSelectors - An array of input selectors.
     * @param combiner - A function that Combines the input selectors and returns an output selector. Otherwise known as the result function.
     * @param createSelectorOptions - An optional options object that allows for further customization per selector.
     * @returns A memoized output selector.
     *
     * @template InputSelectors - The type of the input selectors array.
     * @template Result - The return type of the `combiner` as well as the output selector.
     * @template OverrideMemoizeFunction - The type of the optional `memoize` function that could be passed into the options object to override the original `memoize` function that was initially passed into `createSelectorCreator`.
     * @template OverrideArgsMemoizeFunction - The type of the optional `argsMemoize` function that could be passed into the options object to override the original `argsMemoize` function that was initially passed into `createSelectorCreator`.
     *
     * @see {@link https://reselect.js.org/api/createselector `createSelector`}
     */
    <InputSelectors extends SelectorArray<StateType>, Result, OverrideMemoizeFunction extends UnknownMemoizer = MemoizeFunction, OverrideArgsMemoizeFunction extends UnknownMemoizer = ArgsMemoizeFunction>(inputSelectors: [...InputSelectors], combiner: Combiner<InputSelectors, Result>, createSelectorOptions?: Simplify<CreateSelectorOptions<MemoizeFunction, ArgsMemoizeFunction, OverrideMemoizeFunction, OverrideArgsMemoizeFunction>>): OutputSelector<InputSelectors, Result, OverrideMemoizeFunction, OverrideArgsMemoizeFunction> & InterruptRecursion;
    /**
     * Creates a "pre-typed" version of {@linkcode createSelector createSelector}
     * where the `state` type is predefined.
     *
     * This allows you to set the `state` type once, eliminating the need to
     * specify it with every {@linkcode createSelector createSelector} call.
     *
     * @returns A pre-typed `createSelector` with the state type already defined.
     *
     * @example
     * ```ts
     * import { createSelector } from 'reselect'
     *
     * export interface RootState {
     *   todos: { id: number; completed: boolean }[]
     *   alerts: { id: number; read: boolean }[]
     * }
     *
     * export const createAppSelector = createSelector.withTypes<RootState>()
     *
     * const selectTodoIds = createAppSelector(
     *   [
     *     // Type of `state` is set to `RootState`, no need to manually set the type
     *     state => state.todos
     *   ],
     *   todos => todos.map(({ id }) => id)
     * )
     * ```
     * @template OverrideStateType - The specific type of state used by all selectors created with this selector creator.
     *
     * @see {@link https://reselect.js.org/api/createselector#defining-a-pre-typed-createselector `createSelector.withTypes`}
     *
     * @since 5.1.0
     */
    withTypes: <OverrideStateType extends StateType>() => CreateSelectorFunction<MemoizeFunction, ArgsMemoizeFunction, OverrideStateType>;
}
/**
 * Creates a selector creator function with the specified memoization function
 * and options for customizing memoization behavior.
 *
 * @param options - An options object containing the `memoize` function responsible for memoizing the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`). It also provides additional options for customizing memoization. While the `memoize` property is mandatory, the rest are optional.
 * @returns A customized `createSelector` function.
 *
 * @example
 * ```ts
 * const customCreateSelector = createSelectorCreator({
 *   memoize: customMemoize, // Function to be used to memoize `resultFunc`
 *   memoizeOptions: [memoizeOption1, memoizeOption2], // Options passed to `customMemoize` as the second argument onwards
 *   argsMemoize: customArgsMemoize, // Function to be used to memoize the selector's arguments
 *   argsMemoizeOptions: [argsMemoizeOption1, argsMemoizeOption2] // Options passed to `customArgsMemoize` as the second argument onwards
 * })
 *
 * const customSelector = customCreateSelector(
 *   [inputSelector1, inputSelector2],
 *   resultFunc // `resultFunc` will be passed as the first argument to `customMemoize`
 * )
 *
 * customSelector(
 *   ...selectorArgs // Will be memoized by `customArgsMemoize`
 * )
 * ```
 *
 * @template MemoizeFunction - The type of the memoize function that is used to memoize the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 * @template ArgsMemoizeFunction - The type of the optional memoize function that is used to memoize the arguments passed into the output selector generated by `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`). If none is explicitly provided, `weakMapMemoize` will be used.
 *
 * @see {@link https://reselect.js.org/api/createSelectorCreator#using-options-since-500 `createSelectorCreator`}
 *
 * @since 5.0.0
 * @public
 */
declare function createSelectorCreator<MemoizeFunction extends UnknownMemoizer, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize>(options: Simplify<SetRequired<CreateSelectorOptions<typeof weakMapMemoize, typeof weakMapMemoize, MemoizeFunction, ArgsMemoizeFunction>, 'memoize'>>): CreateSelectorFunction<MemoizeFunction, ArgsMemoizeFunction>;
/**
 * Creates a selector creator function with the specified memoization function
 * and options for customizing memoization behavior.
 *
 * @param memoize - The `memoize` function responsible for memoizing the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 * @param memoizeOptionsFromArgs - Optional configuration options for the memoization function. These options are then passed to the memoize function as the second argument onwards.
 * @returns A customized `createSelector` function.
 *
 * @example
 * ```ts
 * const customCreateSelector = createSelectorCreator(customMemoize, // Function to be used to memoize `resultFunc`
 *   option1, // Will be passed as second argument to `customMemoize`
 *   option2, // Will be passed as third argument to `customMemoize`
 *   option3 // Will be passed as fourth argument to `customMemoize`
 * )
 *
 * const customSelector = customCreateSelector(
 *   [inputSelector1, inputSelector2],
 *   resultFunc // `resultFunc` will be passed as the first argument to `customMemoize`
 * )
 * ```
 *
 * @template MemoizeFunction - The type of the memoize function that is used to memoize the `resultFunc` inside `createSelector` (e.g., `lruMemoize` or `weakMapMemoize`).
 *
 * @see {@link https://reselect.js.org/api/createSelectorCreator#using-memoize-and-memoizeoptions `createSelectorCreator`}
 *
 * @public
 */
declare function createSelectorCreator<MemoizeFunction extends UnknownMemoizer>(memoize: MemoizeFunction, ...memoizeOptionsFromArgs: DropFirstParameter<MemoizeFunction>): CreateSelectorFunction<MemoizeFunction>;
/**
 * Accepts one or more "input selectors" (either as separate arguments or a single array),
 * a single "result function" / "combiner", and an optional options object, and
 * generates a memoized selector function.
 *
 * @see {@link https://reselect.js.org/api/createSelector `createSelector`}
 *
 * @public
 */
declare const createSelector: CreateSelectorFunction<typeof weakMapMemoize, typeof weakMapMemoize, any>;

/**
 * Represents a mapping of selectors to their return types.
 *
 * @template TObject - An object type where each property is a selector function.
 *
 * @public
 */
type SelectorResultsMap<TObject extends SelectorsObject> = {
    [Key in keyof TObject]: ReturnType<TObject[Key]>;
};
/**
 * Represents a mapping of selectors for each key in a given root state.
 *
 * This type is a utility that takes a root state object type and
 * generates a corresponding set of selectors. Each selector is associated
 * with a key in the root state, allowing for the selection
 * of specific parts of the state.
 *
 * @template RootState - The type of the root state object.
 *
 * @since 5.0.0
 * @public
 */
type RootStateSelectors<RootState = any> = {
    [Key in keyof RootState]: Selector<RootState, RootState[Key], []>;
};
/**
 * @deprecated Please use {@linkcode StructuredSelectorCreator.withTypes createStructuredSelector.withTypes<RootState>()} instead. This type will be removed in the future.
 * @template RootState - The type of the root state object.
 *
 * @since 5.0.0
 * @public
 */
type TypedStructuredSelectorCreator<RootState = any> = 
/**
 * A convenience function that simplifies returning an object
 * made up of selector results.
 *
 * @param inputSelectorsObject - A key value pair consisting of input selectors.
 * @param selectorCreator - A custom selector creator function. It defaults to `createSelector`.
 * @returns A memoized structured selector.
 *
 * @example
 * <caption>Modern Use Case</caption>
 * ```ts
 * import { createSelector, createStructuredSelector } from 'reselect'
 *
 * interface RootState {
 *   todos: {
 *     id: number
 *     completed: boolean
 *     title: string
 *     description: string
 *   }[]
 *   alerts: { id: number; read: boolean }[]
 * }
 *
 * // This:
 * const structuredSelector = createStructuredSelector(
 *   {
 *     todos: (state: RootState) => state.todos,
 *     alerts: (state: RootState) => state.alerts,
 *     todoById: (state: RootState, id: number) => state.todos[id]
 *   },
 *   createSelector
 * )
 *
 * // Is essentially the same as this:
 * const selector = createSelector(
 *   [
 *     (state: RootState) => state.todos,
 *     (state: RootState) => state.alerts,
 *     (state: RootState, id: number) => state.todos[id]
 *   ],
 *   (todos, alerts, todoById) => {
 *     return {
 *       todos,
 *       alerts,
 *       todoById
 *     }
 *   }
 * )
 * ```
 *
 * @example
 * <caption>In your component:</caption>
 * ```tsx
 * import type { RootState } from 'createStructuredSelector/modernUseCase'
 * import { structuredSelector } from 'createStructuredSelector/modernUseCase'
 * import type { FC } from 'react'
 * import { useSelector } from 'react-redux'
 *
 * interface Props {
 *   id: number
 * }
 *
 * const MyComponent: FC<Props> = ({ id }) => {
 *   const { todos, alerts, todoById } = useSelector((state: RootState) =>
 *     structuredSelector(state, id)
 *   )
 *
 *   return (
 *     <div>
 *       Next to do is:
 *       <h2>{todoById.title}</h2>
 *       <p>Description: {todoById.description}</p>
 *       <ul>
 *         <h3>All other to dos:</h3>
 *         {todos.map(todo => (
 *           <li key={todo.id}>{todo.title}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   )
 * }
 * ```
 *
 * @example
 * <caption>Simple Use Case</caption>
 * ```ts
 * const selectA = state => state.a
 * const selectB = state => state.b
 *
 * // The result function in the following selector
 * // is simply building an object from the input selectors
 * const structuredSelector = createSelector(selectA, selectB, (a, b) => ({
 *   a,
 *   b
 * }))
 *
 * const result = structuredSelector({ a: 1, b: 2 }) // will produce { x: 1, y: 2 }
 * ```
 *
 * @template InputSelectorsObject - The shape of the input selectors object.
 * @template MemoizeFunction - The type of the memoize function that is used to create the structured selector. It defaults to `weakMapMemoize`.
 * @template ArgsMemoizeFunction - The type of the of the memoize function that is used to memoize the arguments passed into the generated structured selector. It defaults to `weakMapMemoize`.
 *
 * @see {@link https://reselect.js.org/api/createStructuredSelector `createStructuredSelector`}
 */
<InputSelectorsObject extends RootStateSelectors<RootState> = RootStateSelectors<RootState>, MemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize>(inputSelectorsObject: InputSelectorsObject, selectorCreator?: CreateSelectorFunction<MemoizeFunction, ArgsMemoizeFunction>) => OutputSelector<ObjectValuesToTuple<InputSelectorsObject>, Simplify<SelectorResultsMap<InputSelectorsObject>>, MemoizeFunction, ArgsMemoizeFunction> & InterruptRecursion;
/**
 * Represents an object where each property is a selector function.
 *
 * @template StateType - The type of state that all the selectors operate on.
 *
 * @public
 */
type SelectorsObject<StateType = any> = Record<string, Selector<StateType>>;
/**
 * It provides a way to create structured selectors.
 * The structured selector can take multiple input selectors
 * and map their output to an object with specific keys.
 *
 * @template StateType - The type of state that the structured selectors created with this structured selector creator will operate on.
 *
 * @see {@link https://reselect.js.org/api/createStructuredSelector `createStructuredSelector`}
 *
 * @public
 */
interface StructuredSelectorCreator<StateType = any> {
    /**
     * A convenience function that simplifies returning an object
     * made up of selector results.
     *
     * @param inputSelectorsObject - A key value pair consisting of input selectors.
     * @param selectorCreator - A custom selector creator function. It defaults to `createSelector`.
     * @returns A memoized structured selector.
     *
     * @example
     * <caption>Modern Use Case</caption>
     * ```ts
     * import { createSelector, createStructuredSelector } from 'reselect'
     *
     * interface RootState {
     *   todos: {
     *     id: number
     *     completed: boolean
     *     title: string
     *     description: string
     *   }[]
     *   alerts: { id: number; read: boolean }[]
     * }
     *
     * // This:
     * const structuredSelector = createStructuredSelector(
     *   {
     *     todos: (state: RootState) => state.todos,
     *     alerts: (state: RootState) => state.alerts,
     *     todoById: (state: RootState, id: number) => state.todos[id]
     *   },
     *   createSelector
     * )
     *
     * // Is essentially the same as this:
     * const selector = createSelector(
     *   [
     *     (state: RootState) => state.todos,
     *     (state: RootState) => state.alerts,
     *     (state: RootState, id: number) => state.todos[id]
     *   ],
     *   (todos, alerts, todoById) => {
     *     return {
     *       todos,
     *       alerts,
     *       todoById
     *     }
     *   }
     * )
     * ```
     *
     * @example
     * <caption>In your component:</caption>
     * ```tsx
     * import type { RootState } from 'createStructuredSelector/modernUseCase'
     * import { structuredSelector } from 'createStructuredSelector/modernUseCase'
     * import type { FC } from 'react'
     * import { useSelector } from 'react-redux'
     *
     * interface Props {
     *   id: number
     * }
     *
     * const MyComponent: FC<Props> = ({ id }) => {
     *   const { todos, alerts, todoById } = useSelector((state: RootState) =>
     *     structuredSelector(state, id)
     *   )
     *
     *   return (
     *     <div>
     *       Next to do is:
     *       <h2>{todoById.title}</h2>
     *       <p>Description: {todoById.description}</p>
     *       <ul>
     *         <h3>All other to dos:</h3>
     *         {todos.map(todo => (
     *           <li key={todo.id}>{todo.title}</li>
     *         ))}
     *       </ul>
     *     </div>
     *   )
     * }
     * ```
     *
     * @example
     * <caption>Simple Use Case</caption>
     * ```ts
     * const selectA = state => state.a
     * const selectB = state => state.b
     *
     * // The result function in the following selector
     * // is simply building an object from the input selectors
     * const structuredSelector = createSelector(selectA, selectB, (a, b) => ({
     *   a,
     *   b
     * }))
     *
     * const result = structuredSelector({ a: 1, b: 2 }) // will produce { x: 1, y: 2 }
     * ```
     *
     * @template InputSelectorsObject - The shape of the input selectors object.
     * @template MemoizeFunction - The type of the memoize function that is used to create the structured selector. It defaults to `weakMapMemoize`.
     * @template ArgsMemoizeFunction - The type of the of the memoize function that is used to memoize the arguments passed into the generated structured selector. It defaults to `weakMapMemoize`.
     *
     * @see {@link https://reselect.js.org/api/createStructuredSelector `createStructuredSelector`}
     */
    <InputSelectorsObject extends SelectorsObject<StateType>, MemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize, ArgsMemoizeFunction extends UnknownMemoizer = typeof weakMapMemoize>(inputSelectorsObject: InputSelectorsObject, selectorCreator?: CreateSelectorFunction<MemoizeFunction, ArgsMemoizeFunction>): OutputSelector<ObjectValuesToTuple<InputSelectorsObject>, Simplify<SelectorResultsMap<InputSelectorsObject>>, MemoizeFunction, ArgsMemoizeFunction> & InterruptRecursion;
    /**
     * Creates a "pre-typed" version of
     * {@linkcode createStructuredSelector createStructuredSelector}
     * where the `state` type is predefined.
     *
     * This allows you to set the `state` type once, eliminating the need to
     * specify it with every
     * {@linkcode createStructuredSelector createStructuredSelector} call.
     *
     * @returns A pre-typed `createStructuredSelector` with the state type already defined.
     *
     * @example
     * ```ts
     * import { createStructuredSelector } from 'reselect'
     *
     * export interface RootState {
     *   todos: { id: number; completed: boolean }[]
     *   alerts: { id: number; read: boolean }[]
     * }
     *
     * export const createStructuredAppSelector =
     *   createStructuredSelector.withTypes<RootState>()
     *
     * const structuredAppSelector = createStructuredAppSelector({
     *   // Type of `state` is set to `RootState`, no need to manually set the type
     *   todos: state => state.todos,
     *   alerts: state => state.alerts,
     *   todoById: (state, id: number) => state.todos[id]
     * })
     *
     * ```
     * @template OverrideStateType - The specific type of state used by all structured selectors created with this structured selector creator.
     *
     * @see {@link https://reselect.js.org/api/createstructuredselector#defining-a-pre-typed-createstructuredselector `createSelector.withTypes`}
     *
     * @since 5.1.0
     */
    withTypes: <OverrideStateType extends StateType>() => StructuredSelectorCreator<OverrideStateType>;
}
/**
 * A convenience function that simplifies returning an object
 * made up of selector results.
 *
 * @param inputSelectorsObject - A key value pair consisting of input selectors.
 * @param selectorCreator - A custom selector creator function. It defaults to `createSelector`.
 * @returns A memoized structured selector.
 *
 * @example
 * <caption>Modern Use Case</caption>
 * ```ts
 * import { createSelector, createStructuredSelector } from 'reselect'
 *
 * interface RootState {
 *   todos: {
 *     id: number
 *     completed: boolean
 *     title: string
 *     description: string
 *   }[]
 *   alerts: { id: number; read: boolean }[]
 * }
 *
 * // This:
 * const structuredSelector = createStructuredSelector(
 *   {
 *     todos: (state: RootState) => state.todos,
 *     alerts: (state: RootState) => state.alerts,
 *     todoById: (state: RootState, id: number) => state.todos[id]
 *   },
 *   createSelector
 * )
 *
 * // Is essentially the same as this:
 * const selector = createSelector(
 *   [
 *     (state: RootState) => state.todos,
 *     (state: RootState) => state.alerts,
 *     (state: RootState, id: number) => state.todos[id]
 *   ],
 *   (todos, alerts, todoById) => {
 *     return {
 *       todos,
 *       alerts,
 *       todoById
 *     }
 *   }
 * )
 * ```
 *
 * @see {@link https://reselect.js.org/api/createStructuredSelector `createStructuredSelector`}
 *
 * @public
 */
declare const createStructuredSelector: StructuredSelectorCreator;

/**
 * Overrides the development mode checks settings for all selectors.
 *
 * Reselect performs additional checks in development mode to help identify and
 * warn about potential issues in selector behavior. This function allows you to
 * customize the behavior of these checks across all selectors in your application.
 *
 * **Note**: This setting can still be overridden per selector inside `createSelector`'s `options` object.
 * See {@link https://github.com/reduxjs/reselect#2-per-selector-by-passing-an-identityfunctioncheck-option-directly-to-createselector per-selector-configuration}
 * and {@linkcode CreateSelectorOptions.identityFunctionCheck identityFunctionCheck} for more details.
 *
 * _The development mode checks do not run in production builds._
 *
 * @param devModeChecks - An object specifying the desired settings for development mode checks. You can provide partial overrides. Unspecified settings will retain their current values.
 *
 * @example
 * ```ts
 * import { setGlobalDevModeChecks } from 'reselect'
 * import { DevModeChecks } from '../types'
 *
 * // Run only the first time the selector is called. (default)
 * setGlobalDevModeChecks({ inputStabilityCheck: 'once' })
 *
 * // Run every time the selector is called.
 * setGlobalDevModeChecks({ inputStabilityCheck: 'always' })
 *
 * // Never run the input stability check.
 * setGlobalDevModeChecks({ inputStabilityCheck: 'never' })
 *
 * // Run only the first time the selector is called. (default)
 * setGlobalDevModeChecks({ identityFunctionCheck: 'once' })
 *
 * // Run every time the selector is called.
 * setGlobalDevModeChecks({ identityFunctionCheck: 'always' })
 *
 * // Never run the identity function check.
 * setGlobalDevModeChecks({ identityFunctionCheck: 'never' })
 * ```
 * @see {@link https://reselect.js.org/api/development-only-stability-checks Development-Only Stability Checks}
 * @see {@link https://reselect.js.org/api/development-only-stability-checks#1-globally-through-setglobaldevmodechecks global-configuration}
 *
 * @since 5.0.0
 * @public
 */
declare const setGlobalDevModeChecks: (devModeChecks: Partial<DevModeChecks>) => void;

/**
 * Runs a simple reference equality check.
 * What {@linkcode lruMemoize lruMemoize} uses by default.
 *
 * **Note**: This function was previously known as `defaultEqualityCheck`.
 *
 * @public
 */
declare const referenceEqualityCheck: EqualityFn;
/**
 * Options for configuring the behavior of a function memoized with
 * LRU (Least Recently Used) caching.
 *
 * @template Result - The type of the return value of the memoized function.
 *
 * @public
 */
interface LruMemoizeOptions<Result = any> {
    /**
     * Function used to compare the individual arguments of the
     * provided calculation function.
     *
     * @default referenceEqualityCheck
     */
    equalityCheck?: EqualityFn;
    /**
     * If provided, used to compare a newly generated output value against
     * previous values in the cache. If a match is found,
     * the old value is returned. This addresses the common
     * ```ts
     * todos.map(todo => todo.id)
     * ```
     * use case, where an update to another field in the original data causes
     * a recalculation due to changed references, but the output is still
     * effectively the same.
     *
     * @since 4.1.0
     */
    resultEqualityCheck?: EqualityFn<Result>;
    /**
     * The maximum size of the cache used by the selector.
     * A size greater than 1 means the selector will use an
     * LRU (Least Recently Used) cache, allowing for the caching of multiple
     * results based on different sets of arguments.
     *
     * @default 1
     */
    maxSize?: number;
}
/**
 * Creates a memoized version of a function with an optional
 * LRU (Least Recently Used) cache. The memoized function uses a cache to
 * store computed values. Depending on the `maxSize` option, it will use
 * either a singleton cache (for a single entry) or an
 * LRU cache (for multiple entries).
 *
 * **Note**: This function was previously known as `defaultMemoize`.
 *
 * @param func - The function to be memoized.
 * @param equalityCheckOrOptions - Either an equality check function or an options object.
 * @returns A memoized function with a `.clearCache()` method attached.
 *
 * @template Func - The type of the function that is memoized.
 *
 * @see {@link https://reselect.js.org/api/lruMemoize `lruMemoize`}
 *
 * @public
 */
declare function lruMemoize<Func extends AnyFunction>(func: Func, equalityCheckOrOptions?: EqualityFn | LruMemoizeOptions<ReturnType<Func>>): Func & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
};

export { Combiner, CreateSelectorFunction, CreateSelectorOptions, DefaultMemoizeFields, DevModeCheckFrequency, DevModeChecks, DevModeChecksExecutionInfo, EqualityFn, ExtractMemoizerFields, GetParamsFromSelectors, GetStateFromSelectors, LruMemoizeOptions, MemoizeOptionsFromParameters, OutputSelector, OutputSelectorFields, OverrideMemoizeOptions, RootStateSelectors, Selector, SelectorArray, SelectorResultArray, SelectorResultsMap, SelectorsObject, StructuredSelectorCreator, TypedStructuredSelectorCreator, UnknownMemoizer, WeakMapMemoizeOptions, createSelector, createSelectorCreator, createStructuredSelector, lruMemoize, referenceEqualityCheck, setGlobalDevModeChecks, autotrackMemoize as unstable_autotrackMemoize, weakMapMemoize };
