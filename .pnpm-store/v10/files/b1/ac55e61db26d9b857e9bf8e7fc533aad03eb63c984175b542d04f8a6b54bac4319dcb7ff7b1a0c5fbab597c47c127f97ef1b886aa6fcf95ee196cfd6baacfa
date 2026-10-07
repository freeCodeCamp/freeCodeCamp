import { QueryStatus, STATUS_UNINITIALIZED } from '../apiState'
import type { QueryCacheKey } from '../apiState'
import { onFocus, onOnline } from '../setupListeners'
import type {
  ApiMiddlewareInternalHandler,
  InternalHandlerBuilder,
  SubMiddlewareApi,
} from './types'

export const buildWindowEventHandler: InternalHandlerBuilder = ({
  reducerPath,
  context,
  api,
  refetchQuery,
  internalState,
}) => {
  const { removeQueryResult } = api.internalActions

  const handler: ApiMiddlewareInternalHandler = (action, mwApi) => {
    if (onFocus.match(action)) {
      refetchValidQueries(mwApi, 'refetchOnFocus')
    }
    if (onOnline.match(action)) {
      refetchValidQueries(mwApi, 'refetchOnReconnect')
    }
  }

  function refetchValidQueries(
    api: SubMiddlewareApi,
    type: 'refetchOnFocus' | 'refetchOnReconnect',
  ) {
    const state = api.getState()[reducerPath]
    const queries = state.queries
    const subscriptions = internalState.currentSubscriptions

    context.batch(() => {
      for (const queryCacheKey of subscriptions.keys()) {
        const querySubState = queries[queryCacheKey]
        const subscriptionSubState = subscriptions.get(queryCacheKey)

        if (!subscriptionSubState || !querySubState) continue

        const values = [...subscriptionSubState.values()]
        const shouldRefetch =
          values.some((sub) => sub[type] === true) ||
          (values.every((sub) => sub[type] === undefined) && state.config[type])

        if (shouldRefetch) {
          if (subscriptionSubState.size === 0) {
            api.dispatch(
              removeQueryResult({
                queryCacheKey: queryCacheKey as QueryCacheKey,
              }),
            )
          } else if (querySubState.status !== STATUS_UNINITIALIZED) {
            api.dispatch(refetchQuery(querySubState))
          }
        }
      }
    })
  }

  return handler
}
