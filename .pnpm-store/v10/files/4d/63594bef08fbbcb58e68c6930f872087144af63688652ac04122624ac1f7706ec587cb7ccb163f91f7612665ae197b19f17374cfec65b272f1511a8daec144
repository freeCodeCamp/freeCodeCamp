import type { ThunkDispatch } from '@reduxjs/toolkit'
import type { MaybePromise, UnwrapPromise } from './tsHelpers'

export interface BaseQueryApi {
  signal: AbortSignal
  abort: (reason?: string) => void
  dispatch: ThunkDispatch<any, any, any>
  getState: () => unknown
  extra: unknown
  endpoint: string
  type: 'query' | 'mutation'
  /**
   * Only available for queries: indicates if a query has been forced,
   * i.e. it would have been fetched even if there would already be a cache entry
   * (this does not mean that there is already a cache entry though!)
   *
   * This can be used to for example add a `Cache-Control: no-cache` header for
   * invalidated queries.
   */
  forced?: boolean
  /**
   * Only available for queries: the cache key that was used to store the query result
   */
  queryCacheKey?: string
}

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
  | {
      error: E
      data?: undefined
      meta?: M
    }
  | {
      error?: undefined
      data: T
      meta?: M
    }

export type BaseQueryFn<
  Args = any,
  Result = unknown,
  Error = unknown,
  DefinitionExtraOptions = {},
  Meta = {},
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions,
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>

export type BaseQueryEnhancer<
  AdditionalArgs = unknown,
  AdditionalDefinitionExtraOptions = unknown,
  Config = void,
> = <BaseQuery extends BaseQueryFn>(
  baseQuery: BaseQuery,
  config: Config,
) => BaseQueryFn<
  BaseQueryArg<BaseQuery> & AdditionalArgs,
  BaseQueryResult<BaseQuery>,
  BaseQueryError<BaseQuery>,
  BaseQueryExtraOptions<BaseQuery> & AdditionalDefinitionExtraOptions,
  NonNullable<BaseQueryMeta<BaseQuery>>
>

/**
 * @public
 */
export type BaseQueryResult<BaseQuery extends BaseQueryFn> =
  UnwrapPromise<ReturnType<BaseQuery>> extends infer Unwrapped
    ? Unwrapped extends { data: any }
      ? Unwrapped['data']
      : never
    : never

/**
 * @public
 */
export type BaseQueryMeta<BaseQuery extends BaseQueryFn> = UnwrapPromise<
  ReturnType<BaseQuery>
>['meta']

/**
 * @public
 */
export type BaseQueryError<BaseQuery extends BaseQueryFn> = Exclude<
  UnwrapPromise<ReturnType<BaseQuery>>,
  { error?: undefined }
>['error']

/**
 * @public
 */
export type BaseQueryArg<T extends (arg: any, ...args: any[]) => any> =
  T extends (arg: infer A, ...args: any[]) => any ? A : any

/**
 * @public
 */
export type BaseQueryExtraOptions<BaseQuery extends BaseQueryFn> =
  Parameters<BaseQuery>[2]
