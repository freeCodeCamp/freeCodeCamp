import { createHandler as createRawHandler, parseRequestParams as rawParseRequestParams, } from '../handler.mjs';
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 *
 * If the HTTP request _is not_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), the function will respond
 * on Koa's `ParameterizedContext` response and return `null`.
 *
 * If the HTTP request _is_ a [well-formatted GraphQL over HTTP request](https://graphql.github.io/graphql-over-http/draft/#sec-Request), but is invalid or malformed,
 * the function will throw an error and it is up to the user to handle and respond as they see fit.
 *
 * ```js
 * import Koa from 'koa'; // yarn add koa
 * import mount from 'koa-mount'; // yarn add koa-mount
 * import { parseRequestParams } from 'graphql-http/lib/use/koa';
 *
 * const app = new Koa();
 * app.use(
 *   mount('/', async (ctx) => {
 *     try {
 *       const maybeParams = await parseRequestParams(ctx);
 *       if (!maybeParams) {
 *         // not a well-formatted GraphQL over HTTP request,
 *         // parser responded and there's nothing else to do
 *         return;
 *       }
 *
 *       // well-formatted GraphQL over HTTP request,
 *       // with valid parameters
 *       ctx.response.status = 200;
 *       ctx.body = JSON.stringify(maybeParams, null, '  ');
 *     } catch (err) {
 *       // well-formatted GraphQL over HTTP request,
 *       // but with invalid parameters
 *       ctx.response.status = 400;
 *       ctx.body = err.message;
 *     }
 *   }),
 * );
 *
 * app.listen({ port: 4000 });
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/koa
 */
export async function parseRequestParams(ctx) {
    const rawReq = toRequest(ctx);
    const paramsOrRes = await rawParseRequestParams(rawReq);
    if (!('query' in paramsOrRes)) {
        const [body, init] = paramsOrRes;
        ctx.body = body;
        ctx.response.status = init.status;
        ctx.response.message = init.statusText;
        if (init.headers) {
            for (const [name, value] of Object.entries(init.headers)) {
                ctx.response.set(name, value);
            }
        }
        return null;
    }
    return paramsOrRes;
}
/**
 * Create a GraphQL over HTTP spec compliant request handler for
 * the Koa framework.
 *
 * ```js
 * import Koa from 'koa'; // yarn add koa
 * import mount from 'koa-mount'; // yarn add koa-mount
 * import { createHandler } from 'graphql-http/lib/use/koa';
 * import { schema } from './my-graphql-schema/index.mjs';
 *
 * const app = new Koa();
 * app.use(mount('/', createHandler({ schema })));
 *
 * app.listen({ port: 4000 });
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server/koa
 */
export function createHandler(options) {
    const handle = createRawHandler(options);
    return async function requestListener(ctx) {
        try {
            const [body, init] = await handle({
                url: ctx.url,
                method: ctx.method,
                headers: ctx.headers,
                body: () => {
                    if ('body' in ctx.request) {
                        // in case koa has a body parser
                        return ctx.request.body;
                    }
                    return new Promise((resolve) => {
                        let body = '';
                        ctx.req.setEncoding('utf-8');
                        ctx.req.on('data', (chunk) => (body += chunk));
                        ctx.req.on('end', () => resolve(body));
                    });
                },
                raw: ctx.req,
                context: { res: ctx.response },
            });
            ctx.body = body;
            ctx.response.status = init.status;
            ctx.response.message = init.statusText;
            if (init.headers) {
                for (const [name, value] of Object.entries(init.headers)) {
                    ctx.response.set(name, value);
                }
            }
        }
        catch (err) {
            // The handler shouldnt throw errors.
            // If you wish to handle them differently, consider implementing your own request handler.
            console.error('Internal error occurred during request handling. ' +
                'Please check your implementation.', err);
            ctx.response.status = 500;
        }
    };
}
function toRequest(ctx) {
    return {
        url: ctx.url,
        method: ctx.method,
        headers: ctx.headers,
        body: () => {
            if (ctx.body) {
                // in case koa has a body parser
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return ctx.body;
            }
            return new Promise((resolve) => {
                let body = '';
                ctx.req.on('data', (chunk) => (body += chunk));
                ctx.req.on('end', () => resolve(body));
            });
        },
        raw: ctx.req,
        context: { res: ctx.response },
    };
}
