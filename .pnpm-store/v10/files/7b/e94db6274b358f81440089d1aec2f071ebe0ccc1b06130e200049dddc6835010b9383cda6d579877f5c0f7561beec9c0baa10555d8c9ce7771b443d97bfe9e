import type { Request, Response, Handler } from 'express';
import { HandlerOptions as RawHandlerOptions, OperationContext } from '../handler.mjs';
import { RequestParams } from '../common.mjs';
/**
 * The context in the request for the handler.
 *
 * @category Server/express
 */
export interface RequestContext {
    res: Response;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will respond
 * on the `Response` argument and return `null`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 * ```js
 * import express from 'express'; // yarn add express
 * import { parseRequestParams } from 'graphql-http/lib/use/express';
 *
 * const app = express();
 * app.all('/graphql', async (req, res) => {
 *   try {
 *     const maybeParams = await parseRequestParams(req, res);
 *     if (!maybeParams) {
 *       // not a well-formatted GraphQL over HTTP request,
 *       // parser responded and there's nothing else to do
 *       return;
 *     }
 *
 *     // well-formatted GraphQL over HTTP request,
 *     // with valid parameters
 *     res.writeHead(200).end(JSON.stringify(maybeParams, null, '  '));
 *   } catch (err) {
 *     // well-formatted GraphQL over HTTP request,
 *     // but with invalid parameters
 *     res.writeHead(400).end(err.message);
 *   }
 * });
 *
 * app.listen({ port: 4000 });
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/express
 */
export declare function parseRequestParams(req: Request, res: Response): Promise<RequestParams | null>;
/**
 * Handler options when using the express adapter.
 *
 * @category Server/express
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<Request, RequestContext, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the express framework.
 *
 * ```js
 * import express from 'express'; // yarn add express
 * import { createHandler } from 'graphql-http/lib/use/express';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * const app = express();
 * app.all('/graphql', createHandler({ schema }));
 *
 * app.listen({ port: 4000 });
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/express
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): Handler;
