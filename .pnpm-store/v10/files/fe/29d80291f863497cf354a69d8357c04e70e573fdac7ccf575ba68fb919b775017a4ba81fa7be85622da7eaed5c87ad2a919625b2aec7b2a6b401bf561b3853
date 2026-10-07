import type { PatchCollection, Recipe } from '@internal/query/core/buildThunks'
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import type {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  RootState,
  TypedMutationOnQueryStarted,
  TypedQueryOnQueryStarted,
} from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: () => ({}),
})

describe('type tests', () => {
  test(`mutation: onStart and onSuccess`, async () => {
    const extended = api.injectEndpoints({
      overrideExisting: true,
      endpoints: (build) => ({
        injected: build.mutation<number, string>({
          query: () => '/success',
          async onQueryStarted(arg, { queryFulfilled }) {
            // awaiting without catching like this would result in an `unhandledRejection` exception if there was an error
            // unfortunately we cannot test for that in jest.
            const result = await queryFulfilled

            expectTypeOf(result).toMatchTypeOf<{
              data: number
              meta?: FetchBaseQueryMeta
            }>()
          },
        }),
      }),
    })
  })

  test('query types', () => {
    const extended = api.injectEndpoints({
      overrideExisting: true,
      endpoints: (build) => ({
        injected: build.query<number, string>({
          query: () => '/success',
          async onQueryStarted(arg, { queryFulfilled }) {
            queryFulfilled.then(
              (result) => {
                expectTypeOf(result).toMatchTypeOf<{
                  data: number
                  meta?: FetchBaseQueryMeta
                }>()
              },
              (reason) => {
                if (reason.isUnhandledError) {
                  expectTypeOf(reason).toEqualTypeOf<{
                    error: unknown
                    meta?: undefined
                    isUnhandledError: true
                  }>()
                } else {
                  expectTypeOf(reason).toEqualTypeOf<{
                    error: FetchBaseQueryError
                    isUnhandledError: false
                    meta: FetchBaseQueryMeta | undefined
                  }>()
                }
              },
            )

            queryFulfilled.catch((reason) => {
              if (reason.isUnhandledError) {
                expectTypeOf(reason).toEqualTypeOf<{
                  error: unknown
                  meta?: undefined
                  isUnhandledError: true
                }>()
              } else {
                expectTypeOf(reason).toEqualTypeOf<{
                  error: FetchBaseQueryError
                  isUnhandledError: false
                  meta: FetchBaseQueryMeta | undefined
                }>()
              }
            })

            const result = await queryFulfilled

            expectTypeOf(result).toMatchTypeOf<{
              data: number
              meta?: FetchBaseQueryMeta
            }>()
          },
        }),
      }),
    })
  })

  test('mutation types', () => {
    const extended = api.injectEndpoints({
      overrideExisting: true,
      endpoints: (build) => ({
        injected: build.query<number, string>({
          query: () => '/success',
          async onQueryStarted(arg, { queryFulfilled }) {
            queryFulfilled.then(
              (result) => {
                expectTypeOf(result).toMatchTypeOf<{
                  data: number
                  meta?: FetchBaseQueryMeta
                }>()
              },
              (reason) => {
                if (reason.isUnhandledError) {
                  expectTypeOf(reason).toEqualTypeOf<{
                    error: unknown
                    meta?: undefined
                    isUnhandledError: true
                  }>()
                } else {
                  expectTypeOf(reason).toEqualTypeOf<{
                    error: FetchBaseQueryError
                    isUnhandledError: false
                    meta: FetchBaseQueryMeta | undefined
                  }>()
                }
              },
            )

            queryFulfilled.catch((reason) => {
              if (reason.isUnhandledError) {
                expectTypeOf(reason).toEqualTypeOf<{
                  error: unknown
                  meta?: undefined
                  isUnhandledError: true
                }>()
              } else {
                expectTypeOf(reason).toEqualTypeOf<{
                  error: FetchBaseQueryError
                  isUnhandledError: false
                  meta: FetchBaseQueryMeta | undefined
                }>()
              }
            })

            const result = await queryFulfilled

            expectTypeOf(result).toMatchTypeOf<{
              data: number
              meta?: FetchBaseQueryMeta
            }>()
          },
        }),
      }),
    })
  })

  describe('typed `onQueryStarted` function', () => {
    test('TypedQueryOnQueryStarted creates a pre-typed version of onQueryStarted', () => {
      type Post = {
        id: number
        title: string
        userId: number
      }

      type PostsApiResponse = {
        posts: Post[]
        total: number
        skip: number
        limit: number
      }

      type QueryArgument = number | undefined

      type BaseQueryFunction = ReturnType<typeof fetchBaseQuery>

      const baseApiSlice = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
        reducerPath: 'postsApi',
        tagTypes: ['Posts'],
        endpoints: (builder) => ({
          getPosts: builder.query<PostsApiResponse, void>({
            query: () => `/posts`,
          }),

          getPostById: builder.query<Post, QueryArgument>({
            query: (postId) => `/posts/${postId}`,
          }),
        }),
      })

      const updatePostOnFulfilled: TypedQueryOnQueryStarted<
        PostsApiResponse,
        QueryArgument,
        BaseQueryFunction,
        'postsApi'
      > = async (queryArgument, queryLifeCycleApi) => {
        const {
          dispatch,
          extra,
          getCacheEntry,
          getState,
          queryFulfilled,
          requestId,
          updateCachedData,
        } = queryLifeCycleApi

        expectTypeOf(queryArgument).toEqualTypeOf<QueryArgument>()

        expectTypeOf(dispatch).toEqualTypeOf<
          ThunkDispatch<any, any, UnknownAction>
        >()

        expectTypeOf(extra).toBeUnknown()

        expectTypeOf(getState).toEqualTypeOf<
          () => RootState<any, any, 'postsApi'>
        >()

        expectTypeOf(requestId).toBeString()

        expectTypeOf(getCacheEntry).toBeFunction()

        expectTypeOf(updateCachedData).toEqualTypeOf<
          (updateRecipe: Recipe<PostsApiResponse>) => PatchCollection
        >()

        expectTypeOf(queryFulfilled).resolves.toEqualTypeOf<{
          data: PostsApiResponse
          meta: FetchBaseQueryMeta | undefined
        }>()

        const result = await queryFulfilled

        const { posts } = result.data

        dispatch(
          baseApiSlice.util.upsertQueryEntries(
            posts.map((post) => ({
              // Without `as const` this will result in a TS error in TS 4.7.
              endpointName: 'getPostById' as const,
              arg: post.id,
              value: post,
            })),
          ),
        )
      }

      const extendedApiSlice = baseApiSlice.injectEndpoints({
        endpoints: (builder) => ({
          getPostsByUserId: builder.query<PostsApiResponse, QueryArgument>({
            query: (userId) => `/posts/user/${userId}`,

            onQueryStarted: updatePostOnFulfilled,
          }),
        }),
      })
    })

    test('TypedMutationOnQueryStarted creates a pre-typed version of onQueryStarted', () => {
      type Post = {
        id: number
        title: string
        userId: number
      }

      type PostsApiResponse = {
        posts: Post[]
        total: number
        skip: number
        limit: number
      }

      type QueryArgument = Pick<Post, 'id'> & Partial<Post>

      type BaseQueryFunction = ReturnType<typeof fetchBaseQuery>

      const baseApiSlice = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
        reducerPath: 'postsApi',
        tagTypes: ['Posts'],
        endpoints: (builder) => ({
          getPosts: builder.query<PostsApiResponse, void>({
            query: () => `/posts`,
          }),

          getPostById: builder.query<Post, number>({
            query: (postId) => `/posts/${postId}`,
          }),
        }),
      })

      const updatePostOnFulfilled: TypedMutationOnQueryStarted<
        Post,
        QueryArgument,
        BaseQueryFunction,
        'postsApi'
      > = async (queryArgument, mutationLifeCycleApi) => {
        const { id, ...patch } = queryArgument
        const {
          dispatch,
          extra,
          getCacheEntry,
          getState,
          queryFulfilled,
          requestId,
        } = mutationLifeCycleApi

        const patchCollection = dispatch(
          baseApiSlice.util.updateQueryData('getPostById', id, (draftPost) => {
            Object.assign(draftPost, patch)
          }),
        )

        expectTypeOf(queryFulfilled).resolves.toEqualTypeOf<{
          data: Post
          meta: FetchBaseQueryMeta | undefined
        }>()

        expectTypeOf(queryArgument).toEqualTypeOf<QueryArgument>()

        expectTypeOf(dispatch).toEqualTypeOf<
          ThunkDispatch<any, any, UnknownAction>
        >()

        expectTypeOf(extra).toBeUnknown()

        expectTypeOf(getState).toEqualTypeOf<
          () => RootState<any, any, 'postsApi'>
        >()

        expectTypeOf(requestId).toBeString()

        expectTypeOf(getCacheEntry).toBeFunction()

        expectTypeOf(mutationLifeCycleApi).not.toHaveProperty(
          'updateCachedData',
        )

        try {
          await queryFulfilled
        } catch {
          patchCollection.undo()
        }
      }

      const extendedApiSlice = baseApiSlice.injectEndpoints({
        endpoints: (builder) => ({
          addPost: builder.mutation<Post, Omit<QueryArgument, 'id'>>({
            query: (body) => ({
              url: `posts/add`,
              method: 'POST',
              body,
            }),

            onQueryStarted: updatePostOnFulfilled,
          }),

          updatePost: builder.mutation<Post, QueryArgument>({
            query: ({ id, ...patch }) => ({
              url: `post/${id}`,
              method: 'PATCH',
              body: patch,
            }),

            onQueryStarted: updatePostOnFulfilled,
          }),
        }),
      })
    })
  })
})
