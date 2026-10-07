import { noop } from '@internal/listenerMiddleware/utils'
import { configureStore } from '@internal/configureStore'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: () => ({}),
})

describe('injectEndpoints', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllEnvs()
  })

  afterAll(() => {
    vi.restoreAllMocks()
    vi.unstubAllEnvs()
  })

  test("query: overriding with `overrideEndpoints`='throw' throws an error", async () => {
    const extended = api.injectEndpoints({
      endpoints: (build) => ({
        injected: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    })

    expect(() => {
      extended.injectEndpoints({
        overrideExisting: 'throw',
        endpoints: (build) => ({
          injected: build.query<unknown, string>({
            query: () => '/success',
          }),
        }),
      })
    }).toThrowError(
      new Error(
        `called \`injectEndpoints\` to override already-existing endpointName injected without specifying \`overrideExisting: true\``,
      ),
    )
  })

  test('query: overriding an endpoint with `overrideEndpoints`=false does nothing in production', async () => {
    vi.stubEnv('NODE_ENV', 'development')

    const extended = api.injectEndpoints({
      endpoints: (build) => ({
        injected: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    })

    extended.injectEndpoints({
      overrideExisting: false,
      endpoints: (build) => ({
        injected: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    })

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `called \`injectEndpoints\` to override already-existing endpointName injected without specifying \`overrideExisting: true\``,
    )
  })

  test('query: overriding with `overrideEndpoints`=false logs an error in development', async () => {
    vi.stubEnv('NODE_ENV', 'production')

    const extended = api.injectEndpoints({
      endpoints: (build) => ({
        injected: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    })

    extended.injectEndpoints({
      overrideExisting: false,
      endpoints: (build) => ({
        injected: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    })

    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  test('adding the same middleware to the store twice throws an error', () => {
    // Strictly speaking this is a duplicate of the tests in configureStore.test.ts,
    // but this helps confirm that we throw the error for adding
    // the same API middleware twice.
    const extendedApi = api.injectEndpoints({
      endpoints: (build) => ({
        injected: build.query<unknown, string>({
          query: () => '/success',
        }),
      }),
    })

    const makeStore = () =>
      configureStore({
        reducer: {
          api: api.reducer,
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(api.middleware, extendedApi.middleware),
      })

    expect(makeStore).toThrowError(
      'Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.',
    )
  })
})
