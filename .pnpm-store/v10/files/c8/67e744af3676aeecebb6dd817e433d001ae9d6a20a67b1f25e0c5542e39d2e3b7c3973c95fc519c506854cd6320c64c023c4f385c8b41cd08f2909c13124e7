/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'http';
import { HandlerOptions as RawHandlerOptions, OperationContext } from '../handler.mjs';
import { RequestParams } from '../common.mjs';
/**
 * The context in the request for the handler.
 *
 * @category Server/http
 */
export interface RequestContext {
    res: ServerResponse;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will respond
 * on the `ServerResponse` argument and return `null`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 * ```js
 * import http from 'http';
 * import { parseRequestParams } from 'graphql-http/lib/use/http';
 *
 * const server = http.createServer(async (req, res) => {
 *   if (req.url.startsWith('/graphql')) {
 *     try {
 *       const maybeParams = await parseRequestParams(req, res);
 *       if (!maybeParams) {
 *         // not a well-formatted GraphQL over HTTP request,
 *         // parser responded and there's nothing else to do
 *         return;
 *       }
 *
 *       // well-formatted GraphQL over HTTP request,
 *       // with valid parameters
 *       res.writeHead(200).end(JSON.stringify(maybeParams, null, '  '));
 *     } catch (err) {
 *       // well-formatted GraphQL over HTTP request,
 *       // but with invalid parameters
 *       res.writeHead(400).end(err.message);
 *     }
 *   } else {
 *     res.writeHead(404).end();
 *   }
 * });
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/http
 */
export declare function parseRequestParams(req: IncomingMessage, res: ServerResponse): Promise<RequestParams | null>;
/**
 * Handler options when using the http adapter.
 *
 * @category Server/http
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<IncomingMessage, RequestContext, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the Node environment http module.
 *
 * ```js
 * import http from 'http';
 * import { createHandler } from 'graphql-http/lib/use/http';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * const server = http.createServer(createHandler({ schema }));
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/http
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): (req: IncomingMessage, res: ServerResponse) => Promise<void>;
