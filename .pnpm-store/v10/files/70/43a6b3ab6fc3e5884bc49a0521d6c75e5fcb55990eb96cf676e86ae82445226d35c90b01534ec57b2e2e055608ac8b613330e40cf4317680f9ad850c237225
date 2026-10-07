import {
  type DefaultBodyType,
  type RequestHandlerOptions,
  type ResponseResolver,
} from './handlers/RequestHandler'
import {
  HttpMethods,
  HttpHandler,
  type HttpRequestResolverExtras,
  type HttpRequestPredicate,
} from './handlers/HttpHandler'
import type { PathParams } from './utils/matching/matchRequestUrl'

export type HttpRequestHandler = <
  Params extends PathParams<keyof Params> = PathParams,
  RequestBodyType extends DefaultBodyType = DefaultBodyType,
  // Response body type MUST be undefined by default.
  // This is how we can distinguish between a handler that
  // returns plain "Response" and the one returning "HttpResponse"
  // to enforce a stricter response body type.
  ResponseBodyType extends DefaultBodyType = undefined,
>(
  predicate: HttpRequestPredicate<Params>,
  resolver: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>,
  options?: RequestHandlerOptions,
) => HttpHandler

export type HttpResponseResolver<
  Params extends PathParams<keyof Params> = PathParams,
  RequestBodyType extends DefaultBodyType = DefaultBodyType,
  ResponseBodyType extends DefaultBodyType = DefaultBodyType,
> = ResponseResolver<
  HttpRequestResolverExtras<Params>,
  RequestBodyType,
  ResponseBodyType
>

function createHttpHandler<Method extends HttpMethods | RegExp>(
  method: Method,
): HttpRequestHandler {
  return (predicate, resolver, options = {}) => {
    return new HttpHandler(method, predicate, resolver, options)
  }
}

/**
 * A namespace to intercept and mock HTTP requests.
 *
 * @example
 * http.get('/user', resolver)
 * http.post('/post/:id', resolver)
 *
 * @see {@link https://mswjs.io/docs/api/http `http` API reference}
 */
export const http = {
  all: createHttpHandler(/.+/),
  head: createHttpHandler(HttpMethods.HEAD),
  get: createHttpHandler(HttpMethods.GET),
  post: createHttpHandler(HttpMethods.POST),
  put: createHttpHandler(HttpMethods.PUT),
  delete: createHttpHandler(HttpMethods.DELETE),
  patch: createHttpHandler(HttpMethods.PATCH),
  options: createHttpHandler(HttpMethods.OPTIONS),
}
