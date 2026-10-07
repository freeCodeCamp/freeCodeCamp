/// <reference types="node" />
import type { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { HandlerOptions as RawHandlerOptions, OperationContext } from '../handler';
import { RequestParams } from '../common';
/**
 * The context in the request for the handler.
 *
 * @category Server/http2
 */
export interface RequestContext {
    res: Http2ServerResponse;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will respond
 * on the `Http2ServerResponse` argument and return `null`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 *  ```shell
 * $ openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
 *   -keyout localhost-privkey.pem -out localhost-cert.pem
 * ```
 *
 * ```js
 * import fs from 'fs';
 * import http2 from 'http2';
 * import { parseRequestParams } from 'graphql-http/lib/use/http2';
 *
 * const server = http2.createSecureServer(
 *   {
 *     key: fs.readFileSync('localhost-privkey.pem'),
 *     cert: fs.readFileSync('localhost-cert.pem'),
 *   },
 *   async (req, res) => {
 *     if (req.url.startsWith('/graphql')) {
 *       try {
 *         const maybeParams = await parseRequestParams(req, res);
 *         if (!maybeParams) {
 *           // not a well-formatted GraphQL over HTTP request,
 *           // parser responded and there's nothing else to do
 *           return;
 *         }
 *
 *         // well-formatted GraphQL over HTTP request,
 *         // with valid parameters
 *         res.writeHead(200).end(JSON.stringify(maybeParams, null, '  '));
 *       } catch (err) {
 *         // well-formatted GraphQL over HTTP request,
 *         // but with invalid parameters
 *         res.writeHead(400).end(err.message);
 *       }
 *     } else {
 *       res.writeHead(404).end();
 *     }
 *   },
 * );
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/http2
 */
export declare function parseRequestParams(req: Http2ServerRequest, res: Http2ServerResponse): Promise<RequestParams | null>;
/**
 * Handler options when using the http adapter.
 *
 * @category Server/http2
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<Http2ServerRequest, RequestContext, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the Node environment http2 module.
 *
 *  ```shell
 * $ openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
 *   -keyout localhost-privkey.pem -out localhost-cert.pem
 * ```
 *
 * ```js
 * import fs from 'fs';
 * import http2 from 'http2';
 * import { createHandler } from 'graphql-http/lib/use/http2';
 * import { schema } from './my-graphql-schema';
 *
 * const server = http2.createSecureServer(
 *   {
 *     key: fs.readFileSync('localhost-privkey.pem'),
 *     cert: fs.readFileSync('localhost-cert.pem'),
 *   },
 *   createHandler({ schema }),
 * );
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/http2
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): (req: Http2ServerRequest, res: Http2ServerResponse) => Promise<void>;
