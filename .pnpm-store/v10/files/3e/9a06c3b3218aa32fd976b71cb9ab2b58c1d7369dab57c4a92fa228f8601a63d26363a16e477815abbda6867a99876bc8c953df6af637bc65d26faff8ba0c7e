'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createAuth(authMode, appId, apiKey) {
    const credentials = {
        'x-algolia-api-key': apiKey,
        'x-algolia-application-id': appId,
    };
    return {
        headers() {
            return authMode === AuthMode.WithinHeaders ? credentials : {};
        },
        queryParameters() {
            return authMode === AuthMode.WithinQueryParameters ? credentials : {};
        },
    };
}

function createRetryablePromise(callback) {
    let retriesCount = 0; // eslint-disable-line functional/no-let
    const retry = () => {
        retriesCount++;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(callback(retry));
            }, Math.min(100 * retriesCount, 1000));
        });
    };
    return callback(retry);
}

function createWaitablePromise(promise, wait = (_response, _requestOptions) => {
    return Promise.resolve();
}) {
    // eslint-disable-next-line functional/immutable-data
    return Object.assign(promise, {
        wait(requestOptions) {
            return createWaitablePromise(promise
                .then(response => Promise.all([wait(response, requestOptions), response]))
                .then(promiseResults => promiseResults[1]));
        },
    });
}

// eslint-disable-next-line functional/prefer-readonly-type
function shuffle(array) {
    let c = array.length - 1; // eslint-disable-line functional/no-let
    // eslint-disable-next-line functional/no-loop-statement
    for (c; c > 0; c--) {
        const b = Math.floor(Math.random() * (c + 1));
        const a = array[c];
        array[c] = array[b]; // eslint-disable-line functional/immutable-data, no-param-reassign
        array[b] = a; // eslint-disable-line functional/immutable-data, no-param-reassign
    }
    return array;
}
function addMethods(base, methods) {
    if (!methods) {
        return base;
    }
    Object.keys(methods).forEach(key => {
        // eslint-disable-next-line functional/immutable-data, no-param-reassign
        base[key] = methods[key](base);
    });
    return base;
}
function encode(format, ...args) {
    // eslint-disable-next-line functional/no-let
    let i = 0;
    return format.replace(/%s/g, () => encodeURIComponent(args[i++]));
}

const version = '4.26.0';

const destroy = (base) => {
    return () => {
        return base.transporter.requester.destroy();
    };
};

const AuthMode = {
    /**
     * If auth credentials should be in query parameters.
     */
    WithinQueryParameters: 0,
    /**
     * If auth credentials should be in headers.
     */
    WithinHeaders: 1,
};

exports.AuthMode = AuthMode;
exports.addMethods = addMethods;
exports.createAuth = createAuth;
exports.createRetryablePromise = createRetryablePromise;
exports.createWaitablePromise = createWaitablePromise;
exports.destroy = destroy;
exports.encode = encode;
exports.shuffle = shuffle;
exports.version = version;
