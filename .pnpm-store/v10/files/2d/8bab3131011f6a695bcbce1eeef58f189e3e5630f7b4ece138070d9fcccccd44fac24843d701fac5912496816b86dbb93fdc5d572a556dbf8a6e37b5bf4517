/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type Protocol from 'devtools-protocol';

import {type Frame, FrameEvent} from '../api/Frame.js';
import type {HTTPRequest} from '../api/HTTPRequest.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';
import type {TimeoutError} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {NetworkManagerEvent} from '../common/NetworkManagerEvents.js';
import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';
import {DisposableStack} from '../util/disposable.js';

import type {CdpFrame} from './Frame.js';
import {FrameManagerEvent} from './FrameManagerEvents.js';
import type {NetworkManager} from './NetworkManager.js';

/**
 * @public
 */
export type PuppeteerLifeCycleEvent =
  /**
   * Waits for the 'load' event.
   */
  | 'load'
  /**
   * Waits for the 'DOMContentLoaded' event.
   */
  | 'domcontentloaded'
  /**
   * Waits till there are no more than 0 network connections for at least `500`
   * ms.
   */
  | 'networkidle0'
  /**
   * Waits till there are no more than 2 network connections for at least `500`
   * ms.
   */
  | 'networkidle2';

/**
 * @public
 */
export type ProtocolLifeCycleEvent =
  | 'load'
  | 'DOMContentLoaded'
  | 'networkIdle'
  | 'networkAlmostIdle';

const puppeteerToProtocolLifecycle = new Map<
  PuppeteerLifeCycleEvent,
  ProtocolLifeCycleEvent
>([
  ['load', 'load'],
  ['domcontentloaded', 'DOMContentLoaded'],
  ['networkidle0', 'networkIdle'],
  ['networkidle2', 'networkAlmostIdle'],
]);

/**
 * @internal
 */
export class LifecycleWatcher {
  #expectedLifecycle: ProtocolLifeCycleEvent[];
  #frame: CdpFrame;
  #timeout: number;
  #navigationRequest: HTTPRequest | null = null;
  #subscriptions = new DisposableStack();
  #initialLoaderId: string;

  #terminationDeferred: Deferred<Error>;
  #sameDocumentNavigationDeferred = Deferred.create<undefined>();
  #lifecycleDeferred = Deferred.create<void>();
  #newDocumentNavigationDeferred = Deferred.create<undefined>();
  #error = new Error('LifecycleWatcher terminated');

  #hasSameDocumentNavigation?: boolean;
  #swapped?: boolean;

  #navigationResponseReceived?: Deferred<void>;

  constructor(
    networkManager: NetworkManager,
    frame: CdpFrame,
    waitUntil: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[],
    timeout: number,
    signal?: AbortSignal,
  ) {
    if (Array.isArray(waitUntil)) {
      waitUntil = waitUntil.slice();
    } else if (typeof waitUntil === 'string') {
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
    const frameManagerEmitter = this.#subscriptions.use(
      new EventEmitter(frame._frameManager),
    );
    frameManagerEmitter.on(
      FrameManagerEvent.LifecycleEvent,
      this.#checkLifecycleComplete.bind(this),
    );

    const frameEmitter = this.#subscriptions.use(new EventEmitter(frame));
    frameEmitter.on(
      FrameEvent.FrameNavigatedWithinDocument,
      this.#navigatedWithinDocument.bind(this),
    );
    frameEmitter.on(FrameEvent.FrameNavigated, this.#navigated.bind(this));
    frameEmitter.on(FrameEvent.FrameSwapped, this.#frameSwapped.bind(this));
    frameEmitter.on(
      FrameEvent.FrameSwappedByActivation,
      this.#frameSwapped.bind(this),
    );
    frameEmitter.on(FrameEvent.FrameDetached, this.#onFrameDetached.bind(this));

    const networkManagerEmitter = this.#subscriptions.use(
      new EventEmitter(networkManager),
    );
    networkManagerEmitter.on(
      NetworkManagerEvent.Request,
      this.#onRequest.bind(this),
    );
    networkManagerEmitter.on(
      NetworkManagerEvent.Response,
      this.#onResponse.bind(this),
    );
    networkManagerEmitter.on(
      NetworkManagerEvent.RequestFailed,
      this.#onRequestFailed.bind(this),
    );

    this.#terminationDeferred = Deferred.create<Error>({
      timeout: this.#timeout,
      message: `Navigation timeout of ${this.#timeout} ms exceeded`,
    });

    this.#checkLifecycleComplete();
  }

  #onRequest(request: HTTPRequest): void {
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

  #onRequestFailed(request: HTTPRequest): void {
    if (this.#navigationRequest?.id !== request.id) {
      return;
    }
    this.#navigationResponseReceived?.resolve();
  }

  #onResponse(response: HTTPResponse): void {
    if (this.#navigationRequest?.id !== response.request().id) {
      return;
    }
    this.#navigationResponseReceived?.resolve();
  }

  #onFrameDetached(frame: Frame): void {
    if (this.#frame === frame) {
      this.#error.message = 'Navigating frame was detached';
      this.#terminationDeferred.resolve(this.#error);
      return;
    }
    this.#checkLifecycleComplete();
  }

  async navigationResponse(): Promise<HTTPResponse | null> {
    // Continue with a possibly null response.
    await this.#navigationResponseReceived?.valueOrThrow();
    return this.#navigationRequest ? this.#navigationRequest.response() : null;
  }

  sameDocumentNavigationPromise(): Promise<Error | undefined> {
    return this.#sameDocumentNavigationDeferred.valueOrThrow();
  }

  newDocumentNavigationPromise(): Promise<Error | undefined> {
    return this.#newDocumentNavigationDeferred.valueOrThrow();
  }

  lifecyclePromise(): Promise<void> {
    return this.#lifecycleDeferred.valueOrThrow();
  }

  terminationPromise(): Promise<Error | TimeoutError | undefined> {
    return this.#terminationDeferred.valueOrThrow();
  }

  #navigatedWithinDocument(): void {
    this.#hasSameDocumentNavigation = true;
    this.#checkLifecycleComplete();
  }

  #navigated(navigationType: Protocol.Page.NavigationType): void {
    if (navigationType === 'BackForwardCacheRestore') {
      return this.#frameSwapped();
    }
    this.#checkLifecycleComplete();
  }

  #frameSwapped(): void {
    this.#swapped = true;
    this.#checkLifecycleComplete();
  }

  #checkLifecycleComplete(): void {
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

    function checkLifecycle(
      frame: CdpFrame,
      expectedLifecycle: ProtocolLifeCycleEvent[],
    ): boolean {
      for (const event of expectedLifecycle) {
        if (!frame._lifecycleEvents.has(event)) {
          return false;
        }
      }
      for (const child of frame.childFrames()) {
        if (
          child._hasStartedLoading &&
          !checkLifecycle(child, expectedLifecycle)
        ) {
          return false;
        }
      }
      return true;
    }
  }

  dispose(): void {
    this.#subscriptions.dispose();
    this.#error.cause = new Error('LifecycleWatcher disposed');
    this.#terminationDeferred.resolve(this.#error);
  }
}
