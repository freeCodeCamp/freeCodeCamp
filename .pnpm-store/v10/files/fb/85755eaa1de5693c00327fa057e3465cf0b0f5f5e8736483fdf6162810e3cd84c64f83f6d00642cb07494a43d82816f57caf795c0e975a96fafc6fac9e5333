/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { FrameEvent } from '../api/Frame.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { NetworkManagerEvent } from '../common/NetworkManagerEvents.js';
import { assert } from '../util/assert.js';
import { Deferred } from '../util/Deferred.js';
import { DisposableStack } from '../util/disposable.js';
import { FrameManagerEvent } from './FrameManagerEvents.js';
const puppeteerToProtocolLifecycle = new Map([
    ['load', 'load'],
    ['domcontentloaded', 'DOMContentLoaded'],
    ['networkidle0', 'networkIdle'],
    ['networkidle2', 'networkAlmostIdle'],
]);
/**
 * @internal
 */
export class LifecycleWatcher {
    #expectedLifecycle;
    #frame;
    #timeout;
    #navigationRequest = null;
    #subscriptions = new DisposableStack();
    #initialLoaderId;
    #terminationDeferred;
    #sameDocumentNavigationDeferred = Deferred.create();
    #lifecycleDeferred = Deferred.create();
    #newDocumentNavigationDeferred = Deferred.create();
    #error = new Error('LifecycleWatcher terminated');
    #hasSameDocumentNavigation;
    #swapped;
    #navigationResponseReceived;
    constructor(networkManager, frame, waitUntil, timeout, signal) {
        if (Array.isArray(waitUntil)) {
            waitUntil = waitUntil.slice();
        }
        else if (typeof waitUntil === 'string') {
            waitUntil = [waitUntil];
        }
        this.#initialLoaderId = frame._loaderId;
        this.#expectedLifecycle = waitUntil.map(value => {
            const protocolEvent = puppeteerToProtocolLifecycle.get(value);
            assert(protocolEvent, 'Unknown value for options.waitUntil: ' + value);
            return protocolEvent;
        });
        signal?.addEventListener('abort', () => {
            if (signal.reason instanceof Error) {
                signal.reason.cause = this.#error;
            }
            this.#terminationDeferred.reject(signal.reason);
        });
        this.#frame = frame;
        this.#timeout = timeout;
        const frameManagerEmitter = this.#subscriptions.use(new EventEmitter(frame._frameManager));
        frameManagerEmitter.on(FrameManagerEvent.LifecycleEvent, this.#checkLifecycleComplete.bind(this));
        const frameEmitter = this.#subscriptions.use(new EventEmitter(frame));
        frameEmitter.on(FrameEvent.FrameNavigatedWithinDocument, this.#navigatedWithinDocument.bind(this));
        frameEmitter.on(FrameEvent.FrameNavigated, this.#navigated.bind(this));
        frameEmitter.on(FrameEvent.FrameSwapped, this.#frameSwapped.bind(this));
        frameEmitter.on(FrameEvent.FrameSwappedByActivation, this.#frameSwapped.bind(this));
        frameEmitter.on(FrameEvent.FrameDetached, this.#onFrameDetached.bind(this));
        const networkManagerEmitter = this.#subscriptions.use(new EventEmitter(networkManager));
        networkManagerEmitter.on(NetworkManagerEvent.Request, this.#onRequest.bind(this));
        networkManagerEmitter.on(NetworkManagerEvent.Response, this.#onResponse.bind(this));
        networkManagerEmitter.on(NetworkManagerEvent.RequestFailed, this.#onRequestFailed.bind(this));
        this.#terminationDeferred = Deferred.create({
            timeout: this.#timeout,
            message: `Navigation timeout of ${this.#timeout} ms exceeded`,
        });
        this.#checkLifecycleComplete();
    }
    #onRequest(request) {
        if (request.frame() !== this.#frame || !request.isNavigationRequest()) {
            return;
        }
        this.#navigationRequest = request;
        // Resolve previous navigation response in case there are multiple
        // navigation requests reported by the backend. This generally should not
        // happen by it looks like it's possible.
        this.#navigationResponseReceived?.resolve();
        this.#navigationResponseReceived = Deferred.create();
        if (request.response() !== null) {
            this.#navigationResponseReceived?.resolve();
        }
    }
    #onRequestFailed(request) {
        if (this.#navigationRequest?.id !== request.id) {
            return;
        }
        this.#navigationResponseReceived?.resolve();
    }
    #onResponse(response) {
        if (this.#navigationRequest?.id !== response.request().id) {
            return;
        }
        this.#navigationResponseReceived?.resolve();
    }
    #onFrameDetached(frame) {
        if (this.#frame === frame) {
            this.#error.message = 'Navigating frame was detached';
            this.#terminationDeferred.resolve(this.#error);
            return;
        }
        this.#checkLifecycleComplete();
    }
    async navigationResponse() {
        // Continue with a possibly null response.
        await this.#navigationResponseReceived?.valueOrThrow();
        return this.#navigationRequest ? this.#navigationRequest.response() : null;
    }
    sameDocumentNavigationPromise() {
        return this.#sameDocumentNavigationDeferred.valueOrThrow();
    }
    newDocumentNavigationPromise() {
        return this.#newDocumentNavigationDeferred.valueOrThrow();
    }
    lifecyclePromise() {
        return this.#lifecycleDeferred.valueOrThrow();
    }
    terminationPromise() {
        return this.#terminationDeferred.valueOrThrow();
    }
    #navigatedWithinDocument() {
        this.#hasSameDocumentNavigation = true;
        this.#checkLifecycleComplete();
    }
    #navigated(navigationType) {
        if (navigationType === 'BackForwardCacheRestore') {
            return this.#frameSwapped();
        }
        this.#checkLifecycleComplete();
    }
    #frameSwapped() {
        this.#swapped = true;
        this.#checkLifecycleComplete();
    }
    #checkLifecycleComplete() {
        // We expect navigation to commit.
        if (!checkLifecycle(this.#frame, this.#expectedLifecycle)) {
            return;
        }
        this.#lifecycleDeferred.resolve();
        if (this.#hasSameDocumentNavigation) {
            this.#sameDocumentNavigationDeferred.resolve(undefined);
        }
        if (this.#swapped || this.#frame._loaderId !== this.#initialLoaderId) {
            this.#newDocumentNavigationDeferred.resolve(undefined);
        }
        function checkLifecycle(frame, expectedLifecycle) {
            for (const event of expectedLifecycle) {
                if (!frame._lifecycleEvents.has(event)) {
                    return false;
                }
            }
            for (const child of frame.childFrames()) {
                if (child._hasStartedLoading &&
                    !checkLifecycle(child, expectedLifecycle)) {
                    return false;
                }
            }
            return true;
        }
    }
    dispose() {
        this.#subscriptions.dispose();
        this.#error.cause = new Error('LifecycleWatcher disposed');
        this.#terminationDeferred.resolve(this.#error);
    }
}
//# sourceMappingURL=LifecycleWatcher.js.map