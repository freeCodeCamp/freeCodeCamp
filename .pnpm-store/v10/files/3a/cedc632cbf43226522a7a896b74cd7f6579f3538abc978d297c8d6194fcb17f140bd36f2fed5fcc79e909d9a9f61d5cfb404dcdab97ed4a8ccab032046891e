import type { FastifyRequest, FastifyReply, RouteHandler } from 'fastify';
import { HandlerOptions as RawHandlerOptions, OperationContext } from '../handler.mjs';
import { RequestParams } from '../common.mjs';
/**
 * The context in the request for the handler.
 *
 * @category Server/fastify
 */
export interface RequestContext {
    reply: FastifyReply;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will respond
 * on the `FastifyReply` argument and return `null`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 * ```js
 * import Fastify from 'fastify'; // yarn add fastify
 * import { parseRequestParams } from 'graphql-http/lib/use/fastify';
 *
 * const fastify = Fastify();
 * fastify.all('/graphql', async (req, reply) => {
 *   try {
 *     const maybeParams = await parseRequestParams(req, reply);
 *     if (!maybeParams) {
 *       // not a well-formatted GraphQL over HTTP request,
 *       // parser responded and there's nothing else to do
 *       return;
 *     }
 *
 *     // well-formatted GraphQL over HTTP request,
 *     // with valid parameters
 *     reply.status(200).send(JSON.stringify(maybeParams, null, '  '));
 *   } catch (err) {
 *     // well-formatted GraphQL over HTTP request,
 *     // but with invalid parameters
 *     reply.status(400).send(err.message);
 *   }
 * });
 *
 * fastify.listen({ port: 4000 });
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/fastify
 */
export declare function parseRequestParams(req: FastifyRequest, reply: FastifyReply): Promise<RequestParams | null>;
/**
 * Handler options when using the fastify adapter.
 *
 * @category Server/fastify
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<FastifyRequest, RequestContext, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the fastify framework.
 *
 * ```js
 * import Fastify from 'fastify'; // yarn add fastify
 * import { createHandler } from 'graphql-http/lib/use/fastify';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * const fastify = Fastify();
 * fastify.all('/graphql', createHandler({ schema }));
 *
 * fastify.listen({ port: 4000 });
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/fastify
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): RouteHandler;
