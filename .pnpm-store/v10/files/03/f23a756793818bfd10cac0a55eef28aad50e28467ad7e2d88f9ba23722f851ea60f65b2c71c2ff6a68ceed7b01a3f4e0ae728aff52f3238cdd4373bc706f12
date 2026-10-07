import { HandlerOptions as RawHandlerOptions, OperationContext } from '../handler.mjs';
import { RequestParams } from '../common.mjs';
/**
 * The necessary API from the fetch environment for the handler.
 *
 * @category Server/fetch
 */
export interface FetchAPI {
    Response: typeof Response;
    ReadableStream: typeof ReadableStream;
    TextEncoder: typeof TextEncoder;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * It is important to pass in the `abortedRef` so that the parser does not perform any
 * operations on a disposed request (see example).
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will return a `Response`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 * ```js
 * import http from 'http';
 * import { createServerAdapter } from '@whatwg-node/server'; // yarn add @whatwg-node/server
 * import { parseRequestParams } from 'graphql-http/lib/use/fetch';
 *
 * // Use this adapter in _any_ environment.
 * const adapter = createServerAdapter({
 *   handleRequest: async (req) => {
 *     try {
 *       const paramsOrResponse = await parseRequestParams(req);
 *       if (paramsOrResponse instanceof Response) {
 *         // not a well-formatted GraphQL over HTTP request,
 *         // parser created a response object to use
 *         return paramsOrResponse;
 *       }
 *
 *       // well-formatted GraphQL over HTTP request,
 *       // with valid parameters
 *       return new Response(JSON.stringify(paramsOrResponse, null, '  '), {
 *         status: 200,
 *       });
 *     } catch (err) {
 *       // well-formatted GraphQL over HTTP request,
 *       // but with invalid parameters
 *       return new Response(err.message, { status: 400 });
 *     }
 *   },
 * });
 *
 * const server = http.createServer(adapter);
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/fetch
 */
export declare function parseRequestParams(req: Request, api?: Partial<FetchAPI>): Promise<RequestParams | Response>;
/**
 * Handler options when using the fetch adapter.
 *
 * @category Server/fetch
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<Request, FetchAPI, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * a fetch environment like Deno, Bun, CloudFlare Workers, Lambdas, etc.
 *
 * You can use [@whatwg-node/server](https://github.com/ardatan/whatwg-node/tree/master/packages/server) to create a server adapter and
 * isomorphically use it in _any_ environment. See an example:
 *
 * ```js
 * import http from 'http';
 * import { createServerAdapter } from '@whatwg-node/server'; // yarn add @whatwg-node/server
 * import { createHandler } from 'graphql-http/lib/use/fetch';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * // Use this adapter in _any_ environment.
 * const adapter = createServerAdapter({
 *   handleRequest: createHandler({ schema }),
 * });
 *
 * const server = http.createServer(adapter);
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @param reqCtx - Custom fetch API engine, will use from global scope if left undefined.
 *
 * @category Server/fetch
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>, reqCtx?: Partial<FetchAPI>): (req: Request) => Promise<Response>;
