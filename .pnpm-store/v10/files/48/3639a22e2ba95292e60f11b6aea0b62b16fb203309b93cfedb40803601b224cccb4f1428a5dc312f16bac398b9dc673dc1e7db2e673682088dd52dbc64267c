"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = exports.parseRequestParams = void 0;
const handler_1 = require("../handler");
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
async function parseRequestParams(req, res) {
    const rawReq = toRequest(req, res);
    const paramsOrRes = await (0, handler_1.parseRequestParams)(rawReq);
    if (!('query' in paramsOrRes)) {
        const [body, init] = paramsOrRes;
        res.writeHead(init.status, init.statusText, init.headers);
        if (body) {
            res.end(body);
        }
        else {
            res.end();
        }
        return null;
    }
    return paramsOrRes;
}
exports.parseRequestParams = parseRequestParams;
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
function createHandler(options) {
    const handle = (0, handler_1.createHandler)(options);
    return async function requestListener(req, res) {
        try {
            if (!req.url) {
                throw new Error('Missing request URL');
            }
            if (!req.method) {
                throw new Error('Missing request method');
            }
            const [body, init] = await handle(toRequest(req, res));
            res.writeHead(init.status, init.statusText, init.headers);
            if (body) {
                res.end(body);
            }
            else {
                res.end();
            }
        }
        catch (err) {
            // The handler shouldnt throw errors.
            // If you wish to handle them differently, consider implementing your own request handler.
            console.error('Internal error occurred during request handling. ' +
                'Please check your implementation.', err);
            res.writeHead(500).end();
        }
    };
}
exports.createHandler = createHandler;
function toRequest(req, res) {
    if (!req.url) {
        throw new Error('Missing request URL');
    }
    if (!req.method) {
        throw new Error('Missing request method');
    }
    return {
        url: req.url,
        method: req.method,
        headers: req.headers,
        body: () => new Promise((resolve) => {
            let body = '';
            req.setEncoding('utf-8');
            req.on('data', (chunk) => (body += chunk));
            req.on('end', () => resolve(body));
        }),
        raw: req,
        context: { res },
    };
}
