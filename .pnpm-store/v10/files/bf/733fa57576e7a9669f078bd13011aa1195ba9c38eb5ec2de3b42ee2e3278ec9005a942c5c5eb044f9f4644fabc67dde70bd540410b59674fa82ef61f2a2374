import { debugError, isString } from '../common/util.js';
import { assert } from '../util/assert.js';
import { typedArrayToBase64 } from '../util/encoding.js';
/**
 * The default cooperative request interception resolution priority
 *
 * @public
 */
export const DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = 0;
/**
 * Represents an HTTP request sent by a page.
 * @remarks
 *
 * Whenever the page sends a request, such as for a network resource, the
 * following events are emitted by Puppeteer's `page`:
 *
 * - `request`: emitted when the request is issued by the page.
 *
 * - `requestfinished` - emitted when the response body is downloaded and the
 *   request is complete.
 *
 * If request fails at some point, then instead of `requestfinished` event the
 * `requestfailed` event is emitted.
 *
 * All of these events provide an instance of `HTTPRequest` representing the
 * request that occurred:
 *
 * ```
 * page.on('request', request => ...)
 * ```
 *
 * NOTE: HTTP Error responses, such as 404 or 503, are still successful
 * responses from HTTP standpoint, so request will complete with
 * `requestfinished` event.
 *
 * If request gets a 'redirect' response, the request is successfully finished
 * with the `requestfinished` event, and a new request is issued to a
 * redirected url.
 *
 * @public
 */
export class HTTPRequest {
    /**
     * @internal
     */
    _interceptionId;
    /**
     * @internal
     */
    _failureText = null;
    /**
     * @internal
     */
    _response = null;
    /**
     * @internal
     */
    _fromMemoryCache = false;
    /**
     * @internal
     */
    _redirectChain = [];
    /**
     * @internal
     */
    interception = {
        enabled: false,
        handled: false,
        handlers: [],
        resolutionState: {
            action: InterceptResolutionAction.None,
        },
        requestOverrides: {},
        response: null,
        abortReason: null,
    };
    /**
     * @internal
     */
    constructor() { }
    /**
     * The `ContinueRequestOverrides` that will be used
     * if the interception is allowed to continue (ie, `abort()` and
     * `respond()` aren't called).
     */
    continueRequestOverrides() {
        return this.interception.requestOverrides;
    }
    /**
     * The `ResponseForRequest` that gets used if the
     * interception is allowed to respond (ie, `abort()` is not called).
     */
    responseForRequest() {
        return this.interception.response;
    }
    /**
     * The most recent reason for aborting the request
     */
    abortErrorReason() {
        return this.interception.abortReason;
    }
    /**
     * An InterceptResolutionState object describing the current resolution
     * action and priority.
     *
     * InterceptResolutionState contains:
     * action: InterceptResolutionAction
     * priority?: number
     *
     * InterceptResolutionAction is one of: `abort`, `respond`, `continue`,
     * `disabled`, `none`, or `already-handled`.
     */
    interceptResolutionState() {
        if (!this.interception.enabled) {
            return { action: InterceptResolutionAction.Disabled };
        }
        if (this.interception.handled) {
            return { action: InterceptResolutionAction.AlreadyHandled };
        }
        return { ...this.interception.resolutionState };
    }
    /**
     * Is `true` if the intercept resolution has already been handled,
     * `false` otherwise.
     */
    isInterceptResolutionHandled() {
        return this.interception.handled;
    }
    /**
     * Adds an async request handler to the processing queue.
     * Deferred handlers are not guaranteed to execute in any particular order,
     * but they are guaranteed to resolve before the request interception
     * is finalized.
     */
    enqueueInterceptAction(pendingHandler) {
        this.interception.handlers.push(pendingHandler);
    }
    /**
     * Awaits pending interception handlers and then decides how to fulfill
     * the request interception.
     */
    async finalizeInterceptions() {
        await this.interception.handlers.reduce((promiseChain, interceptAction) => {
            return promiseChain.then(interceptAction);
        }, Promise.resolve());
        this.interception.handlers = [];
        const { action } = this.interceptResolutionState();
        switch (action) {
            case 'abort':
                return await this._abort(this.interception.abortReason);
            case 'respond':
                if (this.interception.response === null) {
                    throw new Error('Response is missing for the interception');
                }
                return await this._respond(this.interception.response);
            case 'continue':
                return await this._continue(this.interception.requestOverrides);
        }
    }
    /**
     * @internal
     */
    verifyInterception() {
        assert(this.interception.enabled, 'Request Interception is not enabled!');
        assert(!this.interception.handled, 'Request is already handled!');
    }
    /**
     * Continues request with optional request overrides.
     *
     * @example
     *
     * ```ts
     * await page.setRequestInterception(true);
     * page.on('request', request => {
     *   // Override headers
     *   const headers = Object.assign({}, request.headers(), {
     *     foo: 'bar', // set "foo" header
     *     origin: undefined, // remove "origin" header
     *   });
     *   request.continue({headers});
     * });
     * ```
     *
     * @param overrides - optional overrides to apply to the request.
     * @param priority - If provided, intercept is resolved using cooperative
     * handling rules. Otherwise, intercept is resolved immediately.
     *
     * @remarks
     *
     * To use this, request interception should be enabled with
     * {@link Page.setRequestInterception}.
     *
     * Exception is immediately thrown if the request interception is not enabled.
     */
    async continue(overrides = {}, priority) {
        this.verifyInterception();
        if (!this.canBeIntercepted()) {
            return;
        }
        if (priority === undefined) {
            return await this._continue(overrides);
        }
        this.interception.requestOverrides = overrides;
        if (this.interception.resolutionState.priority === undefined ||
            priority > this.interception.resolutionState.priority) {
            this.interception.resolutionState = {
                action: InterceptResolutionAction.Continue,
                priority,
            };
            return;
        }
        if (priority === this.interception.resolutionState.priority) {
            if (this.interception.resolutionState.action === 'abort' ||
                this.interception.resolutionState.action === 'respond') {
                return;
            }
            this.interception.resolutionState.action =
                InterceptResolutionAction.Continue;
        }
        return;
    }
    /**
     * Fulfills a request with the given response.
     *
     * @example
     * An example of fulfilling all requests with 404 responses:
     *
     * ```ts
     * await page.setRequestInterception(true);
     * page.on('request', request => {
     *   request.respond({
     *     status: 404,
     *     contentType: 'text/plain',
     *     body: 'Not Found!',
     *   });
     * });
     * ```
     *
     * NOTE: Mocking responses for dataURL requests is not supported.
     * Calling `request.respond` for a dataURL request is a noop.
     *
     * @param response - the response to fulfill the request with.
     * @param priority - If provided, intercept is resolved using
     * cooperative handling rules. Otherwise, intercept is resolved
     * immediately.
     *
     * @remarks
     *
     * To use this, request
     * interception should be enabled with {@link Page.setRequestInterception}.
     *
     * Exception is immediately thrown if the request interception is not enabled.
     */
    async respond(response, priority) {
        this.verifyInterception();
        if (!this.canBeIntercepted()) {
            return;
        }
        if (priority === undefined) {
            return await this._respond(response);
        }
        this.interception.response = response;
        if (this.interception.resolutionState.priority === undefined ||
            priority > this.interception.resolutionState.priority) {
            this.interception.resolutionState = {
                action: InterceptResolutionAction.Respond,
                priority,
            };
            return;
        }
        if (priority === this.interception.resolutionState.priority) {
            if (this.interception.resolutionState.action === 'abort') {
                return;
            }
            this.interception.resolutionState.action =
                InterceptResolutionAction.Respond;
        }
    }
    /**
     * Aborts a request.
     *
     * @param errorCode - optional error code to provide.
     * @param priority - If provided, intercept is resolved using
     * cooperative handling rules. Otherwise, intercept is resolved
     * immediately.
     *
     * @remarks
     *
     * To use this, request interception should be enabled with
     * {@link Page.setRequestInterception}. If it is not enabled, this method will
     * throw an exception immediately.
     */
    async abort(errorCode = 'failed', priority) {
        this.verifyInterception();
        if (!this.canBeIntercepted()) {
            return;
        }
        const errorReason = errorReasons[errorCode];
        assert(errorReason, 'Unknown error code: ' + errorCode);
        if (priority === undefined) {
            return await this._abort(errorReason);
        }
        this.interception.abortReason = errorReason;
        if (this.interception.resolutionState.priority === undefined ||
            priority >= this.interception.resolutionState.priority) {
            this.interception.resolutionState = {
                action: InterceptResolutionAction.Abort,
                priority,
            };
            return;
        }
    }
    /**
     * @internal
     */
    static getResponse(body) {
        // Needed to get the correct byteLength
        const byteBody = isString(body)
            ? new TextEncoder().encode(body)
            : body;
        return {
            contentLength: byteBody.byteLength,
            base64: typedArrayToBase64(byteBody),
        };
    }
}
/**
 * @public
 */
export var InterceptResolutionAction;
(function (InterceptResolutionAction) {
    InterceptResolutionAction["Abort"] = "abort";
    InterceptResolutionAction["Respond"] = "respond";
    InterceptResolutionAction["Continue"] = "continue";
    InterceptResolutionAction["Disabled"] = "disabled";
    InterceptResolutionAction["None"] = "none";
    InterceptResolutionAction["AlreadyHandled"] = "already-handled";
})(InterceptResolutionAction || (InterceptResolutionAction = {}));
/**
 * @internal
 */
export function headersArray(headers) {
    const result = [];
    for (const name in headers) {
        const value = headers[name];
        if (!Object.is(value, undefined)) {
            const values = Array.isArray(value) ? value : [value];
            result.push(...values.map(value => {
                return { name, value: value + '' };
            }));
        }
    }
    return result;
}
/**
 * @internal
 *
 * @remarks
 * List taken from {@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml}
 * with extra 306 and 418 codes.
 */
export const STATUS_TEXTS = {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Already Reported',
    '226': 'IM Used',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '306': 'Switch Proxy',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': "I'm a teapot",
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Too Early',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '510': 'Not Extended',
    '511': 'Network Authentication Required',
};
const errorReasons = {
    aborted: 'Aborted',
    accessdenied: 'AccessDenied',
    addressunreachable: 'AddressUnreachable',
    blockedbyclient: 'BlockedByClient',
    blockedbyresponse: 'BlockedByResponse',
    connectionaborted: 'ConnectionAborted',
    connectionclosed: 'ConnectionClosed',
    connectionfailed: 'ConnectionFailed',
    connectionrefused: 'ConnectionRefused',
    connectionreset: 'ConnectionReset',
    internetdisconnected: 'InternetDisconnected',
    namenotresolved: 'NameNotResolved',
    timedout: 'TimedOut',
    failed: 'Failed',
};
/**
 * @internal
 */
export function handleError(error) {
    // Firefox throws an invalid argument error with a message starting with
    // 'Expected "header" [...]'.
    if (error.originalMessage.includes('Invalid header') ||
        error.originalMessage.includes('Unsafe header') ||
        error.originalMessage.includes('Expected "header"') ||
        // WebDriver BiDi error for invalid values, for example, headers.
        error.originalMessage.includes('invalid argument')) {
        throw error;
    }
    // In certain cases, protocol will return error if the request was
    // already canceled or the page was closed. We should tolerate these
    // errors.
    debugError(error);
}
//# sourceMappingURL=HTTPRequest.js.map