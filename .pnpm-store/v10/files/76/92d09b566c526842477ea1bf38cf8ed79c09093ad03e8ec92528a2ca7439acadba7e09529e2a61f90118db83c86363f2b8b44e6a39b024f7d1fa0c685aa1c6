import type { HttpRequest, HttpResponse } from 'uWebSockets.js';
import { HandlerOptions as RawHandlerOptions, OperationContext } from '../handler.mjs';
import { RequestParams } from '../common.mjs';
/**
 * The context in the request for the handler.
 *
 * @category Server/uWebSockets
 */
export interface RequestContext {
    res: HttpResponse;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * It is important to pass in the `abortedRef` so that the parser does not perform any
 * operations on a disposed request (see example).
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will respond
 * on the `HttpResponse` argument and return `null`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 * ```js
 * import uWS from 'uWebSockets.js'; // yarn add uWebSockets.js@uNetworking/uWebSockets.js#<version>
 * import { parseRequestParams } from 'graphql-http/lib/use/uWebSockets';
 *
 * uWS
 *   .App()
 *   .any('/graphql', async (res, req) => {
 *     const abortedRef = { current: false };
 *     res.onAborted(() => (abortedRef.current = true));
 *     try {
 *       const maybeParams = await parseRequestParams(req, res, abortedRef);
 *       if (!maybeParams) {
 *         // not a well-formatted GraphQL over HTTP request,
 *         // parser responded and there's nothing else to do
 *         return;
 *       }
 *
 *       // well-formatted GraphQL over HTTP request,
 *       // with valid parameters
 *       if (!abortedRef.current) {
 *         res.writeStatus('200 OK');
 *         res.end(JSON.stringify(maybeParams, null, '  '));
 *       }
 *     } catch (err) {
 *       // well-formatted GraphQL over HTTP request,
 *       // but with invalid parameters
 *       if (!abortedRef.current) {
 *         res.writeStatus('400 Bad Request');
 *         res.end(err.message);
 *       }
 *     }
 *   })
 *   .listen(4000, () => {
 *     console.log('Listening to port 4000');
 *   });
 * ```
 *
 * @category Server/uWebSockets
 */
export declare function parseRequestParams(req: HttpRequest, res: HttpResponse, abortedRef: {
    current: boolean;
}): Promise<RequestParams | null>;
/**
 * Handler options when using the http adapter.
 *
 * @category Server/uWebSockets
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<HttpRequest, RequestContext, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the Node environment [uWebSockets.js module](https://github.com/uNetworking/uWebSockets.js/).
 *
 * ```js
 * import uWS from 'uWebSockets.js'; // yarn add uWebSockets.js@uNetworking/uWebSockets.js#<version>
 * import { createHandler } from 'graphql-http/lib/use/uWebSockets';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * uWS
 *   .App()
 *   .any('/graphql', createHandler({ schema }))
 *   .listen(4000, () => {
 *     console.log('Listening to port 4000');
 *   });
 * ```
 *
 * @category Server/uWebSockets
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): (res: HttpResponse, req: HttpRequest) => Promise<void>;
