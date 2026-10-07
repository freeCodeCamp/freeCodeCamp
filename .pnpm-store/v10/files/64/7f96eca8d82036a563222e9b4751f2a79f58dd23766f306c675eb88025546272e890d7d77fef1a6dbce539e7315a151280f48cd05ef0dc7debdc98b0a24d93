import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import type {
  BaseQueryFn,
  BaseQueryMeta,
  BaseQueryResult,
} from '../../baseQueryTypes'
import type {
  BaseEndpointDefinition,
  DefinitionType,
} from '../../endpointDefinitions'
import { isAnyQueryDefinition } from '../../endpointDefinitions'
import type { QueryCacheKey, RootState } from '../apiState'
import type {
  MutationResultSelectorResult,
  QueryResultSelectorResult,
} from '../buildSelectors'
import { getMutationCacheKey } from '../buildSlice'
import type { PatchCollection, Recipe } from '../buildThunks'
import { isAsyncThunkAction, isFulfilled } from '../rtkImports'
import type {
  ApiMiddlewareInternalHandler,
  InternalHandlerBuilder,
  PromiseWithKnownReason,
  SubMiddlewareApi,
} from './types'
import { getEndpointDefinition } from '@internal/query/apiTypes'

export type ReferenceCacheLifecycle = never

export interface QueryBaseLifecycleApi<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  ReducerPath extends string = string,
> extends LifecycleApi<ReducerPath> {
  /**
   * Gets the current value of this cache entry.
   */
  getCacheEntry(): QueryResultSelectorResult<
    { type: DefinitionType.query } & BaseEndpointDefinition<
      QueryArg,
      BaseQuery,
      ResultType,
      BaseQueryResult<BaseQuery>
    >
  >
  /**
   * Updates the current cache entry value.
   * For documentation see `api.util.updateQueryData`.
   */
  updateCachedData(updateRecipe: Recipe<ResultType>): PatchCollection
}

export type MutationBaseLifecycleApi<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  ReducerPath extends string = string,
> = LifecycleApi<ReducerPath> & {
  /**
   * Gets the current value of this cache entry.
   */
  getCacheEntry(): MutationResultSelectorResult<
    { type: DefinitionType.mutation } & BaseEndpointDefinition<
      QueryArg,
      BaseQuery,
      ResultType,
      BaseQueryResult<BaseQuery>
    >
  >
}

type LifecycleApi<ReducerPath extends string = string> = {
  /**
   * The dispatch method for the store
   */
  dispatch: ThunkDispatch<any, any, UnknownAction>
  /**
   * A method to get the current state
   */
  getState(): RootState<any, any, ReducerPath>
  /**
   * `extra` as provided as `thunk.extraArgument` to the `configureStore` `getDefaultMiddleware` option.
   */
  extra: unknown
  /**
   * A unique ID generated for the mutation
   */
  requestId: string
}

type CacheLifecyclePromises<ResultType = unknown, MetaType = unknown> = {
  /**
   * Promise that will resolve with the first value for this cache key.
   * This allows you to `await` until an actual value is in cache.
   *
   * If the cache entry is removed from the cache before any value has ever
   * been resolved, this Promise will reject with
   * `new Error('Promise never resolved before cacheEntryRemoved.')`
   * to prevent memory leaks.
   * You can just re-throw that error (or not handle it at all) -
   * it will be caught outside of `cacheEntryAdded`.
   *
   * If you don't interact with this promise, it will not throw.
   */
  cacheDataLoaded: PromiseWithKnownReason<
    {
      /**
       * The (transformed) query result.
       */
      data: ResultType
      /**
       * The `meta` returned by the `baseQuery`
       */
      meta: MetaType
    },
    typeof neverResolvedError
  >
  /**
   * Promise that allows you to wait for the point in time when the cache entry
   * has been removed from the cache, by not being used/subscribed to any more
   * in the application for too long or by dispatching `api.util.resetApiState`.
   */
  cacheEntryRemoved: Promise<void>
}

export interface QueryCacheLifecycleApi<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  ReducerPath extends string = string,
> extends QueryBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>,
    CacheLifecyclePromises<ResultType, BaseQueryMeta<BaseQuery>> {}

export type MutationCacheLifecycleApi<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  ReducerPath extends string = string,
> = MutationBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath> &
  CacheLifecyclePromises<ResultType, BaseQueryMeta<BaseQuery>>

export type CacheLifecycleQueryExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
> = {
  onCacheEntryAdded?(
    arg: QueryArg,
    api: QueryCacheLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>,
  ): Promise<void> | void
}

export type CacheLifecycleInfiniteQueryExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
> = CacheLifecycleQueryExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery,
  ReducerPath
>

export type CacheLifecycleMutationExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
> = {
  onCacheEntryAdded?(
    arg: QueryArg,
    api: MutationCacheLifecycleApi<
      QueryArg,
      BaseQuery,
      ResultType,
      ReducerPath
    >,
  ): Promise<void> | void
}

const neverResolvedError = new Error(
  'Promise never resolved before cacheEntryRemoved.',
) as Error & {
  message: 'Promise never resolved before cacheEntryRemoved.'
}

export const buildCacheLifecycleHandler: InternalHandlerBuilder = ({
  api,
  reducerPath,
  context,
  queryThunk,
  mutationThunk,
  internalState,
  selectors: { selectQueryEntry, selectApiState },
}) => {
  const isQueryThunk = isAsyncThunkAction(queryThunk)
  const isMutationThunk = isAsyncThunkAction(mutationThunk)
  const isFulfilledThunk = isFulfilled(queryThunk, mutationThunk)

  type CacheLifecycle = {
    valueResolved?(value: { data: unknown; meta: unknown }): unknown
    cacheEntryRemoved(): void
  }
  const lifecycleMap: Record<string, CacheLifecycle> = {}

  const { removeQueryResult, removeMutationResult, cacheEntriesUpserted } =
    api.internalActions

  function resolveLifecycleEntry(
    cacheKey: string,
    data: unknown,
    meta: unknown,
  ) {
    const lifecycle = lifecycleMap[cacheKey]

    if (lifecycle?.valueResolved) {
      lifecycle.valueResolved({
        data,
        meta,
      })
      delete lifecycle.valueResolved
    }
  }

  function removeLifecycleEntry(cacheKey: string) {
    const lifecycle = lifecycleMap[cacheKey]
    if (lifecycle) {
      delete lifecycleMap[cacheKey]
      lifecycle.cacheEntryRemoved()
    }
  }

  function getActionMetaFields(
    action:
      | ReturnType<typeof queryThunk.pending>
      | ReturnType<typeof mutationThunk.pending>,
  ) {
    const { arg, requestId } = action.meta
    const { endpointName, originalArgs } = arg
    return [endpointName, originalArgs, requestId] as const
  }

  const handler: ApiMiddlewareInternalHandler = (
    action,
    mwApi,
    stateBefore,
  ) => {
    const cacheKey = getCacheKey(action) as QueryCacheKey

    function checkForNewCacheKey(
      endpointName: string,
      cacheKey: QueryCacheKey,
      requestId: string,
      originalArgs: unknown,
    ) {
      const oldEntry = selectQueryEntry(stateBefore, cacheKey)
      const newEntry = selectQueryEntry(mwApi.getState(), cacheKey)
      if (!oldEntry && newEntry) {
        handleNewKey(endpointName, originalArgs, cacheKey, mwApi, requestId)
      }
    }

    if (queryThunk.pending.match(action)) {
      const [endpointName, originalArgs, requestId] =
        getActionMetaFields(action)
      checkForNewCacheKey(endpointName, cacheKey, requestId, originalArgs)
    } else if (cacheEntriesUpserted.match(action)) {
      for (const { queryDescription, value } of action.payload) {
        const { endpointName, originalArgs, queryCacheKey } = queryDescription
        checkForNewCacheKey(
          endpointName,
          queryCacheKey,
          action.meta.requestId,
          originalArgs,
        )

        resolveLifecycleEntry(queryCacheKey, value, {})
      }
    } else if (mutationThunk.pending.match(action)) {
      const state = mwApi.getState()[reducerPath].mutations[cacheKey]
      if (state) {
        const [endpointName, originalArgs, requestId] =
          getActionMetaFields(action)
        handleNewKey(endpointName, originalArgs, cacheKey, mwApi, requestId)
      }
    } else if (isFulfilledThunk(action)) {
      resolveLifecycleEntry(cacheKey, action.payload, action.meta.baseQueryMeta)
    } else if (
      removeQueryResult.match(action) ||
      removeMutationResult.match(action)
    ) {
      removeLifecycleEntry(cacheKey)
    } else if (api.util.resetApiState.match(action)) {
      for (const cacheKey of Object.keys(lifecycleMap)) {
        removeLifecycleEntry(cacheKey)
      }
    }
  }

  function getCacheKey(action: any) {
    if (isQueryThunk(action)) return action.meta.arg.queryCacheKey
    if (isMutationThunk(action)) {
      return action.meta.arg.fixedCacheKey ?? action.meta.requestId
    }
    if (removeQueryResult.match(action)) return action.payload.queryCacheKey
    if (removeMutationResult.match(action))
      return getMutationCacheKey(action.payload)
    return ''
  }

  function handleNewKey(
    endpointName: string,
    originalArgs: any,
    queryCacheKey: string,
    mwApi: SubMiddlewareApi,
    requestId: string,
  ) {
    const endpointDefinition = getEndpointDefinition(context, endpointName)
    const onCacheEntryAdded = endpointDefinition?.onCacheEntryAdded
    if (!onCacheEntryAdded) return

    const lifecycle = {} as CacheLifecycle

    const cacheEntryRemoved = new Promise<void>((resolve) => {
      lifecycle.cacheEntryRemoved = resolve
    })
    const cacheDataLoaded: PromiseWithKnownReason<
      { data: unknown; meta: unknown },
      typeof neverResolvedError
    > = Promise.race([
      new Promise<{ data: unknown; meta: unknown }>((resolve) => {
        lifecycle.valueResolved = resolve
      }),
      cacheEntryRemoved.then(() => {
        throw neverResolvedError
      }),
    ])
    // prevent uncaught promise rejections from happening.
    // if the original promise is used in any way, that will create a new promise that will throw again
    cacheDataLoaded.catch(() => {})
    lifecycleMap[queryCacheKey] = lifecycle
    const selector = (api.endpoints[endpointName] as any).select(
      isAnyQueryDefinition(endpointDefinition) ? originalArgs : queryCacheKey,
    )

    const extra = mwApi.dispatch((_, __, extra) => extra)
    const lifecycleApi = {
      ...mwApi,
      getCacheEntry: () => selector(mwApi.getState()),
      requestId,
      extra,
      updateCachedData: (isAnyQueryDefinition(endpointDefinition)
        ? (updateRecipe: Recipe<any>) =>
            mwApi.dispatch(
              api.util.updateQueryData(
                endpointName as never,
                originalArgs as never,
                updateRecipe,
              ),
            )
        : undefined) as any,

      cacheDataLoaded,
      cacheEntryRemoved,
    }

    const runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi as any)
    // if a `neverResolvedError` was thrown, but not handled in the running handler, do not let it leak out further
    Promise.resolve(runningHandler).catch((e) => {
      if (e === neverResolvedError) return
      throw e
    })
  }

  return handler
}
