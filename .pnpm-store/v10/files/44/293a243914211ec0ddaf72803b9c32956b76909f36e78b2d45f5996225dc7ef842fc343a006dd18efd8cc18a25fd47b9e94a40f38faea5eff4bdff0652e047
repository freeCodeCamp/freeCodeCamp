import { createApi } from '@reduxjs/toolkit/query'
import type { QueryActionCreatorResult } from '@reduxjs/toolkit/query'
import { delay } from 'msw'
import { setupApiStore } from '../../tests/utils/helpers'
import type { SubscriptionSelectors } from '../core/buildMiddleware/types'

const mockBaseQuery = vi
  .fn()
  .mockImplementation((args: any) => ({ data: args }))

const api = createApi({
  baseQuery: mockBaseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<unknown, number>({
      query(pageNumber) {
        return { url: 'posts', params: pageNumber }
      },
      providesTags: ['Posts'],
    }),
  }),
})
const { getPosts } = api.endpoints

const storeRef = setupApiStore(api)

let getSubscriptions: SubscriptionSelectors['getSubscriptions']

beforeEach(() => {
  ;({ getSubscriptions } = storeRef.store.dispatch(
    api.internalActions.internal_getRTKQSubscriptions(),
  ) as unknown as SubscriptionSelectors)

  const currentPolls = storeRef.store.dispatch({
    type: `${api.reducerPath}/getPolling`,
  }) as any
  ;(currentPolls as any).pollUpdateCounters = {}
})

const getSubscribersForQueryCacheKey = (queryCacheKey: string) =>
  getSubscriptions().get(queryCacheKey) ?? new Map()
const createSubscriptionGetter = (queryCacheKey: string) => () =>
  getSubscribersForQueryCacheKey(queryCacheKey)

describe('polling tests', () => {
  it('clears intervals when seeing a resetApiState action', async () => {
    await storeRef.store.dispatch(
      getPosts.initiate(1, {
        subscriptionOptions: { pollingInterval: 10 },
        subscribe: true,
      }),
    )

    expect(mockBaseQuery).toHaveBeenCalledOnce()

    storeRef.store.dispatch(api.util.resetApiState())

    await delay(30)

    expect(mockBaseQuery).toHaveBeenCalledOnce()
  })

  it('replaces polling interval when the subscription options are updated', async () => {
    const { requestId, queryCacheKey, ...subscription } =
      storeRef.store.dispatch(
        getPosts.initiate(1, {
          subscriptionOptions: { pollingInterval: 10 },
          subscribe: true,
        }),
      )

    const getSubs = createSubscriptionGetter(queryCacheKey)

    await delay(1)
    expect(getSubs().size).toBe(1)
    expect(getSubs()?.get(requestId)?.pollingInterval).toBe(10)

    subscription.updateSubscriptionOptions({ pollingInterval: 20 })

    await delay(1)
    expect(getSubs().size).toBe(1)
    expect(getSubs()?.get(requestId)?.pollingInterval).toBe(20)
  })

  it(`doesn't replace the interval when removing a shared query instance with a poll `, async () => {
    const subscriptionOne = storeRef.store.dispatch(
      getPosts.initiate(1, {
        subscriptionOptions: { pollingInterval: 10 },
        subscribe: true,
      }),
    )

    storeRef.store.dispatch(
      getPosts.initiate(1, {
        subscriptionOptions: { pollingInterval: 10 },
        subscribe: true,
      }),
    )

    await delay(10)

    const getSubs = createSubscriptionGetter(subscriptionOne.queryCacheKey)

    expect(getSubs().size).toBe(2)

    subscriptionOne.unsubscribe()

    await delay(1)
    expect(getSubs().size).toBe(1)
  })

  it('uses lowest specified interval when two components are mounted', async () => {
    storeRef.store.dispatch(
      getPosts.initiate(1, {
        subscriptionOptions: { pollingInterval: 30000 },
        subscribe: true,
      }),
    )

    storeRef.store.dispatch(
      getPosts.initiate(1, {
        subscriptionOptions: { pollingInterval: 10 },
        subscribe: true,
      }),
    )

    await delay(20)

    expect(mockBaseQuery.mock.calls.length).toBeGreaterThanOrEqual(2)
  })

  it('respects skipPollingIfUnfocused', async () => {
    mockBaseQuery.mockClear()
    storeRef.store.dispatch(
      getPosts.initiate(2, {
        subscriptionOptions: {
          pollingInterval: 10,
          skipPollingIfUnfocused: true,
        },
        subscribe: true,
      }),
    )
    storeRef.store.dispatch(api.internalActions?.onFocusLost())

    await delay(50)
    const callsWithSkip = mockBaseQuery.mock.calls.length

    storeRef.store.dispatch(
      getPosts.initiate(2, {
        subscriptionOptions: {
          pollingInterval: 10,
          skipPollingIfUnfocused: false,
        },
        subscribe: true,
      }),
    )

    storeRef.store.dispatch(api.internalActions?.onFocus())

    await delay(50)
    const callsWithoutSkip = mockBaseQuery.mock.calls.length

    expect(callsWithSkip).toBe(1)
    expect(callsWithoutSkip).toBeGreaterThanOrEqual(2)

    storeRef.store.dispatch(api.util.resetApiState())
  })

  it('respects skipPollingIfUnfocused if at least one subscription has it', async () => {
    storeRef.store.dispatch(
      getPosts.initiate(3, {
        subscriptionOptions: {
          pollingInterval: 10,
          skipPollingIfUnfocused: false,
        },
        subscribe: true,
      }),
    )

    await delay(50)
    const callsWithoutSkip = mockBaseQuery.mock.calls.length

    storeRef.store.dispatch(
      getPosts.initiate(3, {
        subscriptionOptions: {
          pollingInterval: 15,
          skipPollingIfUnfocused: true,
        },
        subscribe: true,
      }),
    )

    storeRef.store.dispatch(
      getPosts.initiate(3, {
        subscriptionOptions: {
          pollingInterval: 20,
          skipPollingIfUnfocused: false,
        },
        subscribe: true,
      }),
    )

    storeRef.store.dispatch(api.internalActions?.onFocusLost())

    await delay(50)
    const callsWithSkip = mockBaseQuery.mock.calls.length

    expect(callsWithoutSkip).toBeGreaterThan(2)
    expect(callsWithSkip).toBe(callsWithoutSkip + 1)
  })

  it('replaces skipPollingIfUnfocused when the subscription options are updated', async () => {
    const { requestId, queryCacheKey, ...subscription } =
      storeRef.store.dispatch(
        getPosts.initiate(1, {
          subscriptionOptions: {
            pollingInterval: 10,
            skipPollingIfUnfocused: false,
          },
          subscribe: true,
        }),
      )

    const getSubs = createSubscriptionGetter(queryCacheKey)

    await delay(1)
    expect(getSubs().size).toBe(1)
    expect(getSubs().get(requestId)?.skipPollingIfUnfocused).toBe(false)

    subscription.updateSubscriptionOptions({
      pollingInterval: 20,
      skipPollingIfUnfocused: true,
    })

    await delay(1)
    expect(getSubs().size).toBe(1)
    expect(getSubs().get(requestId)?.skipPollingIfUnfocused).toBe(true)
  })

  it('should minimize polling recalculations when adding multiple subscribers', async () => {
    // Reset any existing state
    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    const SUBSCRIBER_COUNT = 10
    const subscriptions: QueryActionCreatorResult<any>[] = []

    // Add 10 subscribers to the same endpoint with polling enabled
    for (let i = 0; i < SUBSCRIBER_COUNT; i++) {
      const subscription = storeRef.store.dispatch(
        getPosts.initiate(1, {
          subscriptionOptions: { pollingInterval: 1000 },
          subscribe: true,
        }),
      )
      subscriptions.push(subscription)
    }

    // Wait a bit for all subscriptions to be processed
    await Promise.all(subscriptions)

    // Wait for the poll update timer
    await delay(25)

    // Get the polling state using the secret "getPolling" action
    const currentPolls = storeRef.store.dispatch({
      type: `${api.reducerPath}/getPolling`,
    }) as any

    // Get the query cache key for our endpoint
    const queryCacheKey = subscriptions[0].queryCacheKey

    // Check the poll update counters
    const pollUpdateCounters = currentPolls.pollUpdateCounters || {}
    const updateCount = pollUpdateCounters[queryCacheKey] || 0

    // With batching optimization, this should be much lower than SUBSCRIBER_COUNT
    // Ideally 1, but could be slightly higher due to timing
    expect(updateCount).toBeGreaterThanOrEqual(1)
    expect(updateCount).toBeLessThanOrEqual(2)

    // Clean up subscriptions
    subscriptions.forEach((sub) => sub.unsubscribe())
  })
})
