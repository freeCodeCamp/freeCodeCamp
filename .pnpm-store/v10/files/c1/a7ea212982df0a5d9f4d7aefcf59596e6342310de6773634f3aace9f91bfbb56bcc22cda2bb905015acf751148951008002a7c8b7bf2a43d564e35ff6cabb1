"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const is_1 = require("@sindresorhus/is");
const PCancelable = require("p-cancelable");
const types_1 = require("./types");
const parse_body_1 = require("./parse-body");
const core_1 = require("../core");
const proxy_events_1 = require("../core/utils/proxy-events");
const get_buffer_1 = require("../core/utils/get-buffer");
const is_response_ok_1 = require("../core/utils/is-response-ok");
const proxiedRequestEvents = [
    'request',
    'response',
    'redirect',
    'uploadProgress',
    'downloadProgress'
];
function asPromise(normalizedOptions) {
    let globalRequest;
    let globalResponse;
    const emitter = new events_1.EventEmitter();
    const promise = new PCancelable((resolve, reject, onCancel) => {
        const makeRequest = (retryCount) => {
            const request = new core_1.default(undefined, normalizedOptions);
            request.retryCount = retryCount;
            request._noPipe = true;
            onCancel(() => request.destroy());
            onCancel.shouldReject = false;
            onCancel(() => reject(new types_1.CancelError(request)));
            globalRequest = request;
            request.once('response', async (response) => {
                var _a;
                response.retryCount = retryCount;
                if (response.request.aborted) {
                    // Canceled while downloading - will throw a `CancelError` or `TimeoutError` error
                    return;
                }
                // Download body
                let rawBody;
                try {
                    rawBody = await get_buffer_1.default(request);
                    response.rawBody = rawBody;
                }
                catch (_b) {
                    // The same error is caught below.
                    // See request.once('error')
                    return;
                }
                if (request._isAboutToError) {
                    return;
                }
                // Parse body
                const contentEncoding = ((_a = response.headers['content-encoding']) !== null && _a !== void 0 ? _a : '').toLowerCase();
                const isCompressed = ['gzip', 'deflate', 'br'].includes(contentEncoding);
                const { options } = request;
                if (isCompressed && !options.decompress) {
                    response.body = rawBody;
                }
                else {
                    try {
                        response.body = parse_body_1.default(response, options.responseType, options.parseJson, options.encoding);
                    }
                    catch (error) {
                        // Fallback to `utf8`
                        response.body = rawBody.toString();
                        if (is_response_ok_1.isResponseOk(response)) {
                            request._beforeError(error);
                            return;
                        }
                    }
                }
                try {
                    for (const [index, hook] of options.hooks.afterResponse.entries()) {
                        // @ts-expect-error TS doesn't notice that CancelableRequest is a Promise
                        // eslint-disable-next-line no-await-in-loop
                        response = await hook(response, async (updatedOptions) => {
                            const typedOptions = core_1.default.normalizeArguments(undefined, {
                                ...updatedOptions,
                                retry: {
                                    calculateDelay: () => 0
                                },
                                throwHttpErrors: false,
                                resolveBodyOnly: false
                            }, options);
                            // Remove any further hooks for that request, because we'll call them anyway.
                            // The loop continues. We don't want duplicates (asPromise recursion).
                            typedOptions.hooks.afterResponse = typedOptions.hooks.afterResponse.slice(0, index);
                            for (const hook of typedOptions.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(typedOptions);
                            }
                            const promise = asPromise(typedOptions);
                            onCancel(() => {
                                promise.catch(() => { });
                                promise.cancel();
                            });
                            return promise;
                        });
                    }
                }
                catch (error) {
                    request._beforeError(new types_1.RequestError(error.message, error, request));
                    return;
                }
                globalResponse = response;
                if (!is_response_ok_1.isResponseOk(response)) {
                    request._beforeError(new types_1.HTTPError(response));
                    return;
                }
                request.destroy();
                resolve(request.options.resolveBodyOnly ? response.body : response);
            });
            const onError = (error) => {
                if (promise.isCanceled) {
                    return;
                }
                const { options } = request;
                if (error instanceof types_1.HTTPError && !options.throwHttpErrors) {
                    const { response } = error;
                    resolve(request.options.resolveBodyOnly ? response.body : response);
                    return;
                }
                reject(error);
            };
            request.once('error', onError);
            const previousBody = request.options.body;
            request.once('retry', (newRetryCount, error) => {
                var _a, _b;
                if (previousBody === ((_a = error.request) === null || _a === void 0 ? void 0 : _a.options.body) && is_1.default.nodeStream((_b = error.request) === null || _b === void 0 ? void 0 : _b.options.body)) {
                    onError(error);
                    return;
                }
                makeRequest(newRetryCount);
            });
            proxy_events_1.default(request, emitter, proxiedRequestEvents);
        };
        makeRequest(0);
    });
    promise.on = (event, fn) => {
        emitter.on(event, fn);
        return promise;
    };
    const shortcut = (responseType) => {
        const newPromise = (async () => {
            // Wait until downloading has ended
            await promise;
            const { options } = globalResponse.request;
            return parse_body_1.default(globalResponse, responseType, options.parseJson, options.encoding);
        })();
        Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
        return newPromise;
    };
    promise.json = () => {
        const { headers } = globalRequest.options;
        if (!globalRequest.writableFinished && headers.accept === undefined) {
            headers.accept = 'application/json';
        }
        return shortcut('json');
    };
    promise.buffer = () => shortcut('buffer');
    promise.text = () => shortcut('text');
    return promise;
}
exports.default = asPromise;
__exportStar(require("./types"), exports);
