/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import { CdpHTTPRequest } from './HTTPRequest.js';
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
/**
 * @internal
 */
export type NetworkRequestId = string;
/**
 * Helper class to track network events by request ID
 *
 * @internal
 */
export declare class NetworkEventManager {
    #private;
    forget(networkRequestId: NetworkRequestId): void;
    requestExtraInfo(networkRequestId: NetworkRequestId): Protocol.Network.RequestWillBeSentExtraInfoEvent[];
    responseExtraInfo(networkRequestId: NetworkRequestId): Protocol.Network.ResponseReceivedExtraInfoEvent[];
    private queuedRedirectInfo;
    queueRedirectInfo(fetchRequestId: FetchRequestId, redirectInfo: RedirectInfo): void;
    takeQueuedRedirectInfo(fetchRequestId: FetchRequestId): RedirectInfo | undefined;
    inFlightRequestsCount(): number;
    storeRequestWillBeSent(networkRequestId: NetworkRequestId, event: Protocol.Network.RequestWillBeSentEvent): void;
    getRequestWillBeSent(networkRequestId: NetworkRequestId): Protocol.Network.RequestWillBeSentEvent | undefined;
    forgetRequestWillBeSent(networkRequestId: NetworkRequestId): void;
    getRequestPaused(networkRequestId: NetworkRequestId): Protocol.Fetch.RequestPausedEvent | undefined;
    forgetRequestPaused(networkRequestId: NetworkRequestId): void;
    storeRequestPaused(networkRequestId: NetworkRequestId, event: Protocol.Fetch.RequestPausedEvent): void;
    getRequest(networkRequestId: NetworkRequestId): CdpHTTPRequest | undefined;
    storeRequest(networkRequestId: NetworkRequestId, request: CdpHTTPRequest): void;
    forgetRequest(networkRequestId: NetworkRequestId): void;
    getQueuedEventGroup(networkRequestId: NetworkRequestId): QueuedEventGroup | undefined;
    queueEventGroup(networkRequestId: NetworkRequestId, event: QueuedEventGroup): void;
    forgetQueuedEventGroup(networkRequestId: NetworkRequestId): void;
    printState(): void;
}
//# sourceMappingURL=NetworkEventManager.d.ts.map