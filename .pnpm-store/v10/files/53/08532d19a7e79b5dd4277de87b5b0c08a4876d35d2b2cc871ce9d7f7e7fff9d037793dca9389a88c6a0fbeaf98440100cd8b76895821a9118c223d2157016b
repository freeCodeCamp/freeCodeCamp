import type {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  Draft,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit'
import type { Patch } from 'immer'
import { isDraftable, produceWithPatches } from '../utils/immerImports'
import type { Api, ApiContext } from '../apiTypes'
import type {
  BaseQueryError,
  BaseQueryFn,
  QueryReturnValue,
} from '../baseQueryTypes'
import type { InternalSerializeQueryArgs } from '../defaultSerializeQueryArgs'
import type {
  AssertTagTypes,
  EndpointDefinition,
  EndpointDefinitions,
  InfiniteQueryArgFrom,
  InfiniteQueryCombinedArg,
  InfiniteQueryDefinition,
  MutationDefinition,
  PageParamFrom,
  QueryArgFrom,
  QueryDefinition,
  ResultDescription,
  ResultTypeFrom,
  SchemaFailureConverter,
  SchemaFailureHandler,
  SchemaFailureInfo,
  SchemaType,
} from '../endpointDefinitions'
import {
  calculateProvidedBy,
  ENDPOINT_QUERY,
  isInfiniteQueryDefinition,
  isQueryDefinition,
} from '../endpointDefinitions'
import { HandledError } from '../HandledError'
import type { UnwrapPromise } from '../tsHelpers'
import type {
  RootState,
  QueryKeys,
  QuerySubstateIdentifier,
  InfiniteData,
  InfiniteQueryConfigOptions,
  QueryCacheKey,
  InfiniteQueryDirection,
  InfiniteQueryKeys,
} from './apiState'
import { QueryStatus, STATUS_UNINITIALIZED } from './apiState'
import type {
  InfiniteQueryActionCreatorResult,
  QueryActionCreatorResult,
  StartInfiniteQueryActionCreatorOptions,
  StartQueryActionCreatorOptions,
} from './buildInitiate'
import { forceQueryFnSymbol, isUpsertQuery } from './buildInitiate'
import type { AllSelectors } from './buildSelectors'
import type { ApiEndpointQuery, PrefetchOptions } from './module'
import {
  createAsyncThunk,
  isAllOf,
  isFulfilled,
  isPending,
  isRejected,
  isRejectedWithValue,
  SHOULD_AUTOBATCH,
} from './rtkImports'
import {
  parseWithSchema,
  NamedSchemaError,
  shouldSkip,
} from '../standardSchema'

export type BuildThunksApiEndpointQuery<
  Definition extends QueryDefinition<any, any, any, any, any>,
> = Matchers<QueryThunk, Definition>

export type BuildThunksApiEndpointInfiniteQuery<
  Definition extends InfiniteQueryDefinition<any, any, any, any, any>,
> = Matchers<InfiniteQueryThunk<any>, Definition>

export type BuildThunksApiEndpointMutation<
  Definition extends MutationDefinition<any, any, any, any, any>,
> = Matchers<MutationThunk, Definition>

type EndpointThunk<
  Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>,
  Definition extends EndpointDefinition<any, any, any, any>,
> =
  Definition extends EndpointDefinition<
    infer QueryArg,
    infer BaseQueryFn,
    any,
    infer ResultType
  >
    ? Thunk extends AsyncThunk<unknown, infer ATArg, infer ATConfig>
      ? AsyncThunk<
          ResultType,
          ATArg & { originalArgs: QueryArg },
          ATConfig & { rejectValue: BaseQueryError<BaseQueryFn> }
        >
      : never
    : Definition extends InfiniteQueryDefinition<
          infer QueryArg,
          infer PageParam,
          infer BaseQueryFn,
          any,
          infer ResultType
        >
      ? Thunk extends AsyncThunk<unknown, infer ATArg, infer ATConfig>
        ? AsyncThunk<
            InfiniteData<ResultType, PageParam>,
            ATArg & { originalArgs: QueryArg },
            ATConfig & { rejectValue: BaseQueryError<BaseQueryFn> }
          >
        : never
      : never

export type PendingAction<
  Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>,
  Definition extends EndpointDefinition<any, any, any, any>,
> = ReturnType<EndpointThunk<Thunk, Definition>['pending']>

export type FulfilledAction<
  Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>,
  Definition extends EndpointDefinition<any, any, any, any>,
> = ReturnType<EndpointThunk<Thunk, Definition>['fulfilled']>

export type RejectedAction<
  Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>,
  Definition extends EndpointDefinition<any, any, any, any>,
> = ReturnType<EndpointThunk<Thunk, Definition>['rejected']>

export type Matcher<M> = (value: any) => value is M

export interface Matchers<
  Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>,
  Definition extends EndpointDefinition<any, any, any, any>,
> {
  matchPending: Matcher<PendingAction<Thunk, Definition>>
  matchFulfilled: Matcher<FulfilledAction<Thunk, Definition>>
  matchRejected: Matcher<RejectedAction<Thunk, Definition>>
}

export type QueryThunkArg = QuerySubstateIdentifier &
  StartQueryActionCreatorOptions & {
    type: 'query'
    originalArgs: unknown
    endpointName: string
  }

export type InfiniteQueryThunkArg<
  D extends InfiniteQueryDefinition<any, any, any, any, any>,
> = QuerySubstateIdentifier &
  StartInfiniteQueryActionCreatorOptions<D> & {
    type: `query`
    originalArgs: unknown
    endpointName: string
    param: unknown
    direction?: InfiniteQueryDirection
    refetchCachedPages?: boolean
  }

type MutationThunkArg = {
  type: 'mutation'
  originalArgs: unknown
  endpointName: string
  track?: boolean
  fixedCacheKey?: string
}

export type ThunkResult = unknown

export type ThunkApiMetaConfig = {
  pendingMeta: { startedTimeStamp: number; [SHOULD_AUTOBATCH]: true }
  fulfilledMeta: {
    fulfilledTimeStamp: number
    baseQueryMeta: unknown
    [SHOULD_AUTOBATCH]: true
  }
  rejectedMeta: { baseQueryMeta: unknown; [SHOULD_AUTOBATCH]: true }
}
export type QueryThunk = AsyncThunk<
  ThunkResult,
  QueryThunkArg,
  ThunkApiMetaConfig
>
export type InfiniteQueryThunk<
  D extends InfiniteQueryDefinition<any, any, any, any, any>,
> = AsyncThunk<ThunkResult, InfiniteQueryThunkArg<D>, ThunkApiMetaConfig>
export type MutationThunk = AsyncThunk<
  ThunkResult,
  MutationThunkArg,
  ThunkApiMetaConfig
>

function defaultTransformResponse(baseQueryReturnValue: unknown) {
  return baseQueryReturnValue
}

export type MaybeDrafted<T> = T | Draft<T>
export type Recipe<T> = (data: MaybeDrafted<T>) => void | MaybeDrafted<T>
export type UpsertRecipe<T> = (
  data: MaybeDrafted<T> | undefined,
) => void | MaybeDrafted<T>

export type PatchQueryDataThunk<
  Definitions extends EndpointDefinitions,
  PartialState,
> = <EndpointName extends QueryKeys<Definitions>>(
  endpointName: EndpointName,
  arg: QueryArgFrom<Definitions[EndpointName]>,
  patches: readonly Patch[],
  updateProvided?: boolean,
) => ThunkAction<void, PartialState, any, UnknownAction>

export type AllQueryKeys<Definitions extends EndpointDefinitions> =
  | QueryKeys<Definitions>
  | InfiniteQueryKeys<Definitions>

export type QueryArgFromAnyQueryDefinition<
  Definitions extends EndpointDefinitions,
  EndpointName extends AllQueryKeys<Definitions>,
> =
  Definitions[EndpointName] extends InfiniteQueryDefinition<
    any,
    any,
    any,
    any,
    any
  >
    ? InfiniteQueryArgFrom<Definitions[EndpointName]>
    : Definitions[EndpointName] extends QueryDefinition<any, any, any, any>
      ? QueryArgFrom<Definitions[EndpointName]>
      : never

export type DataFromAnyQueryDefinition<
  Definitions extends EndpointDefinitions,
  EndpointName extends AllQueryKeys<Definitions>,
> =
  Definitions[EndpointName] extends InfiniteQueryDefinition<
    any,
    any,
    any,
    any,
    any
  >
    ? InfiniteData<
        ResultTypeFrom<Definitions[EndpointName]>,
        PageParamFrom<Definitions[EndpointName]>
      >
    : Definitions[EndpointName] extends QueryDefinition<any, any, any, any>
      ? ResultTypeFrom<Definitions[EndpointName]>
      : unknown

export type UpsertThunkResult<
  Definitions extends EndpointDefinitions,
  EndpointName extends AllQueryKeys<Definitions>,
> =
  Definitions[EndpointName] extends InfiniteQueryDefinition<
    any,
    any,
    any,
    any,
    any
  >
    ? InfiniteQueryActionCreatorResult<Definitions[EndpointName]>
    : Definitions[EndpointName] extends QueryDefinition<any, any, any, any>
      ? QueryActionCreatorResult<Definitions[EndpointName]>
      : QueryActionCreatorResult<never>

export type UpdateQueryDataThunk<
  Definitions extends EndpointDefinitions,
  PartialState,
> = <EndpointName extends AllQueryKeys<Definitions>>(
  endpointName: EndpointName,
  arg: QueryArgFromAnyQueryDefinition<Definitions, EndpointName>,
  updateRecipe: Recipe<DataFromAnyQueryDefinition<Definitions, EndpointName>>,
  updateProvided?: boolean,
) => ThunkAction<PatchCollection, PartialState, any, UnknownAction>

export type UpsertQueryDataThunk<
  Definitions extends EndpointDefinitions,
  PartialState,
> = <EndpointName extends AllQueryKeys<Definitions>>(
  endpointName: EndpointName,
  arg: QueryArgFromAnyQueryDefinition<Definitions, EndpointName>,
  value: DataFromAnyQueryDefinition<Definitions, EndpointName>,
) => ThunkAction<
  UpsertThunkResult<Definitions, EndpointName>,
  PartialState,
  any,
  UnknownAction
>

/**
 * An object returned from dispatching a `api.util.updateQueryData` call.
 */
export type PatchCollection = {
  /**
   * An `immer` Patch describing the cache update.
   */
  patches: Patch[]
  /**
   * An `immer` Patch to revert the cache update.
   */
  inversePatches: Patch[]
  /**
   * A function that will undo the cache update.
   */
  undo: () => void
}

type TransformCallback = (
  baseQueryReturnValue: unknown,
  meta: unknown,
  arg: unknown,
) => any

export const addShouldAutoBatch = <T extends Record<string, any>>(
  arg: T = {} as T,
): T & { [SHOULD_AUTOBATCH]: true } => {
  return { ...arg, [SHOULD_AUTOBATCH]: true }
}

export function buildThunks<
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string,
  Definitions extends EndpointDefinitions,
>({
  reducerPath,
  baseQuery,
  context: { endpointDefinitions },
  serializeQueryArgs,
  api,
  assertTagType,
  selectors,
  onSchemaFailure,
  catchSchemaFailure: globalCatchSchemaFailure,
  skipSchemaValidation: globalSkipSchemaValidation,
}: {
  baseQuery: BaseQuery
  reducerPath: ReducerPath
  context: ApiContext<Definitions>
  serializeQueryArgs: InternalSerializeQueryArgs
  api: Api<BaseQuery, Definitions, ReducerPath, any>
  assertTagType: AssertTagTypes
  selectors: AllSelectors
  onSchemaFailure: SchemaFailureHandler | undefined
  catchSchemaFailure: SchemaFailureConverter<BaseQuery> | undefined
  skipSchemaValidation: boolean | SchemaType[] | undefined
}) {
  type State = RootState<any, string, ReducerPath>

  const patchQueryData: PatchQueryDataThunk<EndpointDefinitions, State> =
    (endpointName, arg, patches, updateProvided) => (dispatch, getState) => {
      const endpointDefinition = endpointDefinitions[endpointName]

      const queryCacheKey = serializeQueryArgs({
        queryArgs: arg,
        endpointDefinition,
        endpointName,
      })

      dispatch(
        api.internalActions.queryResultPatched({ queryCacheKey, patches }),
      )

      if (!updateProvided) {
        return
      }

      const newValue = api.endpoints[endpointName].select(arg)(
        // Work around TS 4.1 mismatch
        getState() as RootState<any, any, any>,
      )

      const providedTags = calculateProvidedBy(
        endpointDefinition.providesTags,
        newValue.data,
        undefined,
        arg,
        {},
        assertTagType,
      )

      dispatch(
        api.internalActions.updateProvidedBy([{ queryCacheKey, providedTags }]),
      )
    }

  function addToStart<T>(items: Array<T>, item: T, max = 0): Array<T> {
    const newItems = [item, ...items]
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems
  }

  function addToEnd<T>(items: Array<T>, item: T, max = 0): Array<T> {
    const newItems = [...items, item]
    return max && newItems.length > max ? newItems.slice(1) : newItems
  }

  const updateQueryData: UpdateQueryDataThunk<EndpointDefinitions, State> =
    (endpointName, arg, updateRecipe, updateProvided = true) =>
    (dispatch, getState) => {
      const endpointDefinition = api.endpoints[endpointName]

      const currentState = endpointDefinition.select(arg)(
        // Work around TS 4.1 mismatch
        getState() as RootState<any, any, any>,
      )

      const ret: PatchCollection = {
        patches: [],
        inversePatches: [],
        undo: () =>
          dispatch(
            api.util.patchQueryData(
              endpointName,
              arg,
              ret.inversePatches,
              updateProvided,
            ),
          ),
      }
      if (currentState.status === STATUS_UNINITIALIZED) {
        return ret
      }
      let newValue
      if ('data' in currentState) {
        if (isDraftable(currentState.data)) {
          const [value, patches, inversePatches] = produceWithPatches(
            currentState.data,
            updateRecipe,
          )
          ret.patches.push(...patches)
          ret.inversePatches.push(...inversePatches)
          newValue = value
        } else {
          newValue = updateRecipe(currentState.data)
          ret.patches.push({ op: 'replace', path: [], value: newValue })
          ret.inversePatches.push({
            op: 'replace',
            path: [],
            value: currentState.data,
          })
        }
      }

      if (ret.patches.length === 0) {
        return ret
      }

      dispatch(
        api.util.patchQueryData(endpointName, arg, ret.patches, updateProvided),
      )

      return ret
    }

  const upsertQueryData: UpsertQueryDataThunk<Definitions, State> =
    (endpointName, arg, value) => (dispatch) => {
      type EndpointName = typeof endpointName
      const res = dispatch(
        (
          api.endpoints[endpointName] as ApiEndpointQuery<
            QueryDefinition<any, any, any, any, any>,
            Definitions
          >
        ).initiate(arg, {
          subscribe: false,
          forceRefetch: true,
          [forceQueryFnSymbol]: () => ({ data: value }),
        }),
      ) as UpsertThunkResult<Definitions, EndpointName>

      return res
    }

  const getTransformCallbackForEndpoint = (
    endpointDefinition: EndpointDefinition<any, any, any, any>,
    transformFieldName: 'transformResponse' | 'transformErrorResponse',
  ): TransformCallback => {
    return endpointDefinition.query && endpointDefinition[transformFieldName]
      ? (endpointDefinition[transformFieldName]! as TransformCallback)
      : defaultTransformResponse
  }

  // The generic async payload function for all of our thunks
  const executeEndpoint: AsyncThunkPayloadCreator<
    ThunkResult,
    QueryThunkArg | MutationThunkArg | InfiniteQueryThunkArg<any>,
    ThunkApiMetaConfig & { state: RootState<any, string, ReducerPath> }
  > = async (
    arg,
    {
      signal,
      abort,
      rejectWithValue,
      fulfillWithValue,
      dispatch,
      getState,
      extra,
    },
  ) => {
    const endpointDefinition = endpointDefinitions[arg.endpointName]
    const { metaSchema, skipSchemaValidation = globalSkipSchemaValidation } =
      endpointDefinition

    const isQuery = arg.type === ENDPOINT_QUERY

    try {
      let transformResponse: TransformCallback = defaultTransformResponse

      const baseQueryApi = {
        signal,
        abort,
        dispatch,
        getState,
        extra,
        endpoint: arg.endpointName,
        type: arg.type,
        forced: isQuery ? isForcedQuery(arg, getState()) : undefined,
        queryCacheKey: isQuery ? arg.queryCacheKey : undefined,
      }

      const forceQueryFn = isQuery ? arg[forceQueryFnSymbol] : undefined

      let finalQueryReturnValue: QueryReturnValue

      // Infinite query wrapper, which executes the request and returns
      // the InfiniteData `{pages, pageParams}` structure
      const fetchPage = async (
        data: InfiniteData<unknown, unknown>,
        param: unknown,
        maxPages: number,
        previous?: boolean,
      ): Promise<QueryReturnValue> => {
        // This should handle cases where there is no `getPrevPageParam`,
        // or `getPPP` returned nullish
        if (param == null && data.pages.length) {
          return Promise.resolve({ data })
        }

        const finalQueryArg: InfiniteQueryCombinedArg<any, any> = {
          queryArg: arg.originalArgs,
          pageParam: param,
        }

        const pageResponse = await executeRequest(finalQueryArg)

        const addTo = previous ? addToStart : addToEnd

        return {
          data: {
            pages: addTo(data.pages, pageResponse.data, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages),
          },
          meta: pageResponse.meta,
        }
      }

      // Wrapper for executing either `query` or `queryFn`,
      // and handling any errors
      async function executeRequest(
        finalQueryArg: unknown,
      ): Promise<QueryReturnValue> {
        let result: QueryReturnValue
        const { extraOptions, argSchema, rawResponseSchema, responseSchema } =
          endpointDefinition

        if (argSchema && !shouldSkip(skipSchemaValidation, 'arg')) {
          finalQueryArg = await parseWithSchema(
            argSchema,
            finalQueryArg,
            'argSchema',
            {}, // we don't have a meta yet, so we can't pass it
          )
        }

        if (forceQueryFn) {
          // upsertQueryData relies on this to pass in the user-provided value
          result = forceQueryFn()
        } else if (endpointDefinition.query) {
          // We should only run `transformResponse` when the endpoint has a `query` method,
          // and we're not doing an `upsertQueryData`.
          transformResponse = getTransformCallbackForEndpoint(
            endpointDefinition,
            'transformResponse',
          )

          result = await baseQuery(
            endpointDefinition.query(finalQueryArg as any),
            baseQueryApi,
            extraOptions as any,
          )
        } else {
          result = await endpointDefinition.queryFn(
            finalQueryArg as any,
            baseQueryApi,
            extraOptions as any,
            (arg) => baseQuery(arg, baseQueryApi, extraOptions as any),
          )
        }

        if (
          typeof process !== 'undefined' &&
          process.env.NODE_ENV === 'development'
        ) {
          const what = endpointDefinition.query ? '`baseQuery`' : '`queryFn`'
          let err: undefined | string
          if (!result) {
            err = `${what} did not return anything.`
          } else if (typeof result !== 'object') {
            err = `${what} did not return an object.`
          } else if (result.error && result.data) {
            err = `${what} returned an object containing both \`error\` and \`result\`.`
          } else if (result.error === undefined && result.data === undefined) {
            err = `${what} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``
          } else {
            for (const key of Object.keys(result)) {
              if (key !== 'error' && key !== 'data' && key !== 'meta') {
                err = `The object returned by ${what} has the unknown property ${key}.`
                break
              }
            }
          }
          if (err) {
            console.error(
              `Error encountered handling the endpoint ${arg.endpointName}.
                  ${err}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`,
              result,
            )
          }
        }

        if (result.error) throw new HandledError(result.error, result.meta)

        let { data } = result

        if (
          rawResponseSchema &&
          !shouldSkip(skipSchemaValidation, 'rawResponse')
        ) {
          data = await parseWithSchema(
            rawResponseSchema,
            result.data,
            'rawResponseSchema',
            result.meta,
          )
        }

        let transformedResponse = await transformResponse(
          data,
          result.meta,
          finalQueryArg,
        )

        if (responseSchema && !shouldSkip(skipSchemaValidation, 'response')) {
          transformedResponse = await parseWithSchema(
            responseSchema,
            transformedResponse,
            'responseSchema',
            result.meta,
          )
        }

        return {
          ...result,
          data: transformedResponse,
        }
      }

      if (isQuery && 'infiniteQueryOptions' in endpointDefinition) {
        // This is an infinite query endpoint
        const { infiniteQueryOptions } = endpointDefinition

        // Runtime checks should guarantee this is a positive number if provided
        const { maxPages = Infinity } = infiniteQueryOptions

        // Priority: per-call override > endpoint config > default (true)
        const refetchCachedPages =
          (arg as InfiniteQueryThunkArg<any>).refetchCachedPages ??
          infiniteQueryOptions.refetchCachedPages ??
          true

        let result: QueryReturnValue

        // Start by looking up the existing InfiniteData value from state,
        // falling back to an empty value if it doesn't exist yet
        const blankData = { pages: [], pageParams: [] }
        const cachedData = selectors.selectQueryEntry(
          getState(),
          arg.queryCacheKey,
        )?.data as InfiniteData<unknown, unknown> | undefined

        // When the arg changes or the user forces a refetch,
        // we don't include the `direction` flag. This lets us distinguish
        // between actually refetching with a forced query, vs just fetching
        // the next page.
        const isForcedQueryNeedingRefetch = // arg.forceRefetch
          isForcedQuery(arg, getState()) &&
          !(arg as InfiniteQueryThunkArg<any>).direction
        const existingData = (
          isForcedQueryNeedingRefetch || !cachedData ? blankData : cachedData
        ) as InfiniteData<unknown, unknown>

        // If the thunk specified a direction and we do have at least one page,
        // fetch the next or previous page
        if ('direction' in arg && arg.direction && existingData.pages.length) {
          const previous = arg.direction === 'backward'
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam
          const param = pageParamFn(
            infiniteQueryOptions,
            existingData,
            arg.originalArgs,
          )

          result = await fetchPage(existingData, param, maxPages, previous)
        } else {
          // Otherwise, fetch the first page and then any remaining pages

          const { initialPageParam = infiniteQueryOptions.initialPageParam } =
            arg as InfiniteQueryThunkArg<any>

          // If we're doing a refetch, we should start from
          // the first page we have cached.
          // Otherwise, we should start from the initialPageParam
          const cachedPageParams = cachedData?.pageParams ?? []
          const firstPageParam = cachedPageParams[0] ?? initialPageParam
          const totalPages = cachedPageParams.length

          // Fetch first page
          result = await fetchPage(existingData, firstPageParam, maxPages)

          if (forceQueryFn) {
            // HACK `upsertQueryData` expects the user to pass in the `{pages, pageParams}` structure,
            // but `fetchPage` treats that as `pages[0]`. We have to manually un-nest it.
            result = {
              data: (result.data as InfiniteData<unknown, unknown>).pages[0],
            } as QueryReturnValue
          }

          if (refetchCachedPages) {
            // Fetch remaining pages
            for (let i = 1; i < totalPages; i++) {
              const param = getNextPageParam(
                infiniteQueryOptions,
                result.data as InfiniteData<unknown, unknown>,
                arg.originalArgs,
              )
              result = await fetchPage(
                result.data as InfiniteData<unknown, unknown>,
                param,
                maxPages,
              )
            }
          }
        }

        finalQueryReturnValue = result
      } else {
        // Non-infinite endpoint. Just run the one request.
        finalQueryReturnValue = await executeRequest(arg.originalArgs)
      }

      if (
        metaSchema &&
        !shouldSkip(skipSchemaValidation, 'meta') &&
        finalQueryReturnValue.meta
      ) {
        finalQueryReturnValue.meta = await parseWithSchema(
          metaSchema,
          finalQueryReturnValue.meta,
          'metaSchema',
          finalQueryReturnValue.meta,
        )
      }

      // console.log('Final result: ', transformedData)
      return fulfillWithValue(
        finalQueryReturnValue.data,
        addShouldAutoBatch({
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: finalQueryReturnValue.meta,
        }),
      )
    } catch (error) {
      let caughtError = error
      if (caughtError instanceof HandledError) {
        let transformErrorResponse = getTransformCallbackForEndpoint(
          endpointDefinition,
          'transformErrorResponse',
        )
        const { rawErrorResponseSchema, errorResponseSchema } =
          endpointDefinition

        let { value, meta } = caughtError

        try {
          if (
            rawErrorResponseSchema &&
            !shouldSkip(skipSchemaValidation, 'rawErrorResponse')
          ) {
            value = await parseWithSchema(
              rawErrorResponseSchema,
              value,
              'rawErrorResponseSchema',
              meta,
            )
          }

          if (metaSchema && !shouldSkip(skipSchemaValidation, 'meta')) {
            meta = await parseWithSchema(metaSchema, meta, 'metaSchema', meta)
          }
          let transformedErrorResponse = await transformErrorResponse(
            value,
            meta,
            arg.originalArgs,
          )
          if (
            errorResponseSchema &&
            !shouldSkip(skipSchemaValidation, 'errorResponse')
          ) {
            transformedErrorResponse = await parseWithSchema(
              errorResponseSchema,
              transformedErrorResponse,
              'errorResponseSchema',
              meta,
            )
          }

          return rejectWithValue(
            transformedErrorResponse,
            addShouldAutoBatch({ baseQueryMeta: meta }),
          )
        } catch (e) {
          caughtError = e
        }
      }
      try {
        if (caughtError instanceof NamedSchemaError) {
          const info: SchemaFailureInfo = {
            endpoint: arg.endpointName,
            arg: arg.originalArgs,
            type: arg.type,
            queryCacheKey: isQuery ? arg.queryCacheKey : undefined,
          }
          endpointDefinition.onSchemaFailure?.(caughtError, info)
          onSchemaFailure?.(caughtError, info)
          const { catchSchemaFailure = globalCatchSchemaFailure } =
            endpointDefinition
          if (catchSchemaFailure) {
            return rejectWithValue(
              catchSchemaFailure(caughtError, info),
              addShouldAutoBatch({ baseQueryMeta: caughtError._bqMeta }),
            )
          }
        }
      } catch (e) {
        caughtError = e
      }
      if (
        typeof process !== 'undefined' &&
        process.env.NODE_ENV !== 'production'
      ) {
        console.error(
          `An unhandled error occurred processing a request for the endpoint "${arg.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
          caughtError,
        )
      } else {
        console.error(caughtError)
      }
      throw caughtError
    }
  }

  function isForcedQuery(
    arg: QueryThunkArg,
    state: RootState<any, string, ReducerPath>,
  ) {
    const requestState = selectors.selectQueryEntry(state, arg.queryCacheKey)
    const baseFetchOnMountOrArgChange =
      selectors.selectConfig(state).refetchOnMountOrArgChange

    const fulfilledVal = requestState?.fulfilledTimeStamp
    const refetchVal =
      arg.forceRefetch ?? (arg.subscribe && baseFetchOnMountOrArgChange)

    if (refetchVal) {
      // Return if it's true or compare the dates because it must be a number
      return (
        refetchVal === true ||
        (Number(new Date()) - Number(fulfilledVal)) / 1000 >= refetchVal
      )
    }
    return false
  }

  const createQueryThunk = <
    ThunkArgType extends QueryThunkArg | InfiniteQueryThunkArg<any>,
  >() => {
    const generatedQueryThunk = createAsyncThunk<
      ThunkResult,
      ThunkArgType,
      ThunkApiMetaConfig & { state: RootState<any, string, ReducerPath> }
    >(`${reducerPath}/executeQuery`, executeEndpoint, {
      getPendingMeta({ arg }) {
        const endpointDefinition = endpointDefinitions[arg.endpointName]
        return addShouldAutoBatch({
          startedTimeStamp: Date.now(),
          ...(isInfiniteQueryDefinition(endpointDefinition)
            ? { direction: (arg as InfiniteQueryThunkArg<any>).direction }
            : {}),
        })
      },
      condition(queryThunkArg, { getState }) {
        const state = getState()

        const requestState = selectors.selectQueryEntry(
          state,
          queryThunkArg.queryCacheKey,
        )
        const fulfilledVal = requestState?.fulfilledTimeStamp
        const currentArg = queryThunkArg.originalArgs
        const previousArg = requestState?.originalArgs
        const endpointDefinition =
          endpointDefinitions[queryThunkArg.endpointName]
        const direction = (queryThunkArg as InfiniteQueryThunkArg<any>)
          .direction

        // Order of these checks matters.
        // In order for `upsertQueryData` to successfully run while an existing request is in flight,
        /// we have to check for that first, otherwise `queryThunk` will bail out and not run at all.
        if (isUpsertQuery(queryThunkArg)) {
          return true
        }

        // Don't retry a request that's currently in-flight
        if (requestState?.status === 'pending') {
          return false
        }

        // if this is forced, continue
        if (isForcedQuery(queryThunkArg, state)) {
          return true
        }

        if (
          isQueryDefinition(endpointDefinition) &&
          endpointDefinition?.forceRefetch?.({
            currentArg,
            previousArg,
            endpointState: requestState,
            state,
          })
        ) {
          return true
        }

        // Pull from the cache unless we explicitly force refetch or qualify based on time
        if (fulfilledVal && !direction) {
          // Value is cached and we didn't specify to refresh, skip it.
          return false
        }

        return true
      },
      dispatchConditionRejection: true,
    })
    return generatedQueryThunk
  }

  const queryThunk = createQueryThunk<QueryThunkArg>()
  const infiniteQueryThunk = createQueryThunk<InfiniteQueryThunkArg<any>>()

  const mutationThunk = createAsyncThunk<
    ThunkResult,
    MutationThunkArg,
    ThunkApiMetaConfig & { state: RootState<any, string, ReducerPath> }
  >(`${reducerPath}/executeMutation`, executeEndpoint, {
    getPendingMeta() {
      return addShouldAutoBatch({ startedTimeStamp: Date.now() })
    },
  })

  const hasTheForce = (options: any): options is { force: boolean } =>
    'force' in options
  const hasMaxAge = (
    options: any,
  ): options is { ifOlderThan: false | number } => 'ifOlderThan' in options

  const prefetch =
    <EndpointName extends QueryKeys<Definitions>>(
      endpointName: EndpointName,
      arg: any,
      options: PrefetchOptions = {},
    ): ThunkAction<void, any, any, UnknownAction> =>
    (dispatch: ThunkDispatch<any, any, any>, getState: () => any) => {
      const force = hasTheForce(options) && options.force
      const maxAge = hasMaxAge(options) && options.ifOlderThan

      const queryAction = (force: boolean = true) => {
        const options: StartQueryActionCreatorOptions = {
          forceRefetch: force,
          subscribe: false,
        }
        return (
          api.endpoints[endpointName] as ApiEndpointQuery<any, any>
        ).initiate(arg, options)
      }
      const latestStateValue = (
        api.endpoints[endpointName] as ApiEndpointQuery<any, any>
      ).select(arg)(getState())

      if (force) {
        dispatch(queryAction())
      } else if (maxAge) {
        const lastFulfilledTs = latestStateValue?.fulfilledTimeStamp
        if (!lastFulfilledTs) {
          dispatch(queryAction())
          return
        }
        const shouldRetrigger =
          (Number(new Date()) - Number(new Date(lastFulfilledTs))) / 1000 >=
          maxAge
        if (shouldRetrigger) {
          dispatch(queryAction())
        }
      } else {
        // If prefetching with no options, just let it try
        dispatch(queryAction(false))
      }
    }

  function matchesEndpoint(endpointName: string) {
    return (action: any): action is UnknownAction =>
      action?.meta?.arg?.endpointName === endpointName
  }

  function buildMatchThunkActions<
    Thunk extends
      | AsyncThunk<any, QueryThunkArg, ThunkApiMetaConfig>
      | AsyncThunk<any, MutationThunkArg, ThunkApiMetaConfig>,
  >(thunk: Thunk, endpointName: string) {
    return {
      matchPending: isAllOf(isPending(thunk), matchesEndpoint(endpointName)),
      matchFulfilled: isAllOf(
        isFulfilled(thunk),
        matchesEndpoint(endpointName),
      ),
      matchRejected: isAllOf(isRejected(thunk), matchesEndpoint(endpointName)),
    } as Matchers<Thunk, any>
  }

  return {
    queryThunk,
    mutationThunk,
    infiniteQueryThunk,
    prefetch,
    updateQueryData,
    upsertQueryData,
    patchQueryData,
    buildMatchThunkActions,
  }
}

export function getNextPageParam(
  options: InfiniteQueryConfigOptions<unknown, unknown, unknown>,
  { pages, pageParams }: InfiniteData<unknown, unknown>,
  queryArg: unknown,
): unknown | undefined {
  const lastIndex = pages.length - 1
  return options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams,
    queryArg,
  )
}

export function getPreviousPageParam(
  options: InfiniteQueryConfigOptions<unknown, unknown, unknown>,
  { pages, pageParams }: InfiniteData<unknown, unknown>,
  queryArg: unknown,
): unknown | undefined {
  return options.getPreviousPageParam?.(
    pages[0],
    pages,
    pageParams[0],
    pageParams,
    queryArg,
  )
}

export function calculateProvidedByThunk(
  action: UnwrapPromise<
    | ReturnType<ReturnType<QueryThunk>>
    | ReturnType<ReturnType<MutationThunk>>
    | ReturnType<ReturnType<InfiniteQueryThunk<any>>>
  >,
  type: 'providesTags' | 'invalidatesTags',
  endpointDefinitions: EndpointDefinitions,
  assertTagType: AssertTagTypes,
) {
  return calculateProvidedBy(
    endpointDefinitions[action.meta.arg.endpointName][
      type
    ] as ResultDescription<any, any, any, any, any>,
    isFulfilled(action) ? action.payload : undefined,
    isRejectedWithValue(action) ? action.payload : undefined,
    action.meta.arg.originalArgs,
    'baseQueryMeta' in action.meta ? action.meta.baseQueryMeta : undefined,
    assertTagType,
  )
}
