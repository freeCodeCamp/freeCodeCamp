import type {
  Action,
  Middleware,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit'
import type {
  EndpointDefinitions,
  FullTagDescription,
} from '../../endpointDefinitions'
import type { QueryStatus, QuerySubState, RootState } from '../apiState'
import type { QueryThunkArg } from '../buildThunks'
import { createAction, isAction } from '../rtkImports'
import { buildBatchedActionsHandler } from './batchActions'
import { buildCacheCollectionHandler } from './cacheCollection'
import { buildCacheLifecycleHandler } from './cacheLifecycle'
import { buildDevCheckHandler } from './devMiddleware'
import { buildInvalidationByTagsHandler } from './invalidationByTags'
import { buildPollingHandler } from './polling'
import { buildQueryLifecycleHandler } from './queryLifecycle'
import type {
  BuildMiddlewareInput,
  InternalHandlerBuilder,
  InternalMiddlewareState,
} from './types'
import { buildWindowEventHandler } from './windowEventHandling'
import type { ApiEndpointQuery } from '../module'
export type { ReferenceCacheCollection } from './cacheCollection'
export type {
  MutationCacheLifecycleApi,
  QueryCacheLifecycleApi,
  ReferenceCacheLifecycle,
} from './cacheLifecycle'
export type {
  MutationLifecycleApi,
  QueryLifecycleApi,
  ReferenceQueryLifecycle,
  TypedMutationOnQueryStarted,
  TypedQueryOnQueryStarted,
} from './queryLifecycle'
export type { SubscriptionSelectors } from './types'

export function buildMiddleware<
  Definitions extends EndpointDefinitions,
  ReducerPath extends string,
  TagTypes extends string,
>(input: BuildMiddlewareInput<Definitions, ReducerPath, TagTypes>) {
  const { reducerPath, queryThunk, api, context, getInternalState } = input
  const { apiUid } = context

  const actions = {
    invalidateTags: createAction<
      Array<TagTypes | FullTagDescription<TagTypes> | null | undefined>
    >(`${reducerPath}/invalidateTags`),
  }

  const isThisApiSliceAction = (action: Action) =>
    action.type.startsWith(`${reducerPath}/`)

  const handlerBuilders: InternalHandlerBuilder[] = [
    buildDevCheckHandler,
    buildCacheCollectionHandler,
    buildInvalidationByTagsHandler,
    buildPollingHandler,
    buildCacheLifecycleHandler,
    buildQueryLifecycleHandler,
  ]

  const middleware: Middleware<
    {},
    RootState<Definitions, string, ReducerPath>,
    ThunkDispatch<any, any, UnknownAction>
  > = (mwApi) => {
    let initialized = false

    const internalState = getInternalState(mwApi.dispatch)

    const builderArgs = {
      ...(input as any as BuildMiddlewareInput<
        EndpointDefinitions,
        string,
        string
      >),
      internalState,
      refetchQuery,
      isThisApiSliceAction,
      mwApi,
    }

    const handlers = handlerBuilders.map((build) => build(builderArgs))

    const batchedActionsHandler = buildBatchedActionsHandler(builderArgs)
    const windowEventsHandler = buildWindowEventHandler(builderArgs)

    return (next) => {
      return (action) => {
        if (!isAction(action)) {
          return next(action)
        }
        if (!initialized) {
          initialized = true
          // dispatch before any other action
          mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid))
        }

        const mwApiWithNext = { ...mwApi, next }

        const stateBefore = mwApi.getState()

        const [actionShouldContinue, internalProbeResult] =
          batchedActionsHandler(action, mwApiWithNext, stateBefore)

        let res: any

        if (actionShouldContinue) {
          res = next(action)
        } else {
          res = internalProbeResult
        }

        if (!!mwApi.getState()[reducerPath]) {
          // Only run these checks if the middleware is registered okay

          // This looks for actions that aren't specific to the API slice
          windowEventsHandler(action, mwApiWithNext, stateBefore)

          if (
            isThisApiSliceAction(action) ||
            context.hasRehydrationInfo(action)
          ) {
            // Only run these additional checks if the actions are part of the API slice,
            // or the action has hydration-related data
            for (const handler of handlers) {
              handler(action, mwApiWithNext, stateBefore)
            }
          }
        }

        return res
      }
    }
  }

  return { middleware, actions }

  function refetchQuery(
    querySubState: Exclude<
      QuerySubState<any>,
      { status: QueryStatus.uninitialized }
    >,
  ) {
    return (
      input.api.endpoints[querySubState.endpointName] as ApiEndpointQuery<
        any,
        any
      >
    ).initiate(querySubState.originalArgs as any, {
      subscribe: false,
      forceRefetch: true,
    })
  }
}
