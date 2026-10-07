import { server } from '@internal/query/tests/mocks/server'
import { setupApiStore } from '@internal/tests/utils/helpers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { waitFor } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { vi } from 'vitest'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: () => ({}),
})
const storeRef = setupApiStore(api)

const onStart = vi.fn()
const onSuccess = vi.fn()
const onError = vi.fn()

beforeEach(() => {
  onStart.mockClear()
  onSuccess.mockClear()
  onError.mockClear()
})

describe.each([['query'], ['mutation']] as const)(
  'generic cases: %s',
  (type) => {
    test(`${type}: onStart only`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/success',
            onQueryStarted(arg) {
              onStart(arg)
            },
          }),
        }),
      })
      storeRef.store.dispatch(extended.endpoints.injected.initiate('arg'))
      expect(onStart).toHaveBeenCalledWith('arg')
    })

    test(`${type}: onStart and onSuccess`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<number, string>({
            query: () => '/success',
            async onQueryStarted(arg, { queryFulfilled }) {
              onStart(arg)
              // awaiting without catching like this would result in an `unhandledRejection` exception if there was an error
              // unfortunately we cannot test for that in jest.
              const result = await queryFulfilled
              onSuccess(result)
            },
          }),
        }),
      })
      storeRef.store.dispatch(extended.endpoints.injected.initiate('arg'))
      expect(onStart).toHaveBeenCalledWith('arg')
      await waitFor(() => {
        expect(onSuccess).toHaveBeenCalledWith({
          data: { value: 'success' },
          meta: {
            request: expect.any(Request),
            response: expect.any(Object), // Response is not available in jest env
          },
        })
      })
    })

    test(`${type}: onStart and onError`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/error',
            async onQueryStarted(arg, { queryFulfilled }) {
              onStart(arg)
              try {
                const result = await queryFulfilled
                onSuccess(result)
              } catch (e) {
                onError(e)
              }
            },
          }),
        }),
      })
      storeRef.store.dispatch(extended.endpoints.injected.initiate('arg'))
      expect(onStart).toHaveBeenCalledWith('arg')
      await waitFor(() => {
        expect(onError).toHaveBeenCalledWith({
          error: {
            status: 500,
            data: { value: 'error' },
          },
          isUnhandledError: false,
          meta: {
            request: expect.any(Request),
            response: expect.any(Object), // Response is not available in jest env
          },
        })
      })
      expect(onSuccess).not.toHaveBeenCalled()
    })
  },
)

test('query: getCacheEntry (success)', async () => {
  const snapshot = vi.fn()
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<unknown, string>({
        query: () => '/success',
        async onQueryStarted(
          arg,
          { dispatch, getState, getCacheEntry, queryFulfilled },
        ) {
          try {
            snapshot(getCacheEntry())
            const result = await queryFulfilled
            onSuccess(result)
            snapshot(getCacheEntry())
          } catch (e) {
            onError(e)
            snapshot(getCacheEntry())
          }
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })

  expect(snapshot).toHaveBeenCalledTimes(2)
  expect(snapshot.mock.calls[0][0]).toMatchObject({
    endpointName: 'injected',
    isError: false,
    isLoading: true,
    isSuccess: false,
    isUninitialized: false,
    originalArgs: 'arg',
    requestId: promise.requestId,
    startedTimeStamp: expect.any(Number),
    status: 'pending',
  })
  expect(snapshot.mock.calls[1][0]).toMatchObject({
    data: {
      value: 'success',
    },
    endpointName: 'injected',
    fulfilledTimeStamp: expect.any(Number),
    isError: false,
    isLoading: false,
    isSuccess: true,
    isUninitialized: false,
    originalArgs: 'arg',
    requestId: promise.requestId,
    startedTimeStamp: expect.any(Number),
    status: 'fulfilled',
  })
})

test('query: getCacheEntry (error)', async () => {
  const snapshot = vi.fn()
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<unknown, string>({
        query: () => '/error',
        async onQueryStarted(
          arg,
          { dispatch, getState, getCacheEntry, queryFulfilled },
        ) {
          try {
            snapshot(getCacheEntry())
            const result = await queryFulfilled
            onSuccess(result)
            snapshot(getCacheEntry())
          } catch (e) {
            onError(e)
            snapshot(getCacheEntry())
          }
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )

  await waitFor(() => {
    expect(onError).toHaveBeenCalled()
  })

  expect(snapshot.mock.calls[0][0]).toMatchObject({
    endpointName: 'injected',
    isError: false,
    isLoading: true,
    isSuccess: false,
    isUninitialized: false,
    originalArgs: 'arg',
    requestId: promise.requestId,
    startedTimeStamp: expect.any(Number),
    status: 'pending',
  })
  expect(snapshot.mock.calls[1][0]).toMatchObject({
    error: {
      data: { value: 'error' },
      status: 500,
    },
    endpointName: 'injected',
    isError: true,
    isLoading: false,
    isSuccess: false,
    isUninitialized: false,
    originalArgs: 'arg',
    requestId: promise.requestId,
    startedTimeStamp: expect.any(Number),
    status: 'rejected',
  })
})

test('mutation: getCacheEntry (success)', async () => {
  const snapshot = vi.fn()
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.mutation<unknown, string>({
        query: () => '/success',
        async onQueryStarted(
          arg,
          { dispatch, getState, getCacheEntry, queryFulfilled },
        ) {
          try {
            snapshot(getCacheEntry())
            const result = await queryFulfilled
            onSuccess(result)
            snapshot(getCacheEntry())
          } catch (e) {
            onError(e)
            snapshot(getCacheEntry())
          }
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })

  expect(snapshot).toHaveBeenCalledTimes(2)
  expect(snapshot.mock.calls[0][0]).toMatchObject({
    endpointName: 'injected',
    isError: false,
    isLoading: true,
    isSuccess: false,
    isUninitialized: false,
    startedTimeStamp: expect.any(Number),
    status: 'pending',
  })
  expect(snapshot.mock.calls[1][0]).toMatchObject({
    data: {
      value: 'success',
    },
    endpointName: 'injected',
    fulfilledTimeStamp: expect.any(Number),
    isError: false,
    isLoading: false,
    isSuccess: true,
    isUninitialized: false,
    startedTimeStamp: expect.any(Number),
    status: 'fulfilled',
  })
})

test('mutation: getCacheEntry (error)', async () => {
  const snapshot = vi.fn()
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.mutation<unknown, string>({
        query: () => '/error',
        async onQueryStarted(
          arg,
          { dispatch, getState, getCacheEntry, queryFulfilled },
        ) {
          try {
            snapshot(getCacheEntry())
            const result = await queryFulfilled
            onSuccess(result)
            snapshot(getCacheEntry())
          } catch (e) {
            onError(e)
            snapshot(getCacheEntry())
          }
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )

  await waitFor(() => {
    expect(onError).toHaveBeenCalled()
  })

  expect(snapshot.mock.calls[0][0]).toMatchObject({
    endpointName: 'injected',
    isError: false,
    isLoading: true,
    isSuccess: false,
    isUninitialized: false,
    startedTimeStamp: expect.any(Number),
    status: 'pending',
  })
  expect(snapshot.mock.calls[1][0]).toMatchObject({
    error: {
      data: { value: 'error' },
      status: 500,
    },
    endpointName: 'injected',
    isError: true,
    isLoading: false,
    isSuccess: false,
    isUninitialized: false,
    startedTimeStamp: expect.any(Number),
    status: 'rejected',
  })
})

test('query: updateCachedData', async () => {
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<{ value: string }, string>({
        query: () => '/success',
        async onQueryStarted(
          arg,
          {
            dispatch,
            getState,
            getCacheEntry,
            updateCachedData,
            queryFulfilled,
          },
        ) {
          // calling `updateCachedData` when there is no data yet should not do anything
          // but if there is a cache value it will be updated & overwritten by the next successful result
          updateCachedData((draft) => {
            draft.value += '.'
          })

          try {
            await queryFulfilled
            onSuccess(getCacheEntry().data)
          } catch (error) {
            updateCachedData((draft) => {
              draft.value += 'x'
            })
            onError(getCacheEntry().data)
          }
        },
      }),
    }),
  })

  // request 1: success
  expect(onSuccess).not.toHaveBeenCalled()
  storeRef.store.dispatch(extended.endpoints.injected.initiate('arg'))

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })
  expect(onSuccess).toHaveBeenCalledWith({ value: 'success' })
  onSuccess.mockClear()

  // request 2: error
  expect(onError).not.toHaveBeenCalled()
  server.use(
    http.get(
      'https://example.com/success',
      () => {
        return HttpResponse.json({ value: 'failed' }, { status: 500 })
      },
      { once: true },
    ),
  )
  storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg', { forceRefetch: true }),
  )

  await waitFor(() => {
    expect(onError).toHaveBeenCalled()
  })
  expect(onError).toHaveBeenCalledWith({ value: 'success.x' })

  // request 3: success
  expect(onSuccess).not.toHaveBeenCalled()

  storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg', { forceRefetch: true }),
  )

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })
  expect(onSuccess).toHaveBeenCalledWith({ value: 'success' })
  onSuccess.mockClear()
})

test('infinite query: updateCachedData', async () => {
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      infiniteInjected: build.infiniteQuery<{ value: string }, string, number>({
        query: () => '/success',
        infiniteQueryOptions: {
          initialPageParam: 1,
          getNextPageParam: (
            lastPage,
            allPages,
            lastPageParam,
            allPageParams,
          ) => lastPageParam + 1,
        },
        async onQueryStarted(
          arg,
          {
            dispatch,
            getState,
            getCacheEntry,
            updateCachedData,
            queryFulfilled,
          },
        ) {
          // calling `updateCachedData` when there is no data yet should not do anything
          // but if there is a cache value it will be updated & overwritten by the next successful result
          updateCachedData((draft) => {
            draft.pages = [{ value: '.' }]
            draft.pageParams = [1]
          })

          try {
            await queryFulfilled
            onSuccess(getCacheEntry().data)
          } catch (error) {
            updateCachedData((draft) => {
              draft.pages = [{ value: 'success.x' }]
              draft.pageParams = [1]
            })
            onError(getCacheEntry().data)
          }
        },
      }),
    }),
  })

  // request 1: success
  expect(onSuccess).not.toHaveBeenCalled()
  storeRef.store.dispatch(extended.endpoints.infiniteInjected.initiate('arg'))

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })
  expect(onSuccess).toHaveBeenCalledWith({
    pages: [{ value: 'success' }],
    pageParams: [1],
  })
  onSuccess.mockClear()

  // request 2: error
  expect(onError).not.toHaveBeenCalled()
  server.use(
    http.get(
      'https://example.com/success',
      () => {
        return HttpResponse.json({ value: 'failed' }, { status: 500 })
      },
      { once: true },
    ),
  )
  storeRef.store.dispatch(
    extended.endpoints.infiniteInjected.initiate('arg', { forceRefetch: true }),
  )

  await waitFor(() => {
    expect(onError).toHaveBeenCalled()
  })
  expect(onError).toHaveBeenCalledWith({
    pages: [{ value: 'success.x' }],
    pageParams: [1],
  })

  // request 3: success
  expect(onSuccess).not.toHaveBeenCalled()

  storeRef.store.dispatch(
    extended.endpoints.infiniteInjected.initiate('arg', { forceRefetch: true }),
  )

  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })
  expect(onSuccess).toHaveBeenCalledWith({
    pages: [{ value: 'success' }],
    pageParams: [1],
  })
  onSuccess.mockClear()
})

test('query: will only start lifecycle if query is not skipped due to `condition`', async () => {
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<unknown, string>({
        query: () => '/success',
        onQueryStarted(arg) {
          onStart(arg)
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )
  expect(onStart).toHaveBeenCalledOnce()
  storeRef.store.dispatch(extended.endpoints.injected.initiate('arg'))
  expect(onStart).toHaveBeenCalledOnce()
  await promise
  storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg', { forceRefetch: true }),
  )
  expect(onStart).toHaveBeenCalledTimes(2)
})
