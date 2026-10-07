import type {
  QueryCacheKey,
  QuerySubstateIdentifier,
  Subscribers,
  SubscribersInternal,
} from '../apiState'
import { QueryStatus, STATUS_UNINITIALIZED } from '../apiState'
import type {
  QueryStateMeta,
  SubMiddlewareApi,
  TimeoutId,
  InternalHandlerBuilder,
  ApiMiddlewareInternalHandler,
  InternalMiddlewareState,
} from './types'

export const buildPollingHandler: InternalHandlerBuilder = ({
  reducerPath,
  queryThunk,
  api,
  refetchQuery,
  internalState,
}) => {
  const { currentPolls, currentSubscriptions } = internalState

  // Batching state for polling updates
  const pendingPollingUpdates = new Set<string>()
  let pollingUpdateTimer: ReturnType<typeof setTimeout> | null = null

  const handler: ApiMiddlewareInternalHandler = (action, mwApi) => {
    if (
      api.internalActions.updateSubscriptionOptions.match(action) ||
      api.internalActions.unsubscribeQueryResult.match(action)
    ) {
      schedulePollingUpdate(action.payload.queryCacheKey, mwApi)
    }

    if (
      queryThunk.pending.match(action) ||
      (queryThunk.rejected.match(action) && action.meta.condition)
    ) {
      schedulePollingUpdate(action.meta.arg.queryCacheKey, mwApi)
    }

    if (
      queryThunk.fulfilled.match(action) ||
      (queryThunk.rejected.match(action) && !action.meta.condition)
    ) {
      startNextPoll(action.meta.arg, mwApi)
    }

    if (api.util.resetApiState.match(action)) {
      clearPolls()
      // Clear any pending updates
      if (pollingUpdateTimer) {
        clearTimeout(pollingUpdateTimer)
        pollingUpdateTimer = null
      }
      pendingPollingUpdates.clear()
    }
  }

  function schedulePollingUpdate(queryCacheKey: string, api: SubMiddlewareApi) {
    pendingPollingUpdates.add(queryCacheKey)

    if (!pollingUpdateTimer) {
      pollingUpdateTimer = setTimeout(() => {
        // Process all pending updates in a single batch
        for (const key of pendingPollingUpdates) {
          updatePollingInterval({ queryCacheKey: key as any }, api)
        }
        pendingPollingUpdates.clear()
        pollingUpdateTimer = null
      }, 0)
    }
  }

  function startNextPoll(
    { queryCacheKey }: QuerySubstateIdentifier,
    api: SubMiddlewareApi,
  ) {
    const state = api.getState()[reducerPath]
    const querySubState = state.queries[queryCacheKey]
    const subscriptions = currentSubscriptions.get(queryCacheKey)

    if (!querySubState || querySubState.status === STATUS_UNINITIALIZED) return

    const { lowestPollingInterval, skipPollingIfUnfocused } =
      findLowestPollingInterval(subscriptions)
    if (!Number.isFinite(lowestPollingInterval)) return

    const currentPoll = currentPolls.get(queryCacheKey)

    if (currentPoll?.timeout) {
      clearTimeout(currentPoll.timeout)
      currentPoll.timeout = undefined
    }

    const nextPollTimestamp = Date.now() + lowestPollingInterval

    currentPolls.set(queryCacheKey, {
      nextPollTimestamp,
      pollingInterval: lowestPollingInterval,
      timeout: setTimeout(() => {
        if (state.config.focused || !skipPollingIfUnfocused) {
          api.dispatch(refetchQuery(querySubState))
        }
        startNextPoll({ queryCacheKey }, api)
      }, lowestPollingInterval),
    })
  }

  function updatePollingInterval(
    { queryCacheKey }: QuerySubstateIdentifier,
    api: SubMiddlewareApi,
  ) {
    const state = api.getState()[reducerPath]
    const querySubState = state.queries[queryCacheKey]
    const subscriptions = currentSubscriptions.get(queryCacheKey)

    if (!querySubState || querySubState.status === STATUS_UNINITIALIZED) {
      return
    }

    const { lowestPollingInterval } = findLowestPollingInterval(subscriptions)

    // HACK add extra data to track how many times this has been called in tests
    // yes we're mutating a nonexistent field on a Map here
    if (process.env.NODE_ENV === 'test') {
      const updateCounters = ((currentPolls as any).pollUpdateCounters ??= {})
      updateCounters[queryCacheKey] ??= 0
      updateCounters[queryCacheKey]++
    }

    if (!Number.isFinite(lowestPollingInterval)) {
      cleanupPollForKey(queryCacheKey)
      return
    }

    const currentPoll = currentPolls.get(queryCacheKey)

    const nextPollTimestamp = Date.now() + lowestPollingInterval

    if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
      startNextPoll({ queryCacheKey }, api)
    }
  }

  function cleanupPollForKey(key: string) {
    const existingPoll = currentPolls.get(key)
    if (existingPoll?.timeout) {
      clearTimeout(existingPoll.timeout)
    }
    currentPolls.delete(key)
  }

  function clearPolls() {
    for (const key of currentPolls.keys()) {
      cleanupPollForKey(key)
    }
  }

  function findLowestPollingInterval(
    subscribers: SubscribersInternal = new Map(),
  ) {
    let skipPollingIfUnfocused: boolean | undefined = false
    let lowestPollingInterval = Number.POSITIVE_INFINITY

    for (const entry of subscribers.values()) {
      if (!!entry.pollingInterval) {
        lowestPollingInterval = Math.min(
          entry.pollingInterval!,
          lowestPollingInterval,
        )
        skipPollingIfUnfocused =
          entry.skipPollingIfUnfocused || skipPollingIfUnfocused
      }
    }

    return {
      lowestPollingInterval,
      skipPollingIfUnfocused,
    }
  }

  return handler
}
