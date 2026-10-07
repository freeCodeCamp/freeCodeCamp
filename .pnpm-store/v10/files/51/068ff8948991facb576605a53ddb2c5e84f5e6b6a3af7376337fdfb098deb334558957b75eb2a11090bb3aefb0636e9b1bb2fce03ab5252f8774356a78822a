import { server } from '@internal/query/tests/mocks/server'
import type { InfiniteQueryActionCreatorResult } from '@reduxjs/toolkit/query/react'
import {
  QueryStatus,
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { HttpResponse, delay, http } from 'msw'
import { actionsReducer, setupApiStore } from '../../tests/utils/helpers'
import type { InfiniteQueryResultFlags } from '../core/buildSelectors'

describe('Infinite queries', () => {
  type Pokemon = {
    id: string
    name: string
  }

  type HitCounter = { page: number; hitCounter: number }
  let counters: Record<string, number> = {}
  let queryCounter = 0

  const pokemonApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
      getInfinitePokemon: build.infiniteQuery<Pokemon[], string, number>({
        infiniteQueryOptions: {
          initialPageParam: 0,
          getNextPageParam: (
            lastPage,
            allPages,
            lastPageParam,
            allPageParams,
            queryArg,
          ) => {
            expect(typeof queryArg).toBe('string')
            return lastPageParam + 1
          },
          getPreviousPageParam: (
            firstPage,
            allPages,
            firstPageParam,
            allPageParams,
            queryArg,
          ) => {
            expect(typeof queryArg).toBe('string')
            return firstPageParam > 0 ? firstPageParam - 1 : undefined
          },
        },
        query({ pageParam }) {
          return `https://example.com/listItems?page=${pageParam}`
        },
      }),
      getInfinitePokemonWithMax: build.infiniteQuery<Pokemon[], string, number>(
        {
          infiniteQueryOptions: {
            initialPageParam: 0,
            maxPages: 3,
            getNextPageParam: (
              lastPage,
              allPages,
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
            getPreviousPageParam: (
              firstPage,
              allPages,
              firstPageParam,
              allPageParams,
            ) => {
              return firstPageParam > 0 ? firstPageParam - 1 : undefined
            },
          },
          query({ pageParam }) {
            return `https://example.com/listItems?page=${pageParam}`
          },
        },
      ),
      counters: build.query<{ id: string; counter: number }, string>({
        queryFn: async (arg) => {
          if (!(arg in counters)) {
            counters[arg] = 0
          }
          counters[arg]++

          return { data: { id: arg, counter: counters[arg] } }
        },
      }),
    }),
  })

  function createCountersApi() {
    let hitCounter = 0

    const countersApi = createApi({
      baseQuery: fakeBaseQuery(),
      tagTypes: ['Counter'],
      endpoints: (build) => ({
        counters: build.infiniteQuery<HitCounter, string, number>({
          queryFn({ pageParam }) {
            hitCounter++

            return { data: { page: pageParam, hitCounter } }
          },
          infiniteQueryOptions: {
            initialPageParam: 0,
            getNextPageParam: (
              lastPage,
              allPages,
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
          },
          providesTags: ['Counter'],
        }),
        mutation: build.mutation<null, void>({
          queryFn: async () => {
            return { data: null }
          },
          invalidatesTags: ['Counter'],
        }),
      }),
    })

    return countersApi
  }

  let storeRef = setupApiStore(
    pokemonApi,
    { ...actionsReducer },
    {
      withoutTestLifecycles: true,
    },
  )

  beforeEach(() => {
    server.use(
      http.get('https://example.com/listItems', ({ request }) => {
        const url = new URL(request.url)
        const pageString = url.searchParams.get('page')
        const pageNum = parseInt(pageString || '0')
        queryCounter++

        const results: Pokemon[] = [
          { id: `${pageNum}`, name: `Pokemon ${pageNum}` },
        ]
        return HttpResponse.json(results)
      }),
    )

    storeRef = setupApiStore(
      pokemonApi,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    counters = {}

    queryCounter = 0
  })

  type InfiniteQueryResult = Awaited<InfiniteQueryActionCreatorResult<any>>

  const checkResultData = (
    result: InfiniteQueryResult,
    expectedValues: Pokemon[][],
  ) => {
    expect(result.status).toBe(QueryStatus.fulfilled)
    if (result.status === QueryStatus.fulfilled) {
      expect(result.data.pages).toEqual(expectedValues)
    }
  }

  const checkResultLength = (
    result: InfiniteQueryResult,
    expectedLength: number,
  ) => {
    expect(result.status).toBe(QueryStatus.fulfilled)
    if (result.status === QueryStatus.fulfilled) {
      expect(result.data.pages).toHaveLength(expectedLength)
    }
  }

  test('Basic infinite query behavior', async () => {
    const checkFlags = (
      value: unknown,
      expectedFlags: Partial<InfiniteQueryResultFlags>,
    ) => {
      const actualFlags: InfiniteQueryResultFlags = {
        hasNextPage: false,
        hasPreviousPage: false,
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
        isFetchNextPageError: false,
        isFetchPreviousPageError: false,
        ...expectedFlags,
      }

      expect(value).toMatchObject(actualFlags)
    }

    const checkEntryFlags = (
      arg: string,
      expectedFlags: Partial<InfiniteQueryResultFlags>,
    ) => {
      const selector = pokemonApi.endpoints.getInfinitePokemon.select(arg)
      const entry = selector(storeRef.store.getState())

      checkFlags(entry, expectedFlags)
    }

    const res1 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {}),
    )

    checkEntryFlags('fire', {})

    const entry1InitialLoad = await res1

    checkResultData(entry1InitialLoad, [[{ id: '0', name: 'Pokemon 0' }]])
    checkFlags(entry1InitialLoad, {
      hasNextPage: true,
    })

    const res2 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    checkEntryFlags('fire', {
      hasNextPage: true,
      isFetchingNextPage: true,
    })

    const entry1SecondPage = await res2

    checkResultData(entry1SecondPage, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
    ])
    checkFlags(entry1SecondPage, {
      hasNextPage: true,
    })

    const res3 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'backward',
      }),
    )

    checkEntryFlags('fire', {
      hasNextPage: true,
      isFetchingPreviousPage: true,
    })

    const entry1PrevPageMissing = await res3

    checkResultData(entry1PrevPageMissing, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
    ])
    checkFlags(entry1PrevPageMissing, {
      hasNextPage: true,
    })

    const res4 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('water', {
        initialPageParam: 3,
      }),
    )

    checkEntryFlags('water', {})

    const entry2InitialLoad = await res4

    checkResultData(entry2InitialLoad, [[{ id: '3', name: 'Pokemon 3' }]])
    checkFlags(entry2InitialLoad, {
      hasNextPage: true,
      hasPreviousPage: true,
    })

    const res5 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('water', {
        direction: 'forward',
      }),
    )

    checkEntryFlags('water', {
      hasNextPage: true,
      hasPreviousPage: true,
      isFetchingNextPage: true,
    })

    const entry2NextPage = await res5

    checkResultData(entry2NextPage, [
      [{ id: '3', name: 'Pokemon 3' }],
      [{ id: '4', name: 'Pokemon 4' }],
    ])
    checkFlags(entry2NextPage, {
      hasNextPage: true,
      hasPreviousPage: true,
    })

    const res6 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('water', {
        direction: 'backward',
      }),
    )

    checkEntryFlags('water', {
      hasNextPage: true,
      hasPreviousPage: true,
      isFetchingPreviousPage: true,
    })

    const entry2PrevPage = await res6

    checkResultData(entry2PrevPage, [
      [{ id: '2', name: 'Pokemon 2' }],
      [{ id: '3', name: 'Pokemon 3' }],
      [{ id: '4', name: 'Pokemon 4' }],
    ])
    checkFlags(entry2PrevPage, {
      hasNextPage: true,
      hasPreviousPage: true,
    })
  })

  test('does not have a page limit without maxPages', async () => {
    for (let i = 1; i <= 10; i++) {
      const res = await storeRef.store.dispatch(
        pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
          direction: 'forward',
        }),
      )

      checkResultLength(res, i)
    }
  })

  test('applies a page limit with maxPages', async () => {
    for (let i = 1; i <= 10; i++) {
      const res = await storeRef.store.dispatch(
        pokemonApi.endpoints.getInfinitePokemonWithMax.initiate('fire', {
          direction: 'forward',
        }),
      )

      checkResultLength(res, Math.min(i, 3))
    }

    // Should now have entries 7, 8, 9 after the loop

    const res = await storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemonWithMax.initiate('fire', {
        direction: 'backward',
      }),
    )

    checkResultData(res, [
      [{ id: '6', name: 'Pokemon 6' }],
      [{ id: '7', name: 'Pokemon 7' }],
      [{ id: '8', name: 'Pokemon 8' }],
    ])
  })

  test('validates maxPages during createApi call', async () => {
    vi.stubEnv('NODE_ENV', 'development')

    const createApiWithMaxPages = (
      maxPages: number,
      getPreviousPageParam: (() => number) | undefined,
    ) => {
      createApi({
        baseQuery: fakeBaseQuery(),
        endpoints: (build) => ({
          getInfinitePokemon: build.infiniteQuery<Pokemon[], string, number>({
            query(pageParam) {
              return `https://example.com/listItems?page=${pageParam}`
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              maxPages,
              getNextPageParam: () => 1,
              getPreviousPageParam,
            },
          }),
        }),
      })
    }

    expect(() => createApiWithMaxPages(0, () => 0)).toThrowError(
      `maxPages for endpoint 'getInfinitePokemon' must be a number greater than 0`,
    )

    expect(() => createApiWithMaxPages(1, undefined)).toThrowError(
      `getPreviousPageParam for endpoint 'getInfinitePokemon' must be a function if maxPages is used`,
    )
  })

  test('refetches all existing pages', async () => {
    const checkResultData = (
      result: InfiniteQueryResult,
      expectedValues: HitCounter[],
    ) => {
      expect(result.status).toBe(QueryStatus.fulfilled)
      if (result.status === QueryStatus.fulfilled) {
        expect(result.data.pages).toEqual(expectedValues)
      }
    }

    const countersApi = createCountersApi()

    const storeRef = setupApiStore(
      countersApi,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    await storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        initialPageParam: 3,
      }),
    )

    await storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        direction: 'forward',
      }),
    )

    const thirdPromise = storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        direction: 'forward',
      }),
    )

    const thirdRes = await thirdPromise

    checkResultData(thirdRes, [
      { page: 3, hitCounter: 1 },
      { page: 4, hitCounter: 2 },
      { page: 5, hitCounter: 3 },
    ])

    const fourthRes = await thirdPromise.refetch()

    checkResultData(fourthRes, [
      { page: 3, hitCounter: 4 },
      { page: 4, hitCounter: 5 },
      { page: 5, hitCounter: 6 },
    ])
  })

  test('Refetches on invalidation', async () => {
    const checkResultData = (
      result: InfiniteQueryResult,
      expectedValues: HitCounter[],
    ) => {
      expect(result.status).toBe(QueryStatus.fulfilled)
      if (result.status === QueryStatus.fulfilled) {
        expect(result.data.pages).toEqual(expectedValues)
      }
    }

    const countersApi = createCountersApi()

    const storeRef = setupApiStore(
      countersApi,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    await storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        initialPageParam: 3,
      }),
    )

    await storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        direction: 'forward',
      }),
    )

    const thirdPromise = storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        direction: 'forward',
      }),
    )

    const thirdRes = await thirdPromise

    checkResultData(thirdRes, [
      { page: 3, hitCounter: 1 },
      { page: 4, hitCounter: 2 },
      { page: 5, hitCounter: 3 },
    ])

    await storeRef.store.dispatch(countersApi.endpoints.mutation.initiate())

    let entry = countersApi.endpoints.counters.select('item')(
      storeRef.store.getState(),
    )
    const promise = storeRef.store.dispatch(
      countersApi.util.getRunningQueryThunk('counters', 'item'),
    )
    const promises = storeRef.store.dispatch(
      countersApi.util.getRunningQueriesThunk(),
    )
    expect(entry).toMatchObject({
      status: 'pending',
    })

    expect(promise).toBeInstanceOf(Promise)

    expect(promises).toEqual([promise])

    const finalRes = await promise

    checkResultData(finalRes as any, [
      { page: 3, hitCounter: 4 },
      { page: 4, hitCounter: 5 },
      { page: 5, hitCounter: 6 },
    ])
  })

  test('Refetches on polling', async () => {
    const countersApi = createCountersApi()
    const checkResultData = (
      result: InfiniteQueryResult,
      expectedValues: HitCounter[],
    ) => {
      expect(result.status).toBe(QueryStatus.fulfilled)
      if (result.status === QueryStatus.fulfilled) {
        expect(result.data.pages).toEqual(expectedValues)
      }
    }

    const storeRef = setupApiStore(
      countersApi,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    await storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        initialPageParam: 3,
      }),
    )

    await storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        direction: 'forward',
      }),
    )

    const thirdPromise = storeRef.store.dispatch(
      countersApi.endpoints.counters.initiate('item', {
        direction: 'forward',
      }),
    )

    const thirdRes = await thirdPromise

    checkResultData(thirdRes, [
      { page: 3, hitCounter: 1 },
      { page: 4, hitCounter: 2 },
      { page: 5, hitCounter: 3 },
    ])

    thirdPromise.updateSubscriptionOptions({
      pollingInterval: 50,
    })

    await delay(25)

    let entry = countersApi.endpoints.counters.select('item')(
      storeRef.store.getState(),
    )

    checkResultData(thirdRes, [
      { page: 3, hitCounter: 1 },
      { page: 4, hitCounter: 2 },
      { page: 5, hitCounter: 3 },
    ])

    await delay(50)

    entry = countersApi.endpoints.counters.select('item')(
      storeRef.store.getState(),
    )

    checkResultData(entry as any, [
      { page: 3, hitCounter: 4 },
      { page: 4, hitCounter: 5 },
      { page: 5, hitCounter: 6 },
    ])
  })

  test('Handles multiple next page fetches at once', async () => {
    const initialEntry = await storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {}),
    )

    checkResultData(initialEntry, [[{ id: '0', name: 'Pokemon 0' }]])

    expect(queryCounter).toBe(1)

    const promise1 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    expect(queryCounter).toBe(1)

    const promise2 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    const entry1 = await promise1
    const entry2 = await promise2

    // The second thunk should have bailed out because the entry was now
    // pending, so we should only have sent one request.
    expect(queryCounter).toBe(2)

    expect(entry1).toEqual(entry2)

    checkResultData(entry1, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
    ])

    expect(queryCounter).toBe(2)

    const promise3 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    expect(queryCounter).toBe(2)

    // We can abort an existing promise, but due to timing issues,
    // we have to await the promise first before triggering the next request.
    promise3.abort()
    const entry3 = await promise3

    const promise4 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    const entry4 = await promise4

    expect(queryCounter).toBe(4)

    checkResultData(entry4, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
      [{ id: '2', name: 'Pokemon 2' }],
    ])
  })

  test('can fetch pages with refetchOnMountOrArgChange active', async () => {
    const pokemonApiWithRefetch = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
      endpoints: (build) => ({
        getInfinitePokemon: build.infiniteQuery<Pokemon[], string, number>({
          infiniteQueryOptions: {
            initialPageParam: 0,
            getNextPageParam: (
              lastPage,
              allPages,
              // Page param type should be `number`
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
            getPreviousPageParam: (
              firstPage,
              allPages,
              firstPageParam,
              allPageParams,
            ) => {
              return firstPageParam > 0 ? firstPageParam - 1 : undefined
            },
          },
          query({ pageParam }) {
            return `https://example.com/listItems?page=${pageParam}`
          },
        }),
      }),
      refetchOnMountOrArgChange: true,
    })

    const storeRef = setupApiStore(
      pokemonApiWithRefetch,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    const res1 = storeRef.store.dispatch(
      pokemonApiWithRefetch.endpoints.getInfinitePokemon.initiate('fire', {}),
    )

    const entry1InitialLoad = await res1
    checkResultData(entry1InitialLoad, [[{ id: '0', name: 'Pokemon 0' }]])

    const res2 = storeRef.store.dispatch(
      pokemonApiWithRefetch.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    const entry1SecondPage = await res2
    checkResultData(entry1SecondPage, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
    ])

    expect(queryCounter).toBe(2)

    const entry2InitialLoad = await storeRef.store.dispatch(
      pokemonApiWithRefetch.endpoints.getInfinitePokemon.initiate('water', {}),
    )

    checkResultData(entry2InitialLoad, [[{ id: '0', name: 'Pokemon 0' }]])

    expect(queryCounter).toBe(3)

    const entry2SecondPage = await storeRef.store.dispatch(
      pokemonApiWithRefetch.endpoints.getInfinitePokemon.initiate('water', {
        direction: 'forward',
      }),
    )
    checkResultData(entry2SecondPage, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
    ])

    expect(queryCounter).toBe(4)

    // Should now be able to switch back to the first query.
    // The hooks dispatch on arg change without a direction.
    // That should trigger a refetch of the first query, meaning two requests.
    // It should also _replace_ the existing results, rather than appending
    // duplicate entries ([0, 1, 0, 1])
    const entry1Refetched = await storeRef.store.dispatch(
      pokemonApiWithRefetch.endpoints.getInfinitePokemon.initiate('fire', {}),
    )

    checkResultData(entry1Refetched, [
      [{ id: '0', name: 'Pokemon 0' }],
      [{ id: '1', name: 'Pokemon 1' }],
    ])

    expect(queryCounter).toBe(6)
  })

  test('Works with cache manipulation utils', async () => {
    const res1 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {}),
    )

    const entry1InitialLoad = await res1
    checkResultData(entry1InitialLoad, [[{ id: '0', name: 'Pokemon 0' }]])

    storeRef.store.dispatch(
      pokemonApi.util.updateQueryData('getInfinitePokemon', 'fire', (draft) => {
        draft.pages.push([{ id: '1', name: 'Pokemon 1' }])
        draft.pageParams.push(1)
      }),
    )

    const selectFire = pokemonApi.endpoints.getInfinitePokemon.select('fire')
    const entry1Updated = selectFire(storeRef.store.getState())

    expect(entry1Updated.data).toEqual({
      pages: [
        [{ id: '0', name: 'Pokemon 0' }],
        [{ id: '1', name: 'Pokemon 1' }],
      ],
      pageParams: [0, 1],
    })

    const res2 = storeRef.store.dispatch(
      pokemonApi.util.upsertQueryData('getInfinitePokemon', 'water', {
        pages: [[{ id: '2', name: 'Pokemon 2' }]],
        pageParams: [2],
      }),
    )

    const entry2InitialLoad = await res2
    const selectWater = pokemonApi.endpoints.getInfinitePokemon.select('water')
    const entry2Updated = selectWater(storeRef.store.getState())

    expect(entry2Updated.data).toEqual({
      pages: [[{ id: '2', name: 'Pokemon 2' }]],
      pageParams: [2],
    })

    storeRef.store.dispatch(
      pokemonApi.util.upsertQueryEntries([
        {
          endpointName: 'getInfinitePokemon',
          arg: 'air',
          value: {
            pages: [[{ id: '3', name: 'Pokemon 3' }]],
            pageParams: [3],
          },
        },
      ]),
    )

    const selectAir = pokemonApi.endpoints.getInfinitePokemon.select('air')
    const entry3Initial = selectAir(storeRef.store.getState())

    expect(entry3Initial.data).toEqual({
      pages: [[{ id: '3', name: 'Pokemon 3' }]],
      pageParams: [3],
    })

    await storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('air', {
        direction: 'forward',
      }),
    )

    const entry3Updated = selectAir(storeRef.store.getState())

    expect(entry3Updated.data).toEqual({
      pages: [
        [{ id: '3', name: 'Pokemon 3' }],
        [{ id: '4', name: 'Pokemon 4' }],
      ],
      pageParams: [3, 4],
    })
  })

  test('Cache lifecycle methods are called', async () => {
    const cacheEntryAddedCallback = vi.fn()
    const queryStartedCallback = vi.fn()

    const pokemonApi = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
      endpoints: (build) => ({
        getInfinitePokemonWithLifecycles: build.infiniteQuery<
          Pokemon[],
          string,
          number
        >({
          infiniteQueryOptions: {
            initialPageParam: 0,
            getNextPageParam: (
              lastPage,
              allPages,
              // Page param type should be `number`
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
            getPreviousPageParam: (
              firstPage,
              allPages,
              firstPageParam,
              allPageParams,
            ) => {
              return firstPageParam > 0 ? firstPageParam - 1 : undefined
            },
          },
          query({ pageParam }) {
            return `https://example.com/listItems?page=${pageParam}`
          },
          async onCacheEntryAdded(arg, api) {
            const data = await api.cacheDataLoaded
            cacheEntryAddedCallback(arg, data)
          },
          async onQueryStarted(arg, api) {
            const data = await api.queryFulfilled
            queryStartedCallback(arg, data)
          },
        }),
      }),
    })

    const storeRef = setupApiStore(
      pokemonApi,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    const res1 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemonWithLifecycles.initiate(
        'fire',
        {},
      ),
    )

    const entry1InitialLoad = await res1
    checkResultData(entry1InitialLoad, [[{ id: '0', name: 'Pokemon 0' }]])

    expect(cacheEntryAddedCallback).toHaveBeenCalledWith('fire', {
      data: {
        pages: [[{ id: '0', name: 'Pokemon 0' }]],
        pageParams: [0],
      },
      meta: expect.objectContaining({
        request: expect.anything(),
        response: expect.anything(),
      }),
    })

    expect(queryStartedCallback).toHaveBeenCalledWith('fire', {
      data: {
        pages: [[{ id: '0', name: 'Pokemon 0' }]],
        pageParams: [0],
      },
      meta: expect.objectContaining({
        request: expect.anything(),
        response: expect.anything(),
      }),
    })
  })

  test('Can use transformResponse', async () => {
    type PokemonPage = { items: Pokemon[]; page: number }
    const pokemonApi = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
      endpoints: (build) => ({
        getInfinitePokemonWithTransform: build.infiniteQuery<
          PokemonPage,
          string,
          number
        >({
          infiniteQueryOptions: {
            initialPageParam: 0,
            getNextPageParam: (
              lastPage,
              allPages,
              // Page param type should be `number`
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
          },
          query({ pageParam }) {
            return `https://example.com/listItems?page=${pageParam}`
          },
          transformResponse(baseQueryReturnValue: Pokemon[], meta, arg) {
            expect(Array.isArray(baseQueryReturnValue)).toBe(true)
            return {
              items: baseQueryReturnValue,
              page: arg.pageParam,
            }
          },
        }),
      }),
    })

    const storeRef = setupApiStore(
      pokemonApi,
      { ...actionsReducer },
      {
        withoutTestLifecycles: true,
      },
    )

    const checkResultData = (
      result: InfiniteQueryResult,
      expectedValues: PokemonPage[],
    ) => {
      expect(result.status).toBe(QueryStatus.fulfilled)
      if (result.status === QueryStatus.fulfilled) {
        expect(result.data.pages).toEqual(expectedValues)
      }
    }

    const res1 = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemonWithTransform.initiate('fire', {}),
    )

    const entry1InitialLoad = await res1
    checkResultData(entry1InitialLoad, [
      { items: [{ id: '0', name: 'Pokemon 0' }], page: 0 },
    ])

    const entry1Updated = await storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemonWithTransform.initiate('fire', {
        direction: 'forward',
      }),
    )

    checkResultData(entry1Updated, [
      { items: [{ id: '0', name: 'Pokemon 0' }], page: 0 },
      { items: [{ id: '1', name: 'Pokemon 1' }], page: 1 },
    ])
  })

  describe('refetchCachedPages option', () => {
    test('refetches all pages by default (refetchCachedPages: true)', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        tagTypes: ['Counter'],
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
            },
            providesTags: ['Counter'],
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 3 pages
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdPromise = storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdRes = await thirdPromise

      // Should have 3 pages with hitCounters 1, 2, 3
      expect(thirdRes.data!.pages).toEqual([
        { page: 0, hitCounter: 1 },
        { page: 1, hitCounter: 2 },
        { page: 2, hitCounter: 3 },
      ])

      // Refetch without specifying refetchCachedPages
      const refetchRes = await thirdPromise.refetch()

      // All 3 pages should be refetched (hitCounters 4, 5, 6)
      expect(refetchRes.data!.pages).toEqual([
        { page: 0, hitCounter: 4 },
        { page: 1, hitCounter: 5 },
        { page: 2, hitCounter: 6 },
      ])
      expect(refetchRes.data!.pages).toHaveLength(3)
    })

    test('refetches all pages when refetchCachedPages is explicitly true', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        tagTypes: ['Counter'],
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
              refetchCachedPages: true, // Explicit true
            },
            providesTags: ['Counter'],
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 3 pages
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdPromise = storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdRes = await thirdPromise

      expect(thirdRes.data!.pages).toHaveLength(3)

      // Refetch
      const refetchRes = await thirdPromise.refetch()

      // All 3 pages should be refetched
      expect(refetchRes.data!.pages).toHaveLength(3)
      expect(refetchRes.data!.pages[0].hitCounter).toBeGreaterThan(
        thirdRes.data!.pages[0].hitCounter,
      )
    })

    test('refetches only first page when refetchCachedPages is false', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        tagTypes: ['Counter'],
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
              refetchCachedPages: false, // Only refetch first page
            },
            providesTags: ['Counter'],
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 3 pages
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdPromise = storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdRes = await thirdPromise

      // Should have 3 pages with hitCounters 1, 2, 3
      expect(thirdRes.data!.pages).toEqual([
        { page: 0, hitCounter: 1 },
        { page: 1, hitCounter: 2 },
        { page: 2, hitCounter: 3 },
      ])

      // Refetch with refetchCachedPages: false
      const refetchRes = await thirdPromise.refetch()

      // Only first page should be refetched, cache reset to 1 page
      expect(refetchRes.data!.pages).toEqual([{ page: 0, hitCounter: 4 }])
      expect(refetchRes.data!.pageParams).toEqual([0])
    })

    test('refetches only first page on tag invalidation when refetchCachedPages is false', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        tagTypes: ['Counter'],
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
              refetchCachedPages: false,
            },
            providesTags: ['Counter'],
          }),
          mutation: build.mutation<null, void>({
            queryFn: async () => ({ data: null }),
            invalidatesTags: ['Counter'],
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 3 pages
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      // Verify we have 3 pages
      let entry = countersApi.endpoints.counters.select('item')(
        storeRef.store.getState(),
      )
      expect(entry.data?.pages).toHaveLength(3)

      // Trigger mutation to invalidate tags
      await storeRef.store.dispatch(countersApi.endpoints.mutation.initiate())

      // Wait for refetch to complete
      const promise = storeRef.store.dispatch(
        countersApi.util.getRunningQueryThunk('counters', 'item'),
      )
      const finalRes = await promise

      // Only first page should be refetched
      expect((finalRes as any).data.pages).toEqual([{ page: 0, hitCounter: 4 }])
    })

    test('refetches only first page during polling when refetchCachedPages is false', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
              refetchCachedPages: false,
            },
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 3 pages
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdPromise = storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      await thirdPromise

      // Enable polling
      thirdPromise.updateSubscriptionOptions({
        pollingInterval: 50,
      })

      // Wait for first poll
      await delay(75)

      const entry = countersApi.endpoints.counters.select('item')(
        storeRef.store.getState(),
      )

      // Should only have 1 page after poll
      expect(entry.data?.pages).toEqual([{ page: 0, hitCounter: 4 }])
    })

    test('refetchCachedPages: false works with maxPages', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              maxPages: 3,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
              getPreviousPageParam: (
                firstPage,
                allPages,
                firstPageParam,
                allPageParams,
              ) => (firstPageParam > 0 ? firstPageParam - 1 : undefined),
              refetchCachedPages: false,
            },
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 5 pages (but maxPages will limit to 3)
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      for (let i = 0; i < 4; i++) {
        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )
      }

      let entry = countersApi.endpoints.counters.select('item')(
        storeRef.store.getState(),
      )

      // Should have 3 pages due to maxPages
      expect(entry.data?.pages).toHaveLength(3)

      // Refetch
      const refetchPromise = storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          forceRefetch: true,
        }),
      )

      const refetchRes = await refetchPromise

      // Should only have 1 page after refetch (refetchCachedPages: false)
      // Note: With maxPages: 3, the cache kept pages 2, 3, 4
      // So refetch starts from the first cached page param, which is 2
      expect(refetchRes.data!.pages).toHaveLength(1)
      expect(refetchRes.data!.pages[0].page).toBe(2)
    })

    test('can fetch next page after refetch with refetchCachedPages: false', async () => {
      let hitCounter = 0

      const countersApi = createApi({
        baseQuery: fakeBaseQuery(),
        endpoints: (build) => ({
          counters: build.infiniteQuery<HitCounter, string, number>({
            queryFn({ pageParam }) {
              hitCounter++
              return { data: { page: pageParam, hitCounter } }
            },
            infiniteQueryOptions: {
              initialPageParam: 0,
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => lastPageParam + 1,
              refetchCachedPages: false,
            },
          }),
        }),
      })

      const storeRef = setupApiStore(
        countersApi,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      // Load 3 pages
      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          initialPageParam: 0,
        }),
      )

      await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      const thirdPromise = storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      await thirdPromise

      // Refetch (resets to 1 page)
      await thirdPromise.refetch()

      let entry = countersApi.endpoints.counters.select('item')(
        storeRef.store.getState(),
      )
      expect(entry.data?.pages).toHaveLength(1)

      // Fetch next page
      const nextPageRes = await storeRef.store.dispatch(
        countersApi.endpoints.counters.initiate('item', {
          direction: 'forward',
        }),
      )

      // Should now have 2 pages
      expect(nextPageRes.data!.pages).toEqual([
        { page: 0, hitCounter: 4 },
        { page: 1, hitCounter: 5 },
      ])
    })

    describe('per-call refetchCachedPages override', () => {
      test('per-call false overrides endpoint true', async () => {
        let hitCounter = 0

        const countersApi = createApi({
          baseQuery: fakeBaseQuery(),
          endpoints: (build) => ({
            counters: build.infiniteQuery<HitCounter, string, number>({
              queryFn({ pageParam }) {
                hitCounter++
                return { data: { page: pageParam, hitCounter } }
              },
              infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (
                  lastPage,
                  allPages,
                  lastPageParam,
                  allPageParams,
                ) => lastPageParam + 1,
                refetchCachedPages: true, // Endpoint default: refetch all
              },
            }),
          }),
        })

        const storeRef = setupApiStore(
          countersApi,
          { ...actionsReducer },
          {
            withoutTestLifecycles: true,
          },
        )

        // Load 3 pages
        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            initialPageParam: 0,
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        // Should have 3 pages with hitCounters 1, 2, 3
        let entry = countersApi.endpoints.counters.select('item')(
          storeRef.store.getState(),
        )
        expect(entry.data?.pages).toEqual([
          { page: 0, hitCounter: 1 },
          { page: 1, hitCounter: 2 },
          { page: 2, hitCounter: 3 },
        ])

        // Refetch with per-call override: false
        const refetchRes = await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            forceRefetch: true,
            refetchCachedPages: false, // Override to false
          }),
        )

        // Only first page should be refetched (hitCounter 4)
        expect(refetchRes.data!.pages).toEqual([{ page: 0, hitCounter: 4 }])
        expect(refetchRes.data!.pageParams).toEqual([0])
      })

      test('per-call true overrides endpoint false', async () => {
        let hitCounter = 0

        const countersApi = createApi({
          baseQuery: fakeBaseQuery(),
          endpoints: (build) => ({
            counters: build.infiniteQuery<HitCounter, string, number>({
              queryFn({ pageParam }) {
                hitCounter++
                return { data: { page: pageParam, hitCounter } }
              },
              infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (
                  lastPage,
                  allPages,
                  lastPageParam,
                  allPageParams,
                ) => lastPageParam + 1,
                refetchCachedPages: false, // Endpoint default: only first page
              },
            }),
          }),
        })

        const storeRef = setupApiStore(
          countersApi,
          { ...actionsReducer },
          {
            withoutTestLifecycles: true,
          },
        )

        // Load 3 pages
        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            initialPageParam: 0,
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        // Should have 3 pages
        let entry = countersApi.endpoints.counters.select('item')(
          storeRef.store.getState(),
        )
        expect(entry.data?.pages).toHaveLength(3)

        // Refetch with per-call override: true
        const refetchRes = await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            forceRefetch: true,
            refetchCachedPages: true, // Override to true
          }),
        )

        // All 3 pages should be refetched
        expect(refetchRes.data!.pages).toEqual([
          { page: 0, hitCounter: 4 },
          { page: 1, hitCounter: 5 },
          { page: 2, hitCounter: 6 },
        ])
        expect(refetchRes.data!.pages).toHaveLength(3)
      })

      test('uses endpoint config when no per-call override', async () => {
        let hitCounter = 0

        const countersApi = createApi({
          baseQuery: fakeBaseQuery(),
          endpoints: (build) => ({
            counters: build.infiniteQuery<HitCounter, string, number>({
              queryFn({ pageParam }) {
                hitCounter++
                return { data: { page: pageParam, hitCounter } }
              },
              infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (
                  lastPage,
                  allPages,
                  lastPageParam,
                  allPageParams,
                ) => lastPageParam + 1,
                refetchCachedPages: false, // Endpoint config
              },
            }),
          }),
        })

        const storeRef = setupApiStore(
          countersApi,
          { ...actionsReducer },
          {
            withoutTestLifecycles: true,
          },
        )

        // Load 3 pages
        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            initialPageParam: 0,
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        // Refetch without per-call override
        const refetchRes = await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            forceRefetch: true,
            // No refetchCachedPages specified
          }),
        )

        // Should use endpoint config (false) - only first page
        expect(refetchRes.data!.pages).toEqual([{ page: 0, hitCounter: 4 }])
      })

      test('defaults to true when no config at any level', async () => {
        let hitCounter = 0

        const countersApi = createApi({
          baseQuery: fakeBaseQuery(),
          endpoints: (build) => ({
            counters: build.infiniteQuery<HitCounter, string, number>({
              queryFn({ pageParam }) {
                hitCounter++
                return { data: { page: pageParam, hitCounter } }
              },
              infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (
                  lastPage,
                  allPages,
                  lastPageParam,
                  allPageParams,
                ) => lastPageParam + 1,
                // No refetchCachedPages specified
              },
            }),
          }),
        })

        const storeRef = setupApiStore(
          countersApi,
          { ...actionsReducer },
          {
            withoutTestLifecycles: true,
          },
        )

        // Load 3 pages
        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            initialPageParam: 0,
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            direction: 'forward',
          }),
        )

        // Refetch without any config
        const refetchRes = await storeRef.store.dispatch(
          countersApi.endpoints.counters.initiate('item', {
            forceRefetch: true,
          }),
        )

        // Should default to true - refetch all pages
        expect(refetchRes.data!.pages).toEqual([
          { page: 0, hitCounter: 4 },
          { page: 1, hitCounter: 5 },
          { page: 2, hitCounter: 6 },
        ])
      })
    })
  })
})
