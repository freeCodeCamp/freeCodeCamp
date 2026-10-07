import { D as DefaultBodyType, a as ResponseResolver, c as RequestHandlerOptions } from './HttpResponse-CxHR1nNN.mjs';
import { HttpRequestPredicate, HttpRequestResolverExtras, HttpHandler } from './handlers/HttpHandler.mjs';
import { PathParams } from './utils/matching/matchRequestUrl.mjs';
import '@mswjs/interceptors';
import './utils/internal/isIterable.mjs';
import './typeUtils.mjs';
import 'graphql';

type HttpRequestHandler = <Params extends PathParams<keyof Params> = PathParams, RequestBodyType extends DefaultBodyType = DefaultBodyType, ResponseBodyType extends DefaultBodyType = undefined>(predicate: HttpRequestPredicate<Params>, resolver: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>, options?: RequestHandlerOptions) => HttpHandler;
type HttpResponseResolver<Params extends PathParams<keyof Params> = PathParams, RequestBodyType extends DefaultBodyType = DefaultBodyType, ResponseBodyType extends DefaultBodyType = DefaultBodyType> = ResponseResolver<HttpRequestResolverExtras<Params>, RequestBodyType, ResponseBodyType>;
/**
 * A namespace to intercept and mock HTTP requests.
 *
 * @example
 * http.get('/user', resolver)
 * http.post('/post/:id', resolver)
 *
 * @see {@link https://mswjs.io/docs/api/http `http` API reference}
 */
declare const http: {
    all: HttpRequestHandler;
    head: HttpRequestHandler;
    get: HttpRequestHandler;
    post: HttpRequestHandler;
    put: HttpRequestHandler;
    delete: HttpRequestHandler;
    patch: HttpRequestHandler;
    options: HttpRequestHandler;
};

export { type HttpRequestHandler, type HttpResponseResolver, http };
