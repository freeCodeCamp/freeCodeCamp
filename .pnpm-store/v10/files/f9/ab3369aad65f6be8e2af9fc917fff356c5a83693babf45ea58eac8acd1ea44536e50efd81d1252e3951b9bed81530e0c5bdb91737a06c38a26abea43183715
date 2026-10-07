import { FetchResponse } from '@mswjs/interceptors';
import { Iterable, AsyncIterable } from './utils/internal/isIterable.js';
import { MaybePromise, NoInfer } from './typeUtils.js';
import { OperationTypeNode, DocumentNode, GraphQLError } from 'graphql';
import { Match, Path } from './utils/matching/matchRequestUrl.js';

interface HandlersExecutionResult {
    handler: RequestHandler;
    parsedResult?: any;
    response?: Response;
}
interface ResponseResolutionContext {
    /**
     * A base url to use when resolving relative urls.
     * @note This is primarily used by the `@mswjs/http-middleware`
     * to resolve relative urls in the context of the running server
     */
    baseUrl?: string;
    quiet?: boolean;
}
/**
 * Executes the list of request handlers against the given request.
 * Returns the execution result object containing any matching request
 * handler and any mocked response it returned.
 */
declare const executeHandlers: <Handlers extends Array<RequestHandler>>({ request, requestId, handlers, resolutionContext, }: {
    request: Request;
    requestId: string;
    handlers: Handlers;
    resolutionContext?: ResponseResolutionContext;
}) => Promise<HandlersExecutionResult | null>;

interface ParsedGraphQLQuery {
    operationType: OperationTypeNode;
    operationName?: string;
}
type ParsedGraphQLRequest<VariablesType extends GraphQLVariables = GraphQLVariables> = (ParsedGraphQLQuery & {
    query: string;
    variables?: VariablesType;
}) | undefined;
declare function parseDocumentNode(node: DocumentNode): ParsedGraphQLQuery;
type GraphQLParsedOperationsMap = Record<string, string[]>;
type GraphQLMultipartRequestBody = {
    operations: string;
    map?: string;
} & {
    [fileName: string]: File;
};
/**
 * Determines if a given request can be considered a GraphQL request.
 * Does not parse the query and does not guarantee its validity.
 */
declare function parseGraphQLRequest(request: Request): Promise<ParsedGraphQLRequest>;

interface DocumentTypeDecoration<Result = {
    [key: string]: any;
}, Variables = {
    [key: string]: any;
}> {
    __apiType?: (variables: Variables) => Result;
    __resultType?: Result;
    __variablesType?: Variables;
}
type GraphQLOperationType = OperationTypeNode | 'all';
type GraphQLHandlerNameSelector = DocumentNode | RegExp | string;
type GraphQLQuery = Record<string, any> | null;
type GraphQLVariables = Record<string, any>;
interface GraphQLHandlerInfo extends RequestHandlerDefaultInfo {
    operationType: GraphQLOperationType;
    operationName: GraphQLHandlerNameSelector | GraphQLCustomPredicate;
}
type GraphQLRequestParsedResult = {
    match: Match;
    cookies: Record<string, string>;
} & (ParsedGraphQLRequest<GraphQLVariables>
/**
 * An empty version of the ParsedGraphQLRequest
 * which simplifies the return type of the resolver
 * when the request is to a non-matching endpoint
 */
 | {
    operationType?: undefined;
    operationName?: undefined;
    query?: undefined;
    variables?: undefined;
});
type GraphQLResolverExtras<Variables extends GraphQLVariables> = {
    query: string;
    operationName: string;
    variables: Variables;
    cookies: Record<string, string>;
};
type GraphQLRequestBody<VariablesType extends GraphQLVariables> = GraphQLJsonRequestBody<VariablesType> | GraphQLMultipartRequestBody | Record<string, any> | undefined;
interface GraphQLJsonRequestBody<Variables extends GraphQLVariables> {
    query: string;
    variables?: Variables;
}
type GraphQLResponseBody<BodyType extends DefaultBodyType> = {
    data?: BodyType | null;
    errors?: readonly Partial<GraphQLError>[] | null;
    extensions?: Record<string, any>;
} | null | undefined;
type GraphQLCustomPredicate = (args: {
    request: Request;
    query: string;
    operationType: GraphQLOperationType;
    operationName: string;
    variables: GraphQLVariables;
    cookies: Record<string, string>;
}) => GraphQLCustomPredicateResult | Promise<GraphQLCustomPredicateResult>;
type GraphQLCustomPredicateResult = boolean | {
    matches: boolean;
};
type GraphQLPredicate<Query = any, Variables = any> = GraphQLHandlerNameSelector | DocumentTypeDecoration<Query, Variables> | GraphQLCustomPredicate;
declare function isDocumentNode(value: DocumentNode | any): value is DocumentNode;
declare class GraphQLHandler extends RequestHandler<GraphQLHandlerInfo, GraphQLRequestParsedResult, GraphQLResolverExtras<any>> {
    #private;
    private endpoint;
    static parsedRequestCache: WeakMap<Request, ParsedGraphQLRequest<GraphQLVariables>>;
    constructor(operationType: GraphQLOperationType, predicate: GraphQLPredicate, endpoint: Path, resolver: ResponseResolver<GraphQLResolverExtras<any>, any, any>, options?: RequestHandlerOptions);
    /**
     * Parses the request body, once per request, cached across all
     * GraphQL handlers. This is done to avoid multiple parsing of the
     * request body, which each requires a clone of the request.
     */
    parseGraphQLRequestOrGetFromCache(request: Request): Promise<ParsedGraphQLRequest<GraphQLVariables>>;
    parse(args: {
        request: Request;
    }): Promise<GraphQLRequestParsedResult>;
    predicate(args: {
        request: Request;
        parsedResult: GraphQLRequestParsedResult;
    }): Promise<boolean>;
    run(args: {
        request: StrictRequest<any>;
        requestId: string;
        resolutionContext?: ResponseResolutionContext;
    }): Promise<RequestHandlerExecutionResult<GraphQLRequestParsedResult> | null>;
    private matchOperationName;
    protected extendResolverArgs(args: {
        request: Request;
        parsedResult: GraphQLRequestParsedResult;
    }): {
        query: string;
        operationType: OperationTypeNode;
        operationName: string;
        variables: GraphQLVariables;
        cookies: Record<string, string>;
    };
    log(args: {
        request: Request;
        response: Response;
        parsedResult: GraphQLRequestParsedResult;
    }): Promise<void>;
}

type DefaultRequestMultipartBody = Record<string, string | File | Array<string | File>>;
type DefaultBodyType = Record<string, any> | DefaultRequestMultipartBody | string | number | boolean | null | undefined;
type JsonBodyType = Record<string, any> | string | number | boolean | null | undefined;
interface RequestHandlerDefaultInfo {
    header: string;
}
interface RequestHandlerInternalInfo {
    callFrame?: string;
}
type ResponseResolverReturnType<ResponseBodyType extends DefaultBodyType = undefined> = ([ResponseBodyType] extends [undefined] ? Response : ResponseBodyType extends GraphQLRequestBody<any> ? HttpResponse<ResponseBodyType> | DefaultUnsafeFetchResponse : HttpResponse<ResponseBodyType>) | undefined | void;
type MaybeAsyncResponseResolverReturnType<ResponseBodyType extends DefaultBodyType> = MaybePromise<ResponseResolverReturnType<ResponseBodyType>>;
type AsyncResponseResolverReturnType<ResponseBodyType extends DefaultBodyType> = MaybePromise<ResponseResolverReturnType<ResponseBodyType> | Iterable<MaybeAsyncResponseResolverReturnType<ResponseBodyType>, MaybeAsyncResponseResolverReturnType<ResponseBodyType>, MaybeAsyncResponseResolverReturnType<ResponseBodyType>> | AsyncIterable<MaybeAsyncResponseResolverReturnType<ResponseBodyType>, MaybeAsyncResponseResolverReturnType<ResponseBodyType>, MaybeAsyncResponseResolverReturnType<ResponseBodyType>>>;
type ResponseResolverInfo<ResolverExtraInfo extends Record<string, unknown>, RequestBodyType extends DefaultBodyType = DefaultBodyType> = {
    request: StrictRequest<RequestBodyType>;
    requestId: string;
} & ResolverExtraInfo;
type ResponseResolver<ResolverExtraInfo extends Record<string, unknown> = Record<string, unknown>, RequestBodyType extends DefaultBodyType = DefaultBodyType, ResponseBodyType extends DefaultBodyType = undefined> = (info: ResponseResolverInfo<ResolverExtraInfo, RequestBodyType>) => AsyncResponseResolverReturnType<ResponseBodyType>;
interface RequestHandlerArgs<HandlerInfo, HandlerOptions extends RequestHandlerOptions> {
    info: HandlerInfo;
    resolver: ResponseResolver<any>;
    options?: HandlerOptions;
}
interface RequestHandlerOptions {
    once?: boolean;
}
interface RequestHandlerExecutionResult<ParsedResult extends object | undefined> {
    handler: RequestHandler;
    parsedResult?: ParsedResult;
    request: Request;
    requestId: string;
    response?: Response;
}
declare abstract class RequestHandler<HandlerInfo extends RequestHandlerDefaultInfo = RequestHandlerDefaultInfo, ParsedResult extends Record<string, any> | undefined = any, ResolverExtras extends Record<string, unknown> = any, HandlerOptions extends RequestHandlerOptions = RequestHandlerOptions> {
    static cache: WeakMap<StrictRequest<DefaultBodyType>, StrictRequest<DefaultBodyType>>;
    readonly kind: "request";
    protected resolver: ResponseResolver<ResolverExtras, any, any>;
    private resolverIterator?;
    private resolverIteratorResult?;
    private options?;
    info: HandlerInfo & RequestHandlerInternalInfo;
    /**
     * Indicates whether this request handler has been used
     * (its resolver has successfully executed).
     */
    isUsed: boolean;
    constructor(args: RequestHandlerArgs<HandlerInfo, HandlerOptions>);
    /**
     * Reset the runtime state accumulated during response resolution,
     * such as generator iterator progress. Called when this handler is
     * removed from the active handlers list so re-adding it later starts
     * from a clean state.
     */
    protected reset(): void;
    /**
     * Restore this handler so it can match requests again after being
     * exhausted (e.g. via `{ once: true }`). Also clears any accumulated
     * resolution state.
     */
    protected restore(): void;
    /**
     * Determine if the intercepted request should be mocked.
     */
    abstract predicate(args: {
        request: Request;
        parsedResult: ParsedResult;
        resolutionContext?: ResponseResolutionContext;
    }): boolean | Promise<boolean>;
    /**
     * Print out the successfully handled request.
     */
    abstract log(args: {
        request: Request;
        response: Response;
        parsedResult: ParsedResult;
    }): void;
    /**
     * Parse the intercepted request to extract additional information from it.
     * Parsed result is then exposed to other methods of this request handler.
     */
    parse(_args: {
        request: Request;
        resolutionContext?: ResponseResolutionContext;
    }): Promise<ParsedResult>;
    /**
     * Test if this handler matches the given request.
     *
     * This method is not used internally but is exposed
     * as a convenience method for consumers writing custom
     * handlers.
     */
    test(args: {
        request: Request;
        resolutionContext?: ResponseResolutionContext;
    }): Promise<boolean>;
    protected extendResolverArgs(_args: {
        request: Request;
        parsedResult: ParsedResult;
    }): ResolverExtras;
    private cloneRequestOrGetFromCache;
    /**
     * Execute this request handler and produce a mocked response
     * using the given resolver function.
     */
    run(args: {
        request: StrictRequest<any>;
        requestId: string;
        resolutionContext?: ResponseResolutionContext;
    }): Promise<RequestHandlerExecutionResult<ParsedResult> | null>;
    private wrapResolver;
    private createExecutionResult;
}
/**
 * Forwards the cookies from the given response to `document.cookie`.
 */
declare function forwardResponseCookies(response: Response): void;

interface HttpResponseInit extends ResponseInit {
    type?: ResponseType;
}
declare const bodyType: unique symbol;
type DefaultUnsafeFetchResponse = Response & {
    [bodyType]?: never;
};
interface StrictRequest<BodyType extends JsonBodyType> extends Request {
    json(): Promise<BodyType>;
    clone(): StrictRequest<BodyType>;
}
/**
 * Opaque `Response` type that supports strict body type.
 *
 * @deprecated Please use {@link HttpResponse} instead.
 */
type StrictResponse<BodyType extends DefaultBodyType> = HttpResponse<BodyType>;
declare const kDefaultContentType: unique symbol;
/**
 * A drop-in replacement for the standard `Response` class
 * to allow additional features, like mocking the response `Set-Cookie` header.
 *
 * @example
 * new HttpResponse('Hello world', { status: 201 })
 * HttpResponse.json({ name: 'John' })
 * HttpResponse.formData(form)
 *
 * @see {@link https://mswjs.io/docs/api/http-response `HttpResponse` API reference}
 */
declare class HttpResponse<BodyType extends DefaultBodyType> extends FetchResponse {
    readonly [bodyType]: BodyType;
    constructor(body?: NoInfer<BodyType> | null, init?: HttpResponseInit);
    static error(): HttpResponse<any>;
    /**
     * Create a `Response` with a `Content-Type: "text/plain"` body.
     * @example
     * HttpResponse.text('hello world')
     * HttpResponse.text('Error', { status: 500 })
     */
    static text<BodyType extends string>(body?: NoInfer<BodyType> | null, init?: HttpResponseInit): HttpResponse<BodyType>;
    /**
     * Create a `Response` with a `Content-Type: "application/json"` body.
     * @example
     * HttpResponse.json({ firstName: 'John' })
     * HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
     */
    static json<BodyType extends JsonBodyType>(body?: NoInfer<BodyType> | null | undefined, init?: HttpResponseInit): HttpResponse<BodyType>;
    /**
     * Create a `Response` with a `Content-Type: "application/xml"` body.
     * @example
     * HttpResponse.xml(`<user name="John" />`)
     * HttpResponse.xml(`<article id="abc-123" />`, { status: 201 })
     */
    static xml<BodyType extends string>(body?: BodyType | null, init?: HttpResponseInit): HttpResponse<BodyType>;
    /**
     * Create a `Response` with a `Content-Type: "text/html"` body.
     * @example
     * HttpResponse.html(`<p class="author">Jane Doe</p>`)
     * HttpResponse.html(`<main id="abc-123">Main text</main>`, { status: 201 })
     */
    static html<BodyType extends string>(body?: BodyType | null, init?: HttpResponseInit): HttpResponse<BodyType>;
    /**
     * Create a `Response` with an `ArrayBuffer` body.
     * @example
     * const buffer = new ArrayBuffer(3)
     * const view = new Uint8Array(buffer)
     * view.set([1, 2, 3])
     *
     * HttpResponse.arrayBuffer(buffer)
     */
    static arrayBuffer<BodyType extends ArrayBuffer | SharedArrayBuffer>(body?: BodyType, init?: HttpResponseInit): HttpResponse<BodyType>;
    /**
     * Create a `Response` with a `FormData` body.
     * @example
     * const data = new FormData()
     * data.set('name', 'Alice')
     *
     * HttpResponse.formData(data)
     */
    static formData(body?: FormData, init?: HttpResponseInit): HttpResponse<FormData>;
}

export { type AsyncResponseResolverReturnType as A, type GraphQLHandlerNameSelector as B, type GraphQLHandlerInfo as C, type DefaultBodyType as D, type GraphQLRequestParsedResult as E, type GraphQLCustomPredicateResult as F, GraphQLHandler as G, HttpResponse as H, isDocumentNode as I, type JsonBodyType as J, type RequestHandlerInternalInfo as K, type RequestHandlerArgs as L, type MaybeAsyncResponseResolverReturnType as M, type RequestHandlerExecutionResult as N, forwardResponseCookies as O, type ParsedGraphQLRequest as P, bodyType as Q, RequestHandler as R, type StrictRequest as S, type DefaultUnsafeFetchResponse as T, kDefaultContentType as U, type ResponseResolver as a, type ResponseResolverReturnType as b, type RequestHandlerOptions as c, type DefaultRequestMultipartBody as d, type ResponseResolverInfo as e, type GraphQLQuery as f, type GraphQLVariables as g, type GraphQLRequestBody as h, type GraphQLResponseBody as i, type GraphQLJsonRequestBody as j, type GraphQLOperationType as k, type GraphQLCustomPredicate as l, type ResponseResolutionContext as m, type HttpResponseInit as n, type StrictResponse as o, type GraphQLPredicate as p, type GraphQLResolverExtras as q, type RequestHandlerDefaultInfo as r, type HandlersExecutionResult as s, executeHandlers as t, type ParsedGraphQLQuery as u, parseDocumentNode as v, type GraphQLParsedOperationsMap as w, type GraphQLMultipartRequestBody as x, parseGraphQLRequest as y, type DocumentTypeDecoration as z };
