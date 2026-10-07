"use strict";
/**
 *
 * handler
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = exports.parseRequestParams = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("./utils");
/** Checks whether the passed value is the `graphql-http` server agnostic response. */
function isResponse(val) {
    // Make sure the contents of body match string | null
    if (!Array.isArray(val))
        return false;
    if (typeof val[0] !== 'string' && val[0] !== null)
        return false;
    if (!(0, utils_1.isObject)(val[1]))
        return false;
    // Make sure the contents of init match ResponseInit
    const init = val[1];
    if (init.status && typeof init.status !== 'number')
        return false;
    if (init.statusText && typeof init.statusText !== 'string')
        return false;
    if (init.headers && !(0, utils_1.isObject)(init.headers))
        return false;
    return true;
}
/**
 * The GraphQL over HTTP spec compliant request parser for an incoming GraphQL request.
 * It parses and validates the request itself, including the request method and the
 * content-type of the body.
 *
 * If the HTTP request itself is invalid or malformed, the function will return an
 * appropriate {@link Response}.
 *
 * If the HTTP request is valid, but is not a well-formatted GraphQL request, the
 * function will throw an error and it is up to the user to handle and respond as
 * they see fit.
 *
 * @category Server
 */
async function parseRequestParams(req) {
    var _a, _b;
    const method = req.method;
    if (method !== 'GET' && method !== 'POST') {
        return [
            null,
            {
                status: 405,
                statusText: 'Method Not Allowed',
                headers: {
                    allow: 'GET, POST',
                },
            },
        ];
    }
    const [mediaType, charset = 'charset=utf-8', // utf-8 is assumed when not specified. this parameter is either "charset" or "boundary" (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
    ] = (getHeader(req, 'content-type') || '')
        .replace(/\s/g, '')
        .toLowerCase()
        .split(';');
    const partParams = {};
    switch (true) {
        case method === 'GET': {
            // TODO: what if content-type is specified and is not application/x-www-form-urlencoded?
            try {
                const [, search] = req.url.split('?');
                const searchParams = new URLSearchParams(search);
                partParams.operationName =
                    (_a = searchParams.get('operationName')) !== null && _a !== void 0 ? _a : undefined;
                partParams.query = (_b = searchParams.get('query')) !== null && _b !== void 0 ? _b : undefined;
                const variables = searchParams.get('variables');
                if (variables)
                    partParams.variables = JSON.parse(variables);
                const extensions = searchParams.get('extensions');
                if (extensions)
                    partParams.extensions = JSON.parse(extensions);
            }
            catch (_c) {
                throw new Error('Unparsable URL');
            }
            break;
        }
        case method === 'POST' &&
            mediaType === 'application/json' &&
            charset === 'charset=utf-8':
            {
                if (!req.body) {
                    throw new Error('Missing body');
                }
                let data;
                try {
                    const body = typeof req.body === 'function' ? await req.body() : req.body;
                    data = typeof body === 'string' ? JSON.parse(body) : body;
                }
                catch (err) {
                    throw new Error('Unparsable JSON body');
                }
                if (!(0, utils_1.isObject)(data)) {
                    throw new Error('JSON body must be an object');
                }
                partParams.operationName = data.operationName;
                partParams.query = data.query;
                partParams.variables = data.variables;
                partParams.extensions = data.extensions;
                break;
            }
        default: // graphql-http doesnt support any other content type
            return [
                null,
                {
                    status: 415,
                    statusText: 'Unsupported Media Type',
                },
            ];
    }
    if (partParams.query == null)
        throw new Error('Missing query');
    if (typeof partParams.query !== 'string')
        throw new Error('Invalid query');
    if (partParams.variables != null &&
        (typeof partParams.variables !== 'object' ||
            Array.isArray(partParams.variables))) {
        throw new Error('Invalid variables');
    }
    if (partParams.operationName != null &&
        typeof partParams.operationName !== 'string') {
        throw new Error('Invalid operationName');
    }
    if (partParams.extensions != null &&
        (typeof partParams.extensions !== 'object' ||
            Array.isArray(partParams.extensions))) {
        throw new Error('Invalid extensions');
    }
    // request parameters are checked and now complete
    return partParams;
}
exports.parseRequestParams = parseRequestParams;
/**
 * Makes a GraphQL over HTTP spec compliant server handler. The handler can
 * be used with your favorite server library.
 *
 * Beware that the handler resolves only after the whole operation completes.
 *
 * Errors thrown from **any** of the provided options or callbacks (or even due to
 * library misuse or potential bugs) will reject the handler's promise. They are
 * considered internal errors and you should take care of them accordingly.
 *
 * For production environments, its recommended not to transmit the exact internal
 * error details to the client, but instead report to an error logging tool or simply
 * the console.
 *
 * Simple example usage with Node:
 *
 * ```js
 * import http from 'http';
 * import { createHandler } from 'graphql-http';
 * import { schema } from './my-graphql-schema';
 *
 * // Create the GraphQL over HTTP handler
 * const handler = createHandler({ schema });
 *
 * // Create a HTTP server using the handler on `/graphql`
 * const server = http.createServer(async (req, res) => {
 *   if (!req.url.startsWith('/graphql')) {
 *     return res.writeHead(404).end();
 *   }
 *
 *   try {
 *     const [body, init] = await handler({
 *       url: req.url,
 *       method: req.method,
 *       headers: req.headers,
 *       body: () => new Promise((resolve) => {
 *         let body = '';
 *         req.on('data', (chunk) => (body += chunk));
 *         req.on('end', () => resolve(body));
 *       }),
 *       raw: req,
 *     });
 *     res.writeHead(init.status, init.statusText, init.headers).end(body);
 *   } catch (err) {
 *     // BEWARE not to transmit the exact internal error message in production environments
 *     res.writeHead(500).end(err.message);
 *   }
 * });
 *
 * server.listen(4000);
 * console.log('Listening to port 4000');
 * ```
 *
 * @category Server
 */
function createHandler(options) {
    const { schema, context, validate = graphql_1.validate, validationRules = [], execute = graphql_1.execute, parse = graphql_1.parse, getOperationAST = graphql_1.getOperationAST, rootValue, onSubscribe, onOperation, formatError = (err) => err, parseRequestParams: optionsParseRequestParams = parseRequestParams, } = options;
    return async function handler(req) {
        let acceptedMediaType = null;
        const accepts = (getHeader(req, 'accept') || '*/*')
            .replace(/\s/g, '')
            .toLowerCase()
            .split(',');
        for (const accept of accepts) {
            // accept-charset became obsolete, shouldnt be used (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset)
            // TODO: handle the weight parameter "q"
            const [mediaType, ...params] = accept.split(';');
            const charset = (params === null || params === void 0 ? void 0 : params.find((param) => param.includes('charset='))) || 'charset=utf-8'; // utf-8 is assumed when not specified;
            if (mediaType === 'application/graphql-response+json' &&
                charset === 'charset=utf-8') {
                acceptedMediaType = 'application/graphql-response+json';
                break;
            }
            // application/json should be the default until watershed
            if ((mediaType === 'application/json' ||
                mediaType === 'application/*' ||
                mediaType === '*/*') &&
                (charset === 'charset=utf-8' || charset === 'charset=utf8')) {
                acceptedMediaType = 'application/json';
                break;
            }
        }
        if (!acceptedMediaType) {
            return [
                null,
                {
                    status: 406,
                    statusText: 'Not Acceptable',
                    headers: {
                        accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
                    },
                },
            ];
        }
        let params;
        try {
            let paramsOrRes = await optionsParseRequestParams(req);
            if (!paramsOrRes)
                paramsOrRes = await parseRequestParams(req);
            if (isResponse(paramsOrRes))
                return paramsOrRes;
            params = paramsOrRes;
        }
        catch (err) {
            return makeResponse(err, acceptedMediaType, formatError);
        }
        let args;
        const maybeResErrsOrArgs = await (onSubscribe === null || onSubscribe === void 0 ? void 0 : onSubscribe(req, params));
        if (isResponse(maybeResErrsOrArgs))
            return maybeResErrsOrArgs;
        else if ((0, utils_1.isExecutionResult)(maybeResErrsOrArgs) ||
            areGraphQLErrors(maybeResErrsOrArgs))
            return makeResponse(maybeResErrsOrArgs, acceptedMediaType, formatError);
        else if (maybeResErrsOrArgs)
            args = maybeResErrsOrArgs;
        else {
            if (!schema)
                throw new Error('The GraphQL schema is not provided');
            const { operationName, query, variables } = params;
            let document;
            try {
                document = parse(query);
            }
            catch (err) {
                return makeResponse(err, acceptedMediaType, formatError);
            }
            const resOrContext = typeof context === 'function' ? await context(req, params) : context;
            if (isResponse(resOrContext))
                return resOrContext;
            const argsWithoutSchema = {
                operationName,
                document,
                variableValues: variables,
                contextValue: resOrContext,
            };
            if (typeof schema === 'function') {
                const resOrSchema = await schema(req, argsWithoutSchema);
                if (isResponse(resOrSchema))
                    return resOrSchema;
                args = Object.assign(Object.assign({}, argsWithoutSchema), { schema: resOrSchema });
            }
            else {
                args = Object.assign(Object.assign({}, argsWithoutSchema), { schema });
            }
            let rules = graphql_1.specifiedRules;
            if (typeof validationRules === 'function') {
                rules = await validationRules(req, args, graphql_1.specifiedRules);
            }
            else {
                rules = [...rules, ...validationRules];
            }
            const validationErrs = validate(args.schema, args.document, rules);
            if (validationErrs.length) {
                return makeResponse(validationErrs, acceptedMediaType, formatError);
            }
        }
        let operation;
        try {
            const ast = getOperationAST(args.document, args.operationName);
            if (!ast)
                throw null;
            operation = ast.operation;
        }
        catch (_a) {
            return makeResponse(new graphql_1.GraphQLError('Unable to detect operation AST'), acceptedMediaType, formatError);
        }
        if (operation === 'subscription') {
            return makeResponse(new graphql_1.GraphQLError('Subscriptions are not supported'), acceptedMediaType, formatError);
        }
        // mutations cannot happen over GETs
        // https://graphql.github.io/graphql-over-http/draft/#sel-CALFJRPAAELBAAxwP
        if (operation === 'mutation' && req.method === 'GET') {
            return [
                JSON.stringify({
                    errors: [new graphql_1.GraphQLError('Cannot perform mutations over GET')],
                }),
                {
                    status: 405,
                    statusText: 'Method Not Allowed',
                    headers: {
                        allow: 'POST',
                    },
                },
            ];
        }
        if (!('rootValue' in args)) {
            args.rootValue = rootValue;
        }
        if (!('contextValue' in args)) {
            const resOrContext = typeof context === 'function' ? await context(req, params) : context;
            if (isResponse(resOrContext))
                return resOrContext;
            args.contextValue = resOrContext;
        }
        let result = await execute(args);
        const maybeResponseOrResult = await (onOperation === null || onOperation === void 0 ? void 0 : onOperation(req, args, result));
        if (isResponse(maybeResponseOrResult))
            return maybeResponseOrResult;
        else if (maybeResponseOrResult)
            result = maybeResponseOrResult;
        if ((0, utils_1.isAsyncIterable)(result)) {
            return makeResponse(new graphql_1.GraphQLError('Subscriptions are not supported'), acceptedMediaType, formatError);
        }
        return makeResponse(result, acceptedMediaType, formatError);
    };
}
exports.createHandler = createHandler;
/**
 * Creates an appropriate GraphQL over HTTP response following the provided arguments.
 *
 * If the first argument is an `ExecutionResult`, the operation will be treated as "successful".
 *
 * If the first argument is (an array of) `GraphQLError`, or an `ExecutionResult` without the `data` field, it will be treated
 * the response will be constructed with the help of `acceptedMediaType` complying with the GraphQL over HTTP spec.
 *
 * If the first argument is an `Error`, the operation will be treated as a bad request responding with `400: Bad Request` and the
 * error will be present in the `ExecutionResult` style.
 */
function makeResponse(resultOrErrors, acceptedMediaType, formatError) {
    if (resultOrErrors instanceof Error &&
        // because GraphQLError extends the Error class
        !isGraphQLError(resultOrErrors)) {
        return [
            JSON.stringify({ errors: [formatError(resultOrErrors)] }, jsonErrorReplacer),
            {
                status: 400,
                statusText: 'Bad Request',
                headers: {
                    'content-type': 'application/json; charset=utf-8',
                },
            },
        ];
    }
    const errors = isGraphQLError(resultOrErrors)
        ? [resultOrErrors]
        : areGraphQLErrors(resultOrErrors)
            ? resultOrErrors
            : null;
    if (errors) {
        return [
            JSON.stringify({ errors: errors.map(formatError) }, jsonErrorReplacer),
            Object.assign(Object.assign({}, (acceptedMediaType === 'application/json'
                ? {
                    status: 200,
                    statusText: 'OK',
                }
                : {
                    status: 400,
                    statusText: 'Bad Request',
                })), { headers: {
                    'content-type': acceptedMediaType === 'application/json'
                        ? 'application/json; charset=utf-8'
                        : 'application/graphql-response+json; charset=utf-8',
                } }),
        ];
    }
    return [
        JSON.stringify('errors' in resultOrErrors && resultOrErrors.errors
            ? Object.assign(Object.assign({}, resultOrErrors), { errors: resultOrErrors.errors.map(formatError) }) : resultOrErrors, jsonErrorReplacer),
        {
            status: 200,
            statusText: 'OK',
            headers: {
                'content-type': acceptedMediaType === 'application/json'
                    ? 'application/json; charset=utf-8'
                    : 'application/graphql-response+json; charset=utf-8',
            },
        },
    ];
}
function getHeader(req, key) {
    if (typeof req.headers.get === 'function') {
        return req.headers.get(key);
    }
    return Object(req.headers)[key];
}
function areGraphQLErrors(obj) {
    return (Array.isArray(obj) &&
        obj.length > 0 &&
        // if one item in the array is a GraphQLError, we're good
        obj.some(isGraphQLError));
}
function isGraphQLError(obj) {
    return obj instanceof graphql_1.GraphQLError;
}
function jsonErrorReplacer(_key, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
val) {
    if (val instanceof Error &&
        // GraphQL errors implement their own stringer
        !isGraphQLError(val)) {
        const error = val;
        return {
            // name: error.name, name is included in message
            message: error.message,
            // stack: error.stack, can leak sensitive details
        };
    }
    return val;
}
