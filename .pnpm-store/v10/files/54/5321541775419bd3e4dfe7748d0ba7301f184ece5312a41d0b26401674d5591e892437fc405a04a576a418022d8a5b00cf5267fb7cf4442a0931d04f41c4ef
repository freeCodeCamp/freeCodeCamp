import { Headers as HeadersPolyfill } from 'headers-polyfill'
import { getCallFrame } from '../utils/internal/getCallFrame'
import {
  isIterable,
  type AsyncIterable,
  type Iterable,
} from '../utils/internal/isIterable'
import type { ResponseResolutionContext } from '../utils/executeHandlers'
import type { MaybePromise } from '../typeUtils'
import type { HttpResponse } from '../HttpResponse'
import {
  type StrictRequest,
  type DefaultUnsafeFetchResponse,
} from '../HttpResponse'
import type { GraphQLRequestBody } from './GraphQLHandler'
import { getRawSetCookie } from '../utils/HttpResponse/decorators'

export type DefaultRequestMultipartBody = Record<
  string,
  string | File | Array<string | File>
>

export type DefaultBodyType =
  | Record<string, any>
  | DefaultRequestMultipartBody
  | string
  | number
  | boolean
  | null
  | undefined

export type JsonBodyType =
  | Record<string, any>
  | string
  | number
  | boolean
  | null
  | undefined

export interface RequestHandlerDefaultInfo {
  header: string
}

export interface RequestHandlerInternalInfo {
  callFrame?: string
}

export type ResponseResolverReturnType<
  ResponseBodyType extends DefaultBodyType = undefined,
> =
  // If ResponseBodyType is a union and one of the types is `undefined`,
  // allow plain Response as the type.
  | ([ResponseBodyType] extends [undefined]
      ? Response
      : /**
         * Treat GraphQL response body type as a special case.
         * For esome reason, making the default HttpResponse<T> | DefaultUnsafeFetchResponse
         * union breaks the body type inference for HTTP requests.
         * @see https://github.com/mswjs/msw/issues/2130
         */
        ResponseBodyType extends GraphQLRequestBody<any>
        ? HttpResponse<ResponseBodyType> | DefaultUnsafeFetchResponse
        : HttpResponse<ResponseBodyType>)
  | undefined
  | void

export type MaybeAsyncResponseResolverReturnType<
  ResponseBodyType extends DefaultBodyType,
> = MaybePromise<ResponseResolverReturnType<ResponseBodyType>>

export type AsyncResponseResolverReturnType<
  ResponseBodyType extends DefaultBodyType,
> = MaybePromise<
  | ResponseResolverReturnType<ResponseBodyType>
  | Iterable<
      MaybeAsyncResponseResolverReturnType<ResponseBodyType>,
      MaybeAsyncResponseResolverReturnType<ResponseBodyType>,
      MaybeAsyncResponseResolverReturnType<ResponseBodyType>
    >
  | AsyncIterable<
      MaybeAsyncResponseResolverReturnType<ResponseBodyType>,
      MaybeAsyncResponseResolverReturnType<ResponseBodyType>,
      MaybeAsyncResponseResolverReturnType<ResponseBodyType>
    >
>

export type ResponseResolverInfo<
  ResolverExtraInfo extends Record<string, unknown>,
  RequestBodyType extends DefaultBodyType = DefaultBodyType,
> = {
  request: StrictRequest<RequestBodyType>
  requestId: string
} & ResolverExtraInfo

export type ResponseResolver<
  ResolverExtraInfo extends Record<string, unknown> = Record<string, unknown>,
  RequestBodyType extends DefaultBodyType = DefaultBodyType,
  ResponseBodyType extends DefaultBodyType = undefined,
> = (
  info: ResponseResolverInfo<ResolverExtraInfo, RequestBodyType>,
) => AsyncResponseResolverReturnType<ResponseBodyType>

export interface RequestHandlerArgs<
  HandlerInfo,
  HandlerOptions extends RequestHandlerOptions,
> {
  info: HandlerInfo
  resolver: ResponseResolver<any>
  options?: HandlerOptions
}

export interface RequestHandlerOptions {
  once?: boolean
}

export interface RequestHandlerExecutionResult<
  ParsedResult extends object | undefined,
> {
  handler: RequestHandler
  parsedResult?: ParsedResult
  request: Request
  requestId: string
  response?: Response
}

export abstract class RequestHandler<
  HandlerInfo extends RequestHandlerDefaultInfo = RequestHandlerDefaultInfo,
  ParsedResult extends Record<string, any> | undefined = any,
  ResolverExtras extends Record<string, unknown> = any,
  HandlerOptions extends RequestHandlerOptions = RequestHandlerOptions,
> {
  static cache = new WeakMap<
    StrictRequest<DefaultBodyType>,
    StrictRequest<DefaultBodyType>
  >()

  public readonly kind = 'request' as const

  protected resolver: ResponseResolver<ResolverExtras, any, any>
  private resolverIterator?:
    | Iterator<
        MaybeAsyncResponseResolverReturnType<any>,
        MaybeAsyncResponseResolverReturnType<any>,
        MaybeAsyncResponseResolverReturnType<any>
      >
    | AsyncIterator<
        MaybeAsyncResponseResolverReturnType<any>,
        MaybeAsyncResponseResolverReturnType<any>,
        MaybeAsyncResponseResolverReturnType<any>
      >
  private resolverIteratorResult?: Response | HttpResponse<any>
  private options?: HandlerOptions

  public info: HandlerInfo & RequestHandlerInternalInfo

  /**
   * Indicates whether this request handler has been used
   * (its resolver has successfully executed).
   */
  public isUsed: boolean

  constructor(args: RequestHandlerArgs<HandlerInfo, HandlerOptions>) {
    this.resolver = args.resolver
    this.options = args.options

    const callFrame = getCallFrame(new Error())

    this.info = {
      ...args.info,
      callFrame,
    }

    this.isUsed = false
  }

  /**
   * Reset the runtime state accumulated during response resolution,
   * such as generator iterator progress. Called when this handler is
   * removed from the active handlers list so re-adding it later starts
   * from a clean state.
   */
  protected reset(): void {
    const iterator = this.resolverIterator
    this.resolverIterator = undefined
    this.resolverIteratorResult = undefined

    if (typeof iterator?.return === 'function') {
      void Promise.resolve(iterator.return())
    }
  }

  /**
   * Restore this handler so it can match requests again after being
   * exhausted (e.g. via `{ once: true }`). Also clears any accumulated
   * resolution state.
   */
  protected restore(): void {
    if (this.options?.once) {
      this.reset()
      this.isUsed = false
    }
  }

  /**
   * Determine if the intercepted request should be mocked.
   */
  abstract predicate(args: {
    request: Request
    parsedResult: ParsedResult
    resolutionContext?: ResponseResolutionContext
  }): boolean | Promise<boolean>

  /**
   * Print out the successfully handled request.
   */
  abstract log(args: {
    request: Request
    response: Response
    parsedResult: ParsedResult
  }): void

  /**
   * Parse the intercepted request to extract additional information from it.
   * Parsed result is then exposed to other methods of this request handler.
   */
  async parse(_args: {
    request: Request
    resolutionContext?: ResponseResolutionContext
  }): Promise<ParsedResult> {
    return {} as ParsedResult
  }

  /**
   * Test if this handler matches the given request.
   *
   * This method is not used internally but is exposed
   * as a convenience method for consumers writing custom
   * handlers.
   */
  public async test(args: {
    request: Request
    resolutionContext?: ResponseResolutionContext
  }): Promise<boolean> {
    const parsedResult = await this.parse({
      request: args.request,
      resolutionContext: args.resolutionContext,
    })

    return this.predicate({
      request: args.request,
      parsedResult,
      resolutionContext: args.resolutionContext,
    })
  }

  protected extendResolverArgs(_args: {
    request: Request
    parsedResult: ParsedResult
  }): ResolverExtras {
    return {} as ResolverExtras
  }

  // Clone the request instance before it's passed to the handler phases
  // and the response resolver so we can always read it for logging.
  // We only clone it once per request to avoid unnecessary overhead.
  private cloneRequestOrGetFromCache(
    request: StrictRequest<DefaultBodyType>,
  ): StrictRequest<DefaultBodyType> {
    const existingClone = RequestHandler.cache.get(request)

    if (typeof existingClone !== 'undefined') {
      return existingClone
    }

    const clonedRequest = request.clone()
    RequestHandler.cache.set(request, clonedRequest)

    return clonedRequest
  }

  /**
   * Execute this request handler and produce a mocked response
   * using the given resolver function.
   */
  public async run(args: {
    request: StrictRequest<any>
    requestId: string
    resolutionContext?: ResponseResolutionContext
  }): Promise<RequestHandlerExecutionResult<ParsedResult> | null> {
    if (this.isUsed && this.options?.once) {
      return null
    }

    // Clone the request.
    // If this is the first time MSW handles this request, a fresh clone
    // will be created and cached. Upon further handling of the same request,
    // the request clone from the cache will be reused to prevent abundant
    // "abort" listeners and save up resources on cloning.
    const requestClone = this.cloneRequestOrGetFromCache(args.request)

    const parsedResult = await this.parse({
      request: args.request,
      resolutionContext: args.resolutionContext,
    })
    const shouldInterceptRequest = await this.predicate({
      request: args.request,
      parsedResult,
      resolutionContext: args.resolutionContext,
    })

    if (!shouldInterceptRequest) {
      return null
    }

    // Re-check isUsed, in case another request hit this handler while we were
    // asynchronously parsing the request.
    if (this.isUsed && this.options?.once) {
      return null
    }

    // Preemptively mark the handler as used.
    // Generators will undo this because only when the resolver reaches the
    // "done" state of the generator that it considers the handler used.
    this.isUsed = true

    // Create a response extraction wrapper around the resolver
    // since it can be both an async function and a generator.
    const executeResolver = this.wrapResolver(this.resolver)

    const resolverExtras = this.extendResolverArgs({
      request: args.request,
      parsedResult,
    })

    const mockedResponsePromise = (
      executeResolver({
        ...resolverExtras,
        requestId: args.requestId,
        request: args.request,
      }) as Promise<Response | undefined>
    ).catch((errorOrResponse) => {
      // Allow throwing a Response instance in a response resolver.
      if (errorOrResponse instanceof Response) {
        return errorOrResponse
      }

      // Otherwise, throw the error as-is.
      throw errorOrResponse
    })

    const mockedResponse = await mockedResponsePromise

    if (mockedResponse) {
      forwardResponseCookies(mockedResponse)
    }

    const executionResult = this.createExecutionResult({
      // Pass the cloned request to the result so that logging
      // and other consumers could read its body once more.
      request: requestClone,
      requestId: args.requestId,
      response: mockedResponse,
      parsedResult,
    })

    return executionResult
  }

  private wrapResolver(
    resolver: ResponseResolver<ResolverExtras>,
  ): ResponseResolver<ResolverExtras> {
    return async (info): Promise<ResponseResolverReturnType<any>> => {
      if (!this.resolverIterator) {
        const result = await resolver(info)

        if (!isIterable(result)) {
          return result
        }

        this.resolverIterator =
          Symbol.iterator in result
            ? result[Symbol.iterator]()
            : result[Symbol.asyncIterator]()
      }

      // Opt-out from marking this handler as used.
      this.isUsed = false

      const { done, value } = await this.resolverIterator.next()
      const nextResponse = await value

      if (nextResponse) {
        this.resolverIteratorResult = nextResponse.clone()
      }

      if (done) {
        // A one-time generator resolver stops affecting the network
        // only after it's been completely exhausted.
        this.isUsed = true

        // Clone the previously stored response so it can be read
        // when receiving it repeatedly from the "done" generator.
        return this.resolverIteratorResult?.clone()
      }

      return nextResponse
    }
  }

  private createExecutionResult(args: {
    request: Request
    requestId: string
    parsedResult: ParsedResult
    response?: Response
  }): RequestHandlerExecutionResult<ParsedResult> {
    return {
      handler: this,
      request: args.request,
      requestId: args.requestId,
      response: args.response,
      parsedResult: args.parsedResult,
    }
  }
}

/**
 * Forwards the cookies from the given response to `document.cookie`.
 */
export function forwardResponseCookies(response: Response): void {
  // Cookie forwarding is only relevant in the browser.
  if (typeof document === 'undefined') {
    return
  }

  const responseCookies = getRawSetCookie(response)

  if (!responseCookies) {
    return
  }

  // Write the mocked response cookies to the document.
  // Use `headers-polyfill` to get the Set-Cookie header value correctly.
  // This is an alternative until TypeScript 5.2
  // and Node.js v20 become the minimum supported versions
  // and "Headers.prototype.getSetCookie" can be used directly.
  const allResponseCookies = HeadersPolyfill.prototype.getSetCookie.call(
    new Headers([['set-cookie', responseCookies]]),
  )

  for (const cookieString of allResponseCookies) {
    document.cookie = cookieString
  }
}
