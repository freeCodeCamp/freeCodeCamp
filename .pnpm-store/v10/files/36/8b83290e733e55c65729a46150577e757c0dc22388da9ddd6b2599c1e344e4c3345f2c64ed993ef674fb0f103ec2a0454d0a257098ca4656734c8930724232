import { R as RequestHandler, r as RequestHandlerDefaultInfo, a as ResponseResolver, c as RequestHandlerOptions, m as ResponseResolutionContext } from '../HttpResponse-CxHR1nNN.mjs';
import { PathParams, Path, Match } from '../utils/matching/matchRequestUrl.mjs';
import '@mswjs/interceptors';
import '../utils/internal/isIterable.mjs';
import '../typeUtils.mjs';
import 'graphql';

type HttpHandlerMethod = string | RegExp;
interface HttpHandlerInfo extends RequestHandlerDefaultInfo {
    method: HttpHandlerMethod;
    path: HttpRequestPredicate<PathParams>;
}
declare enum HttpMethods {
    HEAD = "HEAD",
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    DELETE = "DELETE"
}
type RequestQuery = {
    [queryName: string]: string;
};
type HttpRequestParsedResult = {
    match: Match;
    cookies: Record<string, string>;
};
type HttpRequestResolverExtras<Params extends PathParams> = {
    params: Params;
    cookies: Record<string, string>;
};
type HttpCustomPredicate<Params extends PathParams> = (args: {
    request: Request;
    cookies: Record<string, string>;
}) => HttpCustomPredicateResult<Params> | Promise<HttpCustomPredicateResult<Params>>;
type HttpCustomPredicateResult<Params extends PathParams> = boolean | {
    matches: boolean;
    params: Params;
};
type HttpRequestPredicate<Params extends PathParams> = Path | HttpCustomPredicate<Params>;
/**
 * Request handler for HTTP requests.
 * Provides request matching based on method and URL.
 */
declare class HttpHandler extends RequestHandler<HttpHandlerInfo, HttpRequestParsedResult, HttpRequestResolverExtras<any>> {
    constructor(method: HttpHandlerMethod, predicate: HttpRequestPredicate<PathParams>, resolver: ResponseResolver<HttpRequestResolverExtras<any>, any, any>, options?: RequestHandlerOptions);
    private checkRedundantQueryParameters;
    parse(args: {
        request: Request;
        resolutionContext?: ResponseResolutionContext;
    }): Promise<{
        match: Match;
        cookies: Record<string, string>;
    }>;
    predicate(args: {
        request: Request;
        parsedResult: HttpRequestParsedResult;
        resolutionContext?: ResponseResolutionContext;
    }): Promise<boolean>;
    private matchMethod;
    protected extendResolverArgs(args: {
        request: Request;
        parsedResult: HttpRequestParsedResult;
    }): {
        params: PathParams<string>;
        cookies: Record<string, string>;
    };
    log(args: {
        request: Request;
        response: Response;
    }): Promise<void>;
}

export { type HttpCustomPredicate, type HttpCustomPredicateResult, HttpHandler, type HttpHandlerInfo, type HttpHandlerMethod, HttpMethods, type HttpRequestParsedResult, type HttpRequestPredicate, type HttpRequestResolverExtras, type RequestQuery };
