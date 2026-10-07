import { getEndpointDefinition } from '@internal/query/apiTypes'
import type {
  BaseQueryError,
  BaseQueryFn,
  BaseQueryMeta,
} from '../../baseQueryTypes'
import { isAnyQueryDefinition } from '../../endpointDefinitions'
import type { Recipe } from '../buildThunks'
import { isFulfilled, isPending, isRejected } from '../rtkImports'
import type {
  MutationBaseLifecycleApi,
  QueryBaseLifecycleApi,
} from './cacheLifecycle'
import type {
  ApiMiddlewareInternalHandler,
  InternalHandlerBuilder,
  PromiseConstructorWithKnownReason,
  PromiseWithKnownReason,
} from './types'

export type ReferenceQueryLifecycle = never

type QueryLifecyclePromises<ResultType, BaseQuery extends BaseQueryFn> = {
  /**
   * Promise that will resolve with the (transformed) query result.
   *
   * If the query fails, this promise will reject with the error.
   *
   * This allows you to `await` for the query to finish.
   *
   * If you don't interact with this promise, it will not throw.
   */
  queryFulfilled: PromiseWithKnownReason<
    {
      /**
       * The (transformed) query result.
       */
      data: ResultType
      /**
       * The `meta` returned by the `baseQuery`
       */
      meta: BaseQueryMeta<BaseQuery>
    },
    QueryFulfilledRejectionReason<BaseQuery>
  >
}

type QueryFulfilledRejectionReason<BaseQuery extends BaseQueryFn> =
  | {
      error: BaseQueryError<BaseQuery>
      /**
       * If this is `false`, that means this error was returned from the `baseQuery` or `queryFn` in a controlled manner.
       */
      isUnhandledError: false
      /**
       * The `meta` returned by the `baseQuery`
       */
      meta: BaseQueryMeta<BaseQuery>
    }
  | {
      error: unknown
      meta?: undefined
      /**
       * If this is `true`, that means that this error is the result of `baseQueryFn`, `queryFn`, `transformResponse` or `transformErrorResponse` throwing an error instead of handling it properly.
       * There can not be made any assumption about the shape of `error`.
       */
      isUnhandledError: true
    }

export type QueryLifecycleQueryExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
> = {
  /**
   * A function that is called when the individual query is started. The function is called with a lifecycle api object containing properties such as `queryFulfilled`, allowing code to be run when a query is started, when it succeeds, and when it fails (i.e. throughout the lifecycle of an individual query/mutation call).
   *
   * Can be used to perform side-effects throughout the lifecycle of the query.
   *
   * @example
   * ```ts
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
   * import { messageCreated } from './notificationsSlice
   * export interface Post {
   *   id: number
   *   name: string
   * }
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({
   *     baseUrl: '/',
   *   }),
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, number>({
   *       query: (id) => `post/${id}`,
   *       async onQueryStarted(id, { dispatch, queryFulfilled }) {
   *         // `onStart` side-effect
   *         dispatch(messageCreated('Fetching posts...'))
   *         try {
   *           const { data } = await queryFulfilled
   *           // `onSuccess` side-effect
   *           dispatch(messageCreated('Posts received!'))
   *         } catch (err) {
   *           // `onError` side-effect
   *           dispatch(messageCreated('Error fetching posts!'))
   *         }
   *       }
   *     }),
   *   }),
   * })
   * ```
   */
  onQueryStarted?(
    queryArgument: QueryArg,
    queryLifeCycleApi: QueryLifecycleApi<
      QueryArg,
      BaseQuery,
      ResultType,
      ReducerPath
    >,
  ): Promise<void> | void
}

export type QueryLifecycleInfiniteQueryExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
> = QueryLifecycleQueryExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery,
  ReducerPath
>

export type QueryLifecycleMutationExtraOptions<
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
> = {
  /**
   * A function that is called when the individual mutation is started. The function is called with a lifecycle api object containing properties such as `queryFulfilled`, allowing code to be run when a query is started, when it succeeds, and when it fails (i.e. throughout the lifecycle of an individual query/mutation call).
   *
   * Can be used for `optimistic updates`.
   *
   * @example
   *
   * ```ts
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
   * export interface Post {
   *   id: number
   *   name: string
   * }
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({
   *     baseUrl: '/',
   *   }),
   *   tagTypes: ['Post'],
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, number>({
   *       query: (id) => `post/${id}`,
   *       providesTags: ['Post'],
   *     }),
   *     updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
   *       query: ({ id, ...patch }) => ({
   *         url: `post/${id}`,
   *         method: 'PATCH',
   *         body: patch,
   *       }),
   *       invalidatesTags: ['Post'],
   *       async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
   *         const patchResult = dispatch(
   *           api.util.updateQueryData('getPost', id, (draft) => {
   *             Object.assign(draft, patch)
   *           })
   *         )
   *         try {
   *           await queryFulfilled
   *         } catch {
   *           patchResult.undo()
   *         }
   *       },
   *     }),
   *   }),
   * })
   * ```
   */
  onQueryStarted?(
    queryArgument: QueryArg,
    mutationLifeCycleApi: MutationLifecycleApi<
      QueryArg,
      BaseQuery,
      ResultType,
      ReducerPath
    >,
  ): Promise<void> | void
}

export interface QueryLifecycleApi<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  ReducerPath extends string = string,
> extends QueryBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>,
    QueryLifecyclePromises<ResultType, BaseQuery> {}

export type MutationLifecycleApi<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  ReducerPath extends string = string,
> = MutationBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath> &
  QueryLifecyclePromises<ResultType, BaseQuery>

/**
 * Provides a way to define a strongly-typed version of
 * {@linkcode QueryLifecycleQueryExtraOptions.onQueryStarted | onQueryStarted}
 * for a specific query.
 *
 * @example
 * <caption>#### __Create and reuse a strongly-typed `onQueryStarted` function__</caption>
 *
 * ```ts
 * import type { TypedQueryOnQueryStarted } from '@reduxjs/toolkit/query'
 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
 *
 * type Post = {
 *   id: number
 *   title: string
 *   userId: number
 * }
 *
 * type PostsApiResponse = {
 *   posts: Post[]
 *   total: number
 *   skip: number
 *   limit: number
 * }
 *
 * type QueryArgument = number | undefined
 *
 * type BaseQueryFunction = ReturnType<typeof fetchBaseQuery>
 *
 * const baseApiSlice = createApi({
 *   baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
 *   reducerPath: 'postsApi',
 *   tagTypes: ['Posts'],
 *   endpoints: (build) => ({
 *     getPosts: build.query<PostsApiResponse, void>({
 *       query: () => `/posts`,
 *     }),
 *
 *     getPostById: build.query<Post, QueryArgument>({
 *       query: (postId) => `/posts/${postId}`,
 *     }),
 *   }),
 * })
 *
 * const updatePostOnFulfilled: TypedQueryOnQueryStarted<
 *   PostsApiResponse,
 *   QueryArgument,
 *   BaseQueryFunction,
 *   'postsApi'
 * > = async (queryArgument, { dispatch, queryFulfilled }) => {
 *   const result = await queryFulfilled
 *
 *   const { posts } = result.data
 *
 *   // Pre-fill the individual post entries with the results
 *   // from the list endpoint query
 *   dispatch(
 *     baseApiSlice.util.upsertQueryEntries(
 *       posts.map((post) => ({
 *         endpointName: 'getPostById',
 *         arg: post.id,
 *         value: post,
 *       })),
 *     ),
 *   )
 * }
 *
 * export const extendedApiSlice = baseApiSlice.injectEndpoints({
 *   endpoints: (build) => ({
 *     getPostsByUserId: build.query<PostsApiResponse, QueryArgument>({
 *       query: (userId) => `/posts/user/${userId}`,
 *
 *       onQueryStarted: updatePostOnFulfilled,
 *     }),
 *   }),
 * })
 * ```
 *
 * @template ResultType - The type of the result `data` returned by the query.
 * @template QueryArgumentType - The type of the argument passed into the query.
 * @template BaseQueryFunctionType - The type of the base query function being used.
 * @template ReducerPath - The type representing the `reducerPath` for the API slice.
 *
 * @since 2.4.0
 * @public
 */
export type TypedQueryOnQueryStarted<
  ResultType,
  QueryArgumentType,
  BaseQueryFunctionType extends BaseQueryFn,
  ReducerPath extends string = string,
> = QueryLifecycleQueryExtraOptions<
  ResultType,
  QueryArgumentType,
  BaseQueryFunctionType,
  ReducerPath
>['onQueryStarted']

/**
 * Provides a way to define a strongly-typed version of
 * {@linkcode QueryLifecycleMutationExtraOptions.onQueryStarted | onQueryStarted}
 * for a specific mutation.
 *
 * @example
 * <caption>#### __Create and reuse a strongly-typed `onQueryStarted` function__</caption>
 *
 * ```ts
 * import type { TypedMutationOnQueryStarted } from '@reduxjs/toolkit/query'
 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
 *
 * type Post = {
 *   id: number
 *   title: string
 *   userId: number
 * }
 *
 * type PostsApiResponse = {
 *   posts: Post[]
 *   total: number
 *   skip: number
 *   limit: number
 * }
 *
 * type QueryArgument = Pick<Post, 'id'> & Partial<Post>
 *
 * type BaseQueryFunction = ReturnType<typeof fetchBaseQuery>
 *
 * const baseApiSlice = createApi({
 *   baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
 *   reducerPath: 'postsApi',
 *   tagTypes: ['Posts'],
 *   endpoints: (build) => ({
 *     getPosts: build.query<PostsApiResponse, void>({
 *       query: () => `/posts`,
 *     }),
 *
 *     getPostById: build.query<Post, number>({
 *       query: (postId) => `/posts/${postId}`,
 *     }),
 *   }),
 * })
 *
 * const updatePostOnFulfilled: TypedMutationOnQueryStarted<
 *   Post,
 *   QueryArgument,
 *   BaseQueryFunction,
 *   'postsApi'
 * > = async ({ id, ...patch }, { dispatch, queryFulfilled }) => {
 *   const patchCollection = dispatch(
 *     baseApiSlice.util.updateQueryData('getPostById', id, (draftPost) => {
 *       Object.assign(draftPost, patch)
 *     }),
 *   )
 *
 *   try {
 *     await queryFulfilled
 *   } catch {
 *     patchCollection.undo()
 *   }
 * }
 *
 * export const extendedApiSlice = baseApiSlice.injectEndpoints({
 *   endpoints: (build) => ({
 *     addPost: build.mutation<Post, Omit<QueryArgument, 'id'>>({
 *       query: (body) => ({
 *         url: `posts/add`,
 *         method: 'POST',
 *         body,
 *       }),
 *
 *       onQueryStarted: updatePostOnFulfilled,
 *     }),
 *
 *     updatePost: build.mutation<Post, QueryArgument>({
 *       query: ({ id, ...patch }) => ({
 *         url: `post/${id}`,
 *         method: 'PATCH',
 *         body: patch,
 *       }),
 *
 *       onQueryStarted: updatePostOnFulfilled,
 *     }),
 *   }),
 * })
 * ```
 *
 * @template ResultType - The type of the result `data` returned by the query.
 * @template QueryArgumentType - The type of the argument passed into the query.
 * @template BaseQueryFunctionType - The type of the base query function being used.
 * @template ReducerPath - The type representing the `reducerPath` for the API slice.
 *
 * @since 2.4.0
 * @public
 */
export type TypedMutationOnQueryStarted<
  ResultType,
  QueryArgumentType,
  BaseQueryFunctionType extends BaseQueryFn,
  ReducerPath extends string = string,
> = QueryLifecycleMutationExtraOptions<
  ResultType,
  QueryArgumentType,
  BaseQueryFunctionType,
  ReducerPath
>['onQueryStarted']

export const buildQueryLifecycleHandler: InternalHandlerBuilder = ({
  api,
  context,
  queryThunk,
  mutationThunk,
}) => {
  const isPendingThunk = isPending(queryThunk, mutationThunk)
  const isRejectedThunk = isRejected(queryThunk, mutationThunk)
  const isFullfilledThunk = isFulfilled(queryThunk, mutationThunk)

  type CacheLifecycle = {
    resolve(value: { data: unknown; meta: unknown }): unknown
    reject(value: QueryFulfilledRejectionReason<any>): unknown
  }
  const lifecycleMap: Record<string, CacheLifecycle> = {}

  const handler: ApiMiddlewareInternalHandler = (action, mwApi) => {
    if (isPendingThunk(action)) {
      const {
        requestId,
        arg: { endpointName, originalArgs },
      } = action.meta
      const endpointDefinition = getEndpointDefinition(context, endpointName)
      const onQueryStarted = endpointDefinition?.onQueryStarted
      if (onQueryStarted) {
        const lifecycle = {} as CacheLifecycle
        const queryFulfilled =
          new (Promise as PromiseConstructorWithKnownReason)<
            { data: unknown; meta: unknown },
            QueryFulfilledRejectionReason<any>
          >((resolve, reject) => {
            lifecycle.resolve = resolve
            lifecycle.reject = reject
          })
        // prevent uncaught promise rejections from happening.
        // if the original promise is used in any way, that will create a new promise that will throw again
        queryFulfilled.catch(() => {})
        lifecycleMap[requestId] = lifecycle
        const selector = (api.endpoints[endpointName] as any).select(
          isAnyQueryDefinition(endpointDefinition) ? originalArgs : requestId,
        )

        const extra = mwApi.dispatch((_, __, extra) => extra)
        const lifecycleApi = {
          ...mwApi,
          getCacheEntry: () => selector(mwApi.getState()),
          requestId,
          extra,
          updateCachedData: (isAnyQueryDefinition(endpointDefinition)
            ? (updateRecipe: Recipe<any>) =>
                mwApi.dispatch(
                  api.util.updateQueryData(
                    endpointName as never,
                    originalArgs as never,
                    updateRecipe,
                  ),
                )
            : undefined) as any,
          queryFulfilled,
        }
        onQueryStarted(originalArgs, lifecycleApi as any)
      }
    } else if (isFullfilledThunk(action)) {
      const { requestId, baseQueryMeta } = action.meta
      lifecycleMap[requestId]?.resolve({
        data: action.payload,
        meta: baseQueryMeta,
      })
      delete lifecycleMap[requestId]
    } else if (isRejectedThunk(action)) {
      const { requestId, rejectedWithValue, baseQueryMeta } = action.meta
      lifecycleMap[requestId]?.reject({
        error: action.payload ?? action.error,
        isUnhandledError: !rejectedWithValue,
        meta: baseQueryMeta as any,
      })
      delete lifecycleMap[requestId]
    }
  }

  return handler
}
