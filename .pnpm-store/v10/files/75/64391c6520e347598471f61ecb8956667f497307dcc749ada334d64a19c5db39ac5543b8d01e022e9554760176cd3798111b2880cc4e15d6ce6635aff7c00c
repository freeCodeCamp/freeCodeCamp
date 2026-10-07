import type {
  BaseQueryApi,
  BaseQueryArg,
  BaseQueryEnhancer,
  BaseQueryError,
  BaseQueryExtraOptions,
  BaseQueryFn,
  BaseQueryMeta,
} from './baseQueryTypes'
import type { FetchBaseQueryError } from './fetchBaseQuery'
import { HandledError } from './HandledError'

/**
 * Exponential backoff based on the attempt number.
 *
 * @remarks
 * 1. 600ms * random(0.4, 1.4)
 * 2. 1200ms * random(0.4, 1.4)
 * 3. 2400ms * random(0.4, 1.4)
 * 4. 4800ms * random(0.4, 1.4)
 * 5. 9600ms * random(0.4, 1.4)
 *
 * @param attempt - Current attempt
 * @param maxRetries - Maximum number of retries
 */
async function defaultBackoff(
  attempt: number = 0,
  maxRetries: number = 5,
  signal?: AbortSignal,
) {
  const attempts = Math.min(attempt, maxRetries)

  const timeout = ~~((Math.random() + 0.4) * (300 << attempts)) // Force a positive int in the case we make this an option

  await new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(() => resolve(), timeout)

    // If signal is provided and gets aborted, clear timeout and reject
    if (signal) {
      const abortHandler = () => {
        clearTimeout(timeoutId)
        reject(new Error('Aborted'))
      }

      // Check if already aborted
      if (signal.aborted) {
        clearTimeout(timeoutId)
        reject(new Error('Aborted'))
      } else {
        signal.addEventListener('abort', abortHandler, { once: true })
      }
    }
  })
}

type RetryConditionFunction = (
  error: BaseQueryError<BaseQueryFn>,
  args: BaseQueryArg<BaseQueryFn>,
  extraArgs: {
    attempt: number
    baseQueryApi: BaseQueryApi
    extraOptions: BaseQueryExtraOptions<BaseQueryFn> & RetryOptions
  },
) => boolean

export type RetryOptions = {
  /**
   * Function used to determine delay between retries
   */
  backoff?: (
    attempt: number,
    maxRetries: number,
    signal?: AbortSignal,
  ) => Promise<void>
} & (
  | {
      /**
       * How many times the query will be retried (default: 5)
       */
      maxRetries?: number
      retryCondition?: undefined
    }
  | {
      /**
       * Callback to determine if a retry should be attempted.
       * Return `true` for another retry and `false` to quit trying prematurely.
       */
      retryCondition?: RetryConditionFunction
      maxRetries?: undefined
    }
)

function fail<BaseQuery extends BaseQueryFn = BaseQueryFn>(
  error: BaseQueryError<BaseQuery>,
  meta?: BaseQueryMeta<BaseQuery>,
): never {
  throw Object.assign(new HandledError({ error, meta }), {
    throwImmediately: true,
  })
}

/**
 * Checks if the abort signal is aborted and fails immediately if so.
 * Used to exit retry loops cleanly when a request is aborted.
 */
function failIfAborted(signal: AbortSignal): void {
  if (signal.aborted) {
    fail({ status: 'CUSTOM_ERROR', error: 'Aborted' })
  }
}

const EMPTY_OPTIONS = {}

const retryWithBackoff: BaseQueryEnhancer<
  unknown,
  RetryOptions,
  RetryOptions | void
> = (baseQuery, defaultOptions) => async (args, api, extraOptions) => {
  // We need to figure out `maxRetries` before we define `defaultRetryCondition.
  // This is probably goofy, but ought to work.
  // Put our defaults in one array, filter out undefineds, grab the last value.
  const possibleMaxRetries: number[] = [
    5,
    ((defaultOptions as any) || EMPTY_OPTIONS).maxRetries,
    ((extraOptions as any) || EMPTY_OPTIONS).maxRetries,
  ].filter((x) => x !== undefined)
  const [maxRetries] = possibleMaxRetries.slice(-1)

  const defaultRetryCondition: RetryConditionFunction = (_, __, { attempt }) =>
    attempt <= maxRetries

  const options: {
    maxRetries: number
    backoff: typeof defaultBackoff
    retryCondition: typeof defaultRetryCondition
  } = {
    maxRetries,
    backoff: defaultBackoff,
    retryCondition: defaultRetryCondition,
    ...defaultOptions,
    ...extraOptions,
  }
  let retry = 0

  while (true) {
    // Check if aborted before each attempt
    failIfAborted(api.signal)

    try {
      const result = await baseQuery(args, api, extraOptions)
      // baseQueries _should_ return an error property, so we should check for that and throw it to continue retrying
      if (result.error) {
        throw new HandledError(result)
      }
      return result
    } catch (e: any) {
      retry++

      if (e.throwImmediately) {
        if (e instanceof HandledError) {
          return e.value
        }

        // We don't know what this is, so we have to rethrow it
        throw e
      }

      if (e instanceof HandledError) {
        if (
          !options.retryCondition(e.value.error as FetchBaseQueryError, args, {
            attempt: retry,
            baseQueryApi: api,
            extraOptions,
          })
        ) {
          return e.value // Max retries for expected error
        }
      } else {
        // For unexpected errors, respect maxRetries
        if (retry > options.maxRetries) {
          // Return the error as a proper error response instead of throwing
          return { error: e }
        }
      }

      // Check if aborted before backoff
      failIfAborted(api.signal)

      try {
        await options.backoff(retry, options.maxRetries, api.signal)
      } catch (backoffError) {
        // If backoff was aborted, exit the retry loop
        failIfAborted(api.signal)
        // Otherwise, rethrow the backoff error
        throw backoffError
      }
    }
  }
}

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
export const retry = /* @__PURE__ */ Object.assign(retryWithBackoff, { fail })
