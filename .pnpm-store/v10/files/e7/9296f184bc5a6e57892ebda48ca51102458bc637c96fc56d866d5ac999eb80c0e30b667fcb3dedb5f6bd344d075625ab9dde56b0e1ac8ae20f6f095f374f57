(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.graphqlHttp = {}));
})(this, (function (exports) { 'use strict';

    /**
     *
     * utils
     *
     */
    /** @private */
    /** @private */
    function isObject(val) {
        return typeof val === 'object' && val !== null;
    }

    /**
     *
     * client
     *
     */
    /**
     * Creates a disposable GraphQL over HTTP client to transmit
     * GraphQL operation results.
     *
     * @category Client
     */
    function createClient(options) {
        const { credentials = 'same-origin', referrer, referrerPolicy, shouldRetry = () => false, } = options;
        const fetchFn = (options.fetchFn || fetch);
        const AbortControllerImpl = (options.abortControllerImpl ||
            AbortController);
        // we dont use yet another AbortController here because of
        // node's max EventEmitters listeners being only 10
        const client = (() => {
            let disposed = false;
            const listeners = [];
            return {
                get disposed() {
                    return disposed;
                },
                onDispose(cb) {
                    if (disposed) {
                        // empty the call stack and then call the cb
                        setTimeout(() => cb(), 0);
                        return () => {
                            // noop
                        };
                    }
                    listeners.push(cb);
                    return () => {
                        listeners.splice(listeners.indexOf(cb), 1);
                    };
                },
                dispose() {
                    if (disposed)
                        return;
                    disposed = true;
                    // we copy the listeners so that onDispose unlistens dont "pull the rug under our feet"
                    for (const listener of [...listeners]) {
                        listener();
                    }
                },
            };
        })();
        return {
            subscribe(request, sink) {
                if (client.disposed)
                    throw new Error('Client has been disposed');
                const control = new AbortControllerImpl();
                const unlisten = client.onDispose(() => {
                    unlisten();
                    control.abort();
                });
                (async () => {
                    var _a;
                    let retryingErr = null, retries = 0;
                    for (;;) {
                        if (retryingErr) {
                            const should = await shouldRetry(retryingErr, retries);
                            // requst might've been canceled while waiting for retry
                            if (control.signal.aborted)
                                return;
                            if (!should)
                                throw retryingErr;
                            retries++;
                        }
                        try {
                            const url = typeof options.url === 'function'
                                ? await options.url(request)
                                : options.url;
                            if (control.signal.aborted)
                                return;
                            const headers = typeof options.headers === 'function'
                                ? await options.headers()
                                : (_a = options.headers) !== null && _a !== void 0 ? _a : {};
                            if (control.signal.aborted)
                                return;
                            let res;
                            try {
                                res = await fetchFn(url, {
                                    signal: control.signal,
                                    method: 'POST',
                                    headers: Object.assign(Object.assign({}, headers), { 'content-type': 'application/json; charset=utf-8', accept: 'application/graphql-response+json, application/json' }),
                                    credentials,
                                    referrer,
                                    referrerPolicy,
                                    body: JSON.stringify(request),
                                });
                            }
                            catch (err) {
                                throw new NetworkError(err);
                            }
                            if (!res.ok)
                                throw new NetworkError(res);
                            if (!res.body)
                                throw new Error('Missing response body');
                            const contentType = res.headers.get('content-type');
                            if (!contentType)
                                throw new Error('Missing response content-type');
                            if (!contentType.includes('application/graphql-response+json') &&
                                !contentType.includes('application/json')) {
                                throw new Error(`Unsupported response content-type ${contentType}`);
                            }
                            const result = await res.json();
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            sink.next(result);
                            return control.abort();
                        }
                        catch (err) {
                            if (control.signal.aborted)
                                return;
                            // all non-network errors are worth reporting immediately
                            if (!(err instanceof NetworkError))
                                throw err;
                            // try again
                            retryingErr = err;
                        }
                    }
                })()
                    .then(() => sink.complete())
                    .catch((err) => sink.error(err));
                return () => control.abort();
            },
            dispose() {
                client.dispose();
            },
        };
    }
    /**
     * A network error caused by the client or an unexpected response from the server.
     *
     * To avoid bundling DOM typings (because the client can run in Node env too),
     * you should supply the `Response` generic depending on your Fetch implementation.
     *
     * @category Client
     */
    class NetworkError extends Error {
        constructor(msgOrErrOrResponse) {
            let message, response;
            if (isResponseLike(msgOrErrOrResponse)) {
                response = msgOrErrOrResponse;
                message =
                    'Server responded with ' +
                        msgOrErrOrResponse.status +
                        ': ' +
                        msgOrErrOrResponse.statusText;
            }
            else if (msgOrErrOrResponse instanceof Error)
                message = msgOrErrOrResponse.message;
            else
                message = String(msgOrErrOrResponse);
            super(message);
            this.name = this.constructor.name;
            this.response = response;
        }
    }
    function isResponseLike(val) {
        return (isObject(val) &&
            typeof val['ok'] === 'boolean' &&
            typeof val['status'] === 'number' &&
            typeof val['statusText'] === 'string');
    }

    exports.NetworkError = NetworkError;
    exports.createClient = createClient;

}));
