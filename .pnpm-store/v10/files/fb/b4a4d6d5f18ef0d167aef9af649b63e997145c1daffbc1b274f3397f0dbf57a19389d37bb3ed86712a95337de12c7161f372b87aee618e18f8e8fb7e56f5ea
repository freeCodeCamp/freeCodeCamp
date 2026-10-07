import { setupApiStore } from '@internal/tests/utils/helpers'
import { createApi } from '../core'
import type { SubscriptionSelectors } from '../core/buildMiddleware/types'
import { fakeBaseQuery } from '../fakeBaseQuery'
import { delay } from '@internal/utils'

let calls = 0
const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    increment: build.query<number, void>({
      async queryFn() {
        const data = calls++
        await Promise.resolve()
        return { data }
      },
    }),
    incrementKeep0: build.query<number, void>({
      async queryFn() {
        const data = calls++
        await delay(10)
        return { data }
      },
      keepUnusedDataFor: 0,
    }),
    failing: build.query<void, void>({
      async queryFn() {
        await Promise.resolve()
        return { error: { status: 500, data: 'error' } }
      },
    }),
  }),
})

const storeRef = setupApiStore(api)

let getSubscriptions: SubscriptionSelectors['getSubscriptions']
let isRequestSubscribed: SubscriptionSelectors['isRequestSubscribed']

beforeEach(() => {
  ;({ getSubscriptions, isRequestSubscribed } = storeRef.store.dispatch(
    api.internalActions.internal_getRTKQSubscriptions(),
  ) as unknown as SubscriptionSelectors)
})

test('multiple synchonrous initiate calls with pre-existing cache entry', async () => {
  const { store, api } = storeRef
  // seed the store
  const firstValue = await store.dispatch(api.endpoints.increment.initiate())

  expect(firstValue).toMatchObject({ data: 0, status: 'fulfilled' })

  // dispatch another increment
  const secondValuePromise = store.dispatch(api.endpoints.increment.initiate())
  // and one with a forced refresh
  const thirdValuePromise = store.dispatch(
    api.endpoints.increment.initiate(undefined, { forceRefetch: true }),
  )
  // and another increment
  const fourthValuePromise = store.dispatch(api.endpoints.increment.initiate())

  const secondValue = await secondValuePromise
  const thirdValue = await thirdValuePromise
  const fourthValue = await fourthValuePromise

  expect(secondValue).toMatchObject({
    data: firstValue.data,
    status: 'fulfilled',
    requestId: firstValue.requestId,
  })

  expect(thirdValue).toMatchObject({ data: 1, status: 'fulfilled' })
  expect(thirdValue.requestId).not.toBe(firstValue.requestId)
  expect(fourthValue).toMatchObject({
    data: thirdValue.data,
    status: 'fulfilled',
    requestId: thirdValue.requestId,
  })
})

describe('calling initiate without a cache entry, with subscribe: false still returns correct values', () => {
  test('successful query', async () => {
    const { store, api } = storeRef
    calls = 0
    const promise = store.dispatch(
      api.endpoints.increment.initiate(undefined, { subscribe: false }),
    )
    expect(isRequestSubscribed('increment(undefined)', promise.requestId)).toBe(
      false,
    )

    await expect(promise).resolves.toMatchObject({
      data: 0,
      status: 'fulfilled',
    })
  })

  test('successful query with keepUnusedDataFor: 0', async () => {
    const { store, api } = storeRef
    calls = 0
    const promise = store.dispatch(
      api.endpoints.incrementKeep0.initiate(undefined, { subscribe: false }),
    )
    expect(isRequestSubscribed('increment(undefined)', promise.requestId)).toBe(
      false,
    )

    await expect(promise.unwrap()).resolves.toBe(0)
  })

  test('rejected query', async () => {
    const { store, api } = storeRef
    calls = 0
    const promise = store.dispatch(
      api.endpoints.failing.initiate(undefined, { subscribe: false }),
    )
    expect(isRequestSubscribed('failing(undefined)', promise.requestId)).toBe(
      false,
    )

    await expect(promise).resolves.toMatchObject({
      status: 'rejected',
    })
  })
})

describe('calling initiate should have resulting queryCacheKey match baseQuery queryCacheKey', () => {
  const baseQuery = vi.fn(() => ({ data: 'success' }))
  function getNewApi() {
    return createApi({
      baseQuery,
      endpoints: (build) => ({
        query: build.query<void, { arg1: string; arg2: string }>({
          query: (args) => `queryUrl/${args.arg1}/${args.arg2}`,
        }),
        mutation: build.mutation<void, { arg1: string; arg2: string }>({
          query: () => 'mutationUrl',
        }),
      }),
    })
  }
  let api = getNewApi()
  beforeEach(() => {
    baseQuery.mockClear()
    api = getNewApi()
  })

  test('should be a string and matching on queries', () => {
    const { store: storeApi } = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    const promise = storeApi.dispatch(
      api.endpoints.query.initiate({ arg2: 'secondArg', arg1: 'firstArg' }),
    )
    expect(baseQuery).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        queryCacheKey: promise.queryCacheKey,
      }),
      undefined,
    )
  })

  test('should be undefined and matching on mutations', () => {
    const { store: storeApi } = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeApi.dispatch(
      api.endpoints.mutation.initiate({ arg2: 'secondArg', arg1: 'firstArg' }),
    )
    expect(baseQuery).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        queryCacheKey: undefined,
      }),
      undefined,
    )
  })
})

describe('getRunningQueryThunk with multiple stores', () => {
  test('should isolate running queries between different store instances using the same API', async () => {
    // Create a shared API instance
    const sharedApi = createApi({
      baseQuery: fakeBaseQuery(),
      endpoints: (build) => ({
        testQuery: build.query<string, string>({
          async queryFn(arg) {
            // Add delay to ensure queries are running when we check
            await new Promise((resolve) => setTimeout(resolve, 50))
            return { data: `result-${arg}` }
          },
        }),
      }),
    })

    // Create two separate stores using the same API instance
    const store1 = setupApiStore(sharedApi, undefined, {
      withoutTestLifecycles: true,
    }).store
    const store2 = setupApiStore(sharedApi, undefined, {
      withoutTestLifecycles: true,
    }).store

    // Start queries on both stores
    const query1Promise = store1.dispatch(
      sharedApi.endpoints.testQuery.initiate('arg1'),
    )
    const query2Promise = store2.dispatch(
      sharedApi.endpoints.testQuery.initiate('arg2'),
    )

    // Verify that getRunningQueryThunk returns the correct query for each store
    const runningQuery1 = store1.dispatch(
      sharedApi.util.getRunningQueryThunk('testQuery', 'arg1'),
    )
    const runningQuery2 = store2.dispatch(
      sharedApi.util.getRunningQueryThunk('testQuery', 'arg2'),
    )

    // Each store should only see its own running query
    expect(runningQuery1).toBeDefined()
    expect(runningQuery2).toBeDefined()
    expect(runningQuery1?.requestId).toBe(query1Promise.requestId)
    expect(runningQuery2?.requestId).toBe(query2Promise.requestId)

    // Cross-store queries should not be visible
    const crossQuery1 = store1.dispatch(
      sharedApi.util.getRunningQueryThunk('testQuery', 'arg2'),
    )
    const crossQuery2 = store2.dispatch(
      sharedApi.util.getRunningQueryThunk('testQuery', 'arg1'),
    )

    expect(crossQuery1).toBeUndefined()
    expect(crossQuery2).toBeUndefined()

    // Wait for queries to complete
    await Promise.all([query1Promise, query2Promise])

    // After completion, getRunningQueryThunk should return undefined for both stores
    const completedQuery1 = store1.dispatch(
      sharedApi.util.getRunningQueryThunk('testQuery', 'arg1'),
    )
    const completedQuery2 = store2.dispatch(
      sharedApi.util.getRunningQueryThunk('testQuery', 'arg2'),
    )

    expect(completedQuery1).toBeUndefined()
    expect(completedQuery2).toBeUndefined()
  })

  test('should handle same query args on different stores independently', async () => {
    // Create a shared API instance
    const sharedApi = createApi({
      baseQuery: fakeBaseQuery(),
      endpoints: (build) => ({
        sameArgQuery: build.query<string, string>({
          async queryFn(arg) {
            await new Promise((resolve) => setTimeout(resolve, 50))
            return { data: `result-${arg}-${Math.random()}` }
          },
        }),
      }),
    })

    // Create two separate stores
    const store1 = setupApiStore(sharedApi, undefined, {
      withoutTestLifecycles: true,
    }).store
    const store2 = setupApiStore(sharedApi, undefined, {
      withoutTestLifecycles: true,
    }).store

    // Start the same query on both stores
    const sameArg = 'shared-arg'
    const query1Promise = store1.dispatch(
      sharedApi.endpoints.sameArgQuery.initiate(sameArg),
    )
    const query2Promise = store2.dispatch(
      sharedApi.endpoints.sameArgQuery.initiate(sameArg),
    )

    // Both stores should see their own running query with the same cache key
    const runningQuery1 = store1.dispatch(
      sharedApi.util.getRunningQueryThunk('sameArgQuery', sameArg),
    )
    const runningQuery2 = store2.dispatch(
      sharedApi.util.getRunningQueryThunk('sameArgQuery', sameArg),
    )

    expect(runningQuery1).toBeDefined()
    expect(runningQuery2).toBeDefined()
    expect(runningQuery1?.requestId).toBe(query1Promise.requestId)
    expect(runningQuery2?.requestId).toBe(query2Promise.requestId)

    // The request IDs should be different even though the cache key is the same
    expect(runningQuery1?.requestId).not.toBe(runningQuery2?.requestId)

    // But the cache keys should be the same
    expect(runningQuery1?.queryCacheKey).toBe(runningQuery2?.queryCacheKey)

    // Wait for completion
    await Promise.all([query1Promise, query2Promise])
  })
})
