import * as _reduxjs_toolkit_query from '@reduxjs/toolkit/query';
import { QueryDefinition, TSHelpersId, TSHelpersOverride, QuerySubState, ResultTypeFrom, QueryStatus, QueryArgFrom, SkipToken, SubscriptionOptions, TSHelpersNoInfer, QueryActionCreatorResult, MutationDefinition, MutationResultSelectorResult, MutationActionCreatorResult, InfiniteQueryDefinition, InfiniteQuerySubState, PageParamFrom, InfiniteQueryArgFrom, InfiniteQueryActionCreatorResult, BaseQueryFn, EndpointDefinitions, DefinitionType, QueryKeys, PrefetchOptions, Module, Api, setupListeners } from '@reduxjs/toolkit/query';
export * from '@reduxjs/toolkit/query';
import * as react_redux from 'react-redux';
import { ReactReduxContextValue } from 'react-redux';
import { CreateSelectorFunction } from 'reselect';
import * as React from 'react';
import { Context } from 'react';

type InfiniteData<DataType, PageParam> = {
    pages: Array<DataType>;
    pageParams: Array<PageParam>;
};
type InfiniteQueryDirection = 'forward' | 'backward';

export declare const UNINITIALIZED_VALUE: unique symbol;
type UninitializedValue = typeof UNINITIALIZED_VALUE;

type QueryHooks<Definition extends QueryDefinition<any, any, any, any, any>> = {
    useQuery: UseQuery<Definition>;
    useLazyQuery: UseLazyQuery<Definition>;
    useQuerySubscription: UseQuerySubscription<Definition>;
    useLazyQuerySubscription: UseLazyQuerySubscription<Definition>;
    useQueryState: UseQueryState<Definition>;
};
type InfiniteQueryHooks<Definition extends InfiniteQueryDefinition<any, any, any, any, any>> = {
    useInfiniteQuery: UseInfiniteQuery<Definition>;
    useInfiniteQuerySubscription: UseInfiniteQuerySubscription<Definition>;
    useInfiniteQueryState: UseInfiniteQueryState<Definition>;
};
type MutationHooks<Definition extends MutationDefinition<any, any, any, any, any>> = {
    useMutation: UseMutation<Definition>;
};
/**
 * A React hook that automatically triggers fetches of data from an endpoint, 'subscribes' the component to the cached data, and reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.
 *
 * The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already, and the hook will return the data for that query arg once it's available.
 *
 * This hook combines the functionality of both [`useQueryState`](#usequerystate) and [`useQuerySubscription`](#usequerysubscription) together, and is intended to be used in the majority of situations.
 *
 * #### Features
 *
 * - Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
 * - Returns the latest request status and cached data from the Redux store
 * - Re-renders as the request status changes and data becomes available
 */
type UseQuery<D extends QueryDefinition<any, any, any, any>> = <R extends Record<string, any> = UseQueryStateDefaultResult<D>>(arg: QueryArgFrom<D> | SkipToken, options?: UseQuerySubscriptionOptions & UseQueryStateOptions<D, R>) => UseQueryHookResult<D, R>;
type TypedUseQuery<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseQuery<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
type UseQueryHookResult<D extends QueryDefinition<any, any, any, any>, R = UseQueryStateDefaultResult<D>> = UseQueryStateResult<D, R> & UseQuerySubscriptionResult<D>;
/**
 * Helper type to manually type the result
 * of the `useQuery` hook in userland code.
 */
type TypedUseQueryHookResult<ResultType, QueryArg, BaseQuery extends BaseQueryFn, R = UseQueryStateDefaultResult<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>> = TypedUseQueryStateResult<ResultType, QueryArg, BaseQuery, R> & TypedUseQuerySubscriptionResult<ResultType, QueryArg, BaseQuery>;
type UseQuerySubscriptionOptions = SubscriptionOptions & {
    /**
     * Prevents a query from automatically running.
     *
     * @remarks
     * When `skip` is true (or `skipToken` is passed in as `arg`):
     *
     * - **If the query has cached data:**
     *   * The cached data **will not be used** on the initial load, and will ignore updates from any identical query until the `skip` condition is removed
     *   * The query will have a status of `uninitialized`
     *   * If `skip: false` is set after the initial load, the cached result will be used
     * - **If the query does not have cached data:**
     *   * The query will have a status of `uninitialized`
     *   * The query will not exist in the state when viewed with the dev tools
     *   * The query will not automatically fetch on mount
     *   * The query will not automatically run when additional components with the same query are added that do run
     *
     * @example
     * ```tsx
     * // codeblock-meta no-transpile title="Skip example"
     * const Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {
     *   const { data, error, status } = useGetPokemonByNameQuery(name, {
     *     skip,
     *   });
     *
     *   return (
     *     <div>
     *       {name} - {status}
     *     </div>
     *   );
     * };
     * ```
     */
    skip?: boolean;
    /**
     * Defaults to `false`. This setting allows you to control whether if a cached result is already available, RTK Query will only serve a cached result, or if it should `refetch` when set to `true` or if an adequate amount of time has passed since the last successful query result.
     * - `false` - Will not cause a query to be performed _unless_ it does not exist yet.
     * - `true` - Will always refetch when a new subscriber to a query is added. Behaves the same as calling the `refetch` callback or passing `forceRefetch: true` in the action creator.
     * - `number` - **Value is in seconds**. If a number is provided and there is an existing query in the cache, it will compare the current time vs the last fulfilled timestamp, and only refetch if enough time has elapsed.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     */
    refetchOnMountOrArgChange?: boolean | number;
};
/**
 * A React hook that automatically triggers fetches of data from an endpoint, and 'subscribes' the component to the cached data.
 *
 * The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already.
 *
 * Note that this hook does not return a request status or cached data. For that use-case, see [`useQuery`](#usequery) or [`useQueryState`](#usequerystate).
 *
 * #### Features
 *
 * - Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
 */
type UseQuerySubscription<D extends QueryDefinition<any, any, any, any>> = (arg: QueryArgFrom<D> | SkipToken, options?: UseQuerySubscriptionOptions) => UseQuerySubscriptionResult<D>;
type TypedUseQuerySubscription<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseQuerySubscription<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
type UseQuerySubscriptionResult<D extends QueryDefinition<any, any, any, any>> = Pick<QueryActionCreatorResult<D>, 'refetch'>;
/**
 * Helper type to manually type the result
 * of the `useQuerySubscription` hook in userland code.
 */
type TypedUseQuerySubscriptionResult<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseQuerySubscriptionResult<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
type UseLazyQueryLastPromiseInfo<D extends QueryDefinition<any, any, any, any>> = {
    lastArg: QueryArgFrom<D>;
};
/**
 * A React hook similar to [`useQuery`](#usequery), but with manual control over when the data fetching occurs.
 *
 * This hook includes the functionality of [`useLazyQuerySubscription`](#uselazyquerysubscription).
 *
 * #### Features
 *
 * - Manual control over firing a request to retrieve data
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Returns the latest request status and cached data from the Redux store
 * - Re-renders as the request status changes and data becomes available
 * - Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met and the fetch has been manually called at least once
 *
 * #### Note
 *
 * When the trigger function returned from a LazyQuery is called, it always initiates a new request to the server even if there is cached data. Set `preferCacheValue`(the second argument to the function) as `true` if you want it to immediately return a cached value if one exists.
 */
type UseLazyQuery<D extends QueryDefinition<any, any, any, any>> = <R extends Record<string, any> = UseQueryStateDefaultResult<D>>(options?: SubscriptionOptions & Omit<UseQueryStateOptions<D, R>, 'skip'>) => [
    LazyQueryTrigger<D>,
    UseLazyQueryStateResult<D, R>,
    UseLazyQueryLastPromiseInfo<D>
];
type TypedUseLazyQuery<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseLazyQuery<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
type UseLazyQueryStateResult<D extends QueryDefinition<any, any, any, any>, R = UseQueryStateDefaultResult<D>> = UseQueryStateResult<D, R> & {
    /**
     * Resets the hook state to its initial `uninitialized` state.
     * This will also remove the last result from the cache.
     */
    reset: () => void;
};
/**
 * Helper type to manually type the result
 * of the `useLazyQuery` hook in userland code.
 */
type TypedUseLazyQueryStateResult<ResultType, QueryArg, BaseQuery extends BaseQueryFn, R = UseQueryStateDefaultResult<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>> = UseLazyQueryStateResult<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>, R>;
type LazyQueryTrigger<D extends QueryDefinition<any, any, any, any>> = {
    /**
     * Triggers a lazy query.
     *
     * By default, this will start a new request even if there is already a value in the cache.
     * If you want to use the cache value and only start a request if there is no cache value, set the second argument to `true`.
     *
     * @remarks
     * If you need to access the error or success payload immediately after a lazy query, you can chain .unwrap().
     *
     * @example
     * ```ts
     * // codeblock-meta title="Using .unwrap with async await"
     * try {
     *   const payload = await getUserById(1).unwrap();
     *   console.log('fulfilled', payload)
     * } catch (error) {
     *   console.error('rejected', error);
     * }
     * ```
     */
    (arg: QueryArgFrom<D>, preferCacheValue?: boolean): QueryActionCreatorResult<D>;
};
type TypedLazyQueryTrigger<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = LazyQueryTrigger<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
/**
 * A React hook similar to [`useQuerySubscription`](#usequerysubscription), but with manual control over when the data fetching occurs.
 *
 * Note that this hook does not return a request status or cached data. For that use-case, see [`useLazyQuery`](#uselazyquery).
 *
 * #### Features
 *
 * - Manual control over firing a request to retrieve data
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met and the fetch has been manually called at least once
 */
type UseLazyQuerySubscription<D extends QueryDefinition<any, any, any, any>> = (options?: SubscriptionOptions) => readonly [
    LazyQueryTrigger<D>,
    QueryArgFrom<D> | UninitializedValue,
    {
        reset: () => void;
    }
];
type TypedUseLazyQuerySubscription<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseLazyQuerySubscription<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
/**
 * @internal
 */
type QueryStateSelector<R extends Record<string, any>, D extends QueryDefinition<any, any, any, any>> = (state: UseQueryStateDefaultResult<D>) => R;
/**
 * Provides a way to define a strongly-typed version of
 * {@linkcode QueryStateSelector} for use with a specific query.
 * This is useful for scenarios where you want to create a "pre-typed"
 * {@linkcode UseQueryStateOptions.selectFromResult | selectFromResult}
 * function.
 *
 * @example
 * <caption>#### __Create a strongly-typed `selectFromResult` selector function__</caption>
 *
 * ```tsx
 * import type { TypedQueryStateSelector } from '@reduxjs/toolkit/query/react'
 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 *
 * type Post = {
 *   id: number
 *   title: string
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
 * type SelectedResult = Pick<PostsApiResponse, 'posts'>
 *
 * const postsApiSlice = createApi({
 *   baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/posts' }),
 *   reducerPath: 'postsApi',
 *   tagTypes: ['Posts'],
 *   endpoints: (build) => ({
 *     getPosts: build.query<PostsApiResponse, QueryArgument>({
 *       query: (limit = 5) => `?limit=${limit}&select=title`,
 *     }),
 *   }),
 * })
 *
 * const { useGetPostsQuery } = postsApiSlice
 *
 * function PostById({ id }: { id: number }) {
 *   const { post } = useGetPostsQuery(undefined, {
 *     selectFromResult: (state) => ({
 *       post: state.data?.posts.find((post) => post.id === id),
 *     }),
 *   })
 *
 *   return <li>{post?.title}</li>
 * }
 *
 * const EMPTY_ARRAY: Post[] = []
 *
 * const typedSelectFromResult: TypedQueryStateSelector<
 *   PostsApiResponse,
 *   QueryArgument,
 *   BaseQueryFunction,
 *   SelectedResult
 * > = (state) => ({ posts: state.data?.posts ?? EMPTY_ARRAY })
 *
 * function PostsList() {
 *   const { posts } = useGetPostsQuery(undefined, {
 *     selectFromResult: typedSelectFromResult,
 *   })
 *
 *   return (
 *     <div>
 *       <ul>
 *         {posts.map((post) => (
 *           <PostById key={post.id} id={post.id} />
 *         ))}
 *       </ul>
 *     </div>
 *   )
 * }
 * ```
 *
 * @template ResultType - The type of the result `data` returned by the query.
 * @template QueryArgumentType - The type of the argument passed into the query.
 * @template BaseQueryFunctionType - The type of the base query function being used.
 * @template SelectedResultType - The type of the selected result returned by the __`selectFromResult`__ function.
 *
 * @since 2.3.0
 * @public
 */
type TypedQueryStateSelector<ResultType, QueryArgumentType, BaseQueryFunctionType extends BaseQueryFn, SelectedResultType extends Record<string, any> = UseQueryStateDefaultResult<QueryDefinition<QueryArgumentType, BaseQueryFunctionType, string, ResultType, string>>> = QueryStateSelector<SelectedResultType, QueryDefinition<QueryArgumentType, BaseQueryFunctionType, string, ResultType, string>>;
/**
 * A React hook that reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.
 *
 * Note that this hook does not trigger fetching new data. For that use-case, see [`useQuery`](#usequery) or [`useQuerySubscription`](#usequerysubscription).
 *
 * #### Features
 *
 * - Returns the latest request status and cached data from the Redux store
 * - Re-renders as the request status changes and data becomes available
 */
type UseQueryState<D extends QueryDefinition<any, any, any, any>> = <R extends Record<string, any> = UseQueryStateDefaultResult<D>>(arg: QueryArgFrom<D> | SkipToken, options?: UseQueryStateOptions<D, R>) => UseQueryStateResult<D, R>;
type TypedUseQueryState<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseQueryState<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
/**
 * @internal
 */
type UseQueryStateOptions<D extends QueryDefinition<any, any, any, any>, R extends Record<string, any>> = {
    /**
     * Prevents a query from automatically running.
     *
     * @remarks
     * When skip is true:
     *
     * - **If the query has cached data:**
     *   * The cached data **will not be used** on the initial load, and will ignore updates from any identical query until the `skip` condition is removed
     *   * The query will have a status of `uninitialized`
     *   * If `skip: false` is set after skipping the initial load, the cached result will be used
     * - **If the query does not have cached data:**
     *   * The query will have a status of `uninitialized`
     *   * The query will not exist in the state when viewed with the dev tools
     *   * The query will not automatically fetch on mount
     *   * The query will not automatically run when additional components with the same query are added that do run
     *
     * @example
     * ```ts
     * // codeblock-meta title="Skip example"
     * const Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {
     *   const { data, error, status } = useGetPokemonByNameQuery(name, {
     *     skip,
     *   });
     *
     *   return (
     *     <div>
     *       {name} - {status}
     *     </div>
     *   );
     * };
     * ```
     */
    skip?: boolean;
    /**
     * `selectFromResult` allows you to get a specific segment from a query result in a performant manner.
     * When using this feature, the component will not rerender unless the underlying data of the selected item has changed.
     * If the selected item is one element in a larger collection, it will disregard changes to elements in the same collection.
     *
     * @example
     * ```ts
     * // codeblock-meta title="Using selectFromResult to extract a single result"
     * function PostsList() {
     *   const { data: posts } = api.useGetPostsQuery();
     *
     *   return (
     *     <ul>
     *       {posts?.data?.map((post) => (
     *         <PostById key={post.id} id={post.id} />
     *       ))}
     *     </ul>
     *   );
     * }
     *
     * function PostById({ id }: { id: number }) {
     *   // Will select the post with the given id, and will only rerender if the given posts data changes
     *   const { post } = api.useGetPostsQuery(undefined, {
     *     selectFromResult: ({ data }) => ({ post: data?.find((post) => post.id === id) }),
     *   });
     *
     *   return <li>{post?.name}</li>;
     * }
     * ```
     */
    selectFromResult?: QueryStateSelector<R, D>;
};
/**
 * Provides a way to define a "pre-typed" version of
 * {@linkcode UseQueryStateOptions} with specific options for a given query.
 * This is particularly useful for setting default query behaviors such as
 * refetching strategies, which can be overridden as needed.
 *
 * @example
 * <caption>#### __Create a `useQuery` hook with default options__</caption>
 *
 * ```ts
 * import type {
 *   SubscriptionOptions,
 *   TypedUseQueryStateOptions,
 * } from '@reduxjs/toolkit/query/react'
 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 *
 * type Post = {
 *   id: number
 *   name: string
 * }
 *
 * const api = createApi({
 *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
 *   tagTypes: ['Post'],
 *   endpoints: (build) => ({
 *     getPosts: build.query<Post[], void>({
 *       query: () => 'posts',
 *     }),
 *   }),
 * })
 *
 * const { useGetPostsQuery } = api
 *
 * export const useGetPostsQueryWithDefaults = <
 *   SelectedResult extends Record<string, any>,
 * >(
 *   overrideOptions: TypedUseQueryStateOptions<
 *     Post[],
 *     void,
 *     ReturnType<typeof fetchBaseQuery>,
 *     SelectedResult
 *   > &
 *     SubscriptionOptions,
 * ) =>
 *   useGetPostsQuery(undefined, {
 *     // Insert default options here
 *
 *     refetchOnMountOrArgChange: true,
 *     refetchOnFocus: true,
 *     ...overrideOptions,
 *   })
 * ```
 *
 * @template ResultType - The type of the result `data` returned by the query.
 * @template QueryArg - The type of the argument passed into the query.
 * @template BaseQuery - The type of the base query function being used.
 * @template SelectedResult - The type of the selected result returned by the __`selectFromResult`__ function.
 *
 * @since 2.2.8
 * @public
 */
type TypedUseQueryStateOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, SelectedResult extends Record<string, any> = UseQueryStateDefaultResult<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>> = UseQueryStateOptions<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>, SelectedResult>;
type UseQueryStateResult<_ extends QueryDefinition<any, any, any, any>, R> = TSHelpersNoInfer<R>;
/**
 * Helper type to manually type the result
 * of the `useQueryState` hook in userland code.
 */
type TypedUseQueryStateResult<ResultType, QueryArg, BaseQuery extends BaseQueryFn, R = UseQueryStateDefaultResult<QueryDefinition<QueryArg, BaseQuery, string, ResultType, string>>> = TSHelpersNoInfer<R>;
type UseQueryStateBaseResult<D extends QueryDefinition<any, any, any, any>> = QuerySubState<D> & {
    /**
     * Where `data` tries to hold data as much as possible, also re-using
     * data from the last arguments passed into the hook, this property
     * will always contain the received data from the query, for the current query arguments.
     */
    currentData?: ResultTypeFrom<D>;
    /**
     * Query has not started yet.
     */
    isUninitialized: false;
    /**
     * Query is currently loading for the first time. No data yet.
     */
    isLoading: false;
    /**
     * Query is currently fetching, but might have data from an earlier request.
     */
    isFetching: false;
    /**
     * Query has data from a successful load.
     */
    isSuccess: false;
    /**
     * Query is currently in "error" state.
     */
    isError: false;
};
type UseQueryStateUninitialized<D extends QueryDefinition<any, any, any, any>> = TSHelpersOverride<Extract<UseQueryStateBaseResult<D>, {
    status: QueryStatus.uninitialized;
}>, {
    isUninitialized: true;
}>;
type UseQueryStateLoading<D extends QueryDefinition<any, any, any, any>> = TSHelpersOverride<UseQueryStateBaseResult<D>, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
}>;
type UseQueryStateSuccessFetching<D extends QueryDefinition<any, any, any, any>> = TSHelpersOverride<UseQueryStateBaseResult<D>, {
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & {
    data: ResultTypeFrom<D>;
} & Required<Pick<UseQueryStateBaseResult<D>, 'fulfilledTimeStamp'>>>;
type UseQueryStateSuccessNotFetching<D extends QueryDefinition<any, any, any, any>> = TSHelpersOverride<UseQueryStateBaseResult<D>, {
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & {
    data: ResultTypeFrom<D>;
    currentData: ResultTypeFrom<D>;
} & Required<Pick<UseQueryStateBaseResult<D>, 'fulfilledTimeStamp'>>>;
type UseQueryStateError<D extends QueryDefinition<any, any, any, any>> = TSHelpersOverride<UseQueryStateBaseResult<D>, {
    isError: true;
} & Required<Pick<UseQueryStateBaseResult<D>, 'error'>>>;
type UseQueryStateDefaultResult<D extends QueryDefinition<any, any, any, any>> = TSHelpersId<UseQueryStateUninitialized<D> | UseQueryStateLoading<D> | UseQueryStateSuccessFetching<D> | UseQueryStateSuccessNotFetching<D> | UseQueryStateError<D>> & {
    /**
     * @deprecated Included for completeness, but discouraged.
     * Please use the `isLoading`, `isFetching`, `isSuccess`, `isError`
     * and `isUninitialized` flags instead
     */
    status: QueryStatus;
};
type LazyInfiniteQueryTrigger<D extends InfiniteQueryDefinition<any, any, any, any, any>> = {
    /**
     * Triggers a lazy query.
     *
     * By default, this will start a new request even if there is already a value in the cache.
     * If you want to use the cache value and only start a request if there is no cache value, set the second argument to `true`.
     *
     * @remarks
     * If you need to access the error or success payload immediately after a lazy query, you can chain .unwrap().
     *
     * @example
     * ```ts
     * // codeblock-meta title="Using .unwrap with async await"
     * try {
     *   const payload = await getUserById(1).unwrap();
     *   console.log('fulfilled', payload)
     * } catch (error) {
     *   console.error('rejected', error);
     * }
     * ```
     */
    (arg: QueryArgFrom<D>, direction: InfiniteQueryDirection): InfiniteQueryActionCreatorResult<D>;
};
type TypedLazyInfiniteQueryTrigger<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn> = LazyInfiniteQueryTrigger<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>;
type UseInfiniteQuerySubscriptionOptions<D extends InfiniteQueryDefinition<any, any, any, any, any>> = SubscriptionOptions & {
    /**
     * Prevents a query from automatically running.
     *
     * @remarks
     * When `skip` is true (or `skipToken` is passed in as `arg`):
     *
     * - **If the query has cached data:**
     *   * The cached data **will not be used** on the initial load, and will ignore updates from any identical query until the `skip` condition is removed
     *   * The query will have a status of `uninitialized`
     *   * If `skip: false` is set after the initial load, the cached result will be used
     * - **If the query does not have cached data:**
     *   * The query will have a status of `uninitialized`
     *   * The query will not exist in the state when viewed with the dev tools
     *   * The query will not automatically fetch on mount
     *   * The query will not automatically run when additional components with the same query are added that do run
     *
     * @example
     * ```tsx
     * // codeblock-meta no-transpile title="Skip example"
     * const Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {
     *   const { data, error, status } = useGetPokemonByNameQuery(name, {
     *     skip,
     *   });
     *
     *   return (
     *     <div>
     *       {name} - {status}
     *     </div>
     *   );
     * };
     * ```
     */
    skip?: boolean;
    /**
     * Defaults to `false`. This setting allows you to control whether if a cached result is already available, RTK Query will only serve a cached result, or if it should `refetch` when set to `true` or if an adequate amount of time has passed since the last successful query result.
     * - `false` - Will not cause a query to be performed _unless_ it does not exist yet.
     * - `true` - Will always refetch when a new subscriber to a query is added. Behaves the same as calling the `refetch` callback or passing `forceRefetch: true` in the action creator.
     * - `number` - **Value is in seconds**. If a number is provided and there is an existing query in the cache, it will compare the current time vs the last fulfilled timestamp, and only refetch if enough time has elapsed.
     *
     * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
     */
    refetchOnMountOrArgChange?: boolean | number;
    initialPageParam?: PageParamFrom<D>;
    /**
     * Defaults to `true`. When this is `true` and an infinite query endpoint is refetched
     * (due to tag invalidation, polling, arg change configuration, or manual refetching),
     * RTK Query will try to sequentially refetch all pages currently in the cache.
     * When `false` only the first page will be refetched.
     *
     * This option applies to all automatic refetches for this subscription (polling, tag invalidation, etc.).
     * It can be overridden on a per-call basis using the `refetch()` method.
     */
    refetchCachedPages?: boolean;
};
type TypedUseInfiniteQuerySubscription<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn> = UseInfiniteQuerySubscription<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>;
type UseInfiniteQuerySubscriptionResult<D extends InfiniteQueryDefinition<any, any, any, any, any>> = {
    refetch: (options?: Pick<UseInfiniteQuerySubscriptionOptions<D>, 'refetchCachedPages'>) => InfiniteQueryActionCreatorResult<D>;
    trigger: LazyInfiniteQueryTrigger<D>;
    fetchNextPage: () => InfiniteQueryActionCreatorResult<D>;
    fetchPreviousPage: () => InfiniteQueryActionCreatorResult<D>;
};
/**
 * Helper type to manually type the result
 * of the `useQuerySubscription` hook in userland code.
 */
type TypedUseInfiniteQuerySubscriptionResult<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn> = UseInfiniteQuerySubscriptionResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>;
type InfiniteQueryStateSelector<R extends Record<string, any>, D extends InfiniteQueryDefinition<any, any, any, any, any>> = (state: UseInfiniteQueryStateDefaultResult<D>) => R;
type TypedInfiniteQueryStateSelector<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn, SelectedResult extends Record<string, any> = UseInfiniteQueryStateDefaultResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>> = InfiniteQueryStateSelector<SelectedResult, InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>;
/**
 * A React hook that automatically triggers fetches of data from an endpoint, 'subscribes' the component to the cached data, and reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.  Additionally, it will cache multiple "pages" worth of responses within a single cache entry, and allows fetching more pages forwards and backwards from the current cached pages.
 *
 * The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already, and the hook will return the data for that query arg once it's available.
 *
 *  The `data` field will be a `{pages: Data[], pageParams: PageParam[]}` structure containing all fetched page responses and the corresponding page param values for each page. You may use this to render individual pages, combine all pages into a single infinite list, or other display logic as needed.
 *
 * This hook combines the functionality of both [`useInfiniteQueryState`](#useinfinitequerystate) and [`useInfiniteQuerySubscription`](#useinfinitequerysubscription) together, and is intended to be used in the majority of situations.
 *
 * As with normal query hooks, `skipToken` is a valid argument that will skip the query from executing.
 *
 * By default, the initial request will use the `initialPageParam` value that was defined on the infinite query endpoint. If you want to start from a different value, you can pass `initialPageParam` as part of the hook options to override that initial request value.
 *
 * Use the returned `fetchNextPage` and `fetchPreviousPage` methods on the hook result object to trigger fetches forwards and backwards. These will always calculate the next or previous page param based on the current cached pages and the provided `getNext/PreviousPageParam` callbacks defined in the endpoint.
 *
 *
 * #### Features
 *
 * - Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Caches multiple pages worth of responses, and provides methods to trigger more page fetches forwards and backwards
 * - Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
 * - Returns the latest request status and cached data from the Redux store
 * - Re-renders as the request status changes and data becomes available
 */
type UseInfiniteQuery<D extends InfiniteQueryDefinition<any, any, any, any, any>> = <R extends Record<string, any> = UseInfiniteQueryStateDefaultResult<D>>(arg: InfiniteQueryArgFrom<D> | SkipToken, options?: UseInfiniteQuerySubscriptionOptions<D> & UseInfiniteQueryStateOptions<D, R>) => UseInfiniteQueryHookResult<D, R> & Pick<UseInfiniteQuerySubscriptionResult<D>, 'fetchNextPage' | 'fetchPreviousPage'>;
type TypedUseInfiniteQuery<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn> = UseInfiniteQuery<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>;
/**
 * A React hook that reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.
 *
 * Note that this hook does not trigger fetching new data. For that use-case, see [`useInfiniteQuery`](#useinfinitequery) or [`useInfiniteQuerySubscription`](#useinfinitequerysubscription).
 *
 * #### Features
 *
 * - Returns the latest request status and cached data from the Redux store
 * - Re-renders as the request status changes and data becomes available
 */
type UseInfiniteQueryState<D extends InfiniteQueryDefinition<any, any, any, any, any>> = <R extends Record<string, any> = UseInfiniteQueryStateDefaultResult<D>>(arg: InfiniteQueryArgFrom<D> | SkipToken, options?: UseInfiniteQueryStateOptions<D, R>) => UseInfiniteQueryStateResult<D, R>;
type TypedUseInfiniteQueryState<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn> = UseInfiniteQueryState<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>;
/**
 * A React hook that automatically triggers fetches of data from an endpoint, and 'subscribes' the component to the cached data. Additionally, it will cache multiple "pages" worth of responses within a single cache entry, and allows fetching more pages forwards and backwards from the current cached pages.
 *
 * The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already.
 *
 * Note that this hook does not return a request status or cached data. For that use-case, see [`useInfiniteQuery`](#useinfinitequery) or [`useInfiniteQueryState`](#useinfinitequerystate).
 *
 * #### Features
 *
 * - Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Caches multiple pages worth of responses, and provides methods to trigger more page fetches forwards and backwards
 * - Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
 */
type UseInfiniteQuerySubscription<D extends InfiniteQueryDefinition<any, any, any, any, any>> = (arg: InfiniteQueryArgFrom<D> | SkipToken, options?: UseInfiniteQuerySubscriptionOptions<D>) => UseInfiniteQuerySubscriptionResult<D>;
type UseInfiniteQueryHookResult<D extends InfiniteQueryDefinition<any, any, any, any, any>, R = UseInfiniteQueryStateDefaultResult<D>> = UseInfiniteQueryStateResult<D, R> & Pick<UseInfiniteQuerySubscriptionResult<D>, 'refetch' | 'fetchNextPage' | 'fetchPreviousPage'>;
type TypedUseInfiniteQueryHookResult<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn, R extends Record<string, any> = UseInfiniteQueryStateDefaultResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>> = UseInfiniteQueryHookResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>, R>;
type UseInfiniteQueryStateOptions<D extends InfiniteQueryDefinition<any, any, any, any, any>, R extends Record<string, any>> = {
    /**
     * Prevents a query from automatically running.
     *
     * @remarks
     * When skip is true:
     *
     * - **If the query has cached data:**
     *   * The cached data **will not be used** on the initial load, and will ignore updates from any identical query until the `skip` condition is removed
     *   * The query will have a status of `uninitialized`
     *   * If `skip: false` is set after skipping the initial load, the cached result will be used
     * - **If the query does not have cached data:**
     *   * The query will have a status of `uninitialized`
     *   * The query will not exist in the state when viewed with the dev tools
     *   * The query will not automatically fetch on mount
     *   * The query will not automatically run when additional components with the same query are added that do run
     *
     * @example
     * ```ts
     * // codeblock-meta title="Skip example"
     * const Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {
     *   const { data, error, status } = useGetPokemonByNameQuery(name, {
     *     skip,
     *   });
     *
     *   return (
     *     <div>
     *       {name} - {status}
     *     </div>
     *   );
     * };
     * ```
     */
    skip?: boolean;
    /**
     * `selectFromResult` allows you to get a specific segment from a query result in a performant manner.
     * When using this feature, the component will not rerender unless the underlying data of the selected item has changed.
     * If the selected item is one element in a larger collection, it will disregard changes to elements in the same collection.
     * Note that this should always return an object (not a primitive), as RTKQ adds fields to the return value.
     *
     * @example
     * ```ts
     * // codeblock-meta title="Using selectFromResult to extract a single result"
     * function PostsList() {
     *   const { data: posts } = api.useGetPostsQuery();
     *
     *   return (
     *     <ul>
     *       {posts?.data?.map((post) => (
     *         <PostById key={post.id} id={post.id} />
     *       ))}
     *     </ul>
     *   );
     * }
     *
     * function PostById({ id }: { id: number }) {
     *   // Will select the post with the given id, and will only rerender if the given posts data changes
     *   const { post } = api.useGetPostsQuery(undefined, {
     *     selectFromResult: ({ data }) => ({ post: data?.find((post) => post.id === id) }),
     *   });
     *
     *   return <li>{post?.name}</li>;
     * }
     * ```
     */
    selectFromResult?: InfiniteQueryStateSelector<R, D>;
};
type TypedUseInfiniteQueryStateOptions<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn, SelectedResult extends Record<string, any> = UseInfiniteQueryStateDefaultResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>> = UseInfiniteQueryStateOptions<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>, SelectedResult>;
type UseInfiniteQueryStateResult<D extends InfiniteQueryDefinition<any, any, any, any, any>, R = UseInfiniteQueryStateDefaultResult<D>> = TSHelpersNoInfer<R>;
type TypedUseInfiniteQueryStateResult<ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn, R = UseInfiniteQueryStateDefaultResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>>> = UseInfiniteQueryStateResult<InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, string, ResultType, string>, R>;
type UseInfiniteQueryStateBaseResult<D extends InfiniteQueryDefinition<any, any, any, any, any>> = InfiniteQuerySubState<D> & {
    /**
     * Where `data` tries to hold data as much as possible, also re-using
     * data from the last arguments passed into the hook, this property
     * will always contain the received data from the query, for the current query arguments.
     */
    currentData?: InfiniteData<ResultTypeFrom<D>, PageParamFrom<D>>;
    /**
     * Query has not started yet.
     */
    isUninitialized: false;
    /**
     * Query is currently loading for the first time. No data yet.
     */
    isLoading: false;
    /**
     * Query is currently fetching, but might have data from an earlier request.
     */
    isFetching: false;
    /**
     * Query has data from a successful load.
     */
    isSuccess: false;
    /**
     * Query is currently in "error" state.
     */
    isError: false;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
};
type UseInfiniteQueryStateDefaultResult<D extends InfiniteQueryDefinition<any, any, any, any, any>> = TSHelpersId<TSHelpersOverride<Extract<UseInfiniteQueryStateBaseResult<D>, {
    status: QueryStatus.uninitialized;
}>, {
    isUninitialized: true;
}> | TSHelpersOverride<UseInfiniteQueryStateBaseResult<D>, {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | ({
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & Required<Pick<UseInfiniteQueryStateBaseResult<D>, 'data' | 'fulfilledTimeStamp'>>) | ({
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & Required<Pick<UseInfiniteQueryStateBaseResult<D>, 'data' | 'fulfilledTimeStamp' | 'currentData'>>) | ({
    isError: true;
} & Required<Pick<UseInfiniteQueryStateBaseResult<D>, 'error'>>)>> & {
    /**
     * @deprecated Included for completeness, but discouraged.
     * Please use the `isLoading`, `isFetching`, `isSuccess`, `isError`
     * and `isUninitialized` flags instead
     */
    status: QueryStatus;
};
type MutationStateSelector<R extends Record<string, any>, D extends MutationDefinition<any, any, any, any>> = (state: MutationResultSelectorResult<D>) => R;
type UseMutationStateOptions<D extends MutationDefinition<any, any, any, any>, R extends Record<string, any>> = {
    selectFromResult?: MutationStateSelector<R, D>;
    fixedCacheKey?: string;
};
type UseMutationStateResult<D extends MutationDefinition<any, any, any, any>, R> = TSHelpersNoInfer<R> & {
    originalArgs?: QueryArgFrom<D>;
    /**
     * Resets the hook state to its initial `uninitialized` state.
     * This will also remove the last result from the cache.
     */
    reset: () => void;
};
/**
 * Helper type to manually type the result
 * of the `useMutation` hook in userland code.
 */
type TypedUseMutationResult<ResultType, QueryArg, BaseQuery extends BaseQueryFn, R = MutationResultSelectorResult<MutationDefinition<QueryArg, BaseQuery, string, ResultType, string>>> = UseMutationStateResult<MutationDefinition<QueryArg, BaseQuery, string, ResultType, string>, R>;
/**
 * A React hook that lets you trigger an update request for a given endpoint, and subscribes the component to read the request status from the Redux store. The component will re-render as the loading status changes.
 *
 * #### Features
 *
 * - Manual control over firing a request to alter data on the server or possibly invalidate the cache
 * - 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
 * - Returns the latest request status and cached data from the Redux store
 * - Re-renders as the request status changes and data becomes available
 */
type UseMutation<D extends MutationDefinition<any, any, any, any>> = <R extends Record<string, any> = MutationResultSelectorResult<D>>(options?: UseMutationStateOptions<D, R>) => readonly [MutationTrigger<D>, UseMutationStateResult<D, R>];
type TypedUseMutation<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = UseMutation<MutationDefinition<QueryArg, BaseQuery, string, ResultType, string>>;
type MutationTrigger<D extends MutationDefinition<any, any, any, any>> = {
    /**
     * Triggers the mutation and returns a Promise.
     * @remarks
     * If you need to access the error or success payload immediately after a mutation, you can chain .unwrap().
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
    (arg: QueryArgFrom<D>): MutationActionCreatorResult<D>;
};
type TypedMutationTrigger<ResultType, QueryArg, BaseQuery extends BaseQueryFn> = MutationTrigger<MutationDefinition<QueryArg, BaseQuery, string, ResultType, string>>;

type QueryHookNames<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions as Definitions[K] extends {
        type: DefinitionType.query;
    } ? `use${Capitalize<K & string>}Query` : never]: UseQuery<Extract<Definitions[K], QueryDefinition<any, any, any, any>>>;
};
type LazyQueryHookNames<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions as Definitions[K] extends {
        type: DefinitionType.query;
    } ? `useLazy${Capitalize<K & string>}Query` : never]: UseLazyQuery<Extract<Definitions[K], QueryDefinition<any, any, any, any>>>;
};
type InfiniteQueryHookNames<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions as Definitions[K] extends {
        type: DefinitionType.infinitequery;
    } ? `use${Capitalize<K & string>}InfiniteQuery` : never]: UseInfiniteQuery<Extract<Definitions[K], InfiniteQueryDefinition<any, any, any, any, any>>>;
};
type MutationHookNames<Definitions extends EndpointDefinitions> = {
    [K in keyof Definitions as Definitions[K] extends {
        type: DefinitionType.mutation;
    } ? `use${Capitalize<K & string>}Mutation` : never]: UseMutation<Extract<Definitions[K], MutationDefinition<any, any, any, any>>>;
};
type HooksWithUniqueNames<Definitions extends EndpointDefinitions> = QueryHookNames<Definitions> & LazyQueryHookNames<Definitions> & InfiniteQueryHookNames<Definitions> & MutationHookNames<Definitions>;

export declare const reactHooksModuleName: unique symbol;
type ReactHooksModule = typeof reactHooksModuleName;
declare module '@reduxjs/toolkit/query' {
    interface ApiModules<BaseQuery extends BaseQueryFn, Definitions extends EndpointDefinitions, ReducerPath extends string, TagTypes extends string> {
        [reactHooksModuleName]: {
            /**
             *  Endpoints based on the input endpoints provided to `createApi`, containing `select`, `hooks` and `action matchers`.
             */
            endpoints: {
                [K in keyof Definitions]: Definitions[K] extends QueryDefinition<any, any, any, any, any> ? QueryHooks<Definitions[K]> : Definitions[K] extends MutationDefinition<any, any, any, any, any> ? MutationHooks<Definitions[K]> : Definitions[K] extends InfiniteQueryDefinition<any, any, any, any, any> ? InfiniteQueryHooks<Definitions[K]> : never;
            };
            /**
             * A hook that accepts a string endpoint name, and provides a callback that when called, pre-fetches the data for that endpoint.
             */
            usePrefetch<EndpointName extends QueryKeys<Definitions>>(endpointName: EndpointName, options?: PrefetchOptions): (arg: QueryArgFrom<Definitions[EndpointName]>, options?: PrefetchOptions) => void;
        } & HooksWithUniqueNames<Definitions>;
    }
}
type RR = typeof react_redux;
interface ReactHooksModuleOptions {
    /**
     * The hooks from React Redux to be used
     */
    hooks?: {
        /**
         * The version of the `useDispatch` hook to be used
         */
        useDispatch: RR['useDispatch'];
        /**
         * The version of the `useSelector` hook to be used
         */
        useSelector: RR['useSelector'];
        /**
         * The version of the `useStore` hook to be used
         */
        useStore: RR['useStore'];
    };
    /**
     * The version of the `batchedUpdates` function to be used
     */
    batch?: RR['batch'];
    /**
     * Enables performing asynchronous tasks immediately within a render.
     *
     * @example
     *
     * ```ts
     * import {
     *   buildCreateApi,
     *   coreModule,
     *   reactHooksModule
     * } from '@reduxjs/toolkit/query/react'
     *
     * const createApi = buildCreateApi(
     *   coreModule(),
     *   reactHooksModule({ unstable__sideEffectsInRender: true })
     * )
     * ```
     */
    unstable__sideEffectsInRender?: boolean;
    /**
     * A selector creator (usually from `reselect`, or matching the same signature)
     */
    createSelector?: CreateSelectorFunction<any, any, any>;
}
/**
 * Creates a module that generates react hooks from endpoints, for use with `buildCreateApi`.
 *
 *  @example
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
 * @returns A module for use with `buildCreateApi`
 */
declare const reactHooksModule: ({ batch, hooks, createSelector, unstable__sideEffectsInRender, ...rest }?: ReactHooksModuleOptions) => Module<ReactHooksModule>;

/**
 * Can be used as a `Provider` if you **do not already have a Redux store**.
 *
 * @example
 * ```tsx
 * // codeblock-meta no-transpile title="Basic usage - wrap your App with ApiProvider"
 * import * as React from 'react';
 * import { ApiProvider } from '@reduxjs/toolkit/query/react';
 * import { Pokemon } from './features/Pokemon';
 *
 * function App() {
 *   return (
 *     <ApiProvider api={api}>
 *       <Pokemon />
 *     </ApiProvider>
 *   );
 * }
 * ```
 *
 * @remarks
 * Using this together with an existing redux store, both will
 * conflict with each other - please use the traditional redux setup
 * in that case.
 */
declare function ApiProvider(props: {
    children: any;
    api: Api<any, {}, any, any>;
    setupListeners?: Parameters<typeof setupListeners>[1] | false;
    context?: Context<ReactReduxContextValue | null>;
}): React.JSX.Element;

declare const createApi: _reduxjs_toolkit_query.CreateApi<typeof _reduxjs_toolkit_query.coreModuleName | typeof reactHooksModuleName>;

export { ApiProvider, type TypedInfiniteQueryStateSelector, type TypedLazyInfiniteQueryTrigger, type TypedLazyQueryTrigger, type TypedMutationTrigger, type TypedQueryStateSelector, type TypedUseInfiniteQuery, type TypedUseInfiniteQueryHookResult, type TypedUseInfiniteQueryState, type TypedUseInfiniteQueryStateOptions, type TypedUseInfiniteQueryStateResult, type TypedUseInfiniteQuerySubscription, type TypedUseInfiniteQuerySubscriptionResult, type TypedUseLazyQuery, type TypedUseLazyQueryStateResult, type TypedUseLazyQuerySubscription, type TypedUseMutation, type TypedUseMutationResult, type TypedUseQuery, type TypedUseQueryHookResult, type TypedUseQueryState, type TypedUseQueryStateOptions, type TypedUseQueryStateResult, type TypedUseQuerySubscription, type TypedUseQuerySubscriptionResult, createApi, reactHooksModule };
