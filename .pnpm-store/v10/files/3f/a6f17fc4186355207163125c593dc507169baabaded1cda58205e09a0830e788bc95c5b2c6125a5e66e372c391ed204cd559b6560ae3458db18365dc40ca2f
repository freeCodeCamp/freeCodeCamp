var _a;
import { HTTPRequest, STATUS_TEXTS, handleError, InterceptResolutionAction, } from '../api/HTTPRequest.js';
import { UnsupportedOperation } from '../common/Errors.js';
import { stringToBase64 } from '../util/encoding.js';
import { BidiHTTPResponse } from './HTTPResponse.js';
export const requests = new WeakMap();
/**
 * @internal
 */
export class BidiHTTPRequest extends HTTPRequest {
    static from(bidiRequest, frame, isNetworkInterceptionEnabled, redirect) {
        const request = new _a(bidiRequest, frame, isNetworkInterceptionEnabled, redirect);
        request.#initialize();
        return request;
    }
    #redirectChain;
    #response = null;
    id;
    #frame;
    #request;
    constructor(request, frame, isNetworkInterceptionEnabled, redirect) {
        super();
        requests.set(request, this);
        this.interception.enabled = isNetworkInterceptionEnabled;
        this.#request = request;
        this.#frame = frame;
        this.#redirectChain = redirect ? redirect.#redirectChain : [];
        this.id = request.id;
    }
    get client() {
        return this.#frame.client;
    }
    #initialize() {
        this.#request.on('redirect', request => {
            const httpRequest = _a.from(request, this.#frame, this.interception.enabled, this);
            this.#redirectChain.push(this);
            request.once('success', () => {
                this.#frame
                    .page()
                    .trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */, httpRequest);
            });
            request.once('error', () => {
                this.#frame
                    .page()
                    .trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */, httpRequest);
            });
            void httpRequest.finalizeInterceptions();
        });
        this.#request.once('response', data => {
            // Create new response with the initial data. Note: the data can be updated later
            // on, when the `success` event is received.
            this.#response = BidiHTTPResponse.from(data, this, this.#frame.page().browser().cdpSupported);
        });
        this.#request.once('success', data => {
            // The `network.responseCompleted` event (mapped to `success` here)
            // contains the most up-to-date and complete response data, including
            // headers that might be missing from `network.responseStarted`
            // (e.g., `Set-Cookie` for navigation requests in Chrome).
            this.#response = BidiHTTPResponse.from(data, this, this.#frame.page().browser().cdpSupported);
        });
        this.#request.on('authenticate', this.#handleAuthentication);
        this.#frame.page().trustedEmitter.emit("request" /* PageEvent.Request */, this);
    }
    canBeIntercepted() {
        return this.#request.isBlocked;
    }
    interceptResolutionState() {
        if (!this.#request.isBlocked) {
            return { action: InterceptResolutionAction.Disabled };
        }
        return super.interceptResolutionState();
    }
    url() {
        return this.#request.url;
    }
    resourceType() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new UnsupportedOperation();
        }
        return (this.#request.resourceType || 'other').toLowerCase();
    }
    method() {
        return this.#request.method;
    }
    postData() {
        if (!this.#frame.page().browser().cdpSupported) {
            throw new UnsupportedOperation();
        }
        return this.#request.postData;
    }
    hasPostData() {
        return this.#request.hasPostData;
    }
    async fetchPostData() {
        return await this.#request.fetchPostData();
    }
    headers() {
        // Callers should not be allowed to mutate internal structure.
        const headers = {};
        for (const header of this.#request.headers) {
            headers[header.name.toLowerCase()] = header.value.value;
        }
        return {
            ...headers,
        };
    }
    response() {
        return this.#response;
    }
    failure() {
        if (this.#request.error === undefined) {
            return null;
        }
        return { errorText: this.#request.error };
    }
    isNavigationRequest() {
        return this.#request.navigation !== undefined;
    }
    initiator() {
        return {
            ...this.#request.initiator,
            type: this.#request.initiator?.type ?? 'other',
        };
    }
    redirectChain() {
        return this.#redirectChain.slice();
    }
    frame() {
        return this.#frame;
    }
    async _continue(overrides = {}) {
        const headers = getBidiHeaders(overrides.headers);
        this.interception.handled = true;
        return await this.#request
            .continueRequest({
            url: overrides.url,
            method: overrides.method,
            body: overrides.postData
                ? {
                    type: 'base64',
                    value: stringToBase64(overrides.postData),
                }
                : undefined,
            headers: headers.length > 0 ? headers : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            return handleError(error);
        });
    }
    async _abort() {
        this.interception.handled = true;
        return await this.#request.failRequest().catch(error => {
            this.interception.handled = false;
            throw error;
        });
    }
    async _respond(response, _priority) {
        this.interception.handled = true;
        let parsedBody;
        if (response.body) {
            parsedBody = HTTPRequest.getResponse(response.body);
        }
        const headers = getBidiHeaders(response.headers);
        const hasContentLength = headers.some(header => {
            return header.name === 'content-length';
        });
        if (response.contentType) {
            headers.push({
                name: 'content-type',
                value: {
                    type: 'string',
                    value: response.contentType,
                },
            });
        }
        if (parsedBody?.contentLength && !hasContentLength) {
            headers.push({
                name: 'content-length',
                value: {
                    type: 'string',
                    value: String(parsedBody.contentLength),
                },
            });
        }
        const status = response.status || 200;
        return await this.#request
            .provideResponse({
            statusCode: status,
            headers: headers.length > 0 ? headers : undefined,
            reasonPhrase: STATUS_TEXTS[status],
            body: parsedBody?.base64
                ? {
                    type: 'base64',
                    value: parsedBody?.base64,
                }
                : undefined,
        })
            .catch(error => {
            this.interception.handled = false;
            throw error;
        });
    }
    #authenticationHandled = false;
    #handleAuthentication = async () => {
        if (!this.#frame) {
            return;
        }
        const credentials = this.#frame.page()._credentials;
        if (credentials && !this.#authenticationHandled) {
            this.#authenticationHandled = true;
            void this.#request.continueWithAuth({
                action: 'provideCredentials',
                credentials: {
                    type: 'password',
                    username: credentials.username,
                    password: credentials.password,
                },
            });
        }
        else {
            void this.#request.continueWithAuth({
                action: 'cancel',
            });
        }
    };
    timing() {
        return this.#request.timing();
    }
    getResponseContent() {
        return this.#request.getResponseContent();
    }
}
_a = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
    const headers = [];
    for (const [name, value] of Object.entries(rawHeaders ?? [])) {
        if (!Object.is(value, undefined)) {
            const values = Array.isArray(value) ? value : [value];
            for (const value of values) {
                headers.push({
                    name: name.toLowerCase(),
                    value: {
                        type: 'string',
                        value: String(value),
                    },
                });
            }
        }
    }
    return headers;
}
//# sourceMappingURL=HTTPRequest.js.map