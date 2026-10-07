import { noop } from '@internal/listenerMiddleware/utils'
import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(noop)

const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)

beforeEach(() => {
  vi.stubEnv('NODE_ENV', 'development')
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.clearAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
  vi.unstubAllEnvs()
})

const baseUrl = 'https://example.com'

function createApis() {
  const api1 = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      q1: builder.query({ query: () => '/success' }),
    }),
  })

  const api1_2 = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      q1: builder.query({ query: () => '/success' }),
    }),
  })

  const api2 = createApi({
    reducerPath: 'api2',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      q1: builder.query({ query: () => '/success' }),
    }),
  })
  return [api1, api1_2, api2] as const
}

let [api1, api1_2, api2] = createApis()
beforeEach(() => {
  ;[api1, api1_2, api2] = createApis()
})

const reMatchMissingMiddlewareError =
  /Warning: Middleware for RTK-Query API at reducerPath "api" has not been added to the store/

describe('missing middleware', () => {
  test.each([
    ['development', true],
    ['production', false],
  ])('%s warns if middleware is missing: %s', (env, shouldWarn) => {
    vi.stubEnv('NODE_ENV', env)

    const store = configureStore({
      reducer: { [api1.reducerPath]: api1.reducer },
    })
    const doDispatch = () => {
      store.dispatch(api1.endpoints.q1.initiate(undefined))
    }
    if (shouldWarn) {
      expect(doDispatch).toThrowError(reMatchMissingMiddlewareError)
    } else {
      expect(doDispatch).not.toThrowError()
    }
  })

  test('does not warn if middleware is not missing', () => {
    const store = configureStore({
      reducer: { [api1.reducerPath]: api1.reducer },
      middleware: (gdm) => gdm().concat(api1.middleware),
    })
    store.dispatch(api1.endpoints.q1.initiate(undefined))

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    expect(consoleWarnSpy).not.toHaveBeenCalled()
  })

  test('warns only once per api', () => {
    const store = configureStore({
      reducer: { [api1.reducerPath]: api1.reducer },
    })
    const doDispatch = () => {
      store.dispatch(api1.endpoints.q1.initiate(undefined))
    }

    expect(doDispatch).toThrowError(reMatchMissingMiddlewareError)
    expect(doDispatch).not.toThrowError()
  })

  test('warns multiple times for multiple apis', () => {
    const store = configureStore({
      reducer: {
        [api1.reducerPath]: api1.reducer,
        [api2.reducerPath]: api2.reducer,
      },
    })
    const doDispatch1 = () => {
      store.dispatch(api1.endpoints.q1.initiate(undefined))
    }
    const doDispatch2 = () => {
      store.dispatch(api2.endpoints.q1.initiate(undefined))
    }
    expect(doDispatch1).toThrowError(reMatchMissingMiddlewareError)
    expect(doDispatch2).toThrowError(
      /Warning: Middleware for RTK-Query API at reducerPath "api2" has not been added to the store/,
    )
  })
})

describe('missing reducer', () => {
  describe.each([
    ['development', true],
    ['production', false],
  ])('%s warns if reducer is missing: %s', (env, shouldWarn) => {
    beforeEach(() => {
      vi.stubEnv('NODE_ENV', env)
    })

    afterAll(() => {
      vi.unstubAllEnvs()
    })

    test('middleware not crashing if reducer is missing', async () => {
      const store = configureStore({
        reducer: { x: () => 0 },
        // @ts-expect-error
        middleware: (gdm) => gdm().concat(api1.middleware),
      })
      await store.dispatch(api1.endpoints.q1.initiate(undefined))

      expect(process.env.NODE_ENV).toBe(env)
    })

    test(`warning behavior`, () => {
      const store = configureStore({
        reducer: { x: () => 0 },
        // @ts-expect-error
        middleware: (gdm) => gdm().concat(api1.middleware),
      })
      // @ts-expect-error
      api1.endpoints.q1.select(undefined)(store.getState())

      expect(consoleWarnSpy).not.toHaveBeenCalled()

      expect(process.env.NODE_ENV).toBe(env)

      if (shouldWarn) {
        expect(consoleErrorSpy).toHaveBeenCalledOnce()

        expect(consoleErrorSpy).toHaveBeenLastCalledWith(
          'Error: No data found at `state.api`. Did you forget to add the reducer to the store?',
        )
      } else {
        expect(consoleErrorSpy).not.toHaveBeenCalled()
      }
    })
  })

  test('does not warn if reducer is not missing', () => {
    const store = configureStore({
      reducer: { [api1.reducerPath]: api1.reducer },
      middleware: (gdm) => gdm().concat(api1.middleware),
    })
    api1.endpoints.q1.select(undefined)(store.getState())

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    expect(consoleWarnSpy).not.toHaveBeenCalled()
  })

  test('warns only once per api', () => {
    const store = configureStore({
      reducer: { x: () => 0 },
      // @ts-expect-error
      middleware: (gdm) => gdm().concat(api1.middleware),
    })
    // @ts-expect-error
    api1.endpoints.q1.select(undefined)(store.getState())
    // @ts-expect-error
    api1.endpoints.q1.select(undefined)(store.getState())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      'Error: No data found at `state.api`. Did you forget to add the reducer to the store?',
    )
  })

  test('warns multiple times for multiple apis', () => {
    const store = configureStore({
      reducer: { x: () => 0 },
      // @ts-expect-error
      middleware: (gdm) => gdm().concat(api1.middleware),
    })
    // @ts-expect-error
    api1.endpoints.q1.select(undefined)(store.getState())
    // @ts-expect-error
    api2.endpoints.q1.select(undefined)(store.getState())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledTimes(2)

    expect(consoleErrorSpy).toHaveBeenNthCalledWith(
      1,
      'Error: No data found at `state.api`. Did you forget to add the reducer to the store?',
    )

    expect(consoleErrorSpy).toHaveBeenNthCalledWith(
      2,
      'Error: No data found at `state.api2`. Did you forget to add the reducer to the store?',
    )
  })
})

test('warns for reducer and also throws error if everything is missing', async () => {
  const store = configureStore({
    reducer: { x: () => 0 },
  })
  // @ts-expect-error
  api1.endpoints.q1.select(undefined)(store.getState())
  const doDispatch = () => {
    store.dispatch(api1.endpoints.q1.initiate(undefined))
  }
  expect(doDispatch).toThrowError(reMatchMissingMiddlewareError)

  expect(consoleWarnSpy).not.toHaveBeenCalled()

  expect(consoleErrorSpy).toHaveBeenCalledOnce()

  expect(consoleErrorSpy).toHaveBeenLastCalledWith(
    'Error: No data found at `state.api`. Did you forget to add the reducer to the store?',
  )
})

describe('warns on multiple apis using the same `reducerPath`', () => {
  test('common: two apis, same order', async () => {
    const store = configureStore({
      reducer: {
        // TS 5.3 now errors on identical object keys. We want to force that behavior.
        // @ts-ignore
        [api1.reducerPath]: api1.reducer,
        // @ts-ignore
        [api1_2.reducerPath]: api1_2.reducer,
      },
      middleware: (gDM) => gDM().concat(api1.middleware, api1_2.middleware),
    })
    await store.dispatch(api1.endpoints.q1.initiate(undefined))

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    // only second api prints
    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      `There is a mismatch between slice and middleware for the reducerPath "api".
You can only have one api per reducer path, this will lead to crashes in various situations!
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`,
    )
  })

  test('common: two apis, opposing order', async () => {
    const store = configureStore({
      reducer: {
        // @ts-ignore
        [api1.reducerPath]: api1.reducer,
        // @ts-ignore
        [api1_2.reducerPath]: api1_2.reducer,
      },
      middleware: (gDM) => gDM().concat(api1_2.middleware, api1.middleware),
    })
    await store.dispatch(api1.endpoints.q1.initiate(undefined))

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    expect(consoleWarnSpy).toHaveBeenCalledTimes(2)

    // both apis print
    expect(consoleWarnSpy).toHaveBeenNthCalledWith(
      1,
      `There is a mismatch between slice and middleware for the reducerPath "api".
You can only have one api per reducer path, this will lead to crashes in various situations!
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`,
    )

    expect(consoleWarnSpy).toHaveBeenNthCalledWith(
      2,
      `There is a mismatch between slice and middleware for the reducerPath "api".
You can only have one api per reducer path, this will lead to crashes in various situations!
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`,
    )
  })

  test('common: two apis, only first middleware', async () => {
    const store = configureStore({
      reducer: {
        // @ts-ignore
        [api1.reducerPath]: api1.reducer,
        // @ts-ignore
        [api1_2.reducerPath]: api1_2.reducer,
      },
      middleware: (gDM) => gDM().concat(api1.middleware),
    })
    await store.dispatch(api1.endpoints.q1.initiate(undefined))

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      `There is a mismatch between slice and middleware for the reducerPath "api".
You can only have one api per reducer path, this will lead to crashes in various situations!
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`,
    )
  })

  /**
   * This is the one edge case that we currently cannot detect:
   * Multiple apis with the same reducer key and only the middleware of the last api is being used.
   *
   * It would be great to support this case as well, but for now:
   * "It is what it is."
   */
  test.todo('common: two apis, only second middleware', async () => {
    const store = configureStore({
      reducer: {
        // @ts-ignore
        [api1.reducerPath]: api1.reducer,
        // @ts-ignore
        [api1_2.reducerPath]: api1_2.reducer,
      },
      middleware: (gDM) => gDM().concat(api1_2.middleware),
    })
    await store.dispatch(api1.endpoints.q1.initiate(undefined))

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    expect(consoleWarnSpy).toHaveBeenLastCalledWith(
      `There is a mismatch between slice and middleware for the reducerPath "api".
You can only have one api per reducer path, this will lead to crashes in various situations!
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!`,
    )
  })
})

describe('`console.error` on unhandled errors during `initiate`', () => {
  test('error thrown in `baseQuery`', async () => {
    const api = createApi({
      baseQuery(): { data: any } {
        throw new Error('this was kinda expected')
      },
      endpoints: (build) => ({
        baseQuery: build.query<any, void>({ query() {} }),
      }),
    })
    const store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      middleware: (gdm) => gdm().concat(api.middleware),
    })
    await store.dispatch(api.endpoints.baseQuery.initiate())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `An unhandled error occurred processing a request for the endpoint "baseQuery".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
      Error('this was kinda expected'),
    )
  })

  test('error thrown in `queryFn`', async () => {
    const api = createApi({
      baseQuery() {
        return { data: {} }
      },
      endpoints: (build) => ({
        queryFn: build.query<any, void>({
          queryFn() {
            throw new Error('this was kinda expected')
          },
        }),
      }),
    })
    const store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      middleware: (gdm) => gdm().concat(api.middleware),
    })
    await store.dispatch(api.endpoints.queryFn.initiate())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `An unhandled error occurred processing a request for the endpoint "queryFn".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
      Error('this was kinda expected'),
    )
  })

  test('error thrown in `transformResponse`', async () => {
    const api = createApi({
      baseQuery() {
        return { data: {} }
      },
      endpoints: (build) => ({
        transformRspn: build.query<any, void>({
          query() {},
          transformResponse() {
            throw new Error('this was kinda expected')
          },
        }),
      }),
    })
    const store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      middleware: (gdm) => gdm().concat(api.middleware),
    })
    await store.dispatch(api.endpoints.transformRspn.initiate())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `An unhandled error occurred processing a request for the endpoint "transformRspn".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
      Error('this was kinda expected'),
    )
  })

  test('error thrown in `transformErrorResponse`', async () => {
    const api = createApi({
      baseQuery() {
        return { error: {} }
      },
      endpoints: (build) => ({
        // @ts-ignore TS doesn't like `() => never` for `tER`
        transformErRspn: build.query<number, void>({
          // @ts-ignore TS doesn't like `() => never` for `tER`
          query: () => '/dummy',
          // @ts-ignore TS doesn't like `() => never` for `tER`
          transformErrorResponse() {
            throw new Error('this was kinda expected')
          },
        }),
      }),
    })
    const store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      middleware: (gdm) => gdm().concat(api.middleware),
    })
    await store.dispatch(api.endpoints.transformErRspn.initiate())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `An unhandled error occurred processing a request for the endpoint "transformErRspn".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
      Error('this was kinda expected'),
    )
  })

  test('`fetchBaseQuery`: error thrown in `prepareHeaders`', async () => {
    const api = createApi({
      baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders() {
          throw new Error('this was kinda expected')
        },
      }),
      endpoints: (build) => ({
        prep: build.query<any, void>({
          query() {
            return '/success'
          },
        }),
      }),
    })
    const store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      middleware: (gdm) => gdm().concat(api.middleware),
    })
    await store.dispatch(api.endpoints.prep.initiate())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `An unhandled error occurred processing a request for the endpoint "prep".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
      Error('this was kinda expected'),
    )
  })

  test('`fetchBaseQuery`: error thrown in `validateStatus`', async () => {
    const api = createApi({
      baseQuery: fetchBaseQuery({
        baseUrl,
      }),
      endpoints: (build) => ({
        val: build.query<any, void>({
          query() {
            return {
              url: '/success',

              validateStatus() {
                throw new Error('this was kinda expected')
              },
            }
          },
        }),
      }),
    })
    const store = configureStore({
      reducer: { [api.reducerPath]: api.reducer },
      middleware: (gdm) => gdm().concat(api.middleware),
    })
    await store.dispatch(api.endpoints.val.initiate())

    expect(consoleWarnSpy).not.toHaveBeenCalled()

    expect(consoleErrorSpy).toHaveBeenCalledOnce()

    expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      `An unhandled error occurred processing a request for the endpoint "val".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`,
      Error('this was kinda expected'),
    )
  })
})
