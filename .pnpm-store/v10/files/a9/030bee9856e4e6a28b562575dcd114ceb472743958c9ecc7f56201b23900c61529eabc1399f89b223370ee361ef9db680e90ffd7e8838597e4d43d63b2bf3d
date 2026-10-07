import type { FetchBaseQueryMeta } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: () => ({}),
})

describe('type tests', () => {
  test(`mutation: await cacheDataLoaded, await cacheEntryRemoved (success)`, () => {
    const extended = api.injectEndpoints({
      overrideExisting: true,
      endpoints: (build) => ({
        injected: build.mutation<number, string>({
          query: () => '/success',
          async onCacheEntryAdded(
            arg,
            { dispatch, getState, cacheEntryRemoved, cacheDataLoaded },
          ) {
            const firstValue = await cacheDataLoaded

            expectTypeOf(firstValue).toMatchTypeOf<{
              data: number
              meta?: FetchBaseQueryMeta
            }>()
          },
        }),
      }),
    })
  })
})
