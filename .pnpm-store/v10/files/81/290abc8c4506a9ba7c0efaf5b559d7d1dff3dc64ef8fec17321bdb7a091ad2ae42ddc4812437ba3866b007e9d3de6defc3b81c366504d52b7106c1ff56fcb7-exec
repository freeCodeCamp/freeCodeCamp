'use strict';

const Events = require('events');
const Http = require('http');
const Https = require('https');
const Stream = require('stream');
const Url = require('url');
const Zlib = require('zlib');

const Boom = require('@hapi/boom');
const Bourne = require('@hapi/bourne');
const Hoek = require('@hapi/hoek');

const Payload = require('./payload');
const Recorder = require('./recorder');
const Tap = require('./tap');


const internals = {
    jsonRegex: /^application\/([a-z0-9.]*[+-]json|json)$/,
    shallowOptions: ['agent', 'agents', 'beforeRedirect', 'payload', 'redirected'],
    httpOptions: ['secureProtocol', 'ciphers', 'lookup', 'family', 'hints']
};


// New instance is exported as module.exports

internals.Client = class {

    constructor(options = {}) {

        Hoek.assert(!options.agents || options.agents.https && options.agents.http && options.agents.httpsAllowUnauthorized, 'Option agents must include "http", "https", and "httpsAllowUnauthorized"');

        this._defaults = Hoek.clone(options, { shallow: internals.shallowOptions });

        this.agents = this._defaults.agents || {
            https: new Https.Agent({ maxSockets: Infinity }),
            http: new Http.Agent({ maxSockets: Infinity }),
            httpsAllowUnauthorized: new Https.Agent({ maxSockets: Infinity, rejectUnauthorized: false })
        };

        if (this._defaults.events) {
            this.events = new Events.EventEmitter();
        }
    }

    defaults(options) {

        Hoek.assert(options && typeof options === 'object', 'options must be provided to defaults');

        options = Hoek.applyToDefaults(this._defaults, options, { shallow: internals.shallowOptions });
        return new internals.Client(options);
    }

    request(method, url, options = {}) {

        try {
            options = Hoek.applyToDefaults(this._defaults, options, { shallow: internals.shallowOptions });

            Hoek.assert(options.payload === undefined || typeof options.payload === 'string' || typeof options.payload === 'object', 'options.payload must be a string, a Buffer, a Stream, or an Object');
            Hoek.assert(internals.isNullOrUndefined(options.agent) || typeof options.rejectUnauthorized !== 'boolean', 'options.agent cannot be set to an Agent at the same time as options.rejectUnauthorized is set');
            Hoek.assert(internals.isNullOrUndefined(options.beforeRedirect) || typeof options.beforeRedirect === 'function', 'options.beforeRedirect must be a function');
            Hoek.assert(internals.isNullOrUndefined(options.redirected) || typeof options.redirected === 'function', 'options.redirected must be a function');
            Hoek.assert(options.gunzip === undefined || typeof options.gunzip === 'boolean' || options.gunzip === 'force', 'options.gunzip must be a boolean or "force"');
        }
        catch (err) {
            return Promise.reject(err);
        }

        if (options.baseUrl) {
            url = internals.resolveUrl(options.baseUrl, url);
            delete options.baseUrl;
        }

        const relay = {};
        const req = this._request(method, url, options, relay);
        const promise = new Promise((resolve, reject) => {

            relay.callback = (err, res) => {

                if (err) {
                    reject(err);
                    return;
                }

                resolve(res);
                return;
            };
        });

        promise.req = req;
        return promise;
    }

    _request(method, url, options, relay, _trace) {

        const uri = {};
        if (options.socketPath) {
            uri.socketPath = options.socketPath;

            const parsedUri = new Url.URL(url, `unix://${options.socketPath}`);
            internals.applyUrlToOptions(uri, {
                host: '',                               // host must be empty according to https://tools.ietf.org/html/rfc2616#section-14.23
                protocol: 'http:',
                hash: parsedUri.hash,
                search: parsedUri.search,
                searchParams: parsedUri.searchParams,
                pathname: parsedUri.pathname,
                href: parsedUri.href
            });
        }
        else {
            uri.setHost = false;
            const parsedUri = new Url.URL(url);
            internals.applyUrlToOptions(uri, parsedUri);
        }

        uri.method = method.toUpperCase();
        uri.headers = Object.create(null);

        const usedHeaders = new Set();
        if (options.headers) {
            for (const [key, value] of Object.entries(options.headers)) {
                if (value !== undefined) {
                    uri.headers[key] = value;
                    usedHeaders.add(key.toLowerCase());
                }
            }
        }

        if (!usedHeaders.has('host')) {
            uri.headers.host = uri.host;
        }

        if (options.payload && typeof options.payload === 'object' && !(options.payload instanceof Stream) && !Buffer.isBuffer(options.payload)) {
            options.payload = JSON.stringify(options.payload);
            if (!usedHeaders.has('content-type')) {
                uri.headers['content-type'] = 'application/json';
            }
        }

        if (options.gunzip &&
            !usedHeaders.has('accept-encoding')) {

            uri.headers['accept-encoding'] = 'gzip';
        }

        const payloadSupported = uri.method !== 'GET' && uri.method !== 'HEAD' && !internals.isNullOrUndefined(options.payload);
        if (payloadSupported &&
            (typeof options.payload === 'string' || Buffer.isBuffer(options.payload)) &&
            !usedHeaders.has('content-length')) {

            uri.headers['content-length'] = Buffer.isBuffer(options.payload) ? options.payload.length : Buffer.byteLength(options.payload);
        }

        let redirects = options.hasOwnProperty('redirects') ? options.redirects : false;        // Needed to allow 0 as valid value when passed recursively

        _trace = _trace ?? [];
        _trace.push({ method: uri.method, url });

        const client = uri.protocol === 'https:' ? Https : Http;

        for (const option of internals.httpOptions) {
            if (options[option] !== undefined) {
                uri[option] = options[option];
            }
        }

        if (options.rejectUnauthorized !== undefined &&
            uri.protocol === 'https:') {

            uri.agent = options.rejectUnauthorized ? this.agents.https : this.agents.httpsAllowUnauthorized;
        }
        else if (options.agent ||
            options.agent === false) {

            uri.agent = options.agent;
        }
        else {
            uri.agent = uri.protocol === 'https:' ? this.agents.https : this.agents.http;
        }

        this._emit('preRequest', uri, options);

        const start = Date.now();
        const req = client.request(uri);

        this._emit('request', req);

        let shadow = null;                                                                      // A copy of the streamed request payload when redirects are enabled
        let timeoutId;

        const onError = (err) => {

            err.trace = _trace;
            return finishOnce(Boom.badGateway('Client request error', err));
        };

        const onAbort = () => {

            if (!req.socket) {
                // Fake an ECONNRESET error on early abort

                const error = new Error('socket hang up');
                error.code = 'ECONNRESET';
                finishOnce(error);
            }
        };

        req.once('error', onError);

        const onResponse = (res) => {

            // Pass-through response

            const statusCode = res.statusCode;
            const redirectMethod = internals.redirectMethod(statusCode, uri.method, options);

            if (redirects === false ||
                !redirectMethod) {

                return finishOnce(null, res);
            }

            // Redirection

            res.destroy();

            if (redirects === 0) {
                return finishOnce(Boom.badGateway('Maximum redirections reached', _trace));
            }

            let location = res.headers.location;
            if (!location) {
                return finishOnce(Boom.badGateway('Received redirection without location', _trace));
            }

            if (!/^https?:/i.test(location)) {
                location = Url.resolve(uri.href, location);
            }

            const redirectOptions = Hoek.clone(options, { shallow: internals.shallowOptions });
            redirectOptions.payload = shadow ?? options.payload;                                    // shadow must be ready at this point if set
            redirectOptions.redirects = --redirects;
            if (timeoutId) {
                clearTimeout(timeoutId);
                const elapsed = Date.now() - start;
                redirectOptions.timeout = (redirectOptions.timeout - elapsed).toString();           // stringify to not drop timeout when === 0
            }

            // When redirecting to a new hostname, remove the authorization and cookie headers
            if (redirectOptions.headers) {
                const parsedLocation = new URL(location);
                if (uri.hostname !== parsedLocation.hostname) {
                    for (const header of Object.keys(redirectOptions.headers)) {
                        const lowerHeader = header.toLowerCase();
                        if (lowerHeader === 'authorization' || lowerHeader === 'cookie') {
                            delete redirectOptions.headers[header];
                        }
                    }
                }
            }

            const followRedirect = (err) => {

                if (err) {
                    err.trace = _trace;
                    return finishOnce(Boom.badGateway('Invalid redirect', err));
                }

                const redirectReq = this._request(redirectMethod, location, redirectOptions, { callback: finishOnce }, _trace);
                if (options.redirected) {
                    options.redirected(statusCode, location, redirectReq);
                }
            };

            if (!options.beforeRedirect) {
                return followRedirect();
            }

            return options.beforeRedirect(redirectMethod, statusCode, location, res.headers, redirectOptions, followRedirect);
        };

        // Register handlers

        const finish = (err, res) => {

            if (err) {
                req.abort();
            }

            req.removeListener('response', onResponse);
            req.removeListener('error', onError);
            req.removeListener('abort', onAbort);
            req.on('error', Hoek.ignore);

            clearTimeout(timeoutId);

            this._emit('response', err, { req, res, start, uri });

            return relay.callback(err, res);
        };

        const finishOnce = Hoek.once(finish);

        req.once('response', onResponse);

        if (options.timeout) {
            timeoutId = setTimeout(() => finishOnce(Boom.gatewayTimeout('Client request timeout')), options.timeout);
        }

        req.on('abort', onAbort);

        // Write payload

        if (payloadSupported) {
            if (options.payload instanceof Stream) {
                let stream = options.payload;

                if (redirects) {
                    const collector = new Tap();
                    collector.once('finish', () => {

                        shadow = collector.collect();
                    });

                    stream = options.payload.pipe(collector);
                }

                internals.deferPipeUntilSocketConnects(req, stream);
                return req;
            }

            req.write(options.payload);
        }

        // Finalize request

        req.end();
        return req;
    }

    _emit(...args) {

        if (this.events) {
            this.events.emit(...args);
        }
    }

    read(res, options = {}) {

        return new Promise((resolve, reject) => {

            this._read(res, options, (err, payload) => {

                if (err) {
                    reject(err);
                    return;
                }

                resolve(payload);
                return;
            });
        });
    }

    _read(res, options, callback) {

        options = Hoek.applyToDefaults(this._defaults, options, { shallow: internals.shallowOptions });

        // Finish once

        let clientTimeoutId = null;

        const finish = (err, buffer) => {

            clearTimeout(clientTimeoutId);
            reader.removeListener('error', onReaderError);
            reader.removeListener('finish', onReaderFinish);
            res.removeListener('error', onResError);
            res.removeListener('close', onResAborted);
            res.removeListener('aborted', onResAborted);
            res.on('error', Hoek.ignore);

            if (err) {
                return callback(err);
            }

            if (!options.json) {
                return callback(null, buffer);
            }

            // Parse JSON

            if (options.json === 'force') {
                return internals.tryParseBuffer(buffer, callback);
            }

            // 'strict' or true

            const contentType = res.headers?.['content-type'] ?? '';
            const mime = contentType.split(';')[0].trim().toLowerCase();

            if (!internals.jsonRegex.test(mime)) {
                if (options.json === 'strict') {
                    return callback(Boom.notAcceptable('The content-type is not JSON compatible'));
                }

                return callback(null, buffer);
            }

            return internals.tryParseBuffer(buffer, callback);
        };

        const finishOnce = Hoek.once(finish);

        const clientTimeout = options.timeout;
        if (clientTimeout &&
            clientTimeout > 0) {

            clientTimeoutId = setTimeout(() => finishOnce(Boom.clientTimeout()), clientTimeout);
        }

        // Hander errors

        const onResError = (err) => {

            return finishOnce(err.isBoom ? err : Boom.internal('Payload stream error', err));
        };

        const onResAborted = () => {

            if (!res.complete) {
                finishOnce(Boom.internal('Payload stream closed prematurely'));
            }
        };

        res.once('error', onResError);
        res.once('close', onResAborted);
        res.once('aborted', onResAborted);

        // Read payload

        const reader = new Recorder({ maxBytes: options.maxBytes });

        const onReaderError = (err) => {

            if (res.destroy) {                          // GZip stream has no destroy() method
                res.destroy();
            }

            return finishOnce(err);
        };

        reader.once('error', onReaderError);

        const onReaderFinish = () => {

            return finishOnce(null, reader.collect());
        };

        reader.once('finish', onReaderFinish);

        if (options.gunzip) {
            const contentEncoding = options.gunzip === 'force' ?
                'gzip' :
                res.headers?.['content-encoding'] ?? '';

            if (/^(x-)?gzip(\s*,\s*identity)?$/.test(contentEncoding)) {
                const gunzip = Zlib.createGunzip();
                gunzip.once('error', onReaderError);
                res.pipe(gunzip).pipe(reader);
                return;
            }
        }

        res.pipe(reader);
    }

    toReadableStream(payload, encoding) {

        return new Payload(payload, encoding);
    }

    parseCacheControl(field) {

        /*
            Cache-Control   = 1#cache-directive
            cache-directive = token [ "=" ( token / quoted-string ) ]
            token           = [^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+
            quoted-string   = "(?:[^"\\]|\\.)*"
        */

        //                             1: directive                                        =   2: token                                              3: quoted-string
        const regex = /(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g;

        const header = {};
        const error = field.replace(regex, ($0, $1, $2, $3) => {

            const value = $2 || $3;
            header[$1] = value ? value.toLowerCase() : true;
            return '';
        });

        if (header['max-age']) {
            try {
                const maxAge = parseInt(header['max-age'], 10);
                if (isNaN(maxAge)) {
                    return null;
                }

                header['max-age'] = maxAge;
            }
            catch (err) { }
        }

        return error ? null : header;
    }

    // Shortcuts

    get(uri, options) {

        return this._shortcut('GET', uri, options);
    }

    post(uri, options) {

        return this._shortcut('POST', uri, options);
    }

    patch(uri, options) {

        return this._shortcut('PATCH', uri, options);
    }

    put(uri, options) {

        return this._shortcut('PUT', uri, options);
    }

    delete(uri, options) {

        return this._shortcut('DELETE', uri, options);
    }

    async _shortcut(method, uri, options = {}) {

        const res = await this.request(method, uri, options);

        let payload;
        try {
            payload = await this.read(res, options);
        }
        catch (err) {
            err.data = err.data ?? {};
            err.data.res = res;
            throw err;
        }

        if (res.statusCode < 400) {
            return { res, payload };
        }

        // Response error

        const data = {
            isResponseError: true,
            headers: res.headers,
            res,
            payload
        };

        throw new Boom.Boom(`Response Error: ${res.statusCode} ${res.statusMessage}`, { statusCode: res.statusCode, data });
    }
};


// baseUrl needs to end in a trailing / if it contains paths that need to be preserved

internals.resolveUrl = function (baseUrl, path) {

    if (!path) {
        return baseUrl;
    }

    // Will default to path if it's not a relative URL
    const url = new Url.URL(path, baseUrl);
    return Url.format(url);
};


internals.deferPipeUntilSocketConnects = function (req, stream) {

    const onSocket = (socket) => {

        if (!socket.connecting) {
            return onSocketConnect();
        }

        socket.once('connect', onSocketConnect);
    };

    const onSocketConnect = () => {

        stream.pipe(req);
        stream.removeListener('error', onStreamError);
    };

    const onStreamError = (err) => {

        req.emit('error', err);
    };

    req.once('socket', onSocket);
    stream.on('error', onStreamError);
};


internals.redirectMethod = function (code, method, options) {

    switch (code) {
        case 301:
        case 302:
            return options.redirectMethod || method;

        case 303:
            if (options.redirect303) {
                return 'GET';
            }

            break;

        case 307:
        case 308:
            return method;
    }

    return null;
};


internals.tryParseBuffer = function (buffer, next) {

    if (buffer.length === 0) {
        return next(null, null);
    }

    let payload;
    try {
        payload = Bourne.parse(buffer.toString());
    }
    catch (err) {
        return next(Boom.badGateway(err.message, { payload: buffer }));
    }

    return next(null, payload);
};


internals.applyUrlToOptions = (options, url) => {

    options.host = url.host;
    options.origin = url.origin;
    options.searchParams = url.searchParams;
    options.protocol = url.protocol;
    options.hostname = typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname;
    options.hash = url.hash;
    options.search = url.search;
    options.pathname = url.pathname;
    options.path = `${url.pathname}${url.search}`;
    options.href = url.href;
    if (url.port !== '') {
        options.port = Number(url.port);
    }

    if (url.username || url.password) {
        options.auth = `${url.username}:${url.password}`;
        options.username = url.username;
        options.password = url.password;
    }

    return options;
};

internals.isNullOrUndefined = (val) => [null, undefined].includes(val);

module.exports = new internals.Client();
