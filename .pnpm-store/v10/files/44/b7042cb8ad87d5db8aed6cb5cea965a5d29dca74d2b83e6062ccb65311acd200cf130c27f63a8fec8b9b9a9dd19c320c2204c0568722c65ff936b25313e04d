import { createApi } from '@reduxjs/toolkit/query'
import { delay } from 'msw'
import { actionsReducer, setupApiStore } from '../../tests/utils/helpers'
import { vi } from 'vitest'

const baseQuery = (args?: any) => ({ data: args })
const api = createApi({
  baseQuery,
  tagTypes: ['Banana', 'Bread'],
  endpoints: (build) => ({
    getBanana: build.query<unknown, number>({
      query(id) {
        return { url: `banana/${id}` }
      },
      providesTags: ['Banana'],
    }),
    getBananas: build.query<unknown, void>({
      query() {
        return { url: 'bananas' }
      },
      providesTags: ['Banana'],
    }),
    getBread: build.query<unknown, number>({
      query(id) {
        return { url: `bread/${id}` }
      },
      providesTags: ['Bread'],
    }),
    invalidateFruit: build.mutation({
      query: (fruit?: 'Banana' | 'Bread' | null) => ({
        url: `invalidate/fruit/${fruit || ''}`,
      }),
      invalidatesTags(result, error, arg) {
        return [arg]
      },
    }),
  }),
})
const { getBanana, getBread, invalidateFruit } = api.endpoints

const storeRef = setupApiStore(api, {
  ...actionsReducer,
})

it('invalidates the specified tags', async () => {
  await storeRef.store.dispatch(getBanana.initiate(1))
  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    getBanana.matchPending,
    getBanana.matchFulfilled,
  )

  await storeRef.store.dispatch(api.util.invalidateTags(['Banana', 'Bread']))

  // Slight pause to let the middleware run and such
  await delay(20)

  const firstSequence = [
    api.internalActions.middlewareRegistered.match,
    getBanana.matchPending,
    getBanana.matchFulfilled,
    api.util.invalidateTags.match,
    getBanana.matchPending,
    getBanana.matchFulfilled,
  ]
  expect(storeRef.store.getState().actions).toMatchSequence(...firstSequence)

  await storeRef.store.dispatch(getBread.initiate(1))
  await storeRef.store.dispatch(api.util.invalidateTags([{ type: 'Bread' }]))

  await delay(20)

  expect(storeRef.store.getState().actions).toMatchSequence(
    ...firstSequence,
    getBread.matchPending,
    getBread.matchFulfilled,
    api.util.invalidateTags.match,
    getBread.matchPending,
    getBread.matchFulfilled,
  )
})

it('invalidates tags correctly when null or undefined are provided as tags', async () => {
  await storeRef.store.dispatch(getBanana.initiate(1))
  await storeRef.store.dispatch(
    api.util.invalidateTags([undefined, null, 'Banana']),
  )

  // Slight pause to let the middleware run and such
  await delay(20)

  const apiActions = [
    api.internalActions.middlewareRegistered.match,
    getBanana.matchPending,
    getBanana.matchFulfilled,
    api.util.invalidateTags.match,
    getBanana.matchPending,
    getBanana.matchFulfilled,
  ]

  expect(storeRef.store.getState().actions).toMatchSequence(...apiActions)
})

it.each([
  {
    tags: [undefined, null, 'Bread'] as Parameters<
      typeof api.util.invalidateTags
    >['0'],
  },
  { tags: [undefined, null] },
  { tags: [] },
])(
  'does not invalidate with tags=$tags if no query matches',
  async ({ tags }) => {
    await storeRef.store.dispatch(getBanana.initiate(1))
    await storeRef.store.dispatch(api.util.invalidateTags(tags))

    // Slight pause to let the middleware run and such
    await delay(20)

    const apiActions = [
      api.internalActions.middlewareRegistered.match,
      getBanana.matchPending,
      getBanana.matchFulfilled,
      api.util.invalidateTags.match,
    ]

    expect(storeRef.store.getState().actions).toMatchSequence(...apiActions)
  },
)

it.each([
  { mutationArg: 'Bread' as 'Bread' | null | undefined },
  { mutationArg: undefined },
  { mutationArg: null },
])(
  'does not invalidate queries when a mutation with tags=[$mutationArg] runs and does not match anything',
  async ({ mutationArg }) => {
    await storeRef.store.dispatch(getBanana.initiate(1))
    await storeRef.store.dispatch(invalidateFruit.initiate(mutationArg))

    // Slight pause to let the middleware run and such
    await delay(20)

    const apiActions = [
      api.internalActions.middlewareRegistered.match,
      getBanana.matchPending,
      getBanana.matchFulfilled,
      invalidateFruit.matchPending,
      invalidateFruit.matchFulfilled,
    ]

    expect(storeRef.store.getState().actions).toMatchSequence(...apiActions)
  },
)

it('correctly stringifies subscription state and dispatches subscriptionsUpdated', async () => {
  // Create a fresh store for this test to avoid interference
  const testStoreRef = setupApiStore(
    api,
    {
      ...actionsReducer,
    },
    { withoutListeners: true },
  )

  // Start multiple subscriptions
  const subscription1 = testStoreRef.store.dispatch(
    getBanana.initiate(1, {
      subscriptionOptions: { pollingInterval: 1000 },
    }),
  )
  const subscription2 = testStoreRef.store.dispatch(
    getBanana.initiate(2, {
      subscriptionOptions: { refetchOnFocus: true },
    }),
  )
  const subscription3 = testStoreRef.store.dispatch(
    api.endpoints.getBananas.initiate(),
  )

  // Wait for the subscriptions to be established
  await Promise.all([subscription1, subscription2, subscription3])

  // Wait for the subscription sync timer (500ms + buffer)
  await delay(600)

  // Check the final subscription state in the store
  const finalState = testStoreRef.store.getState()
  const subscriptionState = finalState[api.reducerPath].subscriptions

  // Should have subscriptions for getBanana(1), getBanana(2), and getBananas()
  expect(subscriptionState).toMatchObject({
    'getBanana(1)': {
      [subscription1.requestId]: { pollingInterval: 1000 },
    },
    'getBanana(2)': {
      [subscription2.requestId]: { refetchOnFocus: true },
    },
    'getBananas(undefined)': {
      [subscription3.requestId]: {},
    },
  })

  // Verify the subscription entries have the expected structure
  expect(Object.keys(subscriptionState)).toHaveLength(3)
  expect(subscriptionState['getBanana(1)']?.[subscription1.requestId]).toEqual({
    pollingInterval: 1000,
  })
  expect(subscriptionState['getBanana(2)']?.[subscription2.requestId]).toEqual({
    refetchOnFocus: true,
  })
  expect(
    subscriptionState['getBananas(undefined)']?.[subscription3.requestId],
  ).toEqual({})
})

it('does not leak subscription state between multiple stores using the same API instance (SSR scenario)', async () => {
  vi.useFakeTimers()
  // Simulate SSR: create API once at module level
  const sharedApi = createApi({
    baseQuery: (args?: any) => ({ data: args }),
    tagTypes: ['Test'],
    endpoints: (build) => ({
      getTest: build.query<unknown, number>({
        query(id) {
          return { url: `test/${id}` }
        },
      }),
    }),
  })

  // Create first store (simulating first SSR request)
  const store1Ref = setupApiStore(sharedApi, {}, { withoutListeners: true })

  // Add subscription in store1
  const sub1 = store1Ref.store.dispatch(
    sharedApi.endpoints.getTest.initiate(1, {
      subscriptionOptions: { pollingInterval: 1000 },
    }),
  )
  vi.advanceTimersByTime(10)
  await sub1

  // Wait for subscription sync (500ms + buffer)
  vi.advanceTimersByTime(600)

  // Verify store1 has the subscription
  const store1SubscriptionSelectors = store1Ref.store.dispatch(
    sharedApi.internalActions.internal_getRTKQSubscriptions(),
  ) as any
  const store1InternalSubs = store1SubscriptionSelectors.getSubscriptions()
  expect(store1InternalSubs.size).toBe(1)

  // Create second store (simulating second SSR request)
  const store2Ref = setupApiStore(sharedApi, {}, { withoutListeners: true })

  // Check subscriptions via internal action
  const store2SubscriptionSelectors = store2Ref.store.dispatch(
    sharedApi.internalActions.internal_getRTKQSubscriptions(),
  ) as any

  const store2InternalSubs = store2SubscriptionSelectors.getSubscriptions()

  expect(store2InternalSubs.size).toBe(0)
})
