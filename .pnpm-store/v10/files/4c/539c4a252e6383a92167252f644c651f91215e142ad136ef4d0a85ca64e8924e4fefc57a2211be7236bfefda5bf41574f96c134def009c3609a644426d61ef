import { noop } from '@internal/listenerMiddleware/utils'
import { configureStore } from '@reduxjs/toolkit'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query'

type CustomErrorType = { type: 'Custom' }

const api = createApi({
  baseQuery: fakeBaseQuery<CustomErrorType>(),
  endpoints: (build) => ({
    withQuery: build.query<string, string>({
      // @ts-expect-error
      query(arg: string) {
        return `resultFrom(${arg})`
      },
      // @ts-expect-error
      transformResponse(response) {
        return response.wrappedByBaseQuery
      },
    }),
    withQueryFn: build.query<string, string>({
      queryFn(arg: string) {
        return { data: `resultFrom(${arg})` }
      },
    }),
    withInvalidDataQueryFn: build.query<string, string>({
      // @ts-expect-error
      queryFn(arg: string) {
        return { data: 5 }
      },
    }),
    withErrorQueryFn: build.query<string, string>({
      queryFn(arg: string) {
        return { error: { type: 'Custom' } }
      },
    }),
    withInvalidErrorQueryFn: build.query<string, string>({
      // @ts-expect-error
      queryFn(arg: string) {
        return { error: 5 }
      },
    }),
    withAsyncQueryFn: build.query<string, string>({
      async queryFn(arg: string) {
        return { data: `resultFrom(${arg})` }
      },
    }),
    withInvalidDataAsyncQueryFn: build.query<string, string>({
      // @ts-expect-error
      async queryFn(arg: string) {
        return { data: 5 }
      },
    }),
    withAsyncErrorQueryFn: build.query<string, string>({
      async queryFn(arg: string) {
        return { error: { type: 'Custom' } }
      },
    }),
    withInvalidAsyncErrorQueryFn: build.query<string, string>({
      // @ts-expect-error
      async queryFn(arg: string) {
        return { error: 5 }
      },
    }),

    mutationWithQueryFn: build.mutation<string, string>({
      queryFn(arg: string) {
        return { data: `resultFrom(${arg})` }
      },
    }),
    mutationWithInvalidDataQueryFn: build.mutation<string, string>({
      // @ts-expect-error
      queryFn(arg: string) {
        return { data: 5 }
      },
    }),
    mutationWithErrorQueryFn: build.mutation<string, string>({
      queryFn(arg: string) {
        return { error: { type: 'Custom' } }
      },
    }),
    mutationWithInvalidErrorQueryFn: build.mutation<string, string>({
      // @ts-expect-error
      queryFn(arg: string) {
        return { error: 5 }
      },
    }),

    mutationWithAsyncQueryFn: build.mutation<string, string>({
      async queryFn(arg: string) {
        return { data: `resultFrom(${arg})` }
      },
    }),
    mutationWithInvalidAsyncQueryFn: build.mutation<string, string>({
      // @ts-expect-error
      async queryFn(arg: string) {
        return { data: 5 }
      },
    }),
    mutationWithAsyncErrorQueryFn: build.mutation<string, string>({
      async queryFn(arg: string) {
        return { error: { type: 'Custom' } }
      },
    }),
    mutationWithInvalidAsyncErrorQueryFn: build.mutation<string, string>({
      // @ts-expect-error
      async queryFn(arg: string) {
        return { error: 5 }
      },
    }),
    // @ts-expect-error
    withNeither: build.query<string, string>({}),
    // @ts-expect-error
    mutationWithNeither: build.mutation<string, string>({}),
  }),
})

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM({}).concat(api.middleware),
})

test('fakeBaseQuery throws when invoking query', async () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)

  const thunk = api.endpoints.withQuery.initiate('')

  const result = await store.dispatch(thunk)

  expect(consoleErrorSpy).toHaveBeenCalledOnce()

  expect(consoleErrorSpy).toHaveBeenLastCalledWith(
    `An unhandled error occurred processing a request for the endpoint "withQuery".\nIn the case of an unhandled error, no tags will be "provided" or "invalidated".`,
    Error(
      'When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.',
    ),
  )

  expect(result!.error).toEqual({
    message:
      'When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.',
    name: 'Error',
    stack: expect.any(String),
  })

  consoleErrorSpy.mockRestore()
})
