import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import { ThunkDispatch, UnknownAction, Draft, AsyncThunk, SHOULD_AUTOBATCH, ThunkAction, SafePromise, SerializedError, PayloadAction, ActionCreatorWithoutPayload, Reducer, Middleware, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Patch } from 'immer';
import * as redux from 'redux';
import { CreateSelectorFunction } from 'reselect';
import { StandardSchemaV1 } from '@standard-schema/spec';
import { SchemaError } from '@standard-schema/utils';

type Id<T> = {
    [K in keyof T]: T[K];
} & {};
type WithRequiredProp<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type Override<T1, T2> = T2 extends any ? Omit<T1, keyof T2> & T2 : never;
/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type NonOptionalKeys<T> = {
    [K in keyof T]-?: undefined extends T[K] ? never : K;
}[keyof T];
type HasRequiredProps<T, True, False> = NonOptionalKeys<T> extends never ? False : True;
type NoInfer<T> = [T][T extends any ? 0 : never];
type NonUndefined<T> = T extends undefined ? never : T;
type UnwrapPromise<T> = T extends PromiseLike<infer V> ? V : T;
type MaybePromise<T> = T | PromiseLike<T>;
type OmitFromUnion<T, K extends keyof T> = T extends any ? Omit<T, K> : never;
type IsAny<T, True, False = never> = true | false extends (T extends never ? true : false) ? True : False;
type CastAny<T, CastTo> = IsAny<T, CastTo, T>;

interface BaseQueryApi {
    signal: AbortSignal;
    abort: (reason?: string) => void;
    dispatch: ThunkDispatch<any, any, any>;
    getState: () => unknown;
    extra: unknown;
    endpoint: string;
    type: 'query' | 'mutation';
    /**
     * Only available for queries: indicates if a query has been forced,
     * i.e. it would have been fetched even if there would already be a cache entry
     * (this does not mean that there is already a cache entry though!)
     *
     * This can be used to for example add a `Cache-Control: no-cache` header for
     * invalidated queries.
     */
    forced?: boolean;
    /**
     * Only available for queries: the cache key that was used to store the query result
     */
    queryCacheKey?: string;
}
type QueryReturnValue<T = unknown, E = unknown, M = unknown> = {
    error: E;
    data?: undefined;
    meta?: M;
} | {
    error?: undefined;
    data: T;
    meta?: M;
};
type BaseQueryFn<Args = any, Result = unknown, Error = unknown, DefinitionExtraOptions = {}, Meta = {}> = (args: Args, api: BaseQueryApi, extraOptions: DefinitionExtraOptions) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;
type BaseQueryEnhancer<AdditionalArgs = unknown, AdditionalDefinitionExtraOptions = unknown, Config = void> = <BaseQuery extends BaseQueryFn>(baseQuery: BaseQuery, config: Config) => BaseQueryFn<BaseQueryArg<BaseQuery> & AdditionalArgs, BaseQueryResult<BaseQuery>, BaseQueryError<BaseQuery>, BaseQueryExtraOptions<BaseQuery> & AdditionalDefinitionExtraOptions, NonNullable<BaseQueryMeta<BaseQuery>>>;
/**
 * @public
 */
type BaseQueryResult<BaseQuery extends BaseQueryFn> = UnwrapPromise<ReturnType<BaseQuery>> extends infer Unwrapped ? Unwrapped extends {
    data: any;
} ? Unwrapped['data'] : never : never;
/**
 * @public
 */
type BaseQueryMeta<BaseQuery extends BaseQueryFn> = UnwrapPromise<ReturnType<BaseQuery>>['meta'];
/**
 * @public
 */
type BaseQueryError<BaseQuery extends BaseQueryFn> = Exclude<UnwrapPromise<ReturnType<BaseQuery>>, {
    error?: undefined;
}>['error'];
/**
 * @public
 */
type BaseQueryArg<T extends (arg: any, ...args: any[]) => any> = T extends (arg: infer A, ...args: any[]) => any ? A : any;
/**
 * @public
 */
type BaseQueryExtraOptions<BaseQuery extends BaseQueryFn> = Parameters<BaseQuery>[2];

declare const defaultSerializeQueryArgs: SerializeQueryArgs<any>;
type SerializeQueryArgs<QueryArgs, ReturnType = string> = (_: {
    queryArgs: QueryArgs;
    endpointDefinition: EndpointDefinition<any, any, any, any>;
    endpointName: string;
}) => ReturnType;
type InternalSerializeQueryArgs = (_: {
    queryArgs: any;
    endpointDefinition: EndpointDefinition<any, any, any, any>;
    endpointName: string;
}) => QueryCacheKey;

interface CreateApiOptions<BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string = 'api', TagTypes extends string = never> {
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
    baseQuery: BaseQuery;
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
    tagTypes?: readonly TagTypes[];
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
    reducerPath?: ReducerPath;
    /**
     * Accepts a custom function if you have a need to change the creation of cache keys for any reason.
     */
    serializeQueryArgs?: SerializeQueryArgs<unknown>;
    /**
     * Endpoints are a set of operations that you want to perform against your server. You define them as an object using the builder syntax. There are three endpoint types: [`query`](../../rtk-query/usage/queries), [`infiniteQuery`](../../rtk-query/usage/infinite-queries) and [`mutation`](../../rtk-query/usage/mutations).
     */
    endpoints(build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>): Definitions;
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
    keepUnusedDataFor?: number;
    /**
     * Defaults to `false`. This setting allows you to control whether if a cached result is already available RTK Query will only serve a cached result, or if it should `refetch` when set to `true` or if an adequate amount of time has passed since the last successful query result.
     * - `false` - Will not cause a query to be performed _unless_ it does not exist yet.
     * - `true` - Will always refetch when a new subscriber to a query is added. Behaves the same as calling the `refetch` callback or passing `forceRefetch: true` in the action creator.
     * - `number` - **Value is in seconds**. If a number is provided and there is an existing query in the cache, it will compare the current time vs the last fulfilled timestamp, and only refetch if enough time has elapsed.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     */
    refetchOnMountOrArgChange?: boolean | number;
    /**
     * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     *
     * Note: requires [`setupListeners`](./setupListeners) to have been called.
     */
    refetchOnFocus?: boolean;
    /**
     * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     *
     * Note: requires [`setupListeners`](./setupListeners) to have been called.
     */
    refetchOnReconnect?: boolean;
    /**
     * Defaults to `'delayed'`. This setting allows you to control when tags are invalidated after a mutation.
     *
     * - `'immediately'`: Queries are invalidated instantly after the mutation finished, even if they are running.
     *   If the query provides tags that were invalidated while it ran, it won't be re-fetched.
     * - `'delayed'`: Invalidation only happens after all queries and mutations are settled.
     *   This ensures that queries are always invalidated correctly and automatically "batches" invalidations of concurrent mutations.
     *   Note that if you constantly have some queries (or mutations) running, this can delay tag invalidations indefinitely.
     */
    invalidationBehavior?: 'delayed' | 'immediately';
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
    extractRehydrationInfo?: (action: UnknownAction, { reducerPath, }: {
        reducerPath: ReducerPath;
    }) => undefined | CombinedState<NoInfer<Definitions>, NoInfer<TagTypes>, NoInfer<ReducerPath>>;
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
    onSchemaFailure?: SchemaFailureHandler;
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
    catchSchemaFailure?: SchemaFailureConverter<BaseQuery>;
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
    skipSchemaValidation?: boolean | SchemaType[];
}
type CreateApi<Modules extends ModuleName> = {
    /**
     * Creates a service to use in your application. Contains only the basic redux logic (the core module).
     *
     * @link https://redux-toolkit.js.org/rtk-query/api/createApi
     */
    <BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string = 'api', TagTypes extends string = never>(options: CreateApiOptions<BaseQuery, Definitions, ReducerPath, TagTypes>): Api<BaseQuery, Definitions, ReducerPath, TagTypes, Modules>;
};
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
declare function buildCreateApi<Modules extends [Module<any>, ...Module<any>[]]>(...modules: Modules): CreateApi<Modules[number]['name']>;

type BuildThunksApiEndpointQuery<Definition extends QueryDefinition<any, any, any, any, any>> = Matchers<QueryThunk, Definition>;
type BuildThunksApiEndpointInfiniteQuery<Definition extends InfiniteQueryDefinition<any, any, any, any, any>> = Matchers<InfiniteQueryThunk<any>, Definition>;
type BuildThunksApiEndpointMutation<Definition extends MutationDefinition<any, any, any, any, any>> = Matchers<MutationThunk, Definition>;
type EndpointThunk<Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>, Definition extends EndpointDefinition<any, any, any, any>> = Definition extends EndpointDefinition<infer QueryArg, infer BaseQueryFn, any, infer ResultType> ? Thunk extends AsyncThunk<unknown, infer ATArg, infer ATConfig> ? AsyncThunk<ResultType, ATArg & {
    originalArgs: QueryArg;
}, ATConfig & {
    rejectValue: BaseQueryError<BaseQueryFn>;
}> : never : Definition extends InfiniteQueryDefinition<infer QueryArg, infer PageParam, infer BaseQueryFn, any, infer ResultType> ? Thunk extends AsyncThunk<unknown, infer ATArg, infer ATConfig> ? AsyncThunk<InfiniteData<ResultType, PageParam>, ATArg & {
    originalArgs: QueryArg;
}, ATConfig & {
    rejectValue: BaseQueryError<BaseQueryFn>;
}> : never : never;
type PendingAction<Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>, Definition extends EndpointDefinition<any, any, any, any>> = ReturnType<EndpointThunk<Thunk, Definition>['pending']>;
type FulfilledAction<Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>, Definition extends EndpointDefinition<any, any, any, any>> = ReturnType<EndpointThunk<Thunk, Definition>['fulfilled']>;
type RejectedAction<Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>, Definition extends EndpointDefinition<any, any, any, any>> = ReturnType<EndpointThunk<Thunk, Definition>['rejected']>;
type Matcher<M> = (value: any) => value is M;
interface Matchers<Thunk extends QueryThunk | MutationThunk | InfiniteQueryThunk<any>, Definition extends EndpointDefinition<any, any, any, any>> {
    matchPending: Matcher<PendingAction<Thunk, Definition>>;
    matchFulfilled: Matcher<FulfilledAction<Thunk, Definition>>;
    matchRejected: Matcher<RejectedAction<Thunk, Definition>>;
}
type QueryThunkArg = QuerySubstateIdentifier & StartQueryActionCreatorOptions & {
    type: 'query';
    originalArgs: unknown;
    endpointName: string;
};
type InfiniteQueryThunkArg<D extends InfiniteQueryDefinition<any, any, any, any, any>> = QuerySubstateIdentifier & StartInfiniteQueryActionCreatorOptions<D> & {
    type: `query`;
    originalArgs: unknown;
    endpointName: string;
    param: unknown;
    direction?: InfiniteQueryDirection;
    refetchCachedPages?: boolean;
};
type MutationThunkArg = {
    type: 'mutation';
    originalArgs: unknown;
    endpointName: string;
    track?: boolean;
    fixedCacheKey?: string;
};
type ThunkResult = unknown;
type ThunkApiMetaConfig = {
    pendingMeta: {
        startedTimeStamp: number;
        [SHOULD_AUTOBATCH]: true;
    };
    fulfilledMeta: {
        fulfilledTimeStamp: number;
        baseQueryMeta: unknown;
        [SHOULD_AUTOBATCH]: true;
    };
    rejectedMeta: {
        baseQueryMeta: unknown;
        [SHOULD_AUTOBATCH]: true;
    };
};
type QueryThunk = AsyncThunk<ThunkResult, QueryThunkArg, ThunkApiMetaConfig>;
type InfiniteQueryThunk<D extends InfiniteQueryDefinition<any, any, any, any, any>> = AsyncThunk<ThunkResult, InfiniteQueryThunkArg<D>, ThunkApiMetaConfig>;
type MutationThunk = AsyncThunk<ThunkResult, MutationThunkArg, ThunkApiMetaConfig>;
type MaybeDrafted<T> = T | Draft<T>;
type Recipe<T> = (data: MaybeDrafted<T>) => void | MaybeDrafted<T>;
type PatchQueryDataThunk<Definitions extends EndpointDefinitions, PartialState> = <EndpointName extends QueryKeys<Definitions>>(endpointName: EndpointName, arg: QueryArgFrom<Definitions[EndpointName]>, patches: readonly Patch[], updateProvided?: boolean) => ThunkAction<void, PartialState, any, UnknownAction>;
type AllQueryKeys<Definitions extends EndpointDefinitions> = QueryKeys<Definitions> | InfiniteQueryKeys<Definitions>;
type QueryArgFromAnyQueryDefinition<Definitions extends EndpointDefinitions, EndpointName extends AllQueryKeys<Definitions>> = Definitions[EndpointName] extends InfiniteQueryDefinition<any, any, any, any, any> ? InfiniteQueryArgFrom<Definitions[EndpointName]> : Definitions[EndpointName] extends QueryDefinition<any, any, any, any> ? QueryArgFrom<Definitions[EndpointName]> : never;
type DataFromAnyQueryDefinition<Definitions extends EndpointDefinitions, EndpointName extends AllQueryKeys<Definitions>> = Definitions[EndpointName] extends InfiniteQueryDefinition<any, any, any, any, any> ? InfiniteData<ResultTypeFrom<Definitions[EndpointName]>, PageParamFrom<Definitions[EndpointName]>> : Definitions[EndpointName] extends QueryDefinition<any, any, any, any> ? ResultTypeFrom<Definitions[EndpointName]> : unknown;
type UpsertThunkResult<Definitions extends EndpointDefinitions, EndpointName extends AllQueryKeys<Definitions>> = Definitions[EndpointName] extends InfiniteQueryDefinition<any, any, any, any, any> ? InfiniteQueryActionCreatorResult<Definitions[EndpointName]> : Definitions[EndpointName] extends QueryDefinition<any, any, any, any> ? QueryActionCreatorResult<Definitions[EndpointName]> : QueryActionCreatorResult<never>;
type UpdateQueryDataThunk<Definitions extends EndpointDefinitions, PartialState> = <EndpointName extends AllQueryKeys<Definitions>>(endpointName: EndpointName, arg: QueryArgFromAnyQueryDefinition<Definitions, EndpointName>, updateRecipe: Recipe<DataFromAnyQueryDefinition<Definitions, EndpointName>>, updateProvided?: boolean) => ThunkAction<PatchCollection, PartialState, any, UnknownAction>;
type UpsertQueryDataThunk<Definitions extends EndpointDefinitions, PartialState> = <EndpointName extends AllQueryKeys<Definitions>>(endpointName: EndpointName, arg: QueryArgFromAnyQueryDefinition<Definitions, EndpointName>, value: DataFromAnyQueryDefinition<Definitions, EndpointName>) => ThunkAction<UpsertThunkResult<Definitions, EndpointName>, PartialState, any, UnknownAction>;
/**
 * An object returned from dispatching a `api.util.updateQueryData` call.
 */
type PatchCollection = {
    /**
     * An `immer` Patch describing the cache update.
     */
    patches: Patch[];
    /**
     * An `immer` Patch to revert the cache update.
     */
    inversePatches: Patch[];
    /**
     * A function that will undo the cache update.
     */
    undo: () => void;
};

type SkipToken = typeof skipToken;
/**
 * Can be passed into `useQuery`, `useQueryState` or `useQuerySubscription`
 * instead of the query argument to get the same effect as if setting
 * `skip: true` in the query options.
 *
 * Useful for scenarios where a query should be skipped when `arg` is `undefined`
 * and TypeScript complains about it because `arg` is not allowed to be passed
 * in as `undefined`, such as
 *
 * ```ts
 * // codeblock-meta title="will error if the query argument is not allowed to be undefined" no-transpile
 * useSomeQuery(arg, { skip: !!arg })
 * ```
 *
 * ```ts
 * // codeblock-meta title="using skipToken instead" no-transpile
 * useSomeQuery(arg ?? skipToken)
 * ```
 *
 * If passed directly into a query or mutation selector, that selector will always
 * return an uninitialized state.
 */
export declare const skipToken: unique symbol;
type BuildSelectorsApiEndpointQuery<Definition extends QueryDefinition<any, any, any, any, any>, Definitions extends EndpointDefinitions> = {
    select: QueryResultSelectorFactory<Definition, RootState<Definitions, TagTypesFrom<Definition>, ReducerPathFrom<Definition>>>;
};
type BuildSelectorsApiEndpointInfiniteQuery<Definition extends InfiniteQueryDefinition<any, any, any, any, any>, Definitions extends EndpointDefinitions> = {
    select: InfiniteQueryResultSelectorFactory<Definition, RootState<Definitions, TagTypesFrom<Definition>, ReducerPathFrom<Definition>>>;
};
type BuildSelectorsApiEndpointMutation<Definition extends MutationDefinition<any, any, any, any, any>, Definitions extends EndpointDefinitions> = {
    select: MutationResultSelectorFactory<Definition, RootState<Definitions, TagTypesFrom<Definition>, ReducerPathFrom<Definition>>>;
};
type QueryResultSelectorFactory<Definition extends QueryDefinition<any, any, any, any>, RootState> = (queryArg: QueryArgFrom<Definition> | SkipToken) => (state: RootState) => QueryResultSelectorResult<Definition>;
type QueryResultSelectorResult<Definition extends QueryDefinition<any, any, any, any>> = QuerySubState<Definition> & RequestStatusFlags;
type InfiniteQueryResultSelectorFactory<Definition extends InfiniteQueryDefinition<any, any, any, any, any>, RootState> = (queryArg: InfiniteQueryArgFrom<Definition> | SkipToken) => (state: RootState) => InfiniteQueryResultSelectorResult<Definition>;
type InfiniteQueryResultFlags = {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    isFetchNextPageError: boolean;
    isFetchPreviousPageError: boolean;
};
type InfiniteQueryResultSelectorResult<Definition extends InfiniteQueryDefinition<any, any, any, any, any>> = InfiniteQuerySubState<Definition> & RequestStatusFlags & InfiniteQueryResultFlags;
type MutationResultSelectorFactory<Definition extends MutationDefinition<any, any, any, any>, RootState> = (requestId: string | {
    requestId: string | undefined;
    fixedCacheKey: string | undefined;
} | SkipToken) => (state: RootState) => MutationResultSelectorResult<Definition>;
type MutationResultSelectorResult<Definition extends MutationDefinition<any, any, any, any>> = MutationSubState<Definition> & RequestStatusFlags;

type BuildInitiateApiEndpointQuery<Definition extends QueryDefinition<any, any, any, any, any>> = {
    initiate: StartQueryActionCreator<Definition>;
};
type BuildInitiateApiEndpointInfiniteQuery<Definition extends InfiniteQueryDefinition<any, any, any, any, any>> = {
    initiate: StartInfiniteQueryActionCreator<Definition>;
};
type BuildInitiateApiEndpointMutation<Definition extends MutationDefinition<any, any, any, any, any>> = {
    initiate: StartMutationActionCreator<Definition>;
};
declare const forceQueryFnSymbol: unique symbol;
type StartQueryActionCreatorOptions = {
    subscribe?: boolean;
    forceRefetch?: boolean | number;
    subscriptionOptions?: SubscriptionOptions;
    [forceQueryFnSymbol]?: () => QueryReturnValue;
};
type StartInfiniteQueryActionCreatorOptions<D extends InfiniteQueryDefinition<any, any, any, any, any>> = StartQueryActionCreatorOptions & {
    direction?: InfiniteQueryDirection;
    param?: unknown;
} & Partial<Pick<Partial<InfiniteQueryConfigOptions<ResultTypeFrom<D>, PageParamFrom<D>, InfiniteQueryArgFrom<D>>>, 'initialPageParam' | 'refetchCachedPages'>>;
type StartQueryActionCreator<D extends QueryDefinition<any, any, any, any, any>> = (arg: QueryArgFrom<D>, options?: StartQueryActionCreatorOptions) => ThunkAction<QueryActionCreatorResult<D>, any, any, UnknownAction>;
type StartInfiniteQueryActionCreator<D extends InfiniteQueryDefinition<any, any, any, any, any>> = (arg: InfiniteQueryArgFrom<D>, options?: StartInfiniteQueryActionCreatorOptions<D>) => ThunkAction<InfiniteQueryActionCreatorResult<D>, any, any, UnknownAction>;
type QueryActionCreatorFields = {
    requestId: string;
    subscriptionOptions: SubscriptionOptions | undefined;
    abort(): void;
    unsubscribe(): void;
    updateSubscriptionOptions(options: SubscriptionOptions): void;
    queryCacheKey: string;
};
type QueryActionCreatorResult<D extends QueryDefinition<any, any, any, any>> = SafePromise<QueryResultSelectorResult<D>> & QueryActionCreatorFields & {
    arg: QueryArgFrom<D>;
    unwrap(): Promise<ResultTypeFrom<D>>;
    refetch(): QueryActionCreatorResult<D>;
};
type InfiniteQueryActionCreatorResult<D extends InfiniteQueryDefinition<any, any, any, any, any>> = SafePromise<InfiniteQueryResultSelectorResult<D>> & QueryActionCreatorFields & {
    arg: InfiniteQueryArgFrom<D>;
    unwrap(): Promise<InfiniteData<ResultTypeFrom<D>, PageParamFrom<D>>>;
    refetch(options?: Pick<StartInfiniteQueryActionCreatorOptions<D>, 'refetchCachedPages'>): InfiniteQueryActionCreatorResult<D>;
};
type StartMutationActionCreator<D extends MutationDefinition<any, any, any, any>> = (arg: QueryArgFrom<D>, options?: {
    /**
     * If this mutation should be tracked in the store.
     * If you just want to manually trigger this mutation using `dispatch` and don't care about the
     * result, state & potential errors being held in store, you can set this to false.
     * (defaults to `true`)
     */
    track?: boolean;
    fixedCacheKey?: string;
}) => ThunkAction<MutationActionCreatorResult<D>, any, any, UnknownAction>;
type MutationActionCreatorResult<D extends MutationDefinition<any, any, any, any>> = SafePromise<{
    data: ResultTypeFrom<D>;
    error?: undefined;
} | {
    data?: undefined;
    error: Exclude<BaseQueryError<D extends MutationDefinition<any, infer BaseQuery, any, any> ? BaseQuery : never>, undefined> | SerializedError;
}> & {
    /** @internal */
    arg: {
        /**
         * The name of the given endpoint for the mutation
         */
        endpointName: string;
        /**
         * The original arguments supplied to the mutation call
         */
        originalArgs: QueryArgFrom<D>;
        /**
         * Whether the mutation is being tracked in the store.
         */
        track?: boolean;
        fixedCacheKey?: string;
    };
    /**
     * A unique string generated for the request sequence
     */
    requestId: string;
    /**
     * A method to cancel the mutation promise. Note that this is not intended to prevent the mutation
     * that was fired off from reaching the server, but only to assist in handling the response.
     *
     * Calling `abort()` prior to the promise resolving will force it to reach the error state with
     * the serialized error:
     * `{ name: 'AbortError', message: 'Aborted' }`
     *
     * @example
     * ```ts
     * const [updateUser] = useUpdateUserMutation();
     *
     * useEffect(() => {
     *   const promise = updateUser(id);
     *   promise
     *     .unwrap()
     *     .catch((err) => {
     *       if (err.name === 'AbortError') return;
     *       // else handle the unexpected error
     *     })
     *
     *   return () => {
     *     promise.abort();
     *   }
     * }, [id, updateUser])
     * ```
     */
    abort(): void;
    /**
     * Unwraps a mutation call to provide the raw response/error.
     *
     * @remarks
     * If you need to access the error or success payload immediately after a mutation, you can chain .unwrap().
     *
     * @example
     * ```ts
     * // codeblock-meta title="Using .unwrap"
     * addPost({ id: 1, name: 'Example' })
     *   .unwrap()
     *   .then((payload) => console.log('fulfilled', payload))
     *   .catch((error) => console.error('rejected', error));
     * ```
     *
     * @example
     * ```ts
     * // codeblock-meta title="Using .unwrap with async await"
     * try {
     *   const payload = await addPost({ id: 1, name: 'Example' }).unwrap();
     *   console.log('fulfilled', payload)
     * } catch (error) {
     *   console.error('rejected', error);
     * }
     * ```
     */
    unwrap(): Promise<ResultTypeFrom<D>>;
    /**
     * A method to manually unsubscribe from the mutation call, meaning it will be removed from cache after the usual caching grace period.
     The value returned by the hook will reset to `isUninitialized` afterwards.
     */
    reset(): void;
};

type ReferenceCacheLifecycle = never;
interface QueryBaseLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> extends LifecycleApi<ReducerPath> {
    /**
     * Gets the current value of this cache entry.
     */
    getCacheEntry(): QueryResultSelectorResult<{
        type: DefinitionType.query;
    } & BaseEndpointDefinition<QueryArg, BaseQuery, ResultType, BaseQueryResult<BaseQuery>>>;
    /**
     * Updates the current cache entry value.
     * For documentation see `api.util.updateQueryData`.
     */
    updateCachedData(updateRecipe: Recipe<ResultType>): PatchCollection;
}
type MutationBaseLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> = LifecycleApi<ReducerPath> & {
    /**
     * Gets the current value of this cache entry.
     */
    getCacheEntry(): MutationResultSelectorResult<{
        type: DefinitionType.mutation;
    } & BaseEndpointDefinition<QueryArg, BaseQuery, ResultType, BaseQueryResult<BaseQuery>>>;
};
type LifecycleApi<ReducerPath extends string = string> = {
    /**
     * The dispatch method for the store
     */
    dispatch: ThunkDispatch<any, any, UnknownAction>;
    /**
     * A method to get the current state
     */
    getState(): RootState<any, any, ReducerPath>;
    /**
     * `extra` as provided as `thunk.extraArgument` to the `configureStore` `getDefaultMiddleware` option.
     */
    extra: unknown;
    /**
     * A unique ID generated for the mutation
     */
    requestId: string;
};
type CacheLifecyclePromises<ResultType = unknown, MetaType = unknown> = {
    /**
     * Promise that will resolve with the first value for this cache key.
     * This allows you to `await` until an actual value is in cache.
     *
     * If the cache entry is removed from the cache before any value has ever
     * been resolved, this Promise will reject with
     * `new Error('Promise never resolved before cacheEntryRemoved.')`
     * to prevent memory leaks.
     * You can just re-throw that error (or not handle it at all) -
     * it will be caught outside of `cacheEntryAdded`.
     *
     * If you don't interact with this promise, it will not throw.
     */
    cacheDataLoaded: PromiseWithKnownReason<{
        /**
         * The (transformed) query result.
         */
        data: ResultType;
        /**
         * The `meta` returned by the `baseQuery`
         */
        meta: MetaType;
    }, typeof neverResolvedError>;
    /**
     * Promise that allows you to wait for the point in time when the cache entry
     * has been removed from the cache, by not being used/subscribed to any more
     * in the application for too long or by dispatching `api.util.resetApiState`.
     */
    cacheEntryRemoved: Promise<void>;
};
interface QueryCacheLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> extends QueryBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>, CacheLifecyclePromises<ResultType, BaseQueryMeta<BaseQuery>> {
}
type MutationCacheLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> = MutationBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath> & CacheLifecyclePromises<ResultType, BaseQueryMeta<BaseQuery>>;
type CacheLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
    onCacheEntryAdded?(arg: QueryArg, api: QueryCacheLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
type CacheLifecycleInfiniteQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = CacheLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>;
type CacheLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
    onCacheEntryAdded?(arg: QueryArg, api: MutationCacheLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
declare const neverResolvedError: Error & {
    message: "Promise never resolved before cacheEntryRemoved.";
};

type ReferenceQueryLifecycle = never;
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
    queryFulfilled: PromiseWithKnownReason<{
        /**
         * The (transformed) query result.
         */
        data: ResultType;
        /**
         * The `meta` returned by the `baseQuery`
         */
        meta: BaseQueryMeta<BaseQuery>;
    }, QueryFulfilledRejectionReason<BaseQuery>>;
};
type QueryFulfilledRejectionReason<BaseQuery extends BaseQueryFn> = {
    error: BaseQueryError<BaseQuery>;
    /**
     * If this is `false`, that means this error was returned from the `baseQuery` or `queryFn` in a controlled manner.
     */
    isUnhandledError: false;
    /**
     * The `meta` returned by the `baseQuery`
     */
    meta: BaseQueryMeta<BaseQuery>;
} | {
    error: unknown;
    meta?: undefined;
    /**
     * If this is `true`, that means that this error is the result of `baseQueryFn`, `queryFn`, `transformResponse` or `transformErrorResponse` throwing an error instead of handling it properly.
     * There can not be made any assumption about the shape of `error`.
     */
    isUnhandledError: true;
};
type QueryLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
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
    onQueryStarted?(queryArgument: QueryArg, queryLifeCycleApi: QueryLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
type QueryLifecycleInfiniteQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = QueryLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>;
type QueryLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
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
    onQueryStarted?(queryArgument: QueryArg, mutationLifeCycleApi: MutationLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
interface QueryLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> extends QueryBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>, QueryLifecyclePromises<ResultType, BaseQuery> {
}
type MutationLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> = MutationBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath> & QueryLifecyclePromises<ResultType, BaseQuery>;
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
type TypedQueryOnQueryStarted<ResultType, QueryArgumentType, BaseQueryFunctionType extends BaseQueryFn, ReducerPath extends string = string> = QueryLifecycleQueryExtraOptions<ResultType, QueryArgumentType, BaseQueryFunctionType, ReducerPath>['onQueryStarted'];
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
type TypedMutationOnQueryStarted<ResultType, QueryArgumentType, BaseQueryFunctionType extends BaseQueryFn, ReducerPath extends string = string> = QueryLifecycleMutationExtraOptions<ResultType, QueryArgumentType, BaseQueryFunctionType, ReducerPath>['onQueryStarted'];

/**
 * A typesafe single entry to be upserted into the cache
 */
type NormalizedQueryUpsertEntry<Definitions extends EndpointDefinitions, EndpointName extends AllQueryKeys<Definitions>> = {
    endpointName: EndpointName;
    arg: QueryArgFromAnyQueryDefinition<Definitions, EndpointName>;
    value: DataFromAnyQueryDefinition<Definitions, EndpointName>;
};
/**
 * The internal version that is not typesafe since we can't carry the generics through `createSlice`
 */
type NormalizedQueryUpsertEntryPayload = {
    endpointName: string;
    arg: unknown;
    value: unknown;
};
type ProcessedQueryUpsertEntry = {
    queryDescription: QueryThunkArg;
    value: unknown;
};
/**
 * A typesafe representation of a util action creator that accepts cache entry descriptions to upsert
 */
type UpsertEntries<Definitions extends EndpointDefinitions> = (<EndpointNames extends Array<AllQueryKeys<Definitions>>>(entries: [
    ...{
        [I in keyof EndpointNames]: NormalizedQueryUpsertEntry<Definitions, EndpointNames[I]>;
    }
]) => PayloadAction<NormalizedQueryUpsertEntryPayload[]>) & {
    match: (action: unknown) => action is PayloadAction<NormalizedQueryUpsertEntryPayload[]>;
};
declare function buildSlice({ reducerPath, queryThunk, mutationThunk, serializeQueryArgs, context: { endpointDefinitions: definitions, apiUid, extractRehydrationInfo, hasRehydrationInfo, }, assertTagType, config, }: {
    reducerPath: string;
    queryThunk: QueryThunk;
    infiniteQueryThunk: InfiniteQueryThunk<any>;
    mutationThunk: MutationThunk;
    serializeQueryArgs: InternalSerializeQueryArgs;
    context: ApiContext<EndpointDefinitions>;
    assertTagType: AssertTagTypes;
    config: Omit<ConfigState<string>, 'online' | 'focused' | 'middlewareRegistered'>;
}): {
    reducer: redux.Reducer<{
        queries: QueryState<any>;
        mutations: MutationState<any>;
        provided: InvalidationState<string>;
        subscriptions: SubscriptionState;
        config: ConfigState<string>;
    }, redux.UnknownAction, Partial<{
        queries: QueryState<any> | undefined;
        mutations: MutationState<any> | undefined;
        provided: InvalidationState<string> | undefined;
        subscriptions: SubscriptionState | undefined;
        config: ConfigState<string> | undefined;
    }>>;
    actions: {
        resetApiState: _reduxjs_toolkit.ActionCreatorWithoutPayload<`${string}/resetApiState`>;
        updateProvidedBy: _reduxjs_toolkit.ActionCreatorWithPreparedPayload<[payload: {
            queryCacheKey: QueryCacheKey;
            providedTags: readonly FullTagDescription<string>[];
        }[]], {
            queryCacheKey: QueryCacheKey;
            providedTags: readonly FullTagDescription<string>[];
        }[], `${string}/invalidation/updateProvidedBy`, never, unknown>;
        removeMutationResult: _reduxjs_toolkit.ActionCreatorWithPreparedPayload<[payload: MutationSubstateIdentifier], MutationSubstateIdentifier, `${string}/mutations/removeMutationResult`, never, unknown>;
        subscriptionsUpdated: _reduxjs_toolkit.ActionCreatorWithPreparedPayload<[payload: Patch[]], Patch[], `${string}/internalSubscriptions/subscriptionsUpdated`, never, unknown>;
        updateSubscriptionOptions: _reduxjs_toolkit.ActionCreatorWithPayload<{
            endpointName: string;
            requestId: string;
            options: Subscribers[number];
        } & QuerySubstateIdentifier, `${string}/subscriptions/updateSubscriptionOptions`>;
        unsubscribeQueryResult: _reduxjs_toolkit.ActionCreatorWithPayload<{
            requestId: string;
        } & QuerySubstateIdentifier, `${string}/subscriptions/unsubscribeQueryResult`>;
        internal_getRTKQSubscriptions: _reduxjs_toolkit.ActionCreatorWithoutPayload<`${string}/subscriptions/internal_getRTKQSubscriptions`>;
        removeQueryResult: _reduxjs_toolkit.ActionCreatorWithPreparedPayload<[payload: QuerySubstateIdentifier], QuerySubstateIdentifier, `${string}/queries/removeQueryResult`, never, unknown>;
        cacheEntriesUpserted: _reduxjs_toolkit.ActionCreatorWithPreparedPayload<[payload: NormalizedQueryUpsertEntryPayload[]], ProcessedQueryUpsertEntry[], `${string}/queries/cacheEntriesUpserted`, never, {
            RTK_autoBatch: boolean;
            requestId: string;
            timestamp: number;
        }>;
        queryResultPatched: _reduxjs_toolkit.ActionCreatorWithPreparedPayload<[payload: QuerySubstateIdentifier & {
            patches: readonly Patch[];
        }], QuerySubstateIdentifier & {
            patches: readonly Patch[];
        }, `${string}/queries/queryResultPatched`, never, unknown>;
        middlewareRegistered: _reduxjs_toolkit.ActionCreatorWithPayload<string, `${string}/config/middlewareRegistered`>;
    };
};
type SliceActions = ReturnType<typeof buildSlice>['actions'];

declare const onFocus: ActionCreatorWithoutPayload<"__rtkq/focused">;
declare const onFocusLost: ActionCreatorWithoutPayload<"__rtkq/unfocused">;
declare const onOnline: ActionCreatorWithoutPayload<"__rtkq/online">;
declare const onOffline: ActionCreatorWithoutPayload<"__rtkq/offline">;
/**
 * A utility used to enable `refetchOnMount` and `refetchOnReconnect` behaviors.
 * It requires the dispatch method from your store.
 * Calling `setupListeners(store.dispatch)` will configure listeners with the recommended defaults,
 * but you have the option of providing a callback for more granular control.
 *
 * @example
 * ```ts
 * setupListeners(store.dispatch)
 * ```
 *
 * @param dispatch - The dispatch method from your store
 * @param customHandler - An optional callback for more granular control over listener behavior
 * @returns Return value of the handler.
 * The default handler returns an `unsubscribe` method that can be called to remove the listeners.
 */
declare function setupListeners(dispatch: ThunkDispatch<any, any, any>, customHandler?: (dispatch: ThunkDispatch<any, any, any>, actions: {
    onFocus: typeof onFocus;
    onFocusLost: typeof onFocusLost;
    onOnline: typeof onOnline;
    onOffline: typeof onOffline;
}) => () => void): () => void;

/**
 * Note: this file should import all other files for type discovery and declaration merging
 */

/**
 * `ifOlderThan` - (default: `false` | `number`) - _number is value in seconds_
 * - If specified, it will only run the query if the difference between `new Date()` and the last `fulfilledTimeStamp` is greater than the given value
 *
 * @overloadSummary
 * `force`
 * - If `force: true`, it will ignore the `ifOlderThan` value if it is set and the query will be run even if it exists in the cache.
 */
type PrefetchOptions = {
    ifOlderThan?: false | number;
} | {
    force?: boolean;
};
export declare const coreModuleName: unique symbol;
type CoreModule = typeof coreModuleName | ReferenceCacheLifecycle | ReferenceQueryLifecycle | ReferenceCacheCollection;
type ThunkWithReturnValue<T> = ThunkAction<T, any, any, UnknownAction>;
interface ApiModules<BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string, TagTypes extends string> {
    [coreModuleName]: {
        /**
         * This api's reducer should be mounted at `store[api.reducerPath]`.
         *
         * @example
         * ```ts
         * configureStore({
         *   reducer: {
         *     [api.reducerPath]: api.reducer,
         *   },
         *   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
         * })
         * ```
         */
        reducerPath: ReducerPath;
        /**
         * Internal actions not part of the public API. Note: These are subject to change at any given time.
         */
        internalActions: InternalActions;
        /**
         *  A standard redux reducer that enables core functionality. Make sure it's included in your store.
         *
         * @example
         * ```ts
         * configureStore({
         *   reducer: {
         *     [api.reducerPath]: api.reducer,
         *   },
         *   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
         * })
         * ```
         */
        reducer: Reducer<CombinedState<Definitions, TagTypes, ReducerPath>, UnknownAction>;
        /**
         * This is a standard redux middleware and is responsible for things like polling, garbage collection and a handful of other things. Make sure it's included in your store.
         *
         * @example
         * ```ts
         * configureStore({
         *   reducer: {
         *     [api.reducerPath]: api.reducer,
         *   },
         *   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
         * })
         * ```
         */
        middleware: Middleware<{}, RootState<Definitions, string, ReducerPath>, ThunkDispatch<any, any, UnknownAction>>;
        /**
         * A collection of utility thunks for various situations.
         */
        util: {
            /**
             * A thunk that (if dispatched) will return a specific running query, identified
             * by `endpointName` and `arg`.
             * If that query is not running, dispatching the thunk will result in `undefined`.
             *
             * Can be used to await a specific query triggered in any way,
             * including via hook calls or manually dispatching `initiate` actions.
             *
             * See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for details.
             */
            getRunningQueryThunk<EndpointName extends AllQueryKeys<Definitions>>(endpointName: EndpointName, arg: QueryArgFromAnyQueryDefinition<Definitions, EndpointName>): ThunkWithReturnValue<QueryActionCreatorResult<Definitions[EndpointName] & {
                type: 'query';
            }> | InfiniteQueryActionCreatorResult<Definitions[EndpointName] & {
                type: 'infinitequery';
            }> | undefined>;
            /**
             * A thunk that (if dispatched) will return a specific running mutation, identified
             * by `endpointName` and `fixedCacheKey` or `requestId`.
             * If that mutation is not running, dispatching the thunk will result in `undefined`.
             *
             * Can be used to await a specific mutation triggered in any way,
             * including via hook trigger functions or manually dispatching `initiate` actions.
             *
             * See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for details.
             */
            getRunningMutationThunk<EndpointName extends MutationKeys<Definitions>>(endpointName: EndpointName, fixedCacheKeyOrRequestId: string): ThunkWithReturnValue<MutationActionCreatorResult<Definitions[EndpointName] & {
                type: 'mutation';
            }> | undefined>;
            /**
             * A thunk that (if dispatched) will return all running queries.
             *
             * Useful for SSR scenarios to await all running queries triggered in any way,
             * including via hook calls or manually dispatching `initiate` actions.
             *
             * See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for details.
             */
            getRunningQueriesThunk(): ThunkWithReturnValue<Array<QueryActionCreatorResult<any> | InfiniteQueryActionCreatorResult<any>>>;
            /**
             * A thunk that (if dispatched) will return all running mutations.
             *
             * Useful for SSR scenarios to await all running mutations triggered in any way,
             * including via hook calls or manually dispatching `initiate` actions.
             *
             * See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for details.
             */
            getRunningMutationsThunk(): ThunkWithReturnValue<Array<MutationActionCreatorResult<any>>>;
            /**
             * A Redux thunk that can be used to manually trigger pre-fetching of data.
             *
             * The thunk accepts three arguments: the name of the endpoint we are updating (such as `'getPost'`), the appropriate query arg values to construct the desired cache key, and a set of options used to determine if the data actually should be re-fetched based on cache staleness.
             *
             * React Hooks users will most likely never need to use this directly, as the `usePrefetch` hook will dispatch this thunk internally as needed when you call the prefetching function supplied by the hook.
             *
             * @example
             *
             * ```ts no-transpile
             * dispatch(api.util.prefetch('getPosts', undefined, { force: true }))
             * ```
             */
            prefetch<EndpointName extends QueryKeys<Definitions>>(endpointName: EndpointName, arg: QueryArgFrom<Definitions[EndpointName]>, options?: PrefetchOptions): ThunkAction<void, any, any, UnknownAction>;
            /**
             * A Redux thunk action creator that, when dispatched, creates and applies a set of JSON diff/patch objects to the current state. This immediately updates the Redux state with those changes.
             *
             * The thunk action creator accepts three arguments: the name of the endpoint we are updating (such as `'getPost'`), the appropriate query arg values to construct the desired cache key, and an `updateRecipe` callback function. The callback receives an Immer-wrapped `draft` of the current state, and may modify the draft to match the expected results after the mutation completes successfully.
             *
             * The thunk executes _synchronously_, and returns an object containing `{patches: Patch[], inversePatches: Patch[], undo: () => void}`. The `patches` and `inversePatches` are generated using Immer's [`produceWithPatches` method](https://immerjs.github.io/immer/patches).
             *
             * This is typically used as the first step in implementing optimistic updates. The generated `inversePatches` can be used to revert the updates by calling `dispatch(patchQueryData(endpointName, arg, inversePatches))`. Alternatively, the `undo` method can be called directly to achieve the same effect.
             *
             * Note that the first two arguments (`endpointName` and `arg`) are used to determine which existing cache entry to update. If no existing cache entry is found, the `updateRecipe` callback will not run.
             *
             * @example
             *
             * ```ts
             * const patchCollection = dispatch(
             *   api.util.updateQueryData('getPosts', undefined, (draftPosts) => {
             *     draftPosts.push({ id: 1, name: 'Teddy' })
             *   })
             * )
             * ```
             */
            updateQueryData: UpdateQueryDataThunk<Definitions, RootState<Definitions, string, ReducerPath>>;
            /**
             * A Redux thunk action creator that, when dispatched, acts as an artificial API request to upsert a value into the cache.
             *
             * The thunk action creator accepts three arguments: the name of the endpoint we are updating (such as `'getPost'`), the appropriate query arg values to construct the desired cache key, and the data to upsert.
             *
             * If no cache entry for that cache key exists, a cache entry will be created and the data added. If a cache entry already exists, this will _overwrite_ the existing cache entry data.
             *
             * The thunk executes _asynchronously_, and returns a promise that resolves when the store has been updated.
             *
             * If dispatched while an actual request is in progress, both the upsert and request will be handled as soon as they resolve, resulting in a "last result wins" update behavior.
             *
             * @example
             *
             * ```ts
             * await dispatch(
             *   api.util.upsertQueryData('getPost', {id: 1}, {id: 1, text: "Hello!"})
             * )
             * ```
             */
            upsertQueryData: UpsertQueryDataThunk<Definitions, RootState<Definitions, string, ReducerPath>>;
            /**
             * A Redux thunk that applies a JSON diff/patch array to the cached data for a given query result. This immediately updates the Redux state with those changes.
             *
             * The thunk accepts three arguments: the name of the endpoint we are updating (such as `'getPost'`), the appropriate query arg values to construct the desired cache key, and a JSON diff/patch array as produced by Immer's `produceWithPatches`.
             *
             * This is typically used as the second step in implementing optimistic updates. If a request fails, the optimistically-applied changes can be reverted by dispatching `patchQueryData` with the `inversePatches` that were generated by `updateQueryData` earlier.
             *
             * In cases where it is desired to simply revert the previous changes, it may be preferable to call the `undo` method returned from dispatching `updateQueryData` instead.
             *
             * @example
             * ```ts
             * const patchCollection = dispatch(
             *   api.util.updateQueryData('getPosts', undefined, (draftPosts) => {
             *     draftPosts.push({ id: 1, name: 'Teddy' })
             *   })
             * )
             *
             * // later
             * dispatch(
             *   api.util.patchQueryData('getPosts', undefined, patchCollection.inversePatches)
             * )
             *
             * // or
             * patchCollection.undo()
             * ```
             */
            patchQueryData: PatchQueryDataThunk<Definitions, RootState<Definitions, string, ReducerPath>>;
            /**
             * A Redux action creator that can be dispatched to manually reset the api state completely. This will immediately remove all existing cache entries, and all queries will be considered 'uninitialized'.
             *
             * @example
             *
             * ```ts
             * dispatch(api.util.resetApiState())
             * ```
             */
            resetApiState: SliceActions['resetApiState'];
            upsertQueryEntries: UpsertEntries<Definitions>;
            /**
             * A Redux action creator that can be used to manually invalidate cache tags for [automated re-fetching](../../usage/automated-refetching.mdx).
             *
             * The action creator accepts one argument: the cache tags to be invalidated. It returns an action with those tags as a payload, and the corresponding `invalidateTags` action type for the api.
             *
             * Dispatching the result of this action creator will [invalidate](../../usage/automated-refetching.mdx#invalidating-cache-data) the given tags, causing queries to automatically re-fetch if they are subscribed to cache data that [provides](../../usage/automated-refetching.mdx#providing-cache-data) the corresponding tags.
             *
             * The array of tags provided to the action creator should be in one of the following formats, where `TagType` is equal to a string provided to the [`tagTypes`](../createApi.mdx#tagtypes) property of the api:
             *
             * - `[TagType]`
             * - `[{ type: TagType }]`
             * - `[{ type: TagType, id: number | string }]`
             *
             * @example
             *
             * ```ts
             * dispatch(api.util.invalidateTags(['Post']))
             * dispatch(api.util.invalidateTags([{ type: 'Post', id: 1 }]))
             * dispatch(
             *   api.util.invalidateTags([
             *     { type: 'Post', id: 1 },
             *     { type: 'Post', id: 'LIST' },
             *   ])
             * )
             * ```
             */
            invalidateTags: ActionCreatorWithPayload<Array<TagDescription<TagTypes> | null | undefined>, string>;
            /**
             * A function to select all `{ endpointName, originalArgs, queryCacheKey }` combinations that would be invalidated by a specific set of tags.
             *
             * Can be used for mutations that want to do optimistic updates instead of invalidating a set of tags, but don't know exactly what they need to update.
             */
            selectInvalidatedBy: (state: RootState<Definitions, string, ReducerPath>, tags: ReadonlyArray<TagDescription<TagTypes> | null | undefined>) => Array<{
                endpointName: string;
                originalArgs: any;
                queryCacheKey: string;
            }>;
            /**
             * A function to select all arguments currently cached for a given endpoint.
             *
             * Can be used for mutations that want to do optimistic updates instead of invalidating a set of tags, but don't know exactly what they need to update.
             */
            selectCachedArgsForQuery: <QueryName extends AllQueryKeys<Definitions>>(state: RootState<Definitions, string, ReducerPath>, queryName: QueryName) => Array<QueryArgFromAnyQuery<Definitions[QueryName]>>;
        };
        /**
         * Endpoints based on the input endpoints provided to `createApi`, containing `select` and `action matchers`.
         */
        endpoints: {
            [K in keyof Definitions]: Definitions[K] extends QueryDefinition<any, any, any, any, any> ? ApiEndpointQuery<Definitions[K], Definitions> : Definitions[K] extends MutationDefinition<any, any, any, any, any> ? ApiEndpointMutation<Definitions[K], Definitions> : Definitions[K] extends InfiniteQueryDefinition<any, any, any, any, any> ? ApiEndpointInfiniteQuery<Definitions[K], Definitions> : never;
        };
    };
}
interface ApiEndpointQuery<Definition extends QueryDefinition<any, any, any, any, any>, Definitions extends EndpointDefinitions> extends BuildThunksApiEndpointQuery<Definition>, BuildInitiateApiEndpointQuery<Definition>, BuildSelectorsApiEndpointQuery<Definition, Definitions> {
    name: string;
    /**
     * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
     */
    Types: NonNullable<Definition['Types']>;
}
interface ApiEndpointInfiniteQuery<Definition extends InfiniteQueryDefinition<any, any, any, any, any>, Definitions extends EndpointDefinitions> extends BuildThunksApiEndpointInfiniteQuery<Definition>, BuildInitiateApiEndpointInfiniteQuery<Definition>, BuildSelectorsApiEndpointInfiniteQuery<Definition, Definitions> {
    name: string;
    /**
     * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
     */
    Types: NonNullable<Definition['Types']>;
}
interface ApiEndpointMutation<Definition extends MutationDefinition<any, any, any, any, any>, Definitions extends EndpointDefinitions> extends BuildThunksApiEndpointMutation<Definition>, BuildInitiateApiEndpointMutation<Definition>, BuildSelectorsApiEndpointMutation<Definition, Definitions> {
    name: string;
    /**
     * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
     */
    Types: NonNullable<Definition['Types']>;
}
type ListenerActions = {
    /**
     * Will cause the RTK Query middleware to trigger any refetchOnReconnect-related behavior
     * @link https://redux-toolkit.js.org/rtk-query/api/setupListeners
     */
    onOnline: typeof onOnline;
    onOffline: typeof onOffline;
    /**
     * Will cause the RTK Query middleware to trigger any refetchOnFocus-related behavior
     * @link https://redux-toolkit.js.org/rtk-query/api/setupListeners
     */
    onFocus: typeof onFocus;
    onFocusLost: typeof onFocusLost;
};
type InternalActions = SliceActions & ListenerActions;
interface CoreModuleOptions {
    /**
     * A selector creator (usually from `reselect`, or matching the same signature)
     */
    createSelector?: CreateSelectorFunction<any, any, any>;
}
/**
 * Creates a module containing the basic redux logic for use with `buildCreateApi`.
 *
 * @example
 * ```ts
 * const createBaseApi = buildCreateApi(coreModule());
 * ```
 */
declare const coreModule: ({ createSelector, }?: CoreModuleOptions) => Module<CoreModule>;

declare const createApi: CreateApi<typeof coreModuleName>;

type ModuleName = keyof ApiModules<any, any, any, any>;
type Module<Name extends ModuleName> = {
    name: Name;
    init<BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string, TagTypes extends string>(api: Api<BaseQuery, EndpointDefinitions, ReducerPath, TagTypes, ModuleName>, options: WithRequiredProp<CreateApiOptions<BaseQuery, Definitions, ReducerPath, TagTypes>, 'reducerPath' | 'serializeQueryArgs' | 'keepUnusedDataFor' | 'refetchOnMountOrArgChange' | 'refetchOnFocus' | 'refetchOnReconnect' | 'invalidationBehavior' | 'tagTypes'>, context: ApiContext<Definitions>): {
        injectEndpoint(endpointName: string, definition: EndpointDefinition<any, any, any, any>): void;
    };
};
interface ApiContext<Definitions extends EndpointDefinitions> {
    apiUid: string;
    endpointDefinitions: Definitions;
    batch(cb: () => void): void;
    extractRehydrationInfo: (action: UnknownAction) => CombinedState<any, any, any> | undefined;
    hasRehydrationInfo: (action: UnknownAction) => boolean;
}
type Api<BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string, TagTypes extends string, Enhancers extends ModuleName = CoreModule> = UnionToIntersection<ApiModules<BaseQuery, Definitions, ReducerPath, TagTypes>[Enhancers]> & {
    /**
     * A function to inject the endpoints into the original API, but also give you that same API with correct types for these endpoints back. Useful with code-splitting.
     */
    injectEndpoints<NewDefinitions extends EndpointDefinitions>(_: {
        endpoints: (build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>) => NewDefinitions;
        /**
         * Optionally allows endpoints to be overridden if defined by multiple `injectEndpoints` calls.
         *
         * If set to `true`, will override existing endpoints with the new definition.
         * If set to `'throw'`, will throw an error if an endpoint is redefined with a different definition.
         * If set to `false` (or unset), will not override existing endpoints with the new definition, and log a warning in development.
         */
        overrideExisting?: boolean | 'throw';
    }): Api<BaseQuery, Definitions & NewDefinitions, ReducerPath, TagTypes, Enhancers>;
    /**
     *A function to enhance a generated API with additional information. Useful with code-generation.
     */
    enhanceEndpoints<NewTagTypes extends string = never, NewDefinitions extends EndpointDefinitions = never>(_: {
        addTagTypes?: readonly NewTagTypes[];
        endpoints?: UpdateDefinitions<Definitions, TagTypes | NoInfer<NewTagTypes>, NewDefinitions> extends infer NewDefinitions ? {
            [K in keyof NewDefinitions]?: Partial<NewDefinitions[K]> | ((definition: NewDefinitions[K]) => void);
        } : never;
    }): Api<BaseQuery, UpdateDefinitions<Definitions, TagTypes | NewTagTypes, NewDefinitions>, ReducerPath, TagTypes | NewTagTypes, Enhancers>;
};

type PromiseWithKnownReason<T, R> = Omit<Promise<T>, 'then' | 'catch'> & {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: R) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: R) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
};

type ReferenceCacheCollection = never;
/**
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
 *       query: () => 'posts',
 *       // highlight-start
 *       keepUnusedDataFor: 5
 *       // highlight-end
 *     })
 *   })
 * })
 * ```
 */
type CacheCollectionQueryExtraOptions = {
    /**
     * Overrides the api-wide definition of `keepUnusedDataFor` for this endpoint only. _(This value is in seconds.)_
     *
     * This is how long RTK Query will keep your data cached for **after** the last component unsubscribes. For example, if you query an endpoint, then unmount the component, then mount another component that makes the same request within the given time frame, the most recent value will be served from the cache.
     */
    keepUnusedDataFor?: number;
};

export declare const _NEVER: unique symbol;
type NEVER = typeof _NEVER;
/**
 * Creates a "fake" baseQuery to be used if your api *only* uses the `queryFn` definition syntax.
 * This also allows you to specify a specific error type to be shared by all your `queryFn` definitions.
 */
declare function fakeBaseQuery<ErrorType>(): BaseQueryFn<void, NEVER, ErrorType, {}>;

declare class NamedSchemaError extends SchemaError {
    readonly value: any;
    readonly schemaName: `${SchemaType}Schema`;
    readonly _bqMeta: any;
    constructor(issues: readonly StandardSchemaV1.Issue[], value: any, schemaName: `${SchemaType}Schema`, _bqMeta: any);
}

declare const rawResultType: unique symbol;
declare const resultType: unique symbol;
declare const baseQuery: unique symbol;
interface SchemaFailureInfo {
    endpoint: string;
    arg: any;
    type: 'query' | 'mutation';
    queryCacheKey?: string;
}
type SchemaFailureHandler = (error: NamedSchemaError, info: SchemaFailureInfo) => void;
type SchemaFailureConverter<BaseQuery extends BaseQueryFn> = (error: NamedSchemaError, info: SchemaFailureInfo) => BaseQueryError<BaseQuery>;
type EndpointDefinitionWithQuery<QueryArg, BaseQuery extends BaseQueryFn, ResultType, RawResultType extends BaseQueryResult<BaseQuery>> = {
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
    query(arg: QueryArg): BaseQueryArg<BaseQuery>;
    queryFn?: never;
    /**
     * A function to manipulate the data returned by a query or mutation.
     */
    transformResponse?(baseQueryReturnValue: RawResultType, meta: BaseQueryMeta<BaseQuery>, arg: QueryArg): ResultType | Promise<ResultType>;
    /**
     * A function to manipulate the data returned by a failed query or mutation.
     */
    transformErrorResponse?(baseQueryReturnValue: BaseQueryError<BaseQuery>, meta: BaseQueryMeta<BaseQuery>, arg: QueryArg): unknown;
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
    rawResponseSchema?: StandardSchemaV1<RawResultType>;
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
    rawErrorResponseSchema?: StandardSchemaV1<BaseQueryError<BaseQuery>>;
};
type EndpointDefinitionWithQueryFn<QueryArg, BaseQuery extends BaseQueryFn, ResultType> = {
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
    queryFn(arg: QueryArg, api: BaseQueryApi, extraOptions: BaseQueryExtraOptions<BaseQuery>, baseQuery: (arg: Parameters<BaseQuery>[0]) => ReturnType<BaseQuery>): MaybePromise<QueryReturnValue<ResultType, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>>;
    query?: never;
    transformResponse?: never;
    transformErrorResponse?: never;
    rawResponseSchema?: never;
    rawErrorResponseSchema?: never;
};
type BaseEndpointTypes<QueryArg, BaseQuery extends BaseQueryFn, ResultType, RawResultType> = {
    QueryArg: QueryArg;
    BaseQuery: BaseQuery;
    ResultType: ResultType;
    RawResultType: RawResultType;
};
type SchemaType = 'arg' | 'rawResponse' | 'response' | 'rawErrorResponse' | 'errorResponse' | 'meta';
interface CommonEndpointDefinition<QueryArg, BaseQuery extends BaseQueryFn, ResultType> {
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
    argSchema?: StandardSchemaV1<QueryArg>;
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
    responseSchema?: StandardSchemaV1<ResultType>;
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
    errorResponseSchema?: StandardSchemaV1<BaseQueryError<BaseQuery>>;
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
    metaSchema?: StandardSchemaV1<BaseQueryMeta<BaseQuery>>;
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
    structuralSharing?: boolean;
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
    onSchemaFailure?: SchemaFailureHandler;
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
    catchSchemaFailure?: SchemaFailureConverter<BaseQuery>;
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
    skipSchemaValidation?: boolean | SchemaType[];
}
type BaseEndpointDefinition<QueryArg, BaseQuery extends BaseQueryFn, ResultType, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = (([CastAny<BaseQueryResult<BaseQuery>, {}>] extends [NEVER] ? never : EndpointDefinitionWithQuery<QueryArg, BaseQuery, ResultType, RawResultType>) | EndpointDefinitionWithQueryFn<QueryArg, BaseQuery, ResultType>) & CommonEndpointDefinition<QueryArg, BaseQuery, ResultType> & {
    [rawResultType]?: RawResultType;
    [resultType]?: ResultType;
    [baseQuery]?: BaseQuery;
} & HasRequiredProps<BaseQueryExtraOptions<BaseQuery>, {
    extraOptions: BaseQueryExtraOptions<BaseQuery>;
}, {
    extraOptions?: BaseQueryExtraOptions<BaseQuery>;
}>;
declare enum DefinitionType {
    query = "query",
    mutation = "mutation",
    infinitequery = "infinitequery"
}
type TagDescriptionArray<TagTypes extends string> = ReadonlyArray<TagDescription<TagTypes> | undefined | null>;
type GetResultDescriptionFn<TagTypes extends string, ResultType, QueryArg, ErrorType, MetaType> = (result: ResultType | undefined, error: ErrorType | undefined, arg: QueryArg, meta: MetaType) => TagDescriptionArray<TagTypes>;
type FullTagDescription<TagType> = {
    type: TagType;
    id?: number | string;
};
type TagDescription<TagType> = TagType | FullTagDescription<TagType>;
/**
 * @public
 */
type ResultDescription<TagTypes extends string, ResultType, QueryArg, ErrorType, MetaType> = TagDescriptionArray<TagTypes> | GetResultDescriptionFn<TagTypes, ResultType, QueryArg, ErrorType, MetaType>;
type QueryTypes<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType, RawResultType> & {
    /**
     * The endpoint definition type. To be used with some internal generic types.
     * @example
     * ```ts
     * const useMyWrappedHook: UseQuery<typeof api.endpoints.query.Types.QueryDefinition> = ...
     * ```
     */
    QueryDefinition: QueryDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath>;
    TagTypes: TagTypes;
    ReducerPath: ReducerPath;
};
/**
 * @public
 */
interface QueryExtraOptions<TagTypes extends string, ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> extends CacheLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>, QueryLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>, CacheCollectionQueryExtraOptions {
    type: DefinitionType.query;
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
    providesTags?: ResultDescription<TagTypes, ResultType, QueryArg, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>;
    /**
     * Not to be used. A query should not invalidate tags in the cache.
     */
    invalidatesTags?: never;
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
    serializeQueryArgs?: SerializeQueryArgs<QueryArg, string | number | boolean | Record<any, any>>;
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
    merge?(currentCacheData: ResultType, responseData: ResultType, otherArgs: {
        arg: QueryArg;
        baseQueryMeta: BaseQueryMeta<BaseQuery>;
        requestId: string;
        fulfilledTimeStamp: number;
    }): ResultType | void;
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
        currentArg: QueryArg | undefined;
        previousArg: QueryArg | undefined;
        state: RootState<any, any, string>;
        endpointState?: QuerySubState<any>;
    }): boolean;
    /**
     * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
     */
    Types?: QueryTypes<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
}
type QueryDefinition<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = BaseEndpointDefinition<QueryArg, BaseQuery, ResultType, RawResultType> & QueryExtraOptions<TagTypes, ResultType, QueryArg, BaseQuery, ReducerPath, RawResultType>;
type InfiniteQueryTypes<QueryArg, PageParam, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType, RawResultType> & {
    /**
     * The endpoint definition type. To be used with some internal generic types.
     * @example
     * ```ts
     * const useMyWrappedHook: UseQuery<typeof api.endpoints.query.Types.QueryDefinition> = ...
     * ```
     */
    InfiniteQueryDefinition: InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath>;
    TagTypes: TagTypes;
    ReducerPath: ReducerPath;
};
interface InfiniteQueryExtraOptions<TagTypes extends string, ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> extends CacheLifecycleInfiniteQueryExtraOptions<InfiniteData<ResultType, PageParam>, QueryArg, BaseQuery, ReducerPath>, QueryLifecycleInfiniteQueryExtraOptions<InfiniteData<ResultType, PageParam>, QueryArg, BaseQuery, ReducerPath>, CacheCollectionQueryExtraOptions {
    type: DefinitionType.infinitequery;
    providesTags?: ResultDescription<TagTypes, InfiniteData<ResultType, PageParam>, QueryArg, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>;
    /**
     * Not to be used. A query should not invalidate tags in the cache.
     */
    invalidatesTags?: never;
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
    infiniteQueryOptions: InfiniteQueryConfigOptions<ResultType, PageParam, QueryArg>;
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
    serializeQueryArgs?: SerializeQueryArgs<QueryArg, string | number | boolean | Record<any, any>>;
    /**
     * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
     */
    Types?: InfiniteQueryTypes<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
}
type InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = BaseEndpointDefinition<InfiniteQueryCombinedArg<QueryArg, PageParam>, BaseQuery, ResultType, RawResultType> & InfiniteQueryExtraOptions<TagTypes, ResultType, QueryArg, PageParam, BaseQuery, ReducerPath, RawResultType>;
type MutationTypes<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType, RawResultType> & {
    /**
     * The endpoint definition type. To be used with some internal generic types.
     * @example
     * ```ts
     * const useMyWrappedHook: UseMutation<typeof api.endpoints.query.Types.MutationDefinition> = ...
     * ```
     */
    MutationDefinition: MutationDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath>;
    TagTypes: TagTypes;
    ReducerPath: ReducerPath;
};
/**
 * @public
 */
interface MutationExtraOptions<TagTypes extends string, ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> extends CacheLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>, QueryLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath> {
    type: DefinitionType.mutation;
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
    invalidatesTags?: ResultDescription<TagTypes, ResultType, QueryArg, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>;
    /**
     * Not to be used. A mutation should not provide tags to the cache.
     */
    providesTags?: never;
    /**
     * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
     */
    Types?: MutationTypes<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
}
type MutationDefinition<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = BaseEndpointDefinition<QueryArg, BaseQuery, ResultType, RawResultType> & MutationExtraOptions<TagTypes, ResultType, QueryArg, BaseQuery, ReducerPath, RawResultType>;
type EndpointDefinition<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, PageParam = any, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>> = QueryDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType> | MutationDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType> | InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
type EndpointDefinitions = Record<string, EndpointDefinition<any, any, any, any, any, any, any>>;
type EndpointBuilder<BaseQuery extends BaseQueryFn, TagTypes extends string, ReducerPath extends string> = {
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
    query<ResultType, QueryArg, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>>(definition: OmitFromUnion<QueryDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>, 'type'>): QueryDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
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
    mutation<ResultType, QueryArg, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>>(definition: OmitFromUnion<MutationDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>, 'type'>): MutationDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
    infiniteQuery<ResultType, QueryArg, PageParam, RawResultType extends BaseQueryResult<BaseQuery> = BaseQueryResult<BaseQuery>>(definition: OmitFromUnion<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>, 'type'>): InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath, RawResultType>;
};
type AssertTagTypes = <T extends FullTagDescription<string>>(t: T) => T;
type QueryArgFrom<D extends BaseEndpointDefinition<any, any, any, any>> = D extends BaseEndpointDefinition<infer QA, any, any, any> ? QA : never;
type InfiniteQueryArgFrom<D extends BaseEndpointDefinition<any, any, any, any>> = D extends InfiniteQueryDefinition<infer QA, any, any, any, any, any, any> ? QA : never;
type QueryArgFromAnyQuery<D extends BaseEndpointDefinition<any, any, any, any>> = D extends InfiniteQueryDefinition<any, any, any, any, any, any, any> ? InfiniteQueryArgFrom<D> : D extends QueryDefinition<any, any, any, any, any, any> ? QueryArgFrom<D> : never;
type ResultTypeFrom<D extends BaseEndpointDefinition<any, any, any, any>> = D extends BaseEndpointDefinition<any, any, infer RT, any> ? RT : unknown;
type ReducerPathFrom<D extends EndpointDefinition<any, any, any, any, any, any, any>> = D extends EndpointDefinition<any, any, any, any, infer RP, any, any> ? RP : unknown;
type TagTypesFrom<D extends EndpointDefinition<any, any, any, any, any, any, any>> = D extends EndpointDefinition<any, any, infer TT, any, any, any, any> ? TT : unknown;
type PageParamFrom<D extends InfiniteQueryDefinition<any, any, any, any, any, any, any>> = D extends InfiniteQueryDefinition<any, infer PP, any, any, any, any, any> ? PP : unknown;
type InfiniteQueryCombinedArg<QueryArg, PageParam> = {
    queryArg: QueryArg;
    pageParam: PageParam;
};
type TagTypesFromApi<T> = T extends Api<any, any, any, infer TagTypes> ? TagTypes : never;
type DefinitionsFromApi<T> = T extends Api<any, infer Definitions, any, any> ? Definitions : never;
type TransformedResponse<NewDefinitions extends EndpointDefinitions, K, ResultType> = K extends keyof NewDefinitions ? NewDefinitions[K]['transformResponse'] extends undefined ? ResultType : UnwrapPromise<ReturnType<NonUndefined<NewDefinitions[K]['transformResponse']>>> : ResultType;
type OverrideResultType<Definition, NewResultType> = Definition extends QueryDefinition<infer QueryArg, infer BaseQuery, infer TagTypes, any, infer ReducerPath> ? QueryDefinition<QueryArg, BaseQuery, TagTypes, NewResultType, ReducerPath> : Definition extends MutationDefinition<infer QueryArg, infer BaseQuery, infer TagTypes, any, infer ReducerPath> ? MutationDefinition<QueryArg, BaseQuery, TagTypes, NewResultType, ReducerPath> : Definition extends InfiniteQueryDefinition<infer QueryArg, infer PageParam, infer BaseQuery, infer TagTypes, any, infer ReducerPath> ? InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, NewResultType, ReducerPath> : never;
type UpdateDefinitions<Definitions extends EndpointDefinitions, NewTagTypes extends string, NewDefinitions extends EndpointDefinitions> = {
    [K in keyof Definitions]: Definitions[K] extends QueryDefinition<infer QueryArg, infer BaseQuery, any, infer ResultType, infer ReducerPath> ? QueryDefinition<QueryArg, BaseQuery, NewTagTypes, TransformedResponse<NewDefinitions, K, ResultType>, ReducerPath> : Definitions[K] extends MutationDefinition<infer QueryArg, infer BaseQuery, any, infer ResultType, infer ReducerPath> ? MutationDefinition<QueryArg, BaseQuery, NewTagTypes, TransformedResponse<NewDefinitions, K, ResultType>, ReducerPath> : Definitions[K] extends InfiniteQueryDefinition<infer QueryArg, infer PageParam, infer BaseQuery, any, infer ResultType, infer ReducerPath> ? InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, NewTagTypes, TransformedResponse<NewDefinitions, K, ResultType>, ReducerPath> : never;
};

type QueryCacheKey = string & {
    _type: 'queryCacheKey';
};
type QuerySubstateIdentifier = {
    queryCacheKey: QueryCacheKey;
};
type MutationSubstateIdentifier = {
    requestId: string;
    fixedCacheKey?: string;
} | {
    requestId?: string;
    fixedCacheKey: string;
};
type RefetchConfigOptions = {
    refetchOnMountOrArgChange: boolean | number;
    refetchOnReconnect: boolean;
    refetchOnFocus: boolean;
};
type InfiniteQueryConfigOptions<DataType, PageParam, QueryArg> = {
    /**
     * The initial page parameter to use for the first page fetch.
     */
    initialPageParam: PageParam;
    /**
     * This function is required to automatically get the next cursor for infinite queries.
     * The result will also be used to determine the value of `hasNextPage`.
     */
    getNextPageParam: (lastPage: DataType, allPages: Array<DataType>, lastPageParam: PageParam, allPageParams: Array<PageParam>, queryArg: QueryArg) => PageParam | undefined | null;
    /**
     * This function can be set to automatically get the previous cursor for infinite queries.
     * The result will also be used to determine the value of `hasPreviousPage`.
     */
    getPreviousPageParam?: (firstPage: DataType, allPages: Array<DataType>, firstPageParam: PageParam, allPageParams: Array<PageParam>, queryArg: QueryArg) => PageParam | undefined | null;
    /**
     * If specified, only keep this many pages in cache at once.
     * If additional pages are fetched, older pages in the other
     * direction will be dropped from the cache.
     */
    maxPages?: number;
    /**
     * Defaults to `true`. When this is `true` and an infinite query endpoint is refetched
     * (due to tag invalidation, polling, arg change configuration, or manual refetching),
     * RTK Query will try to sequentially refetch all pages currently in the cache.
     * When `false` only the first page will be refetched.
     */
    refetchCachedPages?: boolean;
};
type InfiniteData<DataType, PageParam> = {
    pages: Array<DataType>;
    pageParams: Array<PageParam>;
};
/**
 * Strings describing the query state at any given time.
 */
declare enum QueryStatus {
    uninitialized = "uninitialized",
    pending = "pending",
    fulfilled = "fulfilled",
    rejected = "rejected"
}
type RequestStatusFlags = {
    status: QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
} | {
    status: QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
} | {
    status: QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
} | {
    status: QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
};
/**
 * @public
 */
type SubscriptionOptions = {
    /**
     * How frequently to automatically re-fetch data (in milliseconds). Defaults to `0` (off).
     */
    pollingInterval?: number;
    /**
     *  Defaults to 'false'. This setting allows you to control whether RTK Query will continue polling if the window is not focused.
     *
     *  If pollingInterval is not set or set to 0, this **will not be evaluated** until pollingInterval is greater than 0.
     *
     *  Note: requires [`setupListeners`](./setupListeners) to have been called.
     */
    skipPollingIfUnfocused?: boolean;
    /**
     * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     *
     * Note: requires [`setupListeners`](./setupListeners) to have been called.
     */
    refetchOnReconnect?: boolean;
    /**
     * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     *
     * Note: requires [`setupListeners`](./setupListeners) to have been called.
     */
    refetchOnFocus?: boolean;
};
type Subscribers = {
    [requestId: string]: SubscriptionOptions;
};
type QueryKeys<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions]: Definitions[K] extends QueryDefinition<any, any, any, any> ? K : never;
}[keyof Definitions];
type InfiniteQueryKeys<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions]: Definitions[K] extends InfiniteQueryDefinition<any, any, any, any, any> ? K : never;
}[keyof Definitions];
type MutationKeys<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions]: Definitions[K] extends MutationDefinition<any, any, any, any> ? K : never;
}[keyof Definitions];
type BaseQuerySubState<D extends BaseEndpointDefinition<any, any, any, any>, DataType = ResultTypeFrom<D>> = {
    /**
     * The argument originally passed into the hook or `initiate` action call
     */
    originalArgs: QueryArgFromAnyQuery<D>;
    /**
     * A unique ID associated with the request
     */
    requestId: string;
    /**
     * The received data from the query
     */
    data?: DataType;
    /**
     * The received error if applicable
     */
    error?: SerializedError | (D extends QueryDefinition<any, infer BaseQuery, any, any> ? BaseQueryError<BaseQuery> : never);
    /**
     * The name of the endpoint associated with the query
     */
    endpointName: string;
    /**
     * Time that the latest query started
     */
    startedTimeStamp: number;
    /**
     * Time that the latest query was fulfilled
     */
    fulfilledTimeStamp?: number;
};
type QuerySubState<D extends BaseEndpointDefinition<any, any, any, any>, DataType = ResultTypeFrom<D>> = Id<({
    status: QueryStatus.fulfilled;
} & WithRequiredProp<BaseQuerySubState<D, DataType>, 'data' | 'fulfilledTimeStamp'> & {
    error: undefined;
}) | ({
    status: QueryStatus.pending;
} & BaseQuerySubState<D, DataType>) | ({
    status: QueryStatus.rejected;
} & WithRequiredProp<BaseQuerySubState<D, DataType>, 'error'>) | {
    status: QueryStatus.uninitialized;
    originalArgs?: undefined;
    data?: undefined;
    error?: undefined;
    requestId?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
}>;
type InfiniteQueryDirection = 'forward' | 'backward';
type InfiniteQuerySubState<D extends BaseEndpointDefinition<any, any, any, any>> = D extends InfiniteQueryDefinition<any, any, any, any, any> ? QuerySubState<D, InfiniteData<ResultTypeFrom<D>, PageParamFrom<D>>> & {
    direction?: InfiniteQueryDirection;
} : never;
type BaseMutationSubState<D extends BaseEndpointDefinition<any, any, any, any>> = {
    requestId: string;
    data?: ResultTypeFrom<D>;
    error?: SerializedError | (D extends MutationDefinition<any, infer BaseQuery, any, any> ? BaseQueryError<BaseQuery> : never);
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
};
type MutationSubState<D extends BaseEndpointDefinition<any, any, any, any>> = (({
    status: QueryStatus.fulfilled;
} & WithRequiredProp<BaseMutationSubState<D>, 'data' | 'fulfilledTimeStamp'>) & {
    error: undefined;
}) | (({
    status: QueryStatus.pending;
} & BaseMutationSubState<D>) & {
    data?: undefined;
}) | ({
    status: QueryStatus.rejected;
} & WithRequiredProp<BaseMutationSubState<D>, 'error'>) | {
    requestId?: undefined;
    status: QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
};
type CombinedState<D extends EndpointDefinitions, E extends string, ReducerPath extends string> = {
    queries: QueryState<D>;
    mutations: MutationState<D>;
    provided: InvalidationState<E>;
    subscriptions: SubscriptionState;
    config: ConfigState<ReducerPath>;
};
type InvalidationState<TagTypes extends string> = {
    tags: {
        [_ in TagTypes]: {
            [id: string]: Array<QueryCacheKey>;
            [id: number]: Array<QueryCacheKey>;
        };
    };
    keys: Record<QueryCacheKey, Array<FullTagDescription<any>>>;
};
type QueryState<D extends EndpointDefinitions> = {
    [queryCacheKey: string]: QuerySubState<D[string]> | InfiniteQuerySubState<D[string]> | undefined;
};
type SubscriptionState = {
    [queryCacheKey: string]: Subscribers | undefined;
};
type ConfigState<ReducerPath> = RefetchConfigOptions & {
    reducerPath: ReducerPath;
    online: boolean;
    focused: boolean;
    middlewareRegistered: boolean | 'conflict';
} & ModifiableConfigState;
type ModifiableConfigState = {
    keepUnusedDataFor: number;
    invalidationBehavior: 'delayed' | 'immediately';
} & RefetchConfigOptions;
type MutationState<D extends EndpointDefinitions> = {
    [requestId: string]: MutationSubState<D[string]> | undefined;
};
type RootState<Definitions extends EndpointDefinitions, TagTypes extends string, ReducerPath extends string> = {
    [P in ReducerPath]: CombinedState<Definitions, TagTypes, P>;
};

type ResponseHandler = 'content-type' | 'json' | 'text' | ((response: Response) => Promise<any>);
type CustomRequestInit = Override<RequestInit, {
    headers?: Headers | string[][] | Record<string, string | undefined> | undefined;
}>;
interface FetchArgs extends CustomRequestInit {
    url: string;
    params?: Record<string, any>;
    body?: any;
    responseHandler?: ResponseHandler;
    validateStatus?: (response: Response, body: any) => boolean;
    /**
     * A number in milliseconds that represents that maximum time a request can take before timing out.
     */
    timeout?: number;
}
type FetchBaseQueryError = {
    /**
     * * `number`:
     *   HTTP status code
     */
    status: number;
    data: unknown;
} | {
    /**
     * * `"FETCH_ERROR"`:
     *   An error that occurred during execution of `fetch` or the `fetchFn` callback option
     **/
    status: 'FETCH_ERROR';
    data?: undefined;
    error: string;
} | {
    /**
     * * `"PARSING_ERROR"`:
     *   An error happened during parsing.
     *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",
     *   or an error occurred while executing a custom `responseHandler`.
     **/
    status: 'PARSING_ERROR';
    originalStatus: number;
    data: string;
    error: string;
} | {
    /**
     * * `"TIMEOUT_ERROR"`:
     *   Request timed out
     **/
    status: 'TIMEOUT_ERROR';
    data?: undefined;
    error: string;
} | {
    /**
     * * `"CUSTOM_ERROR"`:
     *   A custom error type that you can return from your `queryFn` where another error might not make sense.
     **/
    status: 'CUSTOM_ERROR';
    data?: unknown;
    error: string;
};
type FetchBaseQueryArgs = {
    baseUrl?: string;
    prepareHeaders?: (headers: Headers, api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'> & {
        arg: string | FetchArgs;
        extraOptions: unknown;
    }) => MaybePromise<Headers | void>;
    fetchFn?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
    paramsSerializer?: (params: Record<string, any>) => string;
    /**
     * By default, we only check for 'application/json' and 'application/vnd.api+json' as the content-types for json. If you need to support another format, you can pass
     * in a predicate function for your given api to get the same automatic stringifying behavior
     * @example
     * ```ts
     * const isJsonContentType = (headers: Headers) => ["application/vnd.api+json", "application/json", "application/vnd.hal+json"].includes(headers.get("content-type")?.trim());
     * ```
     */
    isJsonContentType?: (headers: Headers) => boolean;
    /**
     * Defaults to `application/json`;
     */
    jsonContentType?: string;
    /**
     * Custom replacer function used when calling `JSON.stringify()`;
     */
    jsonReplacer?: (this: any, key: string, value: any) => any;
} & RequestInit & Pick<FetchArgs, 'responseHandler' | 'validateStatus' | 'timeout'>;
type FetchBaseQueryMeta = {
    request: Request;
    response?: Response;
};
/**
 * This is a very small wrapper around fetch that aims to simplify requests.
 *
 * @example
 * ```ts
 * const baseQuery = fetchBaseQuery({
 *   baseUrl: 'https://api.your-really-great-app.com/v1/',
 *   prepareHeaders: (headers, { getState }) => {
 *     const token = (getState() as RootState).auth.token;
 *     // If we have a token set in state, let's assume that we should be passing it.
 *     if (token) {
 *       headers.set('authorization', `Bearer ${token}`);
 *     }
 *     return headers;
 *   },
 * })
 * ```
 *
 * @param {string} baseUrl
 * The base URL for an API service.
 * Typically in the format of https://example.com/
 *
 * @param {(headers: Headers, api: { getState: () => unknown; arg: string | FetchArgs; extra: unknown; endpoint: string; type: 'query' | 'mutation'; forced: boolean; }) => Headers} prepareHeaders
 * An optional function that can be used to inject headers on requests.
 * Provides a Headers object, most of the `BaseQueryApi` (`dispatch` is not available), and the arg passed into the query function.
 * Useful for setting authentication or headers that need to be set conditionally.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Headers
 *
 * @param {(input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>} fetchFn
 * Accepts a custom `fetch` function if you do not want to use the default on the window.
 * Useful in SSR environments if you need to use a library such as `isomorphic-fetch` or `cross-fetch`
 *
 * @param {(params: Record<string, unknown>) => string} paramsSerializer
 * An optional function that can be used to stringify querystring parameters.
 *
 * @param {(headers: Headers) => boolean} isJsonContentType
 * An optional predicate function to determine if `JSON.stringify()` should be called on the `body` arg of `FetchArgs`
 *
 * @param {string} jsonContentType Used when automatically setting the content-type header for a request with a jsonifiable body that does not have an explicit content-type header. Defaults to `application/json`.
 *
 * @param {(this: any, key: string, value: any) => any} jsonReplacer Custom replacer function used when calling `JSON.stringify()`.
 *
 * @param {number} timeout
 * A number in milliseconds that represents the maximum time a request can take before timing out.
 */
declare function fetchBaseQuery({ baseUrl, prepareHeaders, fetchFn, paramsSerializer, isJsonContentType, jsonContentType, jsonReplacer, timeout: defaultTimeout, responseHandler: globalResponseHandler, validateStatus: globalValidateStatus, ...baseFetchOptions }?: FetchBaseQueryArgs): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>;

type RetryConditionFunction = (error: BaseQueryError<BaseQueryFn>, args: BaseQueryArg<BaseQueryFn>, extraArgs: {
    attempt: number;
    baseQueryApi: BaseQueryApi;
    extraOptions: BaseQueryExtraOptions<BaseQueryFn> & RetryOptions;
}) => boolean;
type RetryOptions = {
    /**
     * Function used to determine delay between retries
     */
    backoff?: (attempt: number, maxRetries: number, signal?: AbortSignal) => Promise<void>;
} & ({
    /**
     * How many times the query will be retried (default: 5)
     */
    maxRetries?: number;
    retryCondition?: undefined;
} | {
    /**
     * Callback to determine if a retry should be attempted.
     * Return `true` for another retry and `false` to quit trying prematurely.
     */
    retryCondition?: RetryConditionFunction;
    maxRetries?: undefined;
});
declare function fail<BaseQuery extends BaseQueryFn = BaseQueryFn>(error: BaseQueryError<BaseQuery>, meta?: BaseQueryMeta<BaseQuery>): never;
/**
 * A utility that can wrap `baseQuery` in the API definition to provide retries with a basic exponential backoff.
 *
 * @example
 *
 * ```ts
 * // codeblock-meta title="Retry every request 5 times by default"
 * import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
 * interface Post {
 *   id: number
 *   name: string
 * }
 * type PostsResponse = Post[]
 *
 * // maxRetries: 5 is the default, and can be omitted. Shown for documentation purposes.
 * const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: '/' }), { maxRetries: 5 });
 * export const api = createApi({
 *   baseQuery: staggeredBaseQuery,
 *   endpoints: (build) => ({
 *     getPosts: build.query<PostsResponse, void>({
 *       query: () => ({ url: 'posts' }),
 *     }),
 *     getPost: build.query<PostsResponse, string>({
 *       query: (id) => ({ url: `post/${id}` }),
 *       extraOptions: { maxRetries: 8 }, // You can override the retry behavior on each endpoint
 *     }),
 *   }),
 * });
 *
 * export const { useGetPostsQuery, useGetPostQuery } = api;
 * ```
 */
declare const retry: BaseQueryEnhancer<unknown, RetryOptions, void | RetryOptions> & {
    fail: typeof fail;
};

declare function copyWithStructuralSharing<T>(oldObj: any, newObj: T): T;

export { type Api, type ApiContext, type ApiEndpointInfiniteQuery, type ApiEndpointMutation, type ApiEndpointQuery, type ApiModules, type BaseEndpointDefinition, type BaseQueryApi, type BaseQueryArg, type BaseQueryEnhancer, type BaseQueryError, type BaseQueryExtraOptions, type BaseQueryFn, type BaseQueryMeta, type BaseQueryResult, type CombinedState, type CoreModule, type CreateApi, type CreateApiOptions, DefinitionType, type DefinitionsFromApi, type EndpointBuilder, type EndpointDefinition, type EndpointDefinitions, type FetchArgs, type FetchBaseQueryArgs, type FetchBaseQueryError, type FetchBaseQueryMeta, type InfiniteData, type InfiniteQueryActionCreatorResult, type InfiniteQueryArgFrom, type InfiniteQueryConfigOptions, type InfiniteQueryDefinition, type InfiniteQueryExtraOptions, type InfiniteQueryResultSelectorResult, type InfiniteQuerySubState, type Module, type MutationActionCreatorResult, type MutationDefinition, type MutationExtraOptions, type MutationResultSelectorResult, NamedSchemaError, type OverrideResultType, type PageParamFrom, type PrefetchOptions, type QueryActionCreatorResult, type QueryArgFrom, type QueryCacheKey, type QueryDefinition, type QueryExtraOptions, type QueryKeys, type QueryResultSelectorResult, type QueryReturnValue, QueryStatus, type QuerySubState, type ResultDescription, type ResultTypeFrom, type RetryOptions, type RootState, type SchemaFailureConverter, type SchemaFailureHandler, type SchemaFailureInfo, type SchemaType, type SerializeQueryArgs, type SkipToken, type StartQueryActionCreatorOptions, type SubscriptionOptions, type Id as TSHelpersId, type NoInfer as TSHelpersNoInfer, type Override as TSHelpersOverride, type TagDescription, type TagTypesFromApi, type TypedMutationOnQueryStarted, type TypedQueryOnQueryStarted, type UpdateDefinitions, buildCreateApi, copyWithStructuralSharing, coreModule, createApi, defaultSerializeQueryArgs, fakeBaseQuery, fetchBaseQuery, retry, setupListeners };
