/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { CdpHTTPRequest } from './HTTPRequest.js';
/**
 * Helper class to track network events by request ID
 *
 * @internal
 */
export class NetworkEventManager {
    /**
     * There are four possible orders of events:
     * A. `_onRequestWillBeSent`
     * B. `_onRequestWillBeSent`, `_onRequestPaused`
     * C. `_onRequestPaused`, `_onRequestWillBeSent`
     * D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
     * (see crbug.com/1196004)
     *
     * For `_onRequest` we need the event from `_onRequestWillBeSent` and
     * optionally the `interceptionId` from `_onRequestPaused`.
     *
     * If request interception is disabled, call `_onRequest` once per call to
     * `_onRequestWillBeSent`.
     * If request interception is enabled, call `_onRequest` once per call to
     * `_onRequestPaused` (once per `interceptionId`).
     *
     * Events are stored to allow for subsequent events to call `_onRequest`.
     *
     * Note that (chains of) redirect requests have the same `requestId` (!) as
     * the original request. We have to anticipate series of events like these:
     * A. `_onRequestWillBeSent`,
     * `_onRequestWillBeSent`, ...
     * B. `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestWillBeSent`, `_onRequestPaused`, ...
     * C. `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestPaused`, `_onRequestWillBeSent`, ...
     * D. `_onRequestPaused`, `_onRequestWillBeSent`,
     * `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
     * (see crbug.com/1196004)
     */
    #requestWillBeSentMap = new Map();
    #requestPausedMap = new Map();
    #httpRequestsMap = new Map();
    #requestWillBeSentExtraInfoMap = new Map();
    /*
     * The below maps are used to reconcile Network.responseReceivedExtraInfo
     * events with their corresponding request. Each response and redirect
     * response gets an ExtraInfo event, and we don't know which will come first.
     * This means that we have to store a Response or an ExtraInfo for each
     * response, and emit the event when we get both of them. In addition, to
     * handle redirects, we have to make them Arrays to represent the chain of
     * events.
     */
    #responseReceivedExtraInfoMap = new Map();
    #queuedRedirectInfoMap = new Map();
    #queuedEventGroupMap = new Map();
    forget(networkRequestId) {
        this.#requestWillBeSentMap.delete(networkRequestId);
        this.#requestPausedMap.delete(networkRequestId);
        this.#requestWillBeSentExtraInfoMap.delete(networkRequestId);
        this.#queuedEventGroupMap.delete(networkRequestId);
        this.#queuedRedirectInfoMap.delete(networkRequestId);
        this.#responseReceivedExtraInfoMap.delete(networkRequestId);
    }
    requestExtraInfo(networkRequestId) {
        if (!this.#requestWillBeSentExtraInfoMap.has(networkRequestId)) {
            this.#requestWillBeSentExtraInfoMap.set(networkRequestId, []);
        }
        return this.#requestWillBeSentExtraInfoMap.get(networkRequestId);
    }
    responseExtraInfo(networkRequestId) {
        if (!this.#responseReceivedExtraInfoMap.has(networkRequestId)) {
            this.#responseReceivedExtraInfoMap.set(networkRequestId, []);
        }
        return this.#responseReceivedExtraInfoMap.get(networkRequestId);
    }
    queuedRedirectInfo(fetchRequestId) {
        if (!this.#queuedRedirectInfoMap.has(fetchRequestId)) {
            this.#queuedRedirectInfoMap.set(fetchRequestId, []);
        }
        return this.#queuedRedirectInfoMap.get(fetchRequestId);
    }
    queueRedirectInfo(fetchRequestId, redirectInfo) {
        this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
    }
    takeQueuedRedirectInfo(fetchRequestId) {
        return this.queuedRedirectInfo(fetchRequestId).shift();
    }
    inFlightRequestsCount() {
        let inFlightRequestCounter = 0;
        for (const request of this.#httpRequestsMap.values()) {
            if (!request.response()) {
                inFlightRequestCounter++;
            }
        }
        return inFlightRequestCounter;
    }
    storeRequestWillBeSent(networkRequestId, event) {
        this.#requestWillBeSentMap.set(networkRequestId, event);
    }
    getRequestWillBeSent(networkRequestId) {
        return this.#requestWillBeSentMap.get(networkRequestId);
    }
    forgetRequestWillBeSent(networkRequestId) {
        this.#requestWillBeSentMap.delete(networkRequestId);
    }
    getRequestPaused(networkRequestId) {
        return this.#requestPausedMap.get(networkRequestId);
    }
    forgetRequestPaused(networkRequestId) {
        this.#requestPausedMap.delete(networkRequestId);
    }
    storeRequestPaused(networkRequestId, event) {
        this.#requestPausedMap.set(networkRequestId, event);
    }
    getRequest(networkRequestId) {
        return this.#httpRequestsMap.get(networkRequestId);
    }
    storeRequest(networkRequestId, request) {
        this.#httpRequestsMap.set(networkRequestId, request);
    }
    forgetRequest(networkRequestId) {
        this.#httpRequestsMap.delete(networkRequestId);
    }
    getQueuedEventGroup(networkRequestId) {
        return this.#queuedEventGroupMap.get(networkRequestId);
    }
    queueEventGroup(networkRequestId, event) {
        this.#queuedEventGroupMap.set(networkRequestId, event);
    }
    forgetQueuedEventGroup(networkRequestId) {
        this.#queuedEventGroupMap.delete(networkRequestId);
    }
    printState() {
        function replacer(_key, value) {
            if (value instanceof Map) {
                return {
                    dataType: 'Map',
                    value: Array.from(value.entries()), // or with spread: value: [...value]
                };
            }
            else if (value instanceof CdpHTTPRequest) {
                return {
                    dataType: 'CdpHTTPRequest',
                    value: `${value.id}: ${value.url()}`,
                };
            }
            {
                return value;
            }
        }
        console.log('httpRequestsMap', JSON.stringify(this.#httpRequestsMap, replacer, 2));
        console.log('requestWillBeSentMap', JSON.stringify(this.#requestWillBeSentMap, replacer, 2));
        console.log('requestWillBeSentMap', JSON.stringify(this.#responseReceivedExtraInfoMap, replacer, 2));
        console.log('requestWillBeSentMap', JSON.stringify(this.#requestPausedMap, replacer, 2));
    }
}
//# sourceMappingURL=NetworkEventManager.js.map