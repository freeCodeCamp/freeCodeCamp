import { createHandler as createRawHandler, parseRequestParams as rawParseRequestParams, } from '../handler.mjs';
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
export async function parseRequestParams(req, res, abortedRef) {
    const rawReq = toRequest(req, res, abortedRef);
    const paramsOrRes = await rawParseRequestParams(rawReq);
    if (!('query' in paramsOrRes)) {
        if (!abortedRef.current) {
            const [body, init] = paramsOrRes;
            res.cork(() => {
                res.writeStatus(`${init.status} ${init.statusText}`);
                for (const [key, val] of Object.entries(init.headers || {})) {
                    res.writeHeader(key, val);
                }
                if (body) {
                    res.end(body);
                }
                else {
                    res.endWithoutBody();
                }
            });
        }
        return null;
    }
    return paramsOrRes;
}
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
export function createHandler(options) {
    const handle = createRawHandler(options);
    return async function requestListener(res, req) {
        const abortedRef = { current: false };
        res.onAborted(() => (abortedRef.current = true));
        try {
            const [body, init] = await handle(toRequest(req, res, abortedRef));
            if (!abortedRef.current) {
                res.cork(() => {
                    res.writeStatus(`${init.status} ${init.statusText}`);
                    for (const [key, val] of Object.entries(init.headers || {})) {
                        res.writeHeader(key, val);
                    }
                    if (body) {
                        res.end(body);
                    }
                    else {
                        res.endWithoutBody();
                    }
                });
            }
        }
        catch (err) {
            // The handler shouldnt throw errors.
            // If you wish to handle them differently, consider implementing your own request handler.
            console.error('Internal error occurred during request handling. ' +
                'Please check your implementation.', err);
            if (!abortedRef.current) {
                res.cork(() => {
                    res.writeStatus('500 Internal Server Error').endWithoutBody();
                });
            }
        }
    };
}
function toRequest(req, res, abortedRef) {
    let url = req.getUrl();
    const query = req.getQuery();
    if (query) {
        url += '?' + query;
    }
    return {
        url,
        method: req.getMethod().toUpperCase(),
        headers: { get: (key) => req.getHeader(key) },
        body: () => new Promise((resolve) => {
            let body = '';
            if (abortedRef.current) {
                resolve(body);
            }
            else {
                res.onData((chunk, isLast) => {
                    body += Buffer.from(chunk, 0, chunk.byteLength).toString();
                    if (isLast) {
                        resolve(body);
                    }
                });
            }
        }),
        raw: req,
        context: { res },
    };
}
