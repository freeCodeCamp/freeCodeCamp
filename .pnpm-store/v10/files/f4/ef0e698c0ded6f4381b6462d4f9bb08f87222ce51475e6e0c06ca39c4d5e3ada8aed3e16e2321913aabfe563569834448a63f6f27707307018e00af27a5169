"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = void 0;
const http_1 = require("./http");
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
function createHandler(options) {
    return (0, http_1.createHandler)(options);
}
exports.createHandler = createHandler;
