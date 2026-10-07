/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {CdpHTTPRequest} from './HTTPRequest.js';

/**
 * @internal
 */
export interface QueuedEventGroup {
  responseReceivedEvent: Protocol.Network.ResponseReceivedEvent;
  loadingFinishedEvent?: Protocol.Network.LoadingFinishedEvent;
  loadingFailedEvent?: Protocol.Network.LoadingFailedEvent;
}

/**
 * @internal
 */
export type FetchRequestId = string;

/**
 * @internal
 */
export interface RedirectInfo {
  event: Protocol.Network.RequestWillBeSentEvent;
  fetchRequestId?: FetchRequestId;
}
type RedirectInfoList = RedirectInfo[];

/**
 * @internal
 */
export type NetworkRequestId = string;

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
  #requestWillBeSentMap = new Map<
    NetworkRequestId,
    Protocol.Network.RequestWillBeSentEvent
  >();
  #requestPausedMap = new Map<
    NetworkRequestId,
    Protocol.Fetch.RequestPausedEvent
  >();
  #httpRequestsMap = new Map<NetworkRequestId, CdpHTTPRequest>();
  #requestWillBeSentExtraInfoMap = new Map<
    NetworkRequestId,
    Protocol.Network.RequestWillBeSentExtraInfoEvent[]
  >();
  /*
   * The below maps are used to reconcile Network.responseReceivedExtraInfo
   * events with their corresponding request. Each response and redirect
   * response gets an ExtraInfo event, and we don't know which will come first.
   * This means that we have to store a Response or an ExtraInfo for each
   * response, and emit the event when we get both of them. In addition, to
   * handle redirects, we have to make them Arrays to represent the chain of
   * events.
   */
  #responseReceivedExtraInfoMap = new Map<
    NetworkRequestId,
    Protocol.Network.ResponseReceivedExtraInfoEvent[]
  >();
  #queuedRedirectInfoMap = new Map<NetworkRequestId, RedirectInfoList>();
  #queuedEventGroupMap = new Map<NetworkRequestId, QueuedEventGroup>();

  forget(networkRequestId: NetworkRequestId): void {
    this.#requestWillBeSentMap.delete(networkRequestId);
    this.#requestPausedMap.delete(networkRequestId);
    this.#requestWillBeSentExtraInfoMap.delete(networkRequestId);
    this.#queuedEventGroupMap.delete(networkRequestId);
    this.#queuedRedirectInfoMap.delete(networkRequestId);
    this.#responseReceivedExtraInfoMap.delete(networkRequestId);
  }

  requestExtraInfo(
    networkRequestId: NetworkRequestId,
  ): Protocol.Network.RequestWillBeSentExtraInfoEvent[] {
    if (!this.#requestWillBeSentExtraInfoMap.has(networkRequestId)) {
      this.#requestWillBeSentExtraInfoMap.set(networkRequestId, []);
    }
    return this.#requestWillBeSentExtraInfoMap.get(
      networkRequestId,
    ) as Protocol.Network.RequestWillBeSentExtraInfoEvent[];
  }

  responseExtraInfo(
    networkRequestId: NetworkRequestId,
  ): Protocol.Network.ResponseReceivedExtraInfoEvent[] {
    if (!this.#responseReceivedExtraInfoMap.has(networkRequestId)) {
      this.#responseReceivedExtraInfoMap.set(networkRequestId, []);
    }
    return this.#responseReceivedExtraInfoMap.get(
      networkRequestId,
    ) as Protocol.Network.ResponseReceivedExtraInfoEvent[];
  }

  private queuedRedirectInfo(fetchRequestId: FetchRequestId): RedirectInfoList {
    if (!this.#queuedRedirectInfoMap.has(fetchRequestId)) {
      this.#queuedRedirectInfoMap.set(fetchRequestId, []);
    }
    return this.#queuedRedirectInfoMap.get(fetchRequestId) as RedirectInfoList;
  }

  queueRedirectInfo(
    fetchRequestId: FetchRequestId,
    redirectInfo: RedirectInfo,
  ): void {
    this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
  }

  takeQueuedRedirectInfo(
    fetchRequestId: FetchRequestId,
  ): RedirectInfo | undefined {
    return this.queuedRedirectInfo(fetchRequestId).shift();
  }

  inFlightRequestsCount(): number {
    let inFlightRequestCounter = 0;
    for (const request of this.#httpRequestsMap.values()) {
      if (!request.response()) {
        inFlightRequestCounter++;
      }
    }
    return inFlightRequestCounter;
  }

  storeRequestWillBeSent(
    networkRequestId: NetworkRequestId,
    event: Protocol.Network.RequestWillBeSentEvent,
  ): void {
    this.#requestWillBeSentMap.set(networkRequestId, event);
  }

  getRequestWillBeSent(
    networkRequestId: NetworkRequestId,
  ): Protocol.Network.RequestWillBeSentEvent | undefined {
    return this.#requestWillBeSentMap.get(networkRequestId);
  }

  forgetRequestWillBeSent(networkRequestId: NetworkRequestId): void {
    this.#requestWillBeSentMap.delete(networkRequestId);
  }

  getRequestPaused(
    networkRequestId: NetworkRequestId,
  ): Protocol.Fetch.RequestPausedEvent | undefined {
    return this.#requestPausedMap.get(networkRequestId);
  }

  forgetRequestPaused(networkRequestId: NetworkRequestId): void {
    this.#requestPausedMap.delete(networkRequestId);
  }

  storeRequestPaused(
    networkRequestId: NetworkRequestId,
    event: Protocol.Fetch.RequestPausedEvent,
  ): void {
    this.#requestPausedMap.set(networkRequestId, event);
  }

  getRequest(networkRequestId: NetworkRequestId): CdpHTTPRequest | undefined {
    return this.#httpRequestsMap.get(networkRequestId);
  }

  storeRequest(
    networkRequestId: NetworkRequestId,
    request: CdpHTTPRequest,
  ): void {
    this.#httpRequestsMap.set(networkRequestId, request);
  }

  forgetRequest(networkRequestId: NetworkRequestId): void {
    this.#httpRequestsMap.delete(networkRequestId);
  }

  getQueuedEventGroup(
    networkRequestId: NetworkRequestId,
  ): QueuedEventGroup | undefined {
    return this.#queuedEventGroupMap.get(networkRequestId);
  }

  queueEventGroup(
    networkRequestId: NetworkRequestId,
    event: QueuedEventGroup,
  ): void {
    this.#queuedEventGroupMap.set(networkRequestId, event);
  }

  forgetQueuedEventGroup(networkRequestId: NetworkRequestId): void {
    this.#queuedEventGroupMap.delete(networkRequestId);
  }

  printState(): void {
    function replacer(_key: unknown, value: unknown) {
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()), // or with spread: value: [...value]
        };
      } else if (value instanceof CdpHTTPRequest) {
        return {
          dataType: 'CdpHTTPRequest',
          value: `${value.id}: ${value.url()}`,
        };
      }
      {
        return value;
      }
    }
    console.log(
      'httpRequestsMap',
      JSON.stringify(this.#httpRequestsMap, replacer, 2),
    );
    console.log(
      'requestWillBeSentMap',
      JSON.stringify(this.#requestWillBeSentMap, replacer, 2),
    );
    console.log(
      'requestWillBeSentMap',
      JSON.stringify(this.#responseReceivedExtraInfoMap, replacer, 2),
    );
    console.log(
      'requestWillBeSentMap',
      JSON.stringify(this.#requestPausedMap, replacer, 2),
    );
  }
}
