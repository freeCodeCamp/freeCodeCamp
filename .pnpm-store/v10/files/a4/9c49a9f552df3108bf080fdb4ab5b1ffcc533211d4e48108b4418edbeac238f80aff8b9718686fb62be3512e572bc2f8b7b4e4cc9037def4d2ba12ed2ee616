import type { skipToken, InfiniteData } from '@reduxjs/toolkit/query/react'
import {
  createApi,
  fetchBaseQuery,
  QueryStatus,
} from '@reduxjs/toolkit/query/react'
import { setupApiStore } from '../../tests/utils/helpers'
import { createSlice } from '@internal/createSlice'

describe('Infinite queries', () => {
  test('Basic infinite query behavior', async () => {
    type Pokemon = {
      id: string
      name: string
    }

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
              expectTypeOf(lastPage).toEqualTypeOf<Pokemon[]>()

              expectTypeOf(allPages).toEqualTypeOf<Pokemon[][]>()

              expectTypeOf(lastPageParam).toBeNumber()

              expectTypeOf(allPageParams).toEqualTypeOf<number[]>()

              expectTypeOf(queryArg).toBeString()

              return lastPageParam + 1
            },
          },
          query({ pageParam, queryArg }) {
            expectTypeOf(pageParam).toBeNumber()
            expectTypeOf(queryArg).toBeString()

            return `https://example.com/listItems?page=${pageParam}`
          },
          async onCacheEntryAdded(arg, api) {
            const data = await api.cacheDataLoaded
            expectTypeOf(data.data).toEqualTypeOf<
              InfiniteData<Pokemon[], number>
            >()
          },
          async onQueryStarted(arg, api) {
            const data = await api.queryFulfilled
            expectTypeOf(data.data).toEqualTypeOf<
              InfiniteData<Pokemon[], number>
            >()
          },
          providesTags: (result) => {
            expectTypeOf(result).toEqualTypeOf<
              InfiniteData<Pokemon[], number> | undefined
            >()
            return []
          },
        }),
      }),
    })

    const storeRef = setupApiStore(pokemonApi, undefined, {
      withoutTestLifecycles: true,
    })

    expectTypeOf(pokemonApi.endpoints.getInfinitePokemon.initiate)
      .parameter(0)
      .toBeString()

    expectTypeOf(pokemonApi.useGetInfinitePokemonInfiniteQuery).toBeFunction()

    expectTypeOf<
      Parameters<
        typeof pokemonApi.endpoints.getInfinitePokemon.useInfiniteQuery
      >[0]
    >().toEqualTypeOf<string | typeof skipToken>()

    expectTypeOf(pokemonApi.endpoints.getInfinitePokemon.useInfiniteQueryState)
      .parameter(0)
      .toEqualTypeOf<string | typeof skipToken>()

    expectTypeOf(
      pokemonApi.endpoints.getInfinitePokemon.useInfiniteQuerySubscription,
    )
      .parameter(0)
      .toEqualTypeOf<string | typeof skipToken>()

    const slice = createSlice({
      name: 'pokemon',
      initialState: {} as { data: Pokemon[] },
      reducers: {},
      extraReducers: (builder) => {
        builder.addMatcher(
          pokemonApi.endpoints.getInfinitePokemon.matchFulfilled,
          (state, action) => {
            expectTypeOf(action.payload).toEqualTypeOf<
              InfiniteData<Pokemon[], number>
            >()
          },
        )
      },
    })

    const res = storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {}),
    )

    const firstResult = await res

    if (firstResult.status === QueryStatus.fulfilled) {
      expectTypeOf(firstResult.data.pages).toEqualTypeOf<Pokemon[][]>()
      expectTypeOf(firstResult.data.pageParams).toEqualTypeOf<number[]>()
    }

    storeRef.store.dispatch(
      pokemonApi.endpoints.getInfinitePokemon.initiate('fire', {
        direction: 'forward',
      }),
    )

    const useGetInfinitePokemonQuery =
      pokemonApi.endpoints.getInfinitePokemon.useInfiniteQuery

    expectTypeOf<
      Parameters<typeof useGetInfinitePokemonQuery>[0]
    >().toEqualTypeOf<string | typeof skipToken>()

    function PokemonList() {
      const {
        data,
        currentData,
        isFetching,
        isUninitialized,
        isSuccess,
        fetchNextPage,
      } = useGetInfinitePokemonQuery('a')

      expectTypeOf(data).toEqualTypeOf<
        InfiniteData<Pokemon[], number> | undefined
      >()

      if (isSuccess) {
        expectTypeOf(data.pages).toEqualTypeOf<Pokemon[][]>()
        expectTypeOf(data.pageParams).toEqualTypeOf<number[]>()
      }

      if (currentData) {
        expectTypeOf(currentData.pages).toEqualTypeOf<Pokemon[][]>()
        expectTypeOf(currentData.pageParams).toEqualTypeOf<number[]>()
      }

      const handleClick = async () => {
        const res = await fetchNextPage()

        if (res.status === QueryStatus.fulfilled) {
          expectTypeOf(res.data.pages).toEqualTypeOf<Pokemon[][]>()
          expectTypeOf(res.data.pageParams).toEqualTypeOf<number[]>()
        }
      }
    }
  })
})
