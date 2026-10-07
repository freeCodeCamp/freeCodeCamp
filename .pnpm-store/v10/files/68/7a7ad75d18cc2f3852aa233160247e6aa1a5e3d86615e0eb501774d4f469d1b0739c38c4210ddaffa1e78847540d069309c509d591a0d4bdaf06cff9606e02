/*
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var _a;
import { ChromiumBidi, } from '../../../protocol/protocol.js';
import { assert } from '../../../utils/assert.js';
import { DefaultMap } from '../../../utils/DefaultMap.js';
import { Deferred } from '../../../utils/Deferred.js';
import { LogType } from '../../../utils/log.js';
import { bidiBodySizeFromCdpPostDataEntries, bidiNetworkHeadersFromCdpNetworkHeaders, cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction, cdpFetchHeadersFromBidiNetworkHeaders, cdpToBiDiCookie, computeHeadersSize, getTiming, networkHeaderFromCookieHeaders, stringToBase64, } from './NetworkUtils.js';
const REALM_REGEX = /(?<=realm=").*(?=")/;
/** Abstracts one individual network request. */
export class NetworkRequest {
    static unknownParameter = 'UNKNOWN';
    /**
     * Each network request has an associated request id, which is a string
     * uniquely identifying that request.
     *
     * The identifier for a request resulting from a redirect matches that of the
     * request that initiated it.
     */
    #id;
    #fetchId;
    /**
     * Indicates the network intercept phase, if the request is currently blocked.
     * Undefined necessarily implies that the request is not blocked.
     */
    #interceptPhase;
    #servedFromCache = false;
    #redirectCount;
    #request = {};
    #requestOverrides;
    #responseOverrides;
    #response = {
        decodedSize: 0,
        encodedSize: 0,
    };
    #eventManager;
    #networkStorage;
    #cdpTarget;
    #logger;
    #emittedEvents = {
        [ChromiumBidi.Network.EventNames.AuthRequired]: false,
        [ChromiumBidi.Network.EventNames.BeforeRequestSent]: false,
        [ChromiumBidi.Network.EventNames.FetchError]: false,
        [ChromiumBidi.Network.EventNames.ResponseCompleted]: false,
        [ChromiumBidi.Network.EventNames.ResponseStarted]: false,
    };
    waitNextPhase = new Deferred();
    constructor(id, eventManager, networkStorage, cdpTarget, redirectCount = 0, logger) {
        this.#id = id;
        this.#eventManager = eventManager;
        this.#networkStorage = networkStorage;
        this.#cdpTarget = cdpTarget;
        this.#redirectCount = redirectCount;
        this.#logger = logger;
    }
    get id() {
        return this.#id;
    }
    get fetchId() {
        return this.#fetchId;
    }
    /**
     * When blocked returns the phase for it
     */
    get interceptPhase() {
        return this.#interceptPhase;
    }
    get url() {
        const fragment = this.#request.info?.request.urlFragment ??
            this.#request.paused?.request.urlFragment ??
            '';
        const url = this.#response.paused?.request.url ??
            this.#requestOverrides?.url ??
            this.#response.info?.url ??
            this.#request.auth?.request.url ??
            this.#request.info?.request.url ??
            this.#request.paused?.request.url ??
            _a.unknownParameter;
        return `${url}${fragment}`;
    }
    get redirectCount() {
        return this.#redirectCount;
    }
    get cdpTarget() {
        return this.#cdpTarget;
    }
    /** CdpTarget can be changed when frame is moving out of process. */
    updateCdpTarget(cdpTarget) {
        if (cdpTarget !== this.#cdpTarget) {
            this.#logger?.(LogType.debugInfo, `Request ${this.id} was moved from ${this.#cdpTarget.id} to ${cdpTarget.id}`);
            this.#cdpTarget = cdpTarget;
        }
    }
    get cdpClient() {
        return this.#cdpTarget.cdpClient;
    }
    isRedirecting() {
        return Boolean(this.#request.info);
    }
    #isDataUrl() {
        return this.url.startsWith('data:');
    }
    #isNonInterceptable() {
        return (
        // We can't intercept data urls from CDP
        this.#isDataUrl() ||
            // Cached requests never hit the network
            this.#servedFromCache);
    }
    get #method() {
        return (this.#requestOverrides?.method ??
            this.#request.info?.request.method ??
            this.#request.paused?.request.method ??
            this.#request.auth?.request.method ??
            this.#response.paused?.request.method);
    }
    get #navigationId() {
        // Heuristic to determine if this is a navigation request, and if not return null.
        if (!this.#request.info ||
            !this.#request.info.loaderId ||
            // When we navigate all CDP network events have `loaderId`
            // CDP's `loaderId` and `requestId` match when
            // that request triggered the loading
            this.#request.info.loaderId !== this.#request.info.requestId) {
            return null;
        }
        // Get virtual navigation ID from the browsing context.
        return this.#networkStorage.getNavigationId(this.#context ?? undefined);
    }
    get #cookies() {
        let cookies = [];
        if (this.#request.extraInfo) {
            cookies = this.#request.extraInfo.associatedCookies
                .filter(({ blockedReasons }) => {
                return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
            })
                .map(({ cookie }) => cdpToBiDiCookie(cookie));
        }
        return cookies;
    }
    #getBodySizeFromHeaders(headers) {
        if (headers === undefined) {
            return undefined;
        }
        if (headers['Content-Length'] !== undefined) {
            const bodySize = Number.parseInt(headers['Content-Length']);
            if (Number.isInteger(bodySize)) {
                return bodySize;
            }
            this.#logger?.(LogType.debugError, "Unexpected non-integer 'Content-Length' header");
        }
        // TODO: process `Transfer-Encoding: chunked` case properly.
        return undefined;
    }
    get bodySize() {
        if (typeof this.#requestOverrides?.bodySize === 'number') {
            return this.#requestOverrides.bodySize;
        }
        if (this.#request.info?.request.postDataEntries !== undefined) {
            return bidiBodySizeFromCdpPostDataEntries(this.#request.info?.request.postDataEntries);
        }
        // Try to guess the body size based on the `Content-Length` header.
        return (this.#getBodySizeFromHeaders(this.#request.info?.request.headers) ??
            this.#getBodySizeFromHeaders(this.#request.extraInfo?.headers) ??
            0);
    }
    get #context() {
        const result = this.#response.paused?.frameId ??
            this.#request.info?.frameId ??
            this.#request.paused?.frameId ??
            this.#request.auth?.frameId;
        if (result !== undefined) {
            return result;
        }
        // Heuristic for associating a preflight request with context via it's initiator
        // request. Useful for preflight requests.
        // https://github.com/GoogleChromeLabs/chromium-bidi/issues/3570
        if (this.#request?.info?.initiator.type === 'preflight' &&
            this.#request?.info?.initiator.requestId !== undefined) {
            const maybeInitiator = this.#networkStorage.getRequestById(this.#request?.info?.initiator.requestId);
            if (maybeInitiator !== undefined) {
                return maybeInitiator.#request.info?.frameId ?? null;
            }
        }
        return null;
    }
    /** Returns the HTTP status code associated with this request if any. */
    get #statusCode() {
        return (this.#responseOverrides?.statusCode ??
            this.#response.paused?.responseStatusCode ??
            this.#response.extraInfo?.statusCode ??
            this.#response.info?.status);
    }
    get #requestHeaders() {
        let headers = [];
        if (this.#requestOverrides?.headers) {
            const headerMap = new DefaultMap(() => []);
            for (const header of this.#requestOverrides.headers) {
                headerMap.get(header.name).push(header.value.value);
            }
            for (const [name, value] of headerMap.entries()) {
                headers.push({
                    name,
                    value: {
                        type: 'string',
                        value: value.join('\n').trimEnd(),
                    },
                });
            }
        }
        else {
            headers = [
                ...bidiNetworkHeadersFromCdpNetworkHeaders(this.#request.info?.request.headers),
                ...bidiNetworkHeadersFromCdpNetworkHeaders(this.#request.extraInfo?.headers),
            ];
        }
        return headers;
    }
    get #authChallenges() {
        // TODO: get headers from Fetch.requestPaused
        if (!this.#response.info) {
            return;
        }
        if (!(this.#statusCode === 401 || this.#statusCode === 407)) {
            return undefined;
        }
        const headerName = this.#statusCode === 401 ? 'WWW-Authenticate' : 'Proxy-Authenticate';
        const authChallenges = [];
        for (const [header, value] of Object.entries(this.#response.info.headers)) {
            // TODO: Do a proper match based on https://httpwg.org/specs/rfc9110.html#credentials
            // Or verify this works
            if (header.localeCompare(headerName, undefined, { sensitivity: 'base' }) === 0) {
                authChallenges.push({
                    scheme: value.split(' ').at(0) ?? '',
                    realm: value.match(REALM_REGEX)?.at(0) ?? '',
                });
            }
        }
        return authChallenges;
    }
    get #timings() {
        // The timing in the CDP events are provided relative to the event's baseline.
        // However, the baseline can be different for different events, and the events have to
        // be normalized throughout resource events. Normalize events timestamps  by the
        // request.
        // TODO: Verify this is correct.
        const responseTimeOffset = getTiming(getTiming(this.#response.info?.timing?.requestTime) -
            getTiming(this.#request.info?.timestamp));
        return {
            // TODO: Verify this is correct
            timeOrigin: Math.round(getTiming(this.#request.info?.wallTime) * 1000),
            // Timing baseline.
            // TODO: Verify this is correct.
            requestTime: 0,
            // TODO: set if redirect detected.
            redirectStart: 0,
            // TODO: set if redirect detected.
            redirectEnd: 0,
            // TODO: Verify this is correct
            // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=145
            fetchStart: getTiming(this.#response.info?.timing?.workerFetchStart, responseTimeOffset),
            // fetchStart: 0,
            dnsStart: getTiming(this.#response.info?.timing?.dnsStart, responseTimeOffset),
            dnsEnd: getTiming(this.#response.info?.timing?.dnsEnd, responseTimeOffset),
            connectStart: getTiming(this.#response.info?.timing?.connectStart, responseTimeOffset),
            connectEnd: getTiming(this.#response.info?.timing?.connectEnd, responseTimeOffset),
            tlsStart: getTiming(this.#response.info?.timing?.sslStart, responseTimeOffset),
            requestStart: getTiming(this.#response.info?.timing?.sendStart, responseTimeOffset),
            // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=196
            responseStart: getTiming(this.#response.info?.timing?.receiveHeadersStart, responseTimeOffset),
            responseEnd: getTiming(this.#response.info?.timing?.receiveHeadersEnd, responseTimeOffset),
        };
    }
    #phaseChanged() {
        this.waitNextPhase.resolve();
        this.waitNextPhase = new Deferred();
    }
    #interceptsInPhase(phase) {
        if (this.#isNonInterceptable() ||
            !this.#cdpTarget.isSubscribedTo(`network.${phase}`)) {
            return new Set();
        }
        return this.#networkStorage.getInterceptsForPhase(this, phase);
    }
    #isBlockedInPhase(phase) {
        return this.#interceptsInPhase(phase).size > 0;
    }
    handleRedirect(event) {
        // TODO: use event.redirectResponse;
        // Temporary workaround to emit ResponseCompleted event for redirects
        this.#response.hasExtraInfo = false;
        this.#response.decodedSize = 0;
        this.#response.encodedSize = 0;
        this.#response.info = event.redirectResponse;
        this.#emitEventsIfReady({
            wasRedirected: true,
        });
    }
    #emitEventsIfReady(options = {}) {
        const requestExtraInfoCompleted = 
        // Flush redirects
        options.wasRedirected ||
            Boolean(this.#response.loadingFailed) ||
            this.#isDataUrl() ||
            Boolean(this.#request.extraInfo) ||
            // If the request is intercepted during the `authRequired` phase, there
            // will be no `Network.requestWillBeSentExtraInfo` CDP events.
            this.#isBlockedInPhase("authRequired" /* Network.InterceptPhase.AuthRequired */) ||
            // Requests from cache don't have extra info
            this.#servedFromCache ||
            // Sometimes there is no extra info and the response
            // is the only place we can find out
            Boolean(this.#response.info && !this.#response.hasExtraInfo);
        const noInterceptionExpected = this.#isNonInterceptable();
        const requestInterceptionExpected = !noInterceptionExpected &&
            this.#isBlockedInPhase("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */);
        const requestInterceptionCompleted = !requestInterceptionExpected ||
            (requestInterceptionExpected && Boolean(this.#request.paused));
        if (Boolean(this.#request.info) &&
            (requestInterceptionExpected
                ? requestInterceptionCompleted
                : requestExtraInfoCompleted)) {
            this.#emitEvent(this.#getBeforeRequestEvent.bind(this));
        }
        const responseExtraInfoCompleted = Boolean(this.#response.extraInfo) ||
            // Response from cache don't have extra info
            this.#servedFromCache ||
            // Don't expect extra info if the flag is false
            Boolean(this.#response.info && !this.#response.hasExtraInfo);
        const responseInterceptionExpected = !noInterceptionExpected &&
            this.#isBlockedInPhase("responseStarted" /* Network.InterceptPhase.ResponseStarted */);
        if (this.#response.info ||
            (responseInterceptionExpected && Boolean(this.#response.paused))) {
            this.#emitEvent(this.#getResponseStartedEvent.bind(this));
        }
        const responseInterceptionCompleted = !responseInterceptionExpected ||
            (responseInterceptionExpected && Boolean(this.#response.paused));
        const loadingFinished = Boolean(this.#response.loadingFailed) ||
            Boolean(this.#response.loadingFinished);
        if (Boolean(this.#response.info) &&
            responseExtraInfoCompleted &&
            responseInterceptionCompleted &&
            (loadingFinished || options.wasRedirected)) {
            this.#emitEvent(this.#getResponseReceivedEvent.bind(this));
            this.#networkStorage.disposeRequest(this.id);
        }
    }
    onRequestWillBeSentEvent(event) {
        this.#request.info = event;
        this.#networkStorage.collectIfNeeded(this, "request" /* Network.DataType.Request */);
        this.#emitEventsIfReady();
    }
    onRequestWillBeSentExtraInfoEvent(event) {
        this.#request.extraInfo = event;
        this.#emitEventsIfReady();
    }
    onResponseReceivedExtraInfoEvent(event) {
        if (event.statusCode >= 300 &&
            event.statusCode <= 399 &&
            this.#request.info &&
            event.headers['location'] === this.#request.info.request.url) {
            // We received the Response Extra info for the redirect
            // Too late so we need to skip it as it will
            // fire wrongly for the last one
            return;
        }
        this.#response.extraInfo = event;
        this.#emitEventsIfReady();
    }
    onResponseReceivedEvent(event) {
        this.#response.hasExtraInfo = event.hasExtraInfo;
        this.#response.info = event.response;
        this.#networkStorage.collectIfNeeded(this, "response" /* Network.DataType.Response */);
        this.#emitEventsIfReady();
    }
    onServedFromCache() {
        this.#servedFromCache = true;
        this.#emitEventsIfReady();
    }
    onLoadingFinishedEvent(event) {
        this.#response.loadingFinished = event;
        this.#emitEventsIfReady();
    }
    onDataReceivedEvent(event) {
        this.#response.decodedSize += event.dataLength;
        this.#response.encodedSize += event.encodedDataLength;
    }
    onLoadingFailedEvent(event) {
        this.#response.loadingFailed = event;
        this.#emitEventsIfReady();
        this.#emitEvent(() => {
            return {
                method: ChromiumBidi.Network.EventNames.FetchError,
                params: {
                    ...this.#getBaseEventParams(),
                    errorText: event.errorText,
                },
            };
        });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
    async failRequest(errorReason) {
        assert(this.#fetchId, 'Network Interception not set-up.');
        await this.cdpClient.sendCommand('Fetch.failRequest', {
            requestId: this.#fetchId,
            errorReason,
        });
        this.#interceptPhase = undefined;
    }
    onRequestPaused(event) {
        this.#fetchId = event.requestId;
        // CDP https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#event-requestPaused
        if (event.responseStatusCode || event.responseErrorReason) {
            this.#response.paused = event;
            if (this.#isBlockedInPhase("responseStarted" /* Network.InterceptPhase.ResponseStarted */) &&
                // CDP may emit multiple events for a single request
                !this.#emittedEvents[ChromiumBidi.Network.EventNames.ResponseStarted] &&
                // Continue all response that have not enabled Network domain
                this.#fetchId !== this.id) {
                this.#interceptPhase = "responseStarted" /* Network.InterceptPhase.ResponseStarted */;
            }
            else {
                void this.#continueResponse();
            }
        }
        else {
            this.#request.paused = event;
            if (this.#isBlockedInPhase("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */) &&
                // CDP may emit multiple events for a single request
                !this.#emittedEvents[ChromiumBidi.Network.EventNames.BeforeRequestSent] &&
                // Continue all requests that have not enabled Network domain
                this.#fetchId !== this.id) {
                this.#interceptPhase = "beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */;
            }
            else {
                void this.#continueRequest();
            }
        }
        this.#emitEventsIfReady();
    }
    onAuthRequired(event) {
        this.#fetchId = event.requestId;
        this.#request.auth = event;
        if (this.#isBlockedInPhase("authRequired" /* Network.InterceptPhase.AuthRequired */) &&
            // Continue all auth requests that have not enabled Network domain
            this.#fetchId !== this.id) {
            this.#interceptPhase = "authRequired" /* Network.InterceptPhase.AuthRequired */;
            // Make sure the `network.beforeRequestSent` is emitted before
            // `network.authRequired`.
            this.#emitEventsIfReady();
        }
        else {
            void this.#continueWithAuth({
                response: 'Default',
            });
        }
        this.#emitEvent(() => {
            return {
                method: ChromiumBidi.Network.EventNames.AuthRequired,
                params: {
                    ...this.#getBaseEventParams("authRequired" /* Network.InterceptPhase.AuthRequired */),
                    response: this.#getResponseEventParams(),
                },
            };
        });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
    async continueRequest(overrides = {}) {
        const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
        const headers = cdpFetchHeadersFromBidiNetworkHeaders(overrideHeaders);
        const postData = getCdpBodyFromBiDiBytesValue(overrides.body);
        await this.#continueRequest({
            url: overrides.url,
            method: overrides.method,
            headers,
            postData,
        });
        this.#requestOverrides = {
            url: overrides.url,
            method: overrides.method,
            headers: overrides.headers,
            cookies: overrides.cookies,
            bodySize: getSizeFromBiDiBytesValue(overrides.body),
        };
    }
    async #continueRequest(overrides = {}) {
        assert(this.#fetchId, 'Network Interception not set-up.');
        await this.cdpClient.sendCommand('Fetch.continueRequest', {
            requestId: this.#fetchId,
            url: overrides.url,
            method: overrides.method,
            headers: overrides.headers,
            postData: overrides.postData,
        });
        this.#interceptPhase = undefined;
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
    async continueResponse(overrides = {}) {
        if (this.interceptPhase === "authRequired" /* Network.InterceptPhase.AuthRequired */) {
            if (overrides.credentials) {
                await Promise.all([
                    this.waitNextPhase,
                    await this.#continueWithAuth({
                        response: 'ProvideCredentials',
                        username: overrides.credentials.username,
                        password: overrides.credentials.password,
                    }),
                ]);
            }
            else {
                // We need to use `ProvideCredentials`
                // As `Default` may cancel the request
                return await this.#continueWithAuth({
                    response: 'ProvideCredentials',
                });
            }
        }
        if (this.#interceptPhase === "responseStarted" /* Network.InterceptPhase.ResponseStarted */) {
            const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
            const responseHeaders = cdpFetchHeadersFromBidiNetworkHeaders(overrideHeaders);
            await this.#continueResponse({
                responseCode: overrides.statusCode ?? this.#response.paused?.responseStatusCode,
                responsePhrase: overrides.reasonPhrase ?? this.#response.paused?.responseStatusText,
                responseHeaders: responseHeaders ?? this.#response.paused?.responseHeaders,
            });
            this.#responseOverrides = {
                statusCode: overrides.statusCode,
                headers: overrideHeaders,
            };
        }
    }
    async #continueResponse({ responseCode, responsePhrase, responseHeaders, } = {}) {
        assert(this.#fetchId, 'Network Interception not set-up.');
        await this.cdpClient.sendCommand('Fetch.continueResponse', {
            requestId: this.#fetchId,
            responseCode,
            responsePhrase,
            responseHeaders,
        });
        this.#interceptPhase = undefined;
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
    async continueWithAuth(authChallenge) {
        let username;
        let password;
        if (authChallenge.action === 'provideCredentials') {
            const { credentials } = authChallenge;
            username = credentials.username;
            password = credentials.password;
        }
        const response = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(authChallenge.action);
        await this.#continueWithAuth({
            response,
            username,
            password,
        });
    }
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
    async provideResponse(overrides) {
        assert(this.#fetchId, 'Network Interception not set-up.');
        // We need to pass through if the request is already in
        // AuthRequired phase
        if (this.interceptPhase === "authRequired" /* Network.InterceptPhase.AuthRequired */) {
            // We need to use `ProvideCredentials`
            // As `Default` may cancel the request
            return await this.#continueWithAuth({
                response: 'ProvideCredentials',
            });
        }
        // If we don't modify the response
        // just continue the request
        if (!overrides.body && !overrides.headers) {
            return await this.#continueRequest();
        }
        const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
        const responseHeaders = cdpFetchHeadersFromBidiNetworkHeaders(overrideHeaders);
        const responseCode = overrides.statusCode ?? this.#statusCode ?? 200;
        await this.cdpClient.sendCommand('Fetch.fulfillRequest', {
            requestId: this.#fetchId,
            responseCode,
            responsePhrase: overrides.reasonPhrase,
            responseHeaders,
            body: getCdpBodyFromBiDiBytesValue(overrides.body),
        });
        this.#interceptPhase = undefined;
    }
    dispose() {
        this.waitNextPhase.reject(new Error('waitNextPhase disposed'));
    }
    async #continueWithAuth(authChallengeResponse) {
        assert(this.#fetchId, 'Network Interception not set-up.');
        await this.cdpClient.sendCommand('Fetch.continueWithAuth', {
            requestId: this.#fetchId,
            authChallengeResponse,
        });
        this.#interceptPhase = undefined;
    }
    #emitEvent(getEvent) {
        let event;
        try {
            event = getEvent();
        }
        catch (error) {
            this.#logger?.(LogType.debugError, error);
            return;
        }
        if (this.#isIgnoredEvent() ||
            (this.#emittedEvents[event.method] &&
                // Special case this event can be emitted multiple times
                event.method !== ChromiumBidi.Network.EventNames.AuthRequired)) {
            return;
        }
        this.#phaseChanged();
        this.#emittedEvents[event.method] = true;
        if (this.#context) {
            this.#eventManager.registerEvent(Object.assign(event, {
                type: 'event',
            }), this.#context);
        }
        else {
            this.#eventManager.registerGlobalEvent(Object.assign(event, {
                type: 'event',
            }));
        }
    }
    #getBaseEventParams(phase) {
        const interceptProps = {
            isBlocked: false,
        };
        if (phase) {
            const blockedBy = this.#interceptsInPhase(phase);
            interceptProps.isBlocked = blockedBy.size > 0;
            if (interceptProps.isBlocked) {
                interceptProps.intercepts = [...blockedBy];
            }
        }
        return {
            context: this.#context,
            navigation: this.#navigationId,
            redirectCount: this.#redirectCount,
            request: this.#getRequestData(),
            // Timestamp should be in milliseconds, while CDP provides it in seconds.
            timestamp: Math.round(getTiming(this.#request.info?.wallTime) * 1000),
            // Contains isBlocked and intercepts
            ...interceptProps,
        };
    }
    #getResponseEventParams() {
        // Chromium sends wrong extraInfo events for responses served from cache.
        // See https://github.com/puppeteer/puppeteer/issues/9965 and
        // https://crbug.com/1340398.
        if (this.#response.info?.fromDiskCache) {
            this.#response.extraInfo = undefined;
        }
        // TODO: Also this.#response.paused?.responseHeaders have to be merged here.
        const cdpHeaders = this.#response.info?.headers ?? {};
        const cdpRawHeaders = this.#response.extraInfo?.headers ?? {};
        for (const [key, value] of Object.entries(cdpRawHeaders)) {
            cdpHeaders[key] = value;
        }
        const headers = bidiNetworkHeadersFromCdpNetworkHeaders(cdpHeaders);
        const authChallenges = this.#authChallenges;
        const response = {
            url: this.url,
            protocol: this.#response.info?.protocol ?? '',
            status: this.#statusCode ?? -1, // TODO: Throw an exception or use some other status code?
            statusText: this.#response.info?.statusText ||
                this.#response.paused?.responseStatusText ||
                '',
            fromCache: this.#response.info?.fromDiskCache ||
                this.#response.info?.fromPrefetchCache ||
                this.#servedFromCache,
            headers: this.#responseOverrides?.headers ?? headers,
            mimeType: this.#response.info?.mimeType || '',
            // TODO: this should be the size for the entire HTTP response.
            bytesReceived: this.encodedResponseBodySize,
            headersSize: computeHeadersSize(headers),
            bodySize: this.encodedResponseBodySize,
            content: {
                size: this.#response.decodedSize ?? 0,
            },
            ...(authChallenges ? { authChallenges } : {}),
        };
        return {
            ...response,
            'goog:securityDetails': this.#response.info?.securityDetails,
        };
    }
    get encodedResponseBodySize() {
        return (this.#response.loadingFinished?.encodedDataLength ??
            this.#response.info?.encodedDataLength ??
            this.#response.encodedSize ??
            0);
    }
    #getRequestData() {
        const headers = this.#requestHeaders;
        const request = {
            request: this.#id,
            url: this.url,
            method: this.#method ?? _a.unknownParameter,
            headers,
            cookies: this.#cookies,
            headersSize: computeHeadersSize(headers),
            bodySize: this.bodySize,
            // TODO: populate
            destination: this.#getDestination(),
            // TODO: populate
            initiatorType: this.#getInitiatorType(),
            timings: this.#timings,
        };
        return {
            ...request,
            'goog:postData': this.#request.info?.request?.postData,
            'goog:hasPostData': this.#request.info?.request?.hasPostData,
            'goog:resourceType': this.#request.info?.type,
            'goog:resourceInitiator': this.#request.info?.initiator,
        };
    }
    /**
     * Heuristic trying to guess the destination.
     * Specification: https://fetch.spec.whatwg.org/#concept-request-destination.
     * Specified values: "audio", "audioworklet", "document", "embed", "font", "frame",
     * "iframe", "image", "json", "manifest", "object", "paintworklet", "report", "script",
     * "serviceworker", "sharedworker", "style", "track", "video", "webidentity", "worker",
     * "xslt".
     */
    #getDestination() {
        switch (this.#request.info?.type) {
            case 'Script':
                return 'script';
            case 'Stylesheet':
                return 'style';
            case 'Image':
                return 'image';
            case 'Document':
                // If request to document is initiated by parser, assume it is expected to
                // arrive in an iframe. Otherwise, consider it is a navigation and the request
                // result will end up in the document.
                return this.#request.info?.initiator.type === 'parser'
                    ? 'iframe'
                    : 'document';
            default:
                return '';
        }
    }
    /**
     * Heuristic trying to guess the initiator type.
     * Specification: https://fetch.spec.whatwg.org/#request-initiator-type.
     * Specified values: "audio", "beacon", "body", "css", "early-hints", "embed", "fetch",
     * "font", "frame", "iframe", "image", "img", "input", "link", "object", "ping",
     * "script", "track", "video", "xmlhttprequest", "other".
     */
    #getInitiatorType() {
        if (this.#request.info?.initiator.type === 'parser') {
            switch (this.#request.info?.type) {
                case 'Document':
                    // The request to document is initiated by the parser. Assuming it's an iframe.
                    return 'iframe';
                case 'Font':
                    // If the document's url is not the parser's url, assume the resource is loaded
                    // from css. Otherwise, it's a `font` element.
                    return this.#request.info?.initiator?.url ===
                        this.#request.info?.documentURL
                        ? 'font'
                        : 'css';
                case 'Image':
                    // If the document's url is not the parser's url, assume the resource is loaded
                    // from css. Otherwise, it's a `img` element.
                    return this.#request.info?.initiator?.url ===
                        this.#request.info?.documentURL
                        ? 'img'
                        : 'css';
                case 'Script':
                    return 'script';
                case 'Stylesheet':
                    return 'link';
                default:
                    return null;
            }
        }
        if (this.#request?.info?.type === 'Fetch') {
            return 'fetch';
        }
        return null;
    }
    #getBeforeRequestEvent() {
        assert(this.#request.info, 'RequestWillBeSentEvent is not set');
        return {
            method: ChromiumBidi.Network.EventNames.BeforeRequestSent,
            params: {
                ...this.#getBaseEventParams("beforeRequestSent" /* Network.InterceptPhase.BeforeRequestSent */),
                initiator: {
                    type: _a.#getInitiator(this.#request.info.initiator.type),
                    columnNumber: this.#request.info.initiator.columnNumber,
                    lineNumber: this.#request.info.initiator.lineNumber,
                    stackTrace: this.#request.info.initiator.stack,
                    request: this.#request.info.initiator.requestId,
                },
            },
        };
    }
    #getResponseStartedEvent() {
        return {
            method: ChromiumBidi.Network.EventNames.ResponseStarted,
            params: {
                ...this.#getBaseEventParams("responseStarted" /* Network.InterceptPhase.ResponseStarted */),
                response: this.#getResponseEventParams(),
            },
        };
    }
    #getResponseReceivedEvent() {
        return {
            method: ChromiumBidi.Network.EventNames.ResponseCompleted,
            params: {
                ...this.#getBaseEventParams(),
                response: this.#getResponseEventParams(),
            },
        };
    }
    #isIgnoredEvent() {
        const faviconUrl = '/favicon.ico';
        return (this.#request.paused?.request.url.endsWith(faviconUrl) ??
            this.#request.info?.request.url.endsWith(faviconUrl) ??
            false);
    }
    #getOverrideHeader(headers, cookies) {
        if (!headers && !cookies) {
            return undefined;
        }
        let overrideHeaders = headers;
        const cookieHeader = networkHeaderFromCookieHeaders(cookies);
        if (cookieHeader && !overrideHeaders) {
            overrideHeaders = this.#requestHeaders;
        }
        if (cookieHeader && overrideHeaders) {
            overrideHeaders.filter((header) => header.name.localeCompare('cookie', undefined, {
                sensitivity: 'base',
            }) !== 0);
            overrideHeaders.push(cookieHeader);
        }
        return overrideHeaders;
    }
    static #getInitiator(initiatorType) {
        switch (initiatorType) {
            case 'parser':
            case 'script':
            case 'preflight':
                return initiatorType;
            default:
                return 'other';
        }
    }
}
_a = NetworkRequest;
function getCdpBodyFromBiDiBytesValue(body) {
    let parsedBody;
    if (body?.type === 'string') {
        parsedBody = stringToBase64(body.value);
    }
    else if (body?.type === 'base64') {
        parsedBody = body.value;
    }
    return parsedBody;
}
function getSizeFromBiDiBytesValue(body) {
    if (body?.type === 'string') {
        return body.value.length;
    }
    else if (body?.type === 'base64') {
        return atob(body.value).length;
    }
    return 0;
}
//# sourceMappingURL=NetworkRequest.js.map