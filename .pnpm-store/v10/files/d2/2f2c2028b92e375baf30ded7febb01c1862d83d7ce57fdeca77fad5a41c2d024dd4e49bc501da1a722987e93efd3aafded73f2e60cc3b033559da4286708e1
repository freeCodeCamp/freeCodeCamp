import type { SerializedError } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ResultType {
  result: 'complex'
}

interface ArgType {
  foo: 'bar'
  count: 3
}

const baseQuery = fetchBaseQuery({ baseUrl: 'https://example.com' })
const api = createApi({
  baseQuery,
  endpoints(build) {
    return {
      querySuccess: build.query<ResultType, ArgType>({
        query: () => '/success',
      }),
      querySuccess2: build.query({ query: () => '/success' }),
      queryFail: build.query({ query: () => '/error' }),
      mutationSuccess: build.mutation({
        query: () => ({ url: '/success', method: 'POST' }),
      }),
      mutationSuccess2: build.mutation({
        query: () => ({ url: '/success', method: 'POST' }),
      }),
      mutationFail: build.mutation({
        query: () => ({ url: '/error', method: 'POST' }),
      }),
    }
  },
})

describe('type tests', () => {
  test('inferred types', () => {
    createSlice({
      name: 'auth',
      initialState: {},
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addMatcher(
            api.endpoints.querySuccess.matchPending,
            (state, action) => {
              expectTypeOf(action.payload).toBeUndefined()

              expectTypeOf(
                action.meta.arg.originalArgs,
              ).toEqualTypeOf<ArgType>()
            },
          )
          .addMatcher(
            api.endpoints.querySuccess.matchFulfilled,
            (state, action) => {
              expectTypeOf(action.payload).toEqualTypeOf<ResultType>()

              expectTypeOf(action.meta.fulfilledTimeStamp).toBeNumber()

              expectTypeOf(
                action.meta.arg.originalArgs,
              ).toEqualTypeOf<ArgType>()
            },
          )
          .addMatcher(
            api.endpoints.querySuccess.matchRejected,
            (state, action) => {
              expectTypeOf(action.error).toEqualTypeOf<SerializedError>()

              expectTypeOf(
                action.meta.arg.originalArgs,
              ).toEqualTypeOf<ArgType>()
            },
          )
      },
    })
  })
})
