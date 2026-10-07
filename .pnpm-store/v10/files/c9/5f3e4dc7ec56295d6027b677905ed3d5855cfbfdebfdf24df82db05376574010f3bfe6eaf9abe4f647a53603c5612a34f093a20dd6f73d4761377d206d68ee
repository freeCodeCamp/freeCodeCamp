/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { CDPSessionEvent } from '../api/CDPSession.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { NetworkManagerEvent, } from '../common/NetworkManagerEvents.js';
import { debugError, isString } from '../common/util.js';
import { assert } from '../util/assert.js';
import { DisposableStack } from '../util/disposable.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { isTargetClosedError } from './Connection.js';
import { CdpHTTPRequest } from './HTTPRequest.js';
import { CdpHTTPResponse } from './HTTPResponse.js';
import { NetworkEventManager, } from './NetworkEventManager.js';
/**
 * @internal
 */
export class NetworkManager extends EventEmitter {
    #frameManager;
    #networkEventManager = new NetworkEventManager();
    #extraHTTPHeaders;
    #credentials = null;
    #attemptedAuthentications = new Set();
    #userRequestInterceptionEnabled = false;
    #protocolRequestInterceptionEnabled;
    #userCacheDisabled;
    #emulatedNetworkConditions;
    #userAgent;
    #userAgentMetadata;
    #platform;
    #handlers = [
        ['Fetch.requestPaused', this.#onRequestPaused],
        ['Fetch.authRequired', this.#onAuthRequired],
        ['Network.requestWillBeSent', this.#onRequestWillBeSent],
        ['Network.requestWillBeSentExtraInfo', this.#onRequestWillBeSentExtraInfo],
        ['Network.requestServedFromCache', this.#onRequestServedFromCache],
        ['Network.responseReceived', this.#onResponseReceived],
        ['Network.loadingFinished', this.#onLoadingFinished],
        ['Network.loadingFailed', this.#onLoadingFailed],
        ['Network.responseReceivedExtraInfo', this.#onResponseReceivedExtraInfo],
        [CDPSessionEvent.Disconnected, this.#removeClient],
    ];
    #clients = new Map();
    #networkEnabled = true;
    constructor(frameManager, networkEnabled) {
        super();
        this.#frameManager = frameManager;
        this.#networkEnabled = networkEnabled ?? true;
    }
    #canIgnoreError(error) {
        return (isErrorLike(error) &&
            (isTargetClosedError(error) ||
                error.message.includes('Not supported') ||
                error.message.includes("wasn't found")));
    }
    async addClient(client) {
        if (!this.#networkEnabled || this.#clients.has(client)) {
            return;
        }
        const subscriptions = new DisposableStack();
        this.#clients.set(client, subscriptions);
        const clientEmitter = subscriptions.use(new EventEmitter(client));
        for (const [event, handler] of this.#handlers) {
            clientEmitter.on(event, (arg) => {
                return handler.bind(this)(client, arg);
            });
        }
        try {
            await Promise.all([
                client.send('Network.enable'),
                this.#applyExtraHTTPHeaders(client),
                this.#applyNetworkConditions(client),
                this.#applyProtocolCacheDisabled(client),
                this.#applyProtocolRequestInterception(client),
                this.#applyUserAgent(client),
            ]);
        }
        catch (error) {
            if (this.#canIgnoreError(error)) {
                return;
            }
            throw error;
        }
    }
    async #removeClient(client) {
        this.#clients.get(client)?.dispose();
        this.#clients.delete(client);
    }
    async authenticate(credentials) {
        this.#credentials = credentials;
        const enabled = this.#userRequestInterceptionEnabled || !!this.#credentials;
        if (enabled === this.#protocolRequestInterceptionEnabled) {
            return;
        }
        this.#protocolRequestInterceptionEnabled = enabled;
        await this.#applyToAllClients(this.#applyProtocolRequestInterception.bind(this));
    }
    async setExtraHTTPHeaders(headers) {
        const extraHTTPHeaders = {};
        for (const [key, value] of Object.entries(headers)) {
            assert(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
            extraHTTPHeaders[key.toLowerCase()] = value;
        }
        this.#extraHTTPHeaders = extraHTTPHeaders;
        await this.#applyToAllClients(this.#applyExtraHTTPHeaders.bind(this));
    }
    async #applyExtraHTTPHeaders(client) {
        if (this.#extraHTTPHeaders === undefined) {
            return;
        }
        try {
            await client.send('Network.setExtraHTTPHeaders', {
                headers: this.#extraHTTPHeaders,
            });
        }
        catch (error) {
            if (this.#canIgnoreError(error)) {
                return;
            }
            throw error;
        }
    }
    extraHTTPHeaders() {
        return Object.assign({}, this.#extraHTTPHeaders);
    }
    inFlightRequestsCount() {
        return this.#networkEventManager.inFlightRequestsCount();
    }
    async setOfflineMode(value) {
        if (!this.#emulatedNetworkConditions) {
            this.#emulatedNetworkConditions = {
                offline: false,
                upload: -1,
                download: -1,
                latency: 0,
            };
        }
        this.#emulatedNetworkConditions.offline = value;
        await this.#applyToAllClients(this.#applyNetworkConditions.bind(this));
    }
    async emulateNetworkConditions(networkConditions) {
        if (!this.#emulatedNetworkConditions) {
            this.#emulatedNetworkConditions = {
                offline: networkConditions?.offline ?? false,
                upload: -1,
                download: -1,
                latency: 0,
            };
        }
        this.#emulatedNetworkConditions.upload = networkConditions
            ? networkConditions.upload
            : -1;
        this.#emulatedNetworkConditions.download = networkConditions
            ? networkConditions.download
            : -1;
        this.#emulatedNetworkConditions.latency = networkConditions
            ? networkConditions.latency
            : 0;
        this.#emulatedNetworkConditions.offline =
            networkConditions?.offline ?? false;
        await this.#applyToAllClients(this.#applyNetworkConditions.bind(this));
    }
    async #applyToAllClients(fn) {
        await Promise.all(Array.from(this.#clients.keys()).map(client => {
            return fn(client);
        }));
    }
    async #applyNetworkConditions(client) {
        if (this.#emulatedNetworkConditions === undefined) {
            return;
        }
        try {
            await client.send('Network.emulateNetworkConditions', {
                offline: this.#emulatedNetworkConditions.offline,
                latency: this.#emulatedNetworkConditions.latency,
                uploadThroughput: this.#emulatedNetworkConditions.upload,
                downloadThroughput: this.#emulatedNetworkConditions.download,
            });
        }
        catch (error) {
            if (this.#canIgnoreError(error)) {
                return;
            }
            throw error;
        }
    }
    async setUserAgent(userAgent, userAgentMetadata, platform) {
        this.#userAgent = userAgent;
        this.#userAgentMetadata = userAgentMetadata;
        this.#platform = platform;
        await this.#applyToAllClients(this.#applyUserAgent.bind(this));
    }
    async #applyUserAgent(client) {
        if (this.#userAgent === undefined) {
            return;
        }
        try {
            await client.send('Network.setUserAgentOverride', {
                userAgent: this.#userAgent,
                userAgentMetadata: this.#userAgentMetadata,
                platform: this.#platform,
            });
        }
        catch (error) {
            if (this.#canIgnoreError(error)) {
                return;
            }
            throw error;
        }
    }
    async setCacheEnabled(enabled) {
        this.#userCacheDisabled = !enabled;
        await this.#applyToAllClients(this.#applyProtocolCacheDisabled.bind(this));
    }
    async setRequestInterception(value) {
        this.#userRequestInterceptionEnabled = value;
        const enabled = this.#userRequestInterceptionEnabled || !!this.#credentials;
        if (enabled === this.#protocolRequestInterceptionEnabled) {
            return;
        }
        this.#protocolRequestInterceptionEnabled = enabled;
        await this.#applyToAllClients(this.#applyProtocolRequestInterception.bind(this));
    }
    async #applyProtocolRequestInterception(client) {
        if (this.#protocolRequestInterceptionEnabled === undefined) {
            return;
        }
        if (this.#userCacheDisabled === undefined) {
            this.#userCacheDisabled = false;
        }
        try {
            if (this.#protocolRequestInterceptionEnabled) {
                await Promise.all([
                    this.#applyProtocolCacheDisabled(client),
                    client.send('Fetch.enable', {
                        handleAuthRequests: true,
                        patterns: [{ urlPattern: '*' }],
                    }),
                ]);
            }
            else {
                await Promise.all([
                    this.#applyProtocolCacheDisabled(client),
                    client.send('Fetch.disable'),
                ]);
            }
        }
        catch (error) {
            if (this.#canIgnoreError(error)) {
                return;
            }
            throw error;
        }
    }
    async #applyProtocolCacheDisabled(client) {
        if (this.#userCacheDisabled === undefined) {
            return;
        }
        try {
            await client.send('Network.setCacheDisabled', {
                cacheDisabled: this.#userCacheDisabled,
            });
        }
        catch (error) {
            if (this.#canIgnoreError(error)) {
                return;
            }
            throw error;
        }
    }
    #onRequestWillBeSent(client, event) {
        // Request interception doesn't happen for data URLs with Network Service.
        if (this.#userRequestInterceptionEnabled &&
            !event.request.url.startsWith('data:')) {
            const { requestId: networkRequestId } = event;
            this.#networkEventManager.storeRequestWillBeSent(networkRequestId, event);
            /**
             * CDP may have sent a Fetch.requestPaused event already. Check for it.
             */
            const requestPausedEvent = this.#networkEventManager.getRequestPaused(networkRequestId);
            if (requestPausedEvent) {
                const { requestId: fetchRequestId } = requestPausedEvent;
                this.#patchRequestEventHeaders(event, requestPausedEvent);
                this.#onRequest(client, event, fetchRequestId);
                this.#networkEventManager.forgetRequestPaused(networkRequestId);
            }
            return;
        }
        this.#onRequest(client, event, undefined);
    }
    #onAuthRequired(client, event) {
        let response = 'Default';
        if (this.#attemptedAuthentications.has(event.requestId)) {
            response = 'CancelAuth';
        }
        else if (this.#credentials) {
            response = 'ProvideCredentials';
            this.#attemptedAuthentications.add(event.requestId);
        }
        const { username, password } = this.#credentials || {
            username: undefined,
            password: undefined,
        };
        client
            .send('Fetch.continueWithAuth', {
            requestId: event.requestId,
            authChallengeResponse: { response, username, password },
        })
            .catch(debugError);
    }
    /**
     * CDP may send a Fetch.requestPaused without or before a
     * Network.requestWillBeSent
     *
     * CDP may send multiple Fetch.requestPaused
     * for the same Network.requestWillBeSent.
     */
    #onRequestPaused(client, event) {
        if (!this.#userRequestInterceptionEnabled &&
            this.#protocolRequestInterceptionEnabled) {
            client
                .send('Fetch.continueRequest', {
                requestId: event.requestId,
            })
                .catch(debugError);
        }
        const { networkId: networkRequestId, requestId: fetchRequestId } = event;
        if (!networkRequestId) {
            this.#onRequestWithoutNetworkInstrumentation(client, event);
            return;
        }
        const requestWillBeSentEvent = (() => {
            const requestWillBeSentEvent = this.#networkEventManager.getRequestWillBeSent(networkRequestId);
            // redirect requests have the same `requestId`,
            if (requestWillBeSentEvent &&
                (requestWillBeSentEvent.request.url !== event.request.url ||
                    requestWillBeSentEvent.request.method !== event.request.method)) {
                this.#networkEventManager.forgetRequestWillBeSent(networkRequestId);
                return;
            }
            return requestWillBeSentEvent;
        })();
        if (requestWillBeSentEvent) {
            this.#patchRequestEventHeaders(requestWillBeSentEvent, event);
            this.#onRequest(client, requestWillBeSentEvent, fetchRequestId);
        }
        else {
            this.#networkEventManager.storeRequestPaused(networkRequestId, event);
        }
    }
    #patchRequestEventHeaders(requestWillBeSentEvent, requestPausedEvent) {
        requestWillBeSentEvent.request.headers = {
            ...requestWillBeSentEvent.request.headers,
            // includes extra headers, like: Accept, Origin
            ...requestPausedEvent.request.headers,
        };
    }
    #onRequestWithoutNetworkInstrumentation(client, event) {
        // If an event has no networkId it should not have any network events. We
        // still want to dispatch it for the interception by the user.
        const frame = event.frameId
            ? this.#frameManager.frame(event.frameId)
            : null;
        const request = new CdpHTTPRequest(client, frame, event.requestId, this.#userRequestInterceptionEnabled, event, []);
        this.emit(NetworkManagerEvent.Request, request);
        void request.finalizeInterceptions();
    }
    #onRequest(client, event, fetchRequestId, fromMemoryCache = false) {
        let redirectChain = [];
        if (event.redirectResponse) {
            // We want to emit a response and requestfinished for the
            // redirectResponse, but we can't do so unless we have a
            // responseExtraInfo ready to pair it up with. If we don't have any
            // responseExtraInfos saved in our queue, they we have to wait until
            // the next one to emit response and requestfinished, *and* we should
            // also wait to emit this Request too because it should come after the
            // response/requestfinished.
            let redirectResponseExtraInfo = null;
            if (event.redirectHasExtraInfo) {
                redirectResponseExtraInfo = this.#networkEventManager
                    .responseExtraInfo(event.requestId)
                    .shift();
                if (!redirectResponseExtraInfo) {
                    this.#networkEventManager.queueRedirectInfo(event.requestId, {
                        event,
                        fetchRequestId,
                    });
                    return;
                }
            }
            const request = this.#networkEventManager.getRequest(event.requestId);
            // If we connect late to the target, we could have missed the
            // requestWillBeSent event.
            if (request) {
                this.#handleRequestRedirect(client, request, event.redirectResponse, redirectResponseExtraInfo);
                redirectChain = request._redirectChain;
                const extraInfo = this.#networkEventManager
                    .requestExtraInfo(event.requestId)
                    .shift();
                if (extraInfo) {
                    request.updateHeaders(extraInfo.headers);
                }
            }
        }
        const frame = event.frameId
            ? this.#frameManager.frame(event.frameId)
            : null;
        const request = new CdpHTTPRequest(client, frame, fetchRequestId, this.#userRequestInterceptionEnabled, event, redirectChain);
        const extraInfo = this.#networkEventManager
            .requestExtraInfo(event.requestId)
            .shift();
        if (extraInfo) {
            request.updateHeaders(extraInfo.headers);
        }
        request._fromMemoryCache = fromMemoryCache;
        this.#networkEventManager.storeRequest(event.requestId, request);
        this.emit(NetworkManagerEvent.Request, request);
        void request.finalizeInterceptions();
    }
    #onRequestWillBeSentExtraInfo(_client, event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
        if (request) {
            request.updateHeaders(event.headers);
        }
        else {
            this.#networkEventManager.requestExtraInfo(event.requestId).push(event);
        }
    }
    #onRequestServedFromCache(client, event) {
        const requestWillBeSentEvent = this.#networkEventManager.getRequestWillBeSent(event.requestId);
        let request = this.#networkEventManager.getRequest(event.requestId);
        // Requests served from memory cannot be intercepted.
        if (request) {
            request._fromMemoryCache = true;
        }
        // If request ended up being served from cache, we need to convert
        // requestWillBeSentEvent to a HTTP request.
        if (!request && requestWillBeSentEvent) {
            this.#onRequest(client, requestWillBeSentEvent, undefined, true);
            request = this.#networkEventManager.getRequest(event.requestId);
        }
        if (!request) {
            debugError(new Error(`Request ${event.requestId} was served from cache but we could not find the corresponding request object`));
            return;
        }
        this.emit(NetworkManagerEvent.RequestServedFromCache, request);
    }
    #handleRequestRedirect(_client, request, responsePayload, extraInfo) {
        const response = new CdpHTTPResponse(request, responsePayload, extraInfo);
        request._response = response;
        request._redirectChain.push(request);
        response._resolveBody(new Error('Response body is unavailable for redirect responses'));
        this.#forgetRequest(request, false);
        this.emit(NetworkManagerEvent.Response, response);
        this.emit(NetworkManagerEvent.RequestFinished, request);
    }
    #emitResponseEvent(_client, responseReceived, extraInfo) {
        const request = this.#networkEventManager.getRequest(responseReceived.requestId);
        // FileUpload sends a response without a matching request.
        if (!request) {
            return;
        }
        const extraInfos = this.#networkEventManager.responseExtraInfo(responseReceived.requestId);
        if (extraInfos.length) {
            debugError(new Error('Unexpected extraInfo events for request ' +
                responseReceived.requestId));
        }
        // Chromium sends wrong extraInfo events for responses served from cache.
        // See https://github.com/puppeteer/puppeteer/issues/9965 and
        // https://crbug.com/1340398.
        if (responseReceived.response.fromDiskCache) {
            extraInfo = null;
        }
        const response = new CdpHTTPResponse(request, responseReceived.response, extraInfo);
        request._response = response;
        this.emit(NetworkManagerEvent.Response, response);
    }
    #onResponseReceived(client, event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
        let extraInfo = null;
        if (request && !request._fromMemoryCache && event.hasExtraInfo) {
            extraInfo = this.#networkEventManager
                .responseExtraInfo(event.requestId)
                .shift();
            if (!extraInfo) {
                // Wait until we get the corresponding ExtraInfo event.
                this.#networkEventManager.queueEventGroup(event.requestId, {
                    responseReceivedEvent: event,
                });
                return;
            }
        }
        this.#emitResponseEvent(client, event, extraInfo);
    }
    #onResponseReceivedExtraInfo(client, event) {
        // We may have skipped a redirect response/request pair due to waiting for
        // this ExtraInfo event. If so, continue that work now that we have the
        // request.
        const redirectInfo = this.#networkEventManager.takeQueuedRedirectInfo(event.requestId);
        if (redirectInfo) {
            this.#networkEventManager.responseExtraInfo(event.requestId).push(event);
            this.#onRequest(client, redirectInfo.event, redirectInfo.fetchRequestId);
            return;
        }
        // We may have skipped response and loading events because we didn't have
        // this ExtraInfo event yet. If so, emit those events now.
        const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
        if (queuedEvents) {
            this.#networkEventManager.forgetQueuedEventGroup(event.requestId);
            this.#emitResponseEvent(client, queuedEvents.responseReceivedEvent, event);
            if (queuedEvents.loadingFinishedEvent) {
                this.#emitLoadingFinished(client, queuedEvents.loadingFinishedEvent);
            }
            if (queuedEvents.loadingFailedEvent) {
                this.#emitLoadingFailed(client, queuedEvents.loadingFailedEvent);
            }
            return;
        }
        // Wait until we get another event that can use this ExtraInfo event.
        this.#networkEventManager.responseExtraInfo(event.requestId).push(event);
    }
    #forgetRequest(request, events) {
        const requestId = request.id;
        const interceptionId = request._interceptionId;
        this.#networkEventManager.forgetRequest(requestId);
        if (interceptionId !== undefined) {
            this.#attemptedAuthentications.delete(interceptionId);
        }
        if (events) {
            this.#networkEventManager.forget(requestId);
        }
    }
    #onLoadingFinished(client, event) {
        // If the response event for this request is still waiting on a
        // corresponding ExtraInfo event, then wait to emit this event too.
        const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
        if (queuedEvents) {
            queuedEvents.loadingFinishedEvent = event;
        }
        else {
            this.#emitLoadingFinished(client, event);
        }
    }
    #emitLoadingFinished(client, event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
        // For certain requestIds we never receive requestWillBeSent event.
        // @see https://crbug.com/750469
        if (!request) {
            return;
        }
        this.#adoptCdpSessionIfNeeded(client, request);
        // Under certain conditions we never get the Network.responseReceived
        // event from protocol. @see https://crbug.com/883475
        if (request.response()) {
            request.response()?._resolveBody();
        }
        this.#forgetRequest(request, true);
        this.emit(NetworkManagerEvent.RequestFinished, request);
    }
    #onLoadingFailed(client, event) {
        // If the response event for this request is still waiting on a
        // corresponding ExtraInfo event, then wait to emit this event too.
        const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
        if (queuedEvents) {
            queuedEvents.loadingFailedEvent = event;
        }
        else {
            this.#emitLoadingFailed(client, event);
        }
    }
    #emitLoadingFailed(client, event) {
        const request = this.#networkEventManager.getRequest(event.requestId);
        // For certain requestIds we never receive requestWillBeSent event.
        // @see https://crbug.com/750469
        if (!request) {
            return;
        }
        this.#adoptCdpSessionIfNeeded(client, request);
        request._failureText = event.errorText;
        const response = request.response();
        if (response) {
            response._resolveBody();
        }
        this.#forgetRequest(request, true);
        this.emit(NetworkManagerEvent.RequestFailed, request);
    }
    #adoptCdpSessionIfNeeded(client, request) {
        // Document requests for OOPIFs start in the parent frame but are
        // adopted by their child frame, meaning their loadingFinished and
        // loadingFailed events are fired on the child session. In this case
        // we reassign the request CDPSession to ensure all subsequent
        // actions use the correct session (e.g. retrieving response body in
        // HTTPResponse). The same applies to main worker script requests.
        if (client !== request.client) {
            request.client = client;
        }
    }
}
//# sourceMappingURL=NetworkManager.js.map