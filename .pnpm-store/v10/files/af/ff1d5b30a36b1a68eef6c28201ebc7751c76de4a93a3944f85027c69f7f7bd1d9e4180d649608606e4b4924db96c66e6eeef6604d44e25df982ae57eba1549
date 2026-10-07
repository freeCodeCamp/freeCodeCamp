import {
  DEFAULT_DELAY_MS,
  fakeTimerWaitFor,
  setupApiStore,
} from '@internal/tests/utils/helpers'
import type { QueryActionCreatorResult } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

beforeAll(() => {
  vi.useFakeTimers()
})

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: () => ({}),
})
const storeRef = setupApiStore(api)

const onNewCacheEntry = vi.fn()
const gotFirstValue = vi.fn()
const onCleanup = vi.fn()
const onCatch = vi.fn()

beforeEach(() => {
  onNewCacheEntry.mockClear()
  gotFirstValue.mockClear()
  onCleanup.mockClear()
  onCatch.mockClear()
})

describe.each([['query'], ['mutation']] as const)(
  'generic cases: %s',
  (type) => {
    test(`${type}: new cache entry only`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/success',
            onCacheEntryAdded(arg, { dispatch, getState }) {
              onNewCacheEntry(arg)
            },
          }),
        }),
      })
      storeRef.store.dispatch(extended.endpoints.injected.initiate('arg'))
      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')
    })

    test(`${type}: await cacheEntryRemoved`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          // Lying to TS here
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/success',
            async onCacheEntryAdded(
              arg,
              { dispatch, getState, cacheEntryRemoved },
            ) {
              onNewCacheEntry(arg)
              await cacheEntryRemoved
              onCleanup()
            },
          }),
        }),
      })
      const promise = storeRef.store.dispatch(
        extended.endpoints.injected.initiate('arg'),
      )

      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')
      expect(onCleanup).not.toHaveBeenCalled()

      await promise
      if (type === 'mutation') {
        promise.reset()
      } else {
        ;(promise as unknown as QueryActionCreatorResult<any>).unsubscribe()
      }
      await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)
      if (type === 'query') {
        await vi.advanceTimersByTimeAsync(59000)
        expect(onCleanup).not.toHaveBeenCalled()
        await vi.advanceTimersByTimeAsync(2000)
      }

      expect(onCleanup).toHaveBeenCalled()
    })

    test(`${type}: await cacheDataLoaded, await cacheEntryRemoved (success)`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<number, string>({
            query: () => '/success',
            async onCacheEntryAdded(
              arg,
              { dispatch, getState, cacheEntryRemoved, cacheDataLoaded },
            ) {
              onNewCacheEntry(arg)
              const firstValue = await cacheDataLoaded
              gotFirstValue(firstValue)
              await cacheEntryRemoved
              onCleanup()
            },
          }),
        }),
      })
      const promise = storeRef.store.dispatch(
        extended.endpoints.injected.initiate('arg'),
      )

      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')

      expect(gotFirstValue).not.toHaveBeenCalled()
      expect(onCleanup).not.toHaveBeenCalled()

      await fakeTimerWaitFor(() => {
        expect(gotFirstValue).toHaveBeenCalled()
      })
      expect(gotFirstValue).toHaveBeenCalledWith({
        data: { value: 'success' },
        meta: {
          request: expect.any(Request),
          response: expect.any(Object), // Response is not available in jest env
        },
      })
      expect(onCleanup).not.toHaveBeenCalled()

      if (type === 'mutation') {
        promise.reset()
      } else {
        ;(promise as unknown as QueryActionCreatorResult<any>).unsubscribe()
      }
      await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)
      if (type === 'query') {
        await vi.advanceTimersByTimeAsync(59000)
        expect(onCleanup).not.toHaveBeenCalled()
        await vi.advanceTimersByTimeAsync(2000)
      }

      expect(onCleanup).toHaveBeenCalled()
    })

    test(`${type}: await cacheDataLoaded, await cacheEntryRemoved (cacheDataLoaded never resolves)`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/error', // we will initiate only once and that one time will be an error -> cacheDataLoaded will never resolve
            async onCacheEntryAdded(
              arg,
              { dispatch, getState, cacheEntryRemoved, cacheDataLoaded },
            ) {
              onNewCacheEntry(arg)
              // this will wait until cacheEntryRemoved, then reject => nothing past that line will execute
              // but since this special "cacheEntryRemoved" rejection is handled outside, there will be no
              // uncaught rejection error
              const firstValue = await cacheDataLoaded
              gotFirstValue(firstValue)
              await cacheEntryRemoved
              onCleanup()
            },
          }),
        }),
      })
      const promise = storeRef.store.dispatch(
        extended.endpoints.injected.initiate('arg'),
      )
      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')

      if (type === 'mutation') {
        promise.reset()
      } else {
        ;(promise as unknown as QueryActionCreatorResult<any>).unsubscribe()
      }
      await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)
      if (type === 'query') {
        await vi.advanceTimersByTimeAsync(120000)
      }
      expect(gotFirstValue).not.toHaveBeenCalled()
      expect(onCleanup).not.toHaveBeenCalled()
    })

    test(`${type}: try { await cacheDataLoaded }, await cacheEntryRemoved (cacheDataLoaded never resolves)`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/error', // we will initiate only once and that one time will be an error -> cacheDataLoaded will never resolve
            async onCacheEntryAdded(
              arg,
              { dispatch, getState, cacheEntryRemoved, cacheDataLoaded },
            ) {
              onNewCacheEntry(arg)

              try {
                // this will wait until cacheEntryRemoved, then reject => nothing else in this try..catch block will execute
                const firstValue = await cacheDataLoaded
                gotFirstValue(firstValue)
              } catch (e) {
                onCatch(e)
              }
              await cacheEntryRemoved
              onCleanup()
            },
          }),
        }),
      })
      const promise = storeRef.store.dispatch(
        extended.endpoints.injected.initiate('arg'),
      )

      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')
      await promise
      if (type === 'mutation') {
        promise.reset()
      } else {
        ;(promise as unknown as QueryActionCreatorResult<any>).unsubscribe()
      }
      await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)

      if (type === 'query') {
        await vi.advanceTimersByTimeAsync(59000)
        expect(onCleanup).not.toHaveBeenCalled()
        await vi.advanceTimersByTimeAsync(2000)
      }

      expect(onCleanup).toHaveBeenCalled()
      expect(gotFirstValue).not.toHaveBeenCalled()
      expect(onCatch.mock.calls[0][0]).toMatchObject({
        message: 'Promise never resolved before cacheEntryRemoved.',
      })
    })

    test(`${type}: try { await cacheDataLoaded, await cacheEntryRemoved } (cacheDataLoaded never resolves)`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/error', // we will initiate only once and that one time will be an error -> cacheDataLoaded will never resolve
            async onCacheEntryAdded(
              arg,
              { dispatch, getState, cacheEntryRemoved, cacheDataLoaded },
            ) {
              onNewCacheEntry(arg)

              try {
                // this will wait until cacheEntryRemoved, then reject => nothing else in this try..catch block will execute
                const firstValue = await cacheDataLoaded
                gotFirstValue(firstValue)
                // cleanup in this scenario only needs to be done for stuff within this try..catch block - totally valid scenario
                await cacheEntryRemoved
                onCleanup()
              } catch (e) {
                onCatch(e)
              }
            },
          }),
        }),
      })
      const promise = storeRef.store.dispatch(
        extended.endpoints.injected.initiate('arg'),
      )

      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')
      await promise

      if (type === 'mutation') {
        promise.reset()
      } else {
        ;(promise as unknown as QueryActionCreatorResult<any>).unsubscribe()
      }
      await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)
      if (type === 'query') {
        await vi.advanceTimersByTimeAsync(59000)
        expect(onCleanup).not.toHaveBeenCalled()
        await vi.advanceTimersByTimeAsync(2000)
      }
      expect(onCleanup).not.toHaveBeenCalled()
      expect(gotFirstValue).not.toHaveBeenCalled()
      expect(onCatch.mock.calls[0][0]).toMatchObject({
        message: 'Promise never resolved before cacheEntryRemoved.',
      })
    })

    test(`${type}: try { await cacheDataLoaded } finally { await cacheEntryRemoved } (cacheDataLoaded never resolves)`, async () => {
      const extended = api.injectEndpoints({
        overrideExisting: true,
        endpoints: (build) => ({
          injected: build[type as 'mutation']<unknown, string>({
            query: () => '/error', // we will initiate only once and that one time will be an error -> cacheDataLoaded will never resolve
            async onCacheEntryAdded(
              arg,
              { dispatch, getState, cacheEntryRemoved, cacheDataLoaded },
            ) {
              onNewCacheEntry(arg)

              try {
                // this will wait until cacheEntryRemoved, then reject => nothing else in this try..catch block will execute
                const firstValue = await cacheDataLoaded
                gotFirstValue(firstValue)
              } catch (e) {
                onCatch(e)
              } finally {
                await cacheEntryRemoved
                onCleanup()
              }
            },
          }),
        }),
      })
      const promise = storeRef.store.dispatch(
        extended.endpoints.injected.initiate('arg'),
      )

      expect(onNewCacheEntry).toHaveBeenCalledWith('arg')

      await promise
      if (type === 'mutation') {
        promise.reset()
      } else {
        ;(promise as unknown as QueryActionCreatorResult<any>).unsubscribe()
      }
      await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)
      if (type === 'query') {
        await vi.advanceTimersByTimeAsync(59000)
        expect(onCleanup).not.toHaveBeenCalled()
        await vi.advanceTimersByTimeAsync(2000)
      }
      expect(onCleanup).toHaveBeenCalled()
      expect(gotFirstValue).not.toHaveBeenCalled()
      expect(onCatch.mock.calls[0][0]).toMatchObject({
        message: 'Promise never resolved before cacheEntryRemoved.',
      })
    })
  },
)

test(`query: getCacheEntry`, async () => {
  const snapshot = vi.fn()
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<unknown, string>({
        query: () => '/success',
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            getCacheEntry,
            cacheEntryRemoved,
            cacheDataLoaded,
          },
        ) {
          snapshot(getCacheEntry())
          gotFirstValue(await cacheDataLoaded)
          snapshot(getCacheEntry())
          await cacheEntryRemoved
          snapshot(getCacheEntry())
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )
  await promise
  promise.unsubscribe()

  await fakeTimerWaitFor(() => {
    expect(gotFirstValue).toHaveBeenCalled()
  })

  await vi.advanceTimersByTimeAsync(120000)

  expect(snapshot).toHaveBeenCalledTimes(3)
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
  expect(snapshot.mock.calls[2][0]).toMatchObject({
    isError: false,
    isLoading: false,
    isSuccess: false,
    isUninitialized: true,
    status: 'uninitialized',
  })
})

test(`mutation: getCacheEntry`, async () => {
  const snapshot = vi.fn()
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.mutation<unknown, string>({
        query: () => '/success',
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            getCacheEntry,
            cacheEntryRemoved,
            cacheDataLoaded,
          },
        ) {
          snapshot(getCacheEntry())
          gotFirstValue(await cacheDataLoaded)
          snapshot(getCacheEntry())
          await cacheEntryRemoved
          snapshot(getCacheEntry())
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )
  await fakeTimerWaitFor(() => {
    expect(gotFirstValue).toHaveBeenCalled()
  })

  promise.reset()
  await vi.advanceTimersByTimeAsync(DEFAULT_DELAY_MS)

  expect(snapshot).toHaveBeenCalledTimes(3)
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
  expect(snapshot.mock.calls[2][0]).toMatchObject({
    isError: false,
    isLoading: false,
    isSuccess: false,
    isUninitialized: true,
    status: 'uninitialized',
  })
})

test('query: updateCachedData', async () => {
  const trackCalls = vi.fn()

  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<{ value: string }, string>({
        query: () => '/success',
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            getCacheEntry,
            updateCachedData,
            cacheEntryRemoved,
            cacheDataLoaded,
          },
        ) {
          expect(getCacheEntry().data).toEqual(undefined)
          // calling `updateCachedData` when there is no data yet should not do anything
          updateCachedData((draft) => {
            draft.value = 'TEST'
            trackCalls()
          })
          expect(trackCalls).not.toHaveBeenCalled()
          expect(getCacheEntry().data).toEqual(undefined)

          gotFirstValue(await cacheDataLoaded)

          expect(getCacheEntry().data).toEqual({ value: 'success' })
          updateCachedData((draft) => {
            draft.value = 'TEST'
            trackCalls()
          })
          expect(trackCalls).toHaveBeenCalledOnce()
          expect(getCacheEntry().data).toEqual({ value: 'TEST' })

          await cacheEntryRemoved

          expect(getCacheEntry().data).toEqual(undefined)
          // calling `updateCachedData` when there is no data any more should not do anything
          updateCachedData((draft) => {
            draft.value = 'TEST2'
            trackCalls()
          })
          expect(trackCalls).toHaveBeenCalledOnce()
          expect(getCacheEntry().data).toEqual(undefined)

          onCleanup()
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.injected.initiate('arg'),
  )
  await promise
  promise.unsubscribe()

  await fakeTimerWaitFor(() => {
    expect(gotFirstValue).toHaveBeenCalled()
  })

  await vi.advanceTimersByTimeAsync(61000)

  await fakeTimerWaitFor(() => {
    expect(onCleanup).toHaveBeenCalled()
  })
})

test('updateCachedData - infinite query', async () => {
  const trackCalls = vi.fn()

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
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            getCacheEntry,
            updateCachedData,
            cacheEntryRemoved,
            cacheDataLoaded,
          },
        ) {
          expect(getCacheEntry().data).toEqual(undefined)
          // calling `updateCachedData` when there is no data yet should not do anything
          updateCachedData((draft) => {
            draft.pages = [{ value: 'TEST' }]
            draft.pageParams = [1]
            trackCalls()
          })
          expect(trackCalls).not.toHaveBeenCalled()
          expect(getCacheEntry().data).toEqual(undefined)

          gotFirstValue(await cacheDataLoaded)

          expect(getCacheEntry().data).toEqual({
            pages: [{ value: 'success' }],
            pageParams: [1],
          })
          updateCachedData((draft) => {
            draft.pages = [{ value: 'TEST' }]
            draft.pageParams = [1]
            trackCalls()
          })
          expect(trackCalls).toHaveBeenCalledOnce()
          expect(getCacheEntry().data).toEqual({
            pages: [{ value: 'TEST' }],
            pageParams: [1],
          })

          await cacheEntryRemoved

          expect(getCacheEntry().data).toEqual(undefined)
          // calling `updateCachedData` when there is no data any more should not do anything
          updateCachedData((draft) => {
            draft.pages = [{ value: 'TEST' }, { value: 'TEST2' }]
            draft.pageParams = [1, 2]
            trackCalls()
          })
          expect(trackCalls).toHaveBeenCalledOnce()
          expect(getCacheEntry().data).toEqual(undefined)

          onCleanup()
        },
      }),
    }),
  })
  const promise = storeRef.store.dispatch(
    extended.endpoints.infiniteInjected.initiate('arg'),
  )
  await promise
  promise.unsubscribe()

  await fakeTimerWaitFor(() => {
    expect(gotFirstValue).toHaveBeenCalled()
  })

  await vi.advanceTimersByTimeAsync(61000)

  await fakeTimerWaitFor(() => {
    expect(onCleanup).toHaveBeenCalled()
  })
})

test('dispatching further actions does not trigger another lifecycle', async () => {
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<unknown, void>({
        query: () => '/success',
        async onCacheEntryAdded() {
          onNewCacheEntry()
        },
      }),
    }),
  })
  await storeRef.store.dispatch(extended.endpoints.injected.initiate())
  expect(onNewCacheEntry).toHaveBeenCalledOnce()

  await storeRef.store.dispatch(extended.endpoints.injected.initiate())
  expect(onNewCacheEntry).toHaveBeenCalledOnce()

  await storeRef.store.dispatch(
    extended.endpoints.injected.initiate(undefined, { forceRefetch: true }),
  )
  expect(onNewCacheEntry).toHaveBeenCalledOnce()
})

test('dispatching a query initializer with `subscribe: false` does also start a lifecycle', async () => {
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.query<unknown, void>({
        query: () => '/success',
        async onCacheEntryAdded() {
          onNewCacheEntry()
        },
      }),
    }),
  })
  await storeRef.store.dispatch(
    extended.endpoints.injected.initiate(undefined, { subscribe: false }),
  )
  expect(onNewCacheEntry).toHaveBeenCalledOnce()

  // will not be called a second time though
  await storeRef.store.dispatch(extended.endpoints.injected.initiate(undefined))
  expect(onNewCacheEntry).toHaveBeenCalledOnce()
})

test('dispatching a mutation initializer with `track: false` does not start a lifecycle', async () => {
  const extended = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      injected: build.mutation<unknown, void>({
        query: () => '/success',
        async onCacheEntryAdded() {
          onNewCacheEntry()
        },
      }),
    }),
  })
  await storeRef.store.dispatch(
    extended.endpoints.injected.initiate(undefined, { track: false }),
  )
  expect(onNewCacheEntry).not.toHaveBeenCalled()

  await storeRef.store.dispatch(extended.endpoints.injected.initiate(undefined))
  expect(onNewCacheEntry).toHaveBeenCalledOnce()
})
