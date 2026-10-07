import type { Api } from '@reduxjs/toolkit/query'
import type { StandardSchemaV1 } from '@standard-schema/spec'
import type {
  BaseQueryApi,
  BaseQueryArg,
  BaseQueryError,
  BaseQueryExtraOptions,
  BaseQueryFn,
  BaseQueryMeta,
  BaseQueryResult,
  QueryReturnValue,
} from './baseQueryTypes'
import type { CacheCollectionQueryExtraOptions } from './core/buildMiddleware/cacheCollection'
import type {
  CacheLifecycleInfiniteQueryExtraOptions,
  CacheLifecycleMutationExtraOptions,
  CacheLifecycleQueryExtraOptions,
} from './core/buildMiddleware/cacheLifecycle'
import type {
  QueryLifecycleInfiniteQueryExtraOptions,
  QueryLifecycleMutationExtraOptions,
  QueryLifecycleQueryExtraOptions,
} from './core/buildMiddleware/queryLifecycle'
import type {
  InfiniteData,
  InfiniteQueryConfigOptions,
  QuerySubState,
  RootState,
} from './core/index'
import type { SerializeQueryArgs } from './defaultSerializeQueryArgs'
import type { NEVER } from './fakeBaseQuery'
import type {
  CastAny,
  HasRequiredProps,
  MaybePromise,
  NonUndefined,
  OmitFromUnion,
  UnwrapPromise,
} from './tsHelpers'
import { isNotNullish } from './utils'
import type { NamedSchemaError } from './standardSchema'
import { filterMap } from './utils/filterMap'

const rawResultType = /* @__PURE__ */ Symbol()
const resultType = /* @__PURE__ */ Symbol()
const baseQuery = /* @__PURE__ */ Symbol()

export interface SchemaFailureInfo {
  endpoint: string
  arg: any
  type: 'query' | 'mutation'
  queryCacheKey?: string
}

export type SchemaFailureHandler = (
  error: NamedSchemaError,
  info: SchemaFailureInfo,
) => void

export type SchemaFailureConverter<BaseQuery extends BaseQueryFn> = (
  error: NamedSchemaError,
  info: SchemaFailureInfo,
) => BaseQueryError<BaseQuery>

export type EndpointDefinitionWithQuery<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  RawResultType extends BaseQueryResult<BaseQuery>,
> = {
  /**
   * `query` can be a function that returns either a `string` or an `object` which is passed to your `baseQuery`. If you are using [fetchBaseQuery](./fetchBaseQuery), this can return either a `string` or an `object` of properties in `FetchArgs`. If you use your own custom [`baseQuery`](../../rtk-query/usage/customizing-queries), you can customize this behavior to your liking.
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="query example"
   *
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   * type PostsResponse = Post[]
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   tagTypes: ['Post'],
   *   endpoints: (build) => ({
   *     getPosts: build.query<PostsResponse, void>({
   *       // highlight-start
   *       query: () => 'posts',
   *       // highlight-end
   *     }),
   *     addPost: build.mutation<Post, Partial<Post>>({
   *      // highlight-start
   *      query: (body) => ({
   *        url: `posts`,
   *        method: 'POST',
   *        body,
   *      }),
   *      // highlight-end
   *      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
   *    }),
   *   })
   * })
   * ```
   */
  query(arg: QueryArg): BaseQueryArg<BaseQuery>
  queryFn?: never
  /**
   * A function to manipulate the data returned by a query or mutation.
   */
  transformResponse?(
    baseQueryReturnValue: RawResultType,
    meta: BaseQueryMeta<BaseQuery>,
    arg: QueryArg,
  ): ResultType | Promise<ResultType>
  /**
   * A function to manipulate the data returned by a failed query or mutation.
   */
  transformErrorResponse?(
    baseQueryReturnValue: BaseQueryError<BaseQuery>,
    meta: BaseQueryMeta<BaseQuery>,
    arg: QueryArg,
  ): unknown

  /**
   * A schema for the result *before* it's passed to `transformResponse`.
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   *
   * const postSchema = v.object({ id: v.number(), name: v.string() })
   * type Post = v.InferOutput<typeof postSchema>
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPostName: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       rawResponseSchema: postSchema,
   *       transformResponse: (post) => post.name,
   *     }),
   *   })
   * })
   * ```
   */
  rawResponseSchema?: StandardSchemaV1<RawResultType>

  /**
   * A schema for the error object returned by the `query` or `queryFn`, *before* it's passed to `transformErrorResponse`.
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   * import {customBaseQuery, baseQueryErrorSchema} from "./customBaseQuery"
   *
   * const api = createApi({
   *   baseQuery: customBaseQuery,
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       rawErrorResponseSchema: baseQueryErrorSchema,
   *       transformErrorResponse: (error) => error.data,
   *     }),
   *   })
   * })
   * ```
   */
  rawErrorResponseSchema?: StandardSchemaV1<BaseQueryError<BaseQuery>>
}

export type EndpointDefinitionWithQueryFn<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
> = {
  /**
   * Can be used in place of `query` as an inline function that bypasses `baseQuery` completely for the endpoint.
   *
   * @example
   * ```ts
   * // codeblock-meta title="Basic queryFn example"
   *
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   * type PostsResponse = Post[]
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPosts: build.query<PostsResponse, void>({
   *       query: () => 'posts',
   *     }),
   *     flipCoin: build.query<'heads' | 'tails', void>({
   *       // highlight-start
   *       queryFn(arg, queryApi, extraOptions, baseQuery) {
   *         const randomVal = Math.random()
   *         if (randomVal < 0.45) {
   *           return { data: 'heads' }
   *         }
   *         if (randomVal < 0.9) {
   *           return { data: 'tails' }
   *         }
   *         return { error: { status: 500, statusText: 'Internal Server Error', data: "Coin landed on its edge!" } }
   *       }
   *       // highlight-end
   *     })
   *   })
   * })
   * ```
   */
  queryFn(
    arg: QueryArg,
    api: BaseQueryApi,
    extraOptions: BaseQueryExtraOptions<BaseQuery>,
    baseQuery: (arg: Parameters<BaseQuery>[0]) => ReturnType<BaseQuery>,
  ): MaybePromise<
    QueryReturnValue<
      ResultType,
      BaseQueryError<BaseQuery>,
      BaseQueryMeta<BaseQuery>
    >
  >
  query?: never
  transformResponse?: never
  transformErrorResponse?: never
  rawResponseSchema?: never
  rawErrorResponseSchema?: never
}

type BaseEndpointTypes<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  RawResultType,
> = {
  QueryArg: QueryArg
  BaseQuery: BaseQuery
  ResultType: ResultType
  RawResultType: RawResultType
}

export type SchemaType =
  | 'arg'
  | 'rawResponse'
  | 'response'
  | 'rawErrorResponse'
  | 'errorResponse'
  | 'meta'

interface CommonEndpointDefinition<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
> {
  /**
   * A schema for the arguments to be passed to the `query` or `queryFn`.
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       argSchema: v.object({ id: v.number() }),
   *     }),
   *   })
   * })
   * ```
   */
  argSchema?: StandardSchemaV1<QueryArg>

  /**
   * A schema for the result (including `transformResponse` if provided).
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   *
   * const postSchema = v.object({ id: v.number(), name: v.string() })
   * type Post = v.InferOutput<typeof postSchema>
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       responseSchema: postSchema,
   *     }),
   *   })
   * })
   * ```
   */
  responseSchema?: StandardSchemaV1<ResultType>

  /**
   * A schema for the error object returned by the `query` or `queryFn` (including `transformErrorResponse` if provided).
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   * import { customBaseQuery, baseQueryErrorSchema } from "./customBaseQuery"
   *
   * const api = createApi({
   *   baseQuery: customBaseQuery,
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       errorResponseSchema: baseQueryErrorSchema,
   *     }),
   *   })
   * })
   * ```
   */
  errorResponseSchema?: StandardSchemaV1<BaseQueryError<BaseQuery>>

  /**
   * A schema for the `meta` property returned by the `query` or `queryFn`.
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   * import { customBaseQuery, baseQueryMetaSchema } from "./customBaseQuery"
   *
   * const api = createApi({
   *   baseQuery: customBaseQuery,
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       metaSchema: baseQueryMetaSchema,
   *     }),
   *   })
   * })
   * ```
   */
  metaSchema?: StandardSchemaV1<BaseQueryMeta<BaseQuery>>

  /**
   * Defaults to `true`.
   *
   * Most apps should leave this setting on. The only time it can be a performance issue
   * is if an API returns extremely large amounts of data (e.g. 10,000 rows per request) and
   * you're unable to paginate it.
   *
   * For details of how this works, please see the below. When it is set to `false`,
   * every request will cause subscribed components to rerender, even when the data has not changed.
   *
   * @see https://redux-toolkit.js.org/api/other-exports#copywithstructuralsharing
   */
  structuralSharing?: boolean

  /**
   * A function that is called when a schema validation fails.
   *
   * Gets called with a `NamedSchemaError` and an object containing the endpoint name, the type of the endpoint, the argument passed to the endpoint, and the query cache key (if applicable).
   *
   * `NamedSchemaError` has the following properties:
   * - `issues`: an array of issues that caused the validation to fail
   * - `value`: the value that was passed to the schema
   * - `schemaName`: the name of the schema that was used to validate the value (e.g. `argSchema`)
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       onSchemaFailure: (error, info) => {
   *         console.error(error, info)
   *       },
   *     }),
   *   })
   * })
   * ```
   */
  onSchemaFailure?: SchemaFailureHandler

  /**
   * Convert a schema validation failure into an error shape matching base query errors.
   *
   * When not provided, schema failures are treated as fatal, and normal error handling such as tag invalidation will not be executed.
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       responseSchema: v.object({ id: v.number(), name: v.string() }),
   *       catchSchemaFailure: (error, info) => ({
   *         status: "CUSTOM_ERROR",
   *         error: error.schemaName + " failed validation",
   *         data: error.issues,
   *       }),
   *     }),
   *   }),
   * })
   * ```
   */
  catchSchemaFailure?: SchemaFailureConverter<BaseQuery>

  /**
   * Defaults to `false`.
   *
   * If set to `true`, will skip schema validation for this endpoint.
   * Overrides the global setting.
   *
   * Can be overridden for specific schemas by passing an array of schema types to skip.
   *
   * @example
   * ```ts
   * // codeblock-meta no-transpile
   * import { createApi } from '@reduxjs/toolkit/query/react'
   * import * as v from "valibot"
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       responseSchema: v.object({ id: v.number(), name: v.string() }),
   *       skipSchemaValidation: process.env.NODE_ENV === "test" ? ["response"] : false, // skip schema validation for response in tests, since we'll be mocking the response
   *     }),
   *   })
   * })
   * ```
   */
  skipSchemaValidation?: boolean | SchemaType[]
}

export type BaseEndpointDefinition<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ResultType,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> = (
  | ([CastAny<BaseQueryResult<BaseQuery>, {}>] extends [NEVER]
      ? never
      : EndpointDefinitionWithQuery<
          QueryArg,
          BaseQuery,
          ResultType,
          RawResultType
        >)
  | EndpointDefinitionWithQueryFn<QueryArg, BaseQuery, ResultType>
) &
  CommonEndpointDefinition<QueryArg, BaseQuery, ResultType> & {
    /* phantom type */
    [rawResultType]?: RawResultType
    /* phantom type */
    [resultType]?: ResultType
    /* phantom type */
    [baseQuery]?: BaseQuery
  } & HasRequiredProps<
    BaseQueryExtraOptions<BaseQuery>,
    { extraOptions: BaseQueryExtraOptions<BaseQuery> },
    { extraOptions?: BaseQueryExtraOptions<BaseQuery> }
  >

// NOTE As with QueryStatus in `apiState.ts`, don't use this for real comparisons
// at runtime, use the string constants defined below.
export enum DefinitionType {
  query = 'query',
  mutation = 'mutation',
  infinitequery = 'infinitequery',
}

export const ENDPOINT_QUERY = DefinitionType.query
export const ENDPOINT_MUTATION = DefinitionType.mutation
export const ENDPOINT_INFINITEQUERY = DefinitionType.infinitequery

type TagDescriptionArray<TagTypes extends string> = ReadonlyArray<
  TagDescription<TagTypes> | undefined | null
>

export type GetResultDescriptionFn<
  TagTypes extends string,
  ResultType,
  QueryArg,
  ErrorType,
  MetaType,
> = (
  result: ResultType | undefined,
  error: ErrorType | undefined,
  arg: QueryArg,
  meta: MetaType,
) => TagDescriptionArray<TagTypes>

export type FullTagDescription<TagType> = {
  type: TagType
  id?: number | string
}
export type TagDescription<TagType> = TagType | FullTagDescription<TagType>

/**
 * @public
 */
export type ResultDescription<
  TagTypes extends string,
  ResultType,
  QueryArg,
  ErrorType,
  MetaType,
> =
  | TagDescriptionArray<TagTypes>
  | GetResultDescriptionFn<TagTypes, ResultType, QueryArg, ErrorType, MetaType>

type QueryTypes<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType, RawResultType> & {
  /**
   * The endpoint definition type. To be used with some internal generic types.
   * @example
   * ```ts
   * const useMyWrappedHook: UseQuery<typeof api.endpoints.query.Types.QueryDefinition> = ...
   * ```
   */
  QueryDefinition: QueryDefinition<
    QueryArg,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath
  >
  TagTypes: TagTypes
  ReducerPath: ReducerPath
}

/**
 * @public
 */
export interface QueryExtraOptions<
  TagTypes extends string,
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> extends CacheLifecycleQueryExtraOptions<
      ResultType,
      QueryArg,
      BaseQuery,
      ReducerPath
    >,
    QueryLifecycleQueryExtraOptions<
      ResultType,
      QueryArg,
      BaseQuery,
      ReducerPath
    >,
    CacheCollectionQueryExtraOptions {
  type: DefinitionType.query

  /**
   * Used by `query` endpoints. Determines which 'tag' is attached to the cached data returned by the query.
   * Expects an array of tag type strings, an array of objects of tag types with ids, or a function that returns such an array.
   * 1.  `['Post']` - equivalent to `2`
   * 2.  `[{ type: 'Post' }]` - equivalent to `1`
   * 3.  `[{ type: 'Post', id: 1 }]`
   * 4.  `(result, error, arg) => ['Post']` - equivalent to `5`
   * 5.  `(result, error, arg) => [{ type: 'Post' }]` - equivalent to `4`
   * 6.  `(result, error, arg) => [{ type: 'Post', id: 1 }]`
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="providesTags example"
   *
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   * type PostsResponse = Post[]
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   tagTypes: ['Posts'],
   *   endpoints: (build) => ({
   *     getPosts: build.query<PostsResponse, void>({
   *       query: () => 'posts',
   *       // highlight-start
   *       providesTags: (result) =>
   *         result
   *           ? [
   *               ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
   *               { type: 'Posts', id: 'LIST' },
   *             ]
   *           : [{ type: 'Posts', id: 'LIST' }],
   *       // highlight-end
   *     })
   *   })
   * })
   * ```
   */
  providesTags?: ResultDescription<
    TagTypes,
    ResultType,
    QueryArg,
    BaseQueryError<BaseQuery>,
    BaseQueryMeta<BaseQuery>
  >
  /**
   * Not to be used. A query should not invalidate tags in the cache.
   */
  invalidatesTags?: never

  /**
   * Can be provided to return a custom cache key value based on the query arguments.
   *
   * This is primarily intended for cases where a non-serializable value is passed as part of the query arg object and should be excluded from the cache key.  It may also be used for cases where an endpoint should only have a single cache entry, such as an infinite loading / pagination implementation.
   *
   * Unlike the `createApi` version which can _only_ return a string, this per-endpoint option can also return an an object, number, or boolean.  If it returns a string, that value will be used as the cache key directly.  If it returns an object / number / boolean, that value will be passed to the built-in `defaultSerializeQueryArgs`.  This simplifies the use case of stripping out args you don't want included in the cache key.
   *
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="serializeQueryArgs : exclude value"
   *
   * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   *
   * interface MyApiClient {
   *   fetchPost: (id: string) => Promise<Post>
   * }
   *
   * createApi({
   *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *  endpoints: (build) => ({
   *    // Example: an endpoint with an API client passed in as an argument,
   *    // but only the item ID should be used as the cache key
   *    getPost: build.query<Post, { id: string; client: MyApiClient }>({
   *      queryFn: async ({ id, client }) => {
   *        const post = await client.fetchPost(id)
   *        return { data: post }
   *      },
   *      // highlight-start
   *      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
   *        const { id } = queryArgs
   *        // This can return a string, an object, a number, or a boolean.
   *        // If it returns an object, number or boolean, that value
   *        // will be serialized automatically via `defaultSerializeQueryArgs`
   *        return { id } // omit `client` from the cache key
   *
   *        // Alternately, you can use `defaultSerializeQueryArgs` yourself:
   *        // return defaultSerializeQueryArgs({
   *        //   endpointName,
   *        //   queryArgs: { id },
   *        //   endpointDefinition
   *        // })
   *        // Or  create and return a string yourself:
   *        // return `getPost(${id})`
   *      },
   *      // highlight-end
   *    }),
   *  }),
   *})
   * ```
   */
  serializeQueryArgs?: SerializeQueryArgs<
    QueryArg,
    string | number | boolean | Record<any, any>
  >

  /**
   * Can be provided to merge an incoming response value into the current cache data.
   * If supplied, no automatic structural sharing will be applied - it's up to
   * you to update the cache appropriately.
   *
   * Since RTKQ normally replaces cache entries with the new response, you will usually
   * need to use this with the `serializeQueryArgs` or `forceRefetch` options to keep
   * an existing cache entry so that it can be updated.
   *
   * Since this is wrapped with Immer, you may either mutate the `currentCacheValue` directly,
   * or return a new value, but _not_ both at once.
   *
   * Will only be called if the existing `currentCacheData` is _not_ `undefined` - on first response,
   * the cache entry will just save the response data directly.
   *
   * Useful if you don't want a new request to completely override the current cache value,
   * maybe because you have manually updated it from another source and don't want those
   * updates to get lost.
   *
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="merge: pagination"
   *
   * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   *
   * createApi({
   *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *  endpoints: (build) => ({
   *    listItems: build.query<string[], number>({
   *      query: (pageNumber) => `/listItems?page=${pageNumber}`,
   *     // Only have one cache entry because the arg always maps to one string
   *     serializeQueryArgs: ({ endpointName }) => {
   *       return endpointName
   *      },
   *      // Always merge incoming data to the cache entry
   *      merge: (currentCache, newItems) => {
   *        currentCache.push(...newItems)
   *      },
   *      // Refetch when the page arg changes
   *      forceRefetch({ currentArg, previousArg }) {
   *        return currentArg !== previousArg
   *      },
   *    }),
   *  }),
   *})
   * ```
   */
  merge?(
    currentCacheData: ResultType,
    responseData: ResultType,
    otherArgs: {
      arg: QueryArg
      baseQueryMeta: BaseQueryMeta<BaseQuery>
      requestId: string
      fulfilledTimeStamp: number
    },
  ): ResultType | void

  /**
   * Check to see if the endpoint should force a refetch in cases where it normally wouldn't.
   * This is primarily useful for "infinite scroll" / pagination use cases where
   * RTKQ is keeping a single cache entry that is added to over time, in combination
   * with `serializeQueryArgs` returning a fixed cache key and a `merge` callback
   * set to add incoming data to the cache entry each time.
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="forceRefresh: pagination"
   *
   * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   *
   * createApi({
   *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *  endpoints: (build) => ({
   *    listItems: build.query<string[], number>({
   *      query: (pageNumber) => `/listItems?page=${pageNumber}`,
   *     // Only have one cache entry because the arg always maps to one string
   *     serializeQueryArgs: ({ endpointName }) => {
   *       return endpointName
   *      },
   *      // Always merge incoming data to the cache entry
   *      merge: (currentCache, newItems) => {
   *        currentCache.push(...newItems)
   *      },
   *      // Refetch when the page arg changes
   *      forceRefetch({ currentArg, previousArg }) {
   *        return currentArg !== previousArg
   *      },
   *    }),
   *  }),
   *})
   * ```
   */
  forceRefetch?(params: {
    currentArg: QueryArg | undefined
    previousArg: QueryArg | undefined
    state: RootState<any, any, string>
    endpointState?: QuerySubState<any>
  }): boolean

  /**
   * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
   */
  Types?: QueryTypes<
    QueryArg,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath,
    RawResultType
  >
}

export type QueryDefinition<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> = BaseEndpointDefinition<QueryArg, BaseQuery, ResultType, RawResultType> &
  QueryExtraOptions<
    TagTypes,
    ResultType,
    QueryArg,
    BaseQuery,
    ReducerPath,
    RawResultType
  >

export type InfiniteQueryTypes<
  QueryArg,
  PageParam,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType, RawResultType> & {
  /**
   * The endpoint definition type. To be used with some internal generic types.
   * @example
   * ```ts
   * const useMyWrappedHook: UseQuery<typeof api.endpoints.query.Types.QueryDefinition> = ...
   * ```
   */
  InfiniteQueryDefinition: InfiniteQueryDefinition<
    QueryArg,
    PageParam,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath
  >
  TagTypes: TagTypes
  ReducerPath: ReducerPath
}

export interface InfiniteQueryExtraOptions<
  TagTypes extends string,
  ResultType,
  QueryArg,
  PageParam,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> extends CacheLifecycleInfiniteQueryExtraOptions<
      InfiniteData<ResultType, PageParam>,
      QueryArg,
      BaseQuery,
      ReducerPath
    >,
    QueryLifecycleInfiniteQueryExtraOptions<
      InfiniteData<ResultType, PageParam>,
      QueryArg,
      BaseQuery,
      ReducerPath
    >,
    CacheCollectionQueryExtraOptions {
  type: DefinitionType.infinitequery

  providesTags?: ResultDescription<
    TagTypes,
    InfiniteData<ResultType, PageParam>,
    QueryArg,
    BaseQueryError<BaseQuery>,
    BaseQueryMeta<BaseQuery>
  >
  /**
   * Not to be used. A query should not invalidate tags in the cache.
   */
  invalidatesTags?: never

  /**
   * Required options to configure the infinite query behavior.
   * `initialPageParam` and `getNextPageParam` are required, to
   * ensure the infinite query can properly fetch the next page of data.
   * `initialPageParam` may be specified when using the
   * endpoint, to override the default value.
   * `maxPages` and `getPreviousPageParam` are both optional.
   * 
   * @example
   * 
   * ```ts
   * // codeblock-meta title="infiniteQueryOptions example"
   * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
   * 
   * type Pokemon = {
   *   id: string
   *   name: string
   * }
   * 
   * const pokemonApi = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
   *   endpoints: (build) => ({
   *     getInfinitePokemonWithMax: build.infiniteQuery<Pokemon[], string, number>({
   *       infiniteQueryOptions: {
   *         initialPageParam: 0,
   *         maxPages: 3,
   *         getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
   *           lastPageParam + 1,
   *         getPreviousPageParam: (
   *           firstPage,
   *           allPages,
   *           firstPageParam,
   *           allPageParams,
   *         ) => {
   *           return firstPageParam > 0 ? firstPageParam - 1 : undefined
   *         },
   *       },
   *       query({pageParam}) {
   *         return `https://example.com/listItems?page=${pageParam}`
   *       },
   *     }),
   *   }),
   * })
   
   * ```
   */
  infiniteQueryOptions: InfiniteQueryConfigOptions<
    ResultType,
    PageParam,
    QueryArg
  >

  /**
   * Can be provided to return a custom cache key value based on the query arguments.
   *
   * This is primarily intended for cases where a non-serializable value is passed as part of the query arg object and should be excluded from the cache key.  It may also be used for cases where an endpoint should only have a single cache entry, such as an infinite loading / pagination implementation.
   *
   * Unlike the `createApi` version which can _only_ return a string, this per-endpoint option can also return an an object, number, or boolean.  If it returns a string, that value will be used as the cache key directly.  If it returns an object / number / boolean, that value will be passed to the built-in `defaultSerializeQueryArgs`.  This simplifies the use case of stripping out args you don't want included in the cache key.
   *
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="serializeQueryArgs : exclude value"
   *
   * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   *
   * interface MyApiClient {
   *   fetchPost: (id: string) => Promise<Post>
   * }
   *
   * createApi({
   *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *  endpoints: (build) => ({
   *    // Example: an endpoint with an API client passed in as an argument,
   *    // but only the item ID should be used as the cache key
   *    getPost: build.query<Post, { id: string; client: MyApiClient }>({
   *      queryFn: async ({ id, client }) => {
   *        const post = await client.fetchPost(id)
   *        return { data: post }
   *      },
   *      // highlight-start
   *      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
   *        const { id } = queryArgs
   *        // This can return a string, an object, a number, or a boolean.
   *        // If it returns an object, number or boolean, that value
   *        // will be serialized automatically via `defaultSerializeQueryArgs`
   *        return { id } // omit `client` from the cache key
   *
   *        // Alternately, you can use `defaultSerializeQueryArgs` yourself:
   *        // return defaultSerializeQueryArgs({
   *        //   endpointName,
   *        //   queryArgs: { id },
   *        //   endpointDefinition
   *        // })
   *        // Or  create and return a string yourself:
   *        // return `getPost(${id})`
   *      },
   *      // highlight-end
   *    }),
   *  }),
   *})
   * ```
   */
  serializeQueryArgs?: SerializeQueryArgs<
    QueryArg,
    string | number | boolean | Record<any, any>
  >

  /**
   * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
   */
  Types?: InfiniteQueryTypes<
    QueryArg,
    PageParam,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath,
    RawResultType
  >
}

export type InfiniteQueryDefinition<
  QueryArg,
  PageParam,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> =
  // Infinite query endpoints receive `{queryArg, pageParam}`
  BaseEndpointDefinition<
    InfiniteQueryCombinedArg<QueryArg, PageParam>,
    BaseQuery,
    ResultType,
    RawResultType
  > &
    InfiniteQueryExtraOptions<
      TagTypes,
      ResultType,
      QueryArg,
      PageParam,
      BaseQuery,
      ReducerPath,
      RawResultType
    >

type MutationTypes<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType, RawResultType> & {
  /**
   * The endpoint definition type. To be used with some internal generic types.
   * @example
   * ```ts
   * const useMyWrappedHook: UseMutation<typeof api.endpoints.query.Types.MutationDefinition> = ...
   * ```
   */
  MutationDefinition: MutationDefinition<
    QueryArg,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath
  >
  TagTypes: TagTypes
  ReducerPath: ReducerPath
}

/**
 * @public
 */
export interface MutationExtraOptions<
  TagTypes extends string,
  ResultType,
  QueryArg,
  BaseQuery extends BaseQueryFn,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> extends CacheLifecycleMutationExtraOptions<
      ResultType,
      QueryArg,
      BaseQuery,
      ReducerPath
    >,
    QueryLifecycleMutationExtraOptions<
      ResultType,
      QueryArg,
      BaseQuery,
      ReducerPath
    > {
  type: DefinitionType.mutation

  /**
   * Used by `mutation` endpoints. Determines which cached data should be either re-fetched or removed from the cache.
   * Expects the same shapes as `providesTags`.
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="invalidatesTags example"
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * interface Post {
   *   id: number
   *   name: string
   * }
   * type PostsResponse = Post[]
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   tagTypes: ['Posts'],
   *   endpoints: (build) => ({
   *     getPosts: build.query<PostsResponse, void>({
   *       query: () => 'posts',
   *       providesTags: (result) =>
   *         result
   *           ? [
   *               ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
   *               { type: 'Posts', id: 'LIST' },
   *             ]
   *           : [{ type: 'Posts', id: 'LIST' }],
   *     }),
   *     addPost: build.mutation<Post, Partial<Post>>({
   *       query(body) {
   *         return {
   *           url: `posts`,
   *           method: 'POST',
   *           body,
   *         }
   *       },
   *       // highlight-start
   *       invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
   *       // highlight-end
   *     }),
   *   })
   * })
   * ```
   */
  invalidatesTags?: ResultDescription<
    TagTypes,
    ResultType,
    QueryArg,
    BaseQueryError<BaseQuery>,
    BaseQueryMeta<BaseQuery>
  >
  /**
   * Not to be used. A mutation should not provide tags to the cache.
   */
  providesTags?: never

  /**
   * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
   */
  Types?: MutationTypes<
    QueryArg,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath,
    RawResultType
  >
}

export type MutationDefinition<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> = BaseEndpointDefinition<QueryArg, BaseQuery, ResultType, RawResultType> &
  MutationExtraOptions<
    TagTypes,
    ResultType,
    QueryArg,
    BaseQuery,
    ReducerPath,
    RawResultType
  >

export type EndpointDefinition<
  QueryArg,
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ResultType,
  ReducerPath extends string = string,
  PageParam = any,
  RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
> =
  | QueryDefinition<
      QueryArg,
      BaseQuery,
      TagTypes,
      ResultType,
      ReducerPath,
      RawResultType
    >
  | MutationDefinition<
      QueryArg,
      BaseQuery,
      TagTypes,
      ResultType,
      ReducerPath,
      RawResultType
    >
  | InfiniteQueryDefinition<
      QueryArg,
      PageParam,
      BaseQuery,
      TagTypes,
      ResultType,
      ReducerPath,
      RawResultType
    >

export type EndpointDefinitions = Record<
  string,
  EndpointDefinition<any, any, any, any, any, any, any>
>

export function isQueryDefinition(
  e: EndpointDefinition<any, any, any, any, any, any, any>,
): e is QueryDefinition<any, any, any, any, any, any> {
  return e.type === ENDPOINT_QUERY
}

export function isMutationDefinition(
  e: EndpointDefinition<any, any, any, any, any, any, any>,
): e is MutationDefinition<any, any, any, any, any, any> {
  return e.type === ENDPOINT_MUTATION
}

export function isInfiniteQueryDefinition(
  e: EndpointDefinition<any, any, any, any, any, any, any>,
): e is InfiniteQueryDefinition<any, any, any, any, any, any, any> {
  return e.type === ENDPOINT_INFINITEQUERY
}

export function isAnyQueryDefinition(
  e: EndpointDefinition<any, any, any, any>,
): e is
  | QueryDefinition<any, any, any, any>
  | InfiniteQueryDefinition<any, any, any, any, any> {
  return isQueryDefinition(e) || isInfiniteQueryDefinition(e)
}

export type EndpointBuilder<
  BaseQuery extends BaseQueryFn,
  TagTypes extends string,
  ReducerPath extends string,
> = {
  /**
   * An endpoint definition that retrieves data, and may provide tags to the cache.
   *
   * @example
   * ```js
   * // codeblock-meta title="Example of all query endpoint options"
   * const api = createApi({
   *  baseQuery,
   *  endpoints: (build) => ({
   *    getPost: build.query({
   *      query: (id) => ({ url: `post/${id}` }),
   *      // Pick out data and prevent nested properties in a hook or selector
   *      transformResponse: (response) => response.data,
   *      // Pick out error and prevent nested properties in a hook or selector
   *      transformErrorResponse: (response) => response.error,
   *      // `result` is the server response
   *      providesTags: (result, error, id) => [{ type: 'Post', id }],
   *      // trigger side effects or optimistic updates
   *      onQueryStarted(id, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry, updateCachedData }) {},
   *      // handle subscriptions etc
   *      onCacheEntryAdded(id, { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData }) {},
   *    }),
   *  }),
   *});
   *```
   */
  query<
    ResultType,
    QueryArg,
    RawResultType extends
      BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
  >(
    definition: OmitFromUnion<
      QueryDefinition<
        QueryArg,
        BaseQuery,
        TagTypes,
        ResultType,
        ReducerPath,
        RawResultType
      >,
      'type'
    >,
  ): QueryDefinition<
    QueryArg,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath,
    RawResultType
  >

  /**
   * An endpoint definition that alters data on the server or will possibly invalidate the cache.
   *
   * @example
   * ```js
   * // codeblock-meta title="Example of all mutation endpoint options"
   * const api = createApi({
   *   baseQuery,
   *   endpoints: (build) => ({
   *     updatePost: build.mutation({
   *       query: ({ id, ...patch }) => ({ url: `post/${id}`, method: 'PATCH', body: patch }),
   *       // Pick out data and prevent nested properties in a hook or selector
   *       transformResponse: (response) => response.data,
   *       // Pick out error and prevent nested properties in a hook or selector
   *       transformErrorResponse: (response) => response.error,
   *       // `result` is the server response
   *       invalidatesTags: (result, error, id) => [{ type: 'Post', id }],
   *      // trigger side effects or optimistic updates
   *      onQueryStarted(id, { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry }) {},
   *      // handle subscriptions etc
   *      onCacheEntryAdded(id, { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }) {},
   *     }),
   *   }),
   * });
   * ```
   */
  mutation<
    ResultType,
    QueryArg,
    RawResultType extends
      BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
  >(
    definition: OmitFromUnion<
      MutationDefinition<
        QueryArg,
        BaseQuery,
        TagTypes,
        ResultType,
        ReducerPath,
        RawResultType
      >,
      'type'
    >,
  ): MutationDefinition<
    QueryArg,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath,
    RawResultType
  >

  infiniteQuery<
    ResultType,
    QueryArg,
    PageParam,
    RawResultType extends
      BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>,
  >(
    definition: OmitFromUnion<
      InfiniteQueryDefinition<
        QueryArg,
        PageParam,
        BaseQuery,
        TagTypes,
        ResultType,
        ReducerPath,
        RawResultType
      >,
      'type'
    >,
  ): InfiniteQueryDefinition<
    QueryArg,
    PageParam,
    BaseQuery,
    TagTypes,
    ResultType,
    ReducerPath,
    RawResultType
  >
}

export type AssertTagTypes = <T extends FullTagDescription<string>>(t: T) => T

export function calculateProvidedBy<ResultType, QueryArg, ErrorType, MetaType>(
  description:
    | ResultDescription<string, ResultType, QueryArg, ErrorType, MetaType>
    | undefined,
  result: ResultType | undefined,
  error: ErrorType | undefined,
  queryArg: QueryArg,
  meta: MetaType | undefined,
  assertTagTypes: AssertTagTypes,
): readonly FullTagDescription<string>[] {
  const finalDescription = isFunction(description)
    ? description(
        result as ResultType,
        error as undefined,
        queryArg,
        meta as MetaType,
      )
    : description

  if (finalDescription) {
    return filterMap(finalDescription, isNotNullish, (tag) =>
      assertTagTypes(expandTagDescription(tag)),
    )
  }

  return []
}

function isFunction<T>(t: T): t is Extract<T, Function> {
  return typeof t === 'function'
}

export function expandTagDescription(
  description: TagDescription<string>,
): FullTagDescription<string> {
  return typeof description === 'string' ? { type: description } : description
}

export type QueryArgFrom<D extends BaseEndpointDefinition<any, any, any, any>> =
  D extends BaseEndpointDefinition<infer QA, any, any, any> ? QA : never

// Just extracting `QueryArg` from `BaseEndpointDefinition`
// doesn't sufficiently match here.
// We need to explicitly match against `InfiniteQueryDefinition`
export type InfiniteQueryArgFrom<
  D extends BaseEndpointDefinition<any, any, any, any>,
> =
  D extends InfiniteQueryDefinition<infer QA, any, any, any, any, any, any>
    ? QA
    : never

export type QueryArgFromAnyQuery<
  D extends BaseEndpointDefinition<any, any, any, any>,
> =
  D extends InfiniteQueryDefinition<any, any, any, any, any, any, any>
    ? InfiniteQueryArgFrom<D>
    : D extends QueryDefinition<any, any, any, any, any, any>
      ? QueryArgFrom<D>
      : never

export type ResultTypeFrom<
  D extends BaseEndpointDefinition<any, any, any, any>,
> = D extends BaseEndpointDefinition<any, any, infer RT, any> ? RT : unknown

export type ReducerPathFrom<
  D extends EndpointDefinition<any, any, any, any, any, any, any>,
> =
  D extends EndpointDefinition<any, any, any, any, infer RP, any, any>
    ? RP
    : unknown

export type TagTypesFrom<
  D extends EndpointDefinition<any, any, any, any, any, any, any>,
> =
  D extends EndpointDefinition<any, any, infer TT, any, any, any, any>
    ? TT
    : unknown

export type PageParamFrom<
  D extends InfiniteQueryDefinition<any, any, any, any, any, any, any>,
> =
  D extends InfiniteQueryDefinition<any, infer PP, any, any, any, any, any>
    ? PP
    : unknown

export type InfiniteQueryCombinedArg<QueryArg, PageParam> = {
  queryArg: QueryArg
  pageParam: PageParam
}

export type TagTypesFromApi<T> =
  T extends Api<any, any, any, infer TagTypes> ? TagTypes : never

export type DefinitionsFromApi<T> =
  T extends Api<any, infer Definitions, any, any> ? Definitions : never

export type TransformedResponse<
  NewDefinitions extends EndpointDefinitions,
  K,
  ResultType,
> = K extends keyof NewDefinitions
  ? NewDefinitions[K]['transformResponse'] extends undefined
    ? ResultType
    : UnwrapPromise<
        ReturnType<NonUndefined<NewDefinitions[K]['transformResponse']>>
      >
  : ResultType

export type OverrideResultType<Definition, NewResultType> =
  Definition extends QueryDefinition<
    infer QueryArg,
    infer BaseQuery,
    infer TagTypes,
    any,
    infer ReducerPath
  >
    ? QueryDefinition<QueryArg, BaseQuery, TagTypes, NewResultType, ReducerPath>
    : Definition extends MutationDefinition<
          infer QueryArg,
          infer BaseQuery,
          infer TagTypes,
          any,
          infer ReducerPath
        >
      ? MutationDefinition<
          QueryArg,
          BaseQuery,
          TagTypes,
          NewResultType,
          ReducerPath
        >
      : Definition extends InfiniteQueryDefinition<
            infer QueryArg,
            infer PageParam,
            infer BaseQuery,
            infer TagTypes,
            any,
            infer ReducerPath
          >
        ? InfiniteQueryDefinition<
            QueryArg,
            PageParam,
            BaseQuery,
            TagTypes,
            NewResultType,
            ReducerPath
          >
        : never

export type UpdateDefinitions<
  Definitions extends EndpointDefinitions,
  NewTagTypes extends string,
  NewDefinitions extends EndpointDefinitions,
> = {
  [K in keyof Definitions]: Definitions[K] extends QueryDefinition<
    infer QueryArg,
    infer BaseQuery,
    any,
    infer ResultType,
    infer ReducerPath
  >
    ? QueryDefinition<
        QueryArg,
        BaseQuery,
        NewTagTypes,
        TransformedResponse<NewDefinitions, K, ResultType>,
        ReducerPath
      >
    : Definitions[K] extends MutationDefinition<
          infer QueryArg,
          infer BaseQuery,
          any,
          infer ResultType,
          infer ReducerPath
        >
      ? MutationDefinition<
          QueryArg,
          BaseQuery,
          NewTagTypes,
          TransformedResponse<NewDefinitions, K, ResultType>,
          ReducerPath
        >
      : Definitions[K] extends InfiniteQueryDefinition<
            infer QueryArg,
            infer PageParam,
            infer BaseQuery,
            any,
            infer ResultType,
            infer ReducerPath
          >
        ? InfiniteQueryDefinition<
            QueryArg,
            PageParam,
            BaseQuery,
            NewTagTypes,
            TransformedResponse<NewDefinitions, K, ResultType>,
            ReducerPath
          >
        : never
}
