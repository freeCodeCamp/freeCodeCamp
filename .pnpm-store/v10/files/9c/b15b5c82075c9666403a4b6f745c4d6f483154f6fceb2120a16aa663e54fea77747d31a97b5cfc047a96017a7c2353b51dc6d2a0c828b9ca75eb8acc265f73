import { createHandler as createRawHandler, parseRequestParams as rawParseRequestParams, } from '../handler.mjs';
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
export async function parseRequestParams(req, res) {
    const rawReq = toRequest(req, res);
    const paramsOrRes = await rawParseRequestParams(rawReq);
    if (!('query' in paramsOrRes)) {
        const [body, init] = paramsOrRes;
        res.writeHead(init.status, init.statusText, init.headers).end(body);
        return null;
    }
    return paramsOrRes;
}
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
export function createHandler(options) {
    const handle = createRawHandler(options);
    return async function requestListener(req, res) {
        try {
            const [body, init] = await handle(toRequest(req, res));
            res.writeHead(init.status, init.statusText, init.headers).end(body);
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
function toRequest(req, res) {
    return {
        url: req.url,
        method: req.method,
        headers: req.headers,
        body: () => {
            if (req.body) {
                // in case express has a body parser
                return req.body;
            }
            return new Promise((resolve) => {
                let body = '';
                req.setEncoding('utf-8');
                req.on('data', (chunk) => (body += chunk));
                req.on('end', () => resolve(body));
            });
        },
        raw: req,
        context: { res },
    };
}
