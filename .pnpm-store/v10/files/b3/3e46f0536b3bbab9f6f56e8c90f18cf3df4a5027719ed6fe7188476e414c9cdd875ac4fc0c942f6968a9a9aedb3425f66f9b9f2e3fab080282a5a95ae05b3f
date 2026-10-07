/// <reference types="node" />
import { HandlerOptions as HttpHandlerOptions } from './http';
import { OperationContext } from '../handler';
/**
 * Handler options when using the node adapter.
 *
 * @category Server/node
 *
 * @deprecated Please use {@link use/http.HandlerOptions | http} or {@link use/http2.HandlerOptions | http2} adapters instead.
 */
export type HandlerOptions<Context extends OperationContext = undefined> = HttpHandlerOptions<Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the Node environment.
 *
 * ```js
 * import http from 'http';
 * import { createHandler } from 'graphql-http/lib/use/node';
 * import { schema } from './my-graphql-schema';
 *
 * const server = http.createServer(createHandler({ schema }));
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/node
 *
 * @deprecated Please use {@link use/http.createHandler | http} or {@link use/http2.createHandler | http2} adapters instead.
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): (req: import("http").IncomingMessage, res: import("http").ServerResponse<import("http").IncomingMessage>) => Promise<void>;
