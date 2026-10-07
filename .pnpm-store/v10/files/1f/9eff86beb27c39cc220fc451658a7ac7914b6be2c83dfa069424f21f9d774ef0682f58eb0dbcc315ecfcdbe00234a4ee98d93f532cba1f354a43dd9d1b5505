import { createHandler as createRawHandler, parseRequestParams as rawParseRequestParams, } from '../handler.mjs';
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
export async function parseRequestParams(req, api = {}) {
    const rawReq = toRequest(req, api);
    const paramsOrRes = await rawParseRequestParams(rawReq);
    if (!('query' in paramsOrRes)) {
        const [body, init] = paramsOrRes;
        return new (api.Response || Response)(body, init);
    }
    return paramsOrRes;
}
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
export function createHandler(options, reqCtx = {}) {
    const api = {
        Response: reqCtx.Response || Response,
        TextEncoder: reqCtx.TextEncoder || TextEncoder,
        ReadableStream: reqCtx.ReadableStream || ReadableStream,
    };
    const handler = createRawHandler(options);
    return async function handleRequest(req) {
        try {
            const [body, init] = await handler(toRequest(req, api));
            return new api.Response(body, init);
        }
        catch (err) {
            // The handler shouldnt throw errors.
            // If you wish to handle them differently, consider implementing your own request handler.
            console.error('Internal error occurred during request handling. ' +
                'Please check your implementation.', err);
            return new api.Response(null, { status: 500 });
        }
    };
}
function toRequest(req, api = {}) {
    return {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: () => req.text(),
        raw: req,
        context: {
            Response: api.Response || Response,
            TextEncoder: api.TextEncoder || TextEncoder,
            ReadableStream: api.ReadableStream || ReadableStream,
        },
    };
}
