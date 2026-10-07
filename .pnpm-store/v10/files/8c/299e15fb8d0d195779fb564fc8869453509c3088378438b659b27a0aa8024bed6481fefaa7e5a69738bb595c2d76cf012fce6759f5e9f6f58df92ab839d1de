/**
 *
 * handler
 *
 */
import { ExecutionArgs, ExecutionResult, GraphQLSchema, validate as graphqlValidate, ValidationRule, execute as graphqlExecute, parse as graphqlParse, getOperationAST as graphqlGetOperationAST, GraphQLError } from 'graphql';
import { RequestParams } from './common.mjs';
/**
 * The incoming request headers the implementing server should provide.
 *
 * @category Server
 */
export type RequestHeaders = {
    /**
     * Always an array in Node. Duplicates are added to it.
     * Not necessarily true for other environments.
     */
    'set-cookie'?: string | string[] | undefined;
    [key: string]: string | string[] | undefined;
} | {
    get: (key: string) => string | null;
};
/**
 * Server agnostic request interface containing the raw request
 * which is server dependant.
 *
 * @category Server
 */
export interface Request<Raw, Context> {
    readonly method: string;
    readonly url: string;
    readonly headers: RequestHeaders;
    /**
     * Parsed request body or a parser function.
     *
     * If the provided function throws, the error message "Unparsable JSON body" will
     * be in the erroneous response.
     */
    readonly body: string | Record<string, unknown> | null | (() => string | Record<string, unknown> | null | Promise<string | Record<string, unknown> | null>);
    /**
     * The raw request itself from the implementing server.
     *
     * For example: `express.Request` when using Express, or maybe
     * `http.IncomingMessage` when just using Node with `http.createServer`.
     */
    readonly raw: Raw;
    /**
     * Context value about the incoming request, you're free to pass any information here.
     */
    readonly context: Context;
}
/**
 * The response headers that get returned from graphql-http.
 *
 * @category Server
 */
export type ResponseHeaders = {
    accept?: string;
    allow?: string;
    'content-type'?: string;
} & Record<string, string>;
/**
 * Server agnostic response body returned from `graphql-http` needing
 * to be coerced to the server implementation in use.
 *
 * @category Server
 */
export type ResponseBody = string;
/**
 * Server agnostic response options (ex. status and headers) returned from
 * `graphql-http` needing to be coerced to the server implementation in use.
 *
 * @category Server
 */
export interface ResponseInit {
    readonly status: number;
    readonly statusText: string;
    readonly headers?: ResponseHeaders;
}
/**
 * Server agnostic response returned from `graphql-http` containing the
 * body and init options needing to be coerced to the server implementation in use.
 *
 * @category Server
 */
export type Response = readonly [body: ResponseBody | null, init: ResponseInit];
/**
 * A concrete GraphQL execution context value type.
 *
 * Mainly used because TypeScript collapses unions
 * with `any` or `unknown` to `any` or `unknown`. So,
 * we use a custom type to allow definitions such as
 * the `context` server option.
 *
 * @category Server
 */
export type OperationContext = Record<PropertyKey, unknown> | symbol | number | string | boolean | undefined | null;
/**
 * The (GraphQL) error formatter function.
 *
 * @category Server
 */
export type FormatError = (err: Readonly<GraphQLError | Error>) => GraphQLError | Error;
/**
 * The request parser for an incoming GraphQL request in the handler.
 *
 * It should parse and validate the request itself, including the request method
 * and the content-type of the body.
 *
 * In case you are extending the server to handle more request types, this is the
 * perfect place to do so.
 *
 * If an error is thrown, it will be formatted using the provided {@link FormatError}
 * and handled following the spec to be gracefully reported to the client.
 *
 * Throwing an instance of `Error` will _always_ have the client respond with a `400: Bad Request`
 * and the error's message in the response body; however, if an instance of `GraphQLError` is thrown,
 * it will be reported depending on the accepted content-type.
 *
 * If you return nothing, the default parser will be used instead.
 *
 * @category Server
 */
export type ParseRequestParams<RequestRaw = unknown, RequestContext = unknown> = (req: Request<RequestRaw, RequestContext>) => Promise<RequestParams | Response | void> | RequestParams | Response | void;
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 * It parses and validates the request itself, including the request method and the
 * content-type of the body.
 *
 * If the HTTP request itself is invalid or malformed, the function will return an
 * appropriate {@link Response}.
 *
 * If the HTTP request is valid, but is not a well-formatted GraphQL request, the
 * function will throw an error and it is up to the user to handle and respond as
 * they see fit.
 *
 * @category Server
 */
export declare function parseRequestParams<RequestRaw = unknown, RequestContext = unknown>(req: Request<RequestRaw, RequestContext>): Promise<Response | RequestParams>;
/** @category Server */
export type OperationArgs<Context extends OperationContext = undefined> = ExecutionArgs & {
    contextValue?: Context;
};
/** @category Server */
export interface HandlerOptions<RequestRaw = unknown, RequestContext = unknown, Context extends OperationContext = undefined> {
    /**
     * The GraphQL schema on which the operations will
     * be executed and validated against.
     *
     * If a function is provided, it will be called on every
     * operation request allowing you to manipulate schema
     * dynamically.
     *
     * If the schema is left undefined, you're trusted to
     * provide one in the returned `ExecutionArgs` from the
     * `onSubscribe` callback.
     *
     * If you want to respond to the client with a custom status and/or body,
     * you should do by returning a `Request` argument which will stop
     * further execution.
     */
    schema?: GraphQLSchema | ((req: Request<RequestRaw, RequestContext>, args: Omit<OperationArgs<Context>, 'schema'>) => Promise<GraphQLSchema | Response> | GraphQLSchema | Response);
    /**
     * A value which is provided to every resolver and holds
     * important contextual information like the currently
     * logged in user, or access to a database.
     */
    context?: Context | ((req: Request<RequestRaw, RequestContext>, params: RequestParams) => Promise<Context | Response> | Context | Response);
    /**
     * A custom GraphQL validate function allowing you to apply your
     * own validation rules.
     *
     * Will not be used when implementing a custom `onSubscribe`.
     */
    validate?: typeof graphqlValidate;
    /**
     * The validation rules for running GraphQL validate.
     *
     * When providing an array, the rules will be APPENDED to the default
     * `specifiedRules` array provided by the graphql-js module.
     *
     * Alternatively, providing a function instead will OVERWRITE the defaults
     * and use exclusively the rules returned by the function. The third (last)
     * argument of the function are the default `specifiedRules` array provided
     * by the graphql-js module, you're free to prepend/append the defaults to
     * your rule set, or omit them altogether.
     */
    validationRules?: readonly ValidationRule[] | ((req: Request<RequestRaw, RequestContext>, args: OperationArgs<Context>, specifiedRules: readonly ValidationRule[]) => Promise<readonly ValidationRule[]> | readonly ValidationRule[]);
    /**
     * Is the `execute` function from GraphQL which is
     * used to execute the query and mutation operations.
     */
    execute?: typeof graphqlExecute;
    /**
     * GraphQL parse function allowing you to apply a custom parser.
     */
    parse?: typeof graphqlParse;
    /**
     * GraphQL operation AST getter used for detecting the operation type.
     */
    getOperationAST?: typeof graphqlGetOperationAST;
    /**
     * The GraphQL root value or resolvers to go alongside the execution.
     * Learn more about them here: https://graphql.org/learn/execution/#root-fields-resolvers.
     *
     * If you return from `onSubscribe`, and the returned value is
     * missing the `rootValue` field, the relevant operation root
     * will be used instead.
     */
    rootValue?: unknown;
    /**
     * The subscribe callback executed right after processing the request
     * before proceeding with the GraphQL operation execution.
     *
     * If you return `ExecutionResult` from the callback, it will be used
     * directly for responding to the request. Useful for implementing a response
     * cache.
     *
     * If you return `ExecutionArgs` from the callback, it will be used instead of
     * trying to build one internally. In this case, you are responsible for providing
     * a ready set of arguments which will be directly plugged in the operation execution.
     *
     * You *must* validate the `ExecutionArgs` yourself if returning them.
     *
     * If you return an array of `GraphQLError` from the callback, they will be reported
     * to the client while complying with the spec.
     *
     * Omitting the fields `contextValue` from the returned `ExecutionArgs` will use the
     * provided `context` option, if available.
     *
     * Useful for preparing the execution arguments following a custom logic. A typical
     * use-case is persisted queries. You can identify the query from the request parameters
     * and supply the appropriate GraphQL operation execution arguments.
     *
     * If you want to respond to the client with a custom status and/or body,
     * you should do by returning a `Request` argument which will stop
     * further execution.
     */
    onSubscribe?: (req: Request<RequestRaw, RequestContext>, params: RequestParams) => Promise<ExecutionResult | OperationArgs<Context> | readonly GraphQLError[] | Response | void> | ExecutionResult | OperationArgs<Context> | readonly GraphQLError[] | Response | void;
    /**
     * Executed after the operation call resolves.
     *
     * The `OperationResult` argument is the result of operation
     * execution. It can be an iterator or already a value.
     *
     * Use this callback to listen for GraphQL operations and
     * execution result manipulation.
     *
     * If you want to respond to the client with a custom status and/or body,
     * you should do by returning a `Request` argument which will stop
     * further execution.
     */
    onOperation?: (req: Request<RequestRaw, RequestContext>, args: OperationArgs<Context>, result: ExecutionResult) => Promise<ExecutionResult | Response | void> | ExecutionResult | Response | void;
    /**
     * Format handled errors to your satisfaction. Either GraphQL errors
     * or safe request processing errors are meant by "handled errors".
     *
     * If multiple errors have occurred, all of them will be mapped using
     * this formatter.
     */
    formatError?: FormatError;
    /**
     * The request parser for an incoming GraphQL request.
     *
     * Read more about it in {@link ParseRequestParams}.
     */
    parseRequestParams?: ParseRequestParams<RequestRaw, RequestContext>;
}
/**
 * The ready-to-use handler. Simply plug it in your favorite HTTP framework
 * and enjoy.
 *
 * Errors thrown from **any** of the provided options or callbacks (or even due to
 * library misuse or potential bugs) will reject the handler's promise. They are
 * considered internal errors and you should take care of them accordingly.
 *
 * @category Server
 */
export type Handler<RequestRaw = unknown, RequestContext = unknown> = (req: Request<RequestRaw, RequestContext>) => Promise<Response>;
/**
 * Makes a GraphQL over HTTP spec compliant server handler. The handler can
 * be used with your favorite server library.
 *
 * Beware that the handler resolves only after the whole operation completes.
 *
 * Errors thrown from **any** of the provided options or callbacks (or even due to
 * library misuse or potential bugs) will reject the handler's promise. They are
 * considered internal errors and you should take care of them accordingly.
 *
 * For production environments, its recommended not to transmit the exact internal
 * error details to the client, but instead report to an error logging tool or simply
 * the console.
 *
 * Simple example usage with Node:
 *
 * ```js
 * import http from 'http';
 * import { createHandler } from 'graphql-http';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * // Create the GraphQL over HTTP handler
 * const handler = createHandler({ schema });
 *
 * // Create a HTTP server using the handler on `/graphql`
 * const server = http.createServer(async (req, res) => {
 *   if (!req.url.startsWith('/graphql')) {
 *     return res.writeHead(404).end();
 *   }
 *
 *   try {
 *     const [body, init] = await handler({
 *       url: req.url,
 *       method: req.method,
 *       headers: req.headers,
 *       body: () => new Promise((resolve) => {
 *         let body = '';
 *         req.on('data', (chunk) => (body += chunk));
 *         req.on('end', () => resolve(body));
 *       }),
 *       raw: req,
 *     });
 *     res.writeHead(init.status, init.statusText, init.headers).end(body);
 *   } catch (err) {
 *     // BEWARE not to transmit the exact internal error message in production environments
 *     res.writeHead(500).end(err.message);
 *   }
 * });
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server
 */
export declare function createHandler<RequestRaw = unknown, RequestContext = unknown, Context extends OperationContext = undefined>(options: HandlerOptions<RequestRaw, RequestContext, Context>): Handler<RequestRaw, RequestContext>;
