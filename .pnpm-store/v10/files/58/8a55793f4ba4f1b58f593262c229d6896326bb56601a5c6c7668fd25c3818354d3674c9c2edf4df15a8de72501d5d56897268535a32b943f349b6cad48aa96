import type { InternalSerializeQueryArgs } from '../defaultSerializeQueryArgs'
import type {
  EndpointDefinition,
  EndpointDefinitions,
  InfiniteQueryArgFrom,
  InfiniteQueryDefinition,
  MutationDefinition,
  QueryArgFrom,
  QueryArgFromAnyQuery,
  QueryDefinition,
  ReducerPathFrom,
  TagDescription,
  TagTypesFrom,
} from '../endpointDefinitions'
import { expandTagDescription } from '../endpointDefinitions'
import { filterMap, isNotNullish } from '../utils'
import type {
  InfiniteData,
  InfiniteQueryConfigOptions,
  InfiniteQuerySubState,
  MutationSubState,
  QueryCacheKey,
  QueryState,
  QuerySubState,
  RequestStatusFlags,
  RootState as _RootState,
  QueryStatus,
} from './apiState'
import { STATUS_UNINITIALIZED, getRequestStatusFlags } from './apiState'
import { getMutationCacheKey } from './buildSlice'
import type { createSelector as _createSelector } from './rtkImports'
import { createNextState } from './rtkImports'
import {
  type AllQueryKeys,
  getNextPageParam,
  getPreviousPageParam,
} from './buildThunks'

export type SkipToken = typeof skipToken
/**
 * Can be passed into `useQuery`, `useQueryState` or `useQuerySubscription`
 * instead of the query argument to get the same effect as if setting
 * `skip: true` in the query options.
 *
 * Useful for scenarios where a query should be skipped when `arg` is `undefined`
 * and TypeScript complains about it because `arg` is not allowed to be passed
 * in as `undefined`, such as
 *
 * ```ts
 * // codeblock-meta title="will error if the query argument is not allowed to be undefined" no-transpile
 * useSomeQuery(arg, { skip: !!arg })
 * ```
 *
 * ```ts
 * // codeblock-meta title="using skipToken instead" no-transpile
 * useSomeQuery(arg ?? skipToken)
 * ```
 *
 * If passed directly into a query or mutation selector, that selector will always
 * return an uninitialized state.
 */
export const skipToken = /* @__PURE__ */ Symbol.for('RTKQ/skipToken')

export type BuildSelectorsApiEndpointQuery<
  Definition extends QueryDefinition<any, any, any, any, any>,
  Definitions extends EndpointDefinitions,
> = {
  select: QueryResultSelectorFactory<
    Definition,
    _RootState<
      Definitions,
      TagTypesFrom<Definition>,
      ReducerPathFrom<Definition>
    >
  >
}

export type BuildSelectorsApiEndpointInfiniteQuery<
  Definition extends InfiniteQueryDefinition<any, any, any, any, any>,
  Definitions extends EndpointDefinitions,
> = {
  select: InfiniteQueryResultSelectorFactory<
    Definition,
    _RootState<
      Definitions,
      TagTypesFrom<Definition>,
      ReducerPathFrom<Definition>
    >
  >
}

export type BuildSelectorsApiEndpointMutation<
  Definition extends MutationDefinition<any, any, any, any, any>,
  Definitions extends EndpointDefinitions,
> = {
  select: MutationResultSelectorFactory<
    Definition,
    _RootState<
      Definitions,
      TagTypesFrom<Definition>,
      ReducerPathFrom<Definition>
    >
  >
}

type QueryResultSelectorFactory<
  Definition extends QueryDefinition<any, any, any, any>,
  RootState,
> = (
  queryArg: QueryArgFrom<Definition> | SkipToken,
) => (state: RootState) => QueryResultSelectorResult<Definition>

export type QueryResultSelectorResult<
  Definition extends QueryDefinition<any, any, any, any>,
> = QuerySubState<Definition> & RequestStatusFlags

type InfiniteQueryResultSelectorFactory<
  Definition extends InfiniteQueryDefinition<any, any, any, any, any>,
  RootState,
> = (
  queryArg: InfiniteQueryArgFrom<Definition> | SkipToken,
) => (state: RootState) => InfiniteQueryResultSelectorResult<Definition>

export type InfiniteQueryResultFlags = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFetchingNextPage: boolean
  isFetchingPreviousPage: boolean
  isFetchNextPageError: boolean
  isFetchPreviousPageError: boolean
}

export type InfiniteQueryResultSelectorResult<
  Definition extends InfiniteQueryDefinition<any, any, any, any, any>,
> = InfiniteQuerySubState<Definition> &
  RequestStatusFlags &
  InfiniteQueryResultFlags

type MutationResultSelectorFactory<
  Definition extends MutationDefinition<any, any, any, any>,
  RootState,
> = (
  requestId:
    | string
    | { requestId: string | undefined; fixedCacheKey: string | undefined }
    | SkipToken,
) => (state: RootState) => MutationResultSelectorResult<Definition>

export type MutationResultSelectorResult<
  Definition extends MutationDefinition<any, any, any, any>,
> = MutationSubState<Definition> & RequestStatusFlags

const initialSubState: QuerySubState<any> = {
  status: STATUS_UNINITIALIZED,
}

// abuse immer to freeze default states
const defaultQuerySubState = /* @__PURE__ */ createNextState(
  initialSubState,
  () => {},
)
const defaultMutationSubState = /* @__PURE__ */ createNextState(
  initialSubState as MutationSubState<any>,
  () => {},
)

export type AllSelectors = ReturnType<typeof buildSelectors>

export function buildSelectors<
  Definitions extends EndpointDefinitions,
  ReducerPath extends string,
>({
  serializeQueryArgs,
  reducerPath,
  createSelector,
}: {
  serializeQueryArgs: InternalSerializeQueryArgs
  reducerPath: ReducerPath
  createSelector: typeof _createSelector
}) {
  type RootState = _RootState<Definitions, string, string>

  const selectSkippedQuery = (state: RootState) => defaultQuerySubState
  const selectSkippedMutation = (state: RootState) => defaultMutationSubState

  return {
    buildQuerySelector,
    buildInfiniteQuerySelector,
    buildMutationSelector,
    selectInvalidatedBy,
    selectCachedArgsForQuery,
    selectApiState,
    selectQueries,
    selectMutations,
    selectQueryEntry,
    selectConfig,
  }

  function withRequestFlags<T extends { status: QueryStatus }>(
    substate: T,
  ): T & RequestStatusFlags {
    return { ...substate, ...getRequestStatusFlags(substate.status) }
  }

  function selectApiState(rootState: RootState) {
    const state = rootState[reducerPath]
    if (process.env.NODE_ENV !== 'production') {
      if (!state) {
        if ((selectApiState as any).triggered) return state
        ;(selectApiState as any).triggered = true
        console.error(
          `Error: No data found at \`state.${reducerPath}\`. Did you forget to add the reducer to the store?`,
        )
      }
    }
    return state
  }

  function selectQueries(rootState: RootState) {
    return selectApiState(rootState)?.queries
  }

  function selectQueryEntry(rootState: RootState, cacheKey: QueryCacheKey) {
    return selectQueries(rootState)?.[cacheKey]
  }

  function selectMutations(rootState: RootState) {
    return selectApiState(rootState)?.mutations
  }

  function selectConfig(rootState: RootState) {
    return selectApiState(rootState)?.config
  }

  function buildAnyQuerySelector(
    endpointName: string,
    endpointDefinition: EndpointDefinition<any, any, any, any>,
    combiner: <T extends { status: QueryStatus }>(
      substate: T,
    ) => T & RequestStatusFlags,
  ) {
    return (queryArgs: any) => {
      // Avoid calling serializeQueryArgs if the arg is skipToken
      if (queryArgs === skipToken) {
        return createSelector(selectSkippedQuery, combiner)
      }

      const serializedArgs = serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName,
      })
      const selectQuerySubstate = (state: RootState) =>
        selectQueryEntry(state, serializedArgs) ?? defaultQuerySubState

      return createSelector(selectQuerySubstate, combiner)
    }
  }

  function buildQuerySelector(
    endpointName: string,
    endpointDefinition: QueryDefinition<any, any, any, any>,
  ) {
    return buildAnyQuerySelector(
      endpointName,
      endpointDefinition,
      withRequestFlags,
    ) as QueryResultSelectorFactory<any, RootState>
  }

  function buildInfiniteQuerySelector(
    endpointName: string,
    endpointDefinition: InfiniteQueryDefinition<any, any, any, any, any>,
  ) {
    const { infiniteQueryOptions } = endpointDefinition

    function withInfiniteQueryResultFlags<T extends { status: QueryStatus }>(
      substate: T,
    ): T & RequestStatusFlags & InfiniteQueryResultFlags {
      const stateWithRequestFlags = {
        ...(substate as InfiniteQuerySubState<any>),
        ...getRequestStatusFlags(substate.status),
      }

      const { isLoading, isError, direction } = stateWithRequestFlags
      const isForward = direction === 'forward'
      const isBackward = direction === 'backward'

      return {
        ...stateWithRequestFlags,
        hasNextPage: getHasNextPage(
          infiniteQueryOptions,
          stateWithRequestFlags.data,
          stateWithRequestFlags.originalArgs,
        ),
        hasPreviousPage: getHasPreviousPage(
          infiniteQueryOptions,
          stateWithRequestFlags.data,
          stateWithRequestFlags.originalArgs,
        ),
        isFetchingNextPage: isLoading && isForward,
        isFetchingPreviousPage: isLoading && isBackward,
        isFetchNextPageError: isError && isForward,
        isFetchPreviousPageError: isError && isBackward,
      }
    }

    return buildAnyQuerySelector(
      endpointName,
      endpointDefinition,
      withInfiniteQueryResultFlags,
    ) as unknown as InfiniteQueryResultSelectorFactory<any, RootState>
  }

  function buildMutationSelector() {
    return ((id) => {
      let mutationId: string | typeof skipToken
      if (typeof id === 'object') {
        mutationId = getMutationCacheKey(id) ?? skipToken
      } else {
        mutationId = id
      }
      const selectMutationSubstate = (state: RootState) =>
        selectApiState(state)?.mutations?.[mutationId as string] ??
        defaultMutationSubState
      const finalSelectMutationSubstate =
        mutationId === skipToken
          ? selectSkippedMutation
          : selectMutationSubstate

      return createSelector(finalSelectMutationSubstate, withRequestFlags)
    }) as MutationResultSelectorFactory<any, RootState>
  }

  function selectInvalidatedBy(
    state: RootState,
    tags: ReadonlyArray<TagDescription<string> | null | undefined>,
  ): Array<{
    endpointName: string
    originalArgs: any
    queryCacheKey: QueryCacheKey
  }> {
    const apiState = state[reducerPath]
    const toInvalidate = new Set<QueryCacheKey>()
    const finalTags = filterMap(tags, isNotNullish, expandTagDescription)
    for (const tag of finalTags) {
      const provided = apiState.provided.tags[tag.type]
      if (!provided) {
        continue
      }

      let invalidateSubscriptions =
        (tag.id !== undefined
          ? // id given: invalidate all queries that provide this type & id
            provided[tag.id]
          : // no id: invalidate all queries that provide this type
            Object.values(provided).flat()) ?? []

      for (const invalidate of invalidateSubscriptions) {
        toInvalidate.add(invalidate)
      }
    }

    return Array.from(toInvalidate.values()).flatMap((queryCacheKey) => {
      const querySubState = apiState.queries[queryCacheKey]
      return querySubState
        ? {
            queryCacheKey,
            endpointName: querySubState.endpointName!,
            originalArgs: querySubState.originalArgs,
          }
        : []
    })
  }

  function selectCachedArgsForQuery<
    QueryName extends AllQueryKeys<Definitions>,
  >(
    state: RootState,
    queryName: QueryName,
  ): Array<QueryArgFromAnyQuery<Definitions[QueryName]>> {
    return filterMap(
      Object.values(selectQueries(state) as QueryState<any>),
      (
        entry,
      ): entry is Exclude<
        QuerySubState<Definitions[QueryName]>,
        { status: QueryStatus.uninitialized }
      > =>
        entry?.endpointName === queryName &&
        entry.status !== STATUS_UNINITIALIZED,
      (entry) => entry.originalArgs,
    )
  }

  function getHasNextPage(
    options: InfiniteQueryConfigOptions<any, any, any>,
    data?: InfiniteData<unknown, unknown>,
    queryArg?: unknown,
  ): boolean {
    if (!data) return false
    return getNextPageParam(options, data, queryArg) != null
  }

  function getHasPreviousPage(
    options: InfiniteQueryConfigOptions<any, any, any>,
    data?: InfiniteData<unknown, unknown>,
    queryArg?: unknown,
  ): boolean {
    if (!data || !options.getPreviousPageParam) return false
    return getPreviousPageParam(options, data, queryArg) != null
  }
}
