import {
  getEndpointDefinition,
  type Api,
  type ApiContext,
  type Module,
  type ModuleName,
} from './apiTypes'
import type { CombinedState } from './core/apiState'
import type { BaseQueryArg, BaseQueryFn } from './baseQueryTypes'
import type { SerializeQueryArgs } from './defaultSerializeQueryArgs'
import { defaultSerializeQueryArgs } from './defaultSerializeQueryArgs'
import type {
  EndpointBuilder,
  EndpointDefinitions,
  SchemaFailureConverter,
  SchemaFailureHandler,
  SchemaType,
} from './endpointDefinitions'
import {
  DefinitionType,
  ENDPOINT_INFINITEQUERY,
  ENDPOINT_MUTATION,
  ENDPOINT_QUERY,
  isInfiniteQueryDefinition,
  isQueryDefinition,
} from './endpointDefinitions'
import { nanoid } from './core/rtkImports'
import type { UnknownAction } from '@reduxjs/toolkit'
import type { NoInfer } from './tsHelpers'
import { weakMapMemoize } from 'reselect'

export interface CreateApiOptions<
  BaseQuery extends BaseQueryFn,
  Definitions extends EndpointDefinitions,
  ReducerPath extends string = 'api',
  TagTypes extends string = never,
> {
  /**
   * The base query used by each endpoint if no `queryFn` option is specified. RTK Query exports a utility called [fetchBaseQuery](./fetchBaseQuery) as a lightweight wrapper around `fetch` for common use-cases. See [Customizing Queries](../../rtk-query/usage/customizing-queries) if `fetchBaseQuery` does not handle your requirements.
   *
   * @example
   *
   * ```ts
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
   *
   * const api = createApi({
   *   // highlight-start
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   // highlight-end
   *   endpoints: (build) => ({
   *     // ...endpoints
   *   }),
   * })
   * ```
   */
  baseQuery: BaseQuery
  /**
   * An array of string tag type names. Specifying tag types is optional, but you should define them so that they can be used for caching and invalidation. When defining a tag type, you will be able to [provide](../../rtk-query/usage/automated-refetching#providing-tags) them with `providesTags` and [invalidate](../../rtk-query/usage/automated-refetching#invalidating-tags) them with `invalidatesTags` when configuring [endpoints](#endpoints).
   *
   * @example
   *
   * ```ts
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
   *
   * const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   // highlight-start
   *   tagTypes: ['Post', 'User'],
   *   // highlight-end
   *   endpoints: (build) => ({
   *     // ...endpoints
   *   }),
   * })
   * ```
   */
  tagTypes?: readonly TagTypes[]
  /**
   * The `reducerPath` is a _unique_ key that your service will be mounted to in your store. If you call `createApi` more than once in your application, you will need to provide a unique value each time. Defaults to `'api'`.
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="apis.js"
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
   *
   * const apiOne = createApi({
   *   // highlight-start
   *   reducerPath: 'apiOne',
   *   // highlight-end
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (builder) => ({
   *     // ...endpoints
   *   }),
   * });
   *
   * const apiTwo = createApi({
   *   // highlight-start
   *   reducerPath: 'apiTwo',
   *   // highlight-end
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   endpoints: (builder) => ({
   *     // ...endpoints
   *   }),
   * });
   * ```
   */
  reducerPath?: ReducerPath
  /**
   * Accepts a custom function if you have a need to change the creation of cache keys for any reason.
   */
  serializeQueryArgs?: SerializeQueryArgs<unknown>
  /**
   * Endpoints are a set of operations that you want to perform against your server. You define them as an object using the builder syntax. There are three endpoint types: [`query`](../../rtk-query/usage/queries), [`infiniteQuery`](../../rtk-query/usage/infinite-queries) and [`mutation`](../../rtk-query/usage/mutations).
   */
  endpoints(
    build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>,
  ): Definitions
  /**
   * Defaults to `60` _(this value is in seconds)_. This is how long RTK Query will keep your data cached for **after** the last component unsubscribes. For example, if you query an endpoint, then unmount the component, then mount another component that makes the same request within the given time frame, the most recent value will be served from the cache.
   *
   * @example
   * ```ts
   * // codeblock-meta title="keepUnusedDataFor example"
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
   *       query: () => 'posts'
   *     })
   *   }),
   *   // highlight-start
   *   keepUnusedDataFor: 5
   *   // highlight-end
   * })
   * ```
   */
  keepUnusedDataFor?: number
  /**
   * Defaults to `false`. This setting allows you to control whether if a cached result is already available RTK Query will only serve a cached result, or if it should `refetch` when set to `true` or if an adequate amount of time has passed since the last successful query result.
   * - `false` - Will not cause a query to be performed _unless_ it does not exist yet.
   * - `true` - Will always refetch when a new subscriber to a query is added. Behaves the same as calling the `refetch` callback or passing `forceRefetch: true` in the action creator.
   * - `number` - **Value is in seconds**. If a number is provided and there is an existing query in the cache, it will compare the current time vs the last fulfilled timestamp, and only refetch if enough time has elapsed.
   *
   * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
   */
  refetchOnMountOrArgChange?: boolean | number
  /**
   * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus.
   *
   * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
   *
   * Note: requires [`setupListeners`](./setupListeners) to have been called.
   */
  refetchOnFocus?: boolean
  /**
   * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.
   *
   * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
   *
   * Note: requires [`setupListeners`](./setupListeners) to have been called.
   */
  refetchOnReconnect?: boolean
  /**
   * Defaults to `'delayed'`. This setting allows you to control when tags are invalidated after a mutation.
   *
   * - `'immediately'`: Queries are invalidated instantly after the mutation finished, even if they are running.
   *   If the query provides tags that were invalidated while it ran, it won't be re-fetched.
   * - `'delayed'`: Invalidation only happens after all queries and mutations are settled.
   *   This ensures that queries are always invalidated correctly and automatically "batches" invalidations of concurrent mutations.
   *   Note that if you constantly have some queries (or mutations) running, this can delay tag invalidations indefinitely.
   */
  invalidationBehavior?: 'delayed' | 'immediately'
  /**
   * A function that is passed every dispatched action. If this returns something other than `undefined`,
   * that return value will be used to rehydrate fulfilled & errored queries.
   *
   * @example
   *
   * ```ts
   * // codeblock-meta title="next-redux-wrapper rehydration example"
   * import type { Action, PayloadAction } from '@reduxjs/toolkit'
   * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
   * import { HYDRATE } from 'next-redux-wrapper'
   *
   * type RootState = any; // normally inferred from state
   *
   * function isHydrateAction(action: Action): action is PayloadAction<RootState> {
   *   return action.type === HYDRATE
   * }
   *
   * export const api = createApi({
   *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
   *   // highlight-start
   *   extractRehydrationInfo(action, { reducerPath }): any {
   *     if (isHydrateAction(action)) {
   *       return action.payload[reducerPath]
   *     }
   *   },
   *   // highlight-end
   *   endpoints: (build) => ({
   *     // omitted
   *   }),
   * })
   * ```
   */
  extractRehydrationInfo?: (
    action: UnknownAction,
    {
      reducerPath,
    }: {
      reducerPath: ReducerPath
    },
  ) =>
    | undefined
    | CombinedState<
        NoInfer<Definitions>,
        NoInfer<TagTypes>,
        NoInfer<ReducerPath>
      >

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
   *     }),
   *   }),
   *   onSchemaFailure: (error, info) => {
   *     console.error(error, info)
   *   },
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
   *     }),
   *   }),
   *   catchSchemaFailure: (error, info) => ({
   *     status: "CUSTOM_ERROR",
   *     error: error.schemaName + " failed validation",
   *     data: error.issues,
   *   }),
   * })
   * ```
   */
  catchSchemaFailure?: SchemaFailureConverter<BaseQuery>

  /**
   * Defaults to `false`.
   *
   * If set to `true`, will skip schema validation for all endpoints, unless overridden by the endpoint.
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
   *   skipSchemaValidation: process.env.NODE_ENV === "test" ? ["response"] : false, // skip schema validation for response in tests, since we'll be mocking the response
   *   endpoints: (build) => ({
   *     getPost: build.query<Post, { id: number }>({
   *       query: ({ id }) => `/post/${id}`,
   *       responseSchema: v.object({ id: v.number(), name: v.string() }),
   *     }),
   *   })
   * })
   * ```
   */
  skipSchemaValidation?: boolean | SchemaType[]
}

export type CreateApi<Modules extends ModuleName> = {
  /**
   * Creates a service to use in your application. Contains only the basic redux logic (the core module).
   *
   * @link https://redux-toolkit.js.org/rtk-query/api/createApi
   */
  <
    BaseQuery extends BaseQueryFn,
    Definitions extends EndpointDefinitions,
    ReducerPath extends string = 'api',
    TagTypes extends string = never,
  >(
    options: CreateApiOptions<BaseQuery, Definitions, ReducerPath, TagTypes>,
  ): Api<BaseQuery, Definitions, ReducerPath, TagTypes, Modules>
}

/**
 * Builds a `createApi` method based on the provided `modules`.
 *
 * @link https://redux-toolkit.js.org/rtk-query/usage/customizing-create-api
 *
 * @example
 * ```ts
 * const MyContext = React.createContext<ReactReduxContextValue | null>(null);
 * const customCreateApi = buildCreateApi(
 *   coreModule(),
 *   reactHooksModule({
 *     hooks: {
 *       useDispatch: createDispatchHook(MyContext),
 *       useSelector: createSelectorHook(MyContext),
 *       useStore: createStoreHook(MyContext)
 *     }
 *   })
 * );
 * ```
 *
 * @param modules - A variable number of modules that customize how the `createApi` method handles endpoints
 * @returns A `createApi` method using the provided `modules`.
 */
export function buildCreateApi<Modules extends [Module<any>, ...Module<any>[]]>(
  ...modules: Modules
): CreateApi<Modules[number]['name']> {
  return function baseCreateApi(options) {
    const extractRehydrationInfo = weakMapMemoize((action: UnknownAction) =>
      options.extractRehydrationInfo?.(action, {
        reducerPath: (options.reducerPath ?? 'api') as any,
      }),
    )

    const optionsWithDefaults: CreateApiOptions<any, any, any, any> = {
      reducerPath: 'api',
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      invalidationBehavior: 'delayed',
      ...options,
      extractRehydrationInfo,
      serializeQueryArgs(queryArgsApi) {
        let finalSerializeQueryArgs = defaultSerializeQueryArgs
        if ('serializeQueryArgs' in queryArgsApi.endpointDefinition) {
          const endpointSQA =
            queryArgsApi.endpointDefinition.serializeQueryArgs!
          finalSerializeQueryArgs = (queryArgsApi) => {
            const initialResult = endpointSQA(queryArgsApi)
            if (typeof initialResult === 'string') {
              // If the user function returned a string, use it as-is
              return initialResult
            } else {
              // Assume they returned an object (such as a subset of the original
              // query args) or a primitive, and serialize it ourselves
              return defaultSerializeQueryArgs({
                ...queryArgsApi,
                queryArgs: initialResult,
              })
            }
          }
        } else if (options.serializeQueryArgs) {
          finalSerializeQueryArgs = options.serializeQueryArgs
        }

        return finalSerializeQueryArgs(queryArgsApi)
      },
      tagTypes: [...(options.tagTypes || [])],
    }

    const context: ApiContext<EndpointDefinitions> = {
      endpointDefinitions: {},
      batch(fn) {
        // placeholder "batch" method to be overridden by plugins, for example with React.unstable_batchedUpdate
        fn()
      },
      apiUid: nanoid(),
      extractRehydrationInfo,
      hasRehydrationInfo: weakMapMemoize(
        (action) => extractRehydrationInfo(action) != null,
      ),
    }

    const api = {
      injectEndpoints,
      enhanceEndpoints({ addTagTypes, endpoints }) {
        if (addTagTypes) {
          for (const eT of addTagTypes) {
            if (!optionsWithDefaults.tagTypes!.includes(eT as any)) {
              ;(optionsWithDefaults.tagTypes as any[]).push(eT)
            }
          }
        }
        if (endpoints) {
          for (const [endpointName, partialDefinition] of Object.entries(
            endpoints,
          )) {
            if (typeof partialDefinition === 'function') {
              partialDefinition(getEndpointDefinition(context, endpointName))
            } else {
              Object.assign(
                getEndpointDefinition(context, endpointName) || {},
                partialDefinition,
              )
            }
          }
        }
        return api
      },
    } as Api<BaseQueryFn, {}, string, string, Modules[number]['name']>

    const initializedModules = modules.map((m) =>
      m.init(api as any, optionsWithDefaults as any, context),
    )

    function injectEndpoints(
      inject: Parameters<typeof api.injectEndpoints>[0],
    ) {
      const evaluatedEndpoints = inject.endpoints({
        query: (x) => ({ ...x, type: ENDPOINT_QUERY }) as any,
        mutation: (x) => ({ ...x, type: ENDPOINT_MUTATION }) as any,
        infiniteQuery: (x) => ({ ...x, type: ENDPOINT_INFINITEQUERY }) as any,
      })

      for (const [endpointName, definition] of Object.entries(
        evaluatedEndpoints,
      )) {
        if (
          inject.overrideExisting !== true &&
          endpointName in context.endpointDefinitions
        ) {
          if (inject.overrideExisting === 'throw') {
            throw new Error(
              `called \`injectEndpoints\` to override already-existing endpointName ${endpointName} without specifying \`overrideExisting: true\``,
            )
          } else if (
            typeof process !== 'undefined' &&
            process.env.NODE_ENV === 'development'
          ) {
            console.error(
              `called \`injectEndpoints\` to override already-existing endpointName ${endpointName} without specifying \`overrideExisting: true\``,
            )
          }

          continue
        }

        if (
          typeof process !== 'undefined' &&
          process.env.NODE_ENV === 'development'
        ) {
          if (isInfiniteQueryDefinition(definition)) {
            const { infiniteQueryOptions } = definition
            const { maxPages, getPreviousPageParam } = infiniteQueryOptions

            if (typeof maxPages === 'number') {
              if (maxPages < 1) {
                throw new Error(
                  `maxPages for endpoint '${endpointName}' must be a number greater than 0`,
                )
              }

              if (typeof getPreviousPageParam !== 'function') {
                throw new Error(
                  `getPreviousPageParam for endpoint '${endpointName}' must be a function if maxPages is used`,
                )
              }
            }
          }
        }

        context.endpointDefinitions[endpointName] = definition
        for (const m of initializedModules) {
          m.injectEndpoint(endpointName, definition)
        }
      }

      return api as any
    }

    return api.injectEndpoints({ endpoints: options.endpoints as any })
  }
}
