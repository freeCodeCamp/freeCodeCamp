"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = void 0;
const handler_1 = require("../../handler");
/**
 * Create a GraphQL over HTTP spec compliant request handler for netlify functions
 *
 * @category Server/@netlify/functions
 */
function createHandler(options) {
    const handler = (0, handler_1.createHandler)(options);
    return async function handleRequest(req, ctx) {
        try {
            const [body, init] = await handler({
                method: req.httpMethod,
                url: req.rawUrl,
                headers: req.headers,
                body: req.body,
                raw: req,
                context: ctx,
            });
            return {
                // if body is null, return undefined
                body: body !== null && body !== void 0 ? body : undefined,
                statusCode: init.status,
                headers: init.headers,
            };
        }
        catch (err) {
            // The handler shouldnt throw errors.
            // If you wish to handle them differently, consider implementing your own request handler.
            console.error('Internal error occurred during request handling. ' +
                'Please check your implementation.', err);
            return { statusCode: 500 };
        }
    };
}
exports.createHandler = createHandler;
