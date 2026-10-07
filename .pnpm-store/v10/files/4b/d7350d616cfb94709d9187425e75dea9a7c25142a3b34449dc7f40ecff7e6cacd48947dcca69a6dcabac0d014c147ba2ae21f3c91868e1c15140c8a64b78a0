import { createHandler as httpCreateHandler, } from './http.mjs';
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the Node environment.
 *
 * ```js
 * import http from 'http';
 * import { createHandler } from 'graphql-http/lib/use/node';
 * import { schema } from './my-graphql-schema/index.mjs';
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
export function createHandler(options) {
    return httpCreateHandler(options);
}
