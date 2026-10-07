'use strict';

const Hoek = require('@hapi/hoek');


const internals = {
    codes: new Map([
        [100, 'Continue'],
        [101, 'Switching Protocols'],
        [102, 'Processing'],
        [200, 'OK'],
        [201, 'Created'],
        [202, 'Accepted'],
        [203, 'Non-Authoritative Information'],
        [204, 'No Content'],
        [205, 'Reset Content'],
        [206, 'Partial Content'],
        [207, 'Multi-Status'],
        [300, 'Multiple Choices'],
        [301, 'Moved Permanently'],
        [302, 'Moved Temporarily'],
        [303, 'See Other'],
        [304, 'Not Modified'],
        [305, 'Use Proxy'],
        [307, 'Temporary Redirect'],
        [400, 'Bad Request'],
        [401, 'Unauthorized'],
        [402, 'Payment Required'],
        [403, 'Forbidden'],
        [404, 'Not Found'],
        [405, 'Method Not Allowed'],
        [406, 'Not Acceptable'],
        [407, 'Proxy Authentication Required'],
        [408, 'Request Time-out'],
        [409, 'Conflict'],
        [410, 'Gone'],
        [411, 'Length Required'],
        [412, 'Precondition Failed'],
        [413, 'Request Entity Too Large'],
        [414, 'Request-URI Too Large'],
        [415, 'Unsupported Media Type'],
        [416, 'Requested Range Not Satisfiable'],
        [417, 'Expectation Failed'],
        [418, 'I\'m a teapot'],
        [422, 'Unprocessable Entity'],
        [423, 'Locked'],
        [424, 'Failed Dependency'],
        [425, 'Too Early'],
        [426, 'Upgrade Required'],
        [428, 'Precondition Required'],
        [429, 'Too Many Requests'],
        [431, 'Request Header Fields Too Large'],
        [451, 'Unavailable For Legal Reasons'],
        [500, 'Internal Server Error'],
        [501, 'Not Implemented'],
        [502, 'Bad Gateway'],
        [503, 'Service Unavailable'],
        [504, 'Gateway Time-out'],
        [505, 'HTTP Version Not Supported'],
        [506, 'Variant Also Negotiates'],
        [507, 'Insufficient Storage'],
        [509, 'Bandwidth Limit Exceeded'],
        [510, 'Not Extended'],
        [511, 'Network Authentication Required']
    ])
};


exports.Boom = class extends Error {

    constructor(messageOrError, options = {}) {

        if (messageOrError instanceof Error) {
            return exports.boomify(Hoek.clone(messageOrError), options);
        }

        const { statusCode = 500, data = null, ctor = exports.Boom } = options;
        const error = new Error(messageOrError ? messageOrError : undefined);         // Avoids settings null message
        Error.captureStackTrace(error, ctor);                           // Filter the stack to our external API
        error.data = data;
        const boom = internals.initialize(error, statusCode);

        Object.defineProperty(boom, 'typeof', { value: ctor });

        if (options.decorate) {
            Object.assign(boom, options.decorate);
        }

        return boom;
    }

    static [Symbol.hasInstance](instance) {

        if (this === exports.Boom) {
            return exports.isBoom(instance);
        }

        // Cannot use 'instanceof' as it creates infinite recursion

        return this.prototype.isPrototypeOf(instance);
    }
};


exports.isBoom = function (err, statusCode) {

    return err instanceof Error && !!err.isBoom && (!statusCode || err.output.statusCode === statusCode);
};


exports.boomify = function (err, options) {

    Hoek.assert(err instanceof Error, 'Cannot wrap non-Error object');

    options = options || {};

    if (options.data !== undefined) {
        err.data = options.data;
    }

    if (options.decorate) {
        Object.assign(err, options.decorate);
    }

    if (!err.isBoom) {
        return internals.initialize(err, options.statusCode ?? 500, options.message);
    }

    if (options.override === false ||                           // Defaults to true
        !options.statusCode && !options.message) {

        return err;
    }

    return internals.initialize(err, options.statusCode ?? err.output.statusCode, options.message);
};


// 4xx Client Errors

exports.badRequest = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 400, data, ctor: exports.badRequest });
};


exports.unauthorized = function (message, scheme, attributes) {          // Or (message, wwwAuthenticate[])

    const err = new exports.Boom(message, { statusCode: 401, ctor: exports.unauthorized });

    // function (message)

    if (!scheme) {
        return err;
    }

    // function (message, wwwAuthenticate[])

    if (typeof scheme !== 'string') {
        err.output.headers['WWW-Authenticate'] = scheme.join(', ');
        return err;
    }

    // function (message, scheme, attributes)

    let wwwAuthenticate = `${scheme}`;

    if (attributes ||
        message) {

        err.output.payload.attributes = {};
    }

    if (attributes) {
        if (typeof attributes === 'string') {
            wwwAuthenticate += ' ' + Hoek.escapeHeaderAttribute(attributes);
            err.output.payload.attributes = attributes;
        }
        else {
            wwwAuthenticate += ' ' + Object.keys(attributes).map((name) => {

                const value = attributes[name] ?? '';

                err.output.payload.attributes[name] = value;
                return `${name}="${Hoek.escapeHeaderAttribute(value.toString())}"`;
            })
                .join(', ');
        }
    }

    if (message) {
        if (attributes) {
            wwwAuthenticate += ',';
        }

        wwwAuthenticate += ` error="${Hoek.escapeHeaderAttribute(message)}"`;
        err.output.payload.attributes.error = message;
    }
    else {
        err.isMissing = true;
    }

    err.output.headers['WWW-Authenticate'] = wwwAuthenticate;
    return err;
};


exports.paymentRequired = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 402, data, ctor: exports.paymentRequired });
};


exports.forbidden = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 403, data, ctor: exports.forbidden });
};


exports.notFound = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 404, data, ctor: exports.notFound });
};


exports.methodNotAllowed = function (messageOrError, data, allow) {

    const err = new exports.Boom(messageOrError, { statusCode: 405, data, ctor: exports.methodNotAllowed });

    if (typeof allow === 'string') {
        allow = [allow];
    }

    if (Array.isArray(allow)) {
        err.output.headers.Allow = allow.join(', ');
    }

    return err;
};


exports.notAcceptable = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 406, data, ctor: exports.notAcceptable });
};


exports.proxyAuthRequired = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 407, data, ctor: exports.proxyAuthRequired });
};


exports.clientTimeout = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 408, data, ctor: exports.clientTimeout });
};


exports.conflict = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 409, data, ctor: exports.conflict });
};


exports.resourceGone = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 410, data, ctor: exports.resourceGone });
};


exports.lengthRequired = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 411, data, ctor: exports.lengthRequired });
};


exports.preconditionFailed = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 412, data, ctor: exports.preconditionFailed });
};


exports.entityTooLarge = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 413, data, ctor: exports.entityTooLarge });
};


exports.uriTooLong = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 414, data, ctor: exports.uriTooLong });
};


exports.unsupportedMediaType = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 415, data, ctor: exports.unsupportedMediaType });
};


exports.rangeNotSatisfiable = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 416, data, ctor: exports.rangeNotSatisfiable });
};


exports.expectationFailed = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 417, data, ctor: exports.expectationFailed });
};


exports.teapot = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 418, data, ctor: exports.teapot });
};


exports.badData = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 422, data, ctor: exports.badData });
};


exports.locked = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 423, data, ctor: exports.locked });
};


exports.failedDependency = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 424, data, ctor: exports.failedDependency });
};

exports.tooEarly = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 425, data, ctor: exports.tooEarly });
};


exports.preconditionRequired = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 428, data, ctor: exports.preconditionRequired });
};


exports.tooManyRequests = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 429, data, ctor: exports.tooManyRequests });
};


exports.illegal = function (messageOrError, data) {

    return new exports.Boom(messageOrError, { statusCode: 451, data, ctor: exports.illegal });
};


// 5xx Server Errors

exports.internal = function (message, data, statusCode = 500) {

    return internals.serverError(message, data, statusCode, exports.internal);
};


exports.notImplemented = function (message, data) {

    return internals.serverError(message, data, 501, exports.notImplemented);
};


exports.badGateway = function (message, data) {

    return internals.serverError(message, data, 502, exports.badGateway);
};


exports.serverUnavailable = function (message, data) {

    return internals.serverError(message, data, 503, exports.serverUnavailable);
};


exports.gatewayTimeout = function (message, data) {

    return internals.serverError(message, data, 504, exports.gatewayTimeout);
};


exports.badImplementation = function (message, data) {

    const err = internals.serverError(message, data, 500, exports.badImplementation);
    err.isDeveloperError = true;
    return err;
};


internals.initialize = function (err, statusCode, message) {

    const numberCode = parseInt(statusCode, 10);
    Hoek.assert(!isNaN(numberCode) && numberCode >= 400, 'First argument must be a number (400+):', statusCode);

    err.isBoom = true;
    err.isServer = numberCode >= 500;

    if (!err.hasOwnProperty('data')) {
        err.data = null;
    }

    err.output = {
        statusCode: numberCode,
        payload: {},
        headers: {}
    };

    Object.defineProperty(err, 'reformat', { value: internals.reformat, configurable: true });

    if (!message &&
        !err.message) {

        err.reformat();
        message = err.output.payload.error;
    }

    if (message) {
        const props = Object.getOwnPropertyDescriptor(err, 'message') || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(err), 'message');
        Hoek.assert(!props || props.configurable && !props.get, 'The error is not compatible with boom');

        err.message = message + (err.message ? ': ' + err.message : '');
        err.output.payload.message = err.message;
    }

    err.reformat();
    return err;
};


internals.reformat = function (debug = false) {

    this.output.payload.statusCode = this.output.statusCode;
    this.output.payload.error = internals.codes.get(this.output.statusCode) || 'Unknown';

    if (this.output.statusCode === 500 && debug !== true) {
        this.output.payload.message = 'An internal server error occurred';              // Hide actual error from user
    }
    else if (this.message) {
        this.output.payload.message = this.message;
    }
};


internals.serverError = function (messageOrError, data, statusCode, ctor) {

    if (data instanceof Error &&
        !data.isBoom) {

        return exports.boomify(data, { statusCode, message: messageOrError });
    }

    return new exports.Boom(messageOrError, { statusCode, data, ctor });
};
