import { setupApiStore } from '@internal/tests/utils/helpers'
import type { EntityState, SerializedError } from '@reduxjs/toolkit'
import { configureStore, createEntityAdapter } from '@reduxjs/toolkit'
import type {
  DefinitionsFromApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  OverrideResultType,
  QueryDefinition,
  TagDescription,
  TagTypesFromApi,
} from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import * as v from 'valibot'
import type { Post } from './mocks/handlers'

describe('type tests', () => {
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

    expectTypeOf(api.reducerPath).toEqualTypeOf<'api'>()

    expectTypeOf(api.util.invalidateTags)
      .parameter(0)
      .toEqualTypeOf<(null | undefined | TagDescription<never>)[]>()
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
              expectTypeOf(x).toEqualTypeOf<'Arg'>()

              return 'From'
            },
            transformResponse(r) {
              expectTypeOf(r).toEqualTypeOf<'To'>()

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

            expectTypeOf(query).toMatchTypeOf<
              QueryDefinition<'Arg', any, any, 'RetVal'>
            >()

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
              expectTypeOf(x).toEqualTypeOf<'Arg'>()

              return 'From'
            },
            transformResponse(r) {
              expectTypeOf(r).toEqualTypeOf<'To'>()

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

            expectTypeOf(query).toMatchTypeOf<
              MutationDefinition<'Arg', any, any, 'RetVal'>
            >()

            return query
          })(),
        }),
      })
    })

    describe('enhancing endpoint definitions', () => {
      const baseQuery = (x: string) => ({ data: 'success' })

      function getNewApi() {
        return createApi({
          baseQuery,
          tagTypes: ['old'],
          endpoints: (build) => ({
            query1: build.query<'out1', 'in1'>({ query: (id) => `${id}` }),
            query2: build.query<'out2', 'in2'>({ query: (id) => `${id}` }),
            mutation1: build.mutation<'out1', 'in1'>({
              query: (id) => `${id}`,
            }),
            mutation2: build.mutation<'out2', 'in2'>({
              query: (id) => `${id}`,
            }),
          }),
        })
      }

      const api1 = getNewApi()

      test('warn on wrong tagType', () => {
        const storeRef = setupApiStore(api1, undefined, {
          withoutTestLifecycles: true,
        })

        api1.enhanceEndpoints({
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

        const enhanced = api1.enhanceEndpoints({
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

        storeRef.store.dispatch(api1.endpoints.query1.initiate('in1'))

        storeRef.store.dispatch(api1.endpoints.query2.initiate('in2'))

        enhanced.enhanceEndpoints({
          endpoints: {
            query1: {
              // returned `enhanced` api contains "new" entityType
              providesTags: ['new'],
            },
            query2: {
              // @ts-expect-error
              providesTags: ['missing'],
            },
          },
        })
      })

      test('modify', () => {
        const storeRef = setupApiStore(api1, undefined, {
          withoutTestLifecycles: true,
        })

        api1.enhanceEndpoints({
          endpoints: {
            query1: {
              query: (x) => {
                expectTypeOf(x).toEqualTypeOf<'in1'>()

                return 'modified1'
              },
            },
            query2(definition) {
              definition.query = (x) => {
                expectTypeOf(x).toEqualTypeOf<'in2'>()

                return 'modified2'
              }
            },
            mutation1: {
              query: (x) => {
                expectTypeOf(x).toEqualTypeOf<'in1'>()

                return 'modified1'
              },
            },
            mutation2(definition) {
              definition.query = (x) => {
                expectTypeOf(x).toEqualTypeOf<'in2'>()

                return 'modified2'
              }
            },
            // @ts-expect-error
            nonExisting: {},
          },
        })

        storeRef.store.dispatch(api1.endpoints.query1.initiate('in1'))
        storeRef.store.dispatch(api1.endpoints.query2.initiate('in2'))
        storeRef.store.dispatch(api1.endpoints.mutation1.initiate('in1'))
        storeRef.store.dispatch(api1.endpoints.mutation2.initiate('in2'))
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

        type Definitions = DefinitionsFromApi<typeof api1>

        type TagTypes = TagTypesFromApi<typeof api1>

        type Q1Definition = OverrideResultType<
          Definitions['query1'],
          Transformed
        >

        type M1Definition = OverrideResultType<
          Definitions['mutation1'],
          Transformed
        >

        type UpdatedDefinitions = Omit<Definitions, 'query1' | 'mutation1'> & {
          query1: Q1Definition
          mutation1: M1Definition
        }

        const enhancedApi = baseApi.enhanceEndpoints<
          TagTypes,
          UpdatedDefinitions
        >({
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

        expectTypeOf(queryResponse.data).toMatchTypeOf<
          Transformed | undefined
        >()

        const mutationResponse = await storeRef.store.dispatch(
          enhancedApi.endpoints.mutation1.initiate(),
        )

        expectTypeOf(mutationResponse).toMatchTypeOf<
          | { data: Transformed }
          | { error: FetchBaseQueryError | SerializedError }
        >()
      })
    })
    describe('endpoint schemas', () => {
      const argSchema = v.object({ id: v.number() })
      const postSchema = v.object({
        id: v.number(),
        title: v.string(),
        body: v.string(),
      }) satisfies v.GenericSchema<Post>
      const errorResponseSchema = v.object({
        status: v.number(),
        data: v.unknown(),
      }) satisfies v.GenericSchema<FetchBaseQueryError>
      const metaSchema = v.object({
        request: v.instance(Request),
        response: v.optional(v.instance(Response)),
      }) satisfies v.GenericSchema<FetchBaseQueryMeta>
      test('schemas must match', () => {
        createApi({
          baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
          endpoints: (build) => ({
            query: build.query<Post, { id: number }>({
              query: ({ id }) => `/post/${id}`,
              argSchema,
              responseSchema: postSchema,
              errorResponseSchema,
              metaSchema,
            }),
            bothMismatch: build.query<Post, { id: number }>({
              query: ({ id }) => `/post/${id}`,
              // @ts-expect-error wrong schema
              argSchema: v.object({ id: v.string() }),
              // @ts-expect-error wrong schema
              responseSchema: v.object({ id: v.string() }),
              // @ts-expect-error wrong schema
              errorResponseSchema: v.object({ status: v.string() }),
              // @ts-expect-error wrong schema
              metaSchema: v.object({ request: v.string() }),
            }),
            inputMismatch: build.query<Post, { id: number }>({
              query: ({ id }) => `/post/${id}`,
              // @ts-expect-error can't expect different input
              argSchema: v.object({
                id: v.pipe(v.string(), v.transform(Number), v.number()),
              }),
              // @ts-expect-error can't expect different input
              responseSchema: v.object({
                ...postSchema.entries,
                id: v.pipe(v.string(), v.transform(Number)),
              }) satisfies v.GenericSchema<any, Post>,
              // @ts-expect-error can't expect different input
              errorResponseSchema: v.object({
                ...errorResponseSchema.entries,
                status: v.pipe(v.string(), v.transform(Number)),
              }) satisfies v.GenericSchema<any, FetchBaseQueryError>,
              // @ts-expect-error can't expect different input
              metaSchema: v.object({
                ...metaSchema.entries,
                request: v.pipe(
                  v.string(),
                  v.transform((url) => new Request(url)),
                ),
              }) satisfies v.GenericSchema<any, FetchBaseQueryMeta>,
            }),
            outputMismatch: build.query<Post, { id: number }>({
              query: ({ id }) => `/post/${id}`,
              // @ts-expect-error can't provide different output
              argSchema: v.object({
                id: v.pipe(v.number(), v.transform(String)),
              }),
              // @ts-expect-error can't provide different output
              responseSchema: v.object({
                ...postSchema.entries,
                id: v.pipe(v.number(), v.transform(String)),
              }) satisfies v.GenericSchema<Post, any>,
              // @ts-expect-error can't provide different output
              errorResponseSchema: v.object({
                ...errorResponseSchema.entries,
                status: v.pipe(v.number(), v.transform(String)),
              }) satisfies v.GenericSchema<FetchBaseQueryError, any>,
              // @ts-expect-error can't provide different output
              metaSchema: v.object({
                ...metaSchema.entries,
                request: v.pipe(
                  v.instance(Request),
                  v.transform((r) => r.url),
                ),
              }) satisfies v.GenericSchema<FetchBaseQueryMeta, any>,
            }),
          }),
        })
      })
      test('schemas as a source of inference', () => {
        const postAdapter = createEntityAdapter<Post>()
        const api = createApi({
          baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
          endpoints: (build) => ({
            query: build.query({
              query: ({ id }: { id: number }) => `/post/${id}`,
              responseSchema: postSchema,
            }),
            query2: build.query({
              query: (arg) => {
                expectTypeOf(arg).toEqualTypeOf<{ id: number }>()
                return `/post/${arg.id}`
              },
              argSchema,
              responseSchema: postSchema,
            }),
            query3: build.query({
              query: (_arg: void) => `/posts`,
              rawResponseSchema: v.array(postSchema),
              transformResponse: (posts) => {
                expectTypeOf(posts).toEqualTypeOf<Post[]>()
                return postAdapter.getInitialState(undefined, posts)
              },
            }),
          }),
        })

        expectTypeOf(api.endpoints.query.Types.QueryArg).toEqualTypeOf<{
          id: number
        }>()
        expectTypeOf(api.endpoints.query.Types.ResultType).toEqualTypeOf<Post>()
        expectTypeOf(api.endpoints.query.Types.RawResultType).toBeAny()

        expectTypeOf(api.endpoints.query2.Types.QueryArg).toEqualTypeOf<{
          id: number
        }>()
        expectTypeOf(
          api.endpoints.query2.Types.ResultType,
        ).toEqualTypeOf<Post>()
        expectTypeOf(api.endpoints.query2.Types.RawResultType).toBeAny()

        expectTypeOf(api.endpoints.query3.Types.QueryArg).toEqualTypeOf<void>()
        expectTypeOf(api.endpoints.query3.Types.ResultType).toEqualTypeOf<
          EntityState<Post, Post['id']>
        >()
        expectTypeOf(api.endpoints.query3.Types.RawResultType).toEqualTypeOf<
          Post[]
        >()
      })
    })
  })
})
