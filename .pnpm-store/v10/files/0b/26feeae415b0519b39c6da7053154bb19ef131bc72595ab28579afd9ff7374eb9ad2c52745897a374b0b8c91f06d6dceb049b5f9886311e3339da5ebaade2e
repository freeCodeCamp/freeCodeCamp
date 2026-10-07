import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query'

describe('type tests', () => {
  test('BaseQuery meta types propagate to endpoint callbacks', () => {
    createApi({
      baseQuery: fetchBaseQuery(),
      endpoints: (build) => ({
        getDummy: build.query<null, undefined>({
          query: () => 'dummy',
          onCacheEntryAdded: async (arg, { cacheDataLoaded }) => {
            const { meta } = await cacheDataLoaded
            const { request, response } = meta! // Expect request and response to be there
          },
        }),
      }),
    })

    const baseQuery = retry(fetchBaseQuery()) // Even when wrapped with retry
    createApi({
      baseQuery,
      endpoints: (build) => ({
        getDummy: build.query<null, undefined>({
          query: () => 'dummy',
          onCacheEntryAdded: async (arg, { cacheDataLoaded }) => {
            const { meta } = await cacheDataLoaded
            const { request, response } = meta! // Expect request and response to be there
          },
        }),
      }),
    })
  })
})
