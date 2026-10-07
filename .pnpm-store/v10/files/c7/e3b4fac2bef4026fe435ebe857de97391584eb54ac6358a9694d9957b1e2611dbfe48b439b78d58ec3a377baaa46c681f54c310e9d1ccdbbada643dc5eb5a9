import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import { vi } from 'vitest'
import type { Middleware, Reducer } from 'redux'
import {
  THIRTY_TWO_BIT_MAX_INT,
  THIRTY_TWO_BIT_MAX_TIMER_SECONDS,
} from '../core/buildMiddleware/cacheCollection'
import { countObjectKeys } from '../utils/countObjectKeys'

beforeAll(() => {
  vi.useFakeTimers()
})

const onCleanup = vi.fn()

beforeEach(() => {
  onCleanup.mockClear()
})

test(`query: await cleanup, defaults`, async () => {
  const { store, api } = storeForApi(
    createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
      endpoints: (build) => ({
        query: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    }),
  )

  const promise = store.dispatch(api.endpoints.query.initiate('arg'))
  await promise
  promise.unsubscribe()
  vi.advanceTimersByTime(59000)
  expect(onCleanup).not.toHaveBeenCalled()
  vi.advanceTimersByTime(2000)
  expect(onCleanup).toHaveBeenCalled()
})

test(`query: await cleanup, keepUnusedDataFor set`, async () => {
  const { store, api } = storeForApi(
    createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
      endpoints: (build) => ({
        query: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
      keepUnusedDataFor: 29,
    }),
  )

  const promise = store.dispatch(api.endpoints.query.initiate('arg'))
  await promise
  promise.unsubscribe()
  vi.advanceTimersByTime(28000)
  expect(onCleanup).not.toHaveBeenCalled()
  vi.advanceTimersByTime(2000)
  expect(onCleanup).toHaveBeenCalled()
})

test(`query: handles large keepUnuseDataFor values over 32-bit ms`, async () => {
  const { store, api } = storeForApi(
    createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
      endpoints: (build) => ({
        query: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
      keepUnusedDataFor: THIRTY_TWO_BIT_MAX_TIMER_SECONDS - 10,
    }),
  )

  const promise = store.dispatch(api.endpoints.query.initiate('arg'))
  await promise
  promise.unsubscribe()

  // Shouldn't have been called right away
  vi.advanceTimersByTime(1000)
  expect(onCleanup).not.toHaveBeenCalled()

  // Shouldn't have been called any time in the next few minutes
  vi.advanceTimersByTime(1_000_000)
  expect(onCleanup).not.toHaveBeenCalled()

  // _Should_ be called _wayyyy_ in the future (like 24.8 days from now)
  vi.advanceTimersByTime(THIRTY_TWO_BIT_MAX_TIMER_SECONDS * 1000),
    expect(onCleanup).toHaveBeenCalled()
})

describe(`query: await cleanup, keepUnusedDataFor set`, () => {
  const { store, api } = storeForApi(
    createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
      endpoints: (build) => ({
        query: build.query<unknown, string>({
          query: () => '/success',
        }),
        query2: build.query<unknown, string>({
          query: () => '/success',
          keepUnusedDataFor: 35,
        }),
        query3: build.query<unknown, string>({
          query: () => '/success',
          keepUnusedDataFor: 0,
        }),
        query4: build.query<unknown, string>({
          query: () => '/success',
          keepUnusedDataFor: Infinity,
        }),
      }),
      keepUnusedDataFor: 29,
    }),
  )

  test('global keepUnusedDataFor', async () => {
    const promise = store.dispatch(api.endpoints.query.initiate('arg'))
    await promise
    promise.unsubscribe()
    vi.advanceTimersByTime(28000)
    expect(onCleanup).not.toHaveBeenCalled()
    vi.advanceTimersByTime(2000)
    expect(onCleanup).toHaveBeenCalled()
  })

  test('endpoint keepUnusedDataFor', async () => {
    const promise = store.dispatch(api.endpoints.query2.initiate('arg'))
    await promise
    promise.unsubscribe()

    vi.advanceTimersByTime(34000)
    expect(onCleanup).not.toHaveBeenCalled()
    vi.advanceTimersByTime(2000)
    expect(onCleanup).toHaveBeenCalled()
  })

  test('endpoint keepUnusedDataFor: 0 ', async () => {
    expect(onCleanup).not.toHaveBeenCalled()
    const promise = store.dispatch(api.endpoints.query3.initiate('arg'))
    await promise
    promise.unsubscribe()
    expect(onCleanup).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1)
    expect(onCleanup).toHaveBeenCalled()
  })

  test('endpoint keepUnusedDataFor: Infinity', async () => {
    expect(onCleanup).not.toHaveBeenCalled()
    store.dispatch(api.endpoints.query4.initiate('arg')).unsubscribe()
    expect(onCleanup).not.toHaveBeenCalled()
    vi.advanceTimersByTime(THIRTY_TWO_BIT_MAX_INT)
    expect(onCleanup).not.toHaveBeenCalled()
  })
})

describe('resetApiState cleanup', () => {
  test('resetApiState aborts multiple running queries and mutations', async () => {
    const { store, api } = storeForApi(
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        endpoints: (build) => ({
          query1: build.query<unknown, string>({
            query: () => '/success',
          }),
          query2: build.query<unknown, string>({
            query: () => '/success',
          }),
          mutation: build.mutation<unknown, string>({
            query: () => ({
              url: '/success',
              method: 'POST',
            }),
          }),
        }),
      }),
    )

    // Start multiple queries and a mutation
    const queryPromise1 = store.dispatch(api.endpoints.query1.initiate('arg1'))
    const queryPromise2 = store.dispatch(api.endpoints.query2.initiate('arg2'))
    const mutationPromise = store.dispatch(
      api.endpoints.mutation.initiate('arg'),
    )

    // Spy on abort methods
    queryPromise1.abort = vi.fn(queryPromise1.abort)
    queryPromise2.abort = vi.fn(queryPromise2.abort)
    mutationPromise.abort = vi.fn(mutationPromise.abort)

    // Dispatch resetApiState
    store.dispatch(api.util.resetApiState())

    // Verify all aborts were called
    expect(queryPromise1.abort).toHaveBeenCalled()
    expect(queryPromise2.abort).toHaveBeenCalled()
    expect(mutationPromise.abort).toHaveBeenCalled()
  })
})

function storeForApi<
  A extends {
    reducerPath: 'api'
    reducer: Reducer<any, any>
    middleware: Middleware
    util: { resetApiState(): any }
  },
>(api: A) {
  const store = configureStore({
    reducer: { api: api.reducer },
    middleware: (gdm) =>
      gdm({ serializableCheck: false, immutableCheck: false }).concat(
        api.middleware,
      ),
    enhancers: (gde) =>
      gde({
        autoBatch: false,
      }),
  })
  let hadQueries = false
  store.subscribe(() => {
    const queryState = store.getState().api.queries
    if (hadQueries && countObjectKeys(queryState) === 0) {
      onCleanup()
    }
    hadQueries = hadQueries || countObjectKeys(queryState) > 0
  })
  return { api, store }
}
