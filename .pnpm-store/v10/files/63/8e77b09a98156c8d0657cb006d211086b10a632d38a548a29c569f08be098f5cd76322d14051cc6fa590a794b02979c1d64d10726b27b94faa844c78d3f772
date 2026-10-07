import { noop } from '@internal/listenerMiddleware/utils'
import { server } from '@internal/query/tests/mocks/server'
import {
  getSerializedHeaders,
  setupApiStore,
} from '@internal/tests/utils/helpers'
import type { SerializedError } from '@reduxjs/toolkit'
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import type {
  DefinitionsFromApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  OverrideResultType,
  SchemaFailureConverter,
  SchemaType,
  SerializeQueryArgs,
  TagTypesFromApi,
} from '@reduxjs/toolkit/query'
import {
  createApi,
  fetchBaseQuery,
  NamedSchemaError,
} from '@reduxjs/toolkit/query'
import { HttpResponse, delay, http } from 'msw'
import nodeFetch from 'node-fetch'
import * as v from 'valibot'
import type { SchemaFailureHandler } from '../endpointDefinitions'

beforeAll(() => {
  vi.stubEnv('NODE_ENV', 'development')

  return vi.unstubAllEnvs
})

const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)

afterEach(() => {
  vi.clearAllMocks()
  server.resetHandlers()
})

afterAll(() => {
  vi.restoreAllMocks()
})

function paginate<T>(array: T[], page_size: number, page_number: number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

test('sensible defaults', () => {
  const api = createApi({
    baseQuery: fetchBaseQuery(),
    endpoints: (build) => ({
      getUser: build.query<unknown, void>({
        query(id) {
          return { url: `user/${id}` }
        },
      }),
      updateUser: build.mutation<unknown, void>({
        query: () => '',
      }),
    }),
  })
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
  })
  expect(api.reducerPath).toBe('api')

  expect(api.endpoints.getUser.name).toBe('getUser')
  expect(api.endpoints.updateUser.name).toBe('updateUser')
})

describe('wrong tagTypes log errors', () => {
  const baseQuery = vi.fn()
  const api = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (build) => ({
      provideNothing: build.query<unknown, void>({
        query: () => '',
      }),
      provideTypeString: build.query<unknown, void>({
        query: () => '',
        providesTags: ['User'],
      }),
      provideTypeWithId: build.query<unknown, void>({
        query: () => '',
        providesTags: [{ type: 'User', id: 5 }],
      }),
      provideTypeWithIdAndCallback: build.query<unknown, void>({
        query: () => '',
        providesTags: () => [{ type: 'User', id: 5 }],
      }),
      provideWrongTypeString: build.query<unknown, void>({
        query: () => '',
        // @ts-expect-error
        providesTags: ['Users'],
      }),
      provideWrongTypeWithId: build.query<unknown, void>({
        query: () => '',
        // @ts-expect-error
        providesTags: [{ type: 'Users', id: 5 }],
      }),
      provideWrongTypeWithIdAndCallback: build.query<unknown, void>({
        query: () => '',
        // @ts-expect-error
        providesTags: () => [{ type: 'Users', id: 5 }],
      }),
      invalidateNothing: build.query<unknown, void>({
        query: () => '',
      }),
      invalidateTypeString: build.mutation<unknown, void>({
        query: () => '',
        invalidatesTags: ['User'],
      }),
      invalidateTypeWithId: build.mutation<unknown, void>({
        query: () => '',
        invalidatesTags: [{ type: 'User', id: 5 }],
      }),
      invalidateTypeWithIdAndCallback: build.mutation<unknown, void>({
        query: () => '',
        invalidatesTags: () => [{ type: 'User', id: 5 }],
      }),

      invalidateWrongTypeString: build.mutation<unknown, void>({
        query: () => '',
        // @ts-expect-error
        invalidatesTags: ['Users'],
      }),
      invalidateWrongTypeWithId: build.mutation<unknown, void>({
        query: () => '',
        // @ts-expect-error
        invalidatesTags: [{ type: 'Users', id: 5 }],
      }),
      invalidateWrongTypeWithIdAndCallback: build.mutation<unknown, void>({
        query: () => '',
        // @ts-expect-error
        invalidatesTags: () => [{ type: 'Users', id: 5 }],
      }),
    }),
  })
  const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
  })

  beforeEach(() => {
    baseQuery.mockResolvedValue({ data: 'foo' })
  })

  test.each<[keyof typeof api.endpoints, boolean?]>([
    ['provideNothing', false],
    ['provideTypeString', false],
    ['provideTypeWithId', false],
    ['provideTypeWithIdAndCallback', false],
    ['provideWrongTypeString', true],
    ['provideWrongTypeWithId', true],
    ['provideWrongTypeWithIdAndCallback', true],
    ['invalidateNothing', false],
    ['invalidateTypeString', false],
    ['invalidateTypeWithId', false],
    ['invalidateTypeWithIdAndCallback', false],
    ['invalidateWrongTypeString', true],
    ['invalidateWrongTypeWithId', true],
    ['invalidateWrongTypeWithIdAndCallback', true],
  ])(`endpoint %s should log an error? %s`, async (endpoint, shouldError) => {
    vi.stubEnv('NODE_ENV', 'development')

    // @ts-ignore
    store.dispatch(api.endpoints[endpoint].initiate())
    let result: { status: string }
    do {
      await delay(5)
      // @ts-ignore
      result = api.endpoints[endpoint].select()(store.getState())
    } while (result.status === 'pending')

    if (shouldError) {
      expect(consoleErrorSpy).toHaveBeenLastCalledWith(
        "Tag type 'Users' was used, but not specified in `tagTypes`!",
      )
    } else {
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    }
  })
})

describe('endpoint definition typings', () => {
  const api = createApi({
    baseQuery: (from: 'From'): { data: 'To' } | Promise<{ data: 'To' }> => ({
      data: 'To',
    }),
    endpoints: () => ({}),
    tagTypes: ['typeA', 'typeB'],
  })
  test('query: query & transformResponse types', () => {
    api.injectEndpoints({
      endpoints: (build) => ({
        query: build.query<'RetVal', 'Arg'>({
          query: (x: 'Arg') => 'From' as const,
          transformResponse(r: 'To') {
            return 'RetVal' as const
          },
        }),
        query1: build.query<'RetVal', 'Arg'>({
          // @ts-expect-error
          query: (x: 'Error') => 'From' as const,
          transformResponse(r: 'To') {
            return 'RetVal' as const
          },
        }),
        query2: build.query<'RetVal', 'Arg'>({
          // @ts-expect-error
          query: (x: 'Arg') => 'Error' as const,
          transformResponse(r: 'To') {
            return 'RetVal' as const
          },
        }),
        query3: build.query<'RetVal', 'Arg'>({
          query: (x: 'Arg') => 'From' as const,
          // @ts-expect-error
          transformResponse(r: 'Error') {
            return 'RetVal' as const
          },
        }),
        query4: build.query<'RetVal', 'Arg'>({
          query: (x: 'Arg') => 'From' as const,
          // @ts-expect-error
          transformResponse(r: 'To') {
            return 'Error' as const
          },
        }),
        queryInference1: build.query<'RetVal', 'Arg'>({
          query: (x) => {
            return 'From'
          },
          transformResponse(r) {
            return 'RetVal'
          },
        }),
        queryInference2: (() => {
          const query = build.query({
            query: (x: 'Arg') => 'From' as const,
            transformResponse(r: 'To') {
              return 'RetVal' as const
            },
          })
          return query
        })(),
      }),
    })
  })
  test('mutation: query & transformResponse types', () => {
    api.injectEndpoints({
      endpoints: (build) => ({
        query: build.mutation<'RetVal', 'Arg'>({
          query: (x: 'Arg') => 'From' as const,
          transformResponse(r: 'To') {
            return 'RetVal' as const
          },
        }),
        query1: build.mutation<'RetVal', 'Arg'>({
          // @ts-expect-error
          query: (x: 'Error') => 'From' as const,
          transformResponse(r: 'To') {
            return 'RetVal' as const
          },
        }),
        query2: build.mutation<'RetVal', 'Arg'>({
          // @ts-expect-error
          query: (x: 'Arg') => 'Error' as const,
          transformResponse(r: 'To') {
            return 'RetVal' as const
          },
        }),
        query3: build.mutation<'RetVal', 'Arg'>({
          query: (x: 'Arg') => 'From' as const,
          // @ts-expect-error
          transformResponse(r: 'Error') {
            return 'RetVal' as const
          },
        }),
        query4: build.mutation<'RetVal', 'Arg'>({
          query: (x: 'Arg') => 'From' as const,
          // @ts-expect-error
          transformResponse(r: 'To') {
            return 'Error' as const
          },
        }),
        mutationInference1: build.mutation<'RetVal', 'Arg'>({
          query: (x) => {
            return 'From'
          },
          transformResponse(r) {
            return 'RetVal'
          },
        }),
        mutationInference2: (() => {
          const query = build.mutation({
            query: (x: 'Arg') => 'From' as const,
            transformResponse(r: 'To') {
              return 'RetVal' as const
            },
          })
          return query
        })(),
      }),
    })
  })

  describe('enhancing endpoint definitions', () => {
    const baseQuery = vi.fn((x: string) => ({ data: 'success' }))
    const commonBaseQueryApi = {
      dispatch: expect.any(Function),
      endpoint: expect.any(String),
      abort: expect.any(Function),
      extra: undefined,
      forced: expect.any(Boolean),
      getState: expect.any(Function),
      signal: expect.any(Object),
      type: expect.any(String),
      queryCacheKey: expect.any(String),
    }
    beforeEach(() => {
      baseQuery.mockClear()
    })
    function getNewApi() {
      return createApi({
        baseQuery,
        tagTypes: ['old'],
        endpoints: (build) => ({
          query1: build.query<'out1', 'in1'>({ query: (id) => `${id}` }),
          query2: build.query<'out2', 'in2'>({ query: (id) => `${id}` }),
          mutation1: build.mutation<'out1', 'in1'>({ query: (id) => `${id}` }),
          mutation2: build.mutation<'out2', 'in2'>({ query: (id) => `${id}` }),
        }),
      })
    }
    let api = getNewApi()
    beforeEach(() => {
      api = getNewApi()
    })

    test('pre-modification behavior', async () => {
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      storeRef.store.dispatch(api.endpoints.query1.initiate('in1'))
      storeRef.store.dispatch(api.endpoints.query2.initiate('in2'))
      storeRef.store.dispatch(api.endpoints.mutation1.initiate('in1'))
      storeRef.store.dispatch(api.endpoints.mutation2.initiate('in2'))

      expect(baseQuery.mock.calls).toEqual([
        [
          'in1',
          {
            dispatch: expect.any(Function),
            endpoint: expect.any(String),
            getState: expect.any(Function),
            signal: expect.any(Object),
            abort: expect.any(Function),
            forced: expect.any(Boolean),
            type: expect.any(String),
            queryCacheKey: expect.any(String),
          },
          undefined,
        ],
        [
          'in2',
          {
            dispatch: expect.any(Function),
            endpoint: expect.any(String),
            getState: expect.any(Function),
            signal: expect.any(Object),
            abort: expect.any(Function),
            forced: expect.any(Boolean),
            type: expect.any(String),
            queryCacheKey: expect.any(String),
          },
          undefined,
        ],
        [
          'in1',
          {
            dispatch: expect.any(Function),
            endpoint: expect.any(String),
            getState: expect.any(Function),
            signal: expect.any(Object),
            abort: expect.any(Function),
            // forced: undefined,
            type: expect.any(String),
          },
          undefined,
        ],
        [
          'in2',
          {
            dispatch: expect.any(Function),
            endpoint: expect.any(String),
            getState: expect.any(Function),
            signal: expect.any(Object),
            abort: expect.any(Function),
            // forced: undefined,
            type: expect.any(String),
          },
          undefined,
        ],
      ])
    })

    test('warn on wrong tagType', async () => {
      vi.stubEnv('NODE_ENV', 'development')

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      // only type-test this part
      if (2 > 1) {
        api.enhanceEndpoints({
          endpoints: {
            query1: {
              // @ts-expect-error
              providesTags: ['new'],
            },
            query2: {
              // @ts-expect-error
              providesTags: ['missing'],
            },
          },
        })
      }

      const enhanced = api.enhanceEndpoints({
        addTagTypes: ['new'],
        endpoints: {
          query1: {
            providesTags: ['new'],
          },
          query2: {
            // @ts-expect-error
            providesTags: ['missing'],
          },
        },
      })

      storeRef.store.dispatch(api.endpoints.query1.initiate('in1'))
      await delay(1)
      expect(consoleErrorSpy).not.toHaveBeenCalled()

      storeRef.store.dispatch(api.endpoints.query2.initiate('in2'))
      await delay(1)

      expect(consoleErrorSpy).toHaveBeenCalledOnce()

      expect(consoleErrorSpy).toHaveBeenLastCalledWith(
        "Tag type 'missing' was used, but not specified in `tagTypes`!",
      )

      // only type-test this part
      if (2 > 1) {
        enhanced.enhanceEndpoints({
          endpoints: {
            query1: {
              // returned `enhanced` api contains "new" enitityType
              providesTags: ['new'],
            },
            query2: {
              // @ts-expect-error
              providesTags: ['missing'],
            },
          },
        })
      }
    })

    test('modify', () => {
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      api.enhanceEndpoints({
        endpoints: {
          query1: {
            query: (x) => {
              return 'modified1'
            },
          },
          query2(definition) {
            definition.query = (x) => {
              return 'modified2'
            }
          },
          mutation1: {
            query: (x) => {
              return 'modified1'
            },
          },
          mutation2(definition) {
            definition.query = (x) => {
              return 'modified2'
            }
          },
          // @ts-expect-error
          nonExisting: {},
        },
      })

      storeRef.store.dispatch(api.endpoints.query1.initiate('in1'))
      storeRef.store.dispatch(api.endpoints.query2.initiate('in2'))
      storeRef.store.dispatch(api.endpoints.mutation1.initiate('in1'))
      storeRef.store.dispatch(api.endpoints.mutation2.initiate('in2'))

      expect(baseQuery.mock.calls).toEqual([
        ['modified1', commonBaseQueryApi, undefined],
        ['modified2', commonBaseQueryApi, undefined],
        [
          'modified1',
          {
            ...commonBaseQueryApi,
            forced: undefined,
            queryCacheKey: undefined,
          },
          undefined,
        ],
        [
          'modified2',
          {
            ...commonBaseQueryApi,
            forced: undefined,
            queryCacheKey: undefined,
          },
          undefined,
        ],
      ])
    })

    test('updated transform response types', async () => {
      const baseApi = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        tagTypes: ['old'],
        endpoints: (build) => ({
          query1: build.query<'out1', void>({ query: () => 'success' }),
          mutation1: build.mutation<'out1', void>({ query: () => 'success' }),
        }),
      })

      type Transformed = { value: string }

      type Definitions = DefinitionsFromApi<typeof api>
      type TagTypes = TagTypesFromApi<typeof api>

      type Q1Definition = OverrideResultType<Definitions['query1'], Transformed>
      type M1Definition = OverrideResultType<
        Definitions['mutation1'],
        Transformed
      >

      type UpdatedDefitions = Omit<Definitions, 'query1' | 'mutation1'> & {
        query1: Q1Definition
        mutation1: M1Definition
      }

      const enhancedApi = baseApi.enhanceEndpoints<TagTypes, UpdatedDefitions>({
        endpoints: {
          query1: {
            transformResponse: (a, b, c) => ({
              value: 'transformed',
            }),
          },
          mutation1: {
            transformResponse: (a, b, c) => ({
              value: 'transformed',
            }),
          },
        },
      })

      const storeRef = setupApiStore(enhancedApi, undefined, {
        withoutTestLifecycles: true,
      })

      const queryResponse = await storeRef.store.dispatch(
        enhancedApi.endpoints.query1.initiate(),
      )
      expect(queryResponse.data).toEqual({ value: 'transformed' })

      const mutationResponse = await storeRef.store.dispatch(
        enhancedApi.endpoints.mutation1.initiate(),
      )
      expect('data' in mutationResponse && mutationResponse.data).toEqual({
        value: 'transformed',
      })
    })
  })
})

describe('additional transformResponse behaviors', () => {
  type SuccessResponse = { value: 'success' }
  type EchoResponseData = { banana: 'bread' }
  type ErrorResponse = { value: 'error' }
  const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
    endpoints: (build) => ({
      echo: build.mutation({
        query: () => ({ method: 'PUT', url: '/echo' }),
      }),
      mutation: build.mutation({
        query: () => ({
          url: '/echo',
          method: 'POST',
          body: { nested: { banana: 'bread' } },
        }),
        transformResponse: (response: { body: { nested: EchoResponseData } }) =>
          response.body.nested,
      }),
      mutationWithError: build.mutation({
        query: () => ({
          url: '/error',
          method: 'POST',
        }),
        transformErrorResponse: (response) => {
          const data = response.data as ErrorResponse
          return data.value
        },
      }),
      mutationWithMeta: build.mutation({
        query: () => ({
          url: '/echo',
          method: 'POST',
          body: { nested: { banana: 'bread' } },
        }),
        transformResponse: (
          response: { body: { nested: EchoResponseData } },
          meta,
        ) => {
          return {
            ...response.body.nested,
            meta: {
              request: { headers: getSerializedHeaders(meta?.request.headers) },
              response: {
                headers: getSerializedHeaders(meta?.response?.headers),
              },
            },
          }
        },
      }),
      query: build.query<SuccessResponse & EchoResponseData, void>({
        query: () => '/success',
        transformResponse: async (response: SuccessResponse) => {
          const res: any = await nodeFetch('https://example.com/echo', {
            method: 'POST',
            body: JSON.stringify({ banana: 'bread' }),
          }).then((res) => res.json())

          const additionalData = res.body as EchoResponseData
          return { ...response, ...additionalData }
        },
      }),
      queryWithMeta: build.query<SuccessResponse, void>({
        query: () => '/success',
        transformResponse: async (response: SuccessResponse, meta) => {
          return {
            ...response,
            meta: {
              request: { headers: getSerializedHeaders(meta?.request.headers) },
              response: {
                headers: getSerializedHeaders(meta?.response?.headers),
              },
            },
          }
        },
      }),
    }),
  })

  const storeRef = setupApiStore(api)

  test('transformResponse handles an async transformation and returns the merged data (query)', async () => {
    const result = await storeRef.store.dispatch(api.endpoints.query.initiate())

    expect(result.data).toEqual({ value: 'success', banana: 'bread' })
  })

  test('transformResponse transforms a response from a mutation', async () => {
    const result = await storeRef.store.dispatch(
      api.endpoints.mutation.initiate({}),
    )

    expect('data' in result && result.data).toEqual({ banana: 'bread' })
  })

  test('transformResponse transforms a response from a mutation with an error', async () => {
    const result = await storeRef.store.dispatch(
      api.endpoints.mutationWithError.initiate({}),
    )

    expect('error' in result && result.error).toEqual('error')
  })

  test('transformResponse can inject baseQuery meta into the end result from a mutation', async () => {
    const result = await storeRef.store.dispatch(
      api.endpoints.mutationWithMeta.initiate({}),
    )

    expect('data' in result && result.data).toEqual({
      banana: 'bread',
      meta: {
        request: {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
        },
        response: {
          headers: {
            'content-type': 'application/json',
          },
        },
      },
    })
  })

  test('transformResponse can inject baseQuery meta into the end result from a query', async () => {
    const result = await storeRef.store.dispatch(
      api.endpoints.queryWithMeta.initiate(),
    )

    expect(result.data).toEqual({
      value: 'success',
      meta: {
        request: {
          headers: {
            accept: 'application/json',
          },
        },
        response: {
          headers: {
            'content-type': 'application/json',
          },
        },
      },
    })
  })
})

describe('query endpoint lifecycles - onStart, onSuccess, onError', () => {
  const initialState = {
    count: null as null | number,
  }
  const setCount = createAction<number>('setCount')
  const testReducer = createReducer(initialState, (builder) => {
    builder.addCase(setCount, (state, action) => {
      state.count = action.payload
    })
  })

  type SuccessResponse = { value: 'success' }
  const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
    endpoints: (build) => ({
      echo: build.mutation({
        query: () => ({ method: 'PUT', url: '/echo' }),
      }),
      query: build.query<SuccessResponse, void>({
        query: () => '/success',
        async onQueryStarted(_, api) {
          api.dispatch(setCount(0))
          try {
            await api.queryFulfilled
            api.dispatch(setCount(1))
          } catch {
            api.dispatch(setCount(-1))
          }
        },
      }),
      mutation: build.mutation<SuccessResponse, void>({
        query: () => ({ url: '/success', method: 'POST' }),
        async onQueryStarted(_, api) {
          api.dispatch(setCount(0))
          try {
            await api.queryFulfilled
            api.dispatch(setCount(1))
          } catch {
            api.dispatch(setCount(-1))
          }
        },
      }),
    }),
  })

  const storeRef = setupApiStore(api, { testReducer })

  test('query lifecycle events fire properly', async () => {
    // We intentionally fail the first request so we can test all lifecycles
    server.use(
      http.get(
        'https://example.com/success',
        () => HttpResponse.json({ value: 'failed' }, { status: 500 }),
        { once: true },
      ),
    )

    expect(storeRef.store.getState().testReducer.count).toBe(null)
    const failAttempt = storeRef.store.dispatch(api.endpoints.query.initiate())
    expect(storeRef.store.getState().testReducer.count).toBe(0)
    await failAttempt
    await delay(10)
    expect(storeRef.store.getState().testReducer.count).toBe(-1)

    const successAttempt = storeRef.store.dispatch(
      api.endpoints.query.initiate(),
    )
    expect(storeRef.store.getState().testReducer.count).toBe(0)
    await successAttempt
    await delay(10)
    expect(storeRef.store.getState().testReducer.count).toBe(1)
  })

  test('mutation lifecycle events fire properly', async () => {
    // We intentionally fail the first request so we can test all lifecycles
    server.use(
      http.post(
        'https://example.com/success',
        () => HttpResponse.json({ value: 'failed' }, { status: 500 }),
        { once: true },
      ),
    )

    expect(storeRef.store.getState().testReducer.count).toBe(null)
    const failAttempt = storeRef.store.dispatch(
      api.endpoints.mutation.initiate(),
    )
    expect(storeRef.store.getState().testReducer.count).toBe(0)
    await failAttempt
    expect(storeRef.store.getState().testReducer.count).toBe(-1)

    const successAttempt = storeRef.store.dispatch(
      api.endpoints.mutation.initiate(),
    )
    expect(storeRef.store.getState().testReducer.count).toBe(0)
    await successAttempt
    expect(storeRef.store.getState().testReducer.count).toBe(1)
  })
})

test('providesTags and invalidatesTags can use baseQueryMeta', async () => {
  let _meta: FetchBaseQueryMeta | undefined

  type SuccessResponse = { value: 'success' }

  const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
    tagTypes: ['success'],
    endpoints: (build) => ({
      query: build.query<SuccessResponse, void>({
        query: () => '/success',
        providesTags: (_result, _error, _arg, meta) => {
          _meta = meta
          return ['success']
        },
      }),
      mutation: build.mutation<SuccessResponse, void>({
        query: () => ({ url: '/success', method: 'POST' }),
        invalidatesTags: (_result, _error, _arg, meta) => {
          _meta = meta
          return ['success']
        },
      }),
    }),
  })

  const storeRef = setupApiStore(api, undefined, {
    withoutTestLifecycles: true,
  })

  await storeRef.store.dispatch(api.endpoints.query.initiate())
  expect('request' in _meta! && 'response' in _meta!).toBe(true)

  _meta = undefined

  await storeRef.store.dispatch(api.endpoints.mutation.initiate())

  expect('request' in _meta! && 'response' in _meta!).toBe(true)
})

describe('structuralSharing flag behaviors', () => {
  type SuccessResponse = { value: 'success' }

  const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
    tagTypes: ['success'],
    endpoints: (build) => ({
      enabled: build.query<SuccessResponse, void>({
        query: () => '/success',
      }),
      disabled: build.query<SuccessResponse, void>({
        query: () => ({ url: '/success' }),
        structuralSharing: false,
      }),
    }),
  })

  const storeRef = setupApiStore(api)

  it('enables structural sharing for query endpoints by default', async () => {
    await storeRef.store.dispatch(api.endpoints.enabled.initiate())
    const firstRef = api.endpoints.enabled.select()(storeRef.store.getState())

    await storeRef.store.dispatch(
      api.endpoints.enabled.initiate(undefined, { forceRefetch: true }),
    )

    const secondRef = api.endpoints.enabled.select()(storeRef.store.getState())

    expect(firstRef.requestId).not.toEqual(secondRef.requestId)
    expect(firstRef.data === secondRef.data).toBeTruthy()
  })

  it('allows a query endpoint to opt-out of structural sharing', async () => {
    await storeRef.store.dispatch(api.endpoints.disabled.initiate())
    const firstRef = api.endpoints.disabled.select()(storeRef.store.getState())

    await storeRef.store.dispatch(
      api.endpoints.disabled.initiate(undefined, { forceRefetch: true }),
    )

    const secondRef = api.endpoints.disabled.select()(storeRef.store.getState())

    expect(firstRef.requestId).not.toEqual(secondRef.requestId)
    expect(firstRef.data === secondRef.data).toBeFalsy()
  })
})

describe('custom serializeQueryArgs per endpoint', () => {
  const customArgsSerializer: SerializeQueryArgs<number> = ({
    endpointName,
    queryArgs,
  }) => `${endpointName}-${queryArgs}`

  type SuccessResponse = { value: 'success' }

  const serializer1 = vi.fn(customArgsSerializer)

  interface MyApiClient {
    fetchPost: (id: string) => Promise<SuccessResponse>
  }

  const dummyClient: MyApiClient = {
    async fetchPost() {
      return { value: 'success' }
    },
  }

  const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
    serializeQueryArgs: ({ endpointName, queryArgs }) =>
      `base-${endpointName}-${queryArgs}`,
    endpoints: (build) => ({
      queryWithNoSerializer: build.query<SuccessResponse, number>({
        query: (arg) => `${arg}`,
      }),
      queryWithCustomSerializer: build.query<SuccessResponse, number>({
        query: (arg) => `${arg}`,
        serializeQueryArgs: serializer1,
      }),
      queryWithCustomObjectSerializer: build.query<
        SuccessResponse,
        { id: number; client: MyApiClient }
      >({
        query: (arg) => `${arg.id}`,
        serializeQueryArgs: ({
          endpointDefinition,
          endpointName,
          queryArgs,
        }) => {
          const { id } = queryArgs
          return { id }
        },
      }),
      queryWithCustomNumberSerializer: build.query<
        SuccessResponse,
        { id: number; client: MyApiClient }
      >({
        query: (arg) => `${arg.id}`,
        serializeQueryArgs: ({
          endpointDefinition,
          endpointName,
          queryArgs,
        }) => {
          const { id } = queryArgs
          return id
        },
      }),
      listItems: build.query<string[], number>({
        query: (pageNumber) => `/listItems?page=${pageNumber}`,
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName
        },
        merge: (currentCache, newItems) => {
          currentCache.push(...newItems)
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg
        },
      }),
      listItems2: build.query<{ items: string[]; meta?: any }, number>({
        query: (pageNumber) => `/listItems2?page=${pageNumber}`,
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName
        },
        transformResponse(items: string[]) {
          return { items }
        },
        merge: (currentCache, newData, meta) => {
          currentCache.items.push(...newData.items)
          currentCache.meta = meta
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg
        },
      }),
    }),
  })

  const storeRef = setupApiStore(api)

  it('Works via createApi', async () => {
    await storeRef.store.dispatch(
      api.endpoints.queryWithNoSerializer.initiate(99),
    )

    expect(serializer1).not.toHaveBeenCalled()

    await storeRef.store.dispatch(
      api.endpoints.queryWithCustomSerializer.initiate(42),
    )

    expect(serializer1).toHaveBeenCalled()

    expect(
      storeRef.store.getState().api.queries['base-queryWithNoSerializer-99'],
    ).toBeTruthy()

    expect(
      storeRef.store.getState().api.queries['queryWithCustomSerializer-42'],
    ).toBeTruthy()
  })

  const serializer2 = vi.fn(customArgsSerializer)

  const injectedApi = api.injectEndpoints({
    endpoints: (build) => ({
      injectedQueryWithCustomSerializer: build.query<SuccessResponse, number>({
        query: (arg) => `${arg}`,
        serializeQueryArgs: serializer2,
      }),
    }),
  })

  it('Works via injectEndpoints', async () => {
    expect(serializer2).not.toHaveBeenCalled()

    await storeRef.store.dispatch(
      injectedApi.endpoints.injectedQueryWithCustomSerializer.initiate(5),
    )

    expect(serializer2).toHaveBeenCalled()
    expect(
      storeRef.store.getState().api.queries[
        'injectedQueryWithCustomSerializer-5'
      ],
    ).toBeTruthy()
  })

  test('Serializes a returned object for query args', async () => {
    await storeRef.store.dispatch(
      api.endpoints.queryWithCustomObjectSerializer.initiate({
        id: 42,
        client: dummyClient,
      }),
    )

    expect(
      storeRef.store.getState().api.queries[
        'queryWithCustomObjectSerializer({"id":42})'
      ],
    ).toBeTruthy()
  })

  test('Serializes a returned primitive for query args', async () => {
    await storeRef.store.dispatch(
      api.endpoints.queryWithCustomNumberSerializer.initiate({
        id: 42,
        client: dummyClient,
      }),
    )

    expect(
      storeRef.store.getState().api.queries[
        'queryWithCustomNumberSerializer(42)'
      ],
    ).toBeTruthy()
  })

  test('serializeQueryArgs + merge allows refetching as args change with same cache key', async () => {
    const allItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i']
    const PAGE_SIZE = 3

    server.use(
      http.get('https://example.com/listItems', ({ request }) => {
        const url = new URL(request.url)
        const pageString = url.searchParams.get('page')
        const pageNum = parseInt(pageString || '0')

        const results = paginate(allItems, PAGE_SIZE, pageNum)
        return HttpResponse.json(results)
      }),
    )

    // Page number shouldn't matter here, because the cache key ignores that.
    // We just need to select the only cache entry.
    const selectListItems = api.endpoints.listItems.select(0)

    await storeRef.store.dispatch(api.endpoints.listItems.initiate(1))

    const initialEntry = selectListItems(storeRef.store.getState())
    expect(initialEntry.data).toEqual(['a', 'b', 'c'])

    await storeRef.store.dispatch(api.endpoints.listItems.initiate(2))
    const updatedEntry = selectListItems(storeRef.store.getState())
    expect(updatedEntry.data).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  })

  test('merge receives a meta object as an argument', async () => {
    const allItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i']
    const PAGE_SIZE = 3

    server.use(
      http.get('https://example.com/listItems2', ({ request }) => {
        const url = new URL(request.url)
        const pageString = url.searchParams.get('page')
        const pageNum = parseInt(pageString || '0')

        const results = paginate(allItems, PAGE_SIZE, pageNum)
        return HttpResponse.json(results)
      }),
    )

    const selectListItems = api.endpoints.listItems2.select(0)

    await storeRef.store.dispatch(api.endpoints.listItems2.initiate(1))
    await storeRef.store.dispatch(api.endpoints.listItems2.initiate(2))
    const cacheEntry = selectListItems(storeRef.store.getState())

    // Should have passed along the third arg from `merge` containing these fields
    expect(cacheEntry.data?.meta).toEqual({
      requestId: expect.any(String),
      fulfilledTimeStamp: expect.any(Number),
      arg: 2,
      baseQueryMeta: expect.any(Object),
    })
  })
})

describe('timeout behavior', () => {
  test('triggers TIMEOUT_ERROR', async () => {
    const api = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com', timeout: 5 }),
      endpoints: (build) => ({
        query: build.query<unknown, void>({
          query: () => '/success',
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    server.use(
      http.get(
        'https://example.com/success',
        async () => {
          await delay(50)
          return HttpResponse.json({ value: 'failed' }, { status: 500 })
        },
        { once: true },
      ),
    )

    const result = await storeRef.store.dispatch(api.endpoints.query.initiate())

    expect(result?.error).toEqual({
      status: 'TIMEOUT_ERROR',
      error: expect.stringMatching(/^TimeoutError/),
    })
  })
})

describe('endpoint schemas', () => {
  const schemaConverter: SchemaFailureConverter<
    ReturnType<typeof fetchBaseQuery>
  > = (error) => {
    return {
      status: 'CUSTOM_ERROR',
      error: error.schemaName + ' failed validation',
      data: error.issues,
    }
  }

  const serializedSchemaError = {
    name: 'SchemaError',
    message: expect.any(String),
    stack: expect.any(String),
  } satisfies SerializedError

  const onSchemaFailureGlobal = vi.fn<SchemaFailureHandler>()
  const onSchemaFailureEndpoint = vi.fn<SchemaFailureHandler>()
  afterEach(() => {
    onSchemaFailureGlobal.mockClear()
    onSchemaFailureEndpoint.mockClear()
  })

  function expectFailureHandlersToHaveBeenCalled({
    schemaName,
    value,
    arg,
  }: {
    schemaName: `${SchemaType}Schema`
    value: unknown
    arg: unknown
  }) {
    for (const handler of [onSchemaFailureGlobal, onSchemaFailureEndpoint]) {
      expect(handler).toHaveBeenCalledOnce()
      const [namedError, info] = handler.mock.calls[0]
      expect(namedError).toBeInstanceOf(NamedSchemaError)
      expect(namedError.issues.length).toBeGreaterThan(0)
      expect(namedError.value).toEqual(value)
      expect(namedError.schemaName).toBe(schemaName)
      expect(info.endpoint).toBe('query')
      expect(info.type).toBe('query')
      expect(info.arg).toEqual(arg)
    }
  }

  interface SkipApiOptions {
    globalSkip?: boolean
    endpointSkip?: boolean
    useArray?: boolean
    globalCatch?: boolean
    endpointCatch?: boolean
  }

  const apiOptions = (
    type: SchemaType,
    { useArray, globalSkip, globalCatch }: SkipApiOptions = {},
  ) => ({
    onSchemaFailure: onSchemaFailureGlobal,
    skipSchemaValidation: useArray ? globalSkip && [type] : globalSkip,
    catchSchemaFailure: globalCatch ? schemaConverter : undefined,
  })

  const endpointOptions = (
    type: SchemaType,
    { useArray, endpointSkip, endpointCatch }: SkipApiOptions = {},
  ) => ({
    onSchemaFailure: onSchemaFailureEndpoint,
    skipSchemaValidation: useArray ? endpointSkip && [type] : endpointSkip,
    catchSchemaFailure: endpointCatch ? schemaConverter : undefined,
  })

  const skipCases: [string, SkipApiOptions][] = [
    ['globally', { globalSkip: true }],
    ['on the endpoint', { endpointSkip: true }],
    ['globally (array)', { globalSkip: true, useArray: true }],
    ['on the endpoint (array)', { endpointSkip: true, useArray: true }],
  ]

  describe('argSchema', () => {
    const makeApi = (opts?: SkipApiOptions) =>
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        ...apiOptions('arg', opts),
        endpoints: (build) => ({
          query: build.query<unknown, { id: number }>({
            query: ({ id }) => `/post/${id}`,
            argSchema: v.object({ id: v.number() }),
            ...endpointOptions('arg', opts),
          }),
        }),
      })
    test("can be used to validate the endpoint's arguments", async () => {
      const api = makeApi()

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })

      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate({ id: 1 }),
      )

      expect(result?.error).toBeUndefined()

      const invalidResult = await storeRef.store.dispatch(
        // @ts-expect-error
        api.endpoints.query.initiate({ id: '1' }),
      )

      expect(invalidResult?.error).toEqual(serializedSchemaError)
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'argSchema',
        value: { id: '1' },
        arg: { id: '1' },
      })
    })

    test.each(skipCases)('can be skipped %s', async (_, arg) => {
      const api = makeApi(arg)

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })

      const result = await storeRef.store.dispatch(
        // @ts-expect-error
        api.endpoints.query.initiate({ id: '1' }),
      )

      expect(result?.error).toBeUndefined()
    })
    // we only need to test this once
    test('endpoint overrides global skip', async () => {
      const api = makeApi({ globalSkip: true, endpointSkip: false })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })

      const result = await storeRef.store.dispatch(
        // @ts-expect-error
        api.endpoints.query.initiate({ id: '1' }),
      )

      expect(result?.error).toEqual(serializedSchemaError)
    })

    test('can be converted to a standard error object at global level', async () => {
      const api = makeApi({ globalCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })

      const result = await storeRef.store.dispatch(
        // @ts-expect-error
        api.endpoints.query.initiate({ id: '1' }),
      )

      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'argSchema failed validation',
        data: expect.any(Array),
      })

      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'argSchema',
        value: { id: '1' },
        arg: { id: '1' },
      })
    })
    test('can be converted to a standard error object at endpoint level', async () => {
      const api = makeApi({ endpointCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })

      const result = await storeRef.store.dispatch(
        // @ts-expect-error
        api.endpoints.query.initiate({ id: '1' }),
      )

      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'argSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'argSchema',
        value: { id: '1' },
        arg: { id: '1' },
      })
    })
  })
  describe('rawResponseSchema', () => {
    const makeApi = (opts?: SkipApiOptions) =>
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        ...apiOptions('rawResponse', opts),
        endpoints: (build) => ({
          query: build.query<{ success: boolean }, void>({
            query: () => '/success',
            rawResponseSchema: v.object({ value: v.literal('success!') }),
            ...endpointOptions('rawResponse', opts),
          }),
        }),
      })
    test("can be used to validate the endpoint's raw result", async () => {
      const api = makeApi()
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual(serializedSchemaError)
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'rawResponseSchema',
        value: { value: 'success' },
        arg: undefined,
      })
    })
    test.each(skipCases)('can be skipped %s', async (_, arg) => {
      const api = makeApi(arg)
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toBeUndefined()
    })
    test('can be skipped on the endpoint', async () => {
      const api = makeApi({ endpointSkip: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toBeUndefined()
    })
    test('can be converted to a standard error object at global level', async () => {
      const api = makeApi({ globalCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'rawResponseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'rawResponseSchema',
        value: { value: 'success' },
        arg: undefined,
      })
    })
    test('can be converted to a standard error object at endpoint level', async () => {
      const api = makeApi({ endpointCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'rawResponseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'rawResponseSchema',
        value: { value: 'success' },
        arg: undefined,
      })
    })
  })
  describe('responseSchema', () => {
    const makeApi = (opts?: SkipApiOptions) =>
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        ...apiOptions('response', opts),
        endpoints: (build) => ({
          query: build.query<{ success: boolean }, void>({
            query: () => '/success',
            transformResponse: () => ({ success: false }),
            responseSchema: v.object({ success: v.literal(true) }),
            ...endpointOptions('response', opts),
          }),
        }),
      })
    test("can be used to validate the endpoint's final result", async () => {
      const api = makeApi()
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual(serializedSchemaError)

      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'responseSchema',
        value: { success: false },
        arg: undefined,
      })
    })
    test.each(skipCases)('can be skipped %s', async (_, arg) => {
      const api = makeApi(arg)
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toBeUndefined()
    })
    test('can be converted to a standard error object at global level', async () => {
      const api = makeApi({ globalCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'responseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'responseSchema',
        value: { success: false },
        arg: undefined,
      })
    })
    test('can be converted to a standard error object at endpoint level', async () => {
      const api = makeApi({ endpointCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'responseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'responseSchema',
        value: { success: false },
        arg: undefined,
      })
    })
  })
  describe('rawErrorResponseSchema', () => {
    const makeApi = (opts?: SkipApiOptions) =>
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        ...apiOptions('rawErrorResponse', opts),
        endpoints: (build) => ({
          query: build.query<{ success: boolean }, void>({
            query: () => '/error',
            rawErrorResponseSchema: v.object({
              status: v.pipe(v.number(), v.minValue(400), v.maxValue(499)),
              data: v.unknown(),
            }),
            ...endpointOptions('rawErrorResponse', opts),
          }),
        }),
      })
    test("can be used to validate the endpoint's raw error result", async () => {
      const api = makeApi()
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual(serializedSchemaError)
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'rawErrorResponseSchema',
        value: { status: 500, data: { value: 'error' } },
        arg: undefined,
      })
    })
    test.each(skipCases)('can be skipped %s', async (_, arg) => {
      const api = makeApi(arg)
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).not.toEqual(serializedSchemaError)
    })
    test('can be converted to a standard error object at global level', async () => {
      const api = makeApi({ globalCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'rawErrorResponseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'rawErrorResponseSchema',
        value: { status: 500, data: { value: 'error' } },
        arg: undefined,
      })
    })
    test('can be converted to a standard error object at endpoint level', async () => {
      const api = makeApi({ endpointCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'rawErrorResponseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'rawErrorResponseSchema',
        value: { status: 500, data: { value: 'error' } },
        arg: undefined,
      })
    })
  })
  describe('errorResponseSchema', () => {
    const makeApi = (opts?: SkipApiOptions) =>
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        ...apiOptions('errorResponse', opts),
        endpoints: (build) => ({
          query: build.query<{ success: boolean }, void>({
            query: () => '/error',
            transformErrorResponse: (error): FetchBaseQueryError => ({
              status: 'CUSTOM_ERROR',
              data: error,
              error: 'whoops',
            }),
            errorResponseSchema: v.object({
              status: v.literal('CUSTOM_ERROR'),
              error: v.literal('oh no'),
              data: v.unknown(),
            }),
            ...endpointOptions('errorResponse', opts),
          }),
        }),
      })
    test("can be used to validate the endpoint's final error result", async () => {
      const api = makeApi()
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual(serializedSchemaError)
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'errorResponseSchema',
        value: {
          status: 'CUSTOM_ERROR',
          error: 'whoops',
          data: { status: 500, data: { value: 'error' } },
        },
        arg: undefined,
      })
    })
    test.each(skipCases)('can be skipped %s', async (_, arg) => {
      const api = makeApi(arg)
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).not.toEqual(serializedSchemaError)
    })
    test('can be converted to a standard error object at global level', async () => {
      const api = makeApi({ globalCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'errorResponseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'errorResponseSchema',
        value: {
          status: 'CUSTOM_ERROR',
          error: 'whoops',
          data: { status: 500, data: { value: 'error' } },
        },
        arg: undefined,
      })
    })
    test('can be converted to a standard error object at endpoint level', async () => {
      const api = makeApi({ endpointCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'errorResponseSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'errorResponseSchema',
        value: {
          status: 'CUSTOM_ERROR',
          error: 'whoops',
          data: { status: 500, data: { value: 'error' } },
        },
        arg: undefined,
      })
    })
  })
  describe('metaSchema', () => {
    const makeApi = (opts?: SkipApiOptions) =>
      createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
        ...apiOptions('meta', opts),
        endpoints: (build) => ({
          query: build.query<{ success: boolean }, void>({
            query: () => '/success',
            metaSchema: v.object({
              request: v.instance(Request),
              response: v.instance(Response),
              timestamp: v.number(),
            }),
            ...endpointOptions('meta', opts),
          }),
        }),
      })
    test("can be used to validate the endpoint's meta result", async () => {
      const api = makeApi()
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual(serializedSchemaError)
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'metaSchema',
        value: {
          request: expect.any(Request),
          response: expect.any(Response),
        },
        arg: undefined,
      })
    })
    test.each(skipCases)('can be skipped %s', async (_, arg) => {
      const api = makeApi(arg)
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toBeUndefined()
    })
    test('can be converted to a standard error object at global level', async () => {
      const api = makeApi({ globalCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'metaSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'metaSchema',
        value: {
          request: expect.any(Request),
          response: expect.any(Response),
        },
        arg: undefined,
      })
    })
    test('can be converted to a standard error object at endpoint level', async () => {
      const api = makeApi({ endpointCatch: true })
      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const result = await storeRef.store.dispatch(
        api.endpoints.query.initiate(),
      )
      expect(result?.error).toEqual({
        status: 'CUSTOM_ERROR',
        error: 'metaSchema failed validation',
        data: expect.any(Array),
      })
      expectFailureHandlersToHaveBeenCalled({
        schemaName: 'metaSchema',
        value: {
          request: expect.any(Request),
          response: expect.any(Response),
        },
        arg: undefined,
      })
    })
  })
})
